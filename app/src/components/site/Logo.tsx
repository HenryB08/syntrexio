import { Link, useRouterState } from "@tanstack/react-router";

// Single clean lockup: icon-only swirl glyph (no baked-in text) + one SYNTREX
// wordmark. The previous mark image had "SYNTREX" baked in, which doubled the
// name next to the wordmark span.
export function Logo({ className = "", compact = false }: { className?: string; compact?: boolean }) {
  // The nav/footer live in the persistent root shell and never remount on a
  // client-side route change, so the one-shot logo-spin-once animation would
  // only ever play on the first full load. Keying the mark on the current path
  // remounts just the image on every route entry, replaying the spin as a
  // quick, tasteful transition. The src is cached, so there is no flicker or
  // added latency to content render.
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <Link to="/" className={`group inline-flex items-center gap-2.5 ${className}`}>
      <img
        key={pathname}
        src="/logo-mark.png"
        alt="Syntrex"
        width={compact ? 32 : 40}
        height={compact ? 32 : 40}
        className={`logo-swirl ${compact ? "h-8 w-8" : "h-10 w-10"} shrink-0 object-contain transition-transform duration-300 group-hover:scale-105`}
        style={{ filter: "drop-shadow(0 0 8px oklch(1 0 0 / 20%))" }}
      />
      {!compact && (
        <span className="text-[15px] font-semibold uppercase tracking-[0.22em] text-foreground">
          Syntrex
        </span>
      )}
    </Link>
  );
}
