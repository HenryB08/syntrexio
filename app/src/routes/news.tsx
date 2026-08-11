import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { pageHead } from "@/lib/seo";
import { ArrowRight, Bot, DollarSign, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { Icon3D } from "@/components/site/Icon3D";

export const Route = createFileRoute("/news")({
  head: () => pageHead("/news"),
  component: News,
});

type Post = {
  icon: typeof Layers;
  image: string;
  title: string;
  date: string;
  excerpt: string;
  href?: string;
};

// Newest first. To add a post, prepend an entry here and add a matching
// NewsArticle to the /news schema in seo-data.ts. Images hotlink the Mailchimp
// CDN (403 in the sandbox, load in production; the icon is the onError fallback).
const posts: Post[] = [
  {
    icon: Layers,
    image:
      "https://mcusercontent.com/d9f0645acdcd85eb1ee1a8067/images/c6f0cef5-488a-df51-14d1-da05ce42c51b.png",
    title: "Syntrex, the AI infrastructure layer behind operating companies",
    date: "August 2026",
    excerpt:
      "One team runs a company's entire digital and AI back end across four tracks: visibility, conversion, presence, and operations. Nobody owns the outcome. We do.",
    href: "/about",
  },
  {
    icon: Bot,
    image:
      "https://mcusercontent.com/d9f0645acdcd85eb1ee1a8067/images/efd26a69-39e0-70b7-5ab1-9f27517231b7.png",
    title: "Introducing Agent Workforce",
    date: "August 2026",
    excerpt:
      "The flagship: an installed fleet of AI agents that runs the operational work a company pays salaries for, continuously, with a human in control. It is not a chatbot.",
    href: "/services",
  },
  {
    icon: DollarSign,
    image:
      "https://mcusercontent.com/d9f0645acdcd85eb1ee1a8067/images/263a40e9-7220-0431-5618-6f118ac0053b.png",
    title: "Every price, published",
    date: "August 2026",
    excerpt:
      "Retainers, builds, and Agent Workforce, all on the site. No discovery call to find out what it costs. You get the output, not the overhead.",
    href: "/pricing",
  },
];

/** Post cover image with the post icon as an onError fallback (CDN images 403
 *  in the sandbox; in production they render as the card visual). */
function PostVisual({ p }: { p: Post }) {
  const [failed, setFailed] = useState(false);
  if (failed)
    return (
      <div className="grid h-full w-full place-items-center">
        <Icon3D icon={p.icon} size={52} iconSize={24} />
      </div>
    );
  return (
    <img
      src={p.image}
      alt={p.title}
      loading="lazy"
      onError={() => setFailed(true)}
      className="h-full w-full object-cover"
    />
  );
}

function News() {
  return (
    <>
      <PageHero
        variant="grid"
        eyebrow="News"
        title="What's new at Syntrex."
        description="Announcements and updates from the team running the back end for operating companies."
      />

      <Section>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, i) => {
            const body = (
              <article className="surface-card surface-card-hover group flex h-full flex-col overflow-hidden p-0">
                <div className="brand-photo aspect-[16/9] w-full overflow-hidden">
                  <PostVisual p={p} />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="text-eyebrow">{p.date}</div>
                  <h2 className="mt-2 text-lg font-semibold text-foreground">{p.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.excerpt}</p>
                  {p.href ? (
                    <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-foreground">
                      Read more
                      <ArrowRight
                        size={14}
                        className="transition-transform group-hover:translate-x-0.5"
                      />
                    </div>
                  ) : null}
                </div>
              </article>
            );
            if (!p.href)
              return (
                <Reveal key={p.title} delay={i * 90}>
                  {body}
                </Reveal>
              );
            return (
              <Reveal key={p.title} delay={i * 90}>
                <Link to={p.href} className="block h-full">
                  {body}
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section className="border-t border-hairline text-center">
        <Reveal>
          <h2 className="text-display mx-auto max-w-2xl text-3xl text-foreground md:text-5xl">
            See where to start.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            The diagnostic maps what is not working and names the services that fit.
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
