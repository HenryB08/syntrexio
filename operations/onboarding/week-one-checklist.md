# Week One Checklist

> **Internal. Never sent to the client.**
> Source of truth: SYNTREX_FOUNDATION.md v3.0, Section 13. "Within 7 days: something real and working shipped. Not a plan. Not a discovery deck."

---

## The standard

By day 7 the client has a working thing they can use, look at, or point at. Not a roadmap. Not a strategy document. Not a mockup. Not a "here is what we found." Something that runs.

This is the promise that separates the engagement from the one that burned them. It is also the cheapest retention insurance available, because a client who has seen something work in week one does not spend month two wondering whether they made a mistake.

**If day 7 is going to slip, the client hears it before it slips, not after.** A date moved with notice costs credibility once. A date missed in silence costs it permanently.

---

## Picking the day 7 deliverable

Pick it before the proposal goes out, not after signing. It goes in the proposal, the kickoff summary, and the 30/60/90.

**It must be:**
- Working. Live, running, usable, or published. Not staged behind a login nobody has
- Real. It does an actual job for the business, not a demonstration of a job
- Ours to ship. Its dependencies are inside the smallest possible set of intake items
- Visible to the economic buyer without a walkthrough. If it needs explaining to be impressive, pick something else

**It must not be:**
- A strategy document, audit, roadmap, competitive analysis, or content calendar
- A design mockup or wireframe
- A "phase one plan"
- Anything blocked on a client approval that has not already been secured

### Known-good day 7 deliverables by track

| Track | Ships in 7 days |
|---|---|
| Visibility | The answer-shaped content set live and indexed for the top target queries, with citation tracking already reporting. Or the Google Business Profile and entity data corrected across the properties that feed AI answers |
| Conversion | The AI assistant live on the site, encoded, answering real questions, with escalation to a human working and a transcript log the client can read. Or missed-inquiry follow-up firing automatically |
| Presence | The highest-traffic page rebuilt and live, measurably faster, on the new system. Not the whole site. The one page that matters, actually deployed |
| Operations | One real workflow automated end to end, running on its own, with hours-returned instrumented from day one. Or the reporting dashboard live and pulling real data |
| Agent Workforce | One agent from the fleet installed and doing a real recurring task with a visible approval trail |

**Default rule:** ship the narrowest complete thing rather than the widest incomplete thing. One page live beats six pages staged. One workflow running beats four workflows half-built.

---
---

# Week One Checklist
## {{CLIENT_NAME}}

| | |
|---|---|
| **Signed** | {{SIGN_DATE}} |
| **Day 7 date** | {{WEEK_ONE_DATE}} |
| **Day 7 deliverable** | {{WEEK_ONE_DELIVERABLE}} |
| **Definition of done for it** | {{WEEK_ONE_DEFINITION_OF_DONE}} |
| **Blocking intake items** | {{BLOCKING_INTAKE_ITEMS}} |
| **Guaranteed metric** | {{GUARANTEED_METRIC}} |

---

## Day 0: the day it is signed

All of this happens within 24 hours of signature. Not the next business day. Within 24 hours.

- [ ] Countersigned agreement returned to the client
- [ ] Access hub created, structured, and shared: {{HUB_LINK}}
- [ ] Credential vault set up inside the hub, with instructions
- [ ] **Kickoff summary sent** (`kickoff-summary-template.md`), with scope, success metrics in numbers, in and out of scope, change handling, response times, and named contact
- [ ] **Intake checklist sent** (`intake-checklist.md`), pruned to only what this engagement needs, BLOCKING items marked
- [ ] **30/60/90 drafted and sent** (`30-60-90-template.md`), with client-owned lines already filled in as proposals, not blanks
- [ ] **Walkthrough recorded** and linked in the hub: 5 to 8 minutes, how the hub works, where to put credentials, what we need first, what happens by day 7. Recorded, so nobody has to attend a meeting to receive information
- [ ] Client owner and economic buyer both added to the hub and confirmed they can log in
- [ ] Internal account record created: dates, metric, baseline placeholder, day 7 deliverable, blocking items
- [ ] Calendar holds placed for the day 7 check, the monthly review call, and the QBR
- [ ] Human owner assigned for every line of the day 7 build

**Nothing on this list waits for intake.** All of it is ours to do.

---

## Day 1 to 2: intake and baseline

- [ ] Intake chase at hour 24, naming the specific open items. Not "checking in"
- [ ] Screen share offered to complete intake live, which takes about 20 minutes
- [ ] Every credential received tested and confirmed working. A credential that does not authenticate is worse than a missing one, because it looks done
- [ ] **Baseline measured for {{GUARANTEED_METRIC}}: {{BASELINE_VALUE}}**
- [ ] Baseline evidence captured: export, screenshot, or query log, stored in the hub. This is the evidence base for every future Receipt and for the guarantee itself
- [ ] Baseline confirmed in writing with the client, and the lock date stated
- [ ] Starting state captured for every reported metric in the kickoff summary
- [ ] Measurement source of truth confirmed and client access to it verified
- [ ] Blocking items for the day 7 deliverable confirmed unblocked, and the client told so in writing
- [ ] If any blocking item is still open at hour 48: call the client, then escalate to the economic buyer at hour 72

**Once the baseline is locked, it is never revised.** Take the extra hour to get it right.

---

## Day 2 to 3: encoding

Run `operations/sops/client-encoding.md` in full. Summary of what must exist at the end of it:

- [ ] Brand voice encoded, including the never-use list
- [ ] Visual system encoded: logo files, colors, type, usage rules
- [ ] Products, services, and pricing encoded, including anything unpublished
- [ ] Policies and constraints encoded, including compliance limits and what an assistant must never promise
- [ ] Competitors encoded, with what each does better
- [ ] Goals, the guaranteed metric, and the baseline encoded
- [ ] Named contacts, approval routing, and escalation path encoded
- [ ] Client isolation verified: this encoding is reachable only from this client's workspace
- [ ] Encoding validated by generating three sample outputs and checking them against the never-use list and the compliance constraints
- [ ] Encoding reviewed by a human and signed off

**No client-facing output is produced before the encoding is signed off.** Output produced against an unfinished encoding is where brand-voice corrections come from, and every correction spends trust in week one, which is the worst week to spend it.

---

## Day 3 to 6: build and review

- [ ] Day 7 deliverable built by the fleet against the encoding
- [ ] Built against the definition of done stated above, not against a vibe
- [ ] Relevant delivery SOP followed in full: `operations/sops/{{SOP_FILE}}`
- [ ] That SOP's QA checklist completed and evidence attached
- [ ] **Human review completed.** Nothing client-facing ships without it, at any scale
- [ ] Copy checked against the copy rules: no em dashes, no fabricated statistics, no client counts, no claims that cannot survive a phone call
- [ ] Checked against the client's never-use list
- [ ] Checked against their compliance constraints
- [ ] Functional test on the actual production surface, not staging
- [ ] Mobile checked, if it is anything visual
- [ ] Measurement or instrumentation confirmed working, so the deliverable is countable in Receipt 1
- [ ] Rollback path known and written down, if the deliverable touches a live system
- [ ] Client approval secured if it publishes under their name

---

## Day 7: ship

- [ ] **{{WEEK_ONE_DELIVERABLE}} is live**
- [ ] Verified live by a human, from a clean session, not from a cached admin view
- [ ] Client notified with a direct link and one paragraph: what it is, what it does, what to look at
- [ ] Short recording attached if the thing needs any orientation at all
- [ ] Evidence captured for Receipt 1: before, after, and how it is measured
- [ ] Hours returned instrumented, if the deliverable is an automation
- [ ] Logged in the account record as shipped, with the date
- [ ] 30/60/90 updated with the line marked complete

**The message to the client says what it does, not how hard it was.** Effort is not a deliverable.

---

## Day 7: internal close-out

- [ ] Intake completion time recorded. Under 48 hours, under 5 days, or over 10. It is the earliest churn predictor we have, and it feeds the account health scorecard
- [ ] Anything that slowed us down written into the account record, specifically enough to act on
- [ ] Anything the fleet handled cleanly noted for the SOP, so the next client is faster
- [ ] Anything that required human judgment noted for the SOP, so we know what cannot yet be pushed down the encoding hierarchy
- [ ] Any correction the client asked for captured as structured preference data against their encoding. Month six should need fewer corrections than month one, and that only happens if month one's corrections are captured rather than fixed and forgotten
- [ ] Day 30 plan confirmed still achievable, or revised and reissued with the change logged

---

## Failure modes

The five ways week one actually goes wrong, and what to do instead.

| Failure | What it looks like | The fix |
|---|---|---|
| Discovery creep | Day 7 arrives with a beautiful audit and nothing running | The deliverable is chosen before signing and it is not a document. Nothing on the day 7 list is a deliverable if it cannot be used |
| Intake block | We are waiting on a password on day 5 | Blocking items are the smallest possible set, marked as blocking, chased at 24 hours, escalated at 72 |
| Scope inflation | The deliverable grows because it would be better with one more thing | Ship the narrow complete version. The wider version is a day 30 line |
| Silent slip | Day 7 passes and nobody mentions it | The client is told before the date moves, with a new date and a reason |
| Unencoded output | Work ships before the encoding is signed off and comes back with voice corrections | Encoding sign-off gates all client-facing output. It is not a formality |
