# SOP: Reporting Setup

> Track D, Operations. Reporting, analytics, and dashboards.
> Source of truth: SYNTREX_FOUNDATION.md v3.0, Sections 4, 8, 9.

This SOP produces the machinery behind the Receipt. It is run once per client, early, and everything else depends on it.

**It is run before or alongside the day 7 deliverable, never after.** A number that starts being measured in month two has no baseline, and a metric without a baseline cannot carry a guarantee.

Layer 3 of the delivery architecture: reports generate on schedule whether or not anyone is at a laptop. Reporting that depends on someone remembering is not reporting.

---

## Trigger

- Any retainer starts. Run within the first 48 hours, alongside baseline capture
- A new guaranteed metric is agreed at a QBR
- A new track is added, bringing metrics that are not yet instrumented
- A client disputes a number, which means the source of truth was never genuinely agreed

---

## Prerequisites

- [ ] Client encoding signed off, block 8
- [ ] Guaranteed metric named, with its target and window
- [ ] Reported metrics agreed, from the kickoff summary
- [ ] **Source of truth agreed in writing for every metric, and client access to each confirmed**
- [ ] Access to every data source, tested
- [ ] Receipt delivery day agreed
- [ ] Definitions agreed for every metric, in words, before anything is built

**Hard gate: the source of truth for the guaranteed metric is agreed and accessible to the client before the baseline is taken.** We do not self-report the number that judges us. A client who cannot independently check the guaranteed metric does not have a guarantee, they have a claim.

---

## Steps

### 1. Define every metric in words (human)
Before touching a tool. For each: what it counts, what it excludes, the time basis, the deduplication rule, and the system it comes from.

**Human-owned.** "Leads" means four different things in most businesses and the disagreement surfaces in month five, in a meeting, in front of the number.

### 2. Agree the source of truth (human)
One named system per metric. Where two systems disagree, the named one wins and the other is not quoted. Confirm the client can access it themselves.

### 3. Capture and lock the baseline (fleet, human verifies)
Every metric, with evidence: exports, screenshots, or raw responses, stored in the hub. **The baseline is recorded once and never revised.** A human verifies a sample before it locks.

### 4. Instrument the gaps (fleet)
Anything not currently measured. Analytics events, goals, call tracking, form tracking, automation counters, citation monitoring. **Verify each with a real interaction rather than a test payload,** because a goal that fires in preview and not in production is the standard failure here.

### 5. Build collection (fleet)
Automated pulls from every source on a schedule. Stored, not just displayed, so a past period can be re-derived rather than re-queried against a system that has since changed.

### 6. Build the dashboard (fleet, human approves)
For the client, live, with the guaranteed metric against its baseline and target at the top. Reported metrics below. Definitions visible on the page, not in a separate document nobody opens.

### 7. Build Receipt generation (fleet)
Assembles the Receipt from stored data on the agreed day: guaranteed metric against baseline, work shipped by track, hours returned with method, and the reported metrics. See `operations/receipt-template.md`.

**Generated on schedule, unattended.** Late Receipts are signal 3 on the account health scorecard and they are a delivery failure on our side.

### 8. Build the guarantee tracker (fleet)
Position against target, days remaining, and required rate. **Alerts when the metric falls behind the pace needed with more than 30 days left,** so a miss is caught while it is still recoverable rather than reported when the window closes.

### 9. Build alerting (fleet)
Any metric dropping materially, any collection failure, and any source going silent. **A dashboard reading zero because a connector broke is worse than no dashboard,** because it produces a panicked client call about a problem that does not exist, or worse, a calm client while a real one goes unnoticed.

### 10. Validate end to end (human)
Generate a full Receipt from real data. Check every number against its source by hand. Every number in a Receipt has to reconcile, because the Receipt is the evidence base for the guarantee.

### 11. Hand over (human)
Client gets dashboard access, the definitions, and a recorded walkthrough. They are told they can check the guaranteed metric themselves, and shown how.

### 12. Maintain (fleet, human at the QBR)
Collection health monitored continuously. At each QBR, confirm the metrics still measure what matters and that definitions have not silently drifted.

---

## Fleet versus human

| Step | Fleet | Human |
|---|---|---|
| 1. Define metrics | Drafts | **Human agrees with the client** |
| 2. Source of truth | | **Human agrees in writing** |
| 3. Baseline | Captures | **Human verifies before it locks** |
| 4. Instrument | Yes | |
| 5. Collection | Yes | |
| 6. Dashboard | Builds | **Human approves** |
| 7. Receipt generation | Yes, unattended | **Human reviews every Receipt before it is issued** |
| 8. Guarantee tracker | Yes | Acts on alerts |
| 9. Alerting | Yes | |
| 10. Validate | Produces the Receipt | **Human checks every number against source** |
| 11. Hand over | Prepares | **Human delivers** |
| 12. Maintain | Monitors | **Human reviews at the QBR** |

**Receipts generate automatically and are reviewed by a human before issue.** Nothing client-facing ships without human review, and a Receipt is the most consequential client-facing document we produce, because it is immutable once sent.

---

## Definition of done

- [ ] Every metric defined in words and agreed
- [ ] Source of truth named per metric, in writing, and accessible to the client
- [ ] Baseline captured with evidence, verified, and locked
- [ ] Every gap instrumented and verified with a real interaction
- [ ] Automated collection running, with data stored rather than only displayed
- [ ] Client dashboard live, guaranteed metric at the top, definitions visible
- [ ] Receipt generation automated on the agreed day
- [ ] Guarantee tracker live with pace alerting
- [ ] Collection-failure alerting live
- [ ] Full Receipt validated by hand against source
- [ ] Client has access, definitions, and a recorded walkthrough
- [ ] QBR review point registered

---

## QA checklist

**Accuracy**
- [ ] Every number in the dashboard reconciles to its named source, checked by hand
- [ ] Every number in a generated Receipt reconciles to stored data
- [ ] Deduplication working. **A contact who submits a form and also calls is one lead, not two**
- [ ] Time zones consistent across every source
- [ ] Period boundaries consistent. A month is the same month everywhere
- [ ] Baseline in every report is the locked figure, never recomputed

**Definitions**
- [ ] Every metric has a written definition visible to the client
- [ ] Definitions in the dashboard, the Receipt, and the kickoff summary are identical
- [ ] No metric silently changed definition. **A definition change applies forward only and past Receipts keep the old one**

**Coverage**
- [ ] Guaranteed metric instrumented, verified, and independently checkable by the client
- [ ] Every reported metric from the kickoff summary is present
- [ ] Hours returned instrumented for every automation, per `workflow-automation.md`
- [ ] Work shipped countable by track without anyone assembling it by hand

**Reliability**
- [ ] Collection runs unattended on schedule
- [ ] Collection failure alerts, verified by causing one
- [ ] A zero is distinguishable from a missing value, in both the dashboard and the Receipt
- [ ] Historical data stored, so a past period can be re-derived
- [ ] Receipt generates without human intervention, and only issue is human-gated

**Honesty**
- [ ] Nothing reported as a Syntrex result that Syntrex does not control
- [ ] Revenue, closed deals, and conversion rate appear only as the client's own figures, attributed
- [ ] Losses and flat metrics presented as prominently as gains
- [ ] No metric selected because it looks good rather than because it matters
- [ ] No fabricated or estimated figure anywhere

---

## Encoding hierarchy

**Automated:** collection, storage, dashboard rendering, Receipt assembly, guarantee tracking, alerting.
**Template-driven:** the metric set by track, the dashboard layout, the Receipt structure, the definitions block.
**Checklist:** the QA block above.
**Still human:** defining metrics, agreeing the source of truth, verifying the baseline, validating end to end, reviewing each Receipt before issue, and the QBR review.

**Next to move:** end-to-end validation becomes an automated reconciliation once sources stabilize, with a human confirming the reconciliation rather than recomputing it.

**What never moves:** Receipt review before issue. A Receipt is immutable once sent, so the review is the last point at which a wrong number is cheap to fix. After that it costs a superseding document and an explanation.
