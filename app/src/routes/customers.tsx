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
  logo: string;
  name: string;
  badge: string;
  desc: string;
};

// Logos hotlinked from the Mailchimp CDN (same host as the hero image). They
// 403 in the sandbox but load in production; the icon is the onError fallback.
const customers: Customer[] = [
  {
    icon: Flame,
    logo: "https://mcusercontent.com/d9f0645acdcd85eb1ee1a8067/images/8c7f2cbe-39b2-9320-be0b-bb06479a0b8a.png",
    name: "HALT Fire",
    badge: "Runs SYN Growth + Workspace",
    desc: "Industrial fire suppression. Syntrex built and runs the full digital operation.",
  },
  {
    icon: Cookie,
    logo: "https://mcusercontent.com/d9f0645acdcd85eb1ee1a8067/images/734ab3d8-515c-429d-8c2e-e3120f60713c.png",
    name: "Doughbrik's Wavers",
    badge: "Runs SYN Growth + Workspace",
    desc: "The consumer snack brand from David Dobrik, one of the most-followed creators in the world. Built and operated by Syntrex.",
  },
  {
    icon: Landmark,
    logo: "https://mcusercontent.com/d9f0645acdcd85eb1ee1a8067/images/c9fb598b-8c07-2c44-3bff-d311dd1b5494.png",
    name: "Karlo Financial",
    badge: "Runs SYN Growth + Workspace",
    desc: "Financial services. Syntrex builds and runs the digital operation on SYN Growth and SYN Workspace.",
  },
  {
    icon: Cpu,
    logo: "https://mcusercontent.com/d9f0645acdcd85eb1ee1a8067/images/76765f2c-404c-79a0-7c58-51be09b4dc23.png",
    name: "Kinetix Technology Group",
    badge: "Runs SYN Growth + Workspace",
    desc: "Technology group. Syntrex builds and runs the digital operation on SYN Growth and SYN Workspace.",
  },
];

/** Customer logo with the brand icon as an onError fallback (the CDN logos 403
 *  in the sandbox; in production they render, monochrome on the dark card). */
function CustomerLogo({ c }: { c: Customer }) {
  const [failed, setFailed] = useState(false);
  if (failed) return <Icon3D icon={c.icon} size={56} iconSize={26} />;
  return (
    <img
      src={c.logo}
      alt={c.name}
      loading="lazy"
      onError={() => setFailed(true)}
      className="max-h-14 w-auto max-w-[60%] object-contain opacity-80 brightness-0 invert"
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
                <div className="brand-photo grid aspect-[16/9] w-full place-items-center">
                  <CustomerLogo c={c} />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-eyebrow">Customer</div>
                      <div className="mt-1 text-lg font-semibold text-foreground">
                        {c.name}
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
