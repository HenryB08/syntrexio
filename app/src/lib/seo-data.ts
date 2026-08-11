// Per-route SEO source of truth. Site-wide schema lives in SITE_SCHEMA; per-route
// title/description/keywords/canonical/OG/Twitter and JSON-LD in PAGE_SEO.
// The visible FAQ accordions render from the FAQPage schema here (see seo.ts),
// so editing an answer updates both the page and its structured data.
//
// Company model: Syntrex is the AI infrastructure layer behind operating
// companies. One team runs a business's full digital and AI back end across four
// tracks: visibility, conversion, presence, and operations. Agent Workforce is
// the flagship. Pricing is published. The guarantee covers what we control.

export const ORIGIN = "https://syntrexio.com";

export const COMMON = {
  author: "Syntrex LLC",
  robots: "index, follow",
  geo_region: "US-FL",
  geo_place: "Windermere, Florida",
  geo_pos: "28.4961;-81.5348",
  icbm: "28.4961, -81.5348",
  og_site: "Syntrex LLC",
  og_locale: "en_US",
  og_type: "website",
  tw_card: "summary_large_image",
  og_image:
    "https://mcusercontent.com/d9f0645acdcd85eb1ee1a8067/images/001e76aa-2164-4473-bd50-d0a084913417.png",
} as const;

export type LdJson = Record<string, unknown>;

const ORG_ID = "https://syntrexio.com/#organization";

// A reusable Service node for one of the four tracks.
function trackService(name: string, description: string, price: string): LdJson {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: name,
    serviceType: name,
    provider: { "@id": ORG_ID },
    areaServed: { "@type": "Place", name: "Worldwide" },
    description: description,
    offers: {
      "@type": "Offer",
      price: price,
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: price,
        priceCurrency: "USD",
        unitText: "MONTH",
      },
    },
  };
}

const VISIBILITY_SERVICE = trackService(
  "Visibility",
  "AI search optimization (GEO), traditional SEO, content production and strategy, and social media systems, so the right buyers find you in search and in AI answers.",
  "2500",
);
const CONVERSION_SERVICE = trackService(
  "Conversion",
  "AI assistants and customer-facing chat, lead capture and follow-up systems, email systems and deliverability, and CRM buildout and management, so the leads you earn convert.",
  "2000",
);
const PRESENCE_SERVICE = trackService(
  "Presence",
  "Websites and web applications, e-commerce builds, brand identity and design systems, and imagery and campaign assets, so your site and brand match the business you run.",
  "1800",
);
const OPERATIONS_SERVICE = trackService(
  "Operations",
  "Workflow automation and system integration, custom internal AI tools, reporting and analytics dashboards, and the Agent Workforce flagship, so the repetitive work runs itself.",
  "2500",
);

// The Agent Workforce flagship, described as a distinct Service.
const AGENT_WORKFORCE_SERVICE: LdJson = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://syntrexio.com/#agent-workforce",
  name: "Agent Workforce",
  serviceType: "AI agent workforce installation and operation",
  provider: { "@id": ORG_ID },
  areaServed: { "@type": "Place", name: "Worldwide" },
  description:
    "Agent Workforce installs a company's internal fleet of AI agents to handle operational work it currently pays salaries for, including research, drafting, coordination, data entry, monitoring, scheduling, reporting, and first-pass analysis. It runs continuously with an approval trail and human control. It is not a chatbot. It is an operating layer inside the business. Install runs $35,000 to $95,000, then $5,000 to $12,000 a month to operate.",
  offers: {
    "@type": "Offer",
    priceCurrency: "USD",
    priceSpecification: {
      "@type": "PriceSpecification",
      minPrice: "5000",
      maxPrice: "12000",
      priceCurrency: "USD",
    },
  },
};

// Site-wide ProfessionalService describing the whole offering.
const PROFESSIONAL_SERVICE: LdJson = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://syntrexio.com/#professionalservice",
  name: "Syntrex",
  url: "https://syntrexio.com",
  image: COMMON.og_image,
  description:
    "The AI infrastructure layer behind operating companies. Syntrex runs a business's entire digital and AI back end across four tracks: visibility, conversion, presence, and operations. One team leads every project end to end and is accountable for the outcome.",
  provider: { "@id": ORG_ID },
  areaServed: { "@type": "Place", name: "Worldwide" },
  priceRange: "$1,800 to $12,500+ per month",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Syntrex services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Visibility" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Conversion" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Presence" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Operations" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Agent Workforce" } },
    ],
  },
};

export const SITE_SCHEMA: LdJson[] = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: "Syntrex",
    legalName: "Syntrex LLC",
    alternateName: "Syntrexio",
    url: "https://syntrexio.com",
    logo: COMMON.og_image,
    image: COMMON.og_image,
    description:
      "Syntrex is the AI infrastructure layer behind operating companies. One team runs a business's entire digital and AI back end across four tracks: visibility, conversion, presence, and operations. The flagship, Agent Workforce, installs and operates a company's internal fleet of AI agents. Pricing is published, and the guarantee covers what Syntrex controls.",
    email: "henry@syntrexio.com",
    founder: { "@type": "Person", name: "Henry Bello" },
    address: {
      "@type": "PostalAddress",
      streetAddress: "513 Main Street",
      addressLocality: "Windermere",
      addressRegion: "FL",
      postalCode: "34786",
      addressCountry: "US",
    },
    location: [
      {
        "@type": "Place",
        name: "Syntrex headquarters",
        address: {
          "@type": "PostalAddress",
          streetAddress: "513 Main Street",
          addressLocality: "Windermere",
          addressRegion: "FL",
          postalCode: "34786",
          addressCountry: "US",
        },
      },
      {
        "@type": "Place",
        name: "Syntrex Miami, Edgewater",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Miami",
          addressRegion: "FL",
          addressCountry: "US",
        },
      },
    ],
    areaServed: { "@type": "Place", name: "Worldwide" },
    sameAs: [
      "https://www.instagram.com/syntrexio",
      "https://www.tiktok.com/@syntrexio",
      "https://www.linkedin.com/company/syntrexco",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Syntrex",
    url: "https://syntrexio.com",
    publisher: { "@id": ORG_ID },
  },
];

export interface PageSeo {
  title: string;
  description: string;
  keywords: string;
  ogTitle: string;
  ogDescription: string;
  ogImage?: string;
  canonical: string;
  schema: LdJson[];
}

function crumb(items: [string, string][]): LdJson {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map(([name, item], i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: name,
      item: item,
    })),
  };
}

export const PAGE_SEO: Record<string, PageSeo> = {
  "/": {
    title: "Syntrex | The AI Infrastructure Layer for Companies",
    description:
      "Syntrex is the AI infrastructure layer behind operating companies. One team runs your visibility, conversion, presence, and operations. Published pricing.",
    keywords:
      "AI infrastructure, AI agency alternative, agentic AI, AI agents for business, AI search optimization, GEO, done-for-you AI, Agent Workforce, Syntrex",
    ogTitle: "Syntrex | The AI infrastructure layer behind operating companies",
    ogDescription:
      "One team runs your entire digital and AI back end across four tracks: visibility, conversion, presence, and operations. Nobody owns the outcome. We do.",
    canonical: "https://syntrexio.com/",
    schema: [
      PROFESSIONAL_SERVICE,
      AGENT_WORKFORCE_SERVICE,
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What exactly does Syntrex do?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Syntrex is the AI infrastructure layer behind operating companies. We run a business's entire digital and AI back end across four tracks: visibility, conversion, presence, and operations. One team leads every project end to end and is accountable for the result.",
            },
          },
          {
            "@type": "Question",
            name: "Do I have to buy everything, or can I start with one thing?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "You can start with one track or a single build. Retainers cover visibility, conversion, presence, or operations on their own, and one-time builds are starting prices that scale with scope, from a single page site at $1,500. Most companies grow into Full Stack, which runs all four tracks for less than they cost separately.",
            },
          },
          {
            "@type": "Question",
            name: "How is this different from hiring an agency?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "An agency sells you a team and charges for the payroll behind it. Syntrex does not have that team. An orchestrated fleet of AI agents produces the work, humans direct and own it, and one person stays accountable for the outcome. You get the output, not the overhead.",
            },
          },
          {
            "@type": "Question",
            name: "How can you be cheaper than an agency?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Agencies charge for the team behind the work, and we do not have one. There is no payroll, no offshore invoice, no account management layer, and no office to fund. The price reflects the output, not the overhead.",
            },
          },
          {
            "@type": "Question",
            name: "Who actually does the work?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "An orchestrated fleet of AI agents produces the work in parallel across all four tracks. Humans at Syntrex direct the fleet, review the output, and own every outcome. Every client is encoded once, and the system gets faster and more accurate with each engagement.",
            },
          },
          {
            "@type": "Question",
            name: "Do humans review the work?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Everything a client sees passes a human first. The agent fleet produces the work, and a person directs, reviews, and signs off before anything ships.",
            },
          },
          {
            "@type": "Question",
            name: "What is the Agent Workforce?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Agent Workforce is our flagship. It installs a company's internal fleet of AI agents to handle operational work it pays salaries for, such as research, drafting, coordination, data entry, monitoring, scheduling, reporting, and first-pass analysis. It runs continuously with an approval trail and human control. It is not a chatbot. It is an operating layer inside the business.",
            },
          },
          {
            "@type": "Question",
            name: "What is the guarantee and what does it cover?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We guarantee what we control: AI search citation presence for agreed queries, ranking movement for agreed terms, content volume and schedule, hours removed from an agreed workflow, agent task volume per period, and delivery against agreed spec. Each guarantee names one metric in writing, a documented baseline, a 90 day window, and one source of truth. If the metric is not hit, we keep working at no additional cost until it is. The window pauses if you miss an agreed, dated condition, such as approving submitted work within five business days, granting the systems and accounts named at kickoff, providing information only you hold, or keeping one named point of contact. A pause stops the clock rather than voiding the guarantee, and it is recorded on that month's Receipt with its start and end dates.",
            },
          },
          {
            "@type": "Question",
            name: "What is not covered by the guarantee?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We do not guarantee revenue, closed deals, or conversion rate. Those depend on your sales team, pricing, product, and market, which we do not control. The remedy for a missed guarantee is our labor, never a refund.",
            },
          },
          {
            "@type": "Question",
            name: "What is the diagnostic, and is it really credited?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The AI Systems Diagnostic is a $3,500 engagement that reviews your systems and delivers a build plan you own. It is fully credited toward any engagement you start within 60 days, so if you move forward it costs you nothing on top. There is also a free self-qualifying diagnostic on the site that maps where to start in about a minute.",
            },
          },
          {
            "@type": "Question",
            name: "How fast do you start?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Most engagements begin within days of the diagnostic. Once your company is encoded, meaning brand, offer, and rules, the agent fleet can produce work across all four tracks in parallel.",
            },
          },
          {
            "@type": "Question",
            name: "What happens in the first week?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We encode your company once, set the baseline for whatever metric we are guaranteeing, and put the first work into production. You see output in the first week, not a discovery deck.",
            },
          },
          {
            "@type": "Question",
            name: "Do I own what you build?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Deliverables we build and hand off, such as a website, brand system, or custom tool, are yours once paid for in full. Your brand, content, and customer data always belong to you.",
            },
          },
          {
            "@type": "Question",
            name: "What if I need something not on the list?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "If you need something not listed, we build it. The agent fleet makes custom work economically viable in a way it never was for a headcount agency, so a one-off tool or system is no longer a budget line you have to justify.",
            },
          },
          {
            "@type": "Question",
            name: "How do I get started?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Start with the diagnostic. It maps what is not working across the four tracks and names the services and starting point that fit, in about a minute. Or email henry@syntrexio.com.",
            },
          },
        ],
      },
      crumb([["Home", "https://syntrexio.com/"]]),
    ],
    ogImage: COMMON.og_image,
  },
  "/about": {
    title: "About Syntrex | One Team, Four Tracks, One Owner",
    description:
      "Syntrex runs the full digital and AI back end for operating companies. Founded by Henry Bello, proven with HALT Fire. One team, accountable for the outcome.",
    keywords:
      "about Syntrex, Henry Bello, AI infrastructure company, HALT Fire, Doughbrik's Wavers, AI agent fleet, Miami Florida, Windermere Florida",
    ogTitle: "About Syntrex | The AI infrastructure layer behind operating companies",
    ogDescription:
      "Founded by Henry Bello and proven with HALT Fire. An orchestrated fleet of AI agents produces the work; humans direct, review, and own every outcome.",
    canonical: "https://syntrexio.com/about/",
    schema: [
      crumb([
        ["Home", "https://syntrexio.com/"],
        ["About", "https://syntrexio.com/about/"],
      ]),
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is Syntrex?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Syntrex is the AI infrastructure layer behind operating companies. It runs a business's full digital and AI back end across four tracks, visibility, conversion, presence, and operations, with one team accountable for the outcome.",
            },
          },
          {
            "@type": "Question",
            name: "Who founded Syntrex?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Syntrex was founded by Henry Bello. It started by building the full digital and AI stack for HALT Fire, an industrial fire suppression company, where over three months the work grew search clicks 689% to 505 and impressions 1,608% to 22.9K, and returned more than ten hours a week to the team.",
            },
          },
          {
            "@type": "Question",
            name: "Who does the work?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "An orchestrated fleet of AI agents produces the work in parallel. Humans direct, review, and own every outcome. Every client is encoded once, and the system gets faster and more accurate with each engagement.",
            },
          },
          {
            "@type": "Question",
            name: "Where is Syntrex located?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Syntrex is headquartered in Windermere, Florida, at 513 Main Street, with a second location in Miami, Florida, in the Edgewater neighborhood, and works with operating companies worldwide. Everything starts with the diagnostic or an email to henry@syntrexio.com.",
            },
          },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "Person",
        "@id": "https://syntrexio.com/about#henry-bello",
        name: "Henry Bello",
        jobTitle: "Founder & CEO",
        worksFor: { "@id": ORG_ID },
        url: "https://syntrexio.com/about/",
      },
    ],
    ogImage: COMMON.og_image,
  },
  "/services": {
    title: "Services | 16 AI and Digital Services by Syntrex",
    description:
      "Sixteen services across four tracks: visibility, conversion, presence, and operations, plus Agent Workforce. One team, published pricing.",
    keywords:
      "AI services, GEO, AI search optimization, SEO, content, social, AI chat, lead capture, CRM, web design, e-commerce, brand, automation, Agent Workforce, Syntrex",
    ogTitle: "Services | Sixteen services across four tracks | Syntrex",
    ogDescription:
      "Visibility, conversion, presence, and operations, plus Agent Workforce. Start with one service or run all four tracks.",
    canonical: "https://syntrexio.com/services/",
    schema: [
      VISIBILITY_SERVICE,
      CONVERSION_SERVICE,
      PRESENCE_SERVICE,
      OPERATIONS_SERVICE,
      AGENT_WORKFORCE_SERVICE,
      crumb([
        ["Home", "https://syntrexio.com/"],
        ["Services", "https://syntrexio.com/services/"],
      ]),
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What are the four tracks?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Syntrex runs four tracks: visibility (AI search, SEO, content, social), conversion (AI chat, lead capture, email, CRM), presence (websites, e-commerce, brand, creative), and operations (automation, custom tools, dashboards, and Agent Workforce).",
            },
          },
          {
            "@type": "Question",
            name: "Can I buy one service, or do I need the whole stack?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "You can start with a single service, a single track retainer, or a one-time build. Full Stack runs all four tracks for $7,500 a month, less than the $8,800 they cost separately.",
            },
          },
          {
            "@type": "Question",
            name: "What is the Agent Workforce?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Agent Workforce installs a company's internal fleet of AI agents to run operational work continuously, with an approval trail and human control. It sits beyond the four tracks as its own engagement. It is not a chatbot. It is an operating layer inside the business.",
            },
          },
          {
            "@type": "Question",
            name: "Do you build custom work?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. If you need something not listed, we build it. The agent fleet makes custom work economically viable in a way it never was for a headcount agency.",
            },
          },
          {
            "@type": "Question",
            name: "How much does each service cost?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Every price is published on the pricing page. Track retainers run from $1,800 to $2,500 a month, Full Stack is $7,500 a month, and one-time builds start at $3,500.",
            },
          },
        ],
      },
    ],
    ogImage: COMMON.og_image,
  },
  "/pricing": {
    title: "Pricing | Published Rates for Every Service | Syntrex",
    description:
      "Every price published. Retainers from $1,800/mo, Full Stack $7,500/mo, Agent Workforce from $5,000/mo, and one-time builds from $3,500. Diagnostic is $3,500, credited.",
    keywords:
      "Syntrex pricing, AI services pricing, retainer pricing, Full Stack, Agent Workforce pricing, website build cost, AI Systems Diagnostic, published pricing",
    ogTitle: "Pricing | Published, not quoted | Syntrex",
    ogDescription:
      "Retainers from $1,800/mo, Full Stack $7,500/mo, Agent Workforce from $5,000/mo, builds from $3,500. The $3,500 diagnostic is fully credited.",
    canonical: "https://syntrexio.com/pricing/",
    schema: [
      PROFESSIONAL_SERVICE,
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "AI Systems Diagnostic",
        serviceType: "AI systems review and build plan",
        provider: { "@id": ORG_ID },
        areaServed: { "@type": "Place", name: "Worldwide" },
        description:
          "A full read of your systems and a build plan you own, fully credited toward any engagement started within 60 days.",
        offers: { "@type": "Offer", price: "3500", priceCurrency: "USD" },
      },
      crumb([
        ["Home", "https://syntrexio.com/"],
        ["Pricing", "https://syntrexio.com/pricing/"],
      ]),
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How much does Syntrex cost?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Retainers are $2,500 for visibility, $2,000 for conversion, $1,800 for presence, and $2,500 for operations a month. Full Stack is $7,500 a month, below the $8,800 the four tracks cost separately. Agent Workforce is $5,000 to $12,000 a month to operate. Every price is published.",
            },
          },
          {
            "@type": "Question",
            name: "What is the AI Systems Diagnostic, and is it credited?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The AI Systems Diagnostic is $3,500 and is fully credited toward any engagement you start within 60 days, so if you move forward it costs you nothing on top.",
            },
          },
          {
            "@type": "Question",
            name: "Why is Full Stack the best value?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Full Stack is $7,500 a month and includes all four tracks, which cost $8,800 when bought separately. That is where most companies land.",
            },
          },
          {
            "@type": "Question",
            name: "What do one-time builds cost?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Websites start at $4,500, six to twelve page sites at $7,500, e-commerce at $11,000, brand identity at $3,500, AI assistant deployment at $4,000, CRM buildout at $4,500, automation at $6,500 per workflow, and custom AI tools at $9,000. Each is shown against its market rate.",
            },
          },
          {
            "@type": "Question",
            name: "What are the payment terms?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Builds are a 40% deposit with the balance on milestones. Retainers are billed on the 1st of the month. Operators running multiple brands get 10% off the second brand and 15% off everything beyond.",
            },
          },
        ],
      },
    ],
    ogImage: COMMON.og_image,
  },
  "/diagnostic": {
    title: "AI Systems Diagnostic | Find Where to Start | Syntrex",
    description:
      "Answer six questions and see which services fit, what they cost, and where to start. Free, no gate. The full AI Systems Diagnostic is $3,500, fully credited.",
    keywords:
      "AI systems diagnostic, business AI assessment, where to start with AI, AI readiness, self-qualifying tool, Syntrex diagnostic",
    ogTitle: "AI Systems Diagnostic | Find out exactly where to start | Syntrex",
    ogDescription:
      "Six questions, about a minute. It maps what is not working across the four tracks and names the services and starting point that fit. See the result before you give us anything.",
    canonical: "https://syntrexio.com/diagnostic/",
    schema: [
      crumb([
        ["Home", "https://syntrexio.com/"],
        ["Diagnostic", "https://syntrexio.com/diagnostic/"],
      ]),
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": "https://syntrexio.com/diagnostic#service",
        name: "AI Systems Diagnostic",
        url: "https://syntrexio.com/diagnostic/",
        serviceType: "AI systems review and build plan",
        provider: { "@id": ORG_ID },
        areaServed: { "@type": "Place", name: "Worldwide" },
        description:
          "A full read of your systems and a build plan you own. Fully credited toward any engagement started within 60 days. A free self-qualifying version on the site names where to start in about a minute.",
        offers: { "@type": "Offer", price: "3500", priceCurrency: "USD" },
      },
    ],
    ogImage: COMMON.og_image,
  },
  "/customers": {
    title: "Work | Syntrex Client Results",
    description:
      "Verified results from Syntrex engagements: HALT Fire search clicks up 689% to 505 and impressions up 1,608% to 22.9K in three months, plus 10+ hours a week returned.",
    keywords:
      "Syntrex work, case studies, HALT Fire, Doughbrik's Wavers, Karlo Financial, Kinetix, AI results, client results",
    ogTitle: "Work | What running the back end end to end produces | Syntrex",
    ogDescription:
      "HALT Fire: search clicks up 689% to 505 and impressions up 1,608% to 22.9K in three months, plus 10+ hours a week returned. Kinetix is a technology partner.",
    canonical: "https://syntrexio.com/customers/",
    schema: [
      crumb([
        ["Home", "https://syntrexio.com/"],
        ["Work", "https://syntrexio.com/customers/"],
      ]),
      {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Syntrex work",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "HALT Fire" },
          { "@type": "ListItem", position: 2, name: "Doughbrik's Wavers" },
          { "@type": "ListItem", position: 3, name: "Karlo Financial" },
          { "@type": "ListItem", position: 4, name: "Kinetix" },
        ],
      },
    ],
    ogImage: COMMON.og_image,
  },
  "/news": {
    title: "News | Syntrex",
    description:
      "Announcements and updates from Syntrex, the AI infrastructure layer behind operating companies.",
    keywords: "Syntrex news, Agent Workforce, AI infrastructure, company updates",
    ogTitle: "News | Syntrex",
    ogDescription:
      "Announcements and updates from the team running the back end for operating companies.",
    canonical: "https://syntrexio.com/news/",
    schema: [
      crumb([
        ["Home", "https://syntrexio.com/"],
        ["News", "https://syntrexio.com/news/"],
      ]),
      {
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        headline: "Syntrex, the AI infrastructure layer behind operating companies",
        datePublished: "2026-08-04",
        author: { "@id": ORG_ID },
        publisher: { "@id": ORG_ID },
        description:
          "One team runs a company's entire digital and AI back end across four tracks: visibility, conversion, presence, and operations.",
        url: "https://syntrexio.com/news/",
      },
      {
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        headline: "Introducing Agent Workforce",
        datePublished: "2026-08-04",
        author: { "@id": ORG_ID },
        publisher: { "@id": ORG_ID },
        description:
          "The flagship: an installed fleet of AI agents that runs the operational work a company pays salaries for, continuously, with a human in control.",
        url: "https://syntrexio.com/news/",
      },
      {
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        headline: "Every price, published",
        datePublished: "2026-08-04",
        author: { "@id": ORG_ID },
        publisher: { "@id": ORG_ID },
        description:
          "Retainers, builds, and Agent Workforce, all on the site. No discovery call to find out what it costs.",
        url: "https://syntrexio.com/news/",
      },
    ],
    ogImage: COMMON.og_image,
  },
  "/contact": {
    title: "Contact Syntrex",
    description:
      "Tell Syntrex about your business and what you want to fix. We reply within 24 hours. Or run the free diagnostic to see where to start.",
    keywords: "contact Syntrex, Syntrex email, get started, AI infrastructure, diagnostic",
    ogTitle: "Contact Syntrex | Tell us what you need",
    ogDescription:
      "Send a message about your business and what you want to fix. We reply within 24 hours. Or run the free diagnostic to see where to start.",
    canonical: "https://syntrexio.com/contact/",
    schema: [
      crumb([
        ["Home", "https://syntrexio.com/"],
        ["Contact", "https://syntrexio.com/contact/"],
      ]),
    ],
    ogImage: COMMON.og_image,
  },
  "/referral": {
    title: "Syntrex | Referral Program, Earn 10%",
    description:
      "Introduce a business to Syntrex. If they become a client you earn 10% of their first project or their first three months of retainer, as cash or as credit against your own work. Credit stacks and never expires. Paid within 15 days of the referred client onboarding and paying.",
    keywords:
      "Syntrex referral program, agency referral program, refer a business, 10% referral fee, referral credit, partner referral, AI infrastructure referral",
    ogTitle: "Syntrex Referral Program | Earn 10%, Cash or Credit",
    ogDescription:
      "Introduce a business to Syntrex. If they become a client you earn 10% of their first project or first three months of retainer, as cash or credit against your own work.",
    canonical: "https://syntrexio.com/referral/",
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://syntrexio.com/" },
          {
            "@type": "ListItem",
            position: 2,
            name: "Referral Program",
            item: "https://syntrexio.com/referral/",
          },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": "https://syntrexio.com/referral#webpage",
        name: "Syntrex Referral Program",
        url: "https://syntrexio.com/referral/",
        description:
          "Introduce a business to Syntrex. If they become a client you earn 10% of their first project or their first three months of retainer, as cash or as credit against your own work.",
        publisher: { "@id": "https://syntrexio.com/#organization" },
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How much does the Syntrex referral program pay?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "10% of the referred client's first project, or 10% of their first three months of retainer. On a $7,500 website build that is $750. On a Full Stack retainer at $7,500 a month that is $2,250. There is no cap on how many referrals you can make or on how much you can earn.",
            },
          },
          {
            "@type": "Question",
            name: "When do I get paid for a referral?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Within 15 days of the referred client onboarding and paying their first invoice. Not on signature and not on first contact. We tell you what happened either way, including when a referral does not go ahead.",
            },
          },
          {
            "@type": "Question",
            name: "Can I take the referral fee as credit instead of cash?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, and most people do. Credit applies to any Syntrex work, whether that is a retainer, a build, or a diagnostic. It stacks, it never expires, and your balance shows on every invoice. Enough referrals covers a build of your own outright. Once you elect credit it is not convertible back to cash.",
            },
          },
          {
            "@type": "Question",
            name: "Do I have to be a Syntrex client to refer someone?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. Anyone can refer: current clients, past clients, partners, advisors, and people who have never bought anything from us. There is no application and no membership step.",
            },
          },
          {
            "@type": "Question",
            name: "Does the referred business pay more because of my fee?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. Syntrex pricing is published and a referred client pays exactly what anyone else pays for the same work. The fee comes out of our side, not theirs.",
            },
          },
          {
            "@type": "Question",
            name: "How long does referral attribution last?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "12 months from the introduction. If a business you introduced signs eleven months later, the fee is still owed. Attribution belongs to whoever introduced us first, recorded at the time of the introduction.",
            },
          },
          {
            "@type": "Question",
            name: "I run an agency. Is there a better arrangement than referring?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Agencies and services firms can white label Syntrex builds under their own brand at their own markup. You keep the client relationship, we own delivery and stay invisible. It is worth considerably more than a one-time 10%. Mention it in the referral form and we will explain how it works.",
            },
          },
        ],
      },
    ],
    ogImage:
      "https://mcusercontent.com/d9f0645acdcd85eb1ee1a8067/images/001e76aa-2164-4473-bd50-d0a084913417.png",
  },
  "/privacy": {
    title: "Privacy Policy | Syntrex",
    description:
      "How Syntrex collects, uses, and protects your information across the site, chatbot, forms, analytics, and our services, including your GDPR and CCPA rights.",
    keywords: "Syntrex privacy policy, data protection, GDPR, CCPA, AI processing, cookies",
    ogTitle: "Privacy Policy | Syntrex",
    ogDescription:
      "How Syntrex collects, uses, and protects your information. Services, chatbot, forms, analytics, cookies, and your privacy rights.",
    canonical: "https://syntrexio.com/privacy/",
    schema: [
      crumb([
        ["Home", "https://syntrexio.com/"],
        ["Privacy Policy", "https://syntrexio.com/privacy/"],
      ]),
    ],
    ogImage: COMMON.og_image,
  },
  "/terms": {
    title: "Terms of Use | Syntrex",
    description:
      "The terms that govern your use of syntrexio.com and Syntrex services: retainers, builds, Agent Workforce, the diagnostic, the guarantee, and governing law.",
    keywords: "Syntrex terms of use, terms and conditions, guarantee, governing law",
    ogTitle: "Terms of Use | Syntrex",
    ogDescription:
      "The terms that govern your use of syntrexio.com and Syntrex services across visibility, conversion, presence, and operations.",
    canonical: "https://syntrexio.com/terms/",
    schema: [
      crumb([
        ["Home", "https://syntrexio.com/"],
        ["Terms of Use", "https://syntrexio.com/terms/"],
      ]),
    ],
    ogImage: COMMON.og_image,
  },
};
