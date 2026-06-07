# SYNTREX LLC — FULL WEBSITE AUDIT REPORT

**Date:** 2026-06-07  
**Domain:** syntrexio.com  
**Auditor:** Claude Code  
**Current architecture:** Multi-page static site (7 HTML files, split from original SPA)  
**Hosting:** GitHub Pages, custom domain via Squarespace DNS

---

## 0. KEY CONTEXT

The site was recently split from a single-file SPA (`index.html` with `sp()` routing) into 7 standalone HTML files: `index.html`, `services.html`, `pricing.html`, `projects.html`, `about.html`, `contact.html`, `legal.html`. Each file carries a full copy of all CSS (inline), all JS (inline), the SYN chatbot, and a canonical footer. An `sp()` override redirects remaining in-content `onclick="sp('X')"` calls to `.html` file navigation. There is also a `case-study.html` (Notion-driven template) that predates the split.

---

## 1. CRAWLABILITY & INDEXABILITY

### 1.1 Architecture — RESOLVED (formerly Critical)
The original SPA single-URL architecture has been replaced with real separate HTML files, each with its own URL, `<title>`, `<meta description>`, and `<link rel="canonical">`. This is Phase 3 Option B from the brief, already implemented. Each page is independently indexable.

### 1.2 robots.txt — Present
```
User-agent: *
Allow: /
Sitemap: https://syntrexio.com/sitemap.xml
```
**Finding (Medium):** No AI crawler policy. GPTBot, ClaudeBot, PerplexityBot, Google-Extended, Bytespider are not explicitly addressed. Recommendation: keep `Allow: /` for all (since the goal is AI discoverability), but document the decision.

### 1.3 sitemap.xml — Present, needs update
Contains 8 URLs (`/`, `/index.html`, and the 6 subpages). `lastmod` dates are 2026-04-23.
**Finding (Low):** The `lastmod` values are stale. `case-study.html` is not included (acceptable if it's a template that pulls from Notion). Update `lastmod` after each deployment.

### 1.4 Canonical tags — Present and correct
Every page has `<link rel="canonical" href="https://syntrexio.com/{page}.html">`. No accidental `noindex`.

### 1.5 Meta robots — Present
All pages: `<meta name="robots" content="index, follow">`. Correct.

### 1.6 H1 tags — 1 per page (correct)
| Page | H1 text |
|------|---------|
| index.html | "If AI can do it, we build it / we automate it / we create it / we grow it" |
| services.html | "Everything we build, built for you." |
| pricing.html | "Priced for your needs." |
| projects.html | "Projects & Case Studies." |
| about.html | "Built lean. Built to deliver." |
| contact.html | "Let's build something that works for you." |
| legal.html | "Legal Documents" |

### 1.7 Content is in raw HTML source
All page content is present in the HTML source (not JS-injected), so crawlers that don't execute JS can still read it. The only JS-dependent content is `case-study.html` (Notion API).

---

## 2. ON-PAGE SEO

### 2.1 Title tags — Present, unique per page (Severity: Low)
Each page has a unique, keyword-aware `<title>`. They are good but could be tightened.

| Page | Current title |
|------|---------------|
| index.html | "AI Automation Agency \| Custom AI Chatbots, Workflow Automation & Business Automation \| Syntrex LLC" |
| services.html | "AI Automation Services \| AI Chatbots, Workflow Automation & Custom AI Tools \| Syntrex LLC" |
| pricing.html | "AI Automation Pricing \| Custom Project & Monthly Retainer Quotes \| Syntrex LLC" |
| projects.html | "Projects & Case Studies \| AI Automation in Action \| Syntrex LLC" |
| about.html | "About Syntrex \| AI Automation Experts Building Custom AI Systems \| Syntrex LLC" |
| contact.html | "Contact Syntrex \| Get a Free AI Automation Quote \| Syntrex LLC" |
| legal.html | "Legal \| Terms of Use, Privacy Policy, MSA, SOW, NDA \| Syntrex LLC" |

**Finding (Low):** index.html title is 96 chars — over the ~60 char display limit. Google will truncate it. Recommend shortening.

### 2.2 Meta descriptions — Present, unique per page
All 7 pages have unique `<meta name="description">` tags targeting relevant keywords. Lengths are appropriate (150-160 chars). No issues.

### 2.3 Heading hierarchy
Generally clean. Each page has 1 H1 followed by H2 sections. Minor issues:
- **FAQ section (index.html):** Uses H3 for questions inside `<details>` elements under an H2 heading — this is correct semantically.
- **Services page:** Uses H3 for all 15 service titles — correct under the page's H1.

**Finding (Low):** No skipped levels detected. Hierarchy is clean.

### 2.4 Keyword targeting

| Page | Primary target query | Secondary queries | Alignment |
|------|---------------------|-------------------|-----------|
| index.html | "AI automation agency" | "custom AI chatbots", "workflow automation", "business automation" | Good |
| services.html | "AI automation services" | "AI chatbot development", "custom AI tools", "workflow automation services" | Good |
| pricing.html | "AI automation pricing/cost" | "custom AI project quote" | OK — copy is thin |
| projects.html | "AI automation case studies" | "AI project examples" | OK — depends on Notion content |
| about.html | "AI automation team/experts" | "who is Syntrex" | Good |
| contact.html | "contact AI automation agency" | "get AI automation quote" | Good |
| legal.html | N/A (not a ranking target) | — | Correct |

### 2.5 Image alt text — 100% compliance
All 19 images in index.html (and ~2 per subpage) have `alt` attributes. No empty or missing alts found across all 7 files.

### 2.6 Internal linking
Nav links use real `href="page.html"` on all 7 pages (16 href-based nav links per page). **21 remaining `onclick="sp('X')"` calls in index.html** (and 1-5 per subpage) are CTA buttons inside page content — these are caught by the `sp()` override script and redirect to the correct `.html` file. They work but are not crawlable links.

**Finding (Medium):** The 27+ `onclick="sp()"` CTA buttons across pages are invisible to crawlers. Replace with `<a href="page.html">` for SEO value. The `sp()` override is a safety net, not a long-term solution.

### 2.7 Per-service deep links
The 15 services on services.html have no individual anchors or IDs. A crawler or user cannot link to a specific service.
**Finding (Low):** Add `id` attributes to each service block for deep-linking (e.g., `#ai-chatbots`).

---

## 3. STRUCTURED DATA

### 3.1 JSON-LD inventory
Every page carries 4 JSON-LD blocks (all valid):
1. **LocalBusiness** — name, address (513 Main St, Windermere FL 34786), geo coords, areaServed: Worldwide, `knowsAbout`, `sameAs` (Instagram, TikTok, LinkedIn). Missing: `telephone` (intentional — email only), `email` field, `priceRange`.
2. **Service** — ServiceType "AI Automation & Digital Services", 8 Offers in the catalog. areaServed: Worldwide.
3. **FAQPage** — 7 Q&A pairs. Content matches the on-page FAQ.
4. **Organization** — name, url, logo (local image), description, email, sameAs (3 social links).

### 3.2 Findings

**Finding (Medium):** LocalBusiness is missing `email` property. Add `"email": "henry@syntrexio.com"`. Also missing `priceRange` — recommend `"$$"` since custom quotes are the model.

**Finding (Medium):** The same 4 JSON-LD blocks appear on ALL 7 pages identically. This isn't wrong, but the FAQPage schema only makes sense on index.html (where the FAQ section lives). Subpages should ideally drop FAQPage and add BreadcrumbList instead.

**Finding (Low):** No `WebSite` schema with `SearchAction`. Not critical for a 7-page site.

**Finding (High):** `case-study.html` has zero structured data. If real case studies are rendered there, adding `Article` or `CaseStudy` schema would help.

---

## 4. AI DISCOVERABILITY (GEO/AEO)

### 4.1 Answer extractability
Each page opens with clear content that an AI can extract. The FAQ section on index.html is especially strong — 7 clean Q&A pairs with plain-language answers covering: what Syntrex is, who it serves, where it's located, pricing, timelines, and industries.

**Finding (Medium):** No `llms.txt` file exists. This is a quick win — a clean markdown summary of the company, services, location, and contact for AI crawlers. Recommend creating one.

### 4.2 AI crawler policy
robots.txt allows all crawlers. This is the correct default if the goal is AI citation. No changes needed unless the user wants to block specific bots.

### 4.3 Entity consistency
Name, location, services, and contact email are stated consistently across the HTML text, JSON-LD schemas, and chatbot SYSTEM_PROMPT. Good entity signal strength.

**Finding (Low):** The `SYSTEM_PROMPT` still says "registered Florida limited liability company" and "Service area: worldwide" — consistent with the site copy after the stage-1 text fixes.

---

## 5. PERFORMANCE / CORE WEB VITALS

### 5.1 Render-blocking resources
- All CSS is inline in `<style>` (no external stylesheet) — good for first paint, bad for caching across pages.
- All JS is inline at the end of `<body>` — not render-blocking.
- GA4 script uses `async` — correct.

**Finding (High):** ~70KB of CSS is duplicated identically across all 7 files. Total CSS payload across the site is ~490KB. Extracting to a shared `styles.css` would let browsers cache it after the first page load, improving subsequent navigations.

### 5.2 Video format
4 `<video>` tags in index.html (2 in each subpage) use `.mov` files hosted on mcusercontent.com:
- `db6867c5-...mov` (SYN robot animation, used 3x)
- `f14c4003-...mov` (hero bubble animation, used 1x)

**Finding (High):** `.mov` (QuickTime) has poor browser support outside Safari. Chrome/Firefox may fail to play these. Recommend converting to `.mp4` (H.264) with a `.webm` (VP9) fallback via `<source>` tags. Also add `loading="lazy"` or `preload="none"` on below-the-fold videos.

### 5.3 Image optimization
All images are hosted on mcusercontent.com (Mailchimp CDN). No images use `loading="lazy"`. All are PNG format.

**Finding (Medium):** 19 images on index.html load eagerly. Below-the-fold images (client logos, testimonial section, about strip) should use `loading="lazy"`. Modern formats (WebP) would reduce size further but require CDN-side conversion.

### 5.4 Font loading
Google Fonts loaded with `display=swap` — correct. `<link rel="preconnect" href="https://fonts.googleapis.com">` is present. Good.

**Finding (Low):** Fonts loaded: Outfit (7 weights), Space Grotesk (5 weights), Exo 2 (6 weights) = 18 weight files total. This is heavy. Audit which weights are actually used and trim.

### 5.5 OG image
`og:image` points to `images/Futuristic_SYNTREX_logo_design.png` — a 1x1 transparent placeholder PNG.

**Finding (Critical):** Any social share or link preview will show a blank/broken image. Replace with a real OG image (the Syntrex logo or a branded card). The original CDN-hosted image was `https://mcusercontent.com/d9f0645acdcd85eb1ee1a8067/images/c67f9ac4-5b4a-1e00-3368-58a6922ceb7a.png`.

---

## 6. ACCESSIBILITY

### 6.1 Color contrast
CSS variables:
- `--gr: #6b7a99` (body text gray) on `--w: #ffffff` (white) = contrast ratio ~4.9:1 — **PASSES AA for large text, FAILS AA for normal text** (needs 4.5:1 minimum; this is borderline).
- `--grd: #3d4a66` (dark gray) on white = ~8.2:1 — passes.
- `--bl: #1a6fff` (blue) on white = ~4.2:1 — **FAILS AA** for body text. Fine for large headings only.

**Finding (Medium):** Body text using `--gr` (#6b7a99) on white is borderline. Consider darkening to `#5d6a85` (~5.5:1) for reliable AA compliance.

### 6.2 Missing ARIA labels
- Mobile menu hamburger button: `<button class="mb" onclick="tmob()">&#9776;</button>` — no `aria-label`.
- Chat close button: `<button onclick="toggleChat()" id="chat-close">✕</button>` — no `aria-label`.
- Chat bubble: has `title="Chat with us"` but no `aria-label`.
- Social links in footer: icon-only `<a>` tags with no `aria-label` or visible text.

**Finding (Medium):** Add `aria-label` to all icon-only buttons and links (hamburger, chat toggle, social icons). ~10 elements across each page.

### 6.3 Form labels
Contact form uses `.fl` class divs as visual labels, not semantic `<label for="id">` elements. Inputs have `placeholder` text but that disappears on focus.

**Finding (Medium):** Replace visual-only labels with `<label for="fieldId">` connected to input `id` attributes.

---

## 7. ANALYTICS & TRACKING

### 7.1 GA4 — Present
`G-2B6PPH47QK` is loaded via `<script async src="...gtag/js?...">` on all 7 pages. Confirmed firing.

### 7.2 Virtual pageviews — N/A (multi-page now)
Since the site is now multi-page, each `.html` file generates a real pageview automatically. The old SPA virtual-pageview concern is resolved.

### 7.3 Conversion events
**Finding (High):** No conversion event tracking detected. Key events that should be tracked:
- Contact form submission (`fsub()` handler exists but fires no GA event)
- "Chat with SYN" opens
- "Get In Touch" / primary CTA clicks
- Email link clicks

Recommend adding `gtag('event', ...)` calls to these touchpoints.

---

## 8. CONTENT & SERVICES AUDIT

### 8.1 Services list (15 services on services.html)

| # | Service | Clear? | Overlap concern |
|---|---------|--------|-----------------|
| 1 | Website Design & Development | Yes | — |
| 2 | AI Chatbots | Yes | — |
| 3 | AI Content & Social Media | Yes | Overlaps with #10 |
| 4 | Lead Generation Systems | Yes | Overlaps with #9 |
| 5 | Workflow Automation | Yes | — |
| 6 | Custom AI Tools | Yes | Overlaps with #11 |
| 7 | Brand & Digital Presence | Vague | Could merge with #1 |
| 8 | System Integration | Yes | — |
| 9 | Growth System Design | Vague | Overlaps with #4 |
| 10 | AI Content Systems | Vague | Overlaps with #3 |
| 11 | Automated Proposal Systems | Yes | Subset of #6 |
| 12 | Client Onboarding Automation | Yes | Subset of #5 |
| 13 | AI Strategy & Consulting | Yes | — |
| 14 | Reporting & Analytics Systems | Yes | — |
| 15 | AI Business Planning | Vague | — |

**Finding (Medium):** 15 services is a lot. 4 pairs have meaningful overlap (#3/#10, #4/#9, #6/#11, #5/#12). Recommend consolidating to 8-10 distinct services grouped by buyer need. Wait for user approval before changing.

### 8.2 Dated/temporal claims
**Finding (High):** "By 2026 over 80% of businesses will have adopted AI" — it IS 2026. This reads as stale. Either update to a current stat or remove the temporal framing ("Over 80% of businesses now use some form of AI").

### 8.3 "Call" wording (violates email-only brand rule)
9 instances found:
- **L1935:** "Call to prototype" (hero metric)
- **L2095:** "From call to working prototype" (stats bar)
- **L2578 (SYSTEM_PROMPT):** "leave a phone number...advisor will call them back"
- **L2810-2813 (chatbot responses):** "leave your phone number...advisor will give you a call", "within 48 hours of our first call"
- **L2882 (intent matcher):** regex includes "call" as a trigger word (this is fine — it catches user input)

**Finding (High):** "Call to prototype" and "From call to working prototype" should be reworded. The brief suggests "first message" or "first contact." The chatbot responses mentioning phone callbacks are borderline — technically the user leaves a number and gets called back, which is email-initiated. Flag for user decision.

### 8.4 Trust/credibility
Two real clients are featured: HALT! Fire (industrial fire suppression) and Doughbrik's Wavers (CPG brand). Both have specific metrics (10hr+ saved/week, 3x faster workflows). Three testimonials with real names. Team section shows 5 members with photos and titles. This is strong for a young agency.

---

## 9. CONVERSION (CRO)

### 9.1 Primary CTA clarity
Each page has a clear call-to-action routing to contact.html or the SYN chat. Good.

### 9.2 CTA consistency
CTAs use two patterns: "Get In Touch" (routing to contact) and "Chat with SYN" (opens chatbot). Consistent across pages.

### 9.3 Contact form friction
The contact form on contact.html has: first name, email, company type, website (optional), phone (optional), and a message textarea. This is reasonable but could be simplified (company type could be optional).

**Finding (Low):** The "Phone Number (optional — request a call)" field conflicts with the email-only brand rule. It's positioned as callback-request, which is borderline. Flag for user decision.

---

## 10. TECHNICAL HYGIENE

### 10.1 HTML validation
All 7 pages pass HTML tag-balance validation (0 mismatch errors each). DOCTYPE, single `<body>`, single `</html>` all correct.

### 10.2 Duplicate IDs
Each page has its own `id="chat-bubble"`, `id="chat-window"`, etc. Since these are separate HTML files (not combined), this is correct — no duplicate ID issues within any single page.

### 10.3 Cloudflare email protection
No `__cf_email__` spans found. Email addresses appear in plaintext. The brief says "do not touch these — they are intentional." They may only activate when served through Cloudflare's proxy (not visible in source files).

### 10.4 Broken links
No broken internal links detected. All nav `href` targets exist. All `onclick="sp('X')"` calls are caught by the override script.

### 10.5 CSS duplication
~70KB of identical inline CSS is repeated in all 7 files. This is the single largest hygiene issue — it inflates total site size by ~420KB unnecessarily and prevents browser caching.

---

## 11. PRIORITIZED ACTION LIST

### Critical (fix immediately)
1. **Replace OG image placeholder** with the real Syntrex logo or a branded social card (currently a 1x1 transparent PNG — all social shares show a blank image).

### High (fix in Phase 2)
2. **Replace remaining `onclick="sp()"` CTAs** with real `<a href="">` links (27+ instances across all pages) for crawlability.
3. **Fix dated stat:** "By 2026 over 80% of businesses will have adopted AI" — it's mid-2026.
4. **Fix "call" wording:** "Call to prototype" and "From call to working prototype" — replace with "first contact" / "first message."
5. **Add GA4 conversion events** for form submit, chat open, CTA clicks.
6. **Convert .mov videos to .mp4/.webm** for cross-browser compatibility (currently 4 .mov files, poor Chrome/Firefox support).
7. **Create llms.txt** for AI discoverability.

### Medium (Phase 2-4)
8. **Extract CSS to external stylesheet** (saves ~420KB across the site, enables caching).
9. **Add `aria-label` to icon-only elements** (hamburger, chat toggle, social links — ~10 per page).
10. **Add `loading="lazy"` to below-the-fold images** (19 images on index.html).
11. **Add `email` and `priceRange` to LocalBusiness JSON-LD.**
12. **Move FAQPage schema to index.html only;** add BreadcrumbList to subpages.
13. **Convert form labels to semantic `<label for="">`** on contact page.
14. **Consider darkening body text color** from #6b7a99 to ~#5d6a85 for AA contrast compliance.
15. **Add `id` anchors to each service** on services.html for deep-linking.
16. **Consolidate overlapping services** (4 pairs identified) — pending user approval.

### Low (Phase 4-5)
17. **Audit font weights** — 18 loaded, likely only 8-10 used.
18. **Update sitemap.xml `lastmod`** dates after each deployment.
19. **Add WebSite schema** with SearchAction if warranted.
20. **Add structured data to case-study.html** (Article schema).

---

## PHASE 3 ARCHITECTURE NOTE

The brief's Phase 3 architecture decision is moot — **Option B (true multi-page static site) has already been implemented.** The site is now 7 separate HTML files with real URLs, individual SEO tags, and proper nav links. The `sp()` override handles legacy in-content CTAs as a bridge.

The remaining architectural improvement is item #8 above: extracting the duplicated inline CSS/JS into shared external files. This doesn't change the architecture, just improves cacheability and maintainability.
