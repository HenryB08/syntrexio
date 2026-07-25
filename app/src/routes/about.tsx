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

type Member = { name: string; role: string; initials: string; photo: string; email?: string };

// Photos hotlink the Mailchimp CDN (same host as the hero image). They 403 in
// the sandbox but load in production; initials are the onError fallback.
const team: Member[] = [
  { name: "Henry Bello", role: "Founder & CEO", initials: "HB", email: "henry@syntrexio.com", photo: "https://mcusercontent.com/d9f0645acdcd85eb1ee1a8067/images/3cc9cc48-ba3c-9ebd-464d-0df28c4cc939.png" },
  { name: "Sofia Weeden", role: "Chief Financial Officer", initials: "SW", email: "sofia@syntrexio.com", photo: "https://mcusercontent.com/d9f0645acdcd85eb1ee1a8067/images/eb1cf569-580c-9d7e-a642-0f9458c4cf05.png" },
  { name: "Alexander Ohmer", role: "Head of Operations", initials: "AO", photo: "https://mcusercontent.com/d9f0645acdcd85eb1ee1a8067/images/9dfeaa13-67cf-4655-f0fa-09489017922c.png" },
  { name: "Anthony Fallon", role: "Head of Digital", initials: "AF", photo: "https://mcusercontent.com/d9f0645acdcd85eb1ee1a8067/images/efcf170e-3d5b-743c-35eb-d66e2e79fb9a.png" },
  { name: "Ciana Bello", role: "Director of Marketing & Social", initials: "CB", photo: "https://mcusercontent.com/d9f0645acdcd85eb1ee1a8067/images/c6a2a7c2-55d3-dbff-b92a-567152be1a15.png" },
];

function About() {
  return (
    <>
      <PageHero
        variant="worldmap"
        eyebrow="About Syntrex"
        title="From agency to software company."
        description="Syntrex builds SYN, one AI platform in two products, both in development. We started as a hands-on digital agency, saw the same problems in every business we built for, and productized the fixes. Headquartered in Windermere, Florida, serving operators worldwide."
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
            <SectionHeader eyebrow="Our story" title="It started as client work." />
          </Reveal>
          <Reveal delay={100}>
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              <p>
                Syntrex began as a hands-on digital agency: building websites,
                e-commerce, content systems, and AI automations for real
                businesses, including industrial brand HALT Fire and consumer
                brand Doughbrik's Wavers.
              </p>
              <p>
                Running that client work exposed the same two problems
                everywhere. Businesses lose customers the moment they can't
                answer. And their operations live scattered across a dozen
                disconnected tools. So we productized the fixes.
              </p>
              <p>
                The client work became SYN Growth, the system that answers and
                books customers automatically. The operations problem is becoming
                SYN Workspace, one AI workspace that runs the business. Today
                Syntrex is a software company, and the agency roots are why the
                products work in the real world. A senior team leads every
                project, with a full in-house team delivering the work.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section>
        <Reveal>
          <SectionHeader
            eyebrow="Team"
            title="The core team."
            description="The leadership that runs every engagement. A broader in-house team of developers and specialists delivers the work alongside them."
          />
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
