import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/privacy")({
  head: () => pageHead("/privacy"),
  component: Privacy,
});

function Privacy() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="Last updated: July 2026. How Syntrex collects, uses, and protects your information."
      />

      <Section>
        <Reveal>
          <div className="mx-auto max-w-3xl space-y-10 text-muted-foreground">
            <p className="text-base leading-relaxed">
              This Privacy Policy explains how <strong className="text-foreground">Syntrex LLC</strong>{" "}
              ("Syntrex," "we," "us") collects, uses, and protects information
              when you visit syntrexio.com, contact us, request a Free Leak
              Audit, use the SYN chatbot, or use our products,{" "}
              <strong className="text-foreground">SYN Growth</strong> and{" "}
              <strong className="text-foreground">SYN Workspace</strong>. If you
              do not agree with this policy, please do not use the site or the
              products.
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Information we collect</h2>
              <h3 className="text-base font-semibold text-foreground">Information you give us</h3>
              <ul className="ml-5 list-disc space-y-2 text-base leading-relaxed">
                <li><strong className="text-foreground">Contact and Free Leak Audit forms:</strong> your name, business name, email, phone, website, industry, and any message you send.</li>
                <li><strong className="text-foreground">Chatbot conversations:</strong> the messages you send to the SYN chatbot and any details you choose to share in them.</li>
                <li><strong className="text-foreground">Client onboarding:</strong> if you become a client, the brand, service, and operational details needed to set up and run SYN Growth or SYN Workspace for you.</li>
              </ul>
              <h3 className="text-base font-semibold text-foreground">Information collected automatically</h3>
              <ul className="ml-5 list-disc space-y-2 text-base leading-relaxed">
                <li><strong className="text-foreground">Usage and device data:</strong> pages viewed, referring links, approximate location, browser and device type, collected through privacy-respecting analytics.</li>
                <li><strong className="text-foreground">Cookies:</strong> a small number of cookies and similar technologies that keep the site working and help us understand aggregate usage.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">How we use your information</h2>
              <ul className="ml-5 list-disc space-y-2 text-base leading-relaxed">
                <li>To respond to your inquiries and deliver your Free Leak Audit.</li>
                <li>To set up, operate, and support SYN Growth and SYN Workspace for clients.</li>
                <li>To improve the site, our products, and our service.</li>
                <li>To send service messages and, where you have opted in, occasional updates. You can opt out at any time.</li>
                <li>To meet legal, tax, and security obligations.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">AI processing</h2>
              <p className="text-base leading-relaxed">
                SYN uses AI to answer inquiries, follow up, and run automations.
                When SYN processes a message or a client's encoded brand, it does
                so to provide the service to that client.{" "}
                <strong className="text-foreground">We do not sell your data, and we do not use client content to train third-party public AI models without permission.</strong>{" "}
                A client's encoded brand, content, and customer data belong to the
                client, and SYN produces work inside client-defined rules with an
                approval trail before anything reaches a customer.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">How we share information</h2>
              <p className="text-base leading-relaxed">
                We share information only as needed to run the service, and never
                sell it. We use vetted sub-processors, which may include hosting
                and infrastructure providers, email and messaging providers,
                analytics, and AI model providers. Each is bound to handle data
                only on our instructions. We may also disclose information where
                required by law or to protect our rights, users, or the public.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Cookies and analytics</h2>
              <p className="text-base leading-relaxed">
                We use cookies and similar technologies to operate the site and
                measure aggregate usage. You can control cookies through your
                browser settings. Blocking some cookies may affect how the site
                works.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Data retention</h2>
              <p className="text-base leading-relaxed">
                We keep personal information only as long as needed for the
                purposes above, to provide the service to clients, and to meet
                legal obligations, then delete or anonymize it. Clients may
                request deletion of their data as described below.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Security</h2>
              <p className="text-base leading-relaxed">
                We use administrative, technical, and physical safeguards designed
                to protect your information, including access controls and
                encryption in transit. No method of transmission or storage is
                perfectly secure, but we work to protect your information and to
                respond promptly to any incident.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Your rights</h2>
              <p className="text-base leading-relaxed">
                Depending on where you live, you may have the right to access,
                correct, delete, or port your personal information, to object to
                or restrict certain processing, and to withdraw consent. Residents
                of the EU and UK have these rights under the{" "}
                <strong className="text-foreground">GDPR</strong>; California
                residents have rights under the{" "}
                <strong className="text-foreground">CCPA/CPRA</strong>, including
                the right to know and to delete, and the right to opt out of sale.{" "}
                <strong className="text-foreground">We do not sell personal information.</strong>{" "}
                To exercise any right, email{" "}
                <a href="mailto:henry@syntrexio.com" className="text-foreground underline underline-offset-4 transition-colors hover:text-accent">henry@syntrexio.com</a>{" "}
                and we will respond within the time the law requires.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">International transfers</h2>
              <p className="text-base leading-relaxed">
                Syntrex is based in the United States, and information may be
                processed there or in other countries where our sub-processors
                operate. Where required, we use appropriate safeguards for
                cross-border transfers.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Children</h2>
              <p className="text-base leading-relaxed">
                Our site and products are not directed to children under 16, and
                we do not knowingly collect their personal information. If you
                believe a child has provided us information, contact us and we
                will delete it.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Changes to this policy</h2>
              <p className="text-base leading-relaxed">
                We may update this policy as our products and the law evolve. We
                will post the new version here and update the date above. Material
                changes will be highlighted where appropriate.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Contact</h2>
              <p className="text-base leading-relaxed">
                Questions about this policy or your data? Email{" "}
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
