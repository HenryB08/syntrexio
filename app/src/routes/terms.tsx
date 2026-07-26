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
        description="Last updated: July 2026. The terms that govern your use of Syntrex and the SYN products."
      />

      <Section>
        <Reveal>
          <div className="mx-auto max-w-3xl space-y-10 text-muted-foreground">
            <p className="text-base leading-relaxed">
              These Terms of Use ("Terms") govern your access to syntrexio.com
              and your use of the products offered by{" "}
              <strong className="text-foreground">Syntrex LLC</strong> ("Syntrex,"
              "we," "us"): <strong className="text-foreground">SYN Growth</strong>,{" "}
              <strong className="text-foreground">SYN Workspace</strong>, and the
              Free Leak Audit. By using the site or the products, you agree to
              these Terms. If you do not agree, do not use them.
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">The products</h2>
              <ul className="ml-5 list-disc space-y-2 text-base leading-relaxed">
                <li><strong className="text-foreground">SYN Growth</strong> is a managed system that answers calls, chats, and forms, captures missed calls, follows up, and reports recovered value each month in the Receipt. It is launching soon and provided as a service, run for you.</li>
                <li><strong className="text-foreground">SYN Workspace</strong> is our AI business workspace, currently in early access. Access is offered by waitlist and may change as the product develops.</li>
                <li><strong className="text-foreground">The Live Leak Audit</strong> is a no-cost audit of where your business is losing customers, the pre-launch entry point to SYN Growth. It is informational and creates no obligation on either side.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Eligibility and accounts</h2>
              <p className="text-base leading-relaxed">
                You must be at least 18 and able to enter a binding contract. You
                are responsible for the accuracy of the information you provide and
                for activity under any account or number we operate on your behalf.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Fees and billing</h2>
              <ul className="ml-5 list-disc space-y-2 text-base leading-relaxed">
                <li><strong className="text-foreground">SYN Growth</strong> launch pricing is a one-time setup of <strong className="text-foreground">$497</strong>, then a monthly subscription of <strong className="text-foreground">$349</strong> (Growth Core) or <strong className="text-foreground">$549</strong> (Growth Pro, which adds AI voice answering). The $497 is a one-time charge, not the total.</li>
                <li>Monthly fees are billed in advance and recur until you cancel. Setup is non-refundable once work has begun, except as required by the guarantee below or by law.</li>
                <li><strong className="text-foreground">SYN Workspace</strong> is in early access and is not sold at a printed price yet. Any future fees will be disclosed before they apply.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">The SYN Growth guarantee</h2>
              <p className="text-base leading-relaxed">
                If the booked value SYN Growth produces in a month comes in under
                that month's fee, that month is free. Booked value is an estimate
                of revenue booked, calculated as the bookings the system produced
                multiplied by the job values you confirm in writing at install; it
                is not cash collected and is not based on industry averages. The
                monthly Receipt, not the live dashboard, is the estimated statement
                the guarantee pays out on. The guarantee applies for the first
                three months, then continues on a rolling quarterly review, and it
                covers the monthly SYN Growth fee for the qualifying month, not the
                one-time setup or third-party costs.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Acceptable use</h2>
              <p className="text-base leading-relaxed">
                You agree not to use the site or products to break the law, send
                unlawful or unsolicited messages, infringe others' rights, probe or
                disrupt our systems, or misrepresent your identity or authority.
                You are responsible for ensuring that the messages SYN sends on
                your behalf comply with applicable communications and marketing
                laws.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Your content and brand</h2>
              <p className="text-base leading-relaxed">
                You keep ownership of your brand, content, and customer data. You
                grant Syntrex the license needed to operate the products for you,
                including to encode your brand and to send communications on your
                behalf. You are responsible for having the rights to the material
                you provide.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Our intellectual property</h2>
              <p className="text-base leading-relaxed">
                SYN, including SYN Growth and SYN Workspace, and all related
                software, models, designs, and know-how, are and remain the
                property of Syntrex. These Terms grant you a limited, non-exclusive,
                non-transferable right to use the products while your subscription
                is active. Nothing here transfers ownership of the platform to you.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Third-party services</h2>
              <p className="text-base leading-relaxed">
                The products rely on third-party services such as hosting,
                messaging, and AI providers. Their availability and terms are
                outside our control, and we are not responsible for their acts or
                omissions.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Disclaimers</h2>
              <p className="text-base leading-relaxed">
                Except for the written guarantee above, the site and products are
                provided "as is" and "as available," without warranties of any
                kind, express or implied, including merchantability, fitness for a
                particular purpose, and non-infringement. We do not warrant that
                the products will be uninterrupted or error-free, or that they will
                produce any specific business result beyond the guarantee.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Limitation of liability</h2>
              <p className="text-base leading-relaxed">
                To the fullest extent permitted by law, Syntrex will not be liable
                for indirect, incidental, special, consequential, or punitive
                damages, or for lost profits or revenue. Our total liability for
                any claim relating to the products will not exceed the amounts you
                paid to Syntrex in the three months before the claim.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Indemnification</h2>
              <p className="text-base leading-relaxed">
                You agree to indemnify and hold Syntrex harmless from claims arising
                out of your content, your use of the products, or your breach of
                these Terms.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Termination</h2>
              <p className="text-base leading-relaxed">
                You may cancel a subscription at any time, effective at the end of
                the current billing period. We may suspend or end access for
                non-payment, misuse, or breach of these Terms. Sections that by
                their nature should survive termination will survive.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Governing law</h2>
              <p className="text-base leading-relaxed">
                These Terms are governed by the laws of the State of Florida,
                without regard to conflict-of-laws rules. The exclusive venue for
                disputes is the state or federal courts located in Orange County,
                Florida, and you consent to their jurisdiction.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Changes</h2>
              <p className="text-base leading-relaxed">
                We may update these Terms as our products and the law evolve. We
                will post the new version here and update the date above. Continued
                use after a change means you accept the updated Terms.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Contact</h2>
              <p className="text-base leading-relaxed">
                Questions about these Terms? Email{" "}
                <a href="mailto:henry@syntrexio.com" className="text-foreground underline underline-offset-4 transition-colors hover:text-accent">henry@syntrexio.com</a>{" "}
                or write to Syntrex LLC, 513 Main Street, Windermere, FL 34786,
                United States.
              </p>
            </section>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
