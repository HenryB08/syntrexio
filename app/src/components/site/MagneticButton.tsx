import { useEffect, useRef, type ReactNode } from "react";

/** Wraps a button/link with cursor-magnetic pull. Disabled on reduced motion. */
export function MagneticButton({
  children,
  strength = 0.35,
  radius = 120,
  className = "",
}: {
  children: ReactNode;
  strength?: number;
  radius?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    if (!el) return;
    const target = el.firstElementChild as HTMLElement | null;
    if (!target) return;

    let raf = 0;
    let tx = 0;
    let ty = 0;

    const apply = () => {
      target.style.transform = `translate3d(${tx.toFixed(2)}px, ${ty.toFixed(2)}px, 0)`;
    };

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy);
      if (dist > radius) {
        tx += (0 - tx) * 0.2;
        ty += (0 - ty) * 0.2;
      } else {
        const targetX = dx * strength;
        const targetY = dy * strength;
        tx += (targetX - tx) * 0.2;
        ty += (targetY - ty) * 0.2;
      }
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(apply);
    };
    const onLeave = () => {
      const ease = () => {
        tx += (0 - tx) * 0.18;
        ty += (0 - ty) * 0.18;
        apply();
        if (Math.abs(tx) > 0.1 || Math.abs(ty) > 0.1) raf = requestAnimationFrame(ease);
      };
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(ease);
    };

    target.style.transition = "transform 250ms cubic-bezier(0.22, 1, 0.36, 1)";
    window.addEventListener("pointermove", onMove, { passive: true });
    el.addEventListener("pointerleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, [strength, radius]);

  return (
    <span ref={ref} className={`inline-block ${className}`}>
      {children}
    </span>
  );
}