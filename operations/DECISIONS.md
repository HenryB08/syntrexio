# Decisions

Judgment calls made while building `operations/`, and the gaps in the Foundation they surfaced.

Branch: `henrybello/operating-docs`. Source of truth throughout: `SYNTREX_FOUNDATION.md` v3.0.

---

## 1. The Foundation is not on this branch

**Situation.** The brief names `SYNTREX_FOUNDATION.md` at the repo root. It is not there and it is not on `main`. It exists only on `henrybello/audit-fleet`, added in commit `e29ed9d`.

**Decision.** Read it from that commit and treat it as canonical. Did not copy it into this branch.

**Why.** A canonical document that exists in two places will diverge, and the version-control section of the Foundation itself requires amendment rather than duplication. It will be at the root once `audit-fleet` merges.

**Action for Henry.** Merge `henrybello/audit-fleet` so the Foundation reaches `main`. Until then, every reference to `SYNTREX_FOUNDATION.md` in `operations/` points at a file this branch does not contain.

---

## 2. Karlo Financial is in the brief's approved-proof list but not in the Foundation

**Situation.** The brief permits four named proof points: HALT Fire, Doughbrik's Wavers, Karlo Financial, and Kinetix. The Foundation's PROOF section names only three: HALT Fire, Doughbrik's Wavers, and Kinetix. Karlo Financial does not appear anywhere in the Foundation. Separately, the Foundation names SupplyCaddy in Section 19 as a Stage 1 target, which is a prospect rather than proof.

**Decision.** Used only the three the Foundation names. Karlo Financial appears nowhere in `operations/`.

**Why.** The Foundation wins on contradiction, and it carries no facts about Karlo Financial: no engagement type, no result, no relationship description. Naming a client with nothing behind the name is the exact failure the Foundation warns against under "testimonials that do not survive a phone call."

**Gap for the Foundation.** If Karlo Financial is approved proof, the PROOF section should carry them with the same one-line description the other three have. If they are not, the brief's list should drop to three.

---

## 3. The HALT Fire example in the Receipt template contains illustrative line items

**Situation.** The brief asks for a filled-in HALT Fire example so the Receipt format is obvious. The Foundation publishes exactly two HALT Fire figures: 280% search growth and 10+ hours per week returned. A one-line Receipt does not demonstrate a format.

**Decision.** Built the example around the two published figures and used them as the guaranteed metric and the hours-returned total. The remaining line items, the work shipped table, and the citation counts are illustrative, and the example is explicitly labelled as such directly above it.

**Why.** Refusing to produce the example would have failed the brief. Producing it without a label would have created quotable numbers. The label is the compromise, and it is placed where nobody can copy the table without also copying the label.

**Action for Henry.** Before this template is used with a real prospect, replace the example wholesale with a real Receipt, or delete the example section. It is a formatting aid, not a case study.

---

## 4. The website carries dead positioning, and the referral page does not

**Situation.** The Foundation v3.0 supersedes the SYN Growth and SYN Workspace positioning that `app/src`, the root HTML, and `worker/worker.js` all still carry, along with the old $497/$349/$549 pricing and the free Leak Audit as the front door. `CLAUDE.md`'s canonical facts section also predates the Foundation and disagrees with it.

**Decision.** Wrote the new `/referral` page entirely to Foundation language: the AI Systems Diagnostic at $3,500, retainers from $1,800 to $12,500, builds from $3,500 to $95,000, and no reference to SYN Growth or SYN Workspace. Changed nothing else on the site.

**Why.** The brief requires Foundation alignment. Migrating the rest of the site is a separate and much larger piece of work that was not in scope, and doing half of it would have left the site in a worse state than either endpoint.

**Consequence to be aware of.** `/referral` is now the only page on the site quoting Foundation pricing. A visitor moving from `/pricing` to `/referral` sees two different price lists. This is a known inconsistency introduced deliberately, not an oversight.

**Action for Henry.** The site-wide migration to Foundation v3.0 is the next piece of work, and it needs to cover `app/src`, the root `*.html` files, `app/public/*.html`, and the `SYSTEM_PROMPT` in `worker/worker.js` and its roughly 20 embedded copies. `CLAUDE.md`'s canonical facts section needs updating in the same pass.

---

## 5. Referral form reuses the existing Formspree endpoint

**Situation.** The brief asks for a submission form matching the contact form's existing behavior. There is one Formspree endpoint for the whole site.

**Decision.** The referral form calls the same `submitForm()` with `form: "referral"`, matching how `/contact` and `/leak-audit` already discriminate their submissions.

**Why.** It is the existing convention and it required no new integration. Submissions are distinguishable by the `form` field.

**Note.** Field names are prefixed `referrer_` and `referred_` so the two parties are never confused in the inbox, which matters more here than on any other form on the site.

---

## 6. The referral page is registered in the app sitemap only, not the root one

**Situation.** Two sitemaps exist: `app/public/sitemap.xml` for the React app and `sitemap.xml` at the repo root for the current live site, whose URLs are `.html` files.

**Decision.** Added `/referral/` to `app/public/sitemap.xml` only.

**Why.** The page exists only in the React app. Listing it in the live site's sitemap would advertise a URL that returns 404 until cutover.

**Action for Henry.** If the referral page is needed before cutover, it has to be built as a root-level `referral.html` as well. Pre-cutover, `app/` builds but does not deploy.

---

## 7. Lint was already failing repo-wide, so only the new file was formatted

**Situation.** `bun run lint` fails on `main` with 606 pre-existing prettier errors, largely because `seo-data.ts` uses quoted JSON-style keys throughout and prettier wants them unquoted.

**Decision.** Ran prettier on the new `referral.tsx` only, so it contributes zero new errors. Left `seo-data.ts` in its existing quoted-key style, matching every other entry in the file.

**Why.** Reformatting `seo-data.ts` would have produced a 700-line diff unrelated to this work and would have obscured the actual change. The new `/referral` SEO block matches its neighbours exactly.

**Action for Henry.** A repo-wide `bun run format` is worth doing as its own commit, so that lint becomes a usable signal again.

---

## 8. Bun was not installed in this environment

**Situation.** No Bun binary and no `node_modules` in the worktree, so nothing could be verified.

**Decision.** Installed Bun and ran `bun install --frozen-lockfile`, then built and smoke-checked.

**Why.** `CLAUDE.md` requires a full-site smoke check before declaring web work complete, and that is not possible without a build. Nothing about the repo changed: `bun.lock` is unmodified and `node_modules` is untracked.

---

## Gaps and ambiguities in the Foundation

Raised because these documents needed answers the Foundation does not give. None of them blocked the work; each was resolved with a stated assumption.

### A. The guarantee window is "typically 90 days" and never fixed

Section 9 says the window is "typically 90 days." Section 13 puts the QBR at the same 90 day mark, and Section 19 implies longer engagements. Nothing says whether the window restarts each quarter, runs once at the start, or runs continuously.

**Assumed:** one window per engagement, restarting at each QBR with a new metric, baseline, and window agreed. Encoded in the QBR template Section 6 and the 30/60/90.

**Needs deciding:** whether a client on a 12 month retainer has one guarantee or four sequential ones. It changes the labor exposure materially, and it is the kind of thing a client will ask in month four.

### B. What "we keep working until it is hit" bounds

Section 9 says the remedy is labor with no cash exposure. It does not say what happens if the metric is unreachable for reasons that emerge after signing: the client's market collapses, they stop approving work, or the baseline turns out to have been mismeasured.

**Assumed:** the remedy stands, and the metric can be renegotiated only by written agreement with a fresh baseline. Encoded in the kickoff summary Section 4 and the proposal templates.

**Needs deciding:** whether client non-performance, specifically failure to approve work inside the agreed SLA, pauses the window. Without that, a client can block delivery and then claim the guarantee. Section 5 of the Foundation names the 80% reliability condition as the thing that must stay true, and an unbounded remedy is the most direct threat to it.

### C. No stated standard for what a Receipt does when the client is new mid-month

Section 8 requires a monthly Receipt. Nothing covers the first partial month.

**Assumed:** the first Receipt covers signing date to month end, with the period stated explicitly. Encoded in the Receipt header.

### D. Referral fee basis on a mixed build-plus-retainer engagement

Section 15 says 10% of "their first project or first three months of retainer." It does not say which applies when a referred client signs both.

**Assumed:** both, calculated separately. Stated in `referral-program.md`.

**Needs deciding:** this is the most common shape of a real engagement, so it will come up on the first meaningful referral. Getting it wrong in either direction damages the channel the Foundation calls the primary one.

### E. Diagnostic credit versus referral fee

The diagnostic is credited to the client against the engagement. The referrer's fee is calculated on engagement value.

**Assumed:** the client's credit does not reduce the referrer's fee. Stated in `referral-program.md`.

### F. No churn or exit procedure exists

Section 13 sets churn targets and Section 14 sets retention targets. Nothing describes what happens when a client actually leaves: what is handed over, in what form, how fast, and what we keep.

**Assumed:** a clean exit, everything the client owns handed over promptly and in usable form, per Section 17. Encoded as step 7 of the recovery play in `account-health-scorecard.md`.

**Missing entirely:** an offboarding SOP. In a referral-driven business a bad exit is expensive out of proportion to the account, and this is the most significant gap the work surfaced. Worth writing.

### G. The Foundation names four tracks and sixteen services, but the SOP set covers eight workflows

The brief asked for eight delivery SOPs plus client encoding. Eight of the sixteen services now have one. The uncovered ones: traditional SEO, social media systems, lead capture and follow-up, email systems and deliverability, e-commerce builds, brand identity and design systems, imagery and campaign assets, and custom internal AI tools.

**Not a contradiction, just incomplete coverage.** Several are close enough to an existing SOP to run against it: traditional SEO against `ai-search-optimization.md`, e-commerce against `website-build.md`, lead capture against `crm-buildout.md`. Brand identity, imagery, and social media systems have no natural home and would each need their own.

### H. No stated target for what proportion of tasks the fleet should handle

Section 5 names the condition the whole model rests on: roughly 80% of guaranteed outcomes delivered by the fleet with systematized human oversight. Every SOP's fleet-versus-human table is an implicit claim about where that line sits for a given workflow, but nothing in the Foundation says how to measure whether 80% is actually being met.

**Assumed:** rejection rate per workstream, trending down month over month, is the usable proxy. Encoded as the health metric in `agent-workforce-install.md` step 7.

**Needs deciding:** whether that proxy is the one Henry wants tracked. Section 5 calls this "the only benchmark that matters in year one," and it currently has no instrument.
