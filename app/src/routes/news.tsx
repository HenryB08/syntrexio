import { createFileRoute, Link } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { ArrowRight, Globe, LayoutGrid, Rocket } from "lucide-react";
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
  icon: typeof Rocket;
  title: string;
  date: string; // display date
  excerpt: string;
  href?: string;
  external?: boolean;
};

// Newest first. To add a post, prepend an entry here and add a matching
// NewsArticle to the /news schema in seo-data.ts.
const posts: Post[] = [
  {
    icon: Globe,
    title: "The new syntrexio.com",
    date: "July 24, 2026",
    excerpt:
      "One platform, two products, one new identity. A look at where Syntrex is headed as a software company: SYN Growth for your customers, SYN Workspace for your operations.",
    href: "/about",
  },
  {
    icon: LayoutGrid,
    title: "SYN Workspace enters early access",
    date: "July 18, 2026",
    excerpt:
      "The AI business workspace that runs your calendar, content, assets, and automations from one encoded brand is now in early access. The waitlist is open.",
    href: "https://syn.syntrexio.com",
    external: true,
  },
  {
    icon: Rocket,
    title: "Introducing SYN Growth",
    date: "July 14, 2026",
    excerpt:
      "The guaranteed system that answers every call, chat, and form in seconds, captures every missed call, and follows up until the customer books. Launching soon at printed pricing.",
    href: "/pricing",
  },
];

function News() {
  return (
    <>
      <PageHero
        variant="grid"
        eyebrow="News"
        title="What's new at Syntrex."
        description="Product launches, releases, and company updates as we build SYN."
      />

      <Section>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, i) => {
            const body = (
              <article className="surface-card surface-card-hover group flex h-full flex-col overflow-hidden p-0">
                <div className="brand-photo grid aspect-[16/9] w-full place-items-center">
                  <Icon3D icon={p.icon} size={52} iconSize={24} />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="text-eyebrow">{p.date}</div>
                  <h2 className="mt-2 text-lg font-semibold text-foreground">
                    {p.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {p.excerpt}
                  </p>
                  {p.href ? (
                    <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-foreground">
                      Read more
                      <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                    </div>
                  ) : null}
                </div>
              </article>
            );
            if (!p.href) return <Reveal key={p.title} delay={i * 90}>{body}</Reveal>;
            return (
              <Reveal key={p.title} delay={i * 90}>
                {p.external ? (
                  <a href={p.href} className="block h-full">{body}</a>
                ) : (
                  <Link to={p.href} className="block h-full">{body}</Link>
                )}
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section className="border-t border-hairline text-center">
        <Reveal>
          <h2 className="text-display mx-auto max-w-2xl text-3xl text-foreground md:text-5xl">
            Be first when SYN Growth launches.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Start with a Free Leak Audit, the pre-launch entry point.
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
