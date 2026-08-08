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
- **Pricing:** $497 install, then **$349/mo Core** or **$549/mo Pro**. Use these exact figures.
- **Company vs. product:** **Syntrex** is the company. **SYN** is the product, shipped in two forms: **SYN Growth** and **SYN Workspace**.
- **Guarantee = booked value:** measured as bookings times client-confirmed job values.
- **The Receipt** is the payout document.

> Note: only `app/src` currently uses the canonical facts. The other surfaces still carry the older pricing and product names. See **Content drift** below before editing copy anywhere.

## Repository shape: two sites mid-migration

This repo holds **two versions of syntrexio.com** during a staged migration, plus a frozen copy of the old one inside the new one:

- **Root-level static HTML** (`index.html`, `about.html`, `services.html`, `pricing.html`, `leak-audit.html`, `syn.html`, `projects.html`, `legal.html`, etc. plus `styles.css`, `services/`, `images/`) — the **current live site**, served by GitHub Pages directly from a branch. Hand-authored HTML.
- **`app/`** — the **migration target**: a TanStack Start React app that prerenders its routes to static HTML.
- **`app/public/`** — a **verbatim copy of legacy static pages** (`syn.html`, `legal.html`, `projects.html`, `services/*.html`, plus `sitemap.xml`, `robots.txt`, `llms.txt`, `security.txt`, `free-leak-audit/`). Vite copies `public/` into `dist/client` untouched, so these legacy pages **survive cutover as hand-authored HTML**, served alongside the React routes. They are not built from `app/src` and do not share its components, styles, or SEO data.

The React app is **not** a 1:1 reproduction of the live site. Routes in `app/src/routes/`: `/`, `/about`, `/services`, `/pricing`, `/customers`, `/news`, `/contact`, `/leak-audit`, `/privacy`, `/terms`. It adds `/customers` and `/news`; the live site's `syn.html`, `projects.html`, `legal.html`, and the twelve `services/*.html` detail pages have **no React route** and exist post-cutover only via `app/public/`.

Cutover is manual and gated (see below). Until then, the root HTML is authoritative for what visitors see; `app/` builds but does **not** deploy. When changing site content, know which of the three surfaces you are editing — a change in `app/src` does not affect the live site pre-cutover, and never affects the legacy pages in `app/public/` at all.

## Content drift (read before editing copy)

The same copy exists in three places and they currently **disagree**. This is known, not a bug to fix opportunistically:

| Surface | Pricing | Product names |
|---|---|---|
| `app/src` (React routes + `seo-data.ts`) | canonical: $497 / $349 / $549 | canonical: SYN Growth, SYN Workspace |
| Root `*.html` (live site) | old: $597 install, $397 Core, $547 Pro, plus Presence System / Brand Studio tiers | old: Growth System, Presence System, Brand Studio |
| `app/public/*.html` and `worker/worker.js` | old, same as root | old, same as root |

When you touch one of these files, reconcile **that file** to the canonical facts. Do not leave a file half-migrated. If a change spans surfaces (for example a pricing update), update every affected copy in the same branch.

The list of approved statistics lives in the `SYSTEM_PROMPT` in `worker/worker.js` (411 Locals 62% unanswered, Aircall 85% never call back, ~$126,000/yr, BIA/Kelsey 10-15x, etc.). That block is the working definition of "figures already approved on the site" in the copy rules above.

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

`worker/worker.js` is the `syntrex-chat` Worker at `https://syntrex-chat.henrybello.workers.dev`. It proxies the site's chat to the Anthropic Messages API and **owns the system prompt, model, and `max_tokens`** — the browser sends only the `messages` array; anything else it sends is ignored. `ANTHROPIC_API_KEY` comes from the Worker env, never the client.

There is **no `wrangler.toml`** in this repo; the Worker is deployed out-of-band. Editing `worker.js` here does not ship it.

**Critical invariant:** `SYSTEM_PROMPT` in `worker.js` must stay **byte-identical** to every embedded copy. That prompt is duplicated across roughly 20 files:
- all root-level `*.html` pages (`index`, `about`, `services`, `pricing`, `contact`, `leak-audit`, `projects`, `syn`, `legal`, `privacy`, `terms`)
- `app/public/syn.html`, `app/public/legal.html`, and `app/public/services/*.html`

`grep -rl SYSTEM_PROMPT` finds them all. The React app does **not** embed it: `app/src/components/site/ChatBubble.tsx` calls `sendChat()` in `app/src/lib/site.ts`, which posts only `messages` to the Worker. So post-cutover, the prompt lives in `worker.js` and the surviving `app/public/` legacy pages.

The prompt encodes strict brand rules (pricing, the guarantee wording, "never call it an AI receptionist," approved statistics/clients only, no em dashes/markdown). If you change SYN's behavior or company facts, update every copy together.

## Deployment

`.github/workflows/deploy-pages.yml` builds `app/` with Bun (pinned 1.3.11, `--frozen-lockfile`) and publishes `dist/client` to GitHub Pages (adds `CNAME`, `.nojekyll`, and copies `index.html` → `404.html` for SPA fallback).

It triggers only on pushes touching `app/**`, `CNAME`, or the workflow file itself — **edits to the root-level live-site HTML never run CI**. Those pages are served straight off a branch by Pages, so they go live unbuilt and untested. Smoke-check them by hand.

The `deploy` job is **double-gated**: it runs only on `main` **and** only when repo variable `PAGES_DEPLOY_ENABLED == 'true'`. Pre-cutover, merges to `main` build green but skip deploy, leaving the branch-served live site untouched. Cutover (one-time, manual UI steps): set Pages source to "GitHub Actions" and set `PAGES_DEPLOY_ENABLED = true`.

## Working with Lovable (important for git)

`app/` is connected to Lovable (`app/AGENTS.md`, `app/.lovable/`). **Do not rewrite published git history** — no force-push, rebase, amend, or squash of already-pushed commits; it corrupts Lovable's project history. Commits pushed to the connected branch sync into the Lovable editor, so keep the branch in a working (buildable) state.

## Subagents in this repo

`.claude/agents/` defines two project subagents:
- **`researcher`** (read-only + web) for open questions and tracing behavior across the repo.
- **`reviewer`** (read-only, git inspection via Bash) for reviewing a drafted change against this file's rules before commit or merge. It reads `CLAUDE.md` first by design.

## Supply-chain guard

`app/bunfig.toml` sets `minimumReleaseAge = 86400` — Bun refuses package versions published less than 24h ago. Only `@lovable.dev/*` packages are excluded. Confirm with the user before adding any exclusion.
