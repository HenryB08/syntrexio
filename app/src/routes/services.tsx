import { createFileRoute, Link } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import {
  ArrowRight,
  Bot,
  Calendar,
  Globe,
  Layers,
  MessageCircle,
  Palette,
  PhoneCall,
  PieChart,
  Repeat,
  Search,
  Sparkles,
  Star,
  Workflow,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeader } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { Icon3D } from "@/components/site/Icon3D";

const TITLE = "Services — Syntrex";
const DESC =
  "Three systems built to capture, convert, and compound revenue: Growth, Presence, and Brand.";

export const Route = createFileRoute("/services")({
  head: () => pageHead("/services"),
  component: Services,
});

const offers = [
  {
    icon: Layers,
    name: "The Growth System",
    tagline: "Answer every inquiry. Convert every lead.",
    desc: "AI chat, SMS, missed-call text-back, follow-up, booking, and the monthly Receipt. Your always-on sales layer.",
    features: ["AI web chat & SMS", "Missed-call text-back", "Automated follow-up", "Self-serve booking", "Monthly Receipt"],
  },
  {
    icon: Globe,
    name: "The Presence System",
    tagline: "Show up first, everywhere it matters.",
    desc: "Local SEO, review automation, and content distribution that stack over months into unbeatable organic presence.",
    features: ["Local SEO & GBP", "Review engine", "Content distribution", "Search reporting"],
  },
  {
    icon: Palette,
    name: "The Brand Studio",
    tagline: "Look like the obvious choice.",
    desc: "Brand, site, and creative that make prospects trust you before they've even called.",
    features: ["Identity & design", "Landing pages", "Ad creative", "Ongoing retainer"],
  },
];

const capabilities = [
  { icon: MessageCircle, name: "AI Web Chat" },
  { icon: PhoneCall, name: "AI Voice Answering" },
  { icon: Repeat, name: "Follow-Up Sequences" },
  { icon: Calendar, name: "Booking & Reminders" },
  { icon: Bot, name: "Custom AI Agents" },
  { icon: Workflow, name: "Workflow Automation" },
  { icon: Search, name: "Local SEO" },
  { icon: Star, name: "Reputation Management" },
  { icon: PieChart, name: "Reporting & Dashboards" },
  { icon: Sparkles, name: "Content Systems" },
  { icon: Palette, name: "Brand & Identity" },
  { icon: Globe, name: "Website Builds" },
];

function Services() {
  return (
    <>
      <PageHero
        variant="grid"
        eyebrow="Services"
        title="Three systems. Every lever your business needs."
        description="Choose the layer you need most. Stack them when you're ready. Each one is engineered to capture, convert, or compound revenue."
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
              <article className="surface-card surface-card-hover group flex h-full flex-col p-8 hover:-translate-y-0.5">
                <Icon3D icon={o.icon} size={48} iconSize={22} />
                <h3 className="mt-6 text-xl font-semibold text-foreground">{o.name}</h3>
                <div className="mt-1 text-sm text-foreground/80">{o.tagline}</div>
                <p className="mt-4 text-sm text-muted-foreground">{o.desc}</p>
                <ul className="mt-6 space-y-2 border-t border-hairline pt-5">
                  {o.features.map((f) => (
                    <li key={f} className="text-sm text-muted-foreground">
                      · {f}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-t border-hairline bg-surface/20">
        <Reveal>
          <SectionHeader
            eyebrow="Capabilities"
            title="Twelve capabilities. One integrated system."
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {capabilities.map((c, i) => (
            <Reveal key={c.name} delay={i * 40}>
              <div className="surface-card surface-card-hover group flex items-center gap-3 p-4 hover:-translate-y-0.5">
                <Icon3D icon={c.icon} size={36} iconSize={16} />
                <div className="text-sm font-medium text-foreground">{c.name}</div>
                <ArrowRight
                  size={14}
                  className="ml-auto text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:text-foreground"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="text-center">
        <Reveal>
          <h2 className="text-display mx-auto max-w-2xl text-3xl text-foreground md:text-5xl">
            Not sure where to start?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            The Free Leak Audit is designed to answer that question in 48 hours,
            with hard numbers.
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
    </>
  );
}