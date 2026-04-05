import type { GeoMoneyPage } from "@/lib/geo-money-pages-data"

/** Geo/money landing pages — English copy; paths under `/en/...` */
export const geoMoneyPagesEn: GeoMoneyPage[] = [
  {
    slug: "razrabotka-mvp-v-dubae",
    region: "oae",
    title: "MVP development in Dubai for founders and businesses | YappiX",
    description:
      "Ship a first working product in the UAE fast: UX and structure through build and launch. Distributed team, founder-friendly communication.",
    h1: "MVP development in Dubai for founders and businesses",
    offer: "We help you ship a first working product fast: from UX and structure through development and launch.",
    canonicalPath: "/en/oae/razrabotka-mvp-v-dubae",
    sections: [
      {
        title: "Why an MVP in the UAE is its own problem",
        body: "The UAE market moves fast: speed to launch, clear UX, and readiness to scale matter. Founders need something they can show investors and first users in weeks, not months.",
      },
      {
        title: "What we do",
        body: "We design product logic, shape UX, and ship a working MVP with core features — at the intersection of product thinking and AI-assisted delivery.",
      },
      {
        title: "How the process works",
        body: "Discovery → Product logic → UX → AI-assisted delivery → QA and launch. Below is a short walkthrough with a link to the full process description.",
      },
    ],
    relatedCaseSlugs: ["myunion-platform", "global-olive-corporation"],
    relatedPillars: ["/en/mvp-i-zapusk-produkta", "/en/ai-first-razrabotka"],
    relatedServices: ["/en/services", "/en/services"],
    faqs: [
      {
        question: "How long does an MVP take?",
        answer: "Typically 3–8 weeks depending on scope. We lock scope during discovery.",
      },
      {
        question: "Do you work with very early founders?",
        answer: "Yes. We help define MVP scope so you don’t overbuild before the first users.",
      },
    ],
    ctaLabel: "Discuss an MVP",
    ctaHref: "/en/contact",
  },
  {
    slug: "russkaya-komanda-razrabotki-v-oae",
    region: "oae",
    title: "Russian-speaking development team in the UAE | YappiX",
    description:
      "A clear technical partner without a language barrier and without a heavy enterprise outsourcing machine — for UAE-based businesses.",
    h1: "Russian-speaking development team in the UAE",
    offer: "When you need a clear technical partner without a language barrier and without a heavy outsourcing machine.",
    canonicalPath: "/en/oae/russkaya-komanda-razrabotki-v-oae",
    sections: [
      {
        title: "Why a Russian-speaking team matters",
        body: "The UAE has many Russian-speaking entrepreneurs who need engineering partners with clear communication. We speak the same language — literally and in a product sense.",
      },
      {
        title: "What you get",
        body: "A product engineering team: UX, development, AI acceleration, delivery — without a bloated enterprise process and without extra middlemen.",
      },
      {
        title: "How to start",
        body: "Tell us about the problem — we’ll propose a format: from a one-off MVP to an ongoing product team.",
      },
    ],
    relatedCaseSlugs: ["jupid-platform", "bridgeinto-platform"],
    relatedPillars: ["/en/cto-as-a-service", "/en/ai-first-razrabotka"],
    relatedServices: ["/en/services", "/en/services"],
    faqs: [
      {
        question: "Are you physically based in the UAE?",
        answer: "We work as a distributed team with a timezone that fits the UAE. In-person meetings are possible by arrangement.",
      },
      {
        question: "What engagement models do you support?",
        answer: "A fixed project, a dedicated team, or CTO as a service — depending on the task.",
      },
    ],
    ctaLabel: "Discuss a project",
    ctaHref: "/en/contact",
  },
  {
    slug: "vnedrenie-ai-v-biznes-v-oae",
    region: "oae",
    title: "AI adoption for businesses in the UAE | YappiX",
    description:
      "AI assistants, knowledge search, customer support automation, and internal workflows — for UAE businesses.",
    h1: "AI adoption for businesses in the UAE",
    offer: "AI assistants, knowledge search, support automation, and internal process automation.",
    canonicalPath: "/en/oae/vnedrenie-ai-v-biznes-v-oae",
    sections: [
      {
        title: "AI for business in the UAE",
        body: "The UAE market is actively adopting AI. We help companies go beyond “plug in ChatGPT” and build a controlled AI contour with quality controls and measurable impact.",
      },
      {
        title: "What we implement",
        body: "RAG over knowledge bases, assistants for teams and customers, ticket handling automation, AI in CRM and internal workflows.",
      },
      {
        title: "Our approach",
        body: "We estimate impact first, then implement. We’re upfront about limitations. We don’t sell “AI magic”.",
      },
    ],
    relatedCaseSlugs: ["ai-food-assistant", "myunion-platform"],
    relatedPillars: ["/en/vnedrenie-ai-i-rag", "/en/ai-first-razrabotka"],
    relatedServices: ["/en/services"],
    faqs: [
      {
        question: "Which AI solutions fit UAE businesses?",
        answer: "It depends on your processes. Most often: knowledge search, support automation, AI in sales and HR.",
      },
      {
        question: "What does implementation cost?",
        answer: "Pilot projects start around 150,000 RUB. A full contour starts around 400,000 RUB. Exact pricing after discovery.",
      },
    ],
    ctaLabel: "Discuss an AI initiative",
    ctaHref: "/en/contact",
  },
  {
    slug: "cto-as-a-service-dlya-startapa",
    region: "eu",
    title: "CTO as a Service for startups | YappiX",
    description:
      "Technical strategy, architecture, hiring, and delivery — without hiring a full-time CTO too early.",
    h1: "CTO as a Service for startups",
    offer:
      "We help you assemble technical strategy, architecture, team, and delivery — without hiring a full-time CTO at the earliest stage.",
    canonicalPath: "/en/eu/cto-as-a-service-dlya-startapa",
    sections: [
      {
        title: "When a startup needs a CTO — but not full-time",
        body: "At an early stage, a full-time CTO is expensive and often unnecessary. You need someone who can set architecture, establish delivery, and help hire. That’s what we do.",
      },
      {
        title: "What’s included",
        body: "Technical strategy, stack choices, architecture, CI/CD, hiring developers, team mentoring, product delivery.",
      },
      {
        title: "How it works",
        body: "We join part-time. We work directly with the founder. The focus is shipping — not paperwork.",
      },
    ],
    relatedCaseSlugs: ["myunion-platform", "projectorium-cicd"],
    relatedPillars: ["/en/cto-as-a-service", "/en/mvp-i-zapusk-produkta"],
    relatedServices: ["/en/services", "/en/services"],
    faqs: [
      {
        question: "How many hours per week are required?",
        answer: "Usually 10–20 hours at the start, then less as your internal team grows.",
      },
      {
        question: "Do you help hire developers?",
        answer: "Yes — profile definition, technical interviews, and onboarding support.",
      },
    ],
    ctaLabel: "Discuss the CTO format",
    ctaHref: "/en/contact",
  },
  {
    slug: "perezapusk-digital-produkta",
    region: "eu",
    title: "Relaunch a digital product without chaos | YappiX",
    description:
      "When a product exists but doesn’t perform, UX is broken, or the team is stuck — we help relaunch without paying twice for the same mistakes.",
    h1: "Relaunch a digital product without chaos and double payment",
    offer: "When a product already exists but doesn’t deliver, UX falls apart, or the team is stuck.",
    canonicalPath: "/en/eu/perezapusk-digital-produkta",
    sections: [
      {
        title: "When it’s time to relaunch",
        body: "The product is live but conversion is low, users churn, tech debt grows, and the team stalls. That doesn’t always mean a full rewrite — sometimes UX and architecture need a controlled rebuild.",
      },
      {
        title: "What we do",
        body: "Audit the current product, find bottlenecks, redesign the product experience, and rebuild in stages without stopping the business.",
      },
      {
        title: "Outcome",
        body: "A working product with refreshed UX, cleaner architecture, and a clear roadmap.",
      },
    ],
    relatedCaseSlugs: ["priboy-hotels", "global-olive-corporation"],
    relatedPillars: ["/en/kejsy-i-metodologiya", "/en/stoimost-i-sroki-razrabotki"],
    relatedServices: ["/en/services", "/en/services"],
    faqs: [
      {
        question: "Do we need to rewrite everything from scratch?",
        answer: "Not necessarily. Often it’s enough to rebuild UX, refactor critical modules, and fix delivery.",
      },
      {
        question: "How long does it take?",
        answer: "Audit: 1–2 weeks. Rebuild: 4–12 weeks depending on scale.",
      },
    ],
    ctaLabel: "Discuss a relaunch",
    ctaHref: "/en/contact",
  },
  {
    slug: "ai-avtomatizaciya-dlya-biznesa",
    region: "eu",
    title: "AI automation for European businesses | YappiX",
    description:
      "Useful AI scenarios without hype: knowledge search, assistants, content, internal workflows.",
    h1: "AI automation for businesses in Europe",
    offer: "We assemble useful AI scenarios without “magic for magic’s sake”: knowledge search, assistants, content, internal workflows.",
    canonicalPath: "/en/eu/ai-avtomatizaciya-dlya-biznesa",
    sections: [
      {
        title: "AI for European businesses",
        body: "European markets demand care: GDPR, privacy, and skepticism toward hype. We implement AI where it truly helps — not because everyone else does.",
      },
      {
        title: "Typical scenarios",
        body: "Internal knowledge search, support assistants, routine automation, AI in sales and HR.",
      },
      {
        title: "Data approach",
        body: "We work within GDPR and corporate security policies. Data stays under client control.",
      },
    ],
    relatedCaseSlugs: ["reallaw-ai", "ai-food-assistant"],
    relatedPillars: ["/en/vnedrenie-ai-i-rag", "/en/ai-first-razrabotka"],
    relatedServices: ["/en/services"],
    faqs: [
      {
        question: "How do you account for GDPR?",
        answer: "We design the AI contour with GDPR in mind: data minimization, access control, and logging.",
      },
      {
        question: "Which LLMs do you use?",
        answer: "OpenAI, Anthropic Claude, open-source models — depending on privacy requirements and the task.",
      },
    ],
    ctaLabel: "Discuss an AI project",
    ctaHref: "/en/contact",
  },
  {
    slug: "product-team-dlya-russkoyazychnogo-foundera",
    region: "usa",
    title: "A product team for Russian-speaking founders in the US | YappiX",
    description:
      "A flexible partner for UX, product logic, and MVP launch — for Russian-speaking founders in the United States.",
    h1: "A product team for Russian-speaking founders in the US",
    offer: "When you need a flexible partner for UX, product logic, and MVP launch.",
    canonicalPath: "/en/usa/product-team-dlya-russkoyazychnogo-foundera",
    sections: [
      {
        title: "Why a Russian-speaking product team",
        body: "Founders in the US often want a team they can speak with clearly — literally and product-wise. We understand the context and help you ship faster.",
      },
      {
        title: "What we provide",
        body: "Product thinking + UX + engineering + AI acceleration. We work as an extension of your team — not a “hours vendor”.",
      },
      {
        title: "Formats",
        body: "MVP launch, dedicated team, or CTO as a service — we pick what fits.",
      },
    ],
    relatedCaseSlugs: ["fintech-marketplace", "myunion-platform"],
    relatedPillars: ["/en/mvp-i-zapusk-produkta", "/en/cto-as-a-service"],
    relatedServices: ["/en/services", "/en/services"],
    faqs: [
      {
        question: "What timezone do you work in?",
        answer: "Distributed team — we cover US Eastern and Pacific. Communication is async + sync calls.",
      },
      {
        question: "Can you be my only tech team?",
        answer: "Yes — we can cover the full tech scope from product logic to deployment.",
      },
    ],
    ctaLabel: "Discuss a project",
    ctaHref: "/en/contact",
  },
  {
    slug: "razrabotka-saas-i-lichnyh-kabinetov",
    region: "usa",
    title: "SaaS and customer portal development | YappiX",
    description: "We design and launch B2B services, portals, internal panels, and client systems.",
    h1: "SaaS and customer portal development",
    offer: "We design and launch B2B services, portals, internal panels, and client systems.",
    canonicalPath: "/en/usa/razrabotka-saas-i-lichnyh-kabinetov",
    sections: [
      {
        title: "When you need SaaS or a portal",
        body: "If your business is a service for other companies or users, you need a product system — not a landing page: auth, roles, dashboards, billing, APIs.",
      },
      {
        title: "What we build",
        body: "B2B SaaS, customer portals, admin panels, internal accounting and ops systems. We design architecture, UX, APIs, frontend and backend.",
      },
      {
        title: "Stack and approach",
        body: "Next.js, React, Node.js, PostgreSQL, Vercel/AWS. AI acceleration during development. Iterations every 2–3 days.",
      },
    ],
    relatedCaseSlugs: ["myunion-platform", "jupid-platform"],
    relatedPillars: ["/en/stoimost-i-sroki-razrabotki", "/en/mvp-i-zapusk-produkta"],
    relatedServices: ["/en/services", "/en/services"],
    faqs: [
      {
        question: "How much does a SaaS MVP cost?",
        answer: "From ~400,000 RUB for core functionality. Exact estimate after discovery.",
      },
      {
        question: "Can we start with an MVP and grow later?",
        answer: "That’s what we recommend: ship core, collect feedback, iterate.",
      },
    ],
    ctaLabel: "Discuss SaaS",
    ctaHref: "/en/contact",
  },
  {
    slug: "rag-i-vnutrenniy-ai-pomoshchnik",
    region: "usa",
    title: "RAG and an internal AI assistant for your team | YappiX",
    description:
      "Connect LLMs to knowledge bases and internal workflows so employees get answers faster — without drowning in manual search.",
    h1: "RAG and an internal AI assistant for your team",
    offer:
      "We connect LLMs to knowledge and internal workflows so employees get answers faster — without drowning in manual search.",
    canonicalPath: "/en/usa/rag-i-vnutrenniy-ai-pomoshchnik",
    sections: [
      {
        title: "Why an internal AI assistant",
        body: "Teams spend hours searching documents, Confluence, and drives. RAG connects an LLM to your knowledge base and returns answers with citations.",
      },
      {
        title: "How it works",
        body: "Index documents → build a vector store → connect an LLM with retrieval → set up quality and access controls.",
      },
      {
        title: "Limitations we state upfront",
        body: "RAG doesn’t replace experts. Quality depends on data. Hallucinations can’t be removed 100%. We design with these constraints in mind.",
      },
    ],
    relatedCaseSlugs: ["reallaw-ai", "ai-food-assistant"],
    relatedPillars: ["/en/vnedrenie-ai-i-rag", "/en/rag-enterprise-knowledge-search"],
    relatedServices: ["/en/services"],
    faqs: [
      {
        question: "What data can be connected?",
        answer: "Documents, wikis, Confluence, Google Drive, Notion, internal databases — PDF, DOCX, HTML, Markdown.",
      },
      {
        question: "How do you control answer quality?",
        answer: "Metrics: accuracy, relevance, coverage. Logging for all requests. Data contour boundaries.",
      },
    ],
    ctaLabel: "Discuss a RAG initiative",
    ctaHref: "/en/contact",
  },
]

export function getGeoMoneyPageEnBySlug(slug: string): GeoMoneyPage | undefined {
  return geoMoneyPagesEn.find((p) => p.slug === slug)
}
