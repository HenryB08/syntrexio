import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { pageHead } from "@/lib/seo";
import { ArrowRight, Cpu, Flame, Cookie } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { Icon3D } from "@/components/site/Icon3D";

export const Route = createFileRoute("/customers")({
  head: () => pageHead("/customers"),
  component: Work,
});

type CaseStudy = {
  icon: typeof Flame;
  image: string;
  imageAlt: string;
  name: string;
  kind: string;
  challenge: string;
  solution: string;
  result: string;
  metrics: { value: string; label: string }[];
};

const UNSPLASH = "?auto=format&fit=crop&w=1400&h=800&q=80";

// Banner images keep the existing treatment (dark stock + one brand image), with
// the brand icon as an onError fallback (Unsplash may 403 in the sandbox).
const cases: CaseStudy[] = [
  {
    icon: Flame,
    image: "https://images.unsplash.com/photo-1523861751938-121b5323b48b" + UNSPLASH,
    imageAlt: "Large-scale fire against a dark sky, evoking industrial fire suppression",
    name: "HALT Fire",
    kind: "Industrial fire suppression",
    challenge:
      "HALT Fire had a digital presence that did not match the operation. They were hard to find in search, and the team lost hours every week to manual, repetitive work.",
    solution:
      "Syntrex built and now runs the full digital and AI back end: search and content, the website, lead handling, and internal automation, all under one accountable owner.",
    result: "Search visibility grew 280%, and more than ten hours a week came back to the team.",
    metrics: [
      { value: "280%", label: "search growth" },
      { value: "10+", label: "hours a week returned" },
    ],
  },
  {
    icon: Cookie,
    image:
      "https://mcusercontent.com/d9f0645acdcd85eb1ee1a8067/images/45c480e8-9b07-53dc-0733-e5ed3bb5b2f3.png",
    imageAlt: "Doughbrik's Wavers brand imagery",
    name: "Doughbrik's Wavers",
    kind: "Consumer snack brand, founded by creator David Dobrik",
    challenge:
      "Doughbrik's Wavers was scaling into retail with internal workflows that could not keep up with the pace.",
    solution:
      "Syntrex built internal automation and custom tools around how the brand actually operates, removing manual steps as volume grew.",
    result: "Internal workflows run about 3x faster as the brand scales into retail.",
    metrics: [{ value: "3x", label: "faster internal workflows" }],
  },
];

function BannerImage({ c }: { c: CaseStudy }) {
  const [failed, setFailed] = useState(false);
  if (failed)
    return (
      <div className="grid h-full w-full place-items-center">
        <Icon3D icon={c.icon} size={56} iconSize={26} />
      </div>
    );
  return (
    <img
      src={c.image}
      alt={c.imageAlt}
      loading="lazy"
      onError={() => setFailed(true)}
      className="h-full w-full object-cover"
    />
  );
}

function Work() {
  return (
    <>
      <PageHero
        variant="mosaic"
        eyebrow="Work"
        title="The work, and what it produced."
        description="A look at what running a company's back end end to end actually produces. Every number here is a verified result from a real engagement."
      >
        <Button asChild size="lg" variant="accent">
          <Link to="/diagnostic">
            Start the diagnostic
            <ArrowRight />
          </Link>
        </Button>
      </PageHero>

      {cases.map((c, i) => (
        <Section key={c.name} className={i > 0 ? "border-t border-hairline" : ""}>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <div className="brand-photo aspect-[16/10] w-full overflow-hidden rounded-xl surface-card p-0">
                <BannerImage c={c} />
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div>
                <div className="text-eyebrow">{c.kind}</div>
                <h2 className="mt-2 text-display text-3xl text-foreground md:text-4xl">{c.name}</h2>

                <dl className="mt-6 space-y-5">
                  <div>
                    <dt className="text-eyebrow mb-1">Challenge</dt>
                    <dd className="text-sm leading-relaxed text-muted-foreground md:text-base">
                      {c.challenge}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-eyebrow mb-1">Solution</dt>
                    <dd className="text-sm leading-relaxed text-muted-foreground md:text-base">
                      {c.solution}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-eyebrow mb-1">Result</dt>
                    <dd className="text-sm leading-relaxed text-foreground md:text-base">
                      {c.result}
                    </dd>
                  </div>
                </dl>

                <div className="mt-6 flex flex-wrap gap-4">
                  {c.metrics.map((m) => (
                    <div key={m.label} className="surface-card px-5 py-4">
                      <div className="text-display text-2xl text-foreground">{m.value}</div>
                      <div className="mt-1 text-xs text-muted-foreground">{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* Quote (pending): no approved client quote exists in the repo yet.
                    Clearly marked placeholder, flagged in DECISIONS.md and the report. */}
                <div className="mt-6 rounded-lg border border-dashed border-hairline bg-surface/30 p-4">
                  <div className="text-eyebrow mb-1">Quote (pending)</div>
                  <p className="text-sm text-muted-foreground/80">
                    A client quote from {c.name} can slot in here once approved.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </Section>
      ))}

      {/* PARTNER */}
      <Section className="border-t border-hairline bg-surface/20">
        <Reveal>
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
            <Icon3D icon={Cpu} size={48} iconSize={22} />
            <div className="text-eyebrow">Partner</div>
            <h2 className="text-display text-2xl text-foreground md:text-3xl">Kinetix</h2>
            <p className="text-sm text-muted-foreground md:text-base">
              Kinetix is a technology partner Syntrex works alongside on delivery.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* CTA */}
      <Section className="border-t border-hairline text-center">
        <Reveal>
          <h2 className="text-display mx-auto max-w-2xl text-3xl text-foreground md:text-5xl">
            Want results like these?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Start with the diagnostic and see exactly where the back end of your business is leaking
            time and revenue.
          </p>
          <div className="mt-8">
            <Button asChild size="xl" variant="accent">
              <Link to="/diagnostic">
                Start the diagnostic
                <ArrowRight />
              </Link>
            </Button>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
