import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/site/Section";
import { PageHero } from "@/components/site/PageHero";

// The old Leak Audit was the pre-launch front door. The self-qualifying
// diagnostic replaces it. This route is kept so the indexed /leak-audit URL
// keeps working: it canonicalizes to /diagnostic, refreshes there for anyone
// (or any crawler) that lands on it, and offers a manual link as a fallback.
export const Route = createFileRoute("/leak-audit")({
  head: () => ({
    meta: [
      { title: "Syntrex | Start With the AI Systems Diagnostic" },
      {
        name: "description",
        content:
          "The Leak Audit is now the AI Systems Diagnostic: a short self-qualifying tool that maps what is not working across visibility, conversion, presence, and operations, then names where to start.",
      },
      { name: "robots", content: "noindex, follow" },
      { httpEquiv: "refresh", content: "0; url=/diagnostic/" },
    ],
    links: [{ rel: "canonical", href: "https://syntrexio.com/diagnostic/" }],
  }),
  component: LeakAuditRedirect,
});

function LeakAuditRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.navigate({ to: "/diagnostic", replace: true });
  }, [router]);

  return (
    <>
      <PageHero
        variant="scanline"
        eyebrow="Now the AI Systems Diagnostic"
        title="This page has moved."
        description="The Leak Audit is now the diagnostic: a short, free self-qualifier that maps what is not working across visibility, conversion, presence, and operations, then tells you exactly where to start."
      >
        <Button asChild size="lg" variant="accent">
          <Link to="/diagnostic">
            Go to the diagnostic
            <ArrowRight />
          </Link>
        </Button>
      </PageHero>
      <Section className="text-center">
        <p className="text-muted-foreground">
          Redirecting you now. If nothing happens,{" "}
          <Link to="/diagnostic" className="text-foreground underline underline-offset-4">
            open the diagnostic
          </Link>
          .
        </p>
      </Section>
    </>
  );
}
