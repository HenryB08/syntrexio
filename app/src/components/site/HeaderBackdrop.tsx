export type HeaderVariant =
  | "grid"
  | "radar"
  | "mosaic"
  | "worldmap"
  | "converge"
  | "scanline";

/**
 * Distinct animated hero backdrops per inner page. Monochrome only.
 * All effects pure CSS; each respects prefers-reduced-motion via styles.css.
 */
export function HeaderBackdrop({ variant }: { variant: HeaderVariant }) {
  if (variant === "grid") {
    return (
      <div aria-hidden className="hb-root">
        <div className="hb-grid" />
        <div className="hb-vignette" />
      </div>
    );
  }
  if (variant === "radar") {
    return (
      <div aria-hidden className="hb-root">
        <div className="hb-radar">
          <span /><span /><span /><span /><span />
        </div>
        <div className="hb-vignette" />
      </div>
    );
  }
  if (variant === "mosaic") {
    return (
      <div aria-hidden className="hb-root">
        <div className="hb-mosaic">
          {Array.from({ length: 14 }).map((_, i) => (
            <span key={i} style={{ ["--i" as never]: i }} />
          ))}
        </div>
        <div className="hb-vignette" />
      </div>
    );
  }
  if (variant === "worldmap") {
    return (
      <div aria-hidden className="hb-root">
        <div className="hb-dotmap" />
        <div className="hb-dotmap-sweep" />
        <div className="hb-vignette" />
      </div>
    );
  }
  if (variant === "converge") {
    return (
      <div aria-hidden className="hb-root">
        <div className="hb-converge">
          {Array.from({ length: 14 }).map((_, i) => (
            <span key={i} style={{ ["--i" as never]: i, ["--r" as never]: `${(i * 360) / 14}deg` }} />
          ))}
        </div>
        <div className="hb-vignette" />
      </div>
    );
  }
  // scanline
  return (
    <div aria-hidden className="hb-root">
      <div className="hb-noise" />
      <div className="hb-scanline" />
      <div className="hb-vignette" />
    </div>
  );
}