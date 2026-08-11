import { createFileRoute } from "@tanstack/react-router";
import { Faq } from "@/components/site/Faq";
import { pageHead } from "@/lib/seo";
import { useState } from "react";
import { toast } from "sonner";
import { Banknote, HandCoins, Handshake, Send, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeader } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { Icon3D } from "@/components/site/Icon3D";
import { submitForm } from "@/lib/site";

export const Route = createFileRoute("/referral")({
  head: () => pageHead("/referral"),
  component: Referral,
});

const steps = [
  {
    icon: Handshake,
    title: "Introduce someone",
    desc: "Send us a name through the form below, or just make the introduction directly. We reach out within 48 hours.",
  },
  {
    icon: HandCoins,
    title: "They become a client",
    desc: "You earn 10% of their first project, or 10% of their first three months of retainer. No cap on how many you send.",
  },
  {
    icon: Wallet,
    title: "You get paid",
    desc: "Paid within 15 days of the referred client onboarding and paying their first invoice. Cash or credit, your choice.",
  },
];

const payouts = [
  { engagement: "AI Systems Diagnostic, $3,500", fee: "$350" },
  { engagement: "Visibility retainer, $2,500/mo", fee: "$750" },
  { engagement: "Full Stack retainer, $7,500/mo", fee: "$2,250" },
  { engagement: "Website build, 6 to 12 pages, $7,500", fee: "$750" },
  { engagement: "E-commerce build, $11,000", fee: "$1,100" },
  { engagement: "Agent Workforce install, from $35,000", fee: "From $3,500" },
];

const terms = [
  "Paid once the referred client has onboarded and paid their first invoice.",
  "Attribution runs 12 months from the introduction, and belongs to whoever introduced us first.",
  "No cap on the number of referrals or on total earnings.",
  "Referred clients pay published pricing. Your fee never comes out of their price.",
  "Anyone can refer. You do not have to be a client.",
  "Credit never expires and applies to any Syntrex work.",
];

function Referral() {
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Capture the form element now: React nullifies e.currentTarget after the
    // await, so reading it later (e.g. to reset) would throw and wrongly trip
    // the catch, showing an error toast on a successful submit.
    const formEl = e.currentTarget;
    setLoading(true);
    const data = Object.fromEntries(new FormData(formEl).entries());
    try {
      await submitForm({ form: "referral", ...data });
      toast.success("Referral received. We'll be in touch within 48 hours.");
      formEl.reset();
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <PageHero
        variant="converge"
        eyebrow="Referral program"
        title="Send someone our way. Take 10%."
        description="If you introduce us to a business that becomes a client, you earn 10% of their first project or their first three months of retainer. Take it as cash, or as credit against your own work. Credit stacks, so enough referrals covers a build of your own entirely."
      />

      <Section>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 100}>
              <div className="surface-card surface-card-hover h-full p-7">
                <Icon3D icon={s.icon} size={44} iconSize={20} />
                <div className="mt-5 text-[15px] font-semibold text-foreground">{s.title}</div>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Cash or credit */}
      <Section className="!pt-0">
        <SectionHeader
          eyebrow="Cash or credit"
          title="Take the money, or take the work."
          description="You choose when the referral closes. Most people take credit, because it stacks and it never expires."
        />
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
          <Reveal>
            <div className="surface-card surface-card-hover h-full p-7">
              <div className="flex items-center gap-4">
                <Icon3D icon={Banknote} size={44} iconSize={20} />
                <div>
                  <div className="text-eyebrow mb-1">Option one</div>
                  <div className="text-xl font-semibold text-foreground">Cash</div>
                </div>
              </div>
              <p className="mt-5 text-sm text-muted-foreground">
                Paid out within 15 days of the referred client onboarding and paying. Nothing to
                claim and nothing to chase. We tell you what happened either way, including when a
                referral does not go ahead.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="surface-card surface-card-hover h-full p-7">
              <div className="flex items-center gap-4">
                <Icon3D icon={Wallet} size={44} iconSize={20} />
                <div>
                  <div className="text-eyebrow mb-1">Option two</div>
                  <div className="text-xl font-semibold text-foreground">Credit</div>
                </div>
              </div>
              <p className="mt-5 text-sm text-muted-foreground">
                The same 10%, held as credit against any Syntrex work: a retainer, a build, or a
                diagnostic. Credit stacks and never expires, and your balance shows on every
                invoice. Enough referrals covers a build of your own outright.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* What 10% pays */}
      <Section className="!pt-0">
        <SectionHeader
          eyebrow="What 10% pays"
          title="Our pricing is published, so the math is too."
          description="These are our real published rates and the fee each one produces. Nothing is estimated and nothing is hidden behind a call."
        />
        <Reveal>
          <div className="surface-card mt-10 overflow-x-auto">
            <table className="w-full min-w-[32rem] text-left text-sm">
              <thead>
                <tr className="border-b border-hairline">
                  <th className="text-eyebrow px-6 py-4 font-normal">Referred engagement</th>
                  <th className="text-eyebrow px-6 py-4 text-right font-normal">You earn</th>
                </tr>
              </thead>
              <tbody>
                {payouts.map((p) => (
                  <tr key={p.engagement} className="border-b border-hairline last:border-0">
                    <td className="px-6 py-4 text-muted-foreground">{p.engagement}</td>
                    <td className="px-6 py-4 text-right font-semibold text-foreground">{p.fee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-5 text-xs text-muted-foreground">
            Retainer fees are calculated on the first three months. Build fees are calculated on the
            project value.
          </p>
        </Reveal>
      </Section>

      {/* Terms */}
      <Section className="!pt-0">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <div>
              <SectionHeader eyebrow="The terms" title="All of them." />
              <ul className="mt-8 space-y-4">
                {terms.map((t) => (
                  <li
                    key={t}
                    className="border-l border-hairline pl-4 text-sm text-muted-foreground"
                  >
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-8 rounded-lg border border-accent/30 bg-accent/5 p-4 text-sm text-foreground">
                If you run an agency or a services firm of your own, there is a better arrangement
                than this one. Tell us in the form and we will explain it.
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={120}>
            <form onSubmit={onSubmit} className="surface-card space-y-5 p-7 md:p-8">
              <div>
                <div className="text-eyebrow mb-1">Make an introduction</div>
                <h3 className="text-2xl font-semibold text-foreground">Who should we talk to?</h3>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label="Your name" name="referrer_name" required />
                <Field label="Your email" name="referrer_email" type="email" required />
                <Field label="Their name" name="referred_name" required />
                <Field label="Their business" name="referred_business" required />
                <Field label="Their email" name="referred_email" type="email" />
                <Field label="Their phone" name="referred_phone" type="tel" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="payout_preference" className="text-xs text-muted-foreground">
                  Cash or credit?
                </Label>
                <select
                  id="payout_preference"
                  name="payout_preference"
                  defaultValue="Credit"
                  className="h-11 w-full rounded-md border border-hairline bg-background px-3 text-sm text-foreground focus-visible:border-accent/60 focus-visible:ring-2 focus-visible:ring-accent/30 focus-visible:outline-none"
                >
                  <option value="Credit">Credit against my own work</option>
                  <option value="Cash">Cash</option>
                  <option value="Undecided">Not sure yet</option>
                </select>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="context" className="text-xs text-muted-foreground">
                  What are they dealing with?
                </Label>
                <Textarea
                  id="context"
                  name="context"
                  rows={4}
                  className="border-hairline bg-background text-foreground focus-visible:border-accent/60 focus-visible:ring-accent/30"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                variant="accent"
                disabled={loading}
                className="w-full"
              >
                {loading ? "Sending…" : "Submit referral"}
                {!loading && <Send />}
              </Button>
              <p className="text-xs text-muted-foreground">
                We reach out within 48 hours and tell you what happened either way. We don't share
                your data.
              </p>
            </form>
          </Reveal>
        </div>
      </Section>

      <Faq path="/referral" />
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={name} className="text-xs text-muted-foreground">
        {label}
      </Label>
      <Input
        id={name}
        name={name}
        type={type}
        required={required}
        className="h-11 border-hairline bg-background text-foreground focus-visible:border-accent/60 focus-visible:ring-accent/30"
      />
    </div>
  );
}
