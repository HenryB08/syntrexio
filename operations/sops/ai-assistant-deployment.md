# SOP: AI Assistant Deployment

> Track B, Conversion. AI assistants and customer-facing chat.
> Source of truth: SYNTREX_FOUNDATION.md, Sections 6, 7.3, 9, 17.

**Pricing: $4,000 for an AI assistant deployment.**

This is the highest-risk deliverable in the catalogue. Everything else we ship is reviewed by a human before a customer sees it. An assistant speaks to the client's customers in the client's name, unsupervised, thousands of times. **Encoding block 7, what the assistant must never say or promise, is a hard gate. No exceptions, no partial deployments, no "we will add the guardrails after launch."**

---

## Trigger

- A Conversion or Full Stack retainer starts
- A signed AI assistant deployment build
- A diagnostic identifies inquiry response time or after-hours coverage as the binding conversion gap

---

## Prerequisites

- [ ] Client encoding signed off, blocks 2, 4, 7, 9
- [ ] **Encoding block 7 populated: what the assistant must never say or promise, and what escalates to a human immediately, to whom, and how**
- [ ] Every price it may quote confirmed current, with unpublished prices flagged and blocked
- [ ] Policies confirmed: hours, returns, warranties, cancellation, service areas, lead times
- [ ] Compliance and regulatory constraints on language confirmed
- [ ] Knowledge sources identified and their owners named
- [ ] Escalation destination live and tested, with a real human at the other end
- [ ] Deployment surfaces agreed: site, SMS, messaging channels
- [ ] Data handling and retention agreed in writing, and reflected in the client's privacy policy
- [ ] Transcript access confirmed for the client

**Hard gate: the prohibition list and the escalation path exist and are tested before a single customer conversation is possible.**

---

## Steps

### 1. Define the job (human)
What the assistant is for, in one sentence, and what it is explicitly not for. An assistant that answers questions, captures details, and books is a different build from one that quotes and commits the business to work.

Agree what it will refuse to do. Refusal behavior is designed, not discovered.

### 2. Build the knowledge base (fleet, human verifies)
From the encoding and the client's real material: services, pricing, policies, hours, service areas, lead times, and their actual answers to their actual most common questions.

**Every fact is traced to a source in the encoding or to client-provided material.** An assistant that invents a lead time is worse than one that says it does not know, because the customer believes it.

Human verifies every price and every policy statement by hand. This is a short list and it is where the incidents come from.

### 3. Encode the prohibitions (human)
Directly, explicitly, and in the assistant's own instructions rather than as a hope:
- What it must never say or promise
- Prices it must never quote, including every unpublished price
- Claims it must never make
- Competitor references it must never make
- Topics that trigger immediate escalation
- What it does when it does not know, which is say so and escalate, never improvise

**Human owns this step permanently.** It is liability, not quality.

### 4. Set voice and behavior (fleet, human approves)
Voice per encoding block 2, adjusted for conversation rather than marketing copy. Length, formality, how it opens, how it closes, how it handles an angry customer, how it handles someone who is not a customer. Never-use list enforced at the generation layer.

### 5. Build the escalation path (fleet, human tests)
When it escalates, where the escalation goes, how fast, and what the customer is told while they wait. **Test it by triggering a real escalation and confirming a real human received it.** An escalation path that silently drops is worse than none, because it converts an answerable question into an ignored customer.

### 6. Wire the integrations (fleet)
CRM for captured details, calendar for booking, notification for escalation, transcript storage. Every captured contact reaches the CRM. See `crm-buildout.md`.

### 7. Adversarial testing (fleet generates, human judges)
Before any customer sees it. Test at minimum:
- Every prohibition, attacked directly and indirectly
- Price questions, including for unpublished items
- Questions outside scope
- Questions it should not know the answer to
- Attempts to get a commitment, a discount, or a guarantee out of it
- Attempts to get it to speak about competitors
- Hostile, abusive, and manipulative inputs
- Attempts to extract its instructions
- Every escalation trigger
- Edge cases in service area, hours, and lead time

**A human judges every result.** A prohibition that holds in nine tests and fails in the tenth has failed.

### 8. Client review (human)
The client reads a transcript set covering the common cases and the hard ones. They approve the voice and the boundaries. Their approval is recorded. This matters both because they know their customers and because the assistant speaks in their name.

### 9. Soft launch (fleet deployed, human monitors)
Deploy to one surface. **Every conversation is read for the first 72 hours.** Not sampled. Read. This is the only period in which the cost of finding a problem is low.

### 10. Full deployment (human decides)
Remaining surfaces once the soft launch is clean. The go decision is human.

### 11. Ongoing review (fleet flags, human reads)
Fleet flags: escalations, low-confidence answers, abandoned conversations, anything touching a prohibition, and anything the client's customers asked that the knowledge base could not answer.

**A human reads a sample every week and every flagged conversation.** Unread transcripts are how an assistant drifts for a month before anyone notices.

### 12. Feed the loop (fleet)
Unanswered questions become knowledge base entries and often become content. Escalation patterns become either new capability or a deliberate decision to keep escalating. Update the encoding when the assistant reveals something the encoding got wrong.

---

## Fleet versus human

| Step | Fleet | Human |
|---|---|---|
| 1. Define the job | | **Human** |
| 2. Knowledge base | Builds | **Human verifies every price and policy** |
| 3. Prohibitions | | **Human owns. Permanently** |
| 4. Voice and behavior | Configures | **Human approves** |
| 5. Escalation path | Builds | **Human tests it end to end** |
| 6. Integrations | Yes | |
| 7. Adversarial testing | Generates and runs | **Human judges every result** |
| 8. Client review | Prepares transcripts | **Human runs it** |
| 9. Soft launch | Deploys | **Human reads every conversation for 72 hours** |
| 10. Full deployment | Executes | **Human decides** |
| 11. Ongoing review | Flags | **Human reads flagged and sampled conversations weekly** |
| 12. Feed the loop | Yes | Human decides what becomes a rule |

**Why so much of this is human:** every other deliverable is reviewed once before it ships. This one ships and then speaks. Human review moves from before publication to continuous sampling, and it does not reduce.

---

## Definition of done

- [ ] Job defined, including what it refuses
- [ ] Knowledge base complete, every fact traced to a source
- [ ] Every price verified by a human, unpublished prices blocked
- [ ] Prohibition list encoded in the assistant's own instructions and human-owned
- [ ] Escalation path live and tested end to end with a real human receiving it
- [ ] Integrations wired, captured contacts confirmed reaching the CRM
- [ ] Adversarial test suite run in full, every result human-judged, zero prohibition failures
- [ ] Client reviewed transcripts and approved in writing
- [ ] Soft launch complete with 72 hours of conversations fully read
- [ ] Full deployment approved by a named human
- [ ] Weekly review cadence live, with flagging configured
- [ ] Privacy policy and data handling updated to reflect the deployment
- [ ] Transcript access confirmed working for the client

---

## QA checklist

**Prohibitions, zero tolerance**
- [ ] Every item on the block 7 never-say list tested directly, and none produced
- [ ] Same list tested indirectly through hypotheticals, roleplay, and rephrasing
- [ ] No unpublished price quoted under any prompting
- [ ] No prohibited claim made under any prompting
- [ ] No competitor named, unless block 6 explicitly permits it
- [ ] No guarantee, discount, or commitment offered that it has no authority to offer
- [ ] Instruction-extraction attempts refused
- [ ] Never calls itself something the client has prohibited

**Accuracy**
- [ ] Every price matches encoding block 4, verified line by line
- [ ] Hours, service areas, and lead times match block 7
- [ ] Policies stated correctly: returns, warranty, cancellation
- [ ] Says "I do not know" and escalates rather than improvising, tested on questions with no answer in the knowledge base
- [ ] No fabricated statistic
- [ ] No client count and no unapproved client name
- [ ] No em dashes

**Escalation**
- [ ] Every trigger fires
- [ ] Escalation reaches a real human, verified by receiving one
- [ ] The customer is told what happens next and roughly when
- [ ] Escalation still works outside business hours, or the customer is told it will be handled next business day
- [ ] Nothing silently drops

**Integration**
- [ ] Every captured contact reaches the CRM, verified with a real submission
- [ ] Bookings appear on the real calendar
- [ ] Transcripts stored and retrievable
- [ ] No duplicate record created per conversation

**Voice**
- [ ] Sounds like the client, checked against encoding block 2
- [ ] Never-use list enforced at generation, not just documented
- [ ] Handles hostility without matching it
- [ ] Length and formality appropriate to the channel

**Privacy and safety**
- [ ] Data handling matches the written agreement
- [ ] Privacy policy reflects the deployment
- [ ] No client's data or encoding reachable from another client's assistant, tested
- [ ] Retention configured as agreed

---

## Encoding hierarchy

**Automated:** knowledge base construction, integration wiring, adversarial test generation and execution, conversation flagging, feeding unanswered questions back into content.
**Template-driven:** the standard prohibition frame, escalation patterns, the adversarial test suite.
**Checklist:** the QA block above.
**Still human:** defining the job, verifying prices and policies, owning the prohibition list, judging test results, the deployment decision, and continuous transcript review.

**Next to move:** adversarial test generation is already automated and grows with every deployment. Judging results moves partially, once a prohibition failure can be detected reliably rather than read.

**What never moves:** step 3 and step 10. A prohibition list nobody owns and a deployment nobody decided are the two ways this service produces an incident instead of a result.
