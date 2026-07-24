import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Clock, FileText, PhoneCall, Search, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { submitForm } from "@/lib/site";

const TITLE = "Free Leak Audit — Syntrex";
const DESC =
  "We mystery-shop your phone and web forms, time the responses, and deliver a one-page report on the dollar cost of missed inquiries. Free. Within 48 hours.";

export const Route = createFileRoute("/free-leak-audit")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
  }),
  component: FreeLeakAudit,
});

const steps = [
  { icon: Search, title: "We mystery-shop", desc: "Our team calls and submits your web forms as a prospect would." },
  { icon: Clock, title: "We time everything", desc: "Every ring, every reply, every drop-off — measured to the second." },
  { icon: FileText, title: "You get the Receipt", desc: "A one-page report with the dollar cost of your missed inquiries." },
];

function FreeLeakAudit() {
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      await submitForm({ form: "leak-audit", ...data });
      toast.success("Audit request received. We'll be in touch within 48 hours.");
      e.currentTarget.reset();
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <PageHero
        variant="scanline"
        eyebrow="Free · 48-hour turnaround"
        title="See exactly what missed inquiries are costing you."
        description="We mystery-shop your phone and web forms, time the responses, and deliver a one-page report showing the dollar cost of missed inquiries per year. Free."
      />

      <Section>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Explainer */}
          <div className="space-y-6">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 100}>
                <div className="surface-card surface-card-hover flex gap-4 p-6">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-hairline bg-background text-accent">
                    <s.icon size={18} />
                  </div>
                  <div>
                    <div className="text-[15px] font-semibold text-foreground">
                      {s.title}
                    </div>
                    <p className="mt-1.5 text-sm text-muted-foreground">{s.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
            <Reveal delay={300}>
              <div className="flex items-center gap-3 rounded-lg border border-accent/30 bg-accent/5 p-4 text-sm text-foreground">
                <PhoneCall size={16} className="text-accent" />
                Delivered within 48 hours. No sales pressure.
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={120}>
            <form
              onSubmit={onSubmit}
              className="surface-card space-y-5 p-7 md:p-8"
            >
              <div>
                <div className="text-eyebrow mb-1">Request your audit</div>
                <h3 className="text-2xl font-semibold text-foreground">
                  Tell us where to find you.
                </h3>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label="Name" name="name" required />
                <Field label="Business" name="business" required />
                <Field label="Website" name="website" type="url" placeholder="https://" required />
                <Field label="Phone" name="phone" type="tel" required />
                <Field label="Email" name="email" type="email" required />
                <Field label="Industry" name="industry" required />
              </div>
              <Button
                type="submit"
                size="lg"
                variant="accent"
                disabled={loading}
                className="w-full"
              >
                {loading ? "Submitting…" : "Request my Free Leak Audit"}
                {!loading && <Send />}
              </Button>
              <p className="text-xs text-muted-foreground">
                By submitting you agree to be contacted about your audit. We
                don't share your data.
              </p>
            </form>
          </Reveal>
        </div>
      </Section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
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
        placeholder={placeholder}
        required={required}
        className="h-11 border-hairline bg-background text-foreground focus-visible:border-accent/60 focus-visible:ring-accent/30"
      />
    </div>
  );
}