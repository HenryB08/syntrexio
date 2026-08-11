# SOP: Website Build

> Track C, Presence. Websites and web applications.
> Source of truth: SYNTREX_FOUNDATION.md, Sections 6, 7.3, 9.

**Guaranteed metric for this service: delivery against agreed spec and timeline.** Not traffic, not conversion rate. We control what we build and when we ship it.

**Pricing:** up to 5 pages, $4,500. 6 to 12 pages, $7,500. E-commerce, $11,000. Builds take 40% deposit with the balance on milestones.

**Never lead with a website.** Visibility is the entry point on the expansion sequence. A website build is sold when the client needs one, not as the opening move.

---

## Trigger

- A signed build engagement
- A Presence retainer where the existing site is the binding constraint
- An existing site blocks a Visibility guarantee for retrievability reasons that page-level fixes cannot resolve

---

## Prerequisites

- [ ] Client encoding signed off, blocks 2, 3, 4, 7
- [ ] Brand assets received in usable formats, vector logo included
- [ ] Written spec agreed: page list, functionality, integrations, and what is explicitly out
- [ ] Milestone schedule and payment schedule agreed, with dates
- [ ] Domain, DNS, and hosting access confirmed working
- [ ] Content source confirmed: migrated, rewritten, or newly produced, and who owns each
- [ ] Existing site inventoried: every URL, its traffic, and its rankings
- [ ] Analytics and Search Console access, so the before state is measurable
- [ ] Approver named, with an approval SLA

**Hard gate: the page list and the out-of-scope list are agreed in writing before the first build day.** Scope on a build is the guarantee, and an unwritten page list is how a $7,500 build becomes an $11,000 build that nobody gets paid for.

---

## Steps

### 1. Lock the spec (human)
Page list with a purpose for each. Functionality per page. Integrations. Explicitly out of scope. Milestones with dates and the payment released against each. Signed.

### 2. Inventory and plan redirects (fleet)
Every existing URL, with its traffic and rankings. Map each to its destination or mark it as intentionally retired. **This is the single most common way a rebuild destroys a client's visibility,** and it is entirely preventable. The map is built now, not at launch.

### 3. Architect (fleet, human approves)
URL structure, navigation, template inventory, content model. Human approves, because information architecture is a strategic decision about how the business explains itself.

### 4. Design (fleet, human approves)
Against encoding block 3. Existing design tokens and components where a system already exists. **Do not invent a second design system inside an existing one.** Human approves the direction before any page is built out.

### 5. Build (fleet)
Templates first, then pages. Responsive from the start rather than as a pass at the end. Accessible markup. Real content, not placeholder, from the first build of each template.

### 6. Content (fleet, human reviews)
Migrated content is checked, not trusted. Rewritten or new content runs through `content-production.md`, including its QA checklist. Every price is verified against encoding block 4 rather than copied from the old site.

### 7. Technical foundation (fleet)
- Structured data per page type, valid and matching visible content
- Titles, descriptions, canonicals, Open Graph
- Sitemap and robots
- Analytics and Search Console, with goals and events configured before launch
- Performance: images compressed and sized, render-blocking resources handled, fonts loaded without layout shift
- Forms wired to the real endpoint and tested end to end, with a confirmed delivery to the real inbox
- Security headers, HTTPS everywhere, no mixed content

### 8. Milestone review (human)
At each agreed milestone: demonstrate against the spec, secure approval, release the payment. Never demonstrate against a vibe and never let a milestone pass unreviewed because it looks fine.

### 9. Pre-launch QA (fleet runs, human signs off)
Full checklist below. Every item passes before a launch date is confirmed.

### 10. Launch (human owns, fleet executes)
Redirects live at cutover, not after. DNS changes made with a known rollback and a known TTL. **Verify from a clean session on a real device, not from a cached admin view.**

### 11. Post-launch watch (fleet, always-on)
Monitor for 14 days: index coverage, 404s, redirect chains, Core Web Vitals, form submissions actually arriving, error rates. **Alert on any traffic drop against the pre-launch baseline.** A rebuild that quietly loses a third of a client's organic traffic is a delivered spec and a failed engagement.

### 12. Handover (human)
Access, documentation, a recorded walkthrough, and a written statement of what the client owns. They own the site and their data. We own the underlying system, templates, encodings, and tooling.

---

## Fleet versus human

| Step | Fleet | Human |
|---|---|---|
| 1. Spec | Drafts | **Human agrees and signs.** It is the guarantee |
| 2. Inventory and redirects | Yes | Human spot-checks the highest-traffic URLs |
| 3. Architecture | Proposes | **Human approves** |
| 4. Design | Produces | **Human approves direction** |
| 5. Build | Yes | |
| 6. Content | Produces | **Human reviews.** See `content-production.md` |
| 7. Technical foundation | Yes | |
| 8. Milestone review | Prepares the demo | **Human runs it.** Payment is released against it |
| 9. Pre-launch QA | Runs the checklist | **Human signs off** |
| 10. Launch | Executes | **Human owns the go decision and the rollback call** |
| 11. Post-launch watch | Yes, always-on | Reviews alerts |
| 12. Handover | Prepares | **Human delivers** |

---

## Definition of done

- [ ] Every page on the agreed list is live and complete
- [ ] Nothing outside the agreed list was built without a written scope change
- [ ] Every milestone approved and every milestone payment released
- [ ] Redirect map complete and live, with no unintentional 404 from an inventoried URL
- [ ] Pre-launch QA fully passed and signed off
- [ ] Launched on the agreed date, or with the client told in advance of the change
- [ ] 14 day watch complete with no unresolved regression
- [ ] Access handed over, walkthrough recorded, ownership stated in writing
- [ ] Delivered against the agreed spec and timeline, which is the guarantee

---

## QA checklist

**Content and copy**
- [ ] Every price matches encoding block 4
- [ ] No unpublished price is visible anywhere
- [ ] No em dashes
- [ ] No fabricated statistics
- [ ] No client counts, no headcount, no unapproved client names
- [ ] Never-use list checked
- [ ] Legal, privacy, and terms pages present and current
- [ ] Contact details correct and matching entity data everywhere

**Function**
- [ ] Every form submits and the submission arrives in the real destination, verified by receiving one
- [ ] Every link resolves, internal and external
- [ ] Every integration works against production credentials
- [ ] Search, filtering, booking, and cart flows tested end to end where present
- [ ] Error states and empty states designed and working
- [ ] 404 page exists and is useful

**Technical**
- [ ] Every inventoried URL redirects or is intentionally retired, with no chains
- [ ] Sitemap accurate and submitted
- [ ] Robots correct, with no accidental site-wide disallow
- [ ] No accidental noindex on any page that should rank
- [ ] Canonicals correct and self-referential where appropriate
- [ ] Structured data valid on the live URL and matching visible content
- [ ] Analytics firing, goals configured, verified with a real session
- [ ] Search Console verified for the new property
- [ ] HTTPS everywhere, no mixed content, security headers present

**Performance and accessibility**
- [ ] Core Web Vitals within threshold on the highest-traffic templates, measured on the live site
- [ ] Images compressed, correctly sized, and lazy-loaded below the fold
- [ ] No layout shift on font load
- [ ] Keyboard navigable throughout
- [ ] Focus states visible
- [ ] Color contrast passes on text and interactive elements
- [ ] Alt text on every meaningful image
- [ ] Headings structured, one H1 per page

**Cross-surface**
- [ ] Tested on real mobile hardware, not just a resized browser
- [ ] Tested on current Safari, Chrome, and Firefox
- [ ] No horizontal scroll at any width
- [ ] Renders correctly in both light and dark preference where the design supports both

**Launch readiness**
- [ ] Rollback path documented and tested
- [ ] DNS TTL lowered ahead of the change
- [ ] Backup of the previous site retained
- [ ] Client told the launch window in advance

---

## Encoding hierarchy

**Automated:** URL inventory, redirect mapping, build, technical foundation, QA checklist execution, post-launch monitoring.
**Template-driven:** page templates, component library, structured data blocks, the launch runbook.
**Checklist:** the QA block above, run by the fleet and signed by a human.
**Still human:** spec agreement, architecture and design approval, milestone demonstrations, launch go decision, handover.

**Next to move:** milestone demonstration preparation is already automated; the demonstration itself stays human because payment is released against it. **The launch go decision does not move.** Someone accountable decides to point a client's domain at new infrastructure, and that someone has a name.
