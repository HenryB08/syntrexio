import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { pageHead } from "@/lib/seo";
import { ArrowRight, Cookie, Cpu, Flame, Landmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { Icon3D } from "@/components/site/Icon3D";

export const Route = createFileRoute("/customers")({
  head: () => pageHead("/customers"),
  component: Customers,
});

type Customer = {
  icon: typeof Flame;
  image: string;
  imageAlt: string;
  name: string;
  badge: string;
  desc: string;
};

// Banner images: dark-toned Unsplash stock (free commercial license) fitting
// each theme, plus one Mailchimp-CDN brand image. They may 403 in the sandbox
// but load in production; the banner falls back to the brand icon on error.
const UNSPLASH = "?auto=format&fit=crop&w=1400&h=800&q=80";
const customers: Customer[] = [
  {
    icon: Flame,
    // Same URL pattern as the working Karlo/Kinetix banners, with a large-scale
    // wildfire photo (industrial fire suppression energy).
    image: "https://images.unsplash.com/photo-1523861751938-121b5323b48b" + UNSPLASH,
    imageAlt: "Raging wildfire against a dark sky",
    name: "HALT Fire",
    badge: "Runs SYN Growth + Workspace",
    desc: "Industrial fire suppression. Syntrex built and runs the full digital operation.",
  },
  {
    icon: Cookie,
    image: "https://mcusercontent.com/d9f0645acdcd85eb1ee1a8067/images/45c480e8-9b07-53dc-0733-e5ed3bb5b2f3.png",
    imageAlt: "Doughbrik's Wavers brand imagery",
    name: "Doughbrik's Wavers",
    badge: "Runs SYN Growth + Workspace",
    desc: "The consumer snack brand from David Dobrik, one of the most-followed creators in the world. Built and operated by Syntrex.",
  },
  {
    icon: Landmark,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab" + UNSPLASH,
    imageAlt: "Financial-district glass towers at dusk",
    name: "Karlo Financial",
    badge: "Runs SYN Growth + Workspace",
    desc: "Financial services. Syntrex builds and runs the digital operation on SYN Growth and SYN Workspace.",
  },
  {
    icon: Cpu,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475" + UNSPLASH,
    imageAlt: "Macro shot of a circuit board",
    name: "Kinetix Technology Group",
    badge: "Runs SYN Growth + Workspace",
    desc: "Technology group. Syntrex builds and runs the digital operation on SYN Growth and SYN Workspace.",
  },
];

/** Cinematic banner: the themed stock image, with the brand icon as an onError
 *  fallback (Unsplash may 403 in the sandbox; production renders the photo). */
function BannerImage({ c }: { c: Customer }) {
  const [failed, setFailed] = useState(false);
  if (failed)
    return (
      <div className="grid h-full w-full place-items-center">
        <Icon3D icon={c.icon} size={56} iconSize={26} />
      </div>
    );
  return (
    <img
      src={c.image}
      alt={c.imageAlt}
      loading="lazy"
      onError={() => setFailed(true)}
      className="h-full w-full object-cover"
    />
  );
}

function Customers() {
  return (
    <>
      <PageHero
        variant="mosaic"
        eyebrow="Customers"
        title="The businesses running on SYN."
        description="Companies Syntrex builds and runs the full digital operation for, on SYN Growth and SYN Workspace."
      >
        <Button asChild size="lg" variant="accent">
          <Link to="/leak-audit">
            Get Your Free Leak Audit
            <ArrowRight />
          </Link>
        </Button>
      </PageHero>

      <Section>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {customers.map((c, i) => (
            <Reveal key={c.name} delay={i * 90}>
              <article className="surface-card surface-card-hover group flex h-full flex-col overflow-hidden p-0">
                <div className="brand-photo aspect-[16/9] w-full overflow-hidden">
                  <BannerImage c={c} />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-eyebrow">Customer</div>
                      <div className="mt-1">
                        <span className="text-lg font-semibold text-foreground">
                          {c.name}
                        </span>
                      </div>
                    </div>
                    <span className="mt-1 inline-flex shrink-0 items-center rounded-full border border-hairline bg-background px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
                      {c.badge}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {c.desc}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-t border-hairline text-center">
        <Reveal>
          <h2 className="text-display mx-auto max-w-2xl text-3xl text-foreground md:text-5xl">
            Want to run your business on SYN?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Start with a Free Leak Audit, or join the SYN Workspace waitlist.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="xl" variant="accent">
              <Link to="/leak-audit">
                Get Your Free Leak Audit
                <ArrowRight />
              </Link>
            </Button>
            <Button asChild size="xl" variant="outline">
              <a href="https://syn.syntrexio.com">Join the Workspace waitlist</a>
            </Button>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
