import { createFileRoute, Link } from "@tanstack/react-router";
import { Faq } from "@/components/site/Faq";
import { pageHead } from "@/lib/seo";
import { ArrowRight, Check, LayoutGrid, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { Icon3D } from "@/components/site/Icon3D";
import { MagneticButton } from "@/components/site/MagneticButton";

export const Route = createFileRoute("/pricing")({
  head: () => pageHead("/pricing"),
  component: Pricing,
});

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
    cadence: "/mo",
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
    cadence: "/mo",
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

function Pricing() {
  return (
    <>
      <PageHero
        variant="radar"
        eyebrow="Pricing"
        title="Launch pricing. Backed by a guarantee."
        description="SYN Growth launch pricing is a one-time $497 setup, then a flat monthly rate. SYN Growth is launching soon; the Free Leak Audit is available today. SYN Workspace is in early access. No quotes, no surprises."
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

      {/* SYN GROWTH */}
      <Section className="!py-16">
        <Reveal>
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="text-eyebrow">SYN Growth</span>
            <span className="inline-flex items-center rounded-full border border-white/40 bg-background px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em]">
              <span className="badge-shimmer">Launching soon</span>
            </span>
          </div>
        </Reveal>

        {/* Setup callout - make it unmistakable the $497 is one-time */}
        <Reveal>
          <div className="surface-card flex flex-col items-start justify-between gap-4 p-7 md:flex-row md:items-center">
            <div className="flex items-center gap-4">
              <Icon3D icon={Sparkles} size={44} iconSize={20} />
              <div>
                <div className="text-eyebrow mb-1">One-time setup</div>
                <div className="text-xl font-semibold text-foreground">
                  $497{" "}
                  <span className="text-sm font-normal text-muted-foreground">
                    charged once, not monthly
                  </span>
                </div>
              </div>
            </div>
            <p className="max-w-md text-sm text-muted-foreground">
              Then choose a monthly plan below. Setup plus your first month of
              Growth Core is $846, then just the monthly rate.
            </p>
          </div>
        </Reveal>

        {/* Monthly plans */}
        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 items-stretch">
          {growthPlans.map((p, i) => (
            <PlanCard key={p.name} plan={p} index={i} />
          ))}
        </div>
        <Reveal delay={160}>
          <p className="mt-5 text-center text-xs text-muted-foreground">
            Every SYN Growth plan is a one-time $497 setup plus the monthly rate
            shown. The $497 is never the total by itself.
          </p>
        </Reveal>
      </Section>

      {/* GUARANTEE - front and center */}
      <section className="border-y border-hairline bg-surface/40">
        <div className="container-page py-16 md:py-20">
          <Reveal>
            <div className="flex flex-col items-start gap-6 md:flex-row">
              <Icon3D icon={ShieldCheck} size={56} iconSize={24} />
              <div className="max-w-3xl">
                <div className="text-eyebrow mb-2">The SYN Growth Guarantee</div>
                <p className="text-display text-2xl text-foreground md:text-3xl">
                  If the Receipt does not show SYN Growth captured more value
                  than it cost you,{" "}
                  <span className="text-shimmer">that month is free.</span>
                </p>
                <p className="mt-5 text-sm text-muted-foreground md:text-base">
                  Active for the first 3 months, then a rolling quarterly review.
                  We measure recovered value against your own average job value,
                  agreed at setup. You see the math on the Receipt every month.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SYN WORKSPACE - early access, no price */}
      <Section>
        <Reveal>
          <div className="text-eyebrow mb-4">SYN Workspace</div>
        </Reveal>
        <Reveal>
          <div className="surface-card relative overflow-hidden p-8 md:p-12">
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <div className="flex items-center gap-4">
                  <Icon3D icon={LayoutGrid} size={48} iconSize={22} />
                  <div className="inline-flex w-fit items-center rounded-full border border-hairline bg-background px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    Early access
                  </div>
                </div>
                <h2 className="text-display mt-5 text-2xl text-foreground md:text-4xl">
                  The AI workspace is coming. No price yet.
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                  SYN Workspace encodes your brand once and runs your calendar,
                  content, assets, builds, and automations. It is in early access
                  and not sold at a printed price yet. Join the waitlist, and
                  every SYN Growth client is first in line.
                </p>
              </div>
              <div className="shrink-0">
                <MagneticButton>
                  <Button asChild size="lg" variant="outline">
                    <a href="https://syn.syntrexio.com">
                      Join the waitlist
                      <ArrowRight />
                    </a>
                  </Button>
                </MagneticButton>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mx-auto mt-10 max-w-3xl text-center">
            <p className="text-sm text-muted-foreground md:text-base">
              Already running on SYN? Our team also builds and runs websites,
              content, and creative for existing clients.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* CTA */}
      <Section className="text-center">
        <Reveal>
          <h2 className="text-display mx-auto max-w-2xl text-3xl text-foreground md:text-5xl">
            Start with a Free Leak Audit.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            48 hours. Zero commitment. You'll see exactly what missed leads are
            costing you before you spend a dollar.
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
          <div className="mt-1 text-xs text-muted-foreground">
            after the one-time $497 setup
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
