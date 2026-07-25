import { useEffect, useMemo, useRef, useState } from "react";
import { geoEqualEarth } from "d3-geo";
import landMask from "./land-mask.json";

type LonLat = [number, number];

// Precomputed land bitmap (see land-mask.json, generated once from world-atlas
// land-110m via geoContains). Replaces ~13,500 runtime geoContains calls with an
// O(1) lookup, so the dotted world paints without blocking the main thread.
const MASK_BITS = (() => {
  const b64 = landMask.bits;
  if (typeof atob === "function") {
    const s = atob(b64);
    const u = new Uint8Array(s.length);
    for (let i = 0; i < s.length; i++) u[i] = s.charCodeAt(i);
    return u;
  }
  return Uint8Array.from(Buffer.from(b64, "base64"));
})();

function isLand(lon: number, lat: number): boolean {
  const { cellDeg, cols, rows } = landMask;
  let c = Math.floor((lon + 180) / cellDeg);
  let r = Math.floor((90 - lat) / cellDeg);
  if (c < 0) c = 0;
  else if (c >= cols) c = cols - 1;
  if (r < 0) r = 0;
  else if (r >= rows) r = rows - 1;
  const i = r * cols + c;
  return (MASK_BITS[i >> 3] & (1 << (i & 7))) !== 0;
}

const FLORIDA: LonLat = [-81.6, 28.5];
const DESTINATIONS: { name: string; coord: LonLat; delay: number }[] = [
  { name: "New York", coord: [-74.006, 40.7128], delay: 0 },
  { name: "São Paulo", coord: [-46.6333, -23.5505], delay: 1.1 },
  { name: "London", coord: [-0.1276, 51.5074], delay: 2.2 },
  { name: "Dubai", coord: [55.2708, 25.2048], delay: 3.3 },
  { name: "Tokyo", coord: [139.6917, 35.6895], delay: 4.4 },
  { name: "Sydney", coord: [151.2093, -33.8688], delay: 5.5 },
];

const ARC_DURATION = 1.6; // seconds to draw
const HOLD = 0.8; // hold at destination
const FADE = 1.4; // fade out
const CYCLE = 8; // total loop seconds per arc (staggered)

// Precompute a great-circle-ish arc as sampled points using a lifted midpoint
function arcPoints(
  proj: (p: LonLat) => [number, number] | null,
  from: LonLat,
  to: LonLat,
  steps = 64,
): Array<[number, number]> {
  const a = proj(from);
  const b = proj(to);
  if (!a || !b) return [];
  const [ax, ay] = a;
  const [bx, by] = b;
  const mx = (ax + bx) / 2;
  const my = (ay + by) / 2;
  const dx = bx - ax;
  const dy = by - ay;
  const dist = Math.hypot(dx, dy);
  // Perpendicular lift, scaled by distance
  const nx = -dy / (dist || 1);
  const ny = dx / (dist || 1);
  const lift = Math.min(dist * 0.35, 180);
  const cx = mx + nx * lift;
  const cy = my + ny * lift;
  const pts: Array<[number, number]> = [];
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const x = (1 - t) * (1 - t) * ax + 2 * (1 - t) * t * cx + t * t * bx;
    const y = (1 - t) * (1 - t) * ay + 2 * (1 - t) * t * cy + t * t * by;
    pts.push([x, y]);
  }
  return pts;
}

export function WorldMap({ height = 520 }: { height?: number }) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const dotsRef = useRef<HTMLCanvasElement | null>(null);
  const fxRef = useRef<HTMLCanvasElement | null>(null);
  const [size, setSize] = useState({ w: 1000, h: height });
  const [reduced, setReduced] = useState(false);
  const [near, setNear] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const on = () => setReduced(mq.matches);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);

  // Only draw once the section is near the viewport, so nothing runs on initial
  // page load while the map is far below the fold.
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setNear(true);
          io.disconnect();
        }
      },
      { rootMargin: "600px 0px 600px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Track container width
  useEffect(() => {
    if (!wrapRef.current) return;
    const ro = new ResizeObserver((entries) => {
      for (const e of entries) {
        const w = Math.max(320, Math.floor(e.contentRect.width));
        setSize({ w, h: height });
      }
    });
    ro.observe(wrapRef.current);
    return () => ro.disconnect();
  }, [height]);

  const projection = useMemo(() => {
    const p = geoEqualEarth();
    p.fitSize([size.w, size.h], { type: "Sphere" } as never);
    return p;
  }, [size.w, size.h]);

  // Draw dotted world (static) — bitmap lookup, no geoContains
  useEffect(() => {
    if (!near) return;
    const canvas = dotsRef.current;
    if (!canvas || size.w <= 0 || size.h <= 0) return;
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    canvas.width = size.w * dpr;
    canvas.height = size.h * dpr;
    canvas.style.width = `${size.w}px`;
    canvas.style.height = `${size.h}px`;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, size.w, size.h);

    const step = 7;
    const dotR = 1.15;
    ctx.fillStyle = "rgba(200,200,200,0.55)";
    for (let y = step / 2; y < size.h; y += step) {
      for (let x = step / 2; x < size.w; x += step) {
        const lonlat = projection.invert?.([x, y]);
        if (!lonlat) continue;
        if (isLand(lonlat[0], lonlat[1])) {
          ctx.beginPath();
          ctx.arc(x, y, dotR, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }
  }, [projection, size.w, size.h, near]);

  // Animate arcs
  useEffect(() => {
    if (!near) return;
    const canvas = fxRef.current;
    if (!canvas || size.w <= 0 || size.h <= 0) return;
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    canvas.width = size.w * dpr;
    canvas.height = size.h * dpr;
    canvas.style.width = `${size.w}px`;
    canvas.style.height = `${size.h}px`;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.scale(dpr, dpr);

    const proj = (p: LonLat) => projection(p) as [number, number] | null;
    const origin = proj(FLORIDA);
    const arcs = DESTINATIONS.map((d) => ({
      d,
      pts: arcPoints(proj, FLORIDA, d.coord, 72),
      dest: proj(d.coord),
    }));

    let raf = 0;
    const start = performance.now();

    const draw = (t: number) => {
      ctx.clearRect(0, 0, size.w, size.h);
      // Clamp to >= 0: on the first frame the rAF timestamp can predate `start`,
      // which made the origin pulse radius go negative and throw in arc().
      const elapsed = Math.max(0, (t - start) / 1000);

      // Origin pulse (Florida)
      if (origin) {
        const [ox, oy] = origin;
        const pulseT = (elapsed % 2.4) / 2.4;
        const pr = 3 + pulseT * 22;
        const pa = (1 - pulseT) * 0.5;
        ctx.beginPath();
        ctx.arc(ox, oy, pr, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255,255,255,${pa})`;
        ctx.lineWidth = 1;
        ctx.stroke();
        // core dot
        ctx.beginPath();
        ctx.arc(ox, oy, 3, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255,1)";
        ctx.shadowColor = "rgba(255,255,255,0.9)";
        ctx.shadowBlur = 14;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      for (const a of arcs) {
        if (a.pts.length < 2 || !a.dest) continue;
        const local = (((elapsed - a.d.delay) % CYCLE) + CYCLE) % CYCLE;
        // Phase 1: draw arc (0..ARC_DURATION)
        // Phase 2: hold (ARC_DURATION..ARC_DURATION+HOLD)
        // Phase 3: fade (..+FADE)
        let drawT = 0;
        let alpha = 0;
        let destPulse = 0;
        if (local < ARC_DURATION) {
          drawT = local / ARC_DURATION;
          alpha = 0.85;
        } else if (local < ARC_DURATION + HOLD) {
          drawT = 1;
          alpha = 0.85;
          destPulse = (local - ARC_DURATION) / HOLD;
        } else if (local < ARC_DURATION + HOLD + FADE) {
          drawT = 1;
          const f = (local - ARC_DURATION - HOLD) / FADE;
          alpha = 0.85 * (1 - f);
          destPulse = 1;
        } else {
          continue;
        }

        // Draw partial arc up to drawT
        const upto = Math.max(1, Math.floor(a.pts.length * drawT));
        ctx.beginPath();
        ctx.moveTo(a.pts[0][0], a.pts[0][1]);
        for (let i = 1; i < upto; i++) ctx.lineTo(a.pts[i][0], a.pts[i][1]);
        ctx.strokeStyle = `rgba(255,255,255,${alpha})`;
        ctx.lineWidth = 1.1;
        ctx.shadowColor = `rgba(255,255,255,${alpha * 0.9})`;
        ctx.shadowBlur = 8;
        ctx.stroke();
        ctx.shadowBlur = 0;

        // Leading head glow
        if (drawT < 1) {
          const head = a.pts[upto - 1];
          ctx.beginPath();
          ctx.arc(head[0], head[1], 2.4, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255,255,255,${alpha})`;
          ctx.shadowColor = "rgba(255,255,255,0.9)";
          ctx.shadowBlur = 10;
          ctx.fill();
          ctx.shadowBlur = 0;
        }

        // Destination pulse
        if (destPulse > 0) {
          const [dx, dy] = a.dest;
          const pr = 2 + destPulse * 14;
          const pa = (1 - destPulse) * alpha;
          ctx.beginPath();
          ctx.arc(dx, dy, pr, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(255,255,255,${pa})`;
          ctx.lineWidth = 1;
          ctx.stroke();
          ctx.beginPath();
          ctx.arc(dx, dy, 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255,255,255,${alpha})`;
          ctx.fill();
        }
      }

      raf = requestAnimationFrame(draw);
    };

    if (reduced) {
      // Draw a single static frame with all arcs fully drawn
      ctx.clearRect(0, 0, size.w, size.h);
      if (origin) {
        ctx.beginPath();
        ctx.arc(origin[0], origin[1], 3, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255,1)";
        ctx.fill();
      }
      for (const a of arcs) {
        if (a.pts.length < 2) continue;
        ctx.beginPath();
        ctx.moveTo(a.pts[0][0], a.pts[0][1]);
        for (let i = 1; i < a.pts.length; i++) ctx.lineTo(a.pts[i][0], a.pts[i][1]);
        ctx.strokeStyle = "rgba(255,255,255,0.5)";
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    } else {
      raf = requestAnimationFrame(draw);
    }
    return () => cancelAnimationFrame(raf);
  }, [projection, size.w, size.h, reduced, near]);

  return (
    <div ref={wrapRef} className="relative w-full" style={{ height }}>
      <canvas ref={dotsRef} className="absolute inset-0" />
      <canvas ref={fxRef} className="absolute inset-0" />
    </div>
  );
}
