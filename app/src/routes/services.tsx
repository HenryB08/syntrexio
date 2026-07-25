import { createFileRoute, Link } from "@tanstack/react-router";
import { Faq } from "@/components/site/Faq";
import { pageHead } from "@/lib/seo";
import { ArrowRight, Layers, LayoutGrid } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { Icon3D } from "@/components/site/Icon3D";
import { MagneticButton } from "@/components/site/MagneticButton";

export const Route = createFileRoute("/services")({
  head: () => pageHead("/services"),
  component: Services,
});

type Product = {
  icon: typeof Layers;
  badge: string;
  available: boolean;
  name: string;
  tagline: string;
  what: string;
  who: string;
  outcome: string;
  footnote: string;
};

const products: Product[] = [
  {
    icon: Layers,
    badge: "Available now",
    available: true,
    name: "SYN Growth",
    tagline: "Answer and capture every customer.",
    what: "The installed, guaranteed system. It answers every call, chat, and form in seconds across web chat, SMS, and voice, texts back every missed call, follows up until the customer books, and proves what it recovered each month in the Receipt.",
    who: "Operators losing customers to missed calls and slow replies: trades, home services, medical and dental, legal, and insurance, from local to multi-location.",
    outcome: "You stop losing the leads you already paid to earn. If the Receipt does not show it captured more than it cost, that month is free.",
    footnote: "One-time $497 setup, then $349/mo (Growth Core) or $549/mo (Growth Pro).",
  },
  {
    icon: LayoutGrid,
    badge: "Early access",
    available: false,
    name: "SYN Workspace",
    tagline: "Encode your brand. AI runs the rest.",
    what: "The AI business workspace. Encode your brand once, and SYN runs your calendar, content, brand assets, builds, and automations, with an approval trail before anything reaches a customer.",
    who: "Any business that wants AI running its operations, not just its inbox. Every SYN Growth client is first in line as access opens.",
    outcome: "Your brand, encoded once, executing everywhere. On standard and on brand by default, with a human approval before anything ships.",
    footnote: "In early access. Join the waitlist at syn.syntrexio.com.",
  },
];

function Services() {
  return (
    <>
      <PageHero
        variant="grid"
        eyebrow="Products"
        title="Two products. One SYN."
        description="SYN Growth captures the revenue you are losing today. SYN Workspace, in early access, runs the rest of your business. Start with Growth, grow into Workspace."
      >
        <Button asChild size="lg" variant="accent">
          <Link to="/leak-audit">
            Start with a Free Leak Audit
            <ArrowRight />
          </Link>
        </Button>
      </PageHero>

      <Section>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {products.map((p, i) => (
            <Reveal key={p.name} delay={i * 100}>
              <article
                className={`surface-card surface-card-hover group flex h-full flex-col p-8 hover:-translate-y-0.5 ${
                  p.available ? "border-white/40" : ""
                }`}
              >
                <div
                  className={`mb-4 inline-flex w-fit items-center rounded-full border bg-background px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] ${
                    p.available ? "border-white/40" : "border-hairline text-muted-foreground"
                  }`}
                >
                  {p.available ? <span className="badge-shimmer">{p.badge}</span> : p.badge}
                </div>
                <Icon3D icon={p.icon} size={48} iconSize={22} />
                <h2 className="mt-6 text-2xl font-semibold text-foreground">{p.name}</h2>
                <div className="mt-1 text-sm text-foreground/80">{p.tagline}</div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.what}</p>

                <dl className="mt-6 space-y-4 border-t border-hairline pt-5">
                  <div>
                    <dt className="text-eyebrow mb-1">Who it's for</dt>
                    <dd className="text-sm text-muted-foreground">{p.who}</dd>
                  </div>
                  <div>
                    <dt className="text-eyebrow mb-1">The outcome</dt>
                    <dd className="text-sm text-muted-foreground">{p.outcome}</dd>
                  </div>
                </dl>

                <div className="mt-auto pt-6">
                  <div className="text-sm font-medium text-foreground">{p.footnote}</div>
                  <div className="mt-4">
                    {p.available ? (
                      <div className="flex flex-wrap gap-3">
                        <Button asChild variant="accent">
                          <Link to="/leak-audit">
                            Get Your Free Leak Audit
                            <ArrowRight />
                          </Link>
                        </Button>
                        <Button asChild variant="outline">
                          <Link to="/pricing">See pricing</Link>
                        </Button>
                      </div>
                    ) : (
                      <MagneticButton>
                        <Button asChild variant="outline">
                          <a href="https://syn.syntrexio.com">
                            Join the waitlist
                            <ArrowRight />
                          </a>
                        </Button>
                      </MagneticButton>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-t border-hairline bg-surface/20">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-base text-muted-foreground md:text-lg">
              Already running on SYN? Our team also builds and runs websites,
              content, and creative for existing clients.
            </p>
          </div>
        </Reveal>
      </Section>

      <Section className="text-center">
        <Reveal>
          <h2 className="text-display mx-auto max-w-2xl text-3xl text-foreground md:text-5xl">
            Not sure where to start?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            The Free Leak Audit answers that in 48 hours, with hard numbers on
            what you are losing today.
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
      <Faq path="/services" />
    </>
  );
}
