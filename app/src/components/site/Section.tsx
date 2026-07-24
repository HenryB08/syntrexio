import type { ReactNode } from "react";

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-20 md:py-28 ${className}`}>
      <div className="container-page">{children}</div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow ? <div className="text-eyebrow mb-4">{eyebrow}</div> : null}
      <h2 className="text-display text-3xl text-foreground md:text-5xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-base text-muted-foreground md:text-lg">{description}</p>
      ) : null}
    </div>
  );
}