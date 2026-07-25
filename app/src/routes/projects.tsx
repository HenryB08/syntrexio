import { createFileRoute, Link } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { ArrowRight, Cookie, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { Icon3D } from "@/components/site/Icon3D";
import { MagneticButton } from "@/components/site/MagneticButton";

const TITLE = "Projects Syntrex";
const DESC =
  "A selection of work: automation systems shipped for operators who count every lead.";

export const Route = createFileRoute("/projects")({
  head: () => pageHead("/projects"),
  component: Projects,
});

const projects = [
  {
    icon: Flame,
    client: "HALT! Fire",
    sector: "Industrial fire suppression",
    summary:
      "A full rebuild. Syntrex replaced scattered manual work with one sales automation system across chat, SMS, voice, and follow-up, reporting into a monthly Receipt. The team stopped chasing leads by hand and started closing them.",
    stats: [
      { v: "10+", l: "hours saved weekly" },
      { v: "280%", l: "search growth" },
    ],
  },
  {
    icon: Cookie,
    client: "Doughbrik's Wavers",
    sector: "Consumer snack brand founded by David Dobrik",
    summary:
      "Syntrex built the internal automation that ran ops, fulfillment, and customer flow as one system, so the team moved faster and stayed in control as the brand scaled into retail.",
    stats: [
      { v: "3×", l: "faster workflows" },
      { v: "1", l: "unified system" },
    ],
  },
];

function Projects() {
  return (
    <>
      <PageHero
        variant="mosaic"
        eyebrow="Case studies"
        title="Proof, not promises."
        description="We publish only what our clients let us. Two engagements, two full builds, measured by outcomes rather than adjectives."
      />

      <Section>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.client} delay={i * 100}>
              <article className="surface-card surface-card-hover group flex h-full flex-col p-8">
                <div className="flex items-center gap-4">
                  <Icon3D icon={p.icon} size={48} iconSize={22} />
                  <div>
                    <div className="text-eyebrow">{p.sector}</div>
                    <div className="mt-1 text-lg font-semibold text-foreground">
                      {p.client}
                    </div>
                  </div>
                </div>
                <p className="mt-6 text-sm text-muted-foreground">{p.summary}</p>
                <div className="mt-auto grid grid-cols-2 gap-4 border-t border-hairline pt-6 mt-8">
                  {p.stats.map((s) => (
                    <div key={s.l}>
                      <div className="text-display text-3xl text-foreground">{s.v}</div>
                      <div className="text-xs text-muted-foreground">{s.l}</div>
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-t border-hairline text-center">
        <Reveal>
          <h2 className="text-display mx-auto max-w-2xl text-3xl text-foreground md:text-5xl">
            Want results like these?
          </h2>
          <div className="mt-8">
            <MagneticButton>
              <Button asChild size="xl" variant="accent">
                <Link to="/leak-audit">
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