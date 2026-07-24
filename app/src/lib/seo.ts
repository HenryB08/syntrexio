// Head builders that port the pre-cutover site's SEO onto the new routes.
// siteHead() supplies site-wide meta + schema (used in __root); pageHead(path)
// supplies per-route title/description/keywords/canonical/OG/Twitter + schema.
import { COMMON, PAGE_SEO, SITE_SCHEMA } from "./seo-data";

type MetaTag = Record<string, unknown>;
type LinkTag = Record<string, unknown>;

// Site-wide tags: rendered once from the root route so every page carries them.
export function siteHead(): { meta: MetaTag[]; links: LinkTag[] } {
  return {
    meta: [
      { name: "author", content: COMMON.author },
      { name: "robots", content: COMMON.robots },
      { name: "geo.region", content: COMMON.geo_region },
      { name: "geo.placename", content: COMMON.geo_place },
      { name: "geo.position", content: COMMON.geo_pos },
      { name: "ICBM", content: COMMON.icbm },
      { property: "og:type", content: COMMON.og_type },
      { property: "og:site_name", content: COMMON.og_site },
      { property: "og:locale", content: COMMON.og_locale },
      { name: "twitter:card", content: COMMON.tw_card },
      ...SITE_SCHEMA.map((s) => ({ "script:ld+json": s })),
    ],
    links: [],
  };
}

// Extract the FAQ Q&A from a page's ported FAQPage schema, so the visible
// accordion and the structured data render from the SAME source and are
// therefore character-identical by construction. Returns [] if the page has
// no FAQPage schema.
export function getFaq(path: string): { question: string; answer: string }[] {
  const p = PAGE_SEO[path];
  if (!p) return [];
  const faq = p.schema.find((s) => s["@type"] === "FAQPage") as
    | { mainEntity?: Array<{ name?: string; acceptedAnswer?: { text?: string } }> }
    | undefined;
  if (!faq?.mainEntity) return [];
  return faq.mainEntity.map((q) => ({
    question: q.name ?? "",
    answer: q.acceptedAnswer?.text ?? "",
  }));
}

// Per-route tags. Title, description, keywords, canonical, OG/Twitter, and the
// page's own JSON-LD (Service / FAQPage / BreadcrumbList / Person / Product).
export function pageHead(path: string): { meta: MetaTag[]; links: LinkTag[] } {
  const p = PAGE_SEO[path];
  if (!p) return { meta: [], links: [] };
  const image = p.ogImage ?? COMMON.og_image;
  return {
    meta: [
      { title: p.title },
      { name: "description", content: p.description },
      { name: "keywords", content: p.keywords },
      { property: "og:title", content: p.ogTitle },
      { property: "og:description", content: p.ogDescription },
      { property: "og:url", content: p.canonical },
      { property: "og:image", content: image },
      { name: "twitter:title", content: p.ogTitle },
      { name: "twitter:description", content: p.ogDescription },
      { name: "twitter:image", content: image },
      ...p.schema.map((s) => ({ "script:ld+json": s })),
    ],
    links: [{ rel: "canonical", href: p.canonical }],
  };
}
