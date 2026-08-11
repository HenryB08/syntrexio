# SOP: AI Search Optimization (GEO)

> Track A, Visibility. Being cited by ChatGPT, Gemini, Perplexity, and AI Overviews.
> Source of truth: SYNTREX_FOUNDATION.md, Sections 6, 9, 14.

Visibility is the entry point on the expansion sequence because GEO has the strongest growth, the strongest pricing power, and the lowest tooling cost. Never lead with a website.

**Guaranteed metric for this service: citation presence for agreed target queries.** Not traffic, not rankings, not revenue.

---

## Trigger

- A Visibility or Full Stack retainer starts
- An AI Systems Diagnostic identifies an AI search visibility gap and the engagement follows
- A quarterly review adds or replaces target queries
- A material change to the client's offering, service area, or pricing invalidates existing answer content

---

## Prerequisites

- [ ] Client encoding signed off (`client-encoding.md`), blocks 1, 4, 5, 6, 8
- [ ] Google Search Console access, owner or full user
- [ ] Google Analytics 4 access
- [ ] CMS admin access, or a documented publishing path
- [ ] Google Business Profile manager access, if the client is local or multi-location
- [ ] Target query set agreed **in writing** with the client, with a count and a dated list
- [ ] Citation baseline measured across every engine in scope, and locked
- [ ] Measurement source of truth agreed and both sides have access

**Hard gate: no work starts before the target query list is agreed and the citation baseline is locked.** The guarantee is measured against that list and that number. Starting first and defining the metric later is how a guarantee becomes unfalsifiable.

---

## Steps

### 1. Agree the target query set (human)
20 to 40 queries. The right ones are the questions a buyer actually types into an assistant when they are close to buying, phrased the way the customer phrases it rather than the way the business does. Encoding block 5 has that gap recorded.

Each query gets: the exact string, the buying intent behind it, and the competitor most likely to be cited today. Dated, signed, stored in the hub. **This list is the guarantee. Treat it that way.**

### 2. Measure and lock the baseline (fleet, human verifies)
For every query, on every engine in scope, record: cited or not, position in the answer, what was cited instead, and the answer text itself. Store the raw responses, not just the verdict, because engines change and a summary judgment cannot be re-audited.

Human verifies a sample by hand before the baseline is locked.

### 3. Audit retrievability (fleet)
Whether the client's content can be found and used by a retrieval system at all:
- Crawlability and indexation of every page that should answer a target query
- Whether answers exist as extractable, self-contained statements or are buried in narrative
- Structured data present, valid, and matching the visible content
- Entity consistency: name, address, phone, services, and description identical across the site, Business Profile, and every significant directory
- Existing citation sources: who is being cited for these queries today and why
- Page-level factors that block extraction: content behind interaction, critical text rendered in images, thin or duplicated pages

### 4. Map the gaps (fleet, human ranks)
For each uncited query, the specific reason: no content exists, content exists but does not answer directly, content answers but is not retrievable, entity data conflicts, or a competitor holds a stronger source.

**A human ranks the gaps.** Effort against likelihood of citation is a judgment call and the fleet consistently over-ranks the ones that are easy to fix.

### 5. Fix the entity layer (fleet, human approves publication)
Before writing anything. Contradictory entity data suppresses citation regardless of content quality, and it is cheap to fix.
- Reconcile name, address, phone, hours, services, and description everywhere they appear
- Organization, LocalBusiness, Service, and Person schema as applicable, valid and matching visible content
- Google Business Profile complete and accurate
- Author and expertise signals where the topic warrants them

### 6. Produce answer-shaped content (fleet, human reviews)
One piece per uncited query cluster. The shape that gets cited:
- Answers the question in the first two sentences, completely, before any context
- Uses the customer's phrasing in the heading and the opening
- Contains specific, checkable facts: numbers, names, ranges, conditions
- Self-contained, so an extracted paragraph still makes sense with nothing around it
- Structured with headings that map to sub-questions
- Marked up with matching structured data
- Written in the client's voice per encoding block 2

**Every piece runs through `content-production.md` for the production and QA steps.** This SOP defines what to write. That one defines how it gets written and checked.

### 7. Publish and submit (fleet)
Publish, submit for indexing, verify indexation, confirm structured data validates in production rather than in a testing tool.

### 8. Monitor (fleet, always-on)
Re-run the full query set against every engine on the agreed cadence, at minimum monthly and weekly during an active guarantee window. Record cited or not, position, competing citation, and answer text. Alert on any loss of an existing citation, which matters more than a gain and is easy to miss.

### 9. Iterate (fleet proposes, human decides)
For each query still uncited after a full cycle, diagnose why and change one thing. The fleet proposes; a human decides, because "write more" is the fleet's default answer and it is frequently the wrong one.

### 10. Report (fleet)
Feed the Receipt: citation presence by engine against baseline, queries gained, queries lost, content shipped. See `reporting-setup.md`.

---

## Fleet versus human

| Step | Fleet | Human |
|---|---|---|
| 1. Agree query set | Drafts candidates | **Human agrees with the client.** It is the guarantee |
| 2. Baseline | Runs and records | **Human verifies a sample** before locking |
| 3. Retrievability audit | Yes | |
| 4. Map gaps | Produces the map | **Human ranks** |
| 5. Entity layer | Executes | **Human approves** anything published under the client's name |
| 6. Answer content | Produces | **Human reviews every piece** before publication |
| 7. Publish and submit | Yes | |
| 8. Monitor | Yes, always-on | Reviews alerts |
| 9. Iterate | Proposes | **Human decides** |
| 10. Report | Yes | **Human reviews the Receipt** before it is issued |

---

## Definition of done

**For a cycle:**
- [ ] Query set agreed in writing, dated, in the hub
- [ ] Baseline locked, with raw engine responses stored
- [ ] Retrievability audit complete, findings written up
- [ ] Entity data reconciled everywhere it appears
- [ ] Structured data valid in production for every target page
- [ ] Answer content live and indexed for every prioritized gap
- [ ] Monitoring running on the agreed cadence, with loss alerts live
- [ ] Citation presence measured against baseline and in the Receipt

**For the guarantee:** citation presence for the agreed target queries has reached the agreed target within the window. If not, work continues at no additional cost until it does.

---

## QA checklist

**Measurement integrity**
- [ ] Every query in the tracked set matches the agreed list exactly, character for character
- [ ] No query was added or removed mid-window without a written agreement
- [ ] Baseline is the locked figure, not a recomputed one
- [ ] Raw engine responses stored for the current period, so any number can be re-audited
- [ ] Citation counted only where the client is actually cited, not merely mentioned

**Content**
- [ ] Every piece answers its query in the first two sentences
- [ ] Every extractable paragraph stands alone
- [ ] Every factual claim is checkable, and sourced where it is not the client's own
- [ ] No fabricated statistics
- [ ] No client counts and no unapproved client names
- [ ] No em dashes
- [ ] Voice matches encoding block 2, checked against the never-use list
- [ ] No claim exceeds what the client can actually deliver, per encoding block 4

**Technical**
- [ ] Every target page indexed, verified in Search Console rather than assumed
- [ ] Structured data valid and matching the visible content, tested against the live URL
- [ ] Entity data identical across site, Business Profile, and major directories
- [ ] No canonical, robots, or noindex directive blocking a target page
- [ ] Internal links from existing authority to new pages

**Reporting**
- [ ] Citation figures in the Receipt reconcile to the stored raw responses
- [ ] Losses reported as prominently as gains
- [ ] Nothing reported as a Syntrex result that we do not control

---

## Encoding hierarchy

**Automated:** baseline measurement, retrievability auditing, monitoring, loss alerting, reporting.
**Template-driven:** answer content shapes, structured data blocks, entity reconciliation.
**Checklist:** the QA block above.
**Still human:** agreeing the query set, ranking gaps, reviewing published content, deciding iteration.

**Next to move:** gap ranking, once enough cycles exist to learn which gap types actually convert to citations. Content review moves last, and partially, since publication under a client's name is a human accountability point rather than a throughput bottleneck.
