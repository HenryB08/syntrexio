import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Globe, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeader } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { MagneticButton } from "@/components/site/MagneticButton";

const TITLE = "About — Syntrex";
const DESC =
  "Syntrex is an AI automation company headquartered in Windermere, Florida, serving clients worldwide.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
  }),
  component: About,
});

const facts = [
  { icon: MapPin, label: "Headquartered", value: "Windermere, FL — Greater Orlando" },
  { icon: Globe, label: "Clients", value: "Served worldwide" },
  { icon: Users, label: "Team", value: "Operators, engineers, storytellers" },
];

const team: { name: string; role: string; initials: string; photo?: string }[] = [
  { name: "Henry", role: "Founder & Operator", initials: "H" },
  { name: "Automation Lead", role: "Systems & AI", initials: "A" },
  { name: "Brand Lead", role: "Design & Story", initials: "B" },
];

function About() {
  return (
    <>
      <PageHero
        variant="worldmap"
        eyebrow="About Syntrex"
        title="We build the AI layer your business needs to stop losing leads."
        description="Syntrex is a small team of operators and engineers headquartered in Windermere, Florida, in the greater Orlando area. We build the automation that turns inquiries into revenue — for clients worldwide."
      />

      <Section>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {facts.map((f, i) => (
            <Reveal key={f.label} delay={i * 80}>
              <div className="surface-card surface-card-hover p-6">
                <div className="grid h-10 w-10 place-items-center rounded-lg border border-hairline bg-background text-accent">
                  <f.icon size={16} />
                </div>
                <div className="text-eyebrow mt-5">{f.label}</div>
                <div className="mt-1.5 text-lg font-semibold text-foreground">
                  {f.value}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-t border-hairline bg-surface/20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <SectionHeader eyebrow="Our story" title="Built by operators, for operators." />
          </Reveal>
          <Reveal delay={100}>
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              <p>
                Syntrex started with a simple observation: most small businesses
                lose more revenue in a month to unanswered inquiries than they
                spend on marketing in a year. The tools exist. Nobody was
                stitching them into a real system.
              </p>
              <p>
                We built one. The Growth System captures every lead the moment
                it appears, then works it until it books or dies. The monthly
                Receipt shows the math — because you shouldn't have to trust
                us, you should be able to count.
              </p>
              <p>
                We work with a small number of clients at a time, from
                industrial specialists to creator-founded brands, and we back
                every engagement with a written guarantee.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section>
        <Reveal>
          <SectionHeader eyebrow="Team" title="A small, senior team." />
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 100}>
              <article className="surface-card surface-card-hover group overflow-hidden p-0">
                <div className="brand-photo aspect-[4/3] w-full">
                  {m.photo ? (
                    <img src={m.photo} alt={m.name} loading="lazy" />
                  ) : (
                    <div
                      className="absolute inset-0 grid place-items-center text-4xl font-semibold text-foreground/70"
                      style={{
                        backgroundImage:
                          "radial-gradient(circle at 35% 35%, oklch(1 0 0 / 10%), transparent 55%), radial-gradient(circle at 70% 75%, oklch(1 0 0 / 5%), transparent 60%)",
                      }}
                    >
                      {m.initials}
                    </div>
                  )}
                </div>
                <div className="p-6" data-parallax="text">
                  <div className="text-[15px] font-semibold text-foreground">
                    {m.name}
                  </div>
                  <div className="text-sm text-muted-foreground">{m.role}</div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-t border-hairline text-center">
        <Reveal>
          <h2 className="text-display mx-auto max-w-2xl text-3xl text-foreground md:text-5xl">
            Ready to see what you're leaving on the table?
          </h2>
          <div className="mt-8">
            <MagneticButton>
              <Button asChild size="xl" variant="accent">
                <Link to="/free-leak-audit">
                  Get Your Free Leak Audit
                  <ArrowRight />
                </Link>
              </Button>
            </MagneticButton>
          </div>
        </Reveal>
      </Section>
    </>
  );
}