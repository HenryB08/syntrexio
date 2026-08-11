import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { toast } from "sonner";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  RotateCcw,
  Search,
  MessageSquare,
  LayoutTemplate,
  Cog,
  Send,
} from "lucide-react";
import { pageHead } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { Icon3D } from "@/components/site/Icon3D";
import { submitForm } from "@/lib/site";

export const Route = createFileRoute("/diagnostic")({
  head: () => pageHead("/diagnostic"),
  component: Diagnostic,
});

type Track = "visibility" | "conversion" | "presence" | "operations";

const TRACKS: Record<
  Track,
  { name: string; icon: typeof Search; price: string; services: string[]; why: string }
> = {
  visibility: {
    name: "Visibility",
    icon: Search,
    price: "$2,500/mo",
    services: [
      "AI search optimization (GEO)",
      "Search optimization (SEO)",
      "Content production and strategy",
      "Social media systems",
    ],
    why: "so the right buyers find you in search and in AI answers",
  },
  conversion: {
    name: "Conversion",
    icon: MessageSquare,
    price: "$2,000/mo",
    services: [
      "AI assistants and customer-facing chat",
      "Lead capture and follow-up systems",
      "Email systems and deliverability",
      "CRM buildout and management",
    ],
    why: "so the leads you already earn actually convert",
  },
  presence: {
    name: "Presence",
    icon: LayoutTemplate,
    price: "$1,800/mo",
    services: [
      "Websites and web applications",
      "E-commerce builds",
      "Brand identity and design systems",
      "Imagery and campaign assets",
    ],
    why: "so your site and brand match the business you actually run",
  },
  operations: {
    name: "Operations",
    icon: Cog,
    price: "$2,500/mo",
    services: [
      "Workflow automation and system integration",
      "Custom internal AI tools",
      "Reporting and analytics dashboards",
      "Agent Workforce",
    ],
    why: "so the repetitive work runs itself, with a human in control",
  },
};

type Option = { label: string; value: string; track?: Track };
type Question = {
  id: string;
  kind: "text" | "single" | "multi";
  title: string;
  helper?: string;
  placeholder?: string;
  required?: boolean;
  options?: Option[];
};

const QUESTIONS: Question[] = [
  {
    id: "business",
    kind: "text",
    title: "What does your business do?",
    helper: "A sentence is plenty. It helps us frame the recommendation.",
    placeholder: "e.g. industrial fire suppression, or a DTC snack brand",
    required: true,
  },
  {
    id: "size",
    kind: "single",
    title: "Roughly how many people work there?",
    required: true,
    options: [
      { label: "Just me", value: "solo" },
      { label: "2 to 10", value: "2-10" },
      { label: "11 to 50", value: "11-50" },
      { label: "51 to 200", value: "51-200" },
      { label: "200 or more", value: "200+" },
    ],
  },
  {
    id: "pains",
    kind: "multi",
    title: "What is not working right now?",
    helper: "Select everything that applies.",
    required: true,
    options: [
      {
        label: "We are hard to find in Google and in AI answers",
        value: "found",
        track: "visibility",
      },
      {
        label: "We are not publishing content or social consistently",
        value: "content",
        track: "visibility",
      },
      { label: "Leads come in but slip through the cracks", value: "leads", track: "conversion" },
      { label: "Follow-up, email, and CRM are a mess", value: "crm", track: "conversion" },
      { label: "Our website or brand feels dated", value: "brand", track: "presence" },
      { label: "We need a new site, store, or brand identity", value: "build", track: "presence" },
      {
        label: "The team loses hours to manual, repetitive work",
        value: "manual",
        track: "operations",
      },
      {
        label: "We have no reliable reporting or internal tools",
        value: "tools",
        track: "operations",
      },
    ],
  },
  {
    id: "history",
    kind: "single",
    title: "Have you tried AI tools or vendors before?",
    required: true,
    options: [
      { label: "Never tried", value: "never" },
      { label: "Tried tools, nothing stuck", value: "tools-failed" },
      { label: "Hired an agency, it disappointed", value: "agency-failed" },
      { label: "Have vendors now, too fragmented", value: "fragmented" },
    ],
  },
  {
    id: "goal",
    kind: "single",
    title: "What would success look like in the next 90 days?",
    required: true,
    options: [
      { label: "More qualified leads booked", value: "leads", track: "conversion" },
      { label: "Showing up in search and AI answers", value: "search", track: "visibility" },
      { label: "A site and brand we are proud of", value: "brand", track: "presence" },
      { label: "Hours back for the team", value: "hours", track: "operations" },
      { label: "Reliable systems and reporting", value: "systems", track: "operations" },
    ],
  },
  {
    id: "budget",
    kind: "single",
    title: "Rough monthly budget?",
    helper: "A range is fine. It only shapes where we suggest you start.",
    required: true,
    options: [
      { label: "Under $2,000", value: "under-2k" },
      { label: "$2,000 to $5,000", value: "2-5k" },
      { label: "$5,000 to $10,000", value: "5-10k" },
      { label: "$10,000+ or project-based", value: "10k+" },
      { label: "Not sure yet", value: "unsure" },
    ],
  },
];

type Answers = Record<string, string | string[]>;

type Rec = {
  engagement: string;
  price: string;
  note?: string;
  tracks: Track[];
  services: string[];
  agentWorkforce: boolean;
};

// Rules-based recommendation. Scores the four tracks from the selected pains and
// the stated 90-day goal, then maps flagged-track count and budget to a starting
// engagement. No API call, no key: the logic runs entirely in the browser.
function recommend(answers: Answers): Rec {
  const scores: Record<Track, number> = {
    visibility: 0,
    conversion: 0,
    presence: 0,
    operations: 0,
  };
  const pains = (answers.pains as string[]) ?? [];
  for (const p of pains) {
    const opt = QUESTIONS[2].options?.find((o) => o.value === p);
    if (opt?.track) scores[opt.track] += 1;
  }
  const goalOpt = QUESTIONS[4].options?.find((o) => o.value === answers.goal);
  if (goalOpt?.track) scores[goalOpt.track] += 1;

  const ranked = (Object.keys(scores) as Track[])
    .filter((t) => scores[t] > 0)
    .sort((a, b) => scores[b] - scores[a]);

  const flaggedCount = ranked.length;
  const budget = (answers.budget as string) ?? "unsure";
  const highBudget = budget === "5-10k" || budget === "10k+";
  const topTracks = ranked.length ? ranked : (["conversion"] as Track[]);
  const opsHeavy = scores.operations > 0;

  // Named services: the first two services of the top track, plus the first
  // service of the second track, capped at three.
  const services: string[] = [];
  services.push(...TRACKS[topTracks[0]].services.slice(0, 2));
  if (topTracks[1]) services.push(TRACKS[topTracks[1]].services[0]);
  const named = services.slice(0, 3);

  // Full Stack + Agent Workforce for ops-heavy, well-funded operators.
  if (budget === "10k+" && opsHeavy) {
    return {
      engagement: "Full Stack plus Agent Workforce",
      price: "$12,500/mo and up",
      note: "All four tracks, plus an installed fleet of AI agents running operational work with a human in control.",
      tracks: topTracks,
      services: Array.from(new Set([...named, "Agent Workforce"])),
      agentWorkforce: true,
    };
  }

  // Full Stack when three or more tracks are flagged, or the budget supports it.
  if (flaggedCount >= 3 || highBudget) {
    return {
      engagement: "Full Stack",
      price: "$7,500/mo",
      note: "All four tracks for less than the $8,800 they cost separately. Most companies belong here.",
      tracks: topTracks,
      services: named,
      agentWorkforce: opsHeavy,
    };
  }

  // Otherwise one or two focused retainers.
  const picked = topTracks.slice(0, 2);
  const engagement =
    picked.length === 2
      ? `${TRACKS[picked[0]].name} plus ${TRACKS[picked[1]].name} retainers`
      : `${TRACKS[picked[0]].name} retainer`;
  const price =
    picked.length === 2
      ? `${TRACKS[picked[0]].price} and ${TRACKS[picked[1]].price}`
      : TRACKS[picked[0]].price;
  return {
    engagement,
    price,
    note:
      picked.length === 2
        ? "Two focused tracks now. Add the others as you grow, or move to Full Stack for better value."
        : "One focused track to start. Add tracks as you grow, or move to Full Stack for better value.",
    tracks: picked,
    services: named,
    agentWorkforce: false,
  };
}

function Diagnostic() {
  const [step, setStep] = useState(0); // 0..QUESTIONS.length-1, then result
  const [answers, setAnswers] = useState<Answers>({});
  const total = QUESTIONS.length;
  const onResult = step >= total;

  const rec = useMemo(() => (onResult ? recommend(answers) : null), [onResult, answers]);

  const q = QUESTIONS[Math.min(step, total - 1)];
  const value = answers[q.id];

  const answered =
    q.kind === "multi"
      ? Array.isArray(value) && value.length > 0
      : typeof value === "string" && value.trim().length > 0;

  function setSingle(v: string) {
    setAnswers((a) => ({ ...a, [q.id]: v }));
  }
  function toggleMulti(v: string) {
    setAnswers((a) => {
      const cur = (a[q.id] as string[]) ?? [];
      return { ...a, [q.id]: cur.includes(v) ? cur.filter((x) => x !== v) : [...cur, v] };
    });
  }
  function next() {
    if (q.required && !answered) return;
    setStep((s) => s + 1);
  }
  function back() {
    setStep((s) => Math.max(0, s - 1));
  }
  function restart() {
    setAnswers({});
    setStep(0);
  }

  const progress = onResult ? 100 : Math.round((step / total) * 100);

  return (
    <>
      <PageHero
        variant="radar"
        eyebrow="AI Systems Diagnostic"
        title="Find out exactly where to start."
        description="Six questions, about a minute. It maps what is not working across visibility, conversion, presence, and operations, then names the specific services and the starting point that fit. You see the result before you give us anything."
      />

      <Section className="!py-16">
        <div className="mx-auto max-w-2xl">
          {/* Progress */}
          <div className="mb-6">
            <div className="mb-2 flex items-center justify-between text-xs text-muted-foreground">
              <span>{onResult ? "Your result" : `Question ${step + 1} of ${total}`}</span>
              <span>{progress}%</span>
            </div>
            <Progress value={progress} />
          </div>

          {!onResult ? (
            <div className="surface-card p-7 md:p-9">
              <h2 className="text-xl font-semibold text-foreground md:text-2xl">{q.title}</h2>
              {q.helper ? <p className="mt-2 text-sm text-muted-foreground">{q.helper}</p> : null}

              <div className="mt-6">
                {q.kind === "text" ? (
                  <Input
                    autoFocus
                    value={(value as string) ?? ""}
                    onChange={(e) => setSingle(e.target.value)}
                    placeholder={q.placeholder}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && answered) next();
                    }}
                    className="h-12 border-hairline bg-background text-foreground focus-visible:border-accent/60 focus-visible:ring-accent/30"
                  />
                ) : (
                  <div className="grid grid-cols-1 gap-2.5">
                    {q.options!.map((o) => {
                      const selected =
                        q.kind === "multi"
                          ? Array.isArray(value) && value.includes(o.value)
                          : value === o.value;
                      return (
                        <button
                          key={o.value}
                          type="button"
                          onClick={() =>
                            q.kind === "multi" ? toggleMulti(o.value) : setSingle(o.value)
                          }
                          aria-pressed={selected}
                          className={`surface-card surface-card-hover flex items-center justify-between gap-3 p-4 text-left text-sm transition-colors ${
                            selected ? "border-white/50 text-foreground" : "text-muted-foreground"
                          }`}
                        >
                          <span>{o.label}</span>
                          <span
                            className={`grid h-5 w-5 shrink-0 place-items-center rounded-full border ${
                              selected ? "border-white bg-white text-black" : "border-hairline"
                            }`}
                          >
                            {selected ? <Check size={13} /> : null}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              <div className="mt-8 flex items-center justify-between">
                <Button
                  type="button"
                  variant="ghost"
                  onClick={back}
                  disabled={step === 0}
                  className="gap-2"
                >
                  <ArrowLeft size={16} /> Back
                </Button>
                <Button
                  type="button"
                  variant="accent"
                  onClick={next}
                  disabled={q.required && !answered}
                  className="gap-2"
                >
                  {step === total - 1 ? "See my result" : "Next"}
                  <ArrowRight size={16} />
                </Button>
              </div>
            </div>
          ) : (
            <Result rec={rec!} answers={answers} onRestart={restart} />
          )}
        </div>
      </Section>
    </>
  );
}

function Result({
  rec,
  answers,
  onRestart,
}: {
  rec: Rec;
  answers: Answers;
  onRestart: () => void;
}) {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formEl = e.currentTarget;
    setLoading(true);
    const data = Object.fromEntries(new FormData(formEl).entries());
    try {
      await submitForm({
        form: "diagnostic",
        recommended_engagement: rec.engagement,
        recommended_price: rec.price,
        recommended_services: rec.services.join(", "),
        answers: JSON.stringify(answers),
        ...data,
      });
      setSent(true);
      toast.success("Sent. We'll reply within 24 hours.");
      formEl.reset();
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-6">
      {/* Recommendation */}
      <div className="surface-card p-7 md:p-9">
        <div className="text-eyebrow mb-2">Where to start</div>
        <h2 className="text-display text-2xl text-foreground md:text-3xl">
          {rec.engagement}: <span className="text-shimmer">{rec.price}</span>
        </h2>
        {rec.note ? (
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
            {rec.note}
          </p>
        ) : null}

        <div className="mt-6 border-t border-hairline pt-6">
          <div className="text-eyebrow mb-3">The services we would run first</div>
          <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {rec.services.map((s) => (
              <li key={s} className="flex items-start gap-2.5 text-sm text-foreground">
                <Check size={16} className="mt-0.5 shrink-0" />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {rec.tracks.map((t) => {
            const T = TRACKS[t];
            return (
              <span
                key={t}
                className="inline-flex items-center gap-2 rounded-full border border-hairline bg-background px-3 py-1.5 text-xs text-muted-foreground"
              >
                <T.icon size={13} className="text-foreground" />
                {T.name}, {T.why}
              </span>
            );
          })}
        </div>
      </div>

      {/* First step: the paid diagnostic */}
      <div className="surface-card p-7 md:p-9">
        <div className="flex items-start gap-4">
          <Icon3D icon={Search} size={44} iconSize={20} />
          <div>
            <div className="text-eyebrow mb-1">Your first step</div>
            <h3 className="text-lg font-semibold text-foreground">
              The AI Systems Diagnostic, $3,500
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              A full read of your systems and a build plan you own. It is fully credited toward any
              engagement you start within 60 days, so if you move forward it costs you nothing on
              top.
            </p>
          </div>
        </div>
      </div>

      {/* Send this to me */}
      <div className="surface-card p-7 md:p-9">
        {sent ? (
          <div className="text-center">
            <div className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-full border border-hairline">
              <Check size={20} className="text-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">On its way.</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              We will send your result and a short plan within 24 hours.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Button asChild variant="accent">
                <Link to="/pricing">See full pricing</Link>
              </Button>
              <Button type="button" variant="ghost" onClick={onRestart} className="gap-2">
                <RotateCcw size={15} /> Start over
              </Button>
            </div>
          </div>
        ) : (
          <>
            <div className="text-eyebrow mb-1">Keep this</div>
            <h3 className="text-lg font-semibold text-foreground">Send this result to me.</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              We will email your result and a short plan for the services above. No obligation.
            </p>
            <form onSubmit={onSubmit} className="mt-5 space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label htmlFor="name" className="text-xs text-muted-foreground">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    required
                    className="h-11 border-hairline bg-background text-foreground focus-visible:border-accent/60 focus-visible:ring-accent/30"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="email" className="text-xs text-muted-foreground">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="h-11 border-hairline bg-background text-foreground focus-visible:border-accent/60 focus-visible:ring-accent/30"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button type="submit" variant="accent" disabled={loading} className="gap-2">
                  {loading ? "Sending…" : "Send this to me"}
                  {!loading && <Send size={16} />}
                </Button>
                <Button type="button" variant="ghost" onClick={onRestart} className="gap-2">
                  <RotateCcw size={15} /> Start over
                </Button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
