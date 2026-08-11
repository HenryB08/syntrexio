import { createFileRoute, Link } from "@tanstack/react-router";
import { Faq } from "@/components/site/Faq";
import { pageHead } from "@/lib/seo";
import { ArrowRight, Bot, Search, MessageSquare, LayoutTemplate, Cog } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeader } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { Icon3D } from "@/components/site/Icon3D";
import { MagneticButton } from "@/components/site/MagneticButton";
import { DataStream } from "@/components/site/DataStream";
import { Aurora } from "@/components/site/Aurora";

export const Route = createFileRoute("/services")({
  head: () => pageHead("/services"),
  component: Services,
});

type Service = { name: string; what: string; get: string; price: string };
type Track = {
  id: string;
  icon: typeof Search;
  name: string;
  tagline: string;
  services: Service[];
};

const tracks: Track[] = [
  {
    id: "visibility",
    icon: Search,
    name: "Visibility",
    tagline: "Get found in search and in AI answers.",
    services: [
      {
        name: "AI search optimization (GEO)",
        what: "Make your business the answer AI models cite.",
        get: "Structured content, schema, and entity coverage so ChatGPT, Claude, Perplexity, and Google AI surface you by name.",
        price: "Visibility retainer, $2,500/mo",
      },
      {
        name: "Traditional search optimization (SEO)",
        what: "Rank for the terms your buyers actually search.",
        get: "Technical SEO, on-page work, and a content plan aimed at the queries that convert.",
        price: "Visibility retainer, $2,500/mo",
      },
      {
        name: "Content production and strategy",
        what: "A publishing engine, not a one-off blog.",
        get: "Articles, landing pages, and assets produced on a schedule, mapped to search and buyer intent.",
        price: "Visibility retainer, $2,500/mo",
      },
      {
        name: "Social media systems",
        what: "Consistent, on-brand social without you touching it.",
        get: "A repeatable system that plans, produces, and schedules across your channels.",
        price: "Visibility retainer, $2,500/mo",
      },
    ],
  },
  {
    id: "conversion",
    icon: MessageSquare,
    name: "Conversion",
    tagline: "Turn the leads you earn into booked work.",
    services: [
      {
        name: "AI assistants and customer-facing chat",
        what: "An assistant that answers, qualifies, and books, on brand.",
        get: "A deployed AI assistant across your site and channels, trained on your business and handed off cleanly to a human when it should be.",
        price: "$4,000 deployment, or the Conversion retainer, $2,000/mo",
      },
      {
        name: "Lead capture and follow-up systems",
        what: "Capture every inquiry and follow up until they respond.",
        get: "Forms, routing, and automated multi-step follow-up so no lead goes cold in an inbox.",
        price: "Conversion retainer, $2,000/mo",
      },
      {
        name: "Email systems and deliverability",
        what: "Email that lands in the inbox and converts.",
        get: "Sequences, segmentation, and deliverability setup so your email reaches people and drives action.",
        price: "Conversion retainer, $2,000/mo",
      },
      {
        name: "CRM buildout and management",
        what: "One system of record, built and run.",
        get: "A CRM configured to how you sell, migrated cleanly, and kept accurate.",
        price: "$4,500 buildout, or the Conversion retainer, $2,000/mo",
      },
    ],
  },
  {
    id: "presence",
    icon: LayoutTemplate,
    name: "Presence",
    tagline: "A site and brand that match the business you run.",
    services: [
      {
        name: "Websites and web applications",
        what: "Sites and apps that load fast and convert.",
        get: "Design, build, and copy for a site that works on every device and is easy to update.",
        price: "From a $4,500 build, or the Presence retainer, $1,800/mo",
      },
      {
        name: "E-commerce builds",
        what: "Stores built to sell.",
        get: "A complete storefront with product, checkout, and the systems behind it.",
        price: "$11,000 build",
      },
      {
        name: "Brand identity and design systems",
        what: "A complete identity, not just a logo.",
        get: "Logo, type, color, and a usable design system your whole operation runs on.",
        price: "$3,500 build",
      },
      {
        name: "Imagery and campaign assets",
        what: "Photography, campaign, and ad creative.",
        get: "The visual assets your marketing needs, produced to brand.",
        price: "Presence retainer, $1,800/mo",
      },
    ],
  },
  {
    id: "operations",
    icon: Cog,
    name: "Operations",
    tagline: "The repetitive work, running itself.",
    services: [
      {
        name: "Workflow automation and system integration",
        what: "Connect your tools and remove the manual steps.",
        get: "Automations that move work between your systems so people stop copying data by hand.",
        price: "$6,500 per workflow, or the Operations retainer, $2,500/mo",
      },
      {
        name: "Custom internal AI tools",
        what: "Internal tools built for exactly how you work.",
        get: "A tool your team actually uses, built to your process, not a generic app.",
        price: "From a $9,000 build",
      },
      {
        name: "Reporting and analytics dashboards",
        what: "The numbers that matter, live.",
        get: "Dashboards that pull from your systems so you see the real state of the business.",
        price: "Operations retainer, $2,500/mo",
      },
      {
        name: "Agent Workforce",
        what: "Your internal fleet of AI agents, installed and operated. The flagship.",
        get: "An operating layer inside your business that runs continuous operational work with a human in control. See the full section above.",
        price: "$35,000 to $95,000 install, then $5,000 to $12,000/mo",
      },
    ],
  },
];

function Services() {
  return (
    <>
      <PageHero
        variant="grid"
        eyebrow="Services"
        title="Sixteen services. Four tracks. One team."
        description="The full digital and AI back end of a company, handled in-house and overseen personally. Start with one service or run all four tracks. Every price is published on the pricing page."
      >
        <Button asChild size="lg" variant="accent">
          <Link to="/diagnostic">
            Start the diagnostic
            <ArrowRight />
          </Link>
        </Button>
      </PageHero>

      {/* AGENT WORKFORCE - flagship, expanded treatment at the top */}
      <section className="relative overflow-hidden border-b border-hairline bg-surface/40">
        <Aurora variant="soft" />
        <DataStream />
        <div className="container-page relative py-16 md:py-24">
          <div className="border-draw">
            <div className="relative overflow-hidden rounded-[calc(var(--radius-lg)-1px)] bg-background p-8 md:p-12">
              <div className="heartbeat" aria-hidden />
              <div className="relative">
                <div className="flex flex-col items-start gap-6 md:flex-row md:items-center">
                  <Icon3D icon={Bot} size={56} iconSize={24} />
                  <div>
                    <div className="text-eyebrow mb-2">The flagship</div>
                    <h2 className="text-display max-w-3xl text-2xl text-foreground md:text-4xl">
                      Agent Workforce
                    </h2>
                  </div>
                </div>
                <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
                  Agent Workforce installs a company's internal fleet of AI agents: the agents
                  handle operational work the company currently pays salaries for, running
                  continuously with an approval trail and human control. It is not a chatbot. It is
                  an operating layer inside the business.
                </p>

                <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <div className="text-eyebrow mb-3">Work it takes over</div>
                    <ul className="grid grid-cols-2 gap-2 text-sm text-foreground">
                      {[
                        "Research",
                        "Drafting",
                        "Coordination",
                        "Data entry",
                        "Monitoring",
                        "Scheduling",
                        "Reporting",
                        "First-pass analysis",
                      ].map((w) => (
                        <li
                          key={w}
                          className="rounded-md border border-hairline bg-surface/50 px-3 py-2"
                        >
                          {w}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="text-eyebrow mb-3">Why us, not the alternatives</div>
                    <ul className="space-y-2.5 text-sm text-muted-foreground">
                      <li>
                        <span className="text-foreground">Enterprise consultancies</span> charge
                        millions and deliver slide decks.
                      </li>
                      <li>
                        <span className="text-foreground">Self-serve tools</span> charge under $200
                        a month and hand you the risk.
                      </li>
                      <li>
                        <span className="text-foreground">Syntrex</span> installs it, operates it,
                        and is accountable for it.
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-4 border-t border-hairline pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <div className="text-sm font-medium text-foreground">
                    $35,000 to $95,000 install, then $5,000 to $12,000/mo to operate.
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Button asChild variant="accent">
                      <Link to="/diagnostic">
                        See if you are ready
                        <ArrowRight />
                      </Link>
                    </Button>
                    <Button asChild variant="outline">
                      <Link to="/pricing">Pricing</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE FOUR TRACKS */}
      {tracks.map((track) => (
        <Section key={track.id} id={track.id} className="border-b border-hairline">
          <Reveal>
            <div className="flex items-center gap-4">
              <Icon3D icon={track.icon} size={48} iconSize={22} />
              <div>
                <SectionHeader eyebrow={`Track: ${track.name}`} title={track.tagline} />
              </div>
            </div>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
            {track.services.map((s, i) => (
              <Reveal key={s.name} delay={i * 60}>
                <article className="surface-card surface-card-hover group flex h-full flex-col p-7">
                  <h3 className="text-lg font-semibold text-foreground">{s.name}</h3>
                  <p className="mt-2 text-sm text-foreground/80">{s.what}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.get}</p>
                  <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-hairline pt-4">
                    <span className="text-xs text-muted-foreground">{s.price}</span>
                    <Link
                      to="/pricing"
                      className="inline-flex items-center gap-1 text-xs font-medium text-foreground"
                    >
                      Pricing
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Section>
      ))}

      {/* CUSTOM */}
      <Section className="border-b border-hairline bg-surface/20">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-eyebrow mb-4">Not on the list</div>
            <h2 className="text-display text-3xl text-foreground md:text-4xl">
              If you need something not listed, we build it.
            </h2>
            <p className="mt-4 text-base text-muted-foreground md:text-lg">
              The agent fleet makes custom work economically viable in a way it never was for a
              headcount agency. When the labor is agents a human directs, a one-off tool or system
              stops being a budget line you have to justify.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* CTA */}
      <Section className="text-center">
        <Reveal>
          <h2 className="text-display mx-auto max-w-2xl text-3xl text-foreground md:text-5xl">
            Not sure where to start?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            The diagnostic maps what is not working across the four tracks and names the services
            that fit, with prices, in about a minute.
          </p>
          <div className="mt-8">
            <MagneticButton>
              <Button asChild size="xl" variant="accent">
                <Link to="/diagnostic">
                  Start the diagnostic
                  <ArrowRight />
                </Link>
              </Button>
            </MagneticButton>
          </div>
        </Reveal>
      </Section>
      <Faq path="/services" />
    </>
  );
}
