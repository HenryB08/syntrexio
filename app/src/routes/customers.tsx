import { createFileRoute, Link } from "@tanstack/react-router";
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
  name: string;
  label: string;
  badge?: string;
  desc: string;
};

const customers: Customer[] = [
  {
    icon: Flame,
    name: "HALT Fire",
    label: "Customer",
    badge: "Runs SYN Growth + Workspace",
    desc: "Industrial fire suppression. Syntrex built and runs the full digital operation.",
  },
  {
    icon: Cookie,
    name: "Doughbrik's Wavers",
    label: "Customer",
    badge: "Runs SYN Growth + Workspace",
    desc: "The consumer snack brand from David Dobrik, one of the most-followed creators in the world. Built and operated by Syntrex.",
  },
  {
    icon: Landmark,
    name: "Karlo Financial",
    label: "Partner",
    desc: "Financial services partner.",
  },
  {
    icon: Cpu,
    name: "Kinetix Technology Group",
    label: "Partner",
    desc: "Technology partner.",
  },
];

function Customers() {
  return (
    <>
      <PageHero
        variant="mosaic"
        eyebrow="Customers"
        title="The businesses running on SYN."
        description="Companies Syntrex builds and runs the digital operation for, and the partners we work alongside."
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
                  <Icon3D icon={c.icon} size={56} iconSize={26} />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-eyebrow">{c.label}</div>
                      <div className="mt-1 text-lg font-semibold text-foreground">
                        {c.name}
                      </div>
                    </div>
                    {c.badge ? (
                      <span className="mt-1 inline-flex shrink-0 items-center rounded-full border border-hairline bg-background px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
                        {c.badge}
                      </span>
                    ) : null}
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
