import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/terms")({
  head: () => pageHead("/terms"),
  component: Terms,
});

function Terms() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Use"
        description="Last updated: August 2026. The terms that govern your use of Syntrex and our services."
      />

      <Section>
        <Reveal>
          <div className="mx-auto max-w-3xl space-y-10 text-muted-foreground">
            <p className="text-base leading-relaxed">
              These Terms of Use ("Terms") govern your access to syntrexio.com and your use of the
              services offered by <strong className="text-foreground">Syntrex LLC</strong>{" "}
              ("Syntrex," "we," "us"): our work across visibility, conversion, presence, and
              operations, including the{" "}
              <strong className="text-foreground">AI Systems Diagnostic</strong> and{" "}
              <strong className="text-foreground">Agent Workforce</strong>. By using the site or the
              services, you agree to these Terms. If you do not agree, do not use them.
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Our services</h2>
              <ul className="ml-5 list-disc space-y-2 text-base leading-relaxed">
                <li>
                  <strong className="text-foreground">Retainers and builds</strong> across
                  visibility, conversion, presence, and operations are provided as a managed
                  service, produced by a human-directed fleet of AI agents and run for you.
                </li>
                <li>
                  <strong className="text-foreground">Agent Workforce</strong> installs and operates
                  an internal fleet of AI agents inside your business, running operational work with
                  a human approval trail.
                </li>
                <li>
                  <strong className="text-foreground">The AI Systems Diagnostic</strong> is a paid
                  engagement that reviews your systems and delivers a build plan you own. It is
                  fully credited toward any engagement started within 60 days.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Eligibility and accounts</h2>
              <p className="text-base leading-relaxed">
                You must be at least 18 and able to enter a binding contract. You are responsible
                for the accuracy of the information you provide and for activity under any account
                or number we operate on your behalf.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Fees and billing</h2>
              <ul className="ml-5 list-disc space-y-2 text-base leading-relaxed">
                <li>
                  <strong className="text-foreground">Retainers</strong> are billed monthly on the
                  1st and recur until you cancel. Published rates are shown on the pricing page.
                </li>
                <li>
                  <strong className="text-foreground">One-time builds</strong> are a 40% deposit
                  with the balance due on agreed milestones. The deposit is non-refundable once work
                  has begun, except as required by law.
                </li>
                <li>
                  <strong className="text-foreground">The AI Systems Diagnostic</strong> is $3,500
                  and is fully credited toward any engagement you start within 60 days.
                </li>
                <li>
                  Operators running multiple brands receive 10% off the second brand and 15% off
                  everything beyond.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">The guarantee</h2>
              <p className="text-base leading-relaxed">
                We guarantee what we control, and the remedy is our labor, never a refund. We may
                guarantee AI search citation presence for agreed queries, ranking movement for
                agreed terms, content volume and schedule, hours removed from an agreed workflow,
                agent task volume per period, and delivery against agreed spec and timeline. We do
                not guarantee revenue, closed deals, or conversion rate, because those depend on
                your sales team, pricing, product, and market. Each guarantee names one metric in
                writing, a documented baseline before work begins, a 90 day window, and one agreed
                source of truth. If the metric is not hit, we keep working at no additional cost
                until it is.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Acceptable use</h2>
              <p className="text-base leading-relaxed">
                You agree not to use the site or products to break the law, send unlawful or
                unsolicited messages, infringe others' rights, probe or disrupt our systems, or
                misrepresent your identity or authority. You are responsible for ensuring that
                communications we send on your behalf comply with applicable communications and
                marketing laws.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Your content and brand</h2>
              <p className="text-base leading-relaxed">
                You keep ownership of your brand, content, and customer data. You grant Syntrex the
                license needed to operate the products for you, including to encode your brand and
                to send communications on your behalf. You are responsible for having the rights to
                the material you provide.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Our intellectual property</h2>
              <p className="text-base leading-relaxed">
                Our systems, agent fleet, software, models, designs, and know-how are and remain the
                property of Syntrex. Deliverables we build and hand off to you, such as a website,
                brand system, or custom tool, are yours once paid for in full. These Terms grant you
                a limited, non-exclusive, non-transferable right to use our services while your
                engagement is active. Nothing here transfers ownership of our underlying systems to
                you.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Third-party services</h2>
              <p className="text-base leading-relaxed">
                The products rely on third-party services such as hosting, messaging, and AI
                providers. Their availability and terms are outside our control, and we are not
                responsible for their acts or omissions.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Disclaimers</h2>
              <p className="text-base leading-relaxed">
                Except for the written guarantee above, the site and products are provided "as is"
                and "as available," without warranties of any kind, express or implied, including
                merchantability, fitness for a particular purpose, and non-infringement. We do not
                warrant that the products will be uninterrupted or error-free, or that they will
                produce any specific business result beyond the guarantee.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Limitation of liability</h2>
              <p className="text-base leading-relaxed">
                To the fullest extent permitted by law, Syntrex will not be liable for indirect,
                incidental, special, consequential, or punitive damages, or for lost profits or
                revenue. Our total liability for any claim relating to the products will not exceed
                the amounts you paid to Syntrex in the three months before the claim.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Indemnification</h2>
              <p className="text-base leading-relaxed">
                You agree to indemnify and hold Syntrex harmless from claims arising out of your
                content, your use of the products, or your breach of these Terms.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Termination</h2>
              <p className="text-base leading-relaxed">
                You may cancel a subscription at any time, effective at the end of the current
                billing period. We may suspend or end access for non-payment, misuse, or breach of
                these Terms. Sections that by their nature should survive termination will survive.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Governing law</h2>
              <p className="text-base leading-relaxed">
                These Terms are governed by the laws of the State of Florida, without regard to
                conflict-of-laws rules. The exclusive venue for disputes is the state or federal
                courts located in Orange County, Florida, and you consent to their jurisdiction.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Changes</h2>
              <p className="text-base leading-relaxed">
                We may update these Terms as our products and the law evolve. We will post the new
                version here and update the date above. Continued use after a change means you
                accept the updated Terms.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Contact</h2>
              <p className="text-base leading-relaxed">
                Questions about these Terms? Email{" "}
                <a
                  href="mailto:henry@syntrexio.com"
                  className="text-foreground underline underline-offset-4 transition-colors hover:text-accent"
                >
                  henry@syntrexio.com
                </a>{" "}
                or write to Syntrex LLC, 513 Main Street, Windermere, FL 34786, United States.
              </p>
            </section>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
