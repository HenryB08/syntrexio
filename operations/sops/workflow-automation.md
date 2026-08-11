# SOP: Workflow Automation

> Track D, Operations. Workflow automation and system integration.
> Source of truth: SYNTREX_FOUNDATION.md, Sections 6, 7.3, 9.

**Pricing: $6,500 per workflow build.**

**Guaranteed metric for this service: hours removed from an agreed workflow.** That guarantee has a consequence that governs this entire SOP: **if the before state was not measured, there is no guarantee.** Measurement comes first, always.

---

## Trigger

- An Operations or Full Stack retainer starts
- A signed automation build
- A diagnostic identifies a workflow consuming significant human hours
- A QBR surfaces a new time sink, which is the most common origin (`operations/qbr-template.md`, Section 4)

---

## Prerequisites

- [ ] Client encoding signed off, blocks 7, 9
- [ ] The target workflow named specifically, not as a category
- [ ] **Before state measured: time per instance and instances per period, from observation or a client-kept log, not from an estimate**
- [ ] Baseline locked and agreed in writing
- [ ] Every system in the workflow identified, with access confirmed
- [ ] The person who currently does the work identified and available
- [ ] Failure tolerance agreed: what happens when it breaks, and who finds out
- [ ] Compliance constraints confirmed, especially where the workflow touches customer data or sends messages

**Hard gate: no build starts before the before state is measured and locked.** An automation without a baseline cannot be reported in the Receipt and cannot satisfy the guarantee. It is also the most common way an obviously valuable automation ends up being worth nothing on paper.

---

## Steps

### 1. Observe the workflow (human)
Watch it happen. Not a description of it, the actual thing. Every step, every system touched, every decision made, every exception handled, and every workaround.

**Human-owned.** The exceptions are the entire difficulty of the build and nobody describes their exceptions accurately, because to them they are not exceptions, they are just Tuesday.

### 2. Measure the before state (fleet, human verifies)
Time per instance and instances per period. Measured or logged, never estimated. Record the method, because it goes in the Receipt and it has to survive being questioned.

### 3. Map it (fleet, human confirms)
Trigger, steps, decisions, systems, data in and out, outputs, exceptions, and the current failure behavior. The client confirms the map is accurate before anything is built.

### 4. Decide what to automate (human)
Not all of it. Automate the deterministic path. Route the judgment steps to a human with the context already assembled, which is usually most of the value anyway.

**Human-owned.** Deciding what a machine should not decide is a judgment call about the client's risk, not about technical feasibility.

### 5. Design failure behavior (human)
Before building. For every step: what happens on failure, who is told, how fast, and what the safe state is. **An automation that fails silently is worse than the manual process it replaced,** because the manual process had someone watching it.

Decide explicitly: retry, alert and stop, alert and continue, or roll back.

### 6. Build (fleet)
On the client's existing automation platform where one is in use, per encoding block 9. Every step logged. Idempotent wherever a repeat run is possible, so a retry does not duplicate an action in the real world.

### 7. Build the instrumentation (fleet)
Runs, successes, failures, time per run, and volume, from the first day. **This is how hours returned is measured, so it is built with the automation and not added afterwards.**

### 8. Test (fleet runs, human judges)
Happy path, every exception found in step 1, malformed and missing data, system unavailable, duplicate trigger, and volume above normal. Human judges, because the fleet tests what it built for and step 1 exists precisely because there were things it did not know about.

### 9. Parallel run (human supervises)
Run the automation alongside the manual process for one full cycle. Compare outputs. **Never cut over on a passing test suite alone.** A parallel run is the only thing that catches the case the client forgot to mention.

### 10. Cut over (human decides)
Once the parallel run is clean. Rollback documented and tested. The person who used to do the work knows what changed and what to do when it breaks.

### 11. Measure the after state (fleet)
Same method as step 2. Hours returned is the difference, multiplied by volume. Recorded in the Receipt with the method stated per row.

### 12. Monitor (fleet, always-on)
Failure rate, run time, volume, and drift. **Alert on failure immediately** and on a volume drop, which usually means the trigger silently stopped firing.

### 13. Review (human, at the QBR)
Is it still running, still correct, and still saving what it saved. Automations rot when the surrounding business changes, and nobody reports a rotting automation because it is not visibly broken.

---

## Fleet versus human

| Step | Fleet | Human |
|---|---|---|
| 1. Observe | | **Human.** Exceptions are never described accurately |
| 2. Measure before | Records | **Human verifies the method** |
| 3. Map | Produces | **Client confirms** |
| 4. What to automate | Proposes | **Human decides** |
| 5. Failure behavior | Proposes | **Human decides.** Risk, not feasibility |
| 6. Build | Yes | |
| 7. Instrumentation | Yes | |
| 8. Test | Runs | **Human judges** |
| 9. Parallel run | Runs both | **Human supervises and compares** |
| 10. Cut over | Executes | **Human decides** |
| 11. Measure after | Yes | **Human reviews before it enters the Receipt** |
| 12. Monitor | Yes, always-on | Reviews alerts |
| 13. Review | Produces the data | **Human, at the QBR** |

---

## Definition of done

- [ ] Before state measured, method recorded, baseline locked
- [ ] Workflow observed in practice, with exceptions documented
- [ ] Map confirmed by the client
- [ ] Automation scope decided by a human, with judgment steps deliberately left to humans
- [ ] Failure behavior defined per step before the build started
- [ ] Built, with every step logged and idempotent where a repeat is possible
- [ ] Instrumentation live from day one
- [ ] Full test suite passed, including every observed exception
- [ ] Parallel run completed for one full cycle with outputs matching
- [ ] Cut over with a documented, tested rollback
- [ ] After state measured with the same method
- [ ] Hours returned calculated and in the Receipt with its method
- [ ] Monitoring and failure alerting live
- [ ] The person who used to do the work knows what changed

**For the guarantee:** the agreed number of hours has been removed from the agreed workflow, measured the agreed way. If not, work continues at no additional cost until it has.

---

## QA checklist

**Measurement**
- [ ] Before state measured, not estimated, with the method written down
- [ ] After state measured the same way. **A different method invalidates the comparison**
- [ ] Volume counted from a system of record, not recalled
- [ ] Hours returned survives being questioned by the client
- [ ] No hours claimed for a step that was already automated before we arrived

**Correctness**
- [ ] Output matches the manual output across the full parallel run
- [ ] Every exception from step 1 handled or explicitly routed to a human
- [ ] Malformed, missing, and unexpected data handled without corrupting anything
- [ ] Idempotent where a repeat run is possible. **Verified by running it twice**
- [ ] No duplicate real-world action: no double email, double invoice, double record

**Failure**
- [ ] Every step has defined failure behavior
- [ ] Failures alert a named human, verified by causing one
- [ ] **Nothing fails silently**
- [ ] Safe state on partial failure defined and tested
- [ ] Retry logic cannot loop indefinitely
- [ ] Rate limits and quotas respected
- [ ] Credential expiry produces an alert rather than a silent stop

**Safety**
- [ ] Nothing customer-facing sends without human approval of the template, per encoding blocks 2 and 7
- [ ] No message contains an unpublished price, a fabricated statistic, or an em dash
- [ ] Opt-out and consent status respected on anything that contacts a person
- [ ] Data stays within the client's agreed systems and regions
- [ ] No client's data reachable from another client's automation
- [ ] Credentials stored in the vault, never in the automation body

**Operational**
- [ ] Every step logged with enough detail to debug from the log alone
- [ ] Rollback documented and tested
- [ ] The client can see whether it is running
- [ ] Documented in plain language: trigger, actions, failure behavior, owner

---

## Encoding hierarchy

**Automated:** measurement capture, mapping from observation notes, the build itself, instrumentation, testing, monitoring, alerting, reporting.
**Template-driven:** common workflow patterns, standard failure-behavior blocks, the parallel-run comparison, the instrumentation package.
**Checklist:** the QA block above.
**Still human:** observation, deciding the automation boundary, designing failure behavior, judging tests, supervising the parallel run, and the cut-over decision.

**Next to move:** observation partially templatizes once enough workflows of a type have been mapped, though the exception hunt stays human. Failure-behavior design moves toward templates as the standard patterns stabilize.

**What never moves:** step 4 and step 10. Where the automation boundary sits and when it goes live are decisions about the client's risk tolerance, and those belong to whoever is accountable for the outcome.
