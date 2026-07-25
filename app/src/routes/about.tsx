import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Faq } from "@/components/site/Faq";
import { pageHead } from "@/lib/seo";
import { ArrowRight, Globe, MapPin, Users } from "lucide-react";
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
  { icon: Globe, label: "Clients", value: "Served worldwide" },
  { icon: Users, label: "Team", value: "Senior leads, full in-house crew" },
];

type Member = { name: string; role: string; initials: string; photo: string };

const team: Member[] = [
  { name: "Henry Bello", role: "Founder & CEO", initials: "HB", photo: "/team/henry.png" },
  { name: "Sofia Weeden", role: "Chief Financial Officer", initials: "SW", photo: "/team/sofia.png" },
  { name: "Alexander Ohmer", role: "Head of Operations", initials: "AO", photo: "/team/alexander.png" },
  { name: "Anthony Fallon", role: "Head of Digital", initials: "AF", photo: "/team/anthony.png" },
  { name: "Ciana Bello", role: "Director of Marketing & Social", initials: "CB", photo: "/team/ciana.png" },
];

function About() {
  return (
    <>
      <PageHero
        variant="worldmap"
        eyebrow="About Syntrex"
        title="The team that stops businesses losing customers."
        description="Syntrex builds, installs, and runs the Growth System for local and service businesses worldwide, from our headquarters in Windermere, Florida, in the greater Orlando area."
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
                <div className="mt-1.5 text-lg font-semibold text-foreground">
                  {f.value}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-t border-hairline bg-surface/20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <SectionHeader eyebrow="Our story" title="Started on a leak. Built into a system." />
          </Reveal>
          <Reveal delay={100}>
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              <p>
                Syntrex started with one observation: most local businesses lose
                more revenue to missed calls and slow replies in a month than
                they spend on marketing all year. The tools to fix it already
                existed. Nobody was assembling them into a system a business
                could actually run on.
              </p>
              <p>
                So we built one. The Growth System answers every call, chat, and
                form the moment it arrives, follows up until the customer books,
                and reports what it recovered each month in the Receipt. What
                began as a fix for missed calls is now the front door to a full
                growth stack, extended by the Presence System and the Brand
                Studio.
              </p>
              <p>
                Today Syntrex runs as a senior team leading every project, with a
                full in-house team delivering the work, giving the capacity of a
                large agency with the focus of a boutique one. Every engagement
                is backed by a written guarantee.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section>
        <Reveal>
          <SectionHeader eyebrow="Team" title="A senior team, in-house." />
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 100}>
              <article className="surface-card surface-card-hover group overflow-hidden p-0">
                <TeamPhoto member={m} />
                <div className="p-6" data-parallax="text">
                  <div className="text-[15px] font-semibold text-foreground">
                    {m.name}
                  </div>
                  <div className="text-sm text-muted-foreground">{m.role}</div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-t border-hairline text-center">
        <Reveal>
          <h2 className="text-display mx-auto max-w-2xl text-3xl text-foreground md:text-5xl">
            Ready to see what you're leaving on the table?
          </h2>
          <div className="mt-8">
            <MagneticButton>
              <Button asChild size="xl" variant="accent">
                <Link to="/leak-audit">
                  Get Your Free Leak Audit
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

/** Team headshot with a graceful fallback: the photo files live at
 *  /public/team/[firstname].png and may not be uploaded yet. Until a photo
 *  loads, or if it 404s, the card shows the member's initials so the page
 *  always renders cleanly. */
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
