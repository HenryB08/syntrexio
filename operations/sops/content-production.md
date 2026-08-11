# SOP: Content Production

> Track A, Visibility. Content production and strategy.
> Source of truth: SYNTREX_FOUNDATION.md, Sections 6, 9.

**Guaranteed metric for this service: volume and publication schedule delivered.** Not traffic, not rankings, not leads. We control what we publish and when. We do not control what an algorithm does with it, and we do not guarantee it.

---

## Trigger

- A Visibility or Full Stack retainer starts, establishing a standing schedule
- `ai-search-optimization.md` step 6 requires answer content for an uncited query
- A product, service, or pricing change makes existing content wrong
- A QBR sets a new content direction
- A recurring customer question surfaces that no content answers

---

## Prerequisites

- [ ] Client encoding signed off, blocks 2, 4, 5, 6, 7
- [ ] Never-use list populated and loaded into the generation path
- [ ] Compliance and claim constraints from block 7 loaded
- [ ] Publishing access, or a documented publishing path with a named owner
- [ ] Content schedule agreed in writing: volume, cadence, formats, and channels
- [ ] Approval routing and SLA confirmed, per encoding block 9
- [ ] Approved statistics list available. Any figure not on it or not sourced in the piece does not appear

---

## Steps

### 1. Fix the schedule (human)
Volume, cadence, format mix, channel, and the approval SLA. **This is the guarantee, so it is agreed in writing before anything is produced,** and it is set at a level that survives a bad month rather than at the level a good month allows.

### 2. Build the brief (fleet, human approves the queue)
Every piece gets a brief before it gets a draft:

| Field | |
|---|---|
| The question it answers | In the customer's words, per encoding block 5 |
| Who is asking and where they are in buying | |
| The one thing they should take away | |
| Format and target length | |
| Target query or cluster, where relevant | |
| Facts, figures, and sources available | |
| Claims that may not be made | From encoding block 7 |
| Internal links in and out | |
| Call to action | |
| Approver | |

**A human approves the queue,** not each brief. What to talk about is strategy; how to structure a piece is not.

### 3. Gather facts (fleet)
Pull real material: the encoding, the client's own documentation, their support history, their reviews, and cited external sources. **Every statistic is either sourced in the piece or does not appear.** No figure is estimated into existence and no round number is invented for rhetorical effect.

### 4. Draft (fleet)
Against the brief and the encoding. Answer-first structure where the piece targets a query. Voice per block 2.

### 5. Self-check (fleet)
The fleet runs the QA checklist below and fixes what it can before a human sees the piece. A draft arriving at human review with em dashes in it is a process failure, not an editing task.

### 6. Human review (human)
**Nothing client-facing ships without it.** The reviewer checks:
- Is the claim true, and can it survive a phone call
- Is every statistic sourced
- Does it sound like the client, or like generic marketing wearing their colors
- Does it say something, or does it merely occupy the word count
- Does it contradict anything in the encoding
- Would the client's best customer find it useful

The last question is the one that catches technically correct, strategically worthless content, and it is the one only a human asks.

### 7. Client approval (human, where required)
Per encoding block 9. Anything making a claim about their capability, pricing, or results goes to their named approver. Track approval latency, because it is signal 4 on the account health scorecard.

### 8. Publish (fleet)
Publish, structure, mark up, link internally, verify live. Submit for indexing where relevant.

### 9. Distribute (fleet)
Per the agreed channels. Social, email, and internal distribution to the client's team, who are frequently the most valuable distribution channel and the most commonly forgotten one.

### 10. Record and report (fleet)
Log against the schedule. Volume delivered against volume committed is the guaranteed number and it goes in the Receipt.

---

## Fleet versus human

| Step | Fleet | Human |
|---|---|---|
| 1. Schedule | | **Human agrees.** It is the guarantee |
| 2. Briefs | Writes | **Human approves the queue.** Topic selection is strategy |
| 3. Facts | Yes | |
| 4. Draft | Yes | |
| 5. Self-check | Yes | |
| 6. Review | | **Human, every piece, without exception** |
| 7. Client approval | Routes and tracks | **Human owns the relationship** |
| 8. Publish | Yes | |
| 9. Distribute | Yes | |
| 10. Record and report | Yes | **Human reviews the Receipt** |

**Why review never fully automates:** the failure mode is not bad grammar, it is a plausible sentence that is not true, or a piece that is competent and pointless. Both pass every automated check. Both cost the client's credibility rather than ours, which is why a human owns it.

---

## Definition of done

**Per piece:**
- [ ] Brief existed before the draft
- [ ] Every statistic sourced in the piece
- [ ] QA checklist passed
- [ ] Human reviewed and approved
- [ ] Client approved, where required
- [ ] Live, correctly structured, marked up, internally linked
- [ ] Distributed per the agreed channels
- [ ] Logged against the schedule

**Per period:** committed volume delivered on the committed schedule. That is the guarantee. If volume is missed, work continues at no additional cost until the committed volume is delivered.

---

## QA checklist

**Copy rules, absolute**
- [ ] No em dashes
- [ ] No fabricated statistics. Every figure is sourced in the piece or is the client's own, attributed
- [ ] No client counts
- [ ] No client named beyond HALT Fire, Doughbrik's Wavers, and Kinetix
- [ ] No headcount, team size, or revenue claim
- [ ] Nothing that would not survive a phone call

**Encoding compliance**
- [ ] Never-use list checked, term by term
- [ ] Voice matches block 2
- [ ] Every price matches block 4, and no unpublished price appears
- [ ] No claim prohibited by block 7
- [ ] Competitors referenced only as block 6 permits, which is usually not by name
- [ ] Nothing promised that block 4 says they do not deliver

**Substance**
- [ ] Answers its brief's question, in the opening if it targets a query
- [ ] Every paragraph earns its place
- [ ] Specific rather than generic: numbers, names, conditions, ranges
- [ ] Says something the client's best customer does not already know
- [ ] Reads as written by someone who understands the business

**Technical**
- [ ] Headings structured, one H1
- [ ] Structured data present, valid, and matching visible content
- [ ] Internal links in and out
- [ ] Images have alt text and are compressed
- [ ] Links resolve
- [ ] Renders correctly on mobile
- [ ] Indexable, with no accidental noindex or canonical conflict

**Record**
- [ ] Logged against the schedule with its date
- [ ] Any client edit captured as preference data in encoding block 10

---

## Encoding hierarchy

**Automated:** fact gathering, drafting, self-check, publishing, distribution, logging.
**Template-driven:** brief structure, answer-first shapes, per-format structures.
**Checklist:** the QA block above, most of which the fleet now runs itself at step 5.
**Still human:** the schedule, topic queue approval, and review of every piece.

**Next to move:** brief writing is already fleet-produced; queue approval becomes semi-automated once the topic-selection rules can be stated as rules. **Review does not move.** Not because it cannot be attempted, but because publication under a client's name is where accountability lives, and the Foundation's fourth layer is not a throughput constraint to be optimized away.
