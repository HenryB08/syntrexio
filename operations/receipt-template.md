# The Receipt

> The monthly proof document. One page. What the system did and what it was worth.
> Source of truth: SYNTREX_FOUNDATION.md, Section 8.

---

## HOW TO USE THIS (internal, delete before sending)

**Why the Receipt exists.** The top three reasons clients leave are lack of proactive strategic guidance, poor communication, and inability to demonstrate value. Price ranks sixth. The Receipt attacks the top three automatically, every month, without anyone having to remember to. It is not a report. A report describes activity. A receipt states what was bought and what it was worth.

**One page.** If it runs to two pages it has become a report and it has stopped working. Cut the narrative before you cut the numbers.

**Goes out with a 30 minute call.** Agencies doing both renew better than those sending reports alone. Never send the Receipt and skip the call, and never hold the call without having sent the Receipt first.

**Delivered by the {{RECEIPT_DAY}} of the following month.** Same day every month. Predictability is part of the product.

**Numbers or nothing.** Every line has a number or it does not appear. "Improved site performance" is not a Receipt line. "Largest Contentful Paint 3.9s to 1.4s on the four highest-traffic pages" is.

**Say it plainly when the guarantee was missed.** Section 2 has a yes or a no in it. Never a paragraph that avoids saying which. A Receipt that hides a miss destroys the only thing the Receipt is for.

**Record every guarantee-window pause in Section 1.** When a client misses an agreed condition, approval turnaround, access, information we cannot get ourselves, or a reachable named contact, the window pauses. The `Window pauses` line states each pause with the date it began, the date it ended, and the condition that triggered it, for example "3 days, 4 to 7 August, waiting on ad account access." When there were none, the line reads "None this window." A pause is a dated fact, never a judgment of the client, and it is the only place the paused days are accounted for, so it is never left blank.

---

## IMMUTABILITY

**A Receipt is immutable once issued.** A later change in assumptions never alters a past Receipt.

This is a hard rule, not a preference. The Receipt is the evidence base for the guarantee. If past Receipts can be edited, the guarantee is unfalsifiable, and an unfalsifiable guarantee is worth nothing. This rule protects the client from us, which is exactly why it is worth having.

### What immutability means in practice

**Once issued, a Receipt file is never edited.** Not for a typo, not for a corrected number, not for a metric definition that changed later. It is read-only from the moment it is sent.

**Storage.** Every Receipt lives at a fixed, permanent path:

```
clients/{{CLIENT_SLUG}}/receipts/{{YYYY-MM}}-receipt-r{{REVISION}}.md
```

Example: `clients/halt-fire/receipts/2026-07-receipt-r1.md`

**To correct a Receipt, supersede it. Never edit it.**

1. The original file stays exactly as issued. It is never touched.
2. A new file is created at the next revision number: `2026-07-receipt-r2.md`.
3. The new Receipt carries a **Supersedes** header naming the file it replaces and stating, in one sentence, what changed and why.
4. The superseded Receipt gets one line appended to a separate index, never to the file itself: the supersession is recorded in `clients/{{CLIENT_SLUG}}/receipts/INDEX.md`.
5. The client is told. A superseded Receipt is always sent to the client with the reason, even when the correction is in our favor. Especially then.

**The index.** `clients/{{CLIENT_SLUG}}/receipts/INDEX.md` is the only mutable file in the directory, and the only thing it does is list which revision of each month is current.

| Period | Current revision | Superseded revisions | Reason for latest supersession |
|---|---|---|---|
| 2026-07 | r2 | r1 | Citation count corrected from 14 to 12: two citations were from a query that had been removed from the agreed target set |
| 2026-08 | r1 | none | |

**When a metric definition changes,** it changes going forward only. Past Receipts keep the old definition and say so in their own Definitions block. Never restate history under a new definition, in either direction.

**Never supersede to make a number look better in hindsight.** Legitimate reasons to supersede: a measurement error, a data source that was wrong, a number attributed to the wrong period, or a factual error about work shipped. That is the whole list.

---
---

# THE RECEIPT
## {{CLIENT_NAME}} · {{MONTH_YEAR}}

| | |
|---|---|
| **Period** | {{PERIOD_START}} to {{PERIOD_END}} |
| **Issued** | {{ISSUE_DATE}} |
| **Receipt ID** | {{CLIENT_SLUG}}-{{YYYY-MM}}-r{{REVISION}} |
| **Engagement** | {{ENGAGEMENT_NAME}}, {{TRACKS_IN_SCOPE}} |
| **Investment this period** | {{MONTHLY_AMOUNT}} |
| **Supersedes** | {{SUPERSEDES_ID_OR_NONE}} |

{{#IF_SUPERSEDING}}
> **This Receipt supersedes {{SUPERSEDES_ID}}.** {{SUPERSESSION_REASON}}
{{/IF_SUPERSEDING}}

---

## 1. The guaranteed metric

| | |
|---|---|
| **Metric** | {{GUARANTEED_METRIC}} |
| **Baseline** | {{BASELINE_VALUE}}, measured {{BASELINE_DATE}} |
| **Target** | {{TARGET_VALUE}} by {{MEASUREMENT_END_DATE}} |
| **This period** | **{{CURRENT_VALUE}}** |
| **Change from baseline** | {{CHANGE_FROM_BASELINE}} |
| **Change from last period** | {{CHANGE_FROM_LAST_PERIOD}} |
| **Source** | {{MEASUREMENT_SOURCE}}, pulled {{MEASUREMENT_PULL_DATE}} |
| **Window** | Day {{DAYS_ELAPSED}} of {{WINDOW_DAYS}}, excluding paused days |
| **Window pauses** | {{WINDOW_PAUSES}} |

**Trend**

| Period | Value |
|---|---|
| Baseline, {{BASELINE_DATE}} | {{BASELINE_VALUE}} |
| {{PRIOR_PERIOD_2}} | {{PRIOR_VALUE_2}} |
| {{PRIOR_PERIOD_1}} | {{PRIOR_VALUE_1}} |
| **{{MONTH_YEAR}}** | **{{CURRENT_VALUE}}** |

---

## 2. Was the guarantee met?

> ## {{GUARANTEE_STATUS}}

**{{GUARANTEE_STATEMENT}}**

*Use exactly one of these four, verbatim, then one sentence of plain explanation:*

- **MET.** *The metric reached target on {{DATE_MET}} and the guarantee for this window is satisfied.*
- **ON TRACK.** *The window closes {{MEASUREMENT_END_DATE}}. At the current rate the target is reached by {{PROJECTED_MET_DATE}}.*
- **BEHIND.** *The window closes {{MEASUREMENT_END_DATE}} and the current rate does not reach target. The corrective change is: {{CORRECTIVE_ACTION}}.*
- **NOT MET.** *The window closed {{MEASUREMENT_END_DATE}} at {{CURRENT_VALUE}} against a target of {{TARGET_VALUE}}. We continue working at no additional cost until it is hit. Revised plan: {{REVISED_PLAN_LINK}}, dated {{REVISED_PLAN_DATE}}.*

---

## 3. Work shipped this period

### Track A: Visibility
| Shipped | Detail | Count |
|---|---|---|
| {{VIS_ITEM_1}} | {{VIS_DETAIL_1}} | {{VIS_COUNT_1}} |
| {{VIS_ITEM_2}} | {{VIS_DETAIL_2}} | {{VIS_COUNT_2}} |

### Track B: Conversion
| Shipped | Detail | Count |
|---|---|---|
| {{CONV_ITEM_1}} | {{CONV_DETAIL_1}} | {{CONV_COUNT_1}} |
| {{CONV_ITEM_2}} | {{CONV_DETAIL_2}} | {{CONV_COUNT_2}} |

### Track C: Presence
| Shipped | Detail | Count |
|---|---|---|
| {{PRES_ITEM_1}} | {{PRES_DETAIL_1}} | {{PRES_COUNT_1}} |

### Track D: Operations
| Shipped | Detail | Count |
|---|---|---|
| {{OPS_ITEM_1}} | {{OPS_DETAIL_1}} | {{OPS_COUNT_1}} |

*Delete any track not in scope. Never list a track with an empty table, and never pad a track to make the page look fuller.*

---

## 4. Hours returned

| Workflow | Before | Now | Hours returned this period | How it is measured |
|---|---|---|---|---|
| {{WORKFLOW_1}} | {{BEFORE_1}} | {{NOW_1}} | {{HOURS_1}} | {{METHOD_1}} |
| {{WORKFLOW_2}} | {{BEFORE_2}} | {{NOW_2}} | {{HOURS_2}} | {{METHOD_2}} |
| **Total** | | | **{{TOTAL_HOURS}}** | |

**Cumulative since {{ENGAGEMENT_START}}: {{CUMULATIVE_HOURS}} hours.**

*Only include a row where the before figure was measured or the client stated it, and where the method column can survive being questioned. Omit this whole section rather than estimate it. Never convert hours to a dollar figure using an assumed wage. If the client gives us their loaded hourly cost in writing, we can state it and attribute it to them.*

---

## 5. Leads, citations, and rankings

| Metric | Baseline | Last period | This period | Change |
|---|---|---|---|---|
| {{METRIC_1}} | {{M1_BASE}} | {{M1_LAST}} | {{M1_NOW}} | {{M1_CHANGE}} |
| {{METRIC_2}} | {{M2_BASE}} | {{M2_LAST}} | {{M2_NOW}} | {{M2_CHANGE}} |
| {{METRIC_3}} | {{M3_BASE}} | {{M3_LAST}} | {{M3_NOW}} | {{M3_CHANGE}} |
| {{METRIC_4}} | {{M4_BASE}} | {{M4_LAST}} | {{M4_NOW}} | {{M4_CHANGE}} |

**Citation presence by engine, where relevant**

| Engine | Target queries cited | Change |
|---|---|---|
| ChatGPT | {{CHATGPT_CITED}} of {{TARGET_QUERY_COUNT}} | {{CHATGPT_CHANGE}} |
| Perplexity | {{PERPLEXITY_CITED}} of {{TARGET_QUERY_COUNT}} | {{PERPLEXITY_CHANGE}} |
| Google AI Overviews | {{AIO_CITED}} of {{TARGET_QUERY_COUNT}} | {{AIO_CHANGE}} |
| Gemini | {{GEMINI_CITED}} of {{TARGET_QUERY_COUNT}} | {{GEMINI_CHANGE}} |

*Reported, not guaranteed, unless one of these is the named guaranteed metric. Revenue, closed deals, and conversion rate never appear as a Syntrex result. If the client shares them, they can appear labelled as the client's own figures.*

---

## 6. What changed and what is next

**What moved and why:** {{WHAT_MOVED}}

*Two or three sentences. Cause, not activity.*

**What did not move and why:** {{WHAT_DID_NOT_MOVE}}

*Include this even in a good month. Its absence is what makes reports untrustworthy.*

**Next period:** {{NEXT_PERIOD_PLAN}}

**What we need from you:** {{CLIENT_ACTIONS}}

---

## 7. Definitions

Stated so this Receipt can be read on its own in a year.

| Term | Definition used in this Receipt |
|---|---|
| {{GUARANTEED_METRIC}} | {{GUARANTEED_METRIC_DEFINITION}} |
| {{METRIC_1}} | {{METRIC_1_DEFINITION}} |
| Hours returned | {{HOURS_DEFINITION}} |
| Target queries | The {{TARGET_QUERY_COUNT}} queries agreed on {{QUERY_AGREEMENT_DATE}}, listed at {{QUERY_LIST_LINK}} |
| Window pauses | Days the guarantee window was paused because an agreed client condition was missed, each with a start and end date. Paused days do not count toward the window |

**This Receipt is final as issued.** If a number in it is later found to be wrong, it is not edited. A superseding Receipt is issued and you receive it with the reason.

Henry Bello · Syntrex · henry@syntrexio.com

---
---

# FILLED EXAMPLE

The same template, completed. Illustrative of the format and the level of specificity expected. The guaranteed metric, the search impressions row, and the hours-returned total are the published HALT Fire proof points from the Foundation; every other line item is shown only to demonstrate the format and is not a real figure.

---

# THE RECEIPT
## HALT Fire · July 2026

| | |
|---|---|
| **Period** | 1 July 2026 to 31 July 2026 |
| **Issued** | 5 August 2026 |
| **Receipt ID** | halt-fire-2026-07-r1 |
| **Engagement** | Full Stack, all four tracks |
| **Investment this period** | $7,500 |
| **Supersedes** | None |

---

## 1. The guaranteed metric

| | |
|---|---|
| **Metric** | Search clicks from organic search |
| **Baseline** | 64 monthly clicks, measured 1 February 2026 |
| **Target** | 400% growth, 320 clicks, by 30 September 2026 |
| **This period** | **505 clicks** |
| **Change from baseline** | Up 689% |
| **Change from last period** | Up 15% |
| **Source** | Google Search Console, pulled 2 August 2026 |
| **Window** | Day 151 of 240, excluding paused days |
| **Window pauses** | None this window |

**Trend**

| Period | Value |
|---|---|
| Baseline, 1 February 2026 | 64 |
| May 2026 | 331 |
| June 2026 | 441 |
| **July 2026** | **505** |

---

## 2. Was the guarantee met?

> ## MET

**The metric reached target on 12 June 2026 and the guarantee for this window is satisfied.** Search clicks are up 689% against a 400% target, with 89 days remaining in the window.

---

## 3. Work shipped this period

### Track A: Visibility
| Shipped | Detail | Count |
|---|---|---|
| Long-form articles published | Answer-shaped, targeting fire protection service queries | 6 |
| Service pages rebuilt for AI retrieval | Structured data, entity markup, direct-answer openings | 4 |
| Target queries added to tracking | Expanded from 20 to 32 monitored queries | 12 |

### Track B: Conversion
| Shipped | Detail | Count |
|---|---|---|
| AI assistant knowledge base expanded | Inspection scheduling, code compliance questions | 41 new answers |
| Inquiry follow-up sequence rebuilt | Three-touch, fires within 4 minutes of an unanswered inquiry | 1 sequence |

### Track C: Presence
| Shipped | Detail | Count |
|---|---|---|
| Service area pages built and live | One per county served | 5 |

### Track D: Operations
| Shipped | Detail | Count |
|---|---|---|
| Inspection report generation automated | Field notes to formatted client report | 1 workflow |
| Reporting dashboard extended | Citation presence added alongside rankings and sessions | 1 dashboard |

---

## 4. Hours returned

| Workflow | Before | Now | Hours returned this period | How it is measured |
|---|---|---|---|---|
| Inspection report generation | 45 min per report, 22 reports | 8 min per report | 13.6 | Timed by the team pre-automation, report count from the job system |
| Inbound inquiry triage and first response | 6 hrs per week | 1 hr per week | 21.5 | Weekly log kept by the office manager, Feb to Apr, compared to current |
| Monthly reporting assembly | 5 hrs per month | 0 | 5.0 | Previously assembled by hand, now generated on schedule |
| **Total** | | | **40.1** | |

**Cumulative since 1 February 2026: 231 hours.** That is over 10 hours per week returned to the team.

---

## 5. Leads, citations, and rankings

| Metric | Baseline | Last period | This period | Change |
|---|---|---|---|---|
| Search clicks | 64 | 441 | 505 | Up 689% from baseline |
| Search impressions | 1,341 | 19,700 | 22,900 | Up 1,608% from baseline |
| Inbound inquiries captured | 34/mo | 91 | 108 | Up 218% from baseline |
| Target queries ranking page 1 | 3 of 20 | 17 of 32 | 21 of 32 | Up 18 |
| Average first response time | 4 hrs 20 min | 6 min | 4 min | Down from 4 hrs 20 min |

**Citation presence by engine**

| Engine | Target queries cited | Change |
|---|---|---|
| ChatGPT | 19 of 32 | Up 4 |
| Perplexity | 22 of 32 | Up 3 |
| Google AI Overviews | 14 of 32 | Up 5 |
| Gemini | 16 of 32 | Up 2 |

---

## 6. What changed and what is next

**What moved and why:** The five service area pages went live on 8 July and accounted for most of the click growth in the second half of the month, because they finally match how people search by county rather than by service. Citation presence rose across all four engines, with the largest gain in AI Overviews, tracking the four service pages rebuilt for retrieval.

**What did not move and why:** Gemini citation presence gained only 2 queries and remains the weakest engine of the four. It indexes more slowly than the others and the July content is not fully reflected yet. If it has not caught up by the September Receipt it becomes a specific workstream rather than a wait.

**Next period:** Six more articles targeting the remaining uncited queries, the inspection scheduling flow moved into the assistant so bookings complete without a call, and the two lowest-performing service pages rebuilt.

**What we need from you:** Confirmation of the 2027 inspection pricing by 15 August so the assistant is not quoting last year's numbers, and 20 minutes with Dave to record how a code compliance call actually goes, which is the last thing the assistant is guessing at.

---

## 7. Definitions

| Term | Definition used in this Receipt |
|---|---|
| Search clicks | Clicks to the site from Google organic search results, per Google Search Console, against the February 2026 baseline |
| Search impressions | Times a site URL appeared in Google organic search results, per Google Search Console, against the February 2026 baseline |
| Inbound inquiries captured | Form submissions, assistant conversations that produced contact details, and tracked calls, deduplicated by phone and email |
| Hours returned | Measured time on a task before automation minus measured time after, multiplied by task volume in the period. Method stated per row |
| Target queries | The 32 queries agreed on 3 July 2026, listed in the hub |
| Window pauses | Days the guarantee window was paused because an agreed client condition was missed, each with a start and end date. Paused days do not count toward the window |

**This Receipt is final as issued.** If a number in it is later found to be wrong, it is not edited. A superseding Receipt is issued and you receive it with the reason.

Henry Bello · Syntrex · henry@syntrexio.com
