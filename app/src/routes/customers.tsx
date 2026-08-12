import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { pageHead } from "@/lib/seo";
import { ArrowRight, ChevronDown, Cookie, Cpu, Flame, Landmark, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { Icon3D } from "@/components/site/Icon3D";

export const Route = createFileRoute("/customers")({
  head: () => pageHead("/customers"),
  component: Work,
});

type Detail = { challenge: string; solution: string; result: string };
type Client = {
  icon: typeof Flame;
  image?: string;
  imageAlt?: string;
  name: string;
  kind: string;
  tag: string;
  partner?: boolean;
  desc: string;
  result?: string;
  detail?: Detail;
};

// Existing client imagery from the repo: themed dark stock (Unsplash, free
// commercial license) for HALT/Karlo/Kinetix, plus one Mailchimp-CDN brand image
// for Doughbrik's. They may 403 in the sandbox but load in production; the card
// falls back to the brand icon on error.
const UNSPLASH = "?auto=format&fit=crop&w=1200&h=675&q=80";
const clients: Client[] = [
  {
    icon: Flame,
    image: "https://images.unsplash.com/photo-1523861751938-121b5323b48b" + UNSPLASH,
    imageAlt: "Large-scale fire against a dark sky, evoking industrial fire suppression",
    name: "HALT Fire",
    kind: "Industrial fire suppression",
    tag: "Client, retainer",
    desc: "Full digital and AI back end: search visibility, content, the website, lead handling, and internal automation.",
    result:
      "Search clicks up 689% to 505 and impressions up 1,608% to 22.9K in three months, with 10+ hours a week returned.",
    detail: {
      challenge:
        "HALT Fire was hard to find in search, and the team lost hours every week to manual, repetitive work.",
      solution:
        "Syntrex built and now runs the full digital and AI back end: search and content, the website, lead handling, and internal automation, under one accountable owner.",
      result:
        "Over a three month window in Google Search Console, search clicks grew 689% to 505 and impressions grew 1,608% to 22.9K, with more than ten hours a week returned to the team.",
    },
  },
  {
    icon: Cookie,
    image:
      "https://mcusercontent.com/d9f0645acdcd85eb1ee1a8067/images/45c480e8-9b07-53dc-0733-e5ed3bb5b2f3.png",
    imageAlt: "Doughbrik's Wavers brand imagery",
    name: "Doughbrik's Wavers",
    kind: "Consumer snack brand, founded by creator David Dobrik",
    tag: "Client, retainer",
    desc: "A consumer snack brand with national retail distribution, on an ongoing Syntrex retainer.",
    detail: {
      challenge:
        "Doughbrik's Wavers was scaling into national retail with internal workflows that could not keep up with the pace.",
      solution:
        "Syntrex runs an ongoing retainer, building internal automation and custom tools around how the brand actually operates.",
      result: "Internal workflows run about 3x faster as the brand scales into retail.",
    },
  },
  {
    icon: Landmark,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab" + UNSPLASH,
    imageAlt: "Financial-district glass towers at dusk",
    name: "Karlo Financial",
    kind: "Financial services",
    tag: "Client",
    desc: "Syntrex delivers the digital operation: the website, brand presence, and automation of repetitive back-office work.",
    detail: {
      challenge:
        "Karlo Financial needed a credible digital presence and less manual back-office work.",
      solution:
        "Syntrex built the website and brand presence and automated the repetitive back-office steps that were slowing the team down.",
      result:
        "A professional digital presence backed by automated workflows that give the team time back.",
    },
  },
  {
    icon: Truck,
    // No banner photo yet, so the card renders the Truck brand-icon banner,
    // the same fallback the other cards use when their image is unavailable.
    // To add a real photo, host it the way Doughbrik's is (a mcusercontent.com
    // CDN URL) or add a local asset, then set `image` and `imageAlt` here.
    name: "The Decal Dudes",
    kind: "Commercial trailer services",
    tag: "Client, website build",
    desc: "Full website redesign and digital foundation for a nationwide commercial trailer services company, including conversion-focused UX, quote intake, project galleries, and search optimization. Repositioned the brand around commercial decal removal, trailer de-identification, washing, and aluminum brightening with a cleaner enterprise-level customer experience.",
    detail: {
      challenge:
        "The Decal Dudes needed a more professional digital presence that could appeal to large leasing companies, fleet operators, and commercial clients while making their services and results easier to understand.",
      solution:
        "Syntrex redesigned the website from the ground up with a streamlined commercial layout, real before-and-after project photography, interactive service comparisons, nationwide positioning, improved quote intake, and an SEO and AI-search-ready site structure.",
      result:
        "The new site gives The Decal Dudes a significantly more polished and credible digital presence, with clearer service positioning, stronger visual proof of work, and a conversion path built around commercial quote requests.",
    },
  },
  {
    icon: Cpu,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475" + UNSPLASH,
    imageAlt: "Macro shot of a circuit board",
    name: "Kinetix",
    kind: "Technology partner",
    tag: "Partner",
    partner: true,
    desc: "Kinetix refers AI and automation work to Syntrex for build and delivery. A partner, not a client.",
  },
];

/** Card banner image with the brand icon as an onError fallback (external images
 *  may 403 in the sandbox; production renders the photo). */
function BannerImage({ c }: { c: Client }) {
  const [failed, setFailed] = useState(false);
  if (failed || !c.image)
    return (
      <div className="grid h-full w-full place-items-center">
        <Icon3D icon={c.icon} size={52} iconSize={24} />
      </div>
    );
  return (
    <img
      src={c.image}
      alt={c.imageAlt || c.name}
      loading="lazy"
      decoding="async"
      width={1200}
      height={675}
      onError={() => setFailed(true)}
      className="h-full w-full object-cover"
    />
  );
}

function ClientCard({ c }: { c: Client }) {
  const [open, setOpen] = useState(false);
  return (
    <article className="surface-card surface-card-hover group flex h-full flex-col overflow-hidden p-0">
      <div className="brand-photo aspect-[16/9] w-full overflow-hidden">
        <BannerImage c={c} />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <div className="text-eyebrow">{c.kind}</div>
            <div className="mt-1 text-lg font-semibold text-foreground">{c.name}</div>
          </div>
          <span
            className={`mt-1 inline-flex shrink-0 items-center rounded-full border px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.14em] ${
              c.partner
                ? "border-white/40 text-foreground"
                : "border-hairline bg-background text-muted-foreground"
            }`}
          >
            {c.tag}
          </span>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
        {c.result ? (
          <p className="mt-3 border-t border-hairline pt-3 text-sm font-medium text-foreground">
            {c.result}
          </p>
        ) : null}

        {c.detail ? (
          <div className="mt-auto pt-4">
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {open ? "Hide details" : "Challenge, solution, result"}
              <ChevronDown
                size={14}
                className={`transition-transform ${open ? "rotate-180" : ""}`}
              />
            </button>
            {open ? (
              <dl className="mt-4 space-y-3 border-t border-hairline pt-4">
                <div>
                  <dt className="text-eyebrow mb-1">Challenge</dt>
                  <dd className="text-sm leading-relaxed text-muted-foreground">
                    {c.detail.challenge}
                  </dd>
                </div>
                <div>
                  <dt className="text-eyebrow mb-1">Solution</dt>
                  <dd className="text-sm leading-relaxed text-muted-foreground">
                    {c.detail.solution}
                  </dd>
                </div>
                <div>
                  <dt className="text-eyebrow mb-1">Result</dt>
                  <dd className="text-sm leading-relaxed text-foreground">{c.detail.result}</dd>
                </div>
              </dl>
            ) : null}
          </div>
        ) : null}
      </div>
    </article>
  );
}

function Work() {
  return (
    <>
      <PageHero
        variant="mosaic"
        eyebrow="Customers"
        title="The companies we run the back end for."
        description="Operating companies Syntrex runs the digital and AI back end for, plus the partners who bring us the work. Every number here is a verified result from a real engagement."
      >
        <Button asChild size="lg" variant="accent">
          <Link to="/diagnostic">
            Start the diagnostic
            <ArrowRight />
          </Link>
        </Button>
      </PageHero>

      <Section>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {clients.map((c, i) => (
            <Reveal key={c.name} delay={i * 90}>
              <ClientCard c={c} />
            </Reveal>
          ))}
        </div>
      </Section>

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
