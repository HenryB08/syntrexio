# Syntrex Visual Redesign — Change Log

Branch: `visual-redesign`
Date: 2026-06-14
Scope: Complete visual overhaul. Zero copy changes. Zero SEO changes. Zero structural changes.

---

## Files Modified

### `styles.css`
- Added `:root` design tokens: `--color-bg`, `--color-surface`, `--color-border`, `--color-text-primary`, `--color-text-secondary`, `--color-text-muted`, `--color-accent`, `--color-accent-dim`
- Added type scale tokens: `--text-hero`, `--text-h1`, `--text-h2`, `--text-h3`, `--text-body`, `--text-small`, `--text-label`
- Added spacing tokens: `--section-gap`, `--content-max`, `--content-narrow`
- Added motion tokens: `--ease-out`, `--duration-fast`, `--duration-base`, `--duration-slow`
- Updated legacy tokens (`--nv`, `--w`, `--off`, `--brd`, `--gr`, `--bl`) to match new dark palette
- Global: `body` background → pure black `#000000`; text → `#888888`; headlines → `#F0F0F0`
- Navigation: dark glass `rgba(10,10,10,0.85)`, clean border, no box-shadow
- Hero: 100vh full-bleed, removed orb/stars/badge/metrics, load animations added
- Buttons: clean pill shape, no glow, border-based ghost variant
- Trusted-by ticker: logos `filter:brightness(0) invert(1)` at 50% opacity, hover 100%
- Service cards: dark surface `#0a0a0a`, border-only, image scales 1.03 on hover, icons hidden
- Before/After, testimonials, case study, Who We Help → transparent, border-separated rows
- Process steps: large accent step numbers, connecting line, horizontal on desktop
- About/Mission strip: clean, border-separated values list
- Service pages (.pgh hero): clean dark bg, removed blue accent band
- "What You Get" feature grids → clean border-separated list, no card backgrounds
- Inputs: dark surface, border, accent focus ring
- Added `[data-reveal]` scroll animation system with `transition-delay` variants
- Added `@media (prefers-reduced-motion)` respect

### `index.html`
- Added hero eyebrow label: "AI · DIGITAL · AUTOMATION"
- Added `data-reveal` attributes to: service cards (12), section headings, process steps, testimonials heading, case study heading, about strip
- Added scroll reveal IntersectionObserver script before `</body>`

### All 12 service pages
- `services/ai-chatbots.html`
- `services/lead-generation.html`
- `services/ecommerce.html`
- `services/workflow-automation.html`
- `services/custom-ai-tools.html`
- `services/system-integration.html`
- `services/website-design.html`
- `services/brand-digital-presence.html`
- `services/ai-content.html`
- `services/ai-strategy.html`
- `services/reporting-analytics.html`
- `services/ai-business-planning.html`

Each received:
- `data-reveal` on `.ey`, `h1`, `h2` elements
- Scroll reveal JS script (if not already present)
- Visual treatment via CSS overrides: dark hero bg, no blue accent band, clean feature grids

### Other pages
- `about.html` — `data-reveal` on headings, scroll reveal JS
- `contact.html` — `data-reveal`, form inputs styled via CSS, scroll reveal JS
- `pricing.html` — `data-reveal` on headings, scroll reveal JS
- `projects.html` — `data-reveal` on headings, scroll reveal JS
- `services.html` — `data-reveal`, cards styled dark via CSS, scroll reveal JS

---

## What Was NOT Changed
- Zero copy/text changes
- Zero URL changes
- Zero meta tag or SEO changes
- Zero schema/JSON-LD changes
- Zero chatbot code or Cloudflare worker changes
- Zero tracking code changes
- Zero images removed (all previously placed images kept)
- Site structure and navigation preserved exactly

---

## Design Decisions
- **Hero**: Image background kept (golden hour office), overlay upgraded to gradient-to-black at bottom for seamless transition. Animated orb removed entirely.
- **Why Syntrex images**: Both images (ab00e5d5 and eb2021e4) kept in Why Syntrex section as visual pair, section background changed from navy to pure black.
- **Process section**: Background image (97b2887a aerial city) kept, section styling overridden to match new system.
- **Before/After**: CSS converts white card grid to transparent full-width rows with border separators. No HTML restructuring needed.
- **Testimonials**: CSS removes card backgrounds, existing copy unchanged.
