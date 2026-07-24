import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { Aurora } from "./Aurora";
import { HeaderBackdrop, type HeaderVariant } from "./HeaderBackdrop";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
  variant,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  variant?: HeaderVariant;
}) {
  return (
    <section className="relative overflow-hidden border-b border-hairline">
      <Aurora variant="whisper" />
      {variant ? <HeaderBackdrop variant={variant} /> : null}
      <div className="container-page relative pt-32 pb-16 md:pt-40 md:pb-24">
        <Reveal>
          {eyebrow ? <div className="text-eyebrow mb-5">{eyebrow}</div> : null}
          {typeof title === "string" ? (
            <h1 className="text-display word-rise max-w-3xl text-4xl text-foreground md:text-6xl">
              {title.split(" ").map((w, i) => (
                <span key={`${w}-${i}`} style={{ ["--i" as never]: i }}>
                  {w}
                  {"\u00A0"}
                </span>
              ))}
            </h1>
          ) : (
            <h1 className="text-display max-w-3xl text-4xl text-foreground md:text-6xl">
              {title}
            </h1>
          )}
          {description ? (
            <p className="mt-5 max-w-2xl text-base text-muted-foreground md:text-lg">
              {description}
            </p>
          ) : null}
          {children ? <div className="mt-8">{children}</div> : null}
        </Reveal>
      </div>
    </section>
  );
}