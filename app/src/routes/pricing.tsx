import { createFileRoute, Link } from "@tanstack/react-router";
import { Faq } from "@/components/site/Faq";
import { pageHead } from "@/lib/seo";
import { ArrowRight, Check, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { Icon3D } from "@/components/site/Icon3D";
import { MagneticButton } from "@/components/site/MagneticButton";

const TITLE = "Pricing Syntrex";
const DESC =
  "Transparent pricing for the Syntrex Growth System, Presence System, and Brand Studio. Backed by a written guarantee.";

export const Route = createFileRoute("/pricing")({
  head: () => pageHead("/pricing"),
  component: Pricing,
});

const install = {
  name: "Install",
  price: "$497",
  cadence: "one-time",
  note: "One setup, built on your brand and rules. Then it runs for you.",
};

type Plan = {
  name: string;
  price: string;
  cadence: string;
  highlight?: boolean;
  features: string[];
};

const growthPlans: Plan[] = [
  {
    name: "Growth Core",
    price: "$349",
    cadence: "/month",
    highlight: false,
    features: [
      "AI web chat",
      "SMS conversations",
      "Missed-call text-back",
      "Automated follow-up sequences",
      "Self-serve booking",
      "Monthly Receipt report",
    ],
  },
  {
    name: "Growth Pro",
    price: "$549",
    cadence: "/month",
    highlight: true,
    features: [
      "Everything in Growth Core",
      "AI voice answering, 24/7",
      "Missed and after-hours calls answered, not sent to voicemail",
      "Live call transcription & summaries",
      "Priority routing rules",
      "Advanced analytics",
    ],
  },
];

const addOnPlans: Plan[] = [
  {
    name: "Presence System",
    price: "from $1,500",
    cadence: "/month",
    features: [
      "Website or store built and run for you",
      "SEO & AI-search optimization",
      "Content, kept current",
      "The Growth System included",
      "Build from $2,500",
    ],
  },
  {
    name: "Brand Studio",
    price: "from $995",
    cadence: "/month",
    features: [
      "Ongoing brand & design retainer",
      "Landing pages & creative",
      "Ad creative refresh",
    ],
  },
  {
    name: "Brand Studio Priority",
    price: "from $1,995",
    cadence: "/month",
    features: [
      "Everything in Brand Studio",
      "Priority turnaround",
      "Dedicated creative lead",
    ],
  },
];

function Pricing() {
  return (
    <>
      <PageHero
        variant="radar"
        eyebrow="Pricing"
        title="Priced for outcomes, not features."
        description="One install fee. One monthly rate for the system that captures your leads. Add-ons for growth and brand when you're ready."
      >
        <MagneticButton>
          <Button asChild size="lg" variant="accent">
            <Link to="/leak-audit">
              Get Your Free Leak Audit
              <ArrowRight />
            </Link>
          </Button>
        </MagneticButton>
      </PageHero>

      {/* Install callout */}
      <Section className="!py-16">
        <Reveal>
            <div className="surface-card flex flex-col items-start justify-between gap-4 p-7 md:flex-row md:items-center">
            <div className="flex items-center gap-4">
                <Icon3D icon={Sparkles} size={44} iconSize={20} />
              <div>
                <div className="text-eyebrow mb-1">One-time</div>
                <div className="text-xl font-semibold text-foreground">
                  {install.name} · {install.price}{" "}
                  <span className="text-sm font-normal text-muted-foreground">
                    {install.cadence}
                  </span>
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">{install.note}</p>
          </div>
        </Reveal>

        {/* Growth plans, featured pair, equal heights */}
        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 items-stretch">
          {growthPlans.map((p, i) => (
            <PlanCard key={p.name} plan={p} index={i} />
          ))}
        </div>

        {/* Add-on plans */}
        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3 items-stretch">
          {addOnPlans.map((p, i) => (
            <PlanCard key={p.name} plan={p} index={i + 2} />
          ))}
        </div>
      </Section>

      {/* Guarantee */}
      <section className="border-y border-hairline bg-surface/40">
        <div className="container-page py-16 md:py-20">
          <Reveal>
            <div className="flex flex-col items-start gap-6 md:flex-row">
              <Icon3D icon={ShieldCheck} size={56} iconSize={24} />
              <div className="max-w-3xl">
                <div className="text-eyebrow mb-2">The Guarantee</div>
                <p className="text-display text-2xl text-foreground md:text-3xl">
                  If the Receipt does not show the system captured more value
                  than it cost you,{" "}
                  <span className="text-shimmer">that month is free.</span>
                </p>
                <p className="mt-5 text-sm text-muted-foreground md:text-base">
                  Active for the first 3 months, then rolling quarterly review.
                  We measure captured value against your monthly fee. You see
                  the math on the Receipt every month.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <Section className="text-center">
        <Reveal>
          <h2 className="text-display mx-auto max-w-2xl text-3xl text-foreground md:text-5xl">
            Start with a Free Leak Audit.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            48 hours. Zero commitment. You'll see exactly what missed leads are
            costing you.
          </p>
          <div className="mt-8">
            <Button asChild size="xl" variant="accent">
              <Link to="/leak-audit">
                Get Your Free Leak Audit
                <ArrowRight />
              </Link>
            </Button>
          </div>
        </Reveal>
      </Section>
      <Faq path="/pricing" />
    </>
  );
}

function PlanCard({ plan: p, index: i }: { plan: Plan; index: number }) {
  return (
    <Reveal delay={i * 80}>
      <div className="relative pt-4 h-full">
        {p.highlight ? (
          <div className="absolute left-1/2 top-0 z-10 -translate-x-1/2 rounded-full border border-white/40 bg-background px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] shadow-[0_6px_20px_-6px_oklch(0_0_0/0.6)]">
            <span className="badge-shimmer">Most popular</span>
          </div>
        ) : null}
        <article
          data-choreo
          style={{ ["--d" as never]: `${i * 120}ms` }}
          className={`pricing-card spec-sweep surface-card surface-card-hover relative flex h-full flex-col p-7 ${
            p.highlight ? "border-white/40" : ""
          }`}
        >
          <h3 className="text-lg font-semibold text-foreground">{p.name}</h3>
          <div className="mt-3 flex items-baseline gap-1">
            <span className="text-display text-4xl text-foreground">{p.price}</span>
            <span className="text-sm text-muted-foreground">{p.cadence}</span>
          </div>
          <ul className="mt-6 flex-1 space-y-3">
            {p.features.map((f, ci) => (
              <li
                key={f}
                className="flex items-start gap-2.5 text-sm text-muted-foreground"
                style={{ ["--ci" as never]: ci }}
              >
                <Check size={16} className="check-glow mt-0.5 shrink-0 text-foreground" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Button
              asChild
              variant={p.highlight ? "accent" : "outline"}
              className="w-full"
            >
              <Link to="/leak-audit">Get started</Link>
            </Button>
          </div>
        </article>
      </div>
    </Reveal>
  );
}