# SERVICE PAGES PLAN

**For approval before building.**

---

## 1. URL STRUCTURE

**Pattern:** `/services/service-name.html`

GitHub Pages serves static files from folders. The cleanest approach that actually works:

```
/services/                    → services hub (index.html inside folder)
/services/ai-chatbots.html
/services/workflow-automation.html
/services/lead-generation.html
/services/ecommerce.html
/services/ai-content.html
/services/custom-ai-tools.html
/services/system-integration.html
/services/website-design.html
/services/brand-digital-presence.html
/services/ai-strategy.html
/services/reporting-analytics.html
/services/ai-business-planning.html
```

The current `services.html` in the root becomes a redirect to `/services/` (a one-line meta refresh) so no existing links 404. The hub lives at `/services/index.html`.

**Why not folder-per-service (`/services/ai-chatbots/index.html`)?** It works on GitHub Pages but creates 12 extra folders with one file each. Flat `.html` files in a `/services/` folder are simpler, equally crawlable, and the URLs are clean enough: `syntrexio.com/services/ai-chatbots.html`.

---

## 2. PER-PAGE KEYWORDS AND TITLES

| Service | Primary keyword | Page title |
|---------|----------------|------------|
| AI Chatbots | custom AI chatbot for business | Custom AI Chatbots for Business \| Syntrex |
| Lead Generation & Growth | AI lead generation system | AI Lead Generation Systems \| Syntrex |
| Ecommerce & Online Stores | ecommerce website development | Ecommerce Website Development \| Syntrex |
| Workflow Automation | business workflow automation | Business Workflow Automation \| Syntrex |
| Custom AI Tools | custom AI tools for business | Custom AI Tools for Business \| Syntrex |
| System Integration | business system integration | Business System Integration \| Syntrex |
| Website Design & Development | custom website design | Custom Website Design \| Syntrex |
| Brand & Digital Presence | digital presence buildout | Digital Presence Buildout \| Syntrex |
| AI Content & Social Media | AI content creation for business | AI Content Creation for Business \| Syntrex |
| AI Strategy & Consulting | AI strategy consulting | AI Strategy and Consulting \| Syntrex |
| Reporting & Analytics | AI reporting and analytics | AI Reporting and Analytics \| Syntrex |
| AI Business Planning | AI business planning tools | AI Business Planning Tools \| Syntrex |

Titles are short (under 55 chars), keyword-forward, branded with "Syntrex" (not "Syntrex LLC" to save chars).

---

## 3. PER-PAGE CONTENT TEMPLATE

Every page will contain, in this order:

1. **Head:** unique title, meta description (150 chars), canonical (`https://syntrexio.com/services/service-name.html`), OG/Twitter tags, robots.
2. **Shared shell:** same nav, footer, chatbot, CSS (`styles.css`), scripts as all other pages.
3. **Breadcrumb:** Home > Services > [Service Name], with BreadcrumbList schema.
4. **Hero section:** page-header style (`.pgh` class, matching other subpages). H1 = service name. Short sub-line naming the problem it solves.
5. **What you get:** 5-7 specific deliverables, bulleted. Unique to this service.
6. **How it works:** 3-4 steps, service-specific. Short.
7. **Who this is for:** 3-4 concrete business types or scenarios. Varied across pages.
8. **Why it matters:** the outcome. 2-3 sentences. The "custom, you own it" angle phrased differently per page.
9. **Proof:** only where genuine. AI Chatbots and Workflow Automation can cite HALT! Fire. Content and automation pages can cite Doughbrik's. Others get no forced proof, just the general credibility signal.
10. **FAQ:** 3-5 unique Q&As with FAQPage schema.
11. **CTA:** "Tell us what you need" with email link. Consistent but not identical copy across pages.
12. **Related services:** 2-3 links to related pages within the same or adjacent bucket.
13. **Schema:** Service type schema linked to existing LocalBusiness entity.

**Target: 450-650 words of visible body copy per page.** Enough for depth, not so much that it becomes filler.

---

## 4. NAV PLAN

**Desktop:** Replace the current flat "Services" link with a dropdown. On hover/click, a panel opens showing the 4 buckets with their services listed underneath:

```
Services ▾
┌─────────────────────────────────────────────────────────┐
│ Get More Customers    │ Save Your Team Hours            │
│  AI Chatbots          │  Workflow Automation             │
│  Lead Generation      │  Custom AI Tools                 │
│  Ecommerce            │  System Integration              │
│                       │                                  │
│ Build Your Presence   │ Know What's Working              │
│  Website Design       │  AI Strategy & Consulting        │
│  Brand & Digital      │  Reporting & Analytics           │
│  AI Content           │  AI Business Planning            │
└─────────────────────────────────────────────────────────┘
```

The dropdown header "Services" links to the hub (`/services/`). Each service links to its page. Styled to match the existing nav aesthetic (dark frosted glass, uppercase labels, same font).

**Mobile:** The hamburger menu gets a "Services" section that expands to show the same 12 links, grouped by bucket, when tapped. No dropdown overlay on mobile, just an inline expandable list.

---

## 5. HUB PLAN

`/services/index.html` becomes the services overview. Structure:

- Hero: same page-header as current services.html ("Everything we build, built for you.")
- 4 bucket sections, each with:
  - Bucket label (e.g., "Get More Customers")
  - 3 service cards, each with: title, 1-2 sentence summary, "Learn more" link to the full page
- CTA at the bottom
- SYN chatbot strip

This replaces the current detailed cards with shorter summary cards that link out.

---

## 6. INTERNAL LINK UPDATES

Links that currently point to `services.html#anchor` and need updating:

| File | Count | Current target | New target |
|------|-------|----------------|------------|
| index.html | 12 | `services.html#ai-chatbots` etc. | `/services/ai-chatbots.html` etc. |
| services.html (root) | — | becomes redirect | meta refresh to `/services/` |

Other pages (pricing, about, contact, etc.) link to `services.html` without anchors. Those update to `/services/`.

---

## 7. SEO PLUMBING

- `sitemap.xml`: add 13 new URLs (hub + 12 pages), keep existing pages.
- `llms.txt`: update services section with individual page URLs.
- `robots.txt`: no changes needed (already allows all).
- JSON-LD per page: Service schema + BreadcrumbList + FAQPage.
- Canonical per page: `https://syntrexio.com/services/service-name.html`.

---

## 8. OPTIONAL: EMAIL-BASED ENTRY OFFER

A "Free Automation Audit" delivered by email fits the email-only model. The offer: describe your business and biggest time sink in a short email, and we send back a written assessment of where automation would help most and what we'd recommend building. No meetings, no pressure, just a useful document.

This could appear as a secondary CTA on every service page: "Not sure where to start? Email us for a free automation audit." It's low-commitment, gives the visitor something concrete, and generates qualified leads.

**Flagging for your decision. Will not build without approval.**

---

## 9. BUILD ORDER

1. Create `/services/` directory.
2. Build AI Chatbots page as the template (Phase 2, approval gate).
3. After approval, build remaining 11 pages.
4. Build the hub (`/services/index.html`).
5. Add nav dropdown (desktop + mobile).
6. Update all internal links sitewide.
7. Root `services.html` becomes redirect.
8. Update sitemap, llms.txt, schema.
9. Verify everything.

---

**This is the approval gate. Waiting for your review before building anything.**
