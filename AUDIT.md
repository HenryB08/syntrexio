# Phase 1 — Content & IA Audit (app/src)

Snapshot of the site before the overhaul. Scope: the TanStack Start app under `app/` (the migration target). Root-level legacy `.html` and `app/public/*.html` are frozen and out of scope.

## 1. Routes / pages (prerendered)

`app/vite.config.ts` prerenders 10 routes. Each `*.tsx` route pairs with an entry in `PAGE_SEO` (`app/src/lib/seo-data.ts`).

| Route | File | Role today | Overhaul action |
|---|---|---|---|
| `/` | `routes/index.tsx` | Home: SYN Growth + SYN Workspace | Rewrite to new positioning |
| `/services` | `routes/services.tsx` | "Two products. One SYN." | Rebuild: 16 services by 4 tracks + Agent Workforce |
| `/pricing` | `routes/pricing.tsx` | $497 setup + $349/$549 | Rebuild: published pricing, retainer/build toggle |
| `/customers` | `routes/customers.tsx` | Customers on SYN | Rebuild as **Work** (case studies), keep URL |
| `/news` | `routes/news.tsx` | SYN launch posts | Rewrite on-brand, drop from primary nav |
| `/about` | `routes/about.tsx` | Agency→software story | Rewrite origin + delivery model, keep team cards |
| `/contact` | `routes/contact.tsx` | Contact form (Formspree) | Keep functionality, refresh copy |
| `/leak-audit` | `routes/leak-audit.tsx` | Missed-call "front door" | Redirect → `/diagnostic`, keep URL |
| `/privacy` | `routes/privacy.tsx` | Privacy policy | Remove SYN references |
| `/terms` | `routes/terms.tsx` | Terms + old pricing + guarantee | Remove SYN/old pricing, restate guarantee |
| `/diagnostic` | (new) | — | **New** interactive self-qualifying tool |

Home sections today: Hero → Trusted-by marquee → Two Products → Inside SYN Growth (GrowthSystem) → Growth stat strip → Guarantee banner → Inside SYN Workspace → Workspace stat band → World map → Closing CTA → FAQ.

## 2. Dead positioning to remove (217 hits across 15 files)

- **SYN / SYN Growth / SYN Workspace** — every route, `seo-data.ts`, `site.ts` comment, `SiteFooter`, `ChatBubble`, `GrowthSystem`.
- **"One platform, two products"** — home, services, news.
- **AI receptionist** — home (`index.tsx:267`), `seo-data.ts` FAQ, services.
- **Missed call / missed-call text-back** — home, leak-audit, pricing, `seo-data.ts`.
- **Old pricing $497 / $349 / $549 / $846** — home, services, pricing, terms, `seo-data.ts`, llms.txt.
- **Growth Core / Growth Pro** — pricing, seo-data, terms.
- **The Receipt / booked-value guarantee** — home, pricing, terms, seo-data, GrowthSystem.
- **"Launching soon" / "early access" / waitlist / syn.syntrexio.com** — everywhere.
- **GrowthSystem.tsx** — the 5-layer "Inside SYN Growth" component is entirely old-model.
- **Karlo Financial** — named client to remove (proof restricted to 3).

## 3. Statistics currently displayed vs. verified list

None of the current stats are in the brief's verified list. All are replaced.

| Stat shown | Where | In verified list? |
|---|---|---|
| 62% calls unanswered | home stats, leak-audit, seo FAQ | No — remove |
| 85% never call back | home stats, leak-audit, seo FAQ | No — remove |
| $126,000/yr lost | home stats, seo FAQ | No — remove |
| ~1,200 app switches/day (HBR) | home wstats | No — remove |
| 9% work year lost (HBR) | home wstats | No — remove |
| 58% work about work (Asana) | home wstats | No — remove |
| 78% buy from first responder | seo FAQ | No — remove |
| 10–15x phone vs form (BIA/Kelsey) | seo FAQ | No — remove |
| $2,000–3,000/mo part-time human | seo FAQ | No — remove |
| HALT Fire 280% search growth, 10+ hrs/wk | llms.txt only | **Yes** — keep, surface on site |
| Doughbrik's 3x faster workflows | llms.txt only | Pre-approved on site — keep |

New verified stats (MIT/S&P/Gartner/RAND/ADAPT/Clutch/HubSpot/Moxo) are not yet used anywhere and will be added with sources cited.

## 4. CTAs and destinations (today)

- Primary CTA everywhere: **"Get Your Free Leak Audit"** → `/leak-audit` (nav pill, hero, all page footers, cards).
- Secondary: **"Join the Workspace waitlist"** / "Join the waitlist" → `https://syn.syntrexio.com` (hero, home, services, pricing, customers, nav-absent).
- "See pricing" → `/pricing`. Footer "SYN" → `https://syn.syntrexio.com`.
- Forms: `/leak-audit` and `/contact` POST to Formspree (`lib/site.ts`). Chat bubble POSTs to Worker.

New CTA scheme: primary → **`/diagnostic`** ("Start the diagnostic" / free self-qualifier); pricing as secondary. Paid **AI Systems Diagnostic ($3,500)** referenced on Pricing. Remove all waitlist/syn.syntrexio.com CTAs.

## 5. Metadata / headings / schema / sitemap / llms.txt

- **Metadata:** `PAGE_SEO` holds per-route title/description/keywords/OG/canonical. All titles/descriptions carry SYN + old pricing + receptionist keywords. Rewrite all.
- **Headings:** one H1 per page via `PageHero`/hero (good structure); H2/H3 via `SectionHeader`. Hierarchy is sound and preserved.
- **Schema (`seo-data.ts`):** site-wide Organization + WebSite; per-page Product (SYN Growth), SoftwareApplication (SYN Workspace), FAQPage, BreadcrumbList, Person (Henry), Service (leak-audit), ItemList (customers), NewsArticle (news). Rebuild: ProfessionalService + Service×4 tracks + FAQPage + BreadcrumbList; drop SYN Product/SoftwareApplication.
- **FAQ:** visible accordions render from the FAQPage JSON-LD via `getFaq()` — edit schema, not JSX. Present on `/`, `/about`, `/services`, `/pricing`, `/leak-audit`.
- **`app/public/sitemap.xml`:** 10 URLs, no `/diagnostic`. Add it; update lastmod.
- **`app/public/robots.txt`:** allows GPTBot, ClaudeBot, Claude-Web, PerplexityBot, Google-Extended, Bytespider. Missing **CCBot**. Add it.
- **`app/public/llms.txt`:** entirely old-model (SYN, $497, Receipt, Karlo). Full rewrite.

## 6. Reusable components (design language stays)

All in `app/src/components/site`. No design changes; new sections compose these:

- **Layout:** `Section`, `SectionHeader`, `PageHero` (variants: grid/radar/mosaic/worldmap/converge/scanline via `HeaderBackdrop`), `container-page`.
- **Cards:** `surface-card` + `surface-card-hover` (pointer-tilt, glow), `pricing-card spec-sweep`, `growth-card spread-in`.
- **Motion/visual:** `Reveal`, `Aurora`, `WorldMap`, `DataStream`, `Icon3D`, `CountUp`, `MagneticButton`, `[data-choreo]`/`in-view` choreography, `word-rise`, `text-shimmer`, `badge-shimmer`, `stat-underline`, `check-glow`, `heartbeat`, `border-draw`.
- **UI kit (shadcn):** `Button` (variants incl. `accent`, sizes incl. `xl`), `Accordion` (drives FAQ), `Progress`, `Tabs`, `Input`/`Label`/`Textarea`, `Card`, `Badge`, `sonner` toasts.
- **`GrowthSystem`** — expandable 5-card pattern; reusable shape for the new Agent Workforce / "how it works" sections (content replaced).
- **`Faq`** — schema-driven accordion, reuse as-is.

New pieces to build in existing tokens: 4-track cards (reuse `surface-card`), pricing retainer/build **toggle** (pill segmented control from `border-hairline`/`accent`), the **Diagnostic** wizard (`surface-card` + `Progress` + `Reveal`), Agent Workforce flagship section.

## 7. Copy-rule risks in current copy

Em dashes: none found in visible copy (existing copy already uses commas). Continue that. All other copy fully rewritten to the new positioning.
