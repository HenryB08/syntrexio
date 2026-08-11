# SOP: Agent Workforce Install

> Track D, Operations. The flagship.
> Source of truth: SYNTREX_FOUNDATION.md v3.0, Sections 6, 7.3, 9, 17.

**Pricing: $35,000 to $95,000 install, then $5,000 to $12,000 per month to operate.**

We install a company's internal agent workforce: agents handling the operational work a company currently pays salaries for. Research, drafting, coordination, data entry, monitoring, scheduling, reporting, and first-pass analysis. Running continuously, with an approval trail and human control.

**This is not a chatbot. It is an operating layer inside the business.**

**Guaranteed metric for this service: task volume completed per period.** Not headcount reduced, not cost saved, not revenue. We control how many tasks the fleet completes.

**Priced against labor displaced, not against agencies.** A single mid-market operational salary is $50,000 to $120,000 a year. Never discount this line to look reasonable next to a website.

---

## Trigger

- A signed Agent Workforce install
- An existing client reaches the end of the expansion sequence: Diagnostic, Visibility, Conversion, Operations, then Agent Workforce
- A QBR identifies operational labor as the binding constraint on the business

**Never the first engagement.** This install requires a depth of encoding that only exists after months of delivery. Selling it cold to a new client is how it fails.

---

## Prerequisites

- [ ] **Client encoding signed off and mature: all ten blocks, including an established preference log**
- [ ] At least one quarter of delivery history with this client
- [ ] Work inventory complete: every candidate task, with volume and current time cost
- [ ] Before state measured per task, not estimated
- [ ] Task volume target agreed in writing, which is the guarantee
- [ ] Every system the fleet will touch identified, with access confirmed
- [ ] **Approval routing agreed per task type: what ships on approval, what ships on notification, what never ships without a human**
- [ ] Human owner named on the client side for every workstream
- [ ] Failure and escalation policy agreed
- [ ] Data handling, retention, and isolation agreed in writing
- [ ] Compliance constraints confirmed for every workstream
- [ ] Milestone and payment schedule agreed

**Hard gates, both absolute:**
1. **Encoding maturity.** A fleet running against a thin encoding produces volume of the wrong thing, continuously, which is worse than producing nothing.
2. **Approval routing agreed per task type before install.** An agent workforce without an explicit approval boundary is an unaccountable one.

---

## Steps

### 1. Inventory the work (human)
Sit with the client and list the operational work. For each: what it is, who does it, how often, how long, what it depends on, what judgment it requires, and what happens when it goes wrong.

**Human-owned and slow on purpose.** This is the install. Everything after it is execution.

### 2. Classify by judgment (human)
Three buckets:

| Bucket | Definition | Disposition |
|---|---|---|
| Deterministic | Rules, no judgment | Agent completes, human notified |
| Judgment-assisted | Agent does the work, a human decides | Agent drafts, human approves before it leaves the building |
| Human | Judgment is the work | Stays human. Agent may assemble context |

**Human-owned.** Misclassifying a judgment task as deterministic is the failure mode that ends this engagement, and it is not recoverable by adding review later.

### 3. Measure the before state (fleet, human verifies)
Time and volume per task, measured or logged. This is the evidence base for everything reported afterwards.

### 4. Design the fleet (fleet proposes, human approves)
One agent per workstream, in isolated environments, running concurrently. For each: scope, inputs, outputs, systems touched, approval routing, failure behavior, escalation, and the human owner.

**Never one agent doing everything.** Isolation per workstream is what makes a failure contained and an approval trail legible.

### 5. Design the approval trail (human)
Every action logged: what ran, on what input, what it produced, who approved, when. **The client must be able to answer "why did this happen" for any output, months later.** This is what distinguishes an operating layer from an unaccountable process, and it is the thing that survives their compliance review.

### 6. Build workstream by workstream (fleet)
One at a time, each to done, each proven before the next starts. **Never install eight workstreams simultaneously.** A partial failure across eight is unrecoverable; across one it is a Tuesday.

Each workstream follows `workflow-automation.md` for its build, testing, failure design, and instrumentation.

### 7. Instrument (fleet)
Tasks attempted, completed, approved, rejected, and escalated. Time per task. Rejection reasons, categorized. **Task volume completed is the guaranteed metric, so it is instrumented from the first workstream.**

Rejection rate is the health metric that matters most: it should fall month over month. If it does not, the encoding is not compounding and the model is not working for this client.

### 8. Parallel run per workstream (human supervises)
Each workstream runs alongside the human process for one full cycle. Outputs compared. **Never cut over a workstream on tests alone.**

### 9. Cut over per workstream (human decides)
One at a time. Rollback documented. The person whose work it was knows what changed and what to do when it breaks.

### 10. Train the client's humans (human)
The people approving fleet output need to know what they are approving, what to look for, and how to reject in a way that teaches the system. **A rejection with a reason is training data. A rejection without one is rework.**

This is the most commonly skipped step and it is why installs fail after month three.

### 11. Establish the review loop (fleet flags, human reviews)
Weekly at first, then monthly: rejection rate by workstream, escalation patterns, failures, tasks completed against target, and anything the fleet is consistently getting wrong.

Every rejection feeds encoding block 10. **Month six should need fewer corrections than month one. If it does not, the loop is not running.**

### 12. Operate (fleet, always-on)
Under the operating retainer. Always-on infrastructure, monitoring, alerting, scheduled reporting, and continuous encoding refinement.

### 13. Expand (human, at the QBR)
New workstreams from the same inventory, or new work the client did not think to list because they assumed it could not be handled. The second category grows every quarter.

---

## Fleet versus human

| Step | Fleet | Human |
|---|---|---|
| 1. Inventory | Records | **Human runs it. This is the install** |
| 2. Classify by judgment | Proposes | **Human decides. Misclassification is unrecoverable** |
| 3. Measure before | Yes | **Human verifies method** |
| 4. Design the fleet | Proposes | **Human approves** |
| 5. Approval trail | Builds | **Human designs.** Accountability is the product |
| 6. Build | Yes | Human approves each workstream as done |
| 7. Instrument | Yes | |
| 8. Parallel run | Runs both | **Human supervises and compares** |
| 9. Cut over | Executes | **Human decides, per workstream** |
| 10. Train client humans | Prepares | **Human delivers.** Most-skipped, most-consequential |
| 11. Review loop | Flags and categorizes | **Human reviews and decides what becomes a rule** |
| 12. Operate | Yes, always-on | Reviews alerts and approvals |
| 13. Expand | Proposes candidates | **Human, at the QBR** |

**Human judgment is Layer 4 and it is permanent.** Strategy, taste, escalation, and accountability stay human at any scale. On this service that is not a caveat, it is the reason the client can buy it at all: an operating layer nobody is accountable for is exactly what they already tried and abandoned.

---

## Definition of done

**Per workstream:**
- [ ] Classified by judgment and the classification approved by a human
- [ ] Before state measured with the method recorded
- [ ] Built, isolated, instrumented, with failure behavior defined
- [ ] Approval routing implemented as designed
- [ ] Approval trail complete and queryable
- [ ] Full test suite passed
- [ ] Parallel run completed with matching outputs
- [ ] Cut over with a tested rollback
- [ ] Client's human owner trained on approving and rejecting it

**Per install:**
- [ ] Every agreed workstream live
- [ ] Task volume instrumented against the agreed target
- [ ] Rejection tracking live, with reasons categorized
- [ ] Review loop running and feeding encoding block 10
- [ ] Approval trail demonstrably answers "why did this happen" for any past output
- [ ] Client humans trained
- [ ] Monitoring, alerting, and scheduled reporting live
- [ ] Milestones approved and payments released
- [ ] Operating retainer active

**For the guarantee:** the agreed task volume is being completed per period. If not, work continues at no additional cost until it is.

---

## QA checklist

**Classification**
- [ ] Every task classified, and every deterministic classification defended against a real edge case
- [ ] No judgment task classified as deterministic
- [ ] Anything touching money, legal exposure, a customer commitment, or a person's employment is judgment-assisted or human. **Never deterministic**
- [ ] Client agreed the classification in writing

**Accountability**
- [ ] Every action logged: input, output, approver, timestamp
- [ ] "Why did this happen" answerable for any output from any past period
- [ ] No client-facing output ships without the approval its routing requires
- [ ] Approval routing matches the written agreement, tested per task type
- [ ] Rejections captured with reasons and fed to encoding block 10

**Isolation**
- [ ] Each workstream in its own environment
- [ ] **No client's context, data, or encoding reachable from another's. Tested, not assumed**
- [ ] A failure in one workstream cannot affect another
- [ ] Credentials scoped to the minimum each workstream needs

**Correctness**
- [ ] Output matches human output across the full parallel run, per workstream
- [ ] Every exception found in step 1 handled or routed
- [ ] Idempotent where a repeat is possible, verified by running twice
- [ ] No duplicate real-world action
- [ ] Encoding compliance on every output: voice, never-use list, pricing, prohibitions, no em dashes, no fabricated statistics

**Failure**
- [ ] Every workstream has defined failure behavior
- [ ] Failures alert a named human, verified by causing one
- [ ] **Nothing fails silently**
- [ ] Rollback documented and tested per workstream
- [ ] Escalation reaches a real human, verified

**Measurement**
- [ ] Task volume counted against a definition agreed in writing
- [ ] Before state measured, not estimated
- [ ] Rejection rate tracked and trending. **Falling month over month, or the encoding is not compounding**
- [ ] Hours returned reported only where measured, with the method stated

**Client readiness**
- [ ] Every approver trained
- [ ] Approvers know how to reject usefully
- [ ] Client can see what the fleet is doing without asking us
- [ ] Client knows what to do when something breaks

---

## Encoding hierarchy

**Automated:** the fleet itself, instrumentation, approval trail capture, rejection categorization, monitoring, alerting, reporting.
**Template-driven:** the workstream design pattern, the approval trail schema, the parallel-run comparison, the per-workstream install runbook.
**Checklist:** the QA block above, plus the per-workstream steps in `workflow-automation.md`.
**Still human:** work inventory, judgment classification, fleet design approval, approval trail design, parallel run supervision, cut-over decisions, training the client's approvers, and the review loop.

**Next to move:** work inventory partially templatizes by business type as installs accumulate. The Foundation's own signal applies here: when the same install has been delivered several times with the same process, that is the product.

**What never moves:** step 2 and step 5. Judgment classification and the approval trail are the two things that make an agent workforce accountable rather than merely fast, and accountability is what the client is actually buying.

---

## The condition this service rests on

The entire model rests on the fleet reliably delivering roughly 80% of guaranteed outcomes with systematized human oversight, across three to five concurrent clients, sustained over six months.

**Prove that before scaling this service past five clients.** If it holds, the pricing and the guarantee both work. If it does not, margins collapse to a normal agency and the guarantee becomes a liability. This SOP's rejection-rate metric is the earliest available read on whether it is holding.
