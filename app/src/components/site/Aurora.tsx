import { useEffect, useState } from "react";

/**
 * Aurora: full-bleed slow-flowing luminous ribbons.
 * Pure CSS + transforms/opacity. GPU-friendly. Monochrome white/grey on black.
 * Variants control intensity; `rich` for hero, `soft`/`whisper` elsewhere.
 */
export function Aurora({
  variant = "rich",
  className = "",
}: {
  variant?: "rich" | "soft" | "whisper";
  className?: string;
}) {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const on = () => setReduced(mq.matches);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);

  const intensity =
    variant === "rich" ? 1 : variant === "soft" ? 0.55 : 0.32;

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      style={{ ["--aurora-i" as never]: intensity }}
    >
      {/* deep base wash */}
      <div className="absolute inset-0 aurora-base" />
      {!reduced && (
        <>
          <div className="absolute inset-[-20%] aurora-ribbon aurora-ribbon-1" />
          <div className="absolute inset-[-20%] aurora-ribbon aurora-ribbon-2" />
          <div className="absolute inset-[-20%] aurora-ribbon aurora-ribbon-3" />
          {variant === "rich" && (
            <div className="absolute inset-[-20%] aurora-ribbon aurora-ribbon-4" />
          )}
        </>
      )}
      {/* grain / vignette to preserve text contrast */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 45%, transparent 0%, rgba(10,10,10,0.55) 60%, rgba(10,10,10,0.9) 100%)",
        }}
      />
    </div>
  );
}