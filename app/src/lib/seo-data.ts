// Per-route SEO source of truth. Site-wide schema lives in SITE_SCHEMA; per-route
// title/description/keywords/canonical/OG/Twitter and JSON-LD in PAGE_SEO.
// The visible FAQ accordions render from the FAQPage schema here (see seo.ts),
// so editing an answer updates both the page and its structured data.

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
    "url": "https://syntrexio.com",
    "logo": "https://mcusercontent.com/d9f0645acdcd85eb1ee1a8067/images/001e76aa-2164-4473-bd50-d0a084913417.png",
    "image": "https://mcusercontent.com/d9f0645acdcd85eb1ee1a8067/images/001e76aa-2164-4473-bd50-d0a084913417.png",
    "description": "Syntrex is the platform company behind the Growth System and SYN. The Growth System answers every call, chat, and form in seconds, captures every missed call, follows up until the customer books, and reports recovered value each month. It runs on SYN, the business platform that holds each client's brand, calendar, content, assets, and automation. Installed and run for operators from local to multi-brand.",
    "email": "henry@syntrexio.com",
    "sameAs": [
      "https://www.instagram.com/syntrexio",
      "https://www.tiktok.com/@syntrexio",
      "https://www.linkedin.com/company/syntrexco"
    ],
    "legalName": "Syntrex LLC",
    "alternateName": "Syntrexio"
  },
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://syntrexio.com/#business",
    "name": "Syntrex Growth System",
    "legalName": "Syntrex LLC",
    "url": "https://syntrexio.com/",
    "logo": "https://mcusercontent.com/d9f0645acdcd85eb1ee1a8067/images/001e76aa-2164-4473-bd50-d0a084913417.png",
    "image": "https://mcusercontent.com/d9f0645acdcd85eb1ee1a8067/images/001e76aa-2164-4473-bd50-d0a084913417.png",
    "email": "henry@syntrexio.com",
    "priceRange": "$$",
    "description": "A brand-governed AI system that answers every call, chat, and form in seconds 24/7, captures every missed call with text-back, follows up automatically, books appointments, and reports recovered revenue in a monthly Receipt. Guaranteed: if it does not pay for itself, that month is free.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "513 Main Street",
      "addressLocality": "Windermere",
      "addressRegion": "FL",
      "postalCode": "34786",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 28.4961,
      "longitude": -81.5348
    },
    "areaServed": {
      "@type": "Place",
      "name": "Worldwide"
    },
    "sameAs": [
      "https://www.instagram.com/syntrexio",
      "https://www.tiktok.com/@syntrexio",
      "https://www.linkedin.com/company/syntrexco"
    ],
    "alternateName": "Syntrexio",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Syntrex Offers",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "The Growth System",
            "url": "https://syntrexio.com/services#growth"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "The Presence System",
            "url": "https://syntrexio.com/services#presence"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "The Brand Studio",
            "url": "https://syntrexio.com/services#studio"
          }
        }
      ]
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Syntrex LLC",
    "url": "https://syntrexio.com"
  }
];

export interface PageSeo {
  title: string; description: string; keywords: string;
  ogTitle: string; ogDescription: string; ogImage?: string;
  canonical: string; schema: LdJson[];
}

// Reusable Service schema for the three offers, kept accurate to canonical pricing.
const GROWTH_SERVICE: LdJson = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "The Growth System",
  "url": "https://syntrexio.com/services#growth",
  "provider": {
    "@type": "LocalBusiness",
    "@id": "https://syntrexio.com/#business",
    "name": "Syntrex"
  },
  "areaServed": "Worldwide",
  "description": "One installed, guaranteed system that answers every call, chat, and form in seconds on web chat, SMS, and voice, captures every missed call with text-back, follows up automatically, books appointments, and reports recovered revenue in a monthly Receipt. Growth Core from $349 a month, Growth Pro $549 a month, $497 one-time install.",
  "offers": {
    "@type": "Offer",
    "price": "349",
    "priceCurrency": "USD"
  }
};
const PRESENCE_SERVICE: LdJson = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "The Presence System",
  "url": "https://syntrexio.com/services#presence",
  "provider": {
    "@type": "LocalBusiness",
    "@id": "https://syntrexio.com/#business",
    "name": "Syntrex"
  },
  "areaServed": "Worldwide",
  "description": "The complete digital presence as one subscription: a website or store built and continuously run, SEO and AI-search optimization, and content, with the Growth System included. From $1,500 a month, build from $2,500.",
  "offers": {
    "@type": "Offer",
    "price": "1500",
    "priceCurrency": "USD"
  }
};
const STUDIO_SERVICE: LdJson = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "The Brand Studio",
  "url": "https://syntrexio.com/services#studio",
  "provider": {
    "@type": "LocalBusiness",
    "@id": "https://syntrexio.com/#business",
    "name": "Syntrex"
  },
  "areaServed": "Worldwide",
  "description": "Ongoing brand, design, and creative delivered on a monthly subscription. Every asset produced through an encoded brand profile with an approval trail, so it is on-brand by default. From $995 a month, Priority from $1,995 a month.",
  "offers": {
    "@type": "Offer",
    "price": "995",
    "priceCurrency": "USD"
  }
};

// Three-system catalog used on Home and Services, replacing the old
// twelve-capability "we do everything" catalog.
const THREE_SYSTEM_CATALOG: LdJson = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "AI lead capture and growth systems",
  "provider": {
    "@type": "LocalBusiness",
    "@id": "https://syntrexio.com/#business"
  },
  "areaServed": {
    "@type": "Place",
    "name": "Worldwide"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Syntrex Systems",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "The Growth System",
          "description": "One installed, guaranteed system that answers every call, chat, and form in seconds, captures every missed call with text-back, follows up automatically, books appointments, and reports recovered value each month in the Receipt."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "The Presence System",
          "description": "The complete digital presence as one subscription: a website or store built and continuously run, SEO and AI-search optimization, and content, with the Growth System included."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "The Brand Studio",
          "description": "Ongoing brand, design, and creative on a monthly subscription, produced through an encoded brand profile with an approval trail so it is on-brand by default."
        }
      }
    ]
  }
};

export const PAGE_SEO: Record<string, PageSeo> = {
  "/": {
    "title": "Syntrex | AI Growth System & Business Platform",
    "description": "62% of calls to small businesses go unanswered and 85% never call back. The Syntrex Growth System answers every call, chat, and form in seconds, 24/7, and follows up until the job is booked. It runs on SYN, the business platform that growing and multi-location operators grow into. Start with a Free Leak Audit.",
    "keywords": "AI growth system, business platform, AI receptionist, missed call text back, 24/7 lead response, lead capture platform, multi-location business software, automation platform, SYN platform, Syntrex",
    "ogTitle": "The Growth System is the door. SYN is the platform. | Syntrex",
    "ogDescription": "Syntrex answers every call, chat, and form in seconds, 24/7, and follows up until the job is booked. It runs on SYN, the business platform that local and multi-brand operators grow into.",
    "canonical": "https://syntrexio.com/",
    "schema": [
      { ...THREE_SYSTEM_CATALOG, "url": "https://syntrexio.com/", "@id": "https://syntrexio.com/#service" },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the Syntrex Growth System?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The Growth System is one installed, guaranteed system with five parts: Instant Answer replies to every inquiry in seconds on web chat and SMS, Never-Miss Capture logs and acknowledges every form, chat, and missed call, Automatic Follow-Up sequences email and SMS until the customer answers or books, Booking puts appointments on your calendar, and the Receipt reports what it recovered each month."
            }
          },
          {
            "@type": "Question",
            "name": "How many calls do small businesses actually miss?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "62% of calls to small businesses go unanswered, according to a 58-industry study by 411 Locals, and 85% of those missed callers never call back, according to Aircall. Phone leads convert 10 to 15 times better than web forms, so the calls you miss are the leads most likely to buy."
            }
          },
          {
            "@type": "Question",
            "name": "What is missed call text back?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Missed call text back means that when a call is not answered, the caller instantly receives a text acknowledging them and keeping the conversation open. It is included in the Growth System through Never-Miss Capture, so an unanswered call does not become a lost customer."
            }
          },
          {
            "@type": "Question",
            "name": "What is included in the Free Leak Audit?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Syntrex mystery-shops your phone and web forms the way a real customer would, times how long each response takes, and sends you a one-page report with a dollar estimate of what the leak costs you per year, based on your trade. It is free and delivered within 48 hours of your request."
            }
          },
          {
            "@type": "Question",
            "name": "What happens if the system does not pay for itself?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "That month is free. If the Receipt does not show the system captured more value than it cost you, you do not pay for that month. The guarantee applies to the first three months, then converts to a rolling quarterly review, and recovered value is calculated from your own average job value, agreed at install."
            }
          },
          {
            "@type": "Question",
            "name": "Where is Syntrex located?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Syntrex is headquartered in Windermere, Florida, in the greater Orlando area, and works with clients worldwide. Everything starts with an email to henry@syntrexio.com or a Free Leak Audit."
            }
          }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://syntrexio.com/"
          }
        ]
      }
    ],
    "ogImage": "https://mcusercontent.com/d9f0645acdcd85eb1ee1a8067/images/001e76aa-2164-4473-bd50-d0a084913417.png"
  },
  "/about": {
    "title": "Syntrex | About the Company Behind the Platform",
    "description": "Syntrex is the platform company behind the Growth System and SYN. We build the software that captures every customer, then install and run it for you, backed by a senior team and a full in-house crew. Headquartered in Windermere, Florida, serving operators worldwide.",
    "keywords": "about Syntrex, Syntrex platform, SYN, business platform, Growth System, Henry Bello, installed and run, automation platform, Windermere Florida",
    "ogTitle": "About Syntrex | The Company Behind the Platform",
    "ogDescription": "Syntrex is the platform company behind the Growth System and SYN, software that captures every customer, installed and run for you by a senior in-house team.",
    "canonical": "https://syntrexio.com/about",
    "schema": [
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://syntrexio.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "About",
            "item": "https://syntrexio.com/about"
          }
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
              "text": "Syntrex builds, installs, and runs the Syntrex Growth System for local and service businesses, so they stop losing customers to missed calls and slow replies. It captures every lead across phone, web, and message, responds instantly, follows up until the customer books, and reports the value it recovered each month. Two subscriptions extend it: the Presence System and the Brand Studio. Syntrex is headquartered in Windermere, Florida."
            }
          },
          {
            "@type": "Question",
            "name": "Who does Syntrex work with?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Local and service businesses that lose customers to missed calls and slow follow-up, in trades such as home services, medical and dental practices, law firms, insurance, and other appointment-driven businesses, worldwide."
            }
          },
          {
            "@type": "Question",
            "name": "Who does the work?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A senior team leads every project and stays your single point of contact. Behind them, a full in-house team delivers the design, engineering, and AI work end to end. That is how Syntrex delivers the capacity of a large agency with the focus of a boutique one."
            }
          },
          {
            "@type": "Question",
            "name": "Where does Syntrex operate?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Worldwide. Syntrex is headquartered in Windermere, Florida and works remotely with clients anywhere. Everything starts with an email to henry@syntrexio.com or a Free Leak Audit."
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
        "worksFor": {
          "@type": "LocalBusiness",
          "@id": "https://syntrexio.com/#business",
          "name": "Syntrex LLC"
        },
        "url": "https://syntrexio.com/about"
      }
    ],
    "ogImage": "https://mcusercontent.com/d9f0645acdcd85eb1ee1a8067/images/001e76aa-2164-4473-bd50-d0a084913417.png"
  },
  "/services": {
    "title": "Syntrex | Growth System, Presence System, and Brand Studio",
    "description": "Three systems on one platform. The Growth System captures and converts every customer you are losing today. The Presence System runs your entire digital presence. The Brand Studio delivers ongoing creative. All of it runs on SYN, the platform you grow into. Start with a Free Leak Audit.",
    "keywords": "Syntrex Growth System, Presence System, Brand Studio, SYN platform, AI lead capture, business platform, brand creative subscription, multi-location operators",
    "ogTitle": "Three Systems, One Platform | Syntrex",
    "ogDescription": "The Growth System captures every lead. The Presence System runs your digital presence. The Brand Studio delivers creative. All on SYN, the platform you grow into.",
    "canonical": "https://syntrexio.com/services",
    "schema": [
      { ...THREE_SYSTEM_CATALOG },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://syntrexio.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://syntrexio.com/services"
          }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the Growth System?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The Growth System is one installed, guaranteed AI system that answers every call, chat, and form in seconds on web chat, SMS, and voice, captures every missed call, follows up automatically, books appointments, and reports what it recovered each month in the Receipt. It covers every channel a customer uses, not just the phone, and its outcomes are measured monthly."
            }
          },
          {
            "@type": "Question",
            "name": "What is the difference between the Growth System and the Presence System?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The Growth System catches and converts the customers you are losing today. The Presence System is your complete digital presence as one subscription: a website or store built and continuously run, with SEO and AI-search optimization, content, and the Growth System included. Most businesses start with the Growth System and grow into the Presence System."
            }
          },
          {
            "@type": "Question",
            "name": "What is the Brand Studio?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The Brand Studio is ongoing brand, design, and creative on a flat monthly subscription with a request queue. Every asset is produced through your encoded brand profile with guardrails and an approval trail, so it is on-brand and safe to publish by default. It is built for established brands and multi-brand operators."
            }
          },
          {
            "@type": "Question",
            "name": "Do you still do custom work?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, for existing clients. Custom AI tools, integrations, dashboards, and strategy are available to businesses already working with Syntrex. New customers start with the Growth System or a Free Leak Audit."
            }
          }
        ]
      },
      GROWTH_SERVICE,
      PRESENCE_SERVICE,
      STUDIO_SERVICE
    ],
    "ogImage": "https://mcusercontent.com/d9f0645acdcd85eb1ee1a8067/images/001e76aa-2164-4473-bd50-d0a084913417.png"
  },
  "/pricing": {
    "title": "Syntrex | Growth System and Platform Pricing",
    "description": "Simple, printed pricing. Growth Core $349 a month, Growth Pro $549 a month, $497 one-time install, backed by a guarantee: if the Receipt does not show the system captured more than it cost, that month is free. Presence from $1,500 a month. Brand Studio from $995 a month.",
    "keywords": "Growth System pricing, business platform pricing, AI growth system pricing, missed call system cost, Presence System price, Brand Studio price, SYN platform, Syntrex pricing",
    "ogTitle": "Pricing, Printed. Backed by a Guarantee | Syntrex",
    "ogDescription": "Growth Core $349 a month, Growth Pro $549 a month, $497 install. If the Receipt does not show it captured more than it cost, that month is free.",
    "canonical": "https://syntrexio.com/pricing",
    "schema": [
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://syntrexio.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Pricing",
            "item": "https://syntrexio.com/pricing"
          }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How does Syntrex pricing work?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Pricing is printed, not quoted. The Growth System is $349 a month for Growth Core or $549 a month for Growth Pro, with a one-time install of $497. The Presence System starts at $1,500 a month, with build from $2,500. Brand Studio starts at $995 a month. Every plan carries the guarantee."
            }
          },
          {
            "@type": "Question",
            "name": "What happens if the system does not pay for itself?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "That month is free. If the Receipt does not show the system captured more value than it cost you, you do not pay for that month. The guarantee applies to the first three months, then converts to a rolling quarterly review, and recovered value is calculated from your own average job value, agreed at install."
            }
          },
          {
            "@type": "Question",
            "name": "What is the difference between Growth Core and Growth Pro?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Growth Core is $349 a month and includes AI web chat, SMS, missed-call text-back, follow-up, booking, and the monthly Receipt. Growth Pro is $549 a month and adds AI voice answering, so missed and after-hours calls are answered instead of going to voicemail."
            }
          },
          {
            "@type": "Question",
            "name": "What do the Presence System and Brand Studio cost?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The Presence System starts at $1,500 a month, with a build from $2,500, and is scope-dependent, since it includes a website or store built and continuously run, SEO and AI-search optimization, content, and the Growth System. Brand Studio is from $995 a month, or from $1,995 a month for priority turnaround with more active work."
            }
          },
          {
            "@type": "Question",
            "name": "Is custom work available?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, for existing clients. Custom AI tools, integrations, dashboards, and strategy are available to businesses already working with Syntrex. New customers start with the Growth System or a Free Leak Audit."
            }
          }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Syntrex Growth System",
        "brand": {
          "@type": "Brand",
          "name": "Syntrex"
        },
        "description": "A brand-governed AI system that answers every inquiry in seconds, captures every missed call, follows up automatically, books appointments, and reports recovered revenue in a monthly Receipt.",
        "url": "https://syntrexio.com/pricing",
        "offers": [
          {
            "@type": "Offer",
            "name": "Install",
            "price": "497",
            "priceCurrency": "USD",
            "description": "One-time install."
          },
          {
            "@type": "Offer",
            "name": "Growth Core",
            "price": "349",
            "priceCurrency": "USD",
            "description": "Per month. AI web chat, SMS, missed-call text-back, follow-up, booking, the Receipt.",
            "availability": "https://schema.org/InStock"
          },
          {
            "@type": "Offer",
            "name": "Growth Pro",
            "price": "549",
            "priceCurrency": "USD",
            "description": "Per month. Core plus AI voice answering.",
            "availability": "https://schema.org/InStock"
          },
          {
            "@type": "Offer",
            "name": "Presence System",
            "price": "1500",
            "priceCurrency": "USD",
            "description": "Per month, from. Build from $2,500. Scope-dependent."
          },
          {
            "@type": "Offer",
            "name": "Brand Studio",
            "price": "995",
            "priceCurrency": "USD",
            "description": "Per month, from."
          },
          {
            "@type": "Offer",
            "name": "Brand Studio Priority",
            "price": "1995",
            "priceCurrency": "USD",
            "description": "Per month, from. Priority turnaround."
          }
        ]
      }
    ],
    "ogImage": "https://mcusercontent.com/d9f0645acdcd85eb1ee1a8067/images/001e76aa-2164-4473-bd50-d0a084913417.png"
  },
  "/projects": {
    "title": "Syntrex | Case Studies and Client Results",
    "description": "Real work Syntrex has delivered. For HALT Fire, a full sales automation rebuild that saves the team 10+ hours a week and drove 280% search growth. For Doughbrik's Wavers, internal automation that made workflows 3x faster as the brand scaled into retail.",
    "keywords": "Syntrex case studies, HALT Fire automation, Doughbrik's Wavers, AI automation results, sales automation case study, workflow automation results",
    "ogTitle": "Case Studies and Client Results | Syntrex",
    "ogDescription": "For HALT Fire, a full rebuild that saved 10+ hours a week and drove 280% search growth. For Doughbrik's Wavers, automation that made workflows 3x faster.",
    "canonical": "https://syntrexio.com/projects",
    "schema": [
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://syntrexio.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Projects",
            "item": "https://syntrexio.com/projects"
          }
        ]
      }
    ],
    "ogImage": "https://mcusercontent.com/d9f0645acdcd85eb1ee1a8067/images/001e76aa-2164-4473-bd50-d0a084913417.png"
  },
  "/contact": {
    "title": "Syntrex | Contact Us",
    "description": "Tell Syntrex about your business and we reply within 24 hours. The fastest way to start is a Free Leak Audit that shows exactly where you are losing customers, delivered within 48 hours. Or email henry@syntrexio.com.",
    "keywords": "contact Syntrex, Syntrex email, Free Leak Audit, get started with Syntrex, business platform, Growth System",
    "ogTitle": "Contact Syntrex | Start With a Free Leak Audit",
    "ogDescription": "Tell us about your business and we reply within 24 hours. The fastest way to start is a Free Leak Audit that shows exactly where you are losing customers.",
    "canonical": "https://syntrexio.com/contact",
    "schema": [
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://syntrexio.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Contact",
            "item": "https://syntrexio.com/contact"
          }
        ]
      }
    ],
    "ogImage": "https://mcusercontent.com/d9f0645acdcd85eb1ee1a8067/images/001e76aa-2164-4473-bd50-d0a084913417.png"
  },
  "/leak-audit": {
    "title": "Syntrex | Free Leak Audit, See What Missed Calls Cost You",
    "description": "Syntrex mystery-shops your phone and web forms, times the responses, and delivers a one-page report with a dollar estimate of what missed calls and slow replies cost you each year. Free, within 48 hours.",
    "keywords": "free leak audit, missed call text back, AI receptionist, missed calls costing my business, 24/7 lead response, answering service alternative, never miss a call, lead response system",
    "ogTitle": "Free Leak Audit | See What Missed Calls Cost You | Syntrex",
    "ogDescription": "See exactly how many customers you are losing to missed calls and slow replies. Free one-page report with a dollar estimate, delivered within 48 hours.",
    "canonical": "https://syntrexio.com/leak-audit",
    "schema": [
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://syntrexio.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Free Leak Audit",
            "item": "https://syntrexio.com/leak-audit"
          }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": "https://syntrexio.com/leak-audit#service",
        "name": "Free Leak Audit",
        "url": "https://syntrexio.com/leak-audit",
        "serviceType": "Lead response and missed call audit",
        "provider": {
          "@type": "LocalBusiness",
          "@id": "https://syntrexio.com/#business",
          "name": "Syntrex"
        },
        "areaServed": "Worldwide",
        "description": "Syntrex mystery-shops your phone and web forms, times how long each response takes, and delivers a one-page report with a dollar estimate of what missed calls and slow replies cost your business per year. Delivered within 48 hours. Free.",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
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
              "text": "Missed call text back means that when a call is not answered, the caller instantly receives a text message acknowledging them and keeping the conversation open. It is included in the Syntrex Growth System through Never-Miss Capture, so an unanswered call does not become a lost customer."
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
              "text": "Syntrex mystery-shops your phone and web forms the way a real customer would, times how long each response takes, and sends you a one-page report with a dollar estimate of what the leak costs you per year, based on your trade. It is free and delivered within 48 hours of your request."
            }
          }
        ]
      }
    ],
    "ogImage": "https://mcusercontent.com/d9f0645acdcd85eb1ee1a8067/images/001e76aa-2164-4473-bd50-d0a084913417.png"
  },
};
