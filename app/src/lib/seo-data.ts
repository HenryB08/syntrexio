// Per-route SEO source of truth. Site-wide schema lives in SITE_SCHEMA; per-route
// title/description/keywords/canonical/OG/Twitter and JSON-LD in PAGE_SEO.
// The visible FAQ accordions render from the FAQPage schema here (see seo.ts),
// so editing an answer updates both the page and its structured data.
//
// Company model: Syntrex builds SYN. SYN ships in two products, SYN Growth
// (launching soon, printed launch pricing) and SYN Workspace (early access, waitlist,
// no price). Presence/Brand are not sold on these surfaces.

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
  og_image: "https://mcusercontent.com/d9f0645acdcd85eb1ee1a8067/images/001e76aa-2164-4473-bd50-d0a084913417.png",
} as const;

export type LdJson = Record<string, unknown>;

export const SITE_SCHEMA: LdJson[] = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://syntrexio.com/#organization",
    "name": "Syntrex",
    "legalName": "Syntrex LLC",
    "alternateName": "Syntrexio",
    "url": "https://syntrexio.com",
    "logo": "https://mcusercontent.com/d9f0645acdcd85eb1ee1a8067/images/001e76aa-2164-4473-bd50-d0a084913417.png",
    "image": "https://mcusercontent.com/d9f0645acdcd85eb1ee1a8067/images/001e76aa-2164-4473-bd50-d0a084913417.png",
    "description": "Syntrex builds SYN, one AI platform in two products. SYN Growth answers and books your customers automatically and is launching soon. SYN Workspace, in early access, runs your calendar, content, assets, and automations. Syntrex started as a hands-on digital agency and productized what it learned building for real businesses.",
    "email": "henry@syntrexio.com",
    "founder": { "@type": "Person", "name": "Henry Bello" },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "513 Main Street",
      "addressLocality": "Windermere",
      "addressRegion": "FL",
      "postalCode": "34786",
      "addressCountry": "US"
    },
    "areaServed": { "@type": "Place", "name": "Worldwide" },
    "sameAs": [
      "https://www.instagram.com/syntrexio",
      "https://www.tiktok.com/@syntrexio",
      "https://www.linkedin.com/company/syntrexco"
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Syntrex",
    "url": "https://syntrexio.com",
    "publisher": { "@id": "https://syntrexio.com/#organization" }
  }
];

export interface PageSeo {
  title: string; description: string; keywords: string;
  ogTitle: string; ogDescription: string; ogImage?: string;
  canonical: string; schema: LdJson[];
}

// SYN Growth: launching soon, printed launch pricing. One-time $497 setup, then a
// monthly plan. Guarantee attached.
const SYN_GROWTH_PRODUCT: LdJson = {
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": "https://syntrexio.com/#syn-growth",
  "name": "SYN Growth",
  "brand": { "@type": "Brand", "name": "SYN" },
  "url": "https://syntrexio.com/pricing/",
  "description": "The guaranteed SYN product, launching soon. It answers every call, chat, and form in seconds 24/7, captures every missed call, follows up until the customer books, and proves recovered value each month in the Receipt. Launch pricing: one-time setup of $497, then $349 a month for Growth Core or $549 a month for Growth Pro with AI voice answering. The Free Leak Audit is available today as the pre-launch entry point.",
  "releaseDate": "2026",
  "offers": [
    {
      "@type": "Offer",
      "name": "Setup",
      "price": "497",
      "priceCurrency": "USD",
      "availability": "https://schema.org/PreOrder",
      "description": "One-time setup at launch pricing. Charged once, not monthly."
    },
    {
      "@type": "Offer",
      "name": "Growth Core",
      "price": "349",
      "priceCurrency": "USD",
      "description": "Per month after the one-time $497 setup. AI web chat, SMS, missed-call text-back, follow-up, booking, and the monthly Receipt.",
      "availability": "https://schema.org/PreOrder"
    },
    {
      "@type": "Offer",
      "name": "Growth Pro",
      "price": "549",
      "priceCurrency": "USD",
      "description": "Per month after the one-time $497 setup. Everything in Growth Core plus AI voice answering.",
      "availability": "https://schema.org/PreOrder"
    }
  ]
};

// SYN Workspace: early access, waitlist, no printed price.
const SYN_WORKSPACE_PRODUCT: LdJson = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": "https://syntrexio.com/#syn-workspace",
  "name": "SYN Workspace",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "url": "https://syn.syntrexio.com",
  "publisher": { "@id": "https://syntrexio.com/#organization" },
  "description": "The AI business workspace. Encode your brand once, and SYN runs your calendar, content, brand assets, builds, and automations with an approval trail before anything reaches a customer. In early access.",
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/PreOrder",
    "url": "https://syn.syntrexio.com",
    "description": "Early access by waitlist."
  }
};

export const PAGE_SEO: Record<string, PageSeo> = {
  "/": {
    "title": "Syntrex | SYN Growth & SYN Workspace",
    "description": "Syntrex is building SYN, one AI platform in two products. SYN Growth answers and books your customers automatically. SYN Workspace runs your calendar, content, and operations. Both launching soon. Start today with a free audit of what missed calls cost you.",
    "keywords": "AI receptionist, missed call text back, AI answering service for business, AI business workspace, business automation platform, SYN Growth, SYN Workspace, Syntrex, lead capture system, AI tools for small business",
    "ogTitle": "Syntrex is building SYN | AI for your customers and your operations",
    "ogDescription": "One AI platform, two products. SYN Growth answers and books your customers automatically. SYN Workspace runs your calendar, content, and operations. Both launching soon.",
    "canonical": "https://syntrexio.com/",
    "schema": [
      SYN_GROWTH_PRODUCT,
      SYN_WORKSPACE_PRODUCT,
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is SYN?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "SYN is the product Syntrex builds. It ships in two forms: SYN Growth, the installed and guaranteed system that answers every call, chat, and form in seconds, captures every missed call, follows up until the customer books, and proves recovered value each month in the Receipt; and SYN Workspace, the AI business workspace in early access that runs your calendar, content, brand assets, builds, and automations from one encoded brand."
            }
          },
          {
            "@type": "Question",
            "name": "What is the difference between SYN Growth and SYN Workspace?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "SYN Growth captures the customers you are losing: calls, chats, and forms answered in seconds, missed calls recovered, follow-up until booked, with the value proven monthly in the Receipt. SYN Workspace runs the rest of the business: encode your brand once and SYN handles your calendar, content, assets, builds, and automations. Both are in development; Growth is launching soon and Workspace is in early access. Growth is the door, Workspace is where you grow."
            }
          },
          {
            "@type": "Question",
            "name": "What is an AI receptionist?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "An AI receptionist answers your calls, chats, and forms automatically, around the clock, so no customer reaches a voicemail or an empty inbox. SYN Growth is more than a phone AI receptionist: it covers every channel, texts back missed calls, follows up until the customer books, and reports the value it recovered each month. It is launching soon."
            }
          },
          {
            "@type": "Question",
            "name": "How much does an AI answering service cost?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "SYN Growth launch pricing is a one-time $497 setup, then $349 a month for Growth Core or $549 a month for Growth Pro, which adds AI voice answering. The $497 is a one-time setup, not the total. For comparison, a part-time human answering a fraction of this work runs $2,000 to $3,000 a month."
            }
          },
          {
            "@type": "Question",
            "name": "What is the guarantee?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "If the Receipt does not show SYN Growth captured more value than it cost you, that month is free. The guarantee applies to the first three months, then continues on a rolling quarterly review, and recovered value is measured against your own average job value, agreed at setup."
            }
          },
          {
            "@type": "Question",
            "name": "When does SYN Growth launch and how fast is setup?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "SYN Growth is launching soon. The Free Leak Audit is available today as the pre-launch entry point. At launch, SYN Growth is installed and run for you: setup begins after your audit, and most businesses go live in days, not weeks, once your brand, services, and rules are encoded."
            }
          },
          {
            "@type": "Question",
            "name": "How do I get SYN Workspace?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "SYN Workspace is in early access. Join the waitlist at syn.syntrexio.com and you will be invited as access opens. Every SYN Growth client is first in line."
            }
          }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://syntrexio.com/" }
        ]
      }
    ],
    "ogImage": "https://mcusercontent.com/d9f0645acdcd85eb1ee1a8067/images/001e76aa-2164-4473-bd50-d0a084913417.png"
  },
  "/about": {
    "title": "Syntrex | The Company Building SYN",
    "description": "Syntrex builds SYN. Founded on the revenue businesses lose to missed calls and slow replies, we shipped SYN Growth, the guaranteed system that captures every customer, and are building SYN Workspace, the AI business workspace, in early access. A senior team, headquartered in Windermere, Florida.",
    "keywords": "about Syntrex, SYN, SYN Growth, SYN Workspace, Henry Bello, AI software company, digital agency origin, HALT Fire, Doughbrik's Wavers, Windermere Florida",
    "ogTitle": "About Syntrex | The Company Building SYN",
    "ogDescription": "We build SYN, one AI platform in two products: SYN Growth (launching soon) and SYN Workspace (early access). A senior team with a full in-house crew, born from a hands-on digital agency.",
    "canonical": "https://syntrexio.com/about/",
    "schema": [
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://syntrexio.com/" },
          { "@type": "ListItem", "position": 2, "name": "About", "item": "https://syntrexio.com/about/" }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is Syntrex?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Syntrex is the company that builds SYN. SYN Growth, launching soon, is the guaranteed system that captures every customer you are losing to missed calls and slow replies. SYN Workspace, in early access, is the AI business workspace that runs your calendar, content, assets, builds, and automations. Syntrex is headquartered in Windermere, Florida and works with operators worldwide."
            }
          },
          {
            "@type": "Question",
            "name": "What is SYN?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "SYN is Syntrex's product, in two forms: SYN Growth, the guaranteed system that answers and captures every customer, launching soon, and SYN Workspace, the AI business workspace in early access that runs the rest of the business from one encoded brand."
            }
          },
          {
            "@type": "Question",
            "name": "Who does the work?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A senior team leads every project and stays your single point of contact, with a full in-house team delivering the design, engineering, and AI work. SYN does the ongoing running; the team builds, installs, and stands behind it with a written guarantee."
            }
          },
          {
            "@type": "Question",
            "name": "Where is Syntrex located?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Syntrex is headquartered in Windermere, Florida, in the greater Orlando area, and works with operators worldwide. Everything starts with an email to henry@syntrexio.com or a Free Leak Audit."
            }
          }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "Person",
        "@id": "https://syntrexio.com/about#henry-bello",
        "name": "Henry Bello",
        "jobTitle": "Founder & CEO",
        "worksFor": { "@id": "https://syntrexio.com/#organization" },
        "url": "https://syntrexio.com/about/"
      }
    ],
    "ogImage": "https://mcusercontent.com/d9f0645acdcd85eb1ee1a8067/images/001e76aa-2164-4473-bd50-d0a084913417.png"
  },
  "/services": {
    "title": "Syntrex | SYN Growth and SYN Workspace",
    "description": "Two products, one company. SYN Growth is the guaranteed system that captures every customer you are losing to missed calls, launching soon. SYN Workspace, in early access, is the AI business workspace that runs your calendar, content, assets, and automations. Start with a Free Leak Audit.",
    "keywords": "AI receptionist, AI answering service for business, AI business workspace, AI tools for small business operations, business automation platform, missed call text back, SYN Growth, SYN Workspace, Syntrex products",
    "ogTitle": "Two Products, One Company | Syntrex",
    "ogDescription": "SYN Growth captures every customer you are losing. SYN Workspace runs the rest of the business. Both are SYN, both launching, built by Syntrex.",
    "canonical": "https://syntrexio.com/services/",
    "schema": [
      SYN_GROWTH_PRODUCT,
      SYN_WORKSPACE_PRODUCT,
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://syntrexio.com/" },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://syntrexio.com/services/" }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What does SYN Growth do?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "SYN Growth answers every call, chat, and form in seconds on web chat, SMS, and voice, texts back every missed call, follows up automatically until the customer books, and reports what it recovered each month in the Receipt. It is installed and run for you, launching soon, and backed by a guarantee."
            }
          },
          {
            "@type": "Question",
            "name": "What is SYN Workspace?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "SYN Workspace is the AI business workspace, in early access. Encode your brand once and SYN runs your calendar, content, brand assets, builds, and automations, with an approval trail before anything reaches a customer. Join the waitlist at syn.syntrexio.com."
            }
          },
          {
            "@type": "Question",
            "name": "What is an AI business workspace?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "An AI business workspace is one place where AI runs the operational work of a business instead of you juggling a dozen disconnected apps. SYN Workspace encodes your brand once, then handles your calendar, content, brand assets, builds, and automations, with an approval trail so nothing goes out off-brand. It is in early access; join the waitlist at syn.syntrexio.com."
            }
          },
          {
            "@type": "Question",
            "name": "What AI tools does SYN include for small business operations?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Across the two products, SYN covers customer-facing and operational work: AI web chat, SMS, and voice answering, missed-call text-back, follow-up, and booking in SYN Growth; and calendar management, content and asset production, AI builds, and workflow automation in SYN Workspace. Everything runs from one encoded brand with a human approval step."
            }
          },
          {
            "@type": "Question",
            "name": "Who is SYN for?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Operators who lose customers to missed calls and slow replies start with SYN Growth: trades, home services, medical and dental, legal, insurance, and other appointment-driven businesses, from local to multi-location. SYN Workspace extends to any business that wants AI running its calendar, content, and operations."
            }
          },
          {
            "@type": "Question",
            "name": "Do you still build websites, content, and creative?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, for existing clients. If you are already running on SYN, our team also builds and runs websites, content, and creative for you. New customers start with SYN Growth."
            }
          }
        ]
      }
    ],
    "ogImage": "https://mcusercontent.com/d9f0645acdcd85eb1ee1a8067/images/001e76aa-2164-4473-bd50-d0a084913417.png"
  },
  "/pricing": {
    "title": "Syntrex | SYN Growth Pricing and SYN Workspace Access",
    "description": "SYN Growth: a one-time $497 setup, then $349 a month for Growth Core or $549 a month for Growth Pro with AI voice answering. If the Receipt does not show it captured more than it cost, that month is free. SYN Workspace is in early access by waitlist.",
    "keywords": "AI receptionist pricing, AI answering service cost, SYN Growth pricing, SYN Workspace access, Syntrex pricing, $497 setup, Growth Core, Growth Pro, business automation platform pricing",
    "ogTitle": "SYN Growth Pricing, Printed and Guaranteed | Syntrex",
    "ogDescription": "One-time $497 setup, then $349 or $549 a month. If the Receipt does not show it captured more than it cost, that month is free. SYN Workspace: early access by waitlist.",
    "canonical": "https://syntrexio.com/pricing/",
    "schema": [
      SYN_GROWTH_PRODUCT,
      SYN_WORKSPACE_PRODUCT,
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://syntrexio.com/" },
          { "@type": "ListItem", "position": 2, "name": "Pricing", "item": "https://syntrexio.com/pricing/" }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much is SYN Growth?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "SYN Growth is a one-time $497 setup, then $349 a month for Growth Core or $549 a month for Growth Pro, which adds AI voice answering. Pricing is printed, not quoted, and every plan carries the guarantee."
            }
          },
          {
            "@type": "Question",
            "name": "Is the $497 the total?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. The $497 is a one-time setup, charged once. The ongoing price is $349 a month for Growth Core or $549 a month for Growth Pro. Setup plus your first month of Growth Core is $846; after that it is the monthly rate."
            }
          },
          {
            "@type": "Question",
            "name": "What is the difference between Growth Core and Growth Pro?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Growth Core is $349 a month and includes AI web chat, SMS, missed-call text-back, follow-up, booking, and the monthly Receipt. Growth Pro is $549 a month and adds AI voice answering, so missed and after-hours calls are answered instead of going to voicemail. Both sit on top of the one-time $497 setup."
            }
          },
          {
            "@type": "Question",
            "name": "What happens if SYN Growth does not pay for itself?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "That month is free. If the Receipt does not show SYN Growth captured more value than it cost you, you do not pay for that month. The guarantee applies to the first three months, then a rolling quarterly review, measured against your own average job value agreed at setup."
            }
          },
          {
            "@type": "Question",
            "name": "How much is SYN Workspace?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "SYN Workspace is in early access and is not sold at a printed price yet. Join the waitlist at syn.syntrexio.com. Every SYN Growth client is first in line as access opens."
            }
          },
          {
            "@type": "Question",
            "name": "Is SYN Growth available yet?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "SYN Growth is launching soon, and the pricing shown is launch pricing. What is available today is the Free Leak Audit, a no-cost report on what missed calls cost you, which is the pre-launch entry point. Request it now and you are first in line when SYN Growth opens."
            }
          }
        ]
      }
    ],
    "ogImage": "https://mcusercontent.com/d9f0645acdcd85eb1ee1a8067/images/001e76aa-2164-4473-bd50-d0a084913417.png"
  },
  "/customers": {
    "title": "Syntrex | Customers",
    "description": "The businesses running on SYN. Syntrex builds and runs the full digital operation for HALT Fire, for Doughbrik's Wavers, the consumer brand from David Dobrik, and for Karlo Financial and Kinetix Technology Group, all on SYN Growth and SYN Workspace.",
    "keywords": "Syntrex customers, SYN customers, HALT Fire, Doughbrik's Wavers, David Dobrik, Karlo Financial, Kinetix Technology Group, AI automation customers",
    "ogTitle": "Customers | Syntrex",
    "ogDescription": "Businesses running on SYN: HALT Fire, Doughbrik's Wavers, Karlo Financial, and Kinetix Technology Group, all built and run by Syntrex.",
    "canonical": "https://syntrexio.com/customers/",
    "schema": [
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://syntrexio.com/" },
          { "@type": "ListItem", "position": 2, "name": "Customers", "item": "https://syntrexio.com/customers/" }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Syntrex customers",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "HALT Fire" },
          { "@type": "ListItem", "position": 2, "name": "Doughbrik's Wavers" },
          { "@type": "ListItem", "position": 3, "name": "Karlo Financial" },
          { "@type": "ListItem", "position": 4, "name": "Kinetix Technology Group" }
        ]
      }
    ],
    "ogImage": "https://mcusercontent.com/d9f0645acdcd85eb1ee1a8067/images/001e76aa-2164-4473-bd50-d0a084913417.png"
  },
  "/news": {
    "title": "Syntrex | News",
    "description": "Product launches, releases, and company updates from Syntrex as we build SYN. Introducing SYN Growth, SYN Workspace enters early access, and the new syntrexio.com.",
    "keywords": "Syntrex news, SYN Growth launch, SYN Workspace early access, AI product updates, Syntrex announcements",
    "ogTitle": "News | Syntrex",
    "ogDescription": "Launches, releases, and updates as Syntrex builds SYN. SYN Growth is launching soon; SYN Workspace is in early access.",
    "canonical": "https://syntrexio.com/news/",
    "schema": [
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://syntrexio.com/" },
          { "@type": "ListItem", "position": 2, "name": "News", "item": "https://syntrexio.com/news/" }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        "headline": "The new syntrexio.com",
        "datePublished": "2026-07-24",
        "author": { "@id": "https://syntrexio.com/#organization" },
        "publisher": { "@id": "https://syntrexio.com/#organization" },
        "description": "One platform, two products, one new identity. Where Syntrex is headed as a software company: SYN Growth for your customers, SYN Workspace for your operations.",
        "url": "https://syntrexio.com/news/"
      },
      {
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        "headline": "SYN Workspace enters early access",
        "datePublished": "2026-07-18",
        "author": { "@id": "https://syntrexio.com/#organization" },
        "publisher": { "@id": "https://syntrexio.com/#organization" },
        "description": "The AI business workspace that runs your calendar, content, assets, and automations from one encoded brand is now in early access. The waitlist is open.",
        "url": "https://syntrexio.com/news/"
      },
      {
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        "headline": "Introducing SYN Growth",
        "datePublished": "2026-07-14",
        "author": { "@id": "https://syntrexio.com/#organization" },
        "publisher": { "@id": "https://syntrexio.com/#organization" },
        "description": "The guaranteed system that answers every call, chat, and form in seconds, captures every missed call, and follows up until the customer books. Launching soon at printed pricing.",
        "url": "https://syntrexio.com/news/"
      }
    ],
    "ogImage": "https://mcusercontent.com/d9f0645acdcd85eb1ee1a8067/images/001e76aa-2164-4473-bd50-d0a084913417.png"
  },
  "/contact": {
    "title": "Syntrex | Contact",
    "description": "Tell Syntrex about your business and we reply within 24 hours. The fastest way to start with SYN Growth is a Free Leak Audit that shows exactly where you are losing customers, delivered within 48 hours. Or email henry@syntrexio.com.",
    "keywords": "contact Syntrex, Syntrex email, SYN Growth, Free Leak Audit, SYN Workspace waitlist, get started with SYN",
    "ogTitle": "Contact Syntrex | Start With a Free Leak Audit",
    "ogDescription": "Tell us about your business and we reply within 24 hours. The fastest way to start with SYN Growth is a Free Leak Audit showing exactly where you are losing customers.",
    "canonical": "https://syntrexio.com/contact/",
    "schema": [
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://syntrexio.com/" },
          { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://syntrexio.com/contact/" }
        ]
      }
    ],
    "ogImage": "https://mcusercontent.com/d9f0645acdcd85eb1ee1a8067/images/001e76aa-2164-4473-bd50-d0a084913417.png"
  },
  "/leak-audit": {
    "title": "Syntrex | Free Leak Audit, See What Missed Calls Cost You",
    "description": "The Free Leak Audit is how you start with SYN Growth. Syntrex mystery-shops your phone and web forms, times the responses, and delivers a one-page report with the dollar cost, per year, of the customers you are losing. Free, within 48 hours.",
    "keywords": "free leak audit, how to stop missing customer calls, missed call text back, AI receptionist, AI answering service for business, missed calls costing my business, 24/7 lead response, SYN Growth",
    "ogTitle": "Free Leak Audit | See What Missed Calls Cost You | Syntrex",
    "ogDescription": "The entry point to SYN Growth. See exactly how many customers you are losing to missed calls and slow replies. Free one-page report with a dollar estimate, within 48 hours.",
    "canonical": "https://syntrexio.com/leak-audit/",
    "schema": [
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://syntrexio.com/" },
          { "@type": "ListItem", "position": 2, "name": "Free Leak Audit", "item": "https://syntrexio.com/leak-audit/" }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": "https://syntrexio.com/leak-audit#service",
        "name": "Free Leak Audit",
        "url": "https://syntrexio.com/leak-audit/",
        "serviceType": "Lead response and missed call audit",
        "provider": { "@id": "https://syntrexio.com/#organization" },
        "areaServed": "Worldwide",
        "description": "The entry point to SYN Growth. Syntrex mystery-shops your phone and web forms, times how long each response takes, and delivers a one-page report with a dollar estimate of what missed calls and slow replies cost your business per year. Delivered within 48 hours. Free.",
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How many calls do small businesses actually miss?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "62% of calls to small businesses go unanswered, according to a 58-industry study by 411 Locals, and 85% of those missed callers never call back, according to Aircall. On top of that, 78% of customers buy from whoever responds first, so a slow reply loses the sale even when you eventually call back."
            }
          },
          {
            "@type": "Question",
            "name": "What is missed call text back?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Missed call text back means that when a call is not answered, the caller instantly receives a text acknowledging them and keeping the conversation open. It is included in SYN Growth, so an unanswered call does not become a lost customer."
            }
          },
          {
            "@type": "Question",
            "name": "How much revenue do missed calls cost a business?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The average small business loses roughly $126,000 a year to missed calls. Phone leads also convert 10 to 15 times better than web forms, according to BIA/Kelsey, so the calls you miss are the leads most likely to buy."
            }
          },
          {
            "@type": "Question",
            "name": "What is included in the Free Leak Audit?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Syntrex mystery-shops your phone and web forms the way a real customer would, times how long each response takes, and sends you a one-page report with a dollar estimate of what the leak costs you per year, based on your trade. It is free, delivered within 48 hours, and it is how you start with SYN Growth."
            }
          },
          {
            "@type": "Question",
            "name": "How do I stop missing customer calls?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Cover every channel and respond instantly. Missed-call text-back replies to an unanswered call with a text in seconds, AI web chat and voice answer the rest, and automated follow-up keeps the conversation going until the customer books. That is exactly what SYN Growth does, and the Free Leak Audit shows you where the gaps are first."
            }
          }
        ]
      }
    ],
    "ogImage": "https://mcusercontent.com/d9f0645acdcd85eb1ee1a8067/images/001e76aa-2164-4473-bd50-d0a084913417.png"
  },
  "/privacy": {
    "title": "Syntrex | Privacy Policy",
    "description": "How Syntrex collects, uses, and protects your information across syntrexio.com, the SYN chatbot, contact and Free Leak Audit forms, analytics, and the SYN products. Includes AI processing, no sale of data, sub-processors, retention, security, and your GDPR and CCPA rights.",
    "keywords": "Syntrex privacy policy, data protection, GDPR, CCPA, AI processing, cookies, SYN privacy",
    "ogTitle": "Syntrex | Privacy Policy",
    "ogDescription": "How Syntrex collects, uses, and protects your information. SYN products, chatbot, forms, analytics, cookies, and your privacy rights.",
    "canonical": "https://syntrexio.com/privacy/",
    "schema": [
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://syntrexio.com/" },
          { "@type": "ListItem", "position": 2, "name": "Privacy Policy", "item": "https://syntrexio.com/privacy/" }
        ]
      }
    ],
    "ogImage": "https://mcusercontent.com/d9f0645acdcd85eb1ee1a8067/images/001e76aa-2164-4473-bd50-d0a084913417.png"
  },
  "/terms": {
    "title": "Syntrex | Terms of Use",
    "description": "The terms that govern your use of syntrexio.com and the SYN products, SYN Growth and SYN Workspace: the products, fees and launch pricing, the guarantee, acceptable use, intellectual property, disclaimers, liability, and Florida governing law.",
    "keywords": "Syntrex terms of use, terms and conditions, SYN Growth terms, SYN Workspace terms, guarantee, governing law",
    "ogTitle": "Syntrex | Terms of Use",
    "ogDescription": "The terms that govern your use of syntrexio.com and the SYN products, SYN Growth and SYN Workspace.",
    "canonical": "https://syntrexio.com/terms/",
    "schema": [
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://syntrexio.com/" },
          { "@type": "ListItem", "position": 2, "name": "Terms of Use", "item": "https://syntrexio.com/terms/" }
        ]
      }
    ],
    "ogImage": "https://mcusercontent.com/d9f0645acdcd85eb1ee1a8067/images/001e76aa-2164-4473-bd50-d0a084913417.png"
  },
};
