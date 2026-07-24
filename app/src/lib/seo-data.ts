// AUTO-GENERATED in Phase D from the pre-cutover static site's <head> SEO.
// Ported verbatim (schema, meta, keywords) with .html URLs rewritten to the
// new extensionless routes. Site-wide schema lives in SITE_SCHEMA; per-route
// meta and schema in PAGE_SEO. Consumed by src/lib/seo.ts.

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
    "description": "Syntrex designs and builds your entire digital presence: website, ecommerce, AI tools, content, automation, and strategy. Custom to your business, faster than a traditional agency, at a price that makes sense. Every system built from scratch.",
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
            "url": "https://syntrexio.com/services#presence",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Services within the Presence System",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Custom AI Chatbots",
                    "url": "https://syntrexio.com/services/ai-chatbots.html"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Lead Generation & Growth Systems",
                    "url": "https://syntrexio.com/services/lead-generation.html"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Ecommerce & Online Stores",
                    "url": "https://syntrexio.com/services/ecommerce.html"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Workflow Automation",
                    "url": "https://syntrexio.com/services/workflow-automation.html"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Custom AI Tools",
                    "url": "https://syntrexio.com/services/custom-ai-tools.html"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "System Integration",
                    "url": "https://syntrexio.com/services/system-integration.html"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Website Design & Development",
                    "url": "https://syntrexio.com/services/website-design.html"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Brand & Digital Presence",
                    "url": "https://syntrexio.com/services/brand-digital-presence.html"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "AI Content & Social Media",
                    "url": "https://syntrexio.com/services/ai-content.html"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "AI Strategy & Consulting",
                    "url": "https://syntrexio.com/services/ai-strategy.html"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Reporting & Analytics Systems",
                    "url": "https://syntrexio.com/services/reporting-analytics.html"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "AI Business Planning",
                    "url": "https://syntrexio.com/services/ai-business-planning.html"
                  }
                }
              ]
            }
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

export const PAGE_SEO: Record<string, PageSeo> = {
  "/": {
    "title": "Stop Losing Customers to Missed Calls | Syntrex AI Growth System",
    "description": "62% of calls to small businesses go unanswered. The Syntrex Growth System is an AI automation agency system that answers every call, chat, and form in seconds, 24/7, captures every missed call, follows up automatically, and books the job. Get a Free Leak Audit.",
    "keywords": "digital presence, website design, ecommerce, AI tools, content automation, business automation, custom digital agency, Syntrex, small business website, AI chatbot, workflow automation",
    "ogTitle": "Everything a Big Agency Builds, Without the Big Agency Cost | Syntrex",
    "ogDescription": "Syntrex designs and builds your entire digital presence: website, ecommerce, AI tools, content, automation, and strategy. Custom to your business, faster than a traditional agency, at a price that makes sense.",
    "canonical": "https://syntrexio.com/",
    "schema": [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "AI Automation & Digital Services",
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
          "name": "Syntrex AI Automation Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Website Design & Development",
                "description": "Custom professional websites built from scratch. Fast, mobile ready, SEO optimized, and designed to convert visitors into paying clients."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Ecommerce & Online Stores",
                "description": "Full online stores built to sell. Product catalog, secure checkout, payments, inventory, and shipping, all configured and ready to take orders from day one."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Custom AI Chatbots",
                "description": "Custom chatbots that qualify leads, answer questions, and book appointments 24/7 on any website platform."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Workflow Automation",
                "description": "End-to-end automation of repetitive tasks including follow-ups, invoicing, data entry, lead routing, and client onboarding."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Lead Generation & Growth Systems",
                "description": "AI-powered pipelines for lead capture, scoring, automated follow-up, nurturing, conversion, and retention."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "AI Content & Social Media",
                "description": "Blog posts, captions, video scripts, copy, email newsletters, ad creative, AI-generated images, AI-built presentations, and scheduled posts in your brand voice."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Custom AI Tools",
                "description": "Internal tools built for your team including proposal generators, quote builders, intake forms, report dashboards, and any workflow tool needed."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "System Integration",
                "description": "Connect existing tools so they communicate automatically. Calendar, email, forms, and databases stay in sync."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Brand & Digital Presence",
                "description": "Full digital presence buildout for new businesses including website, social profiles, email setup, content strategy, and AI systems."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "AI Strategy & Consulting",
                "description": "Operations audit, automation opportunity mapping, and a clear implementation roadmap."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Reporting & Analytics Systems",
                "description": "Custom AI dashboards and automated reporting tools that surface the insights that actually matter."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "AI Business Planning",
                "description": "AI tools that generate business plans, financial projections, competitive analyses, and strategic documents using your real business data."
              }
            }
          ]
        },
        "url": "https://syntrexio.com/",
        "@id": "https://syntrexio.com/#service"
      },
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
              "text": "62% of calls to small businesses go unanswered, according to a 58-industry study by 411 Locals, and after hours the miss rate approaches 100%. 85% of those missed callers never call back, according to Aircall, and 62% of unanswered callers contact a competitor instead."
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
              "text": "Syntrex mystery-shops your phone and web forms the way a real customer would, times how long each response takes, and sends you a one-page leak report with a dollar estimate of what the leak costs you per year, based on your trade. It is free and delivered within 48 hours of your request."
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
    "title": "About Syntrex | The Team Behind the Growth System",
    "description": "Syntrex builds, installs, and runs the Growth System that stops local and service businesses from losing customers to missed calls and slow replies. A senior in-house team, built on real operational experience, headquartered in Windermere, Florida.",
    "keywords": "Syntrex, Growth System, missed call solution, lead response system, small business automation, in-house team, Windermere Florida, done for you growth",
    "ogTitle": "About Syntrex | The Team Behind the Growth System",
    "ogDescription": "A senior in-house team that builds, installs, and runs the Growth System for local and service businesses: the capacity of a large agency with the focus of a boutique one.",
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
              "text": "Syntrex builds, installs, and runs the Syntrex Growth System for local and service businesses, so they stop losing customers to missed calls and slow replies. It captures every lead across phone, web, and message, responds instantly, follows up until the customer books, and reports the value it recovered each month. Two subscriptions extend it: the Presence System and the Brand Studio. Everything runs on SYN, the platform that holds each client's brand. Syntrex is headquartered in Windermere, Florida."
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
              "text": "A senior team leads every project and stays your single point of contact. Behind them, our full in-house team executes the design, engineering, and AI work end to end. That is how we deliver the capacity of a large agency with the focus of a boutique one."
            }
          },
          {
            "@type": "Question",
            "name": "Where does Syntrex operate?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Worldwide. We are headquartered in Windermere, Florida and work remotely with clients anywhere. Everything starts with an email to henry@syntrexio.com."
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
    "title": "The Growth System, Presence System, and Brand Studio | Syntrex",
    "description": "Syntrex is an AI automation agency with three systems: the Growth System that answers and captures every customer, the Presence System that builds and runs your entire digital presence, and the Brand Studio for on-demand brand creative. Start with a Free Leak Audit.",
    "keywords": "digital presence, website design, ecommerce, AI tools, content automation, business automation, custom digital agency, Syntrex, small business website, AI chatbot, workflow automation",
    "ogTitle": "AI Automation Services | Syntrex LLC",
    "ogDescription": "Custom AI chatbots, workflow automation, lead generation, ecommerce, content systems, and more. Every system built from scratch and owned by you.",
    "canonical": "https://syntrexio.com/services",
    "schema": [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "AI Automation & Digital Services",
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
          "name": "Syntrex AI Automation Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Website Design & Development",
                "description": "Custom professional websites built from scratch. Fast, mobile ready, SEO optimized, and designed to convert visitors into paying clients."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Custom AI Chatbots",
                "description": "Custom chatbots that qualify leads, answer questions, and book appointments 24/7 on any website platform."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Workflow Automation",
                "description": "End-to-end automation of repetitive tasks including follow-ups, invoicing, data entry, lead routing, and client onboarding."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Lead Generation & Growth Systems",
                "description": "AI-powered pipelines for lead capture, scoring, automated follow-up, nurturing, conversion, and retention."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "AI Content & Social Media",
                "description": "Blog posts, captions, video scripts, copy, email newsletters, ad creative, AI-generated images, AI-built presentations, and scheduled posts in your brand voice."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Custom AI Tools",
                "description": "Internal tools built for your team including proposal generators, quote builders, intake forms, report dashboards, and any workflow tool needed."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "System Integration",
                "description": "Connect existing tools so they communicate automatically. Calendar, email, forms, and databases stay in sync."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Brand & Digital Presence",
                "description": "Full digital presence buildout for new businesses including website, social profiles, email setup, content strategy, and AI systems."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "AI Strategy & Consulting",
                "description": "Operations audit, automation opportunity mapping, and a clear implementation roadmap."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Reporting & Analytics Systems",
                "description": "Custom AI dashboards and automated reporting tools that surface the insights that actually matter."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "AI Business Planning",
                "description": "AI tools that generate business plans, financial projections, competitive analyses, and strategic documents using your real business data."
              }
            }
          ]
        }
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
              "text": "The Growth System is one installed, guaranteed AI system that answers every call, chat, and form in seconds on web chat, SMS, and voice, captures every missed call, follows up automatically, books appointments, and reports what it recovered each month in the Receipt. It is more than an alternative to an AI receptionist or answering service: it covers every channel, not just the phone, and its outcomes are measured monthly."
            }
          },
          {
            "@type": "Question",
            "name": "What is the difference between the Growth System and the Presence System?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The Growth System catches and converts the customers you are losing today. The Presence System is the complete digital presence as one subscription, a website or store built and continuously run, with SEO and AI-search optimization, content, and the Growth System included. Most businesses start with the Growth System and grow into the Presence System."
            }
          },
          {
            "@type": "Question",
            "name": "What is the Brand Studio?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The Brand Studio is on-demand campaign imagery, product visuals, social creative, and collateral on a flat monthly subscription with a request queue. Every asset is generated through your encoded brand profile with guardrails and an approval trail, so it is on-brand and safe to publish by default. It is built for multi-brand operators and regulated brands."
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
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "The Growth System",
        "url": "https://syntrexio.com/services#growth",
        "provider": {
          "@type": "LocalBusiness",
          "@id": "https://syntrexio.com/#business",
          "name": "Syntrex"
        },
        "areaServed": "United States",
        "description": "One installed, guaranteed AI system that answers every call, chat, and form in seconds on web chat, SMS, and voice, captures every missed call with text-back, follows up automatically, books appointments, and reports recovered revenue in a monthly Receipt.",
        "offers": {
          "@type": "Offer",
          "price": "397",
          "priceCurrency": "USD"
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "The Presence System",
        "url": "https://syntrexio.com/services#presence",
        "provider": {
          "@type": "LocalBusiness",
          "@id": "https://syntrexio.com/#business",
          "name": "Syntrex"
        },
        "areaServed": "United States",
        "description": "The complete digital presence as one subscription: a website or store built and continuously run, SEO and AI-search optimization, content, with the Growth System included. From $1,500 a month.",
        "offers": {
          "@type": "Offer",
          "price": "1500",
          "priceCurrency": "USD"
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "The Brand Studio",
        "url": "https://syntrexio.com/services#studio",
        "provider": {
          "@type": "LocalBusiness",
          "@id": "https://syntrexio.com/#business",
          "name": "Syntrex"
        },
        "areaServed": "United States",
        "description": "On-demand campaign imagery, product visuals, social creative, and collateral on a flat monthly subscription with a request queue. Every asset generated through an encoded brand profile with guardrails and an approval trail. From $995 a month.",
        "offers": {
          "@type": "Offer",
          "price": "995",
          "priceCurrency": "USD"
        }
      }
    ],
    "ogImage": "https://mcusercontent.com/d9f0645acdcd85eb1ee1a8067/images/001e76aa-2164-4473-bd50-d0a084913417.png"
  },
  "/pricing": {
    "title": "Pricing | The Growth System, Presence, and Brand Studio | Syntrex",
    "description": "Syntrex pricing, printed. The Growth System from $397 a month with a guarantee: if the Receipt does not show it captured more value than it cost, that month is free. Presence System from $1,500 a month. Brand Studio from $995 a month.",
    "keywords": "digital presence, website design, ecommerce, AI tools, content automation, business automation, custom digital agency, Syntrex, small business website, AI chatbot, workflow automation",
    "ogTitle": "Pricing | The Growth System, Presence System, Brand Studio | Syntrex",
    "ogDescription": "Printed pricing with a guarantee. Growth System from $397 a month. If it does not pay for itself, that month is free.",
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
              "text": "Pricing is printed, not quoted. The Growth System is $397 a month for Growth Core or $547 a month for Growth Pro, with a $597 one-time install that is waived on annual prepay. The Presence System starts at $1,500 a month and Brand Studio starts at $995 a month. Every plan carries the guarantee."
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
              "text": "Growth Core is $397 a month and includes chat, SMS, follow-up, booking, and the Receipt. Growth Pro is $547 a month and adds AI phone answering, so missed and after-hours calls are answered instead of going to voicemail."
            }
          },
          {
            "@type": "Question",
            "name": "What do the Presence System and Brand Studio cost?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The Presence System starts at $1,500 a month and is scope-dependent, since it includes a website or store built and continuously run, SEO and AI-search optimization, content, and the Growth System. Brand Studio is from $995 a month for one active request, or from $1,995 a month for two active requests with priority turnaround."
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
            "price": "597",
            "priceCurrency": "USD",
            "description": "One-time install, waived on annual prepay."
          },
          {
            "@type": "Offer",
            "name": "Growth Core",
            "price": "397",
            "priceCurrency": "USD",
            "description": "Per month. Chat, SMS, follow-up, booking, the Receipt.",
            "availability": "https://schema.org/InStock"
          },
          {
            "@type": "Offer",
            "name": "Growth Pro",
            "price": "547",
            "priceCurrency": "USD",
            "description": "Per month. Core plus AI phone answering.",
            "availability": "https://schema.org/InStock"
          },
          {
            "@type": "Offer",
            "name": "Presence System",
            "price": "1500",
            "priceCurrency": "USD",
            "description": "Per month, from. Scope-dependent."
          },
          {
            "@type": "Offer",
            "name": "Brand Studio",
            "price": "995",
            "priceCurrency": "USD",
            "description": "Per month. One active request."
          },
          {
            "@type": "Offer",
            "name": "Brand Studio Priority",
            "price": "1995",
            "priceCurrency": "USD",
            "description": "Per month. Two active requests, priority turnaround."
          }
        ]
      }
    ],
    "ogImage": "https://mcusercontent.com/d9f0645acdcd85eb1ee1a8067/images/001e76aa-2164-4473-bd50-d0a084913417.png"
  },
  "/projects": {
    "title": "Projects and Case Studies | Real Results for Real Businesses | Syntrex",
    "description": "Real work Syntrex has delivered. For HALT! Fire, a full sales automation system that saves 10+ hours a week and drove 280% search growth. For Doughbrik's Wavers, internal automation with 3x faster workflows. Plus examples of the work we produce.",
    "keywords": "digital presence, website design, ecommerce, AI tools, content automation, business automation, custom digital agency, Syntrex, small business website, AI chatbot, workflow automation",
    "ogTitle": "Projects & Case Studies | AI Automation in Action | Syntrex LLC",
    "ogDescription": "Real AI automation projects and case studies from Syntrex. Custom systems built for HALT! Fire, Doughbrik's Wavers, and more.",
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
    "title": "Contact Syntrex | Start With a Free Leak Audit",
    "description": "The fastest way to start with Syntrex is a Free Leak Audit that shows exactly where you are losing customers, delivered within 48 hours. Prefer to just tell us what you need? Send a message or email henry@syntrexio.com.",
    "keywords": "digital presence, website design, ecommerce, AI tools, content automation, business automation, custom digital agency, Syntrex, small business website, AI chatbot, workflow automation",
    "ogTitle": "Contact Syntrex | Start With a Free Leak Audit",
    "ogDescription": "Contact Syntrex for a free AI automation quote. Email henry@syntrexio.com or send a message. We respond within 24 hours.",
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
    "title": "Free Leak Audit | See What Missed Calls Cost You | Syntrex",
    "description": "Free Leak Audit. Syntrex mystery-shops your phone and web forms, times the responses, and sends a one-page report with the yearly dollar cost of the customers you are losing to missed calls and slow replies. Delivered within 48 hours.",
    "keywords": "free leak audit, missed call text back, AI receptionist for small business, missed calls costing my business, 24/7 lead response, answering service alternative, never miss a call, missed call solution Central Florida, lead response system",
    "ogTitle": "Free Leak Audit | See What Missed Calls Cost You | Syntrex",
    "ogDescription": "See exactly how many customers you are losing to missed calls and slow replies. Free one-page leak report, delivered within 48 hours.",
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
        "areaServed": "United States",
        "description": "Syntrex mystery-shops your phone and web forms, times how long each response takes, and delivers a one-page leak report with a dollar estimate of what missed calls and slow replies cost your business per year. Delivered within 48 hours. Free.",
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
              "text": "Studies are consistent. 62% of calls to small businesses go unanswered, according to a 58-industry study by 411 Locals, and after hours the miss rate approaches 100%. 85% of those missed callers never call back, according to Aircall, and 62% of unanswered callers contact a competitor instead."
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
              "text": "The average small business loses roughly $126,000 a year to missed calls. A single missed call is worth $100 to $1,200 depending on the trade, and high-ticket home services average around $1,200. Phone leads also convert 10 to 15 times better than web forms, according to BIA/Kelsey, so the calls you miss are the leads most likely to buy."
            }
          },
          {
            "@type": "Question",
            "name": "What is included in the Free Leak Audit?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Syntrex mystery-shops your phone and web forms the way a real customer would, times how long each response takes, and sends you a one-page leak report with a dollar estimate of what the leak costs you per year, based on your trade. It is free and delivered within 48 hours of your request."
            }
          }
        ]
      }
    ],
    "ogImage": "https://mcusercontent.com/d9f0645acdcd85eb1ee1a8067/images/001e76aa-2164-4473-bd50-d0a084913417.png"
  },
};
