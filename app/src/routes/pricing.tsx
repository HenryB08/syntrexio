import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Faq } from "@/components/site/Faq";
import { pageHead } from "@/lib/seo";
import { ArrowRight, Check, ShieldCheck, Sparkles } from "lucide-react";
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

type Retainer = {
  name: string;
  price: string;
  cadence: string;
  blurb: string;
  includes: string[];
  highlight?: boolean;
  math?: string;
};

const retainers: Retainer[] = [
  {
    name: "Visibility",
    price: "$2,500",
    cadence: "/mo",
    blurb: "Get found in search and in AI answers.",
    includes: ["AI search optimization (GEO)", "SEO", "Content production", "Social media systems"],
  },
  {
    name: "Conversion",
    price: "$2,000",
    cadence: "/mo",
    blurb: "Turn the leads you earn into booked work.",
    includes: [
      "AI chat and assistants",
      "Lead capture and follow-up",
      "Email systems",
      "CRM management",
    ],
  },
  {
    name: "Presence",
    price: "$1,800",
    cadence: "/mo",
    blurb: "Keep your site and brand sharp.",
    includes: [
      "Ongoing website work",
      "Brand and design",
      "Creative and imagery",
      "Campaign assets",
    ],
  },
  {
    name: "Operations",
    price: "$2,500",
    cadence: "/mo",
    blurb: "Automate the repetitive work.",
    includes: [
      "Workflow automation",
      "Custom internal tools",
      "Reporting dashboards",
      "System integration",
    ],
  },
  {
    name: "Full Stack",
    price: "$7,500",
    cadence: "/mo",
    blurb: "All four tracks, run by one team.",
    includes: ["Visibility", "Conversion", "Presence", "Operations"],
    highlight: true,
    math: "$2,500 + $2,000 + $1,800 + $2,500 = $8,800 separately. Full Stack is $7,500.",
  },
  {
    name: "Agent Workforce",
    price: "$5,000 to $12,000",
    cadence: "/mo",
    blurb: "Your internal fleet of AI agents, operated.",
    includes: [
      "Continuous operational work",
      "Approval trail",
      "Human control",
      "Install priced separately",
    ],
  },
  {
    name: "Full Stack plus Agent Workforce",
    price: "$12,500",
    cadence: "/mo and up",
    blurb: "Everything, plus the operating fleet.",
    includes: [
      "All four tracks",
      "Agent Workforce operation",
      "One accountable owner",
      "Best for scaling operators",
    ],
  },
];

type Build = { name: string; market: string; price: string };

const builds: Build[] = [
  { name: "Website, up to 5 pages", market: "$8,000 to $15,000", price: "$4,500" },
  { name: "Website, 6 to 12 pages", market: "$15,000 to $30,000", price: "$7,500" },
  { name: "E-commerce build", market: "$20,000 to $50,000", price: "$11,000" },
  { name: "Brand identity system", market: "$5,000 to $15,000", price: "$3,500" },
  { name: "AI assistant deployment", market: "$5,000 to $15,000", price: "$4,000" },
  { name: "CRM buildout and migration", market: "$5,000 to $20,000", price: "$4,500" },
  { name: "Automation build, per workflow", market: "$10,000 to $40,000", price: "$6,500" },
  { name: "Custom AI tool", market: "$15,000 to $50,000", price: "$9,000+" },
  {
    name: "Agent Workforce install",
    market: "No market benchmark exists",
    price: "$35,000 to $95,000",
  },
];

function Pricing() {
  const [view, setView] = useState<"retainers" | "builds">("retainers");

  return (
    <>
      <PageHero
        variant="radar"
        eyebrow="Pricing"
        title="Published, not quoted."
        description="Every price is on this page. Nobody in this industry does that. No discovery call to find out what it costs. You get the output, not the overhead."
      >
        <MagneticButton>
          <Button asChild size="lg" variant="accent">
            <Link to="/diagnostic">
              Start the diagnostic
              <ArrowRight />
            </Link>
          </Button>
        </MagneticButton>
      </PageHero>

      {/* FRONT DOOR: the diagnostic */}
      <Section className="!py-14">
        <Reveal>
          <div className="surface-card flex flex-col items-start justify-between gap-5 p-7 md:flex-row md:items-center">
            <div className="flex items-start gap-4">
              <Icon3D icon={Sparkles} size={44} iconSize={20} />
              <div>
                <div className="text-eyebrow mb-1">The front door</div>
                <div className="text-xl font-semibold text-foreground">
                  AI Systems Diagnostic, $3,500
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  A full read of your systems and a build plan you own. Fully credited toward any
                  engagement you start within 60 days.
                </p>
              </div>
            </div>
            <Button asChild variant="accent">
              <Link to="/diagnostic">
                Start now
                <ArrowRight />
              </Link>
            </Button>
          </div>
        </Reveal>
      </Section>

      {/* TOGGLE */}
      <Section className="!pt-0 !pb-10">
        <div className="flex justify-center">
          <div className="inline-flex rounded-full border border-hairline bg-surface/60 p-1 backdrop-blur">
            <button
              type="button"
              onClick={() => setView("retainers")}
              aria-pressed={view === "retainers"}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                view === "retainers"
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Monthly retainers
            </button>
            <button
              type="button"
              onClick={() => setView("builds")}
              aria-pressed={view === "builds"}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                view === "builds"
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              One-time builds
            </button>
          </div>
        </div>

        {/* RETAINERS */}
        {view === "retainers" ? (
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {retainers.map((r, i) => (
                <Reveal key={r.name} delay={i * 60}>
                  <article
                    className={`surface-card surface-card-hover flex h-full flex-col p-7 ${
                      r.highlight ? "border-white/50" : ""
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-lg font-semibold text-foreground">{r.name}</h3>
                      {r.highlight ? (
                        <span className="shrink-0 rounded-full border border-white/40 bg-background px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em]">
                          <span className="badge-shimmer">Best value</span>
                        </span>
                      ) : null}
                    </div>
                    <div className="mt-3 flex items-baseline gap-1">
                      <span className="text-display text-3xl text-foreground">{r.price}</span>
                      <span className="text-sm text-muted-foreground">{r.cadence}</span>
                    </div>
                    <p className="mt-2 text-sm text-foreground/80">{r.blurb}</p>
                    {r.math ? (
                      <p className="mt-3 rounded-md border border-hairline bg-surface/50 px-3 py-2 text-xs text-muted-foreground">
                        {r.math}
                      </p>
                    ) : null}
                    <ul className="mt-5 flex-1 space-y-2.5 border-t border-hairline pt-5">
                      {r.includes.map((f) => (
                        <li
                          key={f}
                          className="flex items-start gap-2.5 text-sm text-muted-foreground"
                        >
                          <Check size={16} className="mt-0.5 shrink-0 text-foreground" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6">
                      <Button
                        asChild
                        variant={r.highlight ? "accent" : "outline"}
                        className="w-full"
                      >
                        <Link to="/diagnostic">Get started</Link>
                      </Button>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
            <p className="mt-6 text-center text-xs text-muted-foreground">
              Retainers are billed on the 1st. Full Stack is priced below the $8,800 its tracks cost
              separately, which is where most companies land.
            </p>
          </div>
        ) : (
          /* BUILDS */
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {builds.map((b, i) => (
                <Reveal key={b.name} delay={i * 50}>
                  <article className="surface-card surface-card-hover flex h-full flex-col p-7">
                    <h3 className="text-base font-semibold text-foreground">{b.name}</h3>
                    <div className="mt-4 text-xs text-muted-foreground">
                      Market:{" "}
                      <span className="line-through decoration-muted-foreground/50">
                        {b.market}
                      </span>
                    </div>
                    <div className="mt-1 flex items-baseline gap-2">
                      <span className="text-eyebrow">Syntrex</span>
                      <span className="text-display text-2xl text-foreground">{b.price}</span>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
            <p className="mt-6 text-center text-xs text-muted-foreground">
              Market ranges: web and creative from Clutch (database of 79,000+ agencies) and Clutch
              2026; retainer benchmarks from the HubSpot Agency Survey and Databox. Builds are a 40%
              deposit with the balance on milestones.
            </p>
          </div>
        )}
      </Section>

      {/* GUARANTEE */}
      <section className="border-y border-hairline bg-surface/40">
        <div className="container-page py-16 md:py-20">
          <Reveal>
            <div className="flex flex-col items-start gap-6 md:flex-row">
              <Icon3D icon={ShieldCheck} size={56} iconSize={24} />
              <div className="max-w-3xl">
                <div className="text-eyebrow mb-2">The guarantee</div>
                <p className="text-display text-2xl text-foreground md:text-3xl">
                  We guarantee what we control.{" "}
                  <span className="text-shimmer">We do not guarantee your sales team.</span>
                </p>
                <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <div className="text-eyebrow mb-2">Guaranteed</div>
                    <ul className="space-y-1.5 text-sm text-muted-foreground">
                      <li>AI search citation presence for agreed queries</li>
                      <li>Ranking movement for agreed terms</li>
                      <li>Content volume and schedule</li>
                      <li>Hours removed from an agreed workflow</li>
                      <li>Agent task volume per period</li>
                      <li>Delivery against agreed spec and timeline</li>
                    </ul>
                  </div>
                  <div>
                    <div className="text-eyebrow mb-2">Never guaranteed</div>
                    <ul className="space-y-1.5 text-sm text-muted-foreground">
                      <li>Revenue</li>
                      <li>Closed deals</li>
                      <li>Conversion rate</li>
                    </ul>
                    <p className="mt-3 text-sm text-muted-foreground">
                      Those depend on your sales team, pricing, product, and market.
                    </p>
                  </div>
                </div>
                <p className="mt-5 text-sm text-muted-foreground md:text-base">
                  How it works: one metric named in writing, a documented baseline before work
                  begins, a 90 day window, and one agreed source of truth. If the metric is not hit,
                  we keep working at no additional cost until it is. The remedy is our labor, never
                  a refund.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TERMS + WHY */}
      <Section>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="surface-card h-full p-7">
              <div className="text-eyebrow mb-3">Terms</div>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <span className="text-foreground">Builds:</span> 40% deposit, balance on
                  milestones.
                </li>
                <li>
                  <span className="text-foreground">Retainers:</span> billed on the 1st of each
                  month.
                </li>
                <li>
                  <span className="text-foreground">Portfolio pricing:</span> 10% off the second
                  brand, 15% off everything beyond, for operators running multiple brands.
                </li>
                <li>
                  <span className="text-foreground">The diagnostic:</span> $3,500, fully credited
                  toward any engagement started within 60 days.
                </li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="surface-card h-full p-7">
              <div className="text-eyebrow mb-3">Why the pricing is what it is</div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Agencies charge for the team behind the work. We do not have one. There is no
                payroll, no offshore invoice, no account management layer, and no office to fund. An
                orchestrated fleet of AI agents produces the work, and humans direct and own it. So
                the price reflects the output, not the overhead.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* CTA */}
      <Section className="text-center">
        <Reveal>
          <h2 className="text-display mx-auto max-w-2xl text-3xl text-foreground md:text-5xl">
            Start with the diagnostic.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            About a minute, and you will know exactly where to start and what it costs.
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
      <Faq path="/pricing" />
    </>
  );
}
