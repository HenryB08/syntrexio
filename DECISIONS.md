# Decisions log — content-overhaul (branch: claude/syntrexio-content-overhaul-medh38)

Reasonable calls made where the brief was ambiguous, so work could continue without stopping.

## Scope / guardrails
- **Branch:** brief named `content-overhaul-v3`; per follow-up instruction, work stays on the pre-created `claude/syntrexio-content-overhaul-medh38`. Same content, different branch name.
- **app/public guardrail:** per follow-up instruction, the "do not touch app/public" guardrail applies only to the legacy `.html` files there. `sitemap.xml`, `robots.txt`, and `llms.txt` live in `app/public/` and ARE in scope for Phase 5. No `.html` file in `app/public/` is edited.
- **Phase 1 approval gate:** skipped per instruction. Audit still produced (`AUDIT.md`) and committed for the record.

## Positioning / proof
- **Named proof restricted to three:** brief says only HALT Fire, Doughbrik's Wavers, and Kinetix. `Karlo Financial` is therefore REMOVED everywhere (marquee, Work page, customers schema, llms.txt). Kinetix kept and treated as a partner. Company name normalized to "Kinetix" (was "Kinetix Technology Group").
- **David Dobrik:** kept as one-line founder context for Doughbrik's Wavers (already approved on the current site), not used as a standalone client claim.
- **Doughbrik's "3x faster workflows":** already published on the current site (llms.txt) and reused as a pre-approved figure on the Work page. HALT Fire figures (280% search growth, 10+ hours/week) are the brief-verified proof.
- **Team page:** brief says keep the existing team-page structure and only update copy referencing the old model. The five existing team cards are kept as-is; surrounding narrative rewritten to the new delivery model (human-directed AI agent fleet). No new team members invented; no employee-count claims added.

## Work page
- **Client quotes pending:** the brief asks for a client quote on each case study if one exists in the repo. None exists. The Work page (`/customers`) therefore shows a clearly marked "Quote (pending)" placeholder card on each case study (HALT Fire, Doughbrik's Wavers), ready to fill once quotes are approved. Flagging here per the brief.

## Information architecture
- **Nav:** Home, Services, Pricing, Diagnostic, Work, About, Contact.
  - "Customers" route (`/customers`) is relabeled "Work" in nav and rebuilt as case studies. URL preserved.
  - "News" replaced by "Diagnostic" in primary nav. `/news` route kept alive (URL preserved), content rewritten on-brand, linked from the footer.
- **Diagnostic:** new route `/diagnostic` (added to `vite.config.ts` pages). It is the free, rules-based self-qualifying tool (lead magnet). This is distinct from the paid **AI Systems Diagnostic ($3,500)** engagement front door described on Pricing.
- **`/leak-audit`:** old "missed calls" front door, now off-message. Route preserved (indexed URL) but converted to a redirect page (canonical + meta-refresh + client redirect) pointing to `/diagnostic`. No missed-call content remains.

## Tooling
- **Lint baseline already failing:** on the pristine branch, `bun run lint` reports ~595 `prettier/prettier` formatting errors in files untouched by this work (e.g. `terms.tsx`, `index.tsx`) — the repo was not prettier-clean before the overhaul. Approach: run `prettier --write` on each file this work touches so all changed files are clean, and leave untouched files as-is to avoid large unrelated formatting churn. `bun run build` passes throughout.

## Go-live follow-up (worker prompt + cutover)
- **Worker SYSTEM_PROMPT rewritten** to the new positioning (four tracks, 16 services, Agent Workforce flagship, published pricing verbatim, $3,500 credited diagnostic, control-based guarantee). Chat logic, model, max_tokens, routing, and API handling untouched. The old "byte-identical to the site's embedded SYSTEM_PROMPT" invariant is now moot: the TanStack app embeds no system prompt, so the Worker is the sole owner. The Worker deploys separately to Cloudflare (wrangler), NOT via the Pages workflow, so this change goes live only when the Worker is redeployed.
- **Cutover is two manual UI steps** that cannot be done from code (require repo admin): (1) Settings > Pages > Source = "GitHub Actions"; (2) set repo variable `PAGES_DEPLOY_ENABLED = true`. The deploy workflow already builds `app/` and ships `dist/client` with the CNAME; it stays gated until both are set.
- **Legacy redirects generated in the workflow, not in source.** A new build step writes redirect stubs (canonical + meta-refresh + JS) into the built artifact, overwriting the copied legacy `.html`. This keeps `app/public/` frozen (guardrail intact) while the deployed site 301-equivalents every indexed legacy URL to its React route.
- **Two legacy pages had no clean equivalent** (`legal.html`, `syn.html`). Flagged for the owner, who chose the targets: `legal.html` -> `/terms/` and `syn.html` -> `/services/`. Both are now redirected in the workflow step alongside the rest.

## Out of scope (flagged, not changed)
- **Cloudflare Worker (`worker/worker.js`) SYSTEM_PROMPT:** still encodes the old SYN positioning and old pricing. The brief scopes this task to `app/src` content and says to leave the chat widget functionality alone, so the worker is NOT edited here. The live SYN chat will describe the old model until the worker prompt is updated in a separate pass. Flagged for follow-up.
- **Contact form / chat widget / Formspree + Worker endpoints:** unchanged (working functionality).
