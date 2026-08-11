# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Operating rules (permanent)

These are standing rules set by Henry (the owner). They always apply.

### Workflow
- **Always work on a new branch, never directly on `main`.**
- **Never merge without Henry's explicit approval.** An approval covers only the specific merge he approves; it does not carry over to later work.
- **Run the full-site smoke check before declaring any web work complete.** Do not report web work as done until the whole site has been smoke-checked, not just the page you changed.
- **If Henry reports a live bug that a test cannot reproduce, Henry's report wins.** Do not close it out as unreproducible. Investigate the gap between the test and reality, because the test is what is wrong or incomplete.

### Copy rules (anything user-facing)
Applies to all customer-facing surfaces: site copy, the SYN system prompt, SEO/schema, forms, and any generated text.
- **No em dashes.**
- **No fabricated statistics.** Only cite figures already approved on the site.
- **No client counts** and no naming/implying clients beyond those already approved.

### Canonical facts (source of truth)
- **Positioning:** Syntrex is the AI infrastructure layer behind operating companies. One team runs a business's entire digital and AI back end across four tracks: Visibility, Conversion, Presence, Operations. **Agent Workforce** is the flagship.
- **Pricing (published, the only correct figures):**
  - Front door: **AI Systems Diagnostic $3,500**, fully credited toward any engagement within 60 days.
  - Retainers per month: **Visibility $2,500, Conversion $2,000, Presence $1,800, Operations $2,500, Full Stack $7,500** (all four, below the $8,800 sum), **Agent Workforce $5,000 to $12,000**, **Full Stack plus Agent Workforce $12,500 and up**.
  - One-time builds: website up to 5 pages $4,500; 6 to 12 pages $7,500; e-commerce $11,000; brand identity $3,500; AI assistant deployment $4,000; CRM buildout $4,500; automation $6,500 per workflow; custom AI tool from $9,000; Agent Workforce install $35,000 to $95,000.
  - Terms: builds are 40% deposit, balance on milestones; retainers billed on the 1st; portfolio pricing 10% off the second brand, 15% off beyond.
- **Guarantee:** we guarantee only what we control (citation presence, ranking movement, content volume, hours removed, agent task volume, delivery against spec). We do **not** guarantee revenue, closed deals, or conversion rate. The remedy is our labor, never a refund.
- **Dead terms (never reintroduce):** SYN, SYN Growth, SYN Workspace, the Growth System, the Receipt, booked-value guarantee, AI receptionist, missed-call text-back, the Leak Audit, and any of the retired Growth-era install-plus-monthly prices. The pricing block above is the only correct pricing.

> The TanStack app embeds no system prompt, so `worker/worker.js` is the sole owner of the SYN chat assistant's behavior. Keep its `SYSTEM_PROMPT` in sync with the site copy (positioning, four tracks, pricing, guarantee) in `app/src`. The Worker deploys separately to Cloudflare (wrangler), not via the Pages workflow.

## Repository shape: two sites mid-migration

This repo holds **two versions of syntrexio.com** during a staged migration:

- **Root-level static HTML** (`index.html`, `about.html`, `services.html`, `pricing.html`, `leak-audit.html`, etc. plus `styles.css`, `services/`, `images/`) — the **current live site**, served by GitHub Pages directly from a branch. Hand-authored HTML.
- **`app/`** — the **migration target**: a TanStack Start React app that prerenders every route to static HTML. It reproduces the live site's pages, SEO, and content, and is the successor once cutover happens.

Cutover is manual and gated (see below). Until then, the root HTML is authoritative for what visitors see; `app/` builds but does **not** deploy. When changing site content, know which surface you are editing — a change in `app/` does not affect the live site pre-cutover, and vice versa.

## `app/` — the TanStack Start app

The real application. Stack: **TanStack Start** (file-based routing), React 19, TypeScript, Tailwind CSS v4, shadcn/ui (new-york style), react-three-fiber (3D visuals). Generated/maintained via **Lovable**.

### Commands (run inside `app/`)

This project uses **Bun** (`bun.lock`, `bunfig.toml`) — not npm, despite `app/README.md`.

```sh
cd app
bun install               # use --frozen-lockfile in CI
bun run dev               # Vite dev server
bun run build             # prerender to static HTML in dist/client
bun run build:dev         # build with development mode
bun run lint              # eslint
bun run format            # prettier --write
```

There is no test suite. Verify changes with `bun run build` (catches prerender/type/route errors) and `bun run lint`.

### Build model

`vite.config.ts` wraps `@lovable.dev/vite-tanstack-config`, which bundles most plugins — **do not** re-add TanStack devtools, tailwind, tsConfigPaths, the `@` alias, etc. or the app breaks with duplicate plugins. Key deviations from defaults:
- **Nitro is disabled** (`nitro: false`): no server runtime. Every route in the `pages` list is prerendered to full static HTML under `dist/client`.
- Adding a new route means adding both the route file **and** an entry in `vite.config.ts`'s `tanstackStart.pages` array, or it won't prerender.
- `src/server.ts` is the SSR entry (an error-wrapping shim); `src/start.ts` adds error middleware. Both convert catastrophic SSR failures into `renderErrorPage()` HTML instead of leaking h3's swallowed 500s.

### Routing

File-based under `app/src/routes/` — see `app/src/routes/README.md` for conventions (bare `$` for dynamic segments, `_splat` for splats, `__root.tsx` is the only shell). `routeTree.gen.ts` is auto-generated; never edit by hand. Do not introduce Next.js/Remix conventions (`src/pages/`, `app/layout.tsx`).

### Content is data, edit at the source

- **SEO** lives in `app/src/lib/seo-data.ts` (`PAGE_SEO`, `SITE_SCHEMA`, `COMMON`). `seo.ts` builds head tags from it. The **visible FAQ accordions render from the `FAQPage` JSON-LD schema** in `seo-data.ts`, so editing an answer updates both the page copy and its structured data — edit the schema, not the JSX.
- **Integrations** are in `app/src/lib/site.ts`: lead/contact forms POST to a fixed **Formspree** endpoint; the SYN chat widget POSTs to the **Cloudflare Worker** (below). Both endpoints intentionally match the pre-cutover site.

### ESLint invariant

`server-only` (Next.js) imports are banned — use `*.server.ts` or `@tanstack/react-start/server-only` instead. `no-unused-vars` is off; `react-hooks` rules are on.

## `worker/` — SYN chatbot (Cloudflare Worker)

`worker/worker.js` is the `syntrex-chat` Worker. It proxies the site's chat to the Anthropic Messages API and **owns the system prompt, model, and `max_tokens`** — the browser sends only the `messages` array; anything else it sends is ignored. `ANTHROPIC_API_KEY` comes from the Worker env, never the client.

**Critical invariant:** `SYSTEM_PROMPT` in `worker.js` must stay **byte-identical** to the `SYSTEM_PROMPT` embedded in the site pages. It encodes strict brand rules (pricing, the guarantee wording, "never call it an AI receptionist," approved statistics/clients only, no em dashes/markdown). If you change SYN's behavior or company facts, update both copies together.

## Deployment

`.github/workflows/deploy-pages.yml` builds `app/` with Bun and publishes `dist/client` to GitHub Pages (adds `CNAME`, `.nojekyll`, and copies `index.html` → `404.html` for SPA fallback).

The `deploy` job is **double-gated**: it runs only on `main` **and** only when repo variable `PAGES_DEPLOY_ENABLED == 'true'`. Pre-cutover, merges to `main` build green but skip deploy, leaving the branch-served live site untouched. Cutover (one-time, manual UI steps): set Pages source to "GitHub Actions" and set `PAGES_DEPLOY_ENABLED = true`.

## Working with Lovable (important for git)

`app/` is connected to Lovable (`app/AGENTS.md`, `app/.lovable/`). **Do not rewrite published git history** — no force-push, rebase, amend, or squash of already-pushed commits; it corrupts Lovable's project history. Commits pushed to the connected branch sync into the Lovable editor, so keep the branch in a working (buildable) state.

## Supply-chain guard

`app/bunfig.toml` sets `minimumReleaseAge = 86400` — Bun refuses package versions published less than 24h ago. Only `@lovable.dev/*` packages are excluded. Confirm with the user before adding any exclusion.
