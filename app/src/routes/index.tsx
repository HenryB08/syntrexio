import { createFileRoute, Link } from "@tanstack/react-router";
import { Faq } from "@/components/site/Faq";
import { pageHead } from "@/lib/seo";
import {
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Flame,
  Cookie,
  Layers,
  LayoutGrid,
  Fingerprint,
  CalendarCheck,
  Boxes,
  Wand2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { Section, SectionHeader } from "@/components/site/Section";
import { CountUp } from "@/components/site/CountUp";
import { Icon3D } from "@/components/site/Icon3D";
import { MagneticButton } from "@/components/site/MagneticButton";
import { Aurora } from "@/components/site/Aurora";
import { WorldMap } from "@/components/site/WorldMap";
import { DataStream } from "@/components/site/DataStream";
import { GrowthSystem } from "@/components/site/GrowthSystem";
import { useEffect, useRef } from "react";
import heroOffice from "@/assets/hero-office.png.asset.json";
import glassLobby from "@/assets/glass-lobby.png.asset.json";
import aerialCity from "@/assets/aerial-city.png.asset.json";

const TITLE = "Syntrex | SYN Growth & SYN Workspace";
const DESC =
  "Syntrex is building SYN, one AI platform in two products. SYN Growth answers and books your customers automatically. SYN Workspace runs your calendar, content, and operations.";

export const Route = createFileRoute("/")({
  head: () => pageHead("/"),
  component: Home,
});

// SYN Growth's proof: the cost of missing customers. Sources cited below the band.
const stats = [
  { to: 62, suffix: "%", prefix: "", format: "plain" as const, label: "of calls to small businesses go unanswered" },
  { to: 85, suffix: "%", prefix: "", format: "plain" as const, label: "of missed callers never call back" },
  { to: 126000, prefix: "$", suffix: "", format: "commas" as const, label: "the average small business loses each year to missed calls" },
];

// SYN Workspace's proof: the cost of scattered operations. Every figure is a
// published research finding with its source named in the caption.
const wstats = [
  { to: 1200, prefix: "~", suffix: "", format: "commas" as const, label: "app switches a day for the average knowledge worker (Harvard Business Review)" },
  { to: 9, suffix: "%", prefix: "", format: "plain" as const, label: "of the work year lost reorienting after those switches (Harvard Business Review)" },
  { to: 58, suffix: "%", prefix: "", format: "plain" as const, label: "of the workday spent on work about work, not real work (Asana)" },
];

const wlayers = [
  { icon: Fingerprint, title: "Brand encoded once", line: "Your brand, voice, and rules, captured one time." },
  { icon: CalendarCheck, title: "Calendar run by AI", line: "Bookings and scheduling handled automatically." },
  { icon: Boxes, title: "Content & assets", line: "Content and brand assets produced and organized." },
  { icon: Wand2, title: "Builds & automations", line: "Tools, pages, and workflows built with AI." },
  { icon: ShieldCheck, title: "Approval trail", line: "Nothing reaches a customer without your sign-off." },
];

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
    el.style.setProperty("--tx", (((e.clientX - r.left) / r.width) - 0.5).toFixed(3));
    el.style.setProperty("--ty", (((e.clientY - r.top) / r.height) - 0.5).toFixed(3));
  };

  return (
    <div ref={choreoRef}>
      {/* HERO - company intro */}
      <section className="relative overflow-hidden min-h-[92vh] flex items-center">
        <div className="ken-burns ken-burns--bright">
          <img src={heroOffice.url} alt="" aria-hidden />
        </div>
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, oklch(0.10 0 0 / 68%) 0%, oklch(0.10 0 0 / 45%) 55%, oklch(0.10 0 0 / 22%) 100%), linear-gradient(180deg, oklch(0.10 0 0 / 18%) 0%, transparent 40%, oklch(0.10 0 0 / 40%) 100%)",
          }}
        />
        <div ref={heroRef} className="hero-fade container-page relative pt-24 pb-24 md:pt-32 md:pb-32 w-full">
          <div className="max-w-4xl">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-hairline bg-surface/60 px-3 py-1.5 text-xs text-muted-foreground backdrop-blur">
              <Sparkles size={12} className="text-foreground" />
              AI systems for businesses that can't afford to miss a customer
            </div>
          </Reveal>
          <h1 className="text-display word-rise mt-6 text-5xl text-foreground md:text-7xl">
            {"Answer every customer.".split(" ").map((w, i) => (
              <span key={`a-${i}`} style={{ ["--i" as never]: i }}>
                {w}
                {"\u00A0"}
              </span>
            ))}
            {"Automate the rest.".split(" ").map((w, i) => (
              <span
                key={`b-${i}`}
                className="text-shimmer"
                style={{ ["--i" as never]: i + 3 }}
              >
                {w}
                {"\u00A0"}
              </span>
            ))}
          </h1>
          <Reveal delay={160}>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
              Syntrex is building SYN, one AI platform in two products. SYN
              Growth answers and books your customers automatically. SYN
              Workspace runs your calendar, content, and operations. Start today
              with a free audit of what missed calls are costing you.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <MagneticButton>
                <Button asChild size="xl" variant="accent" className="animate-glow-pulse">
                  <Link to="/leak-audit">
                    Get Your Free Leak Audit
                    <ArrowRight />
                  </Link>
                </Button>
              </MagneticButton>
              <MagneticButton>
                <Button asChild size="xl" variant="outline">
                  <a href="https://syn.syntrexio.com">Join the Workspace waitlist</a>
                </Button>
              </MagneticButton>
            </div>
          </Reveal>
          </div>
        </div>
      </section>

      {/* THE TWO PRODUCTS */}
      <Section className="relative">
        <Aurora variant="whisper" />
        <Reveal>
          <div data-choreo className="headline-blur">
            <SectionHeader
              eyebrow="One platform, two products"
              title="SYN Growth first. SYN Workspace next."
              description="Growth is the door: it captures the revenue you are losing to missed calls. Workspace is the house: AI that runs your whole business. Both are in development. Start with the free audit."
            />
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* SYN GROWTH */}
          <article
            data-choreo
            onPointerMove={cardTilt}
            className="side-in-left card-reveal surface-card surface-card-hover group flex h-full flex-col p-8"
          >
            <div className="mb-4 inline-flex w-fit items-center rounded-full border border-white/40 bg-background px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em]">
              <span className="badge-shimmer">Launching soon</span>
            </div>
            <Icon3D icon={Layers} size={48} iconSize={22} />
            <h3 className="mt-6 text-2xl font-semibold text-foreground">SYN Growth</h3>
            <div className="mt-1 text-sm text-foreground/80">Answer and capture every customer.</div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              The guaranteed system that answers every call, chat, and form in
              seconds, 24/7, texts back every missed call, follows up until the
              customer books, and proves what it recovered each month in the
              Receipt. It is an AI receptionist that covers every channel, not
              just the phone.
            </p>
            <div className="mt-6 flex items-center gap-2 border-t border-hairline pt-5 text-sm text-foreground">
              <ShieldCheck size={16} className="shrink-0" />
              If the Receipt does not show it captured more than it cost, that
              month is free.
            </div>
            <div className="mt-4 text-xs text-muted-foreground">
              Launch pricing: one-time $497 setup, then $349/mo or $549/mo.
            </div>
            <div className="mt-auto flex flex-wrap gap-3 pt-6">
              <Button asChild variant="accent">
                <Link to="/leak-audit">
                  Get Your Free Leak Audit
                  <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/pricing">See pricing</Link>
              </Button>
            </div>
          </article>

          {/* SYN WORKSPACE */}
          <article
            data-choreo
            onPointerMove={cardTilt}
            className="side-in-right card-reveal surface-card surface-card-hover group flex h-full flex-col p-8"
          >
            <div className="mb-4 inline-flex w-fit items-center rounded-full border border-hairline bg-background px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Early access
            </div>
            <Icon3D icon={LayoutGrid} size={48} iconSize={22} />
            <h3 className="mt-6 text-2xl font-semibold text-foreground">SYN Workspace</h3>
            <div className="mt-1 text-sm text-foreground/80">Encode your brand. AI runs the rest.</div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              The AI business workspace. Encode your brand once, and SYN runs
              your calendar, content, brand assets, builds, and automations, with
              an approval trail before anything reaches a customer. One workspace
              in place of a dozen disconnected tools.
            </p>
            <div className="mt-6 flex items-center gap-2 border-t border-hairline pt-5 text-sm text-muted-foreground">
              <Sparkles size={16} className="shrink-0 text-foreground" />
              In early access. Every SYN Growth client is first in line.
            </div>
            <div className="mt-4 text-xs text-muted-foreground">
              Joining the waitlist reserves early access and shapes what we build.
            </div>
            <div className="mt-auto flex flex-wrap gap-3 pt-6">
              <Button asChild variant="outline">
                <a href="https://syn.syntrexio.com">
                  Join the waitlist
                  <ArrowRight />
                </a>
              </Button>
            </div>
          </article>
        </div>
      </Section>

      {/* INSIDE SYN GROWTH */}
      <Section className="relative">
        <Aurora variant="whisper" />
        <Reveal>
          <div data-choreo className="headline-blur">
            <SectionHeader
              eyebrow="Inside SYN Growth"
              title="Five layers. One outcome: nothing gets missed."
              description="Every part is engineered to convert an inquiry into revenue, automatically."
            />
          </div>
        </Reveal>

        <GrowthSystem />
      </Section>

      {/* SYN GROWTH STAT STRIP */}
      <section className="relative overflow-hidden border-y border-hairline bg-surface/30">
        <div className="ken-burns">
          <img src={aerialCity.url} alt="" aria-hidden />
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
            {stats.map((s, i) => (
              <div
                key={s.label}
                data-choreo
                className="stat-scale px-2 py-10 md:px-10 md:py-14"
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
            Sources: 411 Locals (58-industry study); Aircall.
          </p>
        </div>
      </section>

      {/* GUARANTEE BANNER */}
      <section className="relative overflow-hidden border-b border-hairline bg-surface/40">
        <Aurora variant="soft" />
        <DataStream />
        <div className="container-page relative py-16 md:py-20">
          <div data-choreo className="border-draw">
              <div className="relative overflow-hidden rounded-[calc(var(--radius-lg)-1px)] bg-background p-8 md:p-12">
                <div className="heartbeat" aria-hidden />
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
                    <div className="text-eyebrow mb-2">The SYN Growth Guarantee</div>
                    <p className="text-display word-rise max-w-4xl text-2xl text-foreground md:text-3xl lg:text-4xl">
                      {"If the Receipt does not show the system captured more value than it cost you,".split(" ").map((w, i) => (
                        <span key={`g-${i}`} style={{ ["--i" as never]: i }}>
                          {w}
                          {"\u00A0"}
                        </span>
                      ))}
                      <span className="text-shimmer">that month is free.</span>
                    </p>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </section>

      {/* INSIDE SYN WORKSPACE */}
      <Section className="relative">
        <Aurora variant="whisper" />
        <Reveal>
          <div data-choreo className="headline-blur">
            <SectionHeader
              eyebrow="Inside SYN Workspace"
              title="Five layers. One outcome: the business runs itself."
              description="Encode your brand once, and AI does the operational work, always inside your rules, always with your sign-off."
            />
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {wlayers.map((s, i) => (
            <div
              key={s.title}
              data-choreo
              className="spread-in surface-card surface-card-hover group h-full p-6"
              style={{ ["--sx" as never]: `${(i - 2) * 50}px`, ["--d" as never]: `${i * 90}ms` }}
            >
              <Icon3D icon={s.icon} size={44} iconSize={20} />
              <div className="mt-5 text-[15px] font-semibold text-foreground">{s.title}</div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.line}</p>
            </div>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-10 text-center">
            <MagneticButton>
              <Button asChild size="lg" variant="outline">
                <a href="https://syn.syntrexio.com">
                  Join the Workspace waitlist
                  <ArrowRight />
                </a>
              </Button>
            </MagneticButton>
          </div>
        </Reveal>
      </Section>

      {/* SYN WORKSPACE STAT BAND */}
      <section className="relative overflow-hidden border-y border-hairline bg-surface/30">
        <div className="ken-burns ken-burns--bright">
          <img src={glassLobby.url} alt="" aria-hidden />
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
            {wstats.map((s, i) => (
              <div
                key={s.label}
                data-choreo
                className="stat-scale px-2 py-10 md:px-10 md:py-14"
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
            The cost of scattered operations. SYN Workspace is built to erase it.
          </p>
        </div>
      </section>

      {/* PROOF */}
      <Section className="relative">
        <Aurora variant="whisper" />
        <Reveal>
          <div data-choreo className="headline-blur">
            <SectionHeader
              eyebrow="Proof"
              title="Built by operators who count every lead."
              description="Syntrex began as a hands-on agency. These are two of the businesses that work became SYN."
            />
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <article
            data-choreo
            onPointerMove={cardTilt}
            className="side-in-left card-reveal surface-card surface-card-hover group h-full overflow-hidden p-0"
          >
              <ProofPhoto alt="HALT Fire brand imagery" src={undefined} />
              <div className="p-8">
              <div className="flex items-center gap-3">
                <div data-parallax="icon">
                  <Icon3D icon={Flame} size={44} iconSize={20} />
                </div>
                <div data-parallax="text">
                  <div className="text-eyebrow">Case study</div>
                  <div className="mt-1 text-lg font-semibold text-foreground">
                    HALT Fire
                  </div>
                </div>
              </div>
              <p data-parallax="text" className="mt-5 text-sm text-muted-foreground">
                Industrial fire suppression. A full sales automation rebuild
                across chat, SMS, voice, and follow-up.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4 border-t border-hairline pt-6">
                <div>
                  <div className="text-display text-3xl text-foreground">10+</div>
                  <div className="text-xs text-muted-foreground">hours saved weekly</div>
                </div>
                <div>
                  <div className="text-display text-3xl text-shimmer">280%</div>
                  <div className="text-xs text-muted-foreground">search growth</div>
                </div>
              </div>
              </div>
          </article>

          <article
            data-choreo
            onPointerMove={cardTilt}
            className="side-in-right card-reveal surface-card surface-card-hover group h-full overflow-hidden p-0"
          >
              <ProofPhoto alt="Doughbrik's Wavers brand imagery" src={undefined} />
              <div className="p-8">
              <div className="flex items-center gap-3">
                <div data-parallax="icon">
                  <Icon3D icon={Cookie} size={44} iconSize={20} />
                </div>
                <div data-parallax="text">
                  <div className="text-eyebrow">Case study</div>
                  <div className="mt-1 text-lg font-semibold text-foreground">
                    Doughbrik's Wavers
                  </div>
                </div>
              </div>
              <p data-parallax="text" className="mt-5 text-sm text-muted-foreground">
                Snack brand founded by David Dobrik. Internal automation across
                ops, fulfillment, and customer flow.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4 border-t border-hairline pt-6">
                <div>
                  <div className="text-display text-3xl text-shimmer">3×</div>
                  <div className="text-xs text-muted-foreground">faster workflows</div>
                </div>
                <div>
                  <div className="text-display text-3xl text-foreground">1</div>
                  <div className="text-xs text-muted-foreground">unified system</div>
                </div>
              </div>
              </div>
          </article>
        </div>
      </Section>

      {/* WORLDWIDE MAP */}
      <section className="relative overflow-hidden border-t border-hairline">
        <Aurora variant="whisper" />
        <div className="container-page relative py-20 md:py-28">
          <Reveal>
            <div data-choreo className="headline-blur mx-auto max-w-2xl text-center">
              <div className="text-eyebrow mb-4">Global reach</div>
              <h2 className="text-display text-3xl text-foreground md:text-5xl">
                Built in Florida. <span className="text-shimmer">Running everywhere.</span>
              </h2>
              <p className="mt-4 text-base text-muted-foreground md:text-lg">
                SYN is built to run for operators worldwide, 24/7.
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
        <div className="container-page relative py-24 md:py-32">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <div className="text-eyebrow mb-5">Start with the audit</div>
              <h2 className="text-display text-4xl text-foreground md:text-6xl">
                See exactly what missed leads are costing you.
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground md:text-lg">
                The Free Leak Audit is available today, the pre-launch entry
                point to SYN Growth. We mystery-shop your phone and web forms,
                time the responses, and deliver a one-page report in 48 hours.
                Free.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <MagneticButton>
                  <Button asChild size="xl" variant="accent">
                    <Link to="/leak-audit">
                      Get Your Free Leak Audit
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

/** Photo slot for proof cards. Renders a placeholder tile until a real image
 *  URL is provided; then flips to the desaturated brand-photo treatment. */
function ProofPhoto({ src, alt }: { src?: string; alt: string }) {
  return (
    <div className="brand-photo aspect-[16/9] w-full">
      {src ? (
        <img src={src} alt={alt} loading="lazy" />
      ) : (
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 30%, oklch(1 0 0 / 8%), transparent 55%), radial-gradient(circle at 70% 70%, oklch(1 0 0 / 5%), transparent 55%)",
          }}
          aria-label={alt}
          role="img"
        />
      )}
    </div>
  );
}
