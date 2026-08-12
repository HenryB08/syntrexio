import { createFileRoute, Link } from "@tanstack/react-router";
import { Faq } from "@/components/site/Faq";
import { pageHead } from "@/lib/seo";
import {
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Search,
  MessageSquare,
  LayoutTemplate,
  Cog,
  Fingerprint,
  Bot,
  Infinity as InfinityIcon,
  UserCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { Section, SectionHeader } from "@/components/site/Section";
import { CountUp } from "@/components/site/CountUp";
import { Icon3D } from "@/components/site/Icon3D";
import { MagneticButton } from "@/components/site/MagneticButton";
import { Aurora } from "@/components/site/Aurora";
import { WorldMap } from "@/components/site/WorldMap";
import { useEffect, useRef } from "react";
import heroOffice from "@/assets/hero-office.png.asset.json";
import glassLobby from "@/assets/glass-lobby.png.asset.json";
import aerialCity from "@/assets/aerial-city.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => pageHead("/"),
  component: Home,
});

// The problem: money spent on AI, results not arriving. Sources cited below the
// band. Every figure traces to the verified research list.
const problemStats = [
  {
    to: 95,
    prefix: "",
    suffix: "%",
    format: "plain" as const,
    label: "of enterprise AI pilots produce no measurable profit-and-loss impact",
  },
  {
    to: 42,
    prefix: "",
    suffix: "%",
    format: "plain" as const,
    label: "of companies scrapped most of their AI initiatives in 2025, up from 17% in 2024",
  },
  {
    to: 70,
    prefix: "~",
    suffix: "%",
    format: "plain" as const,
    label: "of AI failure is people and process, not technology",
  },
];

// Proof: verified engagement results for named clients only. HALT Fire figures
// are Google Search Console, trailing three months.
const proofStats = [
  {
    to: 689,
    prefix: "+",
    suffix: "%",
    format: "plain" as const,
    label: "search clicks for HALT Fire in three months, to 505 total",
  },
  {
    to: 1608,
    prefix: "+",
    suffix: "%",
    format: "commas" as const,
    label: "search impressions for HALT Fire in three months, to 22.9K total",
  },
  {
    to: 10,
    prefix: "",
    suffix: "+",
    format: "plain" as const,
    label: "hours a week returned to the HALT Fire team",
  },
];

// The four tracks. Each names its four services and links to the services page.
const tracks = [
  {
    icon: Search,
    name: "Visibility",
    line: "Get found in search and in AI answers.",
    services: [
      "AI search optimization (GEO)",
      "Traditional search optimization (SEO)",
      "Content production and strategy",
      "Social media systems",
    ],
  },
  {
    icon: MessageSquare,
    name: "Conversion",
    line: "Turn the leads you earn into booked work.",
    services: [
      "AI assistants and customer-facing chat",
      "Lead capture and follow-up systems",
      "Email systems and deliverability",
      "CRM buildout and management",
    ],
  },
  {
    icon: LayoutTemplate,
    name: "Presence",
    line: "A site and brand that match the business you run.",
    services: [
      "Websites and web applications",
      "E-commerce builds",
      "Brand identity and design systems",
      "Imagery and campaign assets",
    ],
  },
  {
    icon: Cog,
    name: "Operations",
    line: "The repetitive work, running itself.",
    services: [
      "Workflow automation and system integration",
      "Custom internal AI tools",
      "Reporting and analytics dashboards",
      "Agent Workforce",
    ],
  },
];

// What Agent Workforce takes over: operational work companies pay salaries for.
const agentWork = [
  "Research",
  "Drafting",
  "Coordination",
  "Data entry",
  "Monitoring",
  "Scheduling",
  "Reporting",
  "First-pass analysis",
];

// How the delivery model works, in four short layers.
const layers = [
  {
    icon: Fingerprint,
    title: "The client encoding",
    line: "We encode your company once: brand, offer, rules, tone, and the way you work.",
  },
  {
    icon: Bot,
    title: "The agent fleet",
    line: "An orchestrated fleet of AI agents produces the work in parallel across all four tracks.",
  },
  {
    icon: InfinityIcon,
    title: "Always-on infrastructure",
    line: "It runs continuously, with a full approval trail and logging behind every action.",
  },
  {
    icon: UserCheck,
    title: "Human judgment",
    line: "A human directs, reviews, and signs off on everything a client sees. We own the outcome.",
  },
];

// Pricing preview. Full figures live on /pricing.
const pricepoints = [
  { label: "AI Systems Diagnostic", value: "$3,500", note: "credited toward any engagement" },
  {
    label: "Single track retainer",
    value: "from $1,800/mo",
    note: "visibility, conversion, presence, or operations",
  },
  { label: "Full Stack", value: "$7,500/mo", note: "all four tracks, best value" },
  {
    label: "Agent Workforce",
    value: "$5,000 to $12,000/mo",
    note: "your internal fleet, operated",
  },
];

// Named proof only: HALT Fire, Doughbrik's Wavers, The Decal Dudes, Karlo
// Financial, and Kinetix (partner). Karlo has no public site URL yet, so it
// renders as a plain wordmark rather than a link.
const trusted: { name: string; href?: string }[] = [
  { name: "HALT Fire", href: "https://haltfire.com/" },
  { name: "Doughbrik's Wavers", href: "https://eatdoughbriks.com/" },
  { name: "The Decal Dudes", href: "https://thedecaldudes.com/" },
  { name: "Karlo Financial" },
  { name: "Kinetix", href: "https://kinetixtechnologygroup.com/" },
];
const marqueeNames = [...trusted, ...trusted, ...trusted, ...trusted];

function Home() {
  const choreoRef = useRef<HTMLDivElement | null>(null);
  const heroRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>("[data-choreo]");
    const vh = window.innerHeight || document.documentElement.clientHeight;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0, rootMargin: "0px 0px 0px 0px" },
    );
    nodes.forEach((n) => {
      if (n.getBoundingClientRect().top < vh) n.classList.add("in-view");
      else io.observe(n);
    });
    return () => io.disconnect();
  }, []);

  // Hero scale/fade on scroll, 1 -> 0.97, opacity 1 -> 0.35
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = heroRef.current;
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const h = window.innerHeight * 0.9;
        const p = Math.min(1, Math.max(0, window.scrollY / h));
        el.style.setProperty("--p", p.toFixed(3));
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const cardTilt = (e: React.PointerEvent<HTMLElement>) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--tx", ((e.clientX - r.left) / r.width - 0.5).toFixed(3));
    el.style.setProperty("--ty", ((e.clientY - r.top) / r.height - 0.5).toFixed(3));
  };

  return (
    <div ref={choreoRef} className="home">
      {/* HERO - positioning */}
      <section className="relative overflow-hidden min-h-[92vh] flex items-center">
        <div className="ken-burns ken-burns--bright">
          <img
            src={heroOffice.url}
            alt=""
            aria-hidden
            width={1920}
            height={1080}
            fetchPriority="high"
            decoding="async"
          />
        </div>
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, oklch(0.10 0 0 / 68%) 0%, oklch(0.10 0 0 / 45%) 55%, oklch(0.10 0 0 / 22%) 100%), linear-gradient(180deg, oklch(0.10 0 0 / 18%) 0%, transparent 40%, oklch(0.10 0 0 / 40%) 100%)",
          }}
        />
        <div
          ref={heroRef}
          className="hero-fade container-page relative pt-20 pb-16 md:pt-24 md:pb-24 w-full"
        >
          <div className="max-w-4xl">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-hairline bg-surface/60 px-3 py-1.5 text-xs text-muted-foreground backdrop-blur">
                <Sparkles size={12} className="text-foreground" />
                Nobody owns the outcome. We do.
              </div>
            </Reveal>
            <h1 className="text-display word-rise mt-6 text-5xl text-foreground md:text-7xl">
              {"The AI infrastructure layer".split(" ").map((w, i) => (
                <span key={`a-${i}`} style={{ ["--i" as never]: i }}>
                  {w}
                  {" "}
                </span>
              ))}
              {"behind operating companies.".split(" ").map((w, i) => (
                <span key={`b-${i}`} className="text-shimmer" style={{ ["--i" as never]: i + 3 }}>
                  {w}
                  {" "}
                </span>
              ))}
            </h1>
            <Reveal delay={160}>
              <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
                Syntrex runs a company's entire digital and AI back end across four tracks:
                visibility, conversion, presence, and operations. One team, leading every project
                end to end, accountable for the result.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <MagneticButton>
                  <Button asChild size="xl" variant="accent" className="animate-glow-pulse">
                    <Link to="/diagnostic">
                      Start the diagnostic
                      <ArrowRight />
                    </Link>
                  </Button>
                </MagneticButton>
                <MagneticButton>
                  <Button asChild size="xl" variant="outline">
                    <Link to="/pricing">See pricing</Link>
                  </Button>
                </MagneticButton>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TRUSTED BY - marquee */}
      <section className="group border-b border-hairline">
        <div className="py-8 md:py-10">
          <Reveal>
            <div className="text-eyebrow mb-8 text-center">Trusted by</div>
            <div
              className="marquee"
              aria-label="Trusted by HALT Fire, Doughbrik's Wavers, The Decal Dudes, Karlo Financial, and Kinetix"
            >
              <div className="marquee__track">
                {[0, 1].map((dup) => (
                  <div key={dup} className="marquee__group" aria-hidden={dup === 1}>
                    {marqueeNames.map((t, i) => (
                      <div key={`${dup}-${i}`} className="marquee__item">
                        {t.href ? (
                          <a
                            href={t.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            tabIndex={dup === 1 ? -1 : undefined}
                            className="marquee__wordmark"
                          >
                            {t.name}
                          </a>
                        ) : (
                          <span className="marquee__wordmark">{t.name}</span>
                        )}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* THE PROBLEM */}
      <Section className="relative" pad="compact">
        <Aurora variant="whisper" />
        <Reveal>
          <div data-choreo className="headline-blur">
            <SectionHeader
              eyebrow="The problem"
              title="The money is being spent. The results are not arriving."
              description="Enterprises poured $30 to $40 billion into AI pilots and almost none of it moved the bottom line. The reason is not the technology. It is structural: fragmented vendors, no single owner, and nobody accountable for the outcome. Gartner expects more than 40% of agentic AI projects to be canceled by the end of 2027."
            />
          </div>
        </Reveal>
      </Section>

      {/* PROBLEM STAT STRIP */}
      <section className="relative overflow-hidden border-y border-hairline bg-surface/30">
        <div className="ken-burns ken-burns--static">
          <img
            src={aerialCity.url}
            alt=""
            aria-hidden
            width={1920}
            height={1080}
            loading="lazy"
            decoding="async"
          />
        </div>
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, oklch(0.14 0 0 / 82%), oklch(0.14 0 0 / 72%) 50%, oklch(0.14 0 0 / 88%))",
          }}
        />
        <div className="ambient-depth" />
        <div className="container-page relative">
          <div className="grid grid-cols-1 divide-y divide-hairline md:grid-cols-3 md:divide-x md:divide-y-0">
            {problemStats.map((s, i) => (
              <div
                key={s.label}
                data-choreo
                className="stat-scale px-2 py-8 md:px-10 md:py-10"
                style={{ ["--d" as never]: `${i * 100}ms` }}
              >
                <div className="text-display text-5xl text-foreground md:text-6xl">
                  <span className="stat-underline">
                    <CountUp to={s.to} prefix={s.prefix} suffix={s.suffix} format={s.format} />
                  </span>
                </div>
                <p className="stat-caption mt-4 max-w-xs text-sm text-muted-foreground md:text-base">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
          <p className="pb-6 text-center text-xs text-muted-foreground/80">
            Sources: MIT Project NANDA, State of AI in Business, July 2025; S&amp;P Global Market
            Intelligence, June 2025; RAND Corporation, 2024.
          </p>
        </div>
      </section>

      {/* WHAT WE RUN - four tracks */}
      <Section className="relative" pad="compact">
        <Aurora variant="whisper" />
        <Reveal>
          <div data-choreo className="headline-blur">
            <SectionHeader
              eyebrow="What we run"
              title="Four tracks. One team. One accountable owner."
              description="The full digital and AI back end of a company, handled in-house and overseen personally. Start with one track or run all four."
            />
          </div>
        </Reveal>

        <div className="mt-9 grid grid-cols-1 gap-6 md:grid-cols-2">
          {tracks.map((t) => (
            <article
              key={t.name}
              onPointerMove={cardTilt}
              className="surface-card surface-card-hover group flex h-full flex-col p-8"
            >
              <Icon3D icon={t.icon} size={48} iconSize={22} />
              <h3 className="mt-6 text-2xl font-semibold text-foreground">{t.name}</h3>
              <div className="mt-1 text-sm text-foreground/80">{t.line}</div>
              <ul className="mt-5 space-y-2 border-t border-hairline pt-5 text-sm text-muted-foreground">
                {t.services.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
              <div className="mt-auto pt-6">
                <Link
                  to="/services"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground"
                >
                  Explore {t.name}
                  <ArrowRight size={15} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* AGENT WORKFORCE - flagship */}
      <section className="relative overflow-hidden border-y border-hairline bg-surface/40">
        <Aurora variant="soft" />
        <div className="container-page relative py-12 md:py-16">
          <div data-choreo className="border-draw">
            <div className="relative overflow-hidden rounded-[calc(var(--radius-lg)-1px)] bg-background p-8 md:p-12">
              <div className="relative">
                <div className="flex flex-col items-start gap-6 md:flex-row md:items-center">
                  <Icon3D icon={Bot} size={56} iconSize={24} />
                  <div>
                    <div className="text-eyebrow mb-2">The flagship: Agent Workforce</div>
                    <h2 className="text-display max-w-3xl text-2xl text-foreground md:text-4xl">
                      An internal fleet of AI agents, installed inside your business and operated by
                      us.
                    </h2>
                  </div>
                </div>
                <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
                  Agent Workforce takes over the operational work you currently pay salaries for. It
                  runs continuously, with an approval trail and human control on everything that
                  matters. It is not a chatbot. It is an operating layer inside the company.
                </p>

                <div className="mt-8">
                  <div className="text-eyebrow mb-4">Work it takes over</div>
                  <div className="flex flex-wrap gap-2.5">
                    {agentWork.map((w) => (
                      <span
                        key={w}
                        className="inline-flex items-center rounded-full border border-hairline bg-surface/60 px-3.5 py-1.5 text-sm text-foreground"
                      >
                        {w}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
                  <div className="surface-card p-6">
                    <div className="text-sm font-semibold text-foreground">
                      Enterprise consultancies
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Charge millions and deliver slide decks.
                    </p>
                  </div>
                  <div className="surface-card p-6">
                    <div className="text-sm font-semibold text-foreground">Self-serve tools</div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Charge under $200 a month and hand you the risk.
                    </p>
                  </div>
                  <div className="surface-card surface-card-hover border-white/40 p-6">
                    <div className="text-sm font-semibold text-foreground">Syntrex</div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Installs it, operates it, and is accountable for it.
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Button asChild variant="accent">
                    <Link to="/services">
                      See how Agent Workforce works
                      <ArrowRight />
                    </Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link to="/pricing">Agent Workforce pricing</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <Section className="relative" pad="compact">
        <Aurora variant="whisper" />
        <Reveal>
          <div data-choreo className="headline-blur">
            <SectionHeader
              eyebrow="How it works"
              title="How one team runs four tracks."
              description="An orchestrated fleet of AI agents produces the work in parallel. Humans direct, review, and own every outcome."
            />
          </div>
        </Reveal>

        <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {layers.map((s) => (
            <div key={s.title} className="surface-card surface-card-hover group h-full p-6">
              <Icon3D icon={s.icon} size={44} iconSize={20} />
              <div className="mt-5 text-[15px] font-semibold text-foreground">{s.title}</div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.line}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* PROOF STAT BAND */}
      <section className="relative overflow-hidden border-y border-hairline bg-surface/30">
        <div className="ken-burns ken-burns--bright ken-burns--static">
          <img
            src={glassLobby.url}
            alt=""
            aria-hidden
            width={1920}
            height={1080}
            loading="lazy"
            decoding="async"
          />
        </div>
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, oklch(0.14 0 0 / 84%), oklch(0.14 0 0 / 74%) 50%, oklch(0.14 0 0 / 90%))",
          }}
        />
        <div className="ambient-depth" />
        <div className="container-page relative">
          <div className="grid grid-cols-1 divide-y divide-hairline md:grid-cols-3 md:divide-x md:divide-y-0">
            {proofStats.map((s, i) => (
              <div
                key={s.label}
                data-choreo
                className="stat-scale px-2 py-8 md:px-10 md:py-10"
                style={{ ["--d" as never]: `${i * 100}ms` }}
              >
                <div className="text-display text-5xl text-foreground md:text-6xl">
                  <span className="stat-underline">
                    <CountUp to={s.to} prefix={s.prefix} suffix={s.suffix} format={s.format} />
                  </span>
                </div>
                <p className="stat-caption mt-4 max-w-xs text-sm text-muted-foreground md:text-base">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
          <p className="pb-6 text-center text-xs text-muted-foreground/80">
            HALT Fire, Google Search Console, trailing three months. Kinetix is a technology
            partner.
          </p>
        </div>
      </section>

      {/* GUARANTEE BANNER */}
      <section className="relative overflow-hidden border-b border-hairline bg-surface/40">
        <Aurora variant="soft" />
        <div className="container-page relative py-12 md:py-16">
          <div data-choreo className="border-draw">
            <div className="relative overflow-hidden rounded-[calc(var(--radius-lg)-1px)] bg-background p-8 md:p-12">
              <div
                className="pointer-events-none absolute inset-0 opacity-40"
                style={{
                  background:
                    "radial-gradient(circle at 30% 50%, oklch(1 0 0 / 10%), transparent 60%)",
                }}
              />
              <div className="relative flex flex-col items-start gap-6 md:flex-row md:items-center">
                <Icon3D icon={ShieldCheck} size={56} iconSize={24} />
                <div>
                  <div className="text-eyebrow mb-2">The guarantee</div>
                  <p className="text-display word-rise max-w-4xl text-2xl text-foreground md:text-3xl lg:text-4xl">
                    {"We guarantee what we control.".split(" ").map((w, i) => (
                      <span key={`g-${i}`} style={{ ["--i" as never]: i }}>
                        {w}
                        {" "}
                      </span>
                    ))}
                    <span className="text-shimmer">We do not guarantee your sales team.</span>
                  </p>
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    We guarantee citation presence, ranking movement, content volume, hours removed
                    from a workflow, agent task volume, and delivery against spec. We do not
                    guarantee revenue, closed deals, or conversion rate, because those depend on
                    your pricing, product, and market. If the metric we named is not hit, we keep
                    working at no additional cost until it is. The window pauses, rather than voids,
                    if you miss an agreed condition like approval turnaround, and it resumes on the
                    date you clear it, documented on your Receipt.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING PREVIEW */}
      <Section className="relative" pad="compact">
        <Aurora variant="whisper" />
        <Reveal>
          <div data-choreo className="headline-blur">
            <SectionHeader
              eyebrow="Pricing"
              title="Published, not quoted."
              description="Every price is on the site. No discovery call to find out what it costs."
            />
          </div>
        </Reveal>

        <Reveal delay={60}>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
            The same work, at meaningfully less than agency rate. Delivered faster, because an
            orchestrated fleet runs the workstreams in parallel, so a build that takes an agency six
            weeks takes us days. And guaranteed on a metric we name in writing. Agencies charge for
            the team behind the work. We do not have one. You get the output, not the overhead.
          </p>
        </Reveal>

        <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pricepoints.map((p) => (
            <div key={p.label} className="surface-card surface-card-hover group h-full p-6">
              <div className="text-eyebrow mb-2">{p.label}</div>
              <div className="text-display text-2xl text-foreground">{p.value}</div>
              <p className="mt-2 text-sm text-muted-foreground">{p.note}</p>
            </div>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-10 text-center">
            <MagneticButton>
              <Button asChild size="lg" variant="outline">
                <Link to="/pricing">
                  See full pricing
                  <ArrowRight />
                </Link>
              </Button>
            </MagneticButton>
          </div>
        </Reveal>
      </Section>

      {/* WORLDWIDE MAP */}
      <section className="relative overflow-hidden border-t border-hairline">
        <Aurora variant="whisper" />
        <div className="container-page relative py-12 md:py-16">
          <Reveal>
            <div data-choreo className="headline-blur mx-auto max-w-2xl text-center">
              <div className="text-eyebrow mb-4">Global reach</div>
              <h2 className="text-display text-3xl text-foreground md:text-5xl">
                Built in Florida. <span className="text-shimmer">Running everywhere.</span>
              </h2>
              <p className="mt-4 text-base text-muted-foreground md:text-lg">
                One team, running the back end for operating companies wherever they are.
              </p>
            </div>
          </Reveal>
          <div className="mt-12">
            <WorldMap height={520} />
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="relative overflow-hidden border-t border-hairline">
        <Aurora variant="soft" />
        <div className="container-page relative py-14 md:py-20">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <div className="text-eyebrow mb-5">Start here</div>
              <h2 className="text-display text-4xl text-foreground md:text-6xl">
                Find out exactly where to start.
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground md:text-lg">
                Six questions, about a minute. It maps what is not working across the four tracks
                and names the services and the starting point that fit.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <MagneticButton>
                  <Button asChild size="xl" variant="accent">
                    <Link to="/diagnostic">
                      Start the diagnostic
                      <ArrowRight />
                    </Link>
                  </Button>
                </MagneticButton>
                <MagneticButton>
                  <Button asChild size="xl" variant="outline">
                    <Link to="/pricing">See pricing</Link>
                  </Button>
                </MagneticButton>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      <Faq path="/" />
    </div>
  );
}
