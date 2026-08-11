# Quarterly Business Review

> **60% of the agenda is the next 90 days, not the last 90.**
> Source of truth: SYNTREX_FOUNDATION.md, Sections 13 and 14.

---

## HOW TO USE THIS (internal, delete before sending)

**Why this meeting exists.** Companies running structured quarterly reviews see meaningfully higher retention and higher net revenue retention, and 35 to 50% of expansion bookings originate in these reviews. This is the single highest-value recurring hour in the business. It is not a status meeting and it is not a bigger version of the monthly call.

**The 60/40 rule is structural, not aspirational.** Sections 1 through 4 are the last quarter and get 40% of the clock. Sections 5 through 8 are the next quarter and get 60%. If you are 45 minutes into a 75 minute meeting and still on last quarter, you are running the wrong meeting. Timebox each section and say the timings out loud at the start.

**Why the past section is short.** Because the Receipts already covered it, every month, and the client has read them. The QBR does not re-present the Receipts. It summarizes them in one table and moves on. If the client has not read them, that is a communication finding for Section 4, not a reason to spend the hour reading them aloud.

**Get more than one person in the room.** Close rates on anything double when multiple stakeholders are present, and expansion decided by one person tends to un-decide itself later. Ask for the economic buyer by name when you schedule it.

**Send the pre-read 48 hours ahead.** Sections 1 through 4 filled in, Sections 5 through 8 in draft. The client arrives having already absorbed the past, which is what protects the 60/40 split.

**Expansion is discussed here because this is where it belongs.** Selling to an existing client succeeds 60 to 70% of the time against 5 to 20% for a new prospect, and expansion revenue costs roughly five times less than new acquisition. But the timing rule in the Foundation is absolute: pitch expansion immediately after an ROI milestone, never on your own calendar. If the quarter missed its metric, Section 7 is deleted from the deck. Not softened. Deleted. Section 6 becomes the recovery plan and that is the whole meeting.

**Every output line has an owner and a date,** the same as the 30/60/90. The QBR produces the next 30/60/90, so it inherits the same discipline.

**Follow up within 24 hours** with the written summary in Section 9. A QBR with no artifact is a conversation, and conversations do not survive a personnel change on the client side.

---

## Timing

| Section | Content | Share of clock | 75 min meeting |
|---|---|---|---|
| 1 to 4 | The last 90 days | 40% | 30 min |
| 5 to 8 | The next 90 days | 60% | 45 min |

---
---

# Quarterly Business Review
## {{CLIENT_NAME}} · {{QUARTER}}

| | |
|---|---|
| **Review date** | {{QBR_DATE}} |
| **Period reviewed** | {{QUARTER_START}} to {{QUARTER_END}} |
| **Next period** | {{NEXT_QUARTER_START}} to {{NEXT_QUARTER_END}} |
| **Engagement** | {{ENGAGEMENT_NAME}}, {{TRACKS_IN_SCOPE}}, {{MONTHLY_AMOUNT}}/mo |
| **Months in engagement** | {{MONTHS_ACTIVE}} |
| **Attending from {{CLIENT_NAME}}** | {{CLIENT_ATTENDEES}} |
| **Attending from Syntrex** | Henry Bello |
| **Account health** | {{HEALTH_SCORE}}, see `operations/account-health-scorecard.md` |

---
---

# PART ONE: THE LAST 90 DAYS (40% of the meeting)

---

## 1. The quarter's Receipts, summarized

Three Receipts, one table. Full documents are in the hub if anyone wants to reopen them.

| | {{MONTH_1}} | {{MONTH_2}} | {{MONTH_3}} | Quarter |
|---|---|---|---|---|
| **{{GUARANTEED_METRIC}}** | {{M1_GUARANTEED}} | {{M2_GUARANTEED}} | {{M3_GUARANTEED}} | {{Q_GUARANTEED}} |
| Guarantee status | {{M1_STATUS}} | {{M2_STATUS}} | {{M3_STATUS}} | {{Q_STATUS}} |
| {{REPORTED_METRIC_1}} | {{M1_R1}} | {{M2_R1}} | {{M3_R1}} | {{Q_R1}} |
| {{REPORTED_METRIC_2}} | {{M1_R2}} | {{M2_R2}} | {{M3_R2}} | {{Q_R2}} |
| Hours returned | {{M1_HOURS}} | {{M2_HOURS}} | {{M3_HOURS}} | {{Q_HOURS}} |
| Items shipped | {{M1_SHIPPED}} | {{M2_SHIPPED}} | {{M3_SHIPPED}} | {{Q_SHIPPED}} |

**Shipped this quarter, by track**

| Track | What was delivered | Volume |
|---|---|---|
| Visibility | {{Q_VIS_SUMMARY}} | {{Q_VIS_COUNT}} |
| Conversion | {{Q_CONV_SUMMARY}} | {{Q_CONV_COUNT}} |
| Presence | {{Q_PRES_SUMMARY}} | {{Q_PRES_COUNT}} |
| Operations | {{Q_OPS_SUMMARY}} | {{Q_OPS_COUNT}} |

**Cumulative since {{ENGAGEMENT_START}}:** {{CUMULATIVE_SUMMARY}}

---

## 2. The guaranteed metric, trend

| | |
|---|---|
| **Metric** | {{GUARANTEED_METRIC}} |
| **Baseline** | {{BASELINE_VALUE}}, {{BASELINE_DATE}} |
| **Target** | {{TARGET_VALUE}} |
| **Today** | **{{CURRENT_VALUE}}** |
| **Change from baseline** | {{TOTAL_CHANGE}} |
| **Change this quarter** | {{QUARTER_CHANGE}} |
| **Window status** | {{WINDOW_STATUS}} |
| **Window pauses this quarter** | {{WINDOW_PAUSES_QUARTER}} |

**Full trend since engagement start**

| Period | Value | Change |
|---|---|---|
| Baseline, {{BASELINE_DATE}} | {{BASELINE_VALUE}} | |
| {{TREND_PERIOD_1}} | {{TREND_VALUE_1}} | {{TREND_CHANGE_1}} |
| {{TREND_PERIOD_2}} | {{TREND_VALUE_2}} | {{TREND_CHANGE_2}} |
| {{TREND_PERIOD_3}} | {{TREND_VALUE_3}} | {{TREND_CHANGE_3}} |
| {{TREND_PERIOD_4}} | {{TREND_VALUE_4}} | {{TREND_CHANGE_4}} |
| **Now** | **{{CURRENT_VALUE}}** | {{TOTAL_CHANGE}} |

**The guarantee: {{GUARANTEE_STATUS}}**

{{GUARANTEE_STATEMENT}}

{{#IF_NOT_MET}}
**We did not hit it.** We continue working at no additional cost until we do. The revised plan is Section 6 of this document, and it leads this meeting rather than sitting at the back of it.
{{/IF_NOT_MET}}

**Is this still the right metric?** {{METRIC_STILL_RIGHT}}

*Ask it out loud every quarter. A metric that was right in month one is sometimes the wrong one by month nine, and the honest moment to say so is here, in front of the trend line, not quietly at renewal. If it changes, it changes going forward with a new baseline, and the change is logged.*

---

## 3. What we got wrong

{{WHAT_WE_GOT_WRONG}}

*One or two items, named specifically. A bet that did not pay, a date that slipped, a recommendation that turned out to be wrong. This section is non-optional and it is not a humility performance. Credibility is built by being verifiable, and a vendor who never reports a miss is a vendor whose reporting cannot be trusted in either direction. It also makes Section 7 believable when you get there.*

---

## 4. What changed in your business

The most valuable 10 minutes of the past section. Ask, then stop talking.

| Question | Their answer |
|---|---|
| What changed in the business this quarter that we should know about? | {{CHANGE_BUSINESS}} |
| What changed for your customers? | {{CHANGE_CUSTOMERS}} |
| Anything new in the market or from competitors? | {{CHANGE_MARKET}} |
| Any change in team, capacity, or who decides what? | {{CHANGE_TEAM}} |
| What is your biggest constraint right now? | {{CURRENT_CONSTRAINT}} |
| What is taking the most human hours in your week today? | {{CURRENT_TIME_SINK}} |
| Has your definition of success for this engagement changed? | {{SUCCESS_CHANGED}} |
| What are you being asked about internally that we are not covering? | {{INTERNAL_PRESSURE}} |

**Where this actually goes:** these answers write Sections 5, 6, and 7. The constraint they name and the time sink they describe are the two lines that most often turn into the next engagement, which is why this section is asked rather than told. Never jump from an answer here straight to a pitch. Note it, finish the section, and let it show up as a recommendation in Section 7 where it belongs.

---
---

# PART TWO: THE NEXT 90 DAYS (60% of the meeting)

---

## 5. Where you are now, and what that makes possible

{{CURRENT_STATE_NARRATIVE}}

*Two or three paragraphs. Where the business stands after the work done so far, what capability exists now that did not exist a quarter ago, and what that unlocks. This is the bridge from the past section to the plan, and it is the reason the recommendation in Section 6 is the right one.*

**What is now true that was not true 90 days ago**
- {{NOW_TRUE_1}}
- {{NOW_TRUE_2}}
- {{NOW_TRUE_3}}

**What is still the binding constraint**

{{BINDING_CONSTRAINT}}

*One thing. The next quarter should be aimed at it. If you name three constraints you have named none.*

---

## 6. The next 90 days

**The one outcome this quarter is aimed at:** {{NEXT_QUARTER_HEADLINE}}

**Guaranteed metric for the next window**

| | |
|---|---|
| Metric | {{NEXT_GUARANTEED_METRIC}} |
| Baseline | {{NEXT_BASELINE}}, measured {{NEXT_BASELINE_DATE}} |
| Target | {{NEXT_TARGET}} |
| Window | {{NEXT_WINDOW}}, closing {{NEXT_WINDOW_END}} |
| Source of truth | {{NEXT_MEASUREMENT_SOURCE}} |

**The plan**

| Milestone | Outcome | Owner | Date |
|---|---|---|---|
| Day 30, {{NEXT_D30_DATE}} | {{NEXT_D30_OUTCOME}} | {{NEXT_D30_OWNER}} | {{NEXT_D30_DATE}} |
| Day 60, {{NEXT_D60_DATE}} | {{NEXT_D60_OUTCOME}} | {{NEXT_D60_OWNER}} | {{NEXT_D60_DATE}} |
| Day 90, {{NEXT_D90_DATE}} | {{NEXT_D90_OUTCOME}} | {{NEXT_D90_OWNER}} | {{NEXT_D90_DATE}} |

**What {{CLIENT_NAME}} owns this quarter**

| Outcome | Owner | Date |
|---|---|---|
| {{NEXT_CLIENT_1}} | {{NEXT_CLIENT_OWNER_1}} | {{NEXT_CLIENT_DATE_1}} |
| {{NEXT_CLIENT_2}} | {{NEXT_CLIENT_OWNER_2}} | {{NEXT_CLIENT_DATE_2}} |

**What we are deliberately not doing this quarter, and why:** {{EXPLICIT_NOT_DOING}}

*Saying what you are not doing is the fastest way to make a plan credible, and it prevents the quiet scope drift that turns a focused quarter into four half-finished ones.*

**Risks to this plan**

| Risk | Likelihood | What we do about it |
|---|---|---|
| {{RISK_1}} | {{RISK_1_LIKELIHOOD}} | {{RISK_1_MITIGATION}} |
| {{RISK_2}} | {{RISK_2_LIKELIHOOD}} | {{RISK_2_MITIGATION}} |

This becomes the new 30/60/90. Issued within 24 hours of this meeting using `operations/onboarding/30-60-90-template.md`.

---

## 7. What comes next after that

> **Gate: only present this section if the guaranteed metric was hit, or if the client raised the need themselves in Section 4.**
> Expansion conversations following a proven milestone succeed far more often than expansion raised on our own calendar. If this quarter missed, delete this section entirely and give the time to Section 6. It will still be here next quarter, and it will land better.

### Where you are on the path

The sequence, and where {{CLIENT_NAME}} sits on it today:

| Stage | Status |
|---|---|
| AI Systems Diagnostic | {{STAGE_DIAGNOSTIC}} |
| Visibility retainer | {{STAGE_VISIBILITY}} |
| **+ Conversion**, once traffic flows | {{STAGE_CONVERSION}} |
| **+ Operations** | {{STAGE_OPERATIONS}} |
| **Agent Workforce** | {{STAGE_AGENT_WORKFORCE}} |
| **Full Stack** | {{STAGE_FULL_STACK}} |

**The natural next step: {{RECOMMENDED_EXPANSION}}**

**Why now and not earlier:** {{EXPANSION_WHY_NOW}}

*Tie it directly to something they said in Section 4 or to a number in Section 2. "You said inquiry volume is up 218% and that answering them is now taking your office manager 6 hours a week. That is the Conversion track, and it was not worth buying three months ago because there were not enough inquiries to be worth automating. There are now."*

**What it would cost:** {{EXPANSION_PRICE}}

**What it would guarantee:** {{EXPANSION_GUARANTEED_METRIC}}

**What it would return:** {{EXPANSION_EXPECTED_OUTCOME}}

**If the answer is not now, what would make it yes:** {{EXPANSION_TRIGGER}}

*Ask this even when they say yes. It tells you what the real gate is, and it makes the next quarter's version of this conversation shorter.*

### Also available, listed but not pitched

Everything Syntrex offers, so nobody discovers a capability nine months late. Present as a list. Do not walk through it.

| Track | Services |
|---|---|
| Visibility | AI search optimization, traditional SEO, content production and strategy, social media systems |
| Conversion | AI assistants and customer-facing chat, lead capture and follow-up, email systems and deliverability, CRM buildout and management |
| Presence | Websites and web applications, e-commerce builds, brand identity and design systems, imagery and campaign assets |
| Operations | Workflow automation and system integration, custom internal AI tools, reporting and dashboards, Agent Workforce |

**If you need something not on this list, we build it.** Custom work is economically viable for us in a way it is not for a headcount agency.

---

## 8. Portfolio, referral, and partnership

Ask these once a quarter. Not every month, and never in the same breath as a price increase.

**Other brands or entities.** {{PORTFOLIO_QUESTION_ANSWER}}

*If they run more than one, the second is 10% off and everything beyond is 15% off, tied to committed volume. Worth stating plainly once a quarter because clients forget it exists.*

**Referral.** {{REFERRAL_ASK_ANSWER}}

*Gate this on a visible win. The Foundation is explicit: ask at the moment of a visible win, never at the end of an engagement. If Section 2 shows the metric hit, this is that moment and the QBR is the right room. If it does not, skip it. Exact language and terms are in `operations/referral-program.md`.*

**White label.** {{WHITE_LABEL_ANSWER}}

*Only relevant if the client is themselves an agency or a services firm with clients of their own. They keep the relationship, Syntrex owns delivery. This is the highest-leverage channel we have, so it is worth one question a quarter to anyone it could apply to.*

---

## 9. Written summary and next steps

Sent within 24 hours of the meeting.

**Decisions made**
| Decision | Who decided | Date |
|---|---|---|
| {{DECISION_1}} | {{DECISION_1_OWNER}} | {{QBR_DATE}} |
| {{DECISION_2}} | {{DECISION_2_OWNER}} | {{QBR_DATE}} |

**Actions**
| Action | Owner | Due |
|---|---|---|
| Issue the new 30/60/90 | Henry Bello | {{QBR_DATE_PLUS_1}} |
| {{ACTION_2}} | {{ACTION_2_OWNER}} | {{ACTION_2_DUE}} |
| {{ACTION_3}} | {{ACTION_3_OWNER}} | {{ACTION_3_DUE}} |

**Open items carried to next quarter**
- {{OPEN_1}}
- {{OPEN_2}}

**Next QBR:** {{NEXT_QBR_DATE}}, scheduled now, in the room, before anyone leaves.

---
---

## INTERNAL: post-QBR (delete before sending)

- [ ] Written summary sent within 24 hours
- [ ] New 30/60/90 issued
- [ ] New guaranteed metric, baseline, and window recorded on the account record
- [ ] Account health scorecard updated: `operations/account-health-scorecard.md`
- [ ] Expansion outcome logged: pitched and won, pitched and deferred with the stated trigger, or gated out because the metric was missed
- [ ] Referral asked or deliberately not asked, with the reason recorded
- [ ] Next QBR on both calendars
- [ ] Anything the client said in Section 4 that contradicts their encoding, pushed back into the encoding. See `operations/sops/client-encoding.md`
- [ ] Anything that recurred across multiple clients this quarter, pushed one step down the encoding hierarchy: training to documentation to checklist to template to automation
