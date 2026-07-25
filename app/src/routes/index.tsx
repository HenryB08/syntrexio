import { createFileRoute, Link } from "@tanstack/react-router";
import { Faq } from "@/components/site/Faq";
import { pageHead } from "@/lib/seo";
import {
  ArrowRight,
  Bot,
  ShieldCheck,
  Sparkles,
  Flame,
  Cookie,
  Globe,
  Layers,
  Palette,
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

const TITLE = "Syntrex: Stop Losing Customers to Missed Calls";
const DESC =
  "62% of calls to small businesses go unanswered. Syntrex answers every inquiry in seconds, 24/7, so you never miss another lead.";

export const Route = createFileRoute("/")({
  head: () => pageHead("/"),
  component: Home,
});

const stats = [
  { to: 62, suffix: "%", prefix: "", format: "plain" as const, label: "of calls to small businesses go unanswered" },
  { to: 85, suffix: "%", prefix: "", format: "plain" as const, label: "of missed callers never call back" },
  { to: 126000, prefix: "$", suffix: "", format: "commas" as const, label: "the average small business loses each year to missed calls" },
];

const services = [
  { icon: Layers, title: "The Growth System", desc: "Answer every call, chat, and form in seconds. Capture every missed call, follow up automatically, and book the job. Guaranteed." },
  { icon: Globe, title: "The Presence System", desc: "Your complete digital presence as one subscription: website, SEO, content, and the Growth System, built and run for you." },
  { icon: Palette, title: "The Brand Studio", desc: "Ongoing brand, design, and creative on subscription, always on-brand, for established brands and multi-brand operators." },
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
      // Fire the moment any part of the element enters the viewport, instead of
      // waiting until it is 15% visible and 80px inside — which left partially
      // visible content blank until the user scrolled further.
      { threshold: 0, rootMargin: "0px 0px 0px 0px" },
    );
    nodes.forEach((n) => {
      // Already in view (e.g. above the fold on load): reveal immediately.
      if (n.getBoundingClientRect().top < vh) n.classList.add("in-view");
      else io.observe(n);
    });
    return () => io.disconnect();
  }, []);

  // Hero scale/fade on scroll, 1 → 0.97, opacity 1 → 0.35
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
      {/* HERO */}
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
              Answers every call, chat, and form in seconds, 24/7
            </div>
          </Reveal>
          <h1 className="text-display word-rise mt-6 text-5xl text-foreground md:text-7xl">
            {"Stop Losing Customers to".split(" ").map((w, i) => (
              <span key={`a-${i}`} style={{ ["--i" as never]: i }}>
                {w}
                {"\u00A0"}
              </span>
            ))}
            {"Missed Calls.".split(" ").map((w, i) => (
              <span
                key={`b-${i}`}
                className="text-shimmer"
                style={{ ["--i" as never]: i + 4 }}
              >
                {w}
                {i === 0 ? "\u00A0" : ""}
              </span>
            ))}
          </h1>
          <Reveal delay={160}>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
              62% of calls to small businesses go unanswered. Syntrex answers
              every call, chat, and form in seconds, 24/7, and follows up until
              the job is booked.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-9">
              <MagneticButton>
                <Button asChild size="xl" variant="accent" className="animate-glow-pulse">
                  <Link to="/leak-audit">
                    Get Your Free Leak Audit
                    <ArrowRight />
                  </Link>
                </Button>
              </MagneticButton>
            </div>
          </Reveal>
          </div>
        </div>
      </section>

      {/* STAT STRIP */}
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
        <div className="container-page relative grid grid-cols-1 divide-y divide-hairline md:grid-cols-3 md:divide-x md:divide-y-0">
          {stats.map((s, i) => (
            <div
              key={s.label}
              data-choreo
              className="stat-scale px-2 py-10 md:px-10 md:py-14"
              style={{ ["--d" as never]: `${i * 100}ms` }}
            >
              <div className="text-display text-5xl text-foreground md:text-6xl">
                <span className="stat-underline">
                  <CountUp
                    to={s.to}
                    prefix={s.prefix}
                    suffix={s.suffix}
                    format={s.format}
                  />
                </span>
              </div>
              <p className="stat-caption mt-4 max-w-xs text-sm text-muted-foreground md:text-base">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* GROWTH SYSTEM */}
      <Section className="relative">
        <Aurora variant="whisper" />
        <Reveal>
          <div data-choreo className="headline-blur">
            <SectionHeader
              eyebrow="The Syntrex Growth System"
              title="Five layers. One outcome: nothing gets missed."
              description="Every part is engineered to convert an inquiry into revenue, automatically."
            />
          </div>
        </Reveal>

        <GrowthSystem />
      </Section>

      {/* GUARANTEE BANNER */}
      <section className="relative overflow-hidden border-y border-hairline bg-surface/40">
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
                    <div className="text-eyebrow mb-2">The Syntrex Guarantee</div>
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

      {/* PROOF */}
      <Section className="relative">
        <Aurora variant="whisper" />
        <Reveal>
          <div data-choreo className="headline-blur">
            <SectionHeader
              eyebrow="Proof"
              title="Built for operators who count every lead."
            />
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <article
            data-choreo
            onPointerMove={cardTilt}
            className="side-in-left card-reveal surface-card surface-card-hover group h-full overflow-hidden p-0"
          >
              <ProofPhoto alt="HALT! Fire brand imagery" src={undefined} />
              <div className="p-8">
              <div className="flex items-center gap-3">
                <div data-parallax="icon">
                  <Icon3D icon={Flame} size={44} iconSize={20} />
                </div>
                <div data-parallax="text">
                  <div className="text-eyebrow">Case study</div>
                  <div className="mt-1 text-lg font-semibold text-foreground">
                    HALT! Fire
                  </div>
                </div>
              </div>
              <p data-parallax="text" className="mt-5 text-sm text-muted-foreground">
                Industrial fire suppression. Full sales automation across chat,
                SMS, voice, and follow-up.
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

      {/* SERVICES OVERVIEW */}
      <section className="relative overflow-hidden border-t border-hairline bg-surface/20">
        <div className="ken-burns ken-burns--bright">
          <img src={glassLobby.url} alt="" aria-hidden />
        </div>
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, oklch(0.10 0 0 / 70%) 0%, oklch(0.10 0 0 / 55%) 45%, oklch(0.10 0 0 / 75%) 100%)",
          }}
        />
        <div className="container-page relative py-20 md:py-28">
        <Reveal>
          <SectionHeader
            eyebrow="Services"
            title="Start with the Growth System. Add the rest when you're ready."
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 100}>
              <Link
                to="/services"
                onPointerMove={cardTilt}
                className="surface-card surface-card-hover group block h-full p-7"
              >
                <div className="flex items-start justify-between">
                  <Icon3D icon={s.icon} size={44} iconSize={20} />
                  <ArrowRight
                    size={16}
                    className="text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:text-foreground"
                  />
                </div>
                <div className="mt-5 text-lg font-semibold text-foreground">
                  {s.title}
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </Link>
            </Reveal>
          ))}
        </div>
        </div>
      </section>

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
                Syntrex systems run for businesses worldwide, 24/7.
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
                We mystery-shop your phone and web forms, time the responses,
                and deliver a one-page report in 48 hours. Free.
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

// Silence unused import warning; Bot is reserved for future use in this file
void Bot;

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
