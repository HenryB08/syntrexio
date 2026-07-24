import { Section, SectionHeader } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getFaq } from "@/lib/seo";

// Renders the page's FAQ from the SAME data as its FAQPage JSON-LD (getFaq
// reads the ported schema), so the visible text is character-identical to the
// structured data. No-op if the page has no FAQ.
export function Faq({ path, eyebrow = "FAQ" }: { path: string; eyebrow?: string }) {
  const items = getFaq(path);
  if (items.length === 0) return null;

  return (
    <Section>
      <SectionHeader eyebrow={eyebrow} title="Questions, answered." align="center" />
      <div className="mx-auto mt-10 max-w-3xl">
        <Reveal>
          <Accordion type="single" collapsible className="w-full">
            {items.map((item, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-left text-base font-medium text-foreground">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </Section>
  );
}
