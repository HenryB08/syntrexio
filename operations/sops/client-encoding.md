# SOP: Client Encoding

> **Layer 1 of the delivery architecture. Everything else depends on this.**
> Source of truth: SYNTREX_FOUNDATION.md, Section 4.

Every client is encoded once: brand voice, visual system, products, pricing, policies, competitors, goals, constraints. Persistent, stored in shared memory. **Every output passes through it.**

This SOP is the definition of "encoded." If it is done badly, every other SOP in this directory produces work that needs correcting, forever. If it is done well, the system gets faster at this client every month and month six needs fewer corrections than month one. There is no other document in `operations/sops/` with this much leverage.

---

## Trigger

- A new client signs and intake completes. Run within 24 hours of intake sign-off
- A client's brand, pricing, product line, or positioning changes materially
- A QBR surfaces something that contradicts what is encoded (`operations/qbr-template.md`, Section 4)
- Any output is rejected for a reason that is not a one-off. A recurring correction means the encoding is wrong, not the output

**Not a trigger:** a single piece of work coming back with edits. Fix the work, log the correction as preference data, and see whether it recurs.

---

## Prerequisites

Do not start until all of these exist. Encoding against a half-complete intake produces an encoding that has to be redone, and the second version never fully displaces the first in practice.

- [ ] Intake checklist complete and signed off (`operations/onboarding/intake-checklist.md`), specifically sections B, C, and E
- [ ] Brand assets received in usable formats, vector logo included
- [ ] Product and pricing list complete, including anything unpublished
- [ ] Section C3 answered, especially the **never-use list**
- [ ] Section C4 answered: named competitors with what each does better
- [ ] Section C5 answered: policies, compliance constraints, and what an assistant must never promise
- [ ] Section E answered: contacts, approval routing, escalation
- [ ] Section F answered in full, particularly the guaranteed metric, its baseline, and its measurement source
- [ ] Kickoff summary issued and confirmed by the client
- [ ] An isolated workspace exists for this client

---

## What gets captured

Ten blocks. Every one is populated before sign-off, even when the answer is "none" or "unknown," because a block that is silently empty reads downstream as "no constraint" rather than "not yet asked."

### 1. Identity

| Field | Notes |
|---|---|
| Legal entity name and trading name | Both, because they differ more often than people expect |
| What the business does, in one sentence | Their sentence, not ours |
| Founded, ownership, structure | |
| Locations and service areas | The areas they actually serve, not the ones they would like to |
| Team size and who does what | Recorded for our understanding. Never published on their behalf |
| Industry, and any sub-vertical that changes the language | |
| Regulatory or licensing context | The thing that makes a claim illegal rather than merely unwise |

### 2. Brand voice

| Field | Notes |
|---|---|
| Three adjectives they want | |
| Three adjectives they never want | More useful than the first three |
| Reading level and sentence rhythm | Sampled from writing they approved, not asserted |
| Person and tense | First person plural, second person, and so on. Fixed, not per-piece |
| Always-use phrases | |
| **Never-use phrases** | The single highest-value field in the entire encoding |
| Humor, and how much | |
| Formality, and where it shifts | Sales page versus support reply versus invoice |
| Approved writing samples | Three or more pieces they were happy with |
| Rejected writing samples, with the reason | Worth more than the approved ones |
| Syntrex copy rules that always apply | No em dashes, no fabricated statistics, no client counts, no claim that cannot survive a phone call |

### 3. Visual system

| Field | Notes |
|---|---|
| Logo files, vector primary | With usage rules: clear space, minimum size, what is prohibited |
| Color values | Hex, RGB, CMYK, Pantone where relevant, with a named role for each |
| Typefaces with licenses | The license, not just the name |
| Photography direction, and what is licensed | |
| Iconography and illustration style | |
| Layout and spacing conventions | |
| Visual prohibitions | The color they hate, the stock look they are done with, the competitor aesthetic to avoid |

### 4. Products, services, and pricing

| Field | Notes |
|---|---|
| Complete offering list | |
| Price for each, published and unpublished | Flag which is which. An assistant quoting an unpublished price is a real incident |
| What each includes and excludes | |
| Highest-margin offering | |
| Offering they most want to sell | Frequently not the same one |
| What they will not sell or take on | |
| Lead times, capacity limits, minimums | |
| Seasonality | |
| Pricing change history and cadence | So nothing quotes a stale number |

### 5. Customers

| Field | Notes |
|---|---|
| Best customer, described as an actual account | Not a persona document |
| Who signs, who influences | |
| Where customers come from today, in rough percentages | |
| Customer value and repeat rate | |
| Most common reason a deal is lost | |
| Most common objection, and their answer to it | Their answer, in their words |
| The language customers actually use | Often different from the language the business uses, and this gap is where most Visibility work lives |

### 6. Competitors

| Field | Notes |
|---|---|
| Three to five named competitors | |
| What each genuinely does better | Encode this honestly. An encoding that says every competitor is worse produces marketing that nobody believes |
| What this client does better | |
| Who they are taking share from | |
| Marketing they admire, in or out of industry | |
| How competitors may and may not be referenced | Usually: never by name |

### 7. Policies and constraints

| Field | Notes |
|---|---|
| Hours and response commitments | |
| Return, refund, warranty, cancellation policy | |
| Their standard terms to their own customers | |
| Claims they legally may not make | |
| Compliance and regulatory limits on language | |
| **What a customer-facing assistant must never say or promise** | Populated before any assistant goes live, without exception |
| **What must escalate to a human immediately, and to whom** | |
| Data handling requirements on their side | |

### 8. Goals and measurement

| Field | Notes |
|---|---|
| Guaranteed metric | One |
| Baseline, value and date | Locked. Never revised |
| Target and window | |
| Measurement source of truth | The named system, with access confirmed |
| Reported metrics and their baselines | |
| Their own definition of success, in numbers | |
| What would make them cancel | Intake question 11. Encode the answer |

### 9. Operating context

| Field | Notes |
|---|---|
| Systems in use and what each is for | |
| Where the source of truth lives for each data type | |
| Integration points and their constraints | |
| Approval routing: who approves what | |
| Approval SLA agreed at kickoff | |
| Escalation path with names | |
| Absences and dependencies that stall approvals | |
| Anything currently automated, and by whom | |

### 10. Preference log

Not captured at encoding time. It accumulates, and it is the part that compounds.

Every approval, rejection, and edit is stored here as structured preference data:

| Field | Notes |
|---|---|
| Date | |
| What was produced | |
| What was changed, exactly | The diff, not a summary of the diff |
| Why, in the client's words | |
| Generalizable? | Does this become a rule, or was it specific to the piece |
| Rule added to the encoding | If generalizable, which block it went into |

**This log is why the model works.** Human labor does not compound. This does. A correction that gets fixed in the output and not written here is a correction we will make again, and the client will notice the second time.

---

## Steps

### 1. Assemble (fleet)
Pull everything from the intake checklist, the hub, the diagnostic, the proposal, and the kickoff summary into a single working set. Include their live site, their existing content, their current assistant if any, and their public reviews.

### 2. Extract (fleet)
Populate blocks 1 through 9 from the assembled material. Every field gets a value or the explicit token `NOT PROVIDED`. Never leave a field blank and never infer a constraint that was not stated.

### 3. Flag the gaps (fleet)
Produce a list of every `NOT PROVIDED` field, ranked by what it blocks. A missing never-use list blocks all content. A missing Pantone value blocks nothing this week.

### 4. Close the gaps (human)
Take the ranked list to the client in one message or one short call. Not a drip of questions over a week. Anything still unknown after that is recorded as `UNKNOWN, ASSUMED: {{assumption}}` so the assumption is visible rather than buried.

### 5. Derive the voice profile (fleet, then human)
From the approved and rejected samples, derive concrete rules: sentence length, vocabulary, structural habits, how they open, how they close, what they never do. The fleet drafts it. **A human reviews it,** because a voice profile derived from three samples is a hypothesis and it is the hypothesis every future output inherits.

### 6. Encode the prohibitions (human)
The never-use list, the compliance limits, what an assistant must never promise, and how competitors may be referenced. **Human-owned, always.** These are the fields where an error is not a quality problem but a liability, and they are the fields a fleet is least able to infer.

### 7. Write to shared memory (fleet)
Persist the encoding into the client's isolated workspace in the agreed structure, versioned.

### 8. Verify isolation (human)
Confirm this encoding is reachable only from this client's workspace, and that no other client's context is reachable from it. **No client's context, data, or encoding ever touches another's.** Test it rather than assume it.

### 9. Validate against real output (fleet, human reviews)
Generate three test outputs across different surfaces: a piece of body copy, a customer-facing assistant reply, and a short piece of marketing copy. Check each against the never-use list, the compliance constraints, the pricing block, and the voice profile. If any fails, fix the encoding, not the output.

### 10. Sign off (human)
A named human signs the encoding. Date it. **No client-facing output is produced before this signature.**

### 11. Register the maintenance triggers (fleet)
Set the review points: at each QBR, on any pricing or product change, and whenever a correction recurs.

---

## Fleet versus human

| Step | Fleet | Human |
|---|---|---|
| 1. Assemble | Yes | |
| 2. Extract | Yes | |
| 3. Flag gaps | Yes | |
| 4. Close gaps with the client | | **Human.** Client contact |
| 5. Derive voice profile | Drafts | **Human approves.** Everything inherits it |
| 6. Encode prohibitions | | **Human owns.** Liability, not quality |
| 7. Write to memory | Yes | |
| 8. Verify isolation | Runs the check | **Human confirms.** Non-negotiable invariant |
| 9. Validate output | Generates | **Human judges** |
| 10. Sign off | | **Human.** Named, dated |
| 11. Register triggers | Yes | |
| Preference log, ongoing | Records | **Human decides** what generalizes into a rule |

**Permanently human:** anything where being wrong is a liability rather than a defect. Prohibitions, compliance, claims, isolation, and the sign-off itself. Strategy, taste, escalation, and accountability stay human permanently. That is not a limitation of the current system, it is the product.

---

## Definition of done

- [ ] All ten blocks exist. Every field has a value, `NOT PROVIDED`, or `UNKNOWN, ASSUMED: {{x}}`
- [ ] The never-use list is populated and non-empty
- [ ] Compliance and claim constraints are populated
- [ ] What an assistant must never say or promise is populated, and the escalation path is named
- [ ] Guaranteed metric, baseline with its date, target, window, and measurement source are all present
- [ ] Voice profile derived from real samples and human-approved
- [ ] Prohibitions human-encoded
- [ ] Written to the client's isolated workspace, versioned
- [ ] Isolation verified by test, not assumption
- [ ] Three validation outputs generated and passed
- [ ] Signed off by a named human, with a date
- [ ] Maintenance triggers registered
- [ ] Preference log initialized and pointed at

---

## QA checklist

Run before sign-off. Every item is pass or fail. There is no partial pass.

**Completeness**
- [ ] No silently blank field anywhere in blocks 1 through 9
- [ ] Every assumption is written as an assumption, not as a fact
- [ ] Prices match the client's actual current prices, verified against a source they provided, not against their website

**Correctness**
- [ ] Voice profile reproduces something recognizably theirs when tested on a piece they have already approved
- [ ] Competitor block is honest about what competitors do better
- [ ] Nothing in the encoding is a fabricated statistic
- [ ] No client count, headcount, or revenue claim is present anywhere
- [ ] Nothing claims a result that could not survive a phone call

**Safety**
- [ ] Never-use list is loaded into every generation path, not stored and unused
- [ ] Unpublished prices are flagged as unpublished and blocked from customer-facing surfaces
- [ ] Assistant prohibitions are enforced at the assistant layer, not just recorded here
- [ ] Escalation path has real names and real contact details
- [ ] Isolation test passed: no cross-client reachability in either direction

**Operational**
- [ ] The encoding is versioned and the current version is identifiable
- [ ] A named human is on the sign-off
- [ ] Maintenance triggers are live
- [ ] The path to the encoding is recorded on the account record so no downstream SOP has to look for it

---

## Encoding hierarchy

Training becomes documentation, documentation becomes checklists, checklists become templates, templates become automation. Push every lesson as far toward automation as it will go.

**Where this SOP currently sits:** steps 1, 2, 3, 7, and 11 are automated. Steps 5 and 9 are fleet-drafted and human-judged. Steps 4, 6, 8, and 10 are human and are expected to stay human.

**What moves next:** step 5 becomes template-driven once ten voice profiles have been derived and the derivation rules stabilize. Step 9 becomes an automated validation suite once the never-use and compliance checks can be expressed as tests rather than as a reading.

**What never moves:** step 6 and step 10. A prohibition list approved by nobody, and an encoding signed by nobody, are the two failure modes that end an engagement rather than delay one.

---

## Downstream

Every other SOP in this directory reads the encoding and none of them may run before it is signed off:

| SOP | What it depends on |
|---|---|
| `ai-search-optimization.md` | Blocks 1, 4, 5, 6, 8 |
| `content-production.md` | Blocks 2, 4, 5, 6, 7 |
| `website-build.md` | Blocks 2, 3, 4, 7 |
| `ai-assistant-deployment.md` | Blocks 2, 4, 7, 9. **Block 7 is a hard gate** |
| `crm-buildout.md` | Blocks 4, 5, 9 |
| `workflow-automation.md` | Blocks 7, 9 |
| `reporting-setup.md` | Block 8 |
| `agent-workforce-install.md` | All ten |
