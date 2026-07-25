import { createFileRoute, Link } from "@tanstack/react-router";
import { Faq } from "@/components/site/Faq";
import { pageHead } from "@/lib/seo";
import { ArrowRight, Globe, Layers, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { Icon3D } from "@/components/site/Icon3D";

export const Route = createFileRoute("/services")({
  head: () => pageHead("/services"),
  component: Services,
});

type Offer = {
  icon: typeof Layers;
  name: string;
  tagline: string;
  what: string;
  who: string;
  outcome: string;
  price: string;
  flagship?: boolean;
};

const offers: Offer[] = [
  {
    icon: Layers,
    name: "The Growth System",
    tagline: "The flagship. Answer and capture every customer.",
    what: "One installed, guaranteed system that answers every call, chat, and form in seconds across web chat, SMS, and voice, texts back every missed call, follows up until the customer books, and reports what it recovered each month in the Receipt.",
    who: "Local and service businesses losing customers to missed calls and slow replies: trades, home services, medical and dental, legal, and insurance.",
    outcome: "You stop losing the leads you already paid to earn. If the Receipt does not show it captured more than it cost, that month is free.",
    price: "Growth Core $349/mo · Growth Pro $549/mo · $497 install",
    flagship: true,
  },
  {
    icon: Globe,
    name: "The Presence System",
    tagline: "Your entire digital presence, run for you.",
    what: "A website or store built and kept current, with SEO and AI-search optimization, content, and the Growth System included. Your whole online presence as one subscription.",
    who: "Established businesses that want their online presence owned and run by one team instead of stitched together across freelancers.",
    outcome: "You show up first, look the part everywhere, and keep converting, without managing any of it yourself.",
    price: "From $1,500/mo · build from $2,500",
  },
  {
    icon: Palette,
    name: "The Brand Studio",
    tagline: "On-demand creative that stays on brand.",
    what: "Ongoing brand, design, and creative on a flat monthly subscription with a request queue. Every asset is checked against your brand guidelines before it ships, so nothing off-brand goes out.",
    who: "Established brands, portfolio operators, and multi-brand teams that need a steady stream of on-brand work.",
    outcome: "Campaign imagery, product visuals, and social creative on tap, consistent and safe to publish by default.",
    price: "From $995/mo · Priority from $1,995/mo",
  },
];

function Services() {
  return (
    <>
      <PageHero
        variant="grid"
        eyebrow="Services"
        title="Three systems. One place to start."
        description="Lead with the Growth System: it stops you losing customers today. The Presence System and Brand Studio extend it when you are ready. You never buy everything at once."
      >
        <Button asChild size="lg" variant="accent">
          <Link to="/leak-audit">
            Start with a Free Leak Audit
            <ArrowRight />
          </Link>
        </Button>
      </PageHero>

      <Section>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {offers.map((o, i) => (
            <Reveal key={o.name} delay={i * 100}>
              <article
                className={`surface-card surface-card-hover group flex h-full flex-col p-8 hover:-translate-y-0.5 ${
                  o.flagship ? "border-white/40" : ""
                }`}
              >
                {o.flagship ? (
                  <div className="mb-4 inline-flex w-fit items-center rounded-full border border-white/40 bg-background px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em]">
                    <span className="badge-shimmer">Flagship</span>
                  </div>
                ) : null}
                <Icon3D icon={o.icon} size={48} iconSize={22} />
                <h2 className="mt-6 text-xl font-semibold text-foreground">{o.name}</h2>
                <div className="mt-1 text-sm text-foreground/80">{o.tagline}</div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{o.what}</p>

                <dl className="mt-6 space-y-4 border-t border-hairline pt-5">
                  <div>
                    <dt className="text-eyebrow mb-1">Who it's for</dt>
                    <dd className="text-sm text-muted-foreground">{o.who}</dd>
                  </div>
                  <div>
                    <dt className="text-eyebrow mb-1">The outcome</dt>
                    <dd className="text-sm text-muted-foreground">{o.outcome}</dd>
                  </div>
                </dl>

                <div className="mt-auto pt-6 text-sm font-medium text-foreground">
                  {o.price}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-t border-hairline bg-surface/20">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-eyebrow mb-4">Existing clients</div>
            <p className="text-lg text-muted-foreground md:text-xl">
              Custom AI tools, integrations, and dashboards remain available for
              businesses already working with Syntrex, when a need goes beyond
              the three systems. New customers start with the Growth System.
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
