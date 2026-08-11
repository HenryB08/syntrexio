import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Faq } from "@/components/site/Faq";
import { pageHead } from "@/lib/seo";
import { ArrowRight, Globe, MapPin, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeader } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { MagneticButton } from "@/components/site/MagneticButton";

export const Route = createFileRoute("/about")({
  head: () => pageHead("/about"),
  component: About,
});

const facts = [
  { icon: MapPin, label: "Headquartered", value: "Windermere, FL, Greater Orlando" },
  { icon: Globe, label: "Reach", value: "Operating companies worldwide" },
  { icon: Layers, label: "Model", value: "Human-directed AI agent fleet" },
];

type Member = { name: string; role: string; initials: string; photo: string; email?: string };

// Photos hotlink the Mailchimp CDN (same host as the hero image). They 403 in
// the sandbox but load in production; initials are the onError fallback.
const team: Member[] = [
  {
    name: "Henry Bello",
    role: "Founder & CEO",
    initials: "HB",
    email: "henry@syntrexio.com",
    photo:
      "https://mcusercontent.com/d9f0645acdcd85eb1ee1a8067/images/3cc9cc48-ba3c-9ebd-464d-0df28c4cc939.png",
  },
  {
    name: "Sofia Weeden",
    role: "Chief Financial Officer",
    initials: "SW",
    email: "sofia@syntrexio.com",
    photo:
      "https://mcusercontent.com/d9f0645acdcd85eb1ee1a8067/images/eb1cf569-580c-9d7e-a642-0f9458c4cf05.png",
  },
  {
    name: "Alexander Ohmer",
    role: "Head of Operations",
    initials: "AO",
    photo:
      "https://mcusercontent.com/d9f0645acdcd85eb1ee1a8067/images/9dfeaa13-67cf-4655-f0fa-09489017922c.png",
  },
  {
    name: "Anthony Fallon",
    role: "Head of Digital",
    initials: "AF",
    photo:
      "https://mcusercontent.com/d9f0645acdcd85eb1ee1a8067/images/efcf170e-3d5b-743c-35eb-d66e2e79fb9a.png",
  },
  {
    name: "Ciana Bello",
    role: "Director of Marketing & Social",
    initials: "CB",
    photo:
      "https://mcusercontent.com/d9f0645acdcd85eb1ee1a8067/images/c6a2a7c2-55d3-dbff-b92a-567152be1a15.png",
  },
];

function About() {
  return (
    <>
      <PageHero
        variant="worldmap"
        eyebrow="About Syntrex"
        title="The AI infrastructure layer behind operating companies."
        description="Syntrex runs the full digital and AI back end of a business across visibility, conversion, presence, and operations. One team, leading every project, accountable for the outcome. Headquartered in Windermere, Florida, working with operators worldwide."
      />

      <Section>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {facts.map((f, i) => (
            <Reveal key={f.label} delay={i * 80}>
              <div className="surface-card surface-card-hover p-6">
                <div className="grid h-10 w-10 place-items-center rounded-lg border border-hairline bg-background text-accent">
                  <f.icon size={16} />
                </div>
                <div className="text-eyebrow mt-5">{f.label}</div>
                <div className="mt-1.5 text-lg font-semibold text-foreground">{f.value}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-t border-hairline bg-surface/20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <SectionHeader eyebrow="Our story" title="It started with one company's back end." />
          </Reveal>
          <Reveal delay={100}>
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              <p>
                Syntrex was founded by Henry Bello and started by building the full digital and AI
                stack for HALT Fire, an industrial fire suppression company. The work produced 280%
                search growth and returned more than ten hours a week to the team.
              </p>
              <p>
                That engagement proved the model: one partner running the entire back end produces
                results that fragmented vendors cannot. Nobody else owned the outcome. Syntrex did.
              </p>
              <p>
                Today Syntrex runs that same model across four tracks, for operating companies
                worldwide. It is the reason AI spend so often fails: the money is spent, but no one
                owns the result. Syntrex is the layer that does.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="border-t border-hairline">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <SectionHeader eyebrow="How we deliver" title="One team. A fleet that scales." />
          </Reveal>
          <Reveal delay={100}>
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              <p>
                An orchestrated fleet of AI agents produces the work in parallel. Humans direct,
                review, and own every outcome, and everything a client sees passes a human first.
              </p>
              <p>
                Every client is encoded once: brand, offer, rules, and the way they work. The system
                gets faster and more accurate with every engagement. That is how one team leads
                every project end to end without a headcount agency behind it.
              </p>
              <p>
                It is also why the pricing works. Agencies charge for the team behind the work. We
                do not have one. You get the output, not the overhead.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section>
        <Reveal>
          <SectionHeader
            eyebrow="Team"
            title="The people who own the outcome."
            description="Leadership directs, reviews, and stands behind every engagement. The production itself runs on an orchestrated fleet of AI agents."
          />
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 100}>
              <article className="surface-card surface-card-hover group overflow-hidden p-0">
                <TeamPhoto member={m} />
                <div className="p-6" data-parallax="text">
                  <div className="text-[15px] font-semibold text-foreground">{m.name}</div>
                  <div className="text-sm text-muted-foreground">{m.role}</div>
                  {m.email ? (
                    <a
                      href={`mailto:${m.email}`}
                      className="mt-2 inline-block text-sm text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground"
                    >
                      {m.email}
                    </a>
                  ) : null}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-t border-hairline text-center">
        <Reveal>
          <h2 className="text-display mx-auto max-w-2xl text-3xl text-foreground md:text-5xl">
            Ready to see where to start?
          </h2>
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
      <Faq path="/about" />
    </>
  );
}

/** Team headshot with a graceful fallback to the member's initials until the
 *  photo loads, or if it 404s, so the page always renders cleanly. */
function TeamPhoto({ member }: { member: Member }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className="brand-photo aspect-[4/3] w-full">
      {!failed ? (
        <img
          src={member.photo}
          alt={`${member.name}, ${member.role} at Syntrex`}
          loading="lazy"
          onError={() => setFailed(true)}
        />
      ) : (
        <div
          className="absolute inset-0 grid place-items-center text-4xl font-semibold text-foreground/70"
          role="img"
          aria-label={`${member.name}, ${member.role} at Syntrex`}
          style={{
            backgroundImage:
              "radial-gradient(circle at 35% 35%, oklch(1 0 0 / 10%), transparent 55%), radial-gradient(circle at 70% 75%, oklch(1 0 0 / 5%), transparent 60%)",
          }}
        >
          {member.initials}
        </div>
      )}
    </div>
  );
}
