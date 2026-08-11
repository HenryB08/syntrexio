# SOP: CRM Buildout and Migration

> Track B, Conversion. CRM buildout, migration, and management.
> Source of truth: SYNTREX_FOUNDATION.md, Sections 6, 7.3, 17.

**Pricing: $4,500 for a CRM buildout and migration.**

A CRM migration is the deliverable most likely to cause irreversible damage. Content can be rewritten and a site can be rolled back. Deleted records and overwritten history cannot. Everything below is built around that.

---

## Trigger

- A Conversion or Full Stack retainer starts and the CRM is the binding constraint
- A signed CRM buildout or migration
- An AI assistant or lead capture deployment needs a destination that does not yet exist
- The client's pipeline data has become unusable for reporting or follow-up

---

## Prerequisites

- [ ] Client encoding signed off, blocks 4, 5, 9
- [ ] Admin access to the source system and the destination system
- [ ] **A verified full export of the source system, restored and checked, before anything is touched**
- [ ] Current pipeline stages documented with their real definitions, not their labels
- [ ] Custom field inventory, with actual fill rates
- [ ] Existing automations inventoried, including who built them and whether they still fire
- [ ] Every integration that reads or writes to the CRM identified
- [ ] Data owner named on the client side
- [ ] Compliance requirements confirmed: consent records, retention, regional rules

**Hard gate: no migration begins without a verified, restorable backup of the source system.** A backup that has not been restored and checked is not a backup.

---

## Steps

### 1. Map the actual process (human)
Not the process on the whiteboard. The one the team runs. Sit with whoever uses the CRM daily and find out which stages are real, which fields anyone fills in, and what they do outside the system because the system is inconvenient.

**Human-owned.** This is where the entire build succeeds or fails, and it cannot be extracted from a data export.

### 2. Design the model (fleet, human approves)
Objects, stages with entry and exit criteria, fields, ownership, and permissions. Every field justified by a decision it informs or a report it feeds. **Every field nobody fills in is a field that makes the CRM less trusted,** and an untrusted CRM is bypassed within a quarter.

### 3. Audit the data (fleet)
Record counts, duplicates, missing required values, malformed values, dead records, and consent status. Produce the numbers before the migration, because they are the only way to know afterwards whether it worked.

### 4. Plan the mapping (fleet, human approves)
Field by field, source to destination. Every transformation stated. Everything not migrating listed explicitly, with the reason. **Human approves the drop list.** Deciding not to bring something is a business decision, not a technical one.

### 5. Dry run (fleet)
Migrate into a sandbox or a staging instance. Reconcile counts, spot-check records by hand, and confirm every transformation produced what was intended. **Never migrate to production first.**

### 6. Reconcile the dry run (human)
Compare against the step 3 audit. Any unexplained discrepancy stops the migration. "Close enough" on a record count is how a client discovers in March that they lost 400 contacts in January.

### 7. Build the structure (fleet)
Stages, fields, views, permissions, and required-field rules in the destination system.

### 8. Migrate (fleet, human supervises)
Production migration in the agreed window. Source system read-only or frozen during it. Reconcile counts immediately on completion, before anyone is told it is done.

### 9. Build automations (fleet, human approves)
Assignment, follow-up sequences, stage-change actions, notifications, and task creation. Each one documented in plain language: what fires it, what it does, and who it contacts. See `workflow-automation.md`.

**Human approves anything that contacts a customer.** An assignment rule is internal. A follow-up sequence sends messages in the client's name.

### 10. Wire integrations (fleet)
Forms, the AI assistant, email, calendar, phone, and reporting. Every path tested with a real record end to end, not with a test payload.

### 11. Test (fleet runs, human judges)
Full checklist below, on production data, before handover.

### 12. Train and hand over (human)
Recorded walkthrough plus a live session with the people who use it daily. **Adoption is the deliverable.** A correctly built CRM that the team works around is a failed build, and it shows up as signal 9 on the account health scorecard.

### 13. Watch (fleet, always-on)
Monitor for 30 days: records created by source, stage progression, automation firing and error rates, duplicate creation, and fields going unfilled. Alert on a drop in records created, which usually means an integration silently broke.

---

## Fleet versus human

| Step | Fleet | Human |
|---|---|---|
| 1. Map the actual process | | **Human.** Cannot be extracted from data |
| 2. Design the model | Proposes | **Human approves** |
| 3. Audit data | Yes | |
| 4. Mapping plan | Produces | **Human approves the drop list** |
| 5. Dry run | Yes | |
| 6. Reconcile | Produces the comparison | **Human judges.** Discrepancies stop the migration |
| 7. Build structure | Yes | |
| 8. Migrate | Executes | **Human supervises and owns the go decision** |
| 9. Automations | Builds | **Human approves anything customer-facing** |
| 10. Integrations | Yes | |
| 11. Test | Runs | **Human judges** |
| 12. Train and hand over | Prepares materials | **Human delivers.** Adoption is the deliverable |
| 13. Watch | Yes, always-on | Reviews alerts |

---

## Definition of done

- [ ] Verified restorable backup of the source system, retained
- [ ] Actual process mapped from the people who use it
- [ ] Model built, with every field justified
- [ ] Pre-migration data audit numbers recorded
- [ ] Dry run complete and reconciled with no unexplained discrepancy
- [ ] Production migration complete and reconciled against the audit
- [ ] Every automation built, documented, and customer-facing ones approved
- [ ] Every integration tested with a real record end to end
- [ ] Full QA passed
- [ ] Team trained, walkthrough recorded
- [ ] 30 day watch complete with no unresolved regression
- [ ] Client confirmed as owning their data, with export access verified

---

## QA checklist

**Data integrity, non-negotiable**
- [ ] Destination record count reconciles to source count minus the approved drop list, exactly
- [ ] No record lost that was not explicitly on the drop list
- [ ] Sample of 25 records checked by hand, field by field, against the source
- [ ] Every date field correct, including timezone
- [ ] Currency and numeric fields correct in value and format
- [ ] Relationships preserved: contacts to companies, deals to contacts, activities to records
- [ ] Historical activity and notes preserved, not truncated
- [ ] Owner assignment preserved
- [ ] Duplicates no worse than pre-migration, and ideally better
- [ ] Consent and opt-out status preserved. **A lost unsubscribe is a compliance incident, not a data quality issue**

**Structure**
- [ ] Every stage has entry and exit criteria written down
- [ ] Every field is filled by someone or feeds something
- [ ] Required fields are genuinely required and not merely aspirational
- [ ] Permissions correct, and no user can see what they should not
- [ ] Views match how the team actually works

**Automation**
- [ ] Every automation documented in plain language
- [ ] Every customer-facing automation human-approved
- [ ] No automation can loop or fire repeatedly on one record
- [ ] No automation contacts a record with opt-out status
- [ ] Test record run end to end through every sequence
- [ ] Failure behavior defined for each: retry, alert, or stop
- [ ] Every message matches encoding blocks 2 and 7, with no em dashes and no unpublished pricing

**Integration**
- [ ] Every form creates a record, verified with a real submission
- [ ] AI assistant captures reach the CRM, verified with a real conversation
- [ ] Email, calendar, and phone sync bidirectionally where configured
- [ ] Reporting reads the correct fields
- [ ] No integration creates a duplicate on each sync

**Handover**
- [ ] Team can complete their real daily tasks in the new system, observed rather than assumed
- [ ] Documentation delivered
- [ ] Export path confirmed working. They own their data and can leave with it

---

## Encoding hierarchy

**Automated:** data audit, mapping execution, dry run, structure build, integration wiring, testing, monitoring.
**Template-driven:** the standard model by business type, common stage sets, standard automation patterns, the reconciliation report.
**Checklist:** the QA block above.
**Still human:** mapping the real process, approving the model and the drop list, judging reconciliation, the production go decision, approving customer-facing automations, and training.

**Next to move:** process mapping partially templatizes by business type once enough builds exist, but the interview stays human because the useful information is what people do instead of using the system.

**What never moves:** step 6 and step 8. Reconciliation judged by nobody and a migration nobody decided to run are how records are lost permanently.
