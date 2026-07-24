import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { useState } from "react";
import { toast } from "sonner";
import { Clock, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { submitForm } from "@/lib/site";

const TITLE = "Contact Syntrex";
const DESC = "Get in touch with Syntrex. We reply within 24 hours.";

export const Route = createFileRoute("/contact")({
  head: () => pageHead("/contact"),
  component: Contact,
});

function Contact() {
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      await submitForm({ form: "contact", ...data });
      toast.success("Message sent. We'll reply within 24 hours.");
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
        variant="converge"
        eyebrow="Contact"
        title="Let's talk."
        description="Tell us about your business. We reply within 24 hours."
      />

      <Section>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <div className="space-y-5">
              <InfoRow
                icon={<Mail size={16} />}
                label="Email"
                value={
                  <a
                    href="mailto:henry@syntrexio.com"
                    className="text-foreground transition-colors hover:text-accent"
                  >
                    henry@syntrexio.com
                  </a>
                }
              />
              <InfoRow
                icon={<MapPin size={16} />}
                label="Location"
                value={<>Windermere, FL · Greater Orlando</>}
              />
              <InfoRow
                icon={<Clock size={16} />}
                label="Response time"
                value={<>Within 24 hours</>}
              />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form onSubmit={onSubmit} className="surface-card space-y-5 p-7 md:p-8">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label="Name" name="name" required />
                <Field label="Business" name="business" />
                <Field label="Email" name="email" type="email" required />
                <Field label="Phone" name="phone" type="tel" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="message" className="text-xs text-muted-foreground">
                  How can we help?
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
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
                {loading ? "Sending…" : "Send message"}
                {!loading && <Send />}
              </Button>
            </form>
          </Reveal>
        </div>
      </Section>
    </>
  );
}

function InfoRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="surface-card surface-card-hover flex items-start gap-4 p-5">
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-hairline bg-background text-accent">
        {icon}
      </div>
      <div>
        <div className="text-eyebrow mb-1">{label}</div>
        <div className="text-[15px] text-foreground">{value}</div>
      </div>
    </div>
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