/**
 * Aurora: full-bleed luminous wash behind sections.
 * Static baked gradient (no animation, no blur-filter layer). Keeps the same
 * monochrome white/grey glow colors as the old animated ribbons, but paints
 * into the section's own layer instead of promoting large blurred compositor
 * layers. Variants scale the glow intensity; `rich` for hero, `soft`/`whisper`
 * elsewhere.
 */
export function Aurora({
  variant = "rich",
  className = "",
}: {
  variant?: "rich" | "soft" | "whisper";
  className?: string;
}) {
  const intensity = variant === "rich" ? 1 : variant === "soft" ? 0.55 : 0.32;

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      style={{ ["--aurora-i" as never]: intensity }}
    >
      {/* deep base wash */}
      <div className="absolute inset-0 aurora-base" />
      {/* static baked luminous glow (replaces the animated ribbons) */}
      <div className="absolute inset-0 aurora-glow" />
      {/* vignette to preserve text contrast */}
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
