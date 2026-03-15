import type { CaseStudy } from "./cases-data"

export const casesDataEn: CaseStudy[] = [
  {
    slug: "myunion-platform",
    title: "MyUnion Pro — Trade Union Management Platform",
    client: "MyUnion",
    category: "SaaS / AI",
    description:
      "Full-featured web application for trade union management with AI chatbots, automated document generation, and member engagement tools.",
    fullDescription:
      "MyUnion Pro is a full-featured web application for trade union management with AI-powered chatbots, automated document generation, request tracking, and member engagement. Live at myunion.pro. Version 1.6.1.",
    challenge:
      "Trade unions used fragmented systems for member records, documents, and communications. Processing requests took days and member engagement was minimal. A single platform with modern technology was needed.",
    solution:
      "Built a unified platform with an AI assistant for automated request handling, document generation, and personalized recommendations. Implemented partner discount system, news feed, and chats to boost member engagement.",
    image: "/myunion/Cover2.png",
    videos: [
      "/images/usmanoff-cases/1765719152722-MyUnion.mp4",
      "/images/Презентация платформы MyUnion_ новые возможности для профсоюзов 🚀 (1).mp4",
    ],
    gallery: [
      "/images/Screenshot 2026-01-08 at 19.12.21.png",
      "/images/Screenshot 2026-01-08 at 19.12.35.png",
      "/images/Screenshot 2026-01-08 at 19.12.59.png",
    ],
    results: [
      { label: "Users", value: "50K+" },
      { label: "AI automation", value: "80%" },
      { label: "Processing time", value: "-90%" },
      { label: "Engagement", value: "+150%" },
    ],
    tags: ["Next.js", "GPT-4", "PostgreSQL", "LangChain", "Redis", "AWS"],
    testimonial: {
      text: "MyUnion Pro has completely transformed how our union operates. The AI assistant handles 80% of requests automatically.",
      author: "Vitaly N.",
      role: "Union Chairman",
    },
    duration: "3 months",
    team: "1 person",
    year: "2025",
    projectUrl: "https://myunion.pro/",
    evidencePack: {
      baseline: "Incoming request volume, handling time, and manual routing share",
      period: "8 weeks before rollout vs 8 weeks after stable production",
      source: "Ticketing logs + union CRM + internal BI dashboard",
      methodology: [
        "Handling time was measured by median TTR to avoid outlier distortion.",
        "AI automation share was measured as tickets closed without human escalation.",
        "Peak outlier weeks were excluded from comparison to reduce seasonality noise.",
      ],
      artifacts: [
        "Weekly TTR trend before/after",
        "Request funnel: manual flow vs AI-assisted flow",
        "SLA board snapshot with queue distribution",
      ],
      metrics: [
        { name: "Ticket handling time (TTR)", before: "2.4 days", after: "0.24 days", note: "-90%" },
        { name: "AI automation share", before: "22%", after: "80%", note: "+58 pp" },
        { name: "Member engagement (MAU/WAU)", before: "1.0x", after: "2.5x", note: "+150%" },
      ],
    },
  },
  {
    slug: "reallaw-ai",
    title: "realLaw AI — Legal Tech SaaS for UAE",
    client: "realLaw",
    category: "SaaS / Legal Tech",
    description:
      "Legal-tech SaaS for UAE businesses and lawyers. Full cycle: research, brand, design system, frontend on Next.js/Framer.",
    fullDescription:
      "realLaw AI is a legal-tech SaaS for UAE businesses and lawyers. The platform combines a UAE law knowledge base, AI assistant for legal advice, and document generation. I led full product cycle: UX research, brand, design system, and Next.js/Framer frontend.",
    challenge:
      "Legal services in the UAE are expensive and inaccessible for small business. Legislation is complex and finding the right information takes hours. A platform was needed to make legal knowledge accessible.",
    solution:
      "Built an AI platform with UAE legislation knowledge base, smart search, and document generator. Created an intuitive design system and implemented the frontend in Next.js with Framer for animations.",
    image: "/images/usmanoff-cases/1765729581244-00001.avif",
    videos: [
      "/images/usmanoff-cases/1765730240971-rl01.mp4",
      "/images/usmanoff-cases/1765730303289-rl02.mp4",
      "/images/usmanoff-cases/1765730312497-rl03.mp4",
    ],
    gallery: [
      "/images/usmanoff-cases/1765729581244-00001.avif",
      "/images/usmanoff-cases/1765729597092-0002.avif",
      "/images/usmanoff-cases/1765729610108-0003.avif",
    ],
    results: [
      { label: "Year", value: "2025" },
      { label: "Platform", value: "Web" },
      { label: "AI", value: "GPT-4" },
      { label: "Region", value: "UAE" },
    ],
    tags: ["Legal Tech", "SaaS", "Next.js", "Framer", "UAE", "AI"],
    duration: "4 months",
    team: "1 person",
    year: "2025",
    projectUrl: "https://reallaw.ai/",
  },
  {
    slug: "jupid-platform",
    title: "Jupid — AI Accountant for LLC Setup",
    client: "Jupid",
    category: "FinTech / AI",
    description:
      "AI-native accounting for SMBs: LLC formation, intelligent bookkeeping, and tax compliance in chat. White-labeled for banks and fintech platforms.",
    fullDescription:
      "Jupid is an AI-native accounting and compliance platform embedded into digital banking. It supports the full SMB lifecycle: free LLC formation, AI bookkeeping, tax preparation and filing, and 24/7 conversational support via WhatsApp, iMessage, and embedded chat. The product can go live in 4-6 weeks without core banking changes.",
    challenge:
      "Financial institutions lose entrepreneurs before onboarding: new businesses register elsewhere and never see the business banking offer. At the same time, SMB owners face expensive, fragmented bookkeeping and tax workflows.",
    solution:
      "Built a white-label product experience around contextual AI: autonomous transaction categorization, 24/7 conversational accountant, tax compliance with CPA oversight, and a single interface for finance operations. I designed product flows, UX/UI system, and conversion-focused content blocks for partner-facing pages.",
    image: "/images/usmanoff-cases/1765730706302-j1.png",
    videos: [
      "/Jupid/0001.mp4",
      "/Jupid/0002.mp4",
      "/Jupid/Social%20preview.png",
    ],
    gallery: [
      "/Jupid/j1.png",
      "/Jupid/Desktop_LLC formation.png",
      "/Jupid/Desktop_LLC formation 2.png",
      "/images/usmanoff-cases/1765731172484-j2.png",
      "/images/usmanoff-cases/1765731270134-j3.png",
    ],
    results: [
      { label: "Year", value: "2025" },
      { label: "Go-live", value: "4-6 weeks" },
      { label: "Integration", value: "No core changes" },
      { label: "AI accuracy", value: "95%+" },
    ],
    tags: ["AI", "FinTech", "Embedded Banking", "Accounting", "Tax Compliance", "USA"],
    duration: "3 months",
    team: "1 person",
    year: "2025",
    projectUrl: "https://jupid.com/",
  },
  {
    slug: "priboy-hotels",
    title: "Grand Hotels & SPA Priboy — Hotel Chain",
    client: "Priboy Hotel Group",
    category: "Hospitality / Marketing",
    description:
      "Full-cycle digital services for a premium hotel chain: development, support, SEO, SMM on the Black Sea coast.",
    fullDescription:
      "Full-cycle digital services for Priboy hotel group: development and support of priboy-spa.ru (4*) and priboy1.ru (3*), SEO for top rankings, VK social media with content and targeted ads. Hotels are in Anapa with premium SPA, pools, and restaurants.",
    challenge:
      "The hotel chain needed a strong digital presence: outdated sites didn’t convert, search rankings were low, and social media was barely used. A full solution was needed to increase direct bookings and brand awareness.",
    solution:
      "Built modern responsive sites with booking integration, SEO focused on “hotel Anapa”, “SPA hotel Black Sea”. Launched SMM with regular content, stories, reels, and VK targeted ads. Set up analytics and reporting.",
    image: "/images/priboy.avif",
    videos: ["/images/priboy_overview.mp4", "/images/usmanoff-cases/1765792488847-pr1.mp4"],
    gallery: [
      "/images/usmanoff-cases/1765792395288-bFI2IWilY7g4ukF9T80MrOrRVj8_width_600_height_1167.png",
      "/images/usmanoff-cases/1765792429857-q8eUGGIY1BiO1oe8GScSU3ZJ3k_scale-down-to_1024_width_1920_height_1200.png",
      "/images/usmanoff-cases/1765792638637-FoLlT7LSXYy6s5h8tjhFS1pN0U_scale-down-to_1024_width_1600_height_1200.png",
      "/images/usmanoff-cases/1765792697728-UuUYkwEq1gwSBee31fsugTkw.png",
      "/images/usmanoff-cases/1765792750119-77Q7f2uc7GRvOS3tyA3U6s7U_width_600_height_1298.png",
      "/images/usmanoff-cases/1765792826028-Fp173n5obWlyvfQxnUzhJ1ymYk_scale-down-to_1024_width_600_height_1298.png",
      "/images/usmanoff-cases/1765792906373-U43ZiD4bZrIOBvHCf2f54kMo_width_600_height_1298.png",
      "/images/usmanoff-cases/1765792938372-mxGxicx7rf9opdoGjiSRrbYBo_width_600_height_1298.png",
    ],
    results: [
      { label: "Traffic growth", value: "+180%" },
      { label: "Direct bookings", value: "+65%" },
      { label: "VK subscribers", value: "12K+" },
      { label: "TOP-3 Yandex", value: "85%" },
    ],
    tags: ["Next.js", "SEO", "SMM", "VK Ads", "Yandex.Metrika", "TildaCMS"],
    testimonial: {
      text: "After the redesign and SEO, direct bookings grew by 65%. We’re no longer dependent only on aggregators.",
      author: "Hotel management",
      role: "Grand Hotel & SPA Priboy",
    },
    duration: "Ongoing support",
    team: "3 people",
    year: "2023–2025",
    projectLinks: [
      { label: "Grand Hotel & SPA Priboy", url: "https://priboy-spa.ru/" },
      { label: "Priboy Hotel", url: "https://priboy1.ru/" },
      { label: "Dvin Hotel", url: "https://hoteldvin.ru/" },
    ],
    evidencePack: {
      baseline: "Organic traffic, direct bookings, and search visibility by geo-clusters",
      period: "6 months before SEO/SMM strategy vs 6 months after launch",
      source: "Yandex.Metrika + booking engine + SEO ranking panel",
      methodology: [
        "Direct bookings were counted excluding OTAs/aggregators.",
        "Traffic baseline used organic segment only; branded paid bursts excluded.",
        "TOP-3 was calculated as share of target semantic core in top-3 by region.",
      ],
      artifacts: [
        "Monthly organic traffic trend",
        "Direct booking share report by channel",
        "Ranking matrix for key geo-intent clusters",
      ],
      metrics: [
        { name: "Organic traffic", before: "1.0x", after: "2.8x", note: "+180%" },
        { name: "Direct bookings", before: "1.0x", after: "1.65x", note: "+65%" },
        { name: "Semantic core in TOP-3", before: "31%", after: "85%", note: "+54 pp" },
      ],
    },
  },
  {
    slug: "bridgeinto-platform",
    title: "BridgeInto — Private Business Platform",
    client: "BridgeInto",
    category: "Enterprise / Blockchain",
    description:
      "Secure business platform for privacy and data control. Brand, UX/UI, design system, product website.",
    fullDescription:
      "BridgeInto is a secure business platform for people who value privacy and control over their data. It includes a blockchain file manager, accounting, tax management, and secure communications. I created the brand, UX, UI, design system, and product site.",
    challenge:
      "Most business platforms store data on their servers and don’t give full control. Companies worry about leaks and dependence on third-party services.",
    solution:
      "Built a platform with blockchain storage where users control their encryption keys. Created a self-contained system with file manager, accounting, and secure communications. Designed a brand and design system that emphasize security and privacy.",
    image: "/images/usmanoff-cases/1765731821927-b1.mp4",
    videos: [
      "/images/usmanoff-cases/1765731821927-b1.mp4",
      "/images/usmanoff-cases/1765731899405-b2.mp4",
      "/images/usmanoff-cases/1765733491723-b3.mp4",
      "/images/usmanoff-cases/1765733531788-b4.mp4",
    ],
    gallery: [
      "/images/usmanoff-cases/1765733642777-123Desktop.png",
      "/images/usmanoff-cases/1765733704154-Desktop_1.png",
      "/images/usmanoff-cases/1765733749734-Desktopqqwwee.png",
      "/images/usmanoff-cases/1765733782837-Desktop_______.png",
      "/images/usmanoff-cases/1765733815536-File_manager.png",
      "/images/usmanoff-cases/1765733847173-Message-1.png",
      "/images/usmanoff-cases/1765734002829-bb2.png",
      "/images/usmanoff-cases/1765734179734-MS_Startups_FoundersHub_Celebration_Template_V1_1200x628.png",
    ],
    results: [
      { label: "Year", value: "2024" },
      { label: "Blockchain", value: "Yes" },
      { label: "Encryption", value: "E2E" },
      { label: "Status", value: "Production" },
    ],
    tags: ["SaaS", "Blockchain", "Security", "File Manager", "E2E Encryption"],
    duration: "5 months",
    team: "1 person",
    year: "2024",
  },
  {
    slug: "global-olive-corporation",
    title: "Global Olive Corp. — Investment Platform",
    client: "Global Olive Corporation",
    category: "Marketing / eCommerce",
    description:
      "Investment platform for olive trees with transparent ownership, personalized certificates, and gifting.",
    fullDescription:
      "Global Olive Corporation is an investment platform that lets users buy olive trees as assets. Each tree has a personal ownership certificate with QR, photo, and GPS. The platform includes gifting, a personal dashboard with harvest tracking, and payment integration. Fully responsive.",
    challenge:
      "The client needed a digital platform to sell olive trees as an investment. A transparent ownership system with certificates, gifting, and a dashboard for assets and harvest was required.",
    solution:
      "Built a full eCommerce platform in React with an intuitive purchase flow, personalized ownership certificates (PDF with QR), gifting with activation codes, and a dashboard with ownership history and harvest stats. Integrated Stripe and nodemailer.",
    image: "/images/image copy.png",
    videos: ["/images/usmanoff-cases/1765726788099-Olive.mp4"],
    gallery: [
      "/images/Screenshot 2026-01-11 at 11.39.49.png",
      "/images/Screenshot 2026-01-11 at 11.40.54.png",
      "/images/Screenshot 2026-01-11 at 11.41.43.png",
      "/images/Screenshot 2026-01-11 at 11.43.07.png",
    ],
    results: [
      { label: "Conversion", value: "+35%" },
      { label: "Trees sold", value: "500+" },
      { label: "Avg. order", value: "$180" },
      { label: "Gifts", value: "120+" },
    ],
    tags: ["React", "Node.js", "Stripe", "PostgreSQL", "PDF Generation", "QR Codes"],
    testimonial: {
      text: "The platform exceeded our expectations. The purchase flow is intuitive and the certificates look premium. Sales grew 35% after launch.",
      author: "Marco Ferretti",
      role: "CEO Global Olive Corporation",
    },
    duration: "3 months",
    team: "4 people",
    year: "2024",
    projectUrl: "https://myolive.shop/",
    evidencePack: {
      baseline: "Storefront conversion, average order value, and gift purchase share",
      period: "90 days pre-launch vs 90 days post-launch",
      source: "Store analytics + Stripe + order CRM",
      methodology: [
        "Conversion was calculated as purchase_completed / sessions.",
        "AOV was measured as revenue / orders excluding refunds.",
        "Gift demand was tracked by gift_purchase and gift_activation events.",
      ],
      artifacts: [
        "Checkout funnel with step conversion",
        "Order dashboard: AOV and repeat behavior",
        "Gift certificate activation report",
      ],
      metrics: [
        { name: "Storefront conversion", before: "2.6%", after: "3.5%", note: "+35%" },
        { name: "Trees sold", before: "210", after: "500+", note: "volume growth" },
        { name: "Gift purchases", before: "45", after: "120+", note: "x2.6" },
      ],
    },
  },
  {
    slug: "my-buyer-crm",
    title: "MY BUYER — CRM for Marketplaces",
    client: "MY BUYER",
    category: "E-commerce / CRM",
    description:
      "CRM for managing products from Chinese and CIS marketplaces. UX/UI for web and mobile apps.",
    fullDescription:
      "MY BUYER is a CRM for buyers, logistics, and sellers working with Chinese and CIS marketplaces. It manages orders, tracks shipments, automates settlements, and replaces spreadsheets. I led UX and UI design for web and mobile apps.",
    challenge:
      "Buyers and logistics used dozens of Excel sheets for orders, products, suppliers, and payments. This led to errors, data loss, and scaling issues.",
    solution:
      "Designed a CRM with an intuitive interface that replaced spreadsheets with a structured database. Developed UX/UI for web and iOS with a focus on speed and minimal clicks.",
    image: "/images/usmanoff-cases/1765752539773-m1.png",
    gallery: [
      "/images/usmanoff-cases/1765754612428-wWj0FiwYoA1e6yOrIDLQZ2Ym6k.png",
      "/images/usmanoff-cases/1765754695893-m1.avif",
      "/images/usmanoff-cases/1765754703662-m2.avif",
      "/images/usmanoff-cases/1765754710650-m3.avif",
      "/images/usmanoff-cases/1765754775451-e7yq4jvuHht7f44cakdX02GTc_width_1440_height_5525.png",
      "/images/usmanoff-cases/1765754807044-2RojtmMnT2UiT2gBgzGdDHBOKTs.webp",
    ],
    results: [
      { label: "Year", value: "2023" },
      { label: "Platforms", value: "Web + iOS" },
      { label: "Users", value: "5K+" },
      { label: "Time saved", value: "70%" },
    ],
    tags: ["CRM", "E-commerce", "iOS", "Web App", "Supply Chain"],
    duration: "4 months",
    team: "1 person",
    year: "2023",
  },
  {
    slug: "fintech-marketplace",
    title: "Card2Card — Mobile Payment App MVP",
    client: "NDA",
    category: "FinTech / Mobile",
    description:
      "Mobile app for card-to-card transfers worldwide. Automatic fees, simple flow, nothing extra.",
    fullDescription:
      "CARD 2 CARD is a mobile app for instant card-to-card transfers worldwide. Low fees, simple flow, no bloat. The app now runs under another name.",
    challenge:
      "Most banking apps are overloaded with bills, corporate accounts, investments, loyalty. Sending money card-to-card abroad is complicated. People mostly use two features: card transfers and transfers by phone.",
    solution:
      "Built a mobile app for seamless international card-to-card transfers between EU, US, Asia, and Africa via VISA, Mastercard, and USDT. Simplifies sending money abroad without extra features.",
    image: "/images/05f1e332931093.589da5ec81ead.gif",
    gallery: [
      "/images/Multiple-Isometric-iPhone-MockUps.png",
      "/images/2ceefb137491185.63bb560c97aec.png",
      "/images/05f1e332931093.589da5ec81ead.gif",
    ],
    results: [
      { label: "Developers", value: "14" },
      { label: "Gateways", value: "VISA, MC, USDT" },
      { label: "Regions", value: "EU, US, Asia, Africa" },
      { label: "Year", value: "2022" },
    ],
    tags: ["React Native", "Node.js", "VISA API", "Mastercard", "USDT", "FinTech"],
    testimonial: {
      text: "YappiX built an MVP that let us quickly enter the market and validate the idea. The app is live and profitable.",
      author: "Name withheld",
      role: "NDA",
    },
    duration: "4 months",
    team: "15 people",
    year: "2022",
  },
  {
    slug: "ai-food-assistant",
    title: "Order Assistant — Voice Food Ordering",
    client: "Food Delivery",
    category: "AI / Voice",
    description:
      "Voice AI assistant for hands-free food ordering. Ideal for drivers and people with limited mobility.",
    fullDescription:
      "Hands-free food ordering via voice AI. Users order by voice without touching the phone — ideal for drivers. The assistant understands natural speech, clarifies the order, and accepts card payment.",
    challenge:
      "Drivers and people with busy hands can’t safely use food delivery apps. Existing solutions require touching the screen, which is distracting and dangerous on the road.",
    solution:
      "Built a voice AI assistant on GPT-4 with speech recognition. The user speaks the order in natural language; the assistant clarifies, confirms, and takes payment — all by voice. Integrated with payment systems for touch-free card payment.",
    image: "/images/checkout_ai_2.mp4",
    videos: ["/images/checkout_ai_2.mp4", "/images/food_ordering.mp4"],
    gallery: [],
    results: [
      { label: "Conversion", value: "+40%" },
      { label: "Hands-free", value: "100%" },
      { label: "Availability", value: "24/7" },
      { label: "Order time", value: "30 sec" },
    ],
    tags: ["GPT-3", "Speech Recognition", "Voice AI", "Stripe", "React Native"],
    testimonial: {
      text: "I can order food while driving without taking my eyes off the road. I just say what I want and the assistant does the rest.",
      author: "User",
      role: "Driver",
    },
    duration: "3 months",
    team: "3 people",
    year: "2021",
  },
  {
    slug: "yappix-cms",
    title: "YappiX CMS — Mobile App Builder",
    client: "YappiX (own product)",
    category: "SaaS / Mobile",
    description:
      "No-code builder for native mobile apps with CMS, AR, and speech recognition. Supported by Microsoft for Startups.",
    fullDescription:
      "YappiX CMS is a no-code builder for native mobile apps. Create full iOS and Android apps via a visual interface with a CMS. Supports AR and speech recognition. The project received R&D grants and Microsoft for Startups membership.",
    challenge:
      "Building mobile apps required expensive developers and months of work. SMBs couldn’t afford their own app; existing builders only produced web wrappers, not native apps.",
    solution:
      "Built a unique compilation system that generates real native code from a visual builder. The compilation approach was a breakthrough at the time and earned R&D grants. Report available on GISNAUKA.",
    image: "/images/yappix.png",
    gallery: [
      "/images/portal.startups.microsoft.png",
      "/images/1765791581257-yJhYOoAv5rNuaqBK66Kdsw73Xg.avif",
      "/images/1765791666409-Qwl2eN6NaWQvwvcVj32lG6Vw_width_2880_height_1800.avif",
      "/images/1765791715753-akppqeDKMhBDLRyBcnGi33oLFx8_width_2880_height_1800.avif",
      "/images/usmanoff-cases/1765787233057-rFdekXNSoixQNGAjfoaAIBSb0.png",
      "/images/usmanoff-cases/1765787506472-lBZIZHdBxCz8pA7aFPWvXLJgvU.png",
      "/images/usmanoff-cases/1765788247874-QzyrAdflr3gbPGCk2rS1HaiYA.png",
      "/images/usmanoff-cases/1765788398160-GoaF2xdIygf9WXiWkYDUZDXMc.png",
      "/images/usmanoff-cases/1765788491990-aIcw6ESkFjkSVx0Vjh4PYrgIoYQ.png",
      "/images/usmanoff-cases/1765788543335-JV8VcN4eOilzQSfaD4hnuAOc.png",
      "/images/usmanoff-cases/1765788614061-FDreNuDLWqXyLKXfXtzImze8.png",
      "/images/usmanoff-cases/1765789160330-WAbRi5ePcQxB4bll5Ikr32FXJg_width_2000_height_1125.png",
      "/images/usmanoff-cases/1765789714843-Fvt84cokEFC0r2kXIbefpewpg_width_2118_height_1580.png",
      "/images/usmanoff-cases/1765790107346-uiRr9WqzbrenYqWPyHmyLoCnQx8.png",
      "/images/usmanoff-cases/1765790227649-ZmFmyAcAIUkD359pzmKQmImtUA.png",
      "/images/usmanoff-cases/1765790450988-HclPXhcgoChAVy7gAkoviYHMQQ.png",
      "/images/usmanoff-cases/1765790614933-t4qwNc2HIdIO2Xxht9R0nL3V6vQ_width_1400_height_788.png",
      "/images/usmanoff-cases/1765791070641-eOI3HR0TuqLWnIGNqy0M18VtYA_width_1920_height_1080.png",
      "/images/usmanoff-cases/1765791373675-tl7BJU51FE604QuglrLCUEysDA_width_1920_height_1080.png",
    ],
    results: [
      { label: "Grants", value: "FSI + MS" },
      { label: "Investments", value: "2 rounds" },
      { label: "Resident", value: "Skolkovo" },
      { label: "Technology", value: "Patents" },
    ],
    tags: ["React", "Node.js", "Swift", "Kotlin", "AR", "Speech Recognition", "No-code"],
    testimonial: {
      text: "YappiX CMS is a breakthrough in building mobile apps. The compilation system we built generates real native code without programming.",
      author: "Renat Usmanov",
      role: "Founder YappiX",
    },
    duration: "3+ years",
    team: "8 people",
    year: "2015–2022",
    evidencePack: {
      baseline: "Mobile release speed and MVP launch cost before platform standardization",
      period: "Project cycles before internal CMS vs cycles after adoption",
      source: "Product backlog + release logs + R&D finance model",
      methodology: [
        "Release speed measured from approved brief to MVP publication.",
        "Cost reduction measured by actual team effort and delivery budget.",
        "Quality validated through native iOS/Android release checklist.",
      ],
      artifacts: [
        "Visual builder and compile-pipeline architecture map",
        "Release timeline before/after CMS",
        "R&D package: grant and patent support artifacts",
      ],
      metrics: [
        { name: "MVP time-to-market", before: "14-18 weeks", after: "3-5 weeks", note: "~3x faster" },
        { name: "MVP launch cost", before: "1.0x", after: "0.42x", note: "-58%" },
        { name: "Reusable module share", before: "15%", after: "70%", note: "+55 pp" },
      ],
    },
  },
  {
    slug: "coinpulse-crypto",
    title: "CoinPulse — Crypto Market Dashboard",
    client: "Community",
    category: "FinTech / Crypto",
    description: "Production-ready crypto dashboard template for Next.js. Figma-to-code conversion in 30 minutes powered by design tokens and proper component markup.",
    fullDescription:
      "CoinPulse is a production-ready cryptocurrency dashboard template, converted from a Figma mockup to a live Next.js app in just 30 minutes. The secret is design tokens (colors, typography, spacing), auto layout, and proper Figma component structure that maps 1:1 to Tailwind CSS. Perfect for crypto exchanges, DeFi dashboards, portfolio trackers, and fintech startups.",
    challenge:
      "Building a crypto dashboard from scratch takes weeks: design, chart/table markup, responsive layout. Designers and developers work out of sync, and revisions pile up.",
    solution:
      "Designed the mockup in Figma with design tokens and auto layout, enabling full dashboard conversion to Next.js + Tailwind in 30 minutes. Integrated CoinGecko API for live data, Recharts for charts, and Radix UI for accessible components.",
    image: "/images/coinpulse/cover.png",
    gallery: [
      "/images/coinpulse/dashboard.png",
      "/images/coinpulse/details.png",
      "/images/coinpulse/tokens.png",
    ],
    results: [
      { label: "Figma → Code", value: "30 min" },
      { label: "Stack", value: "Next.js 14" },
      { label: "API", value: "CoinGecko" },
      { label: "Components", value: "40+" },
    ],
    tags: ["Next.js", "Tailwind CSS", "Figma Tokens", "CoinGecko API", "Recharts", "Radix UI", "TypeScript"],
    duration: "1 day",
    team: "1 person",
    year: "2025",
    isTemplate: true,
    projectUrl: "https://coin.yappix.ru",
    productUrl: "https://github.com/usmanoffcom/coinpulse",
    productLabel: "Get code on GitHub",
  },
  {
    slug: "projectorium-cicd",
    title: "Projectorium — CI/CD SaaS",
    client: "Projectorium",
    category: "DevOps / SaaS",
    description:
      "CI/CD SaaS for deploying Node.js and Python apps. Product story, landing, design system, 3D in Spline.",
    fullDescription:
      "Projectorium is a CI/CD SaaS platform for self-service deployment of Node.js and Python apps. It simplifies server setup, automates deploy and monitoring. I designed the product story, landing, design system, and 3D visualization in Spline, then built it in Framer.",
    challenge:
      "Deploying apps requires DevOps knowledge: server setup, CI/CD, monitoring. Existing options are either complex (AWS) or limited (Heroku). Developers need a simple platform for quick deploy.",
    solution:
      "Designed a platform concept with a simple 3-click deploy UI. Created the design system, landing with 3D in Spline to show the deploy flow, and implemented it in Framer.",
    image: "/m1fjlIfFhD1Rbz3LZBm0KPjCnIc.png",
    gallery: [
      "/m1fjlIfFhD1Rbz3LZBm0KPjCnIc.png",
      "/images/usmanoff-cases/1765784900404-p2.png",
      "/images/usmanoff-cases/1765785752006-p3.png",
    ],
    results: [
      { label: "Year", value: "2024" },
      { label: "Stack", value: "Node.js + Python" },
      { label: "3D", value: "Spline" },
      { label: "Platform", value: "Framer" },
    ],
    tags: ["CI/CD", "SaaS", "DevOps", "VDS", "Framer", "Spline"],
    duration: "2 months",
    team: "1 person",
    year: "2024",
  },
  {
    slug: "minimal-portfolio-template",
    title: "Minimal Portfolio — Template for Developers",
    client: "Community",
    category: "Design / Template",
    description:
      "Minimal portfolio template for web developers. Figma, Framer, and Next.js versions with clean code.",
    fullDescription:
      "A minimal portfolio for web developers, available in Figma, Framer, and Next.js. I designed the layout, converted to Framer, and built a production-ready Next.js version with clean, reusable code. 1000+ developers downloaded the template.",
    challenge:
      "Developers need solid portfolios to showcase work, but building from scratch takes time. Existing templates are either bloated or outdated.",
    solution:
      "Created a minimal but functional template in three formats: Figma for design customization, Framer for quick no-code deploy, and Next.js for full control over code.",
    image: "/images/usmanoff-cases/1765793571452-5LXgMXEyVXeZH3OcVnyj6ZWrGY.png",
    gallery: [],
    results: [
      { label: "Year", value: "2024" },
      { label: "Formats", value: "3 versions" },
      { label: "Downloads", value: "1K+" },
      { label: "Rating", value: "4.9/5" },
    ],
    tags: ["Template", "Next.js", "Framer", "Figma", "Open Source"],
    duration: "1 month",
    team: "1 person",
    year: "2024",
  },
  {
    slug: "bankist-ui-kit",
    title: "Bankist — UI Kit for Banking Apps",
    client: "Figma Community",
    category: "Design / UI Kit",
    description:
      "Free UI kit for banking mobile apps. Figma Community. Full set of screens and components.",
    fullDescription:
      "Bankist Mobile App is a free UI kit for any banking app, made for Figma Community. It includes a full set of screens (login, home, transfers, cards, history) and components with states. 8K+ downloads, 2.5K+ likes.",
    challenge:
      "Designers spend weeks building banking UIs from scratch. Existing kits are either paid or incomplete. The community needed a quality free resource.",
    solution:
      "Created a comprehensive UI kit with 20+ screens covering typical banking flows: auth, transfers, cards, transaction history. All components have states (default, hover, active, disabled). Published for free on Figma Community.",
    image: "/images/usmanoff-cases/1765794633140-vviamyylrzvr3japyiye.mp4",
    gallery: [],
    results: [
      { label: "Year", value: "2021" },
      { label: "Likes", value: "2.5K+" },
      { label: "Duplicates", value: "8K+" },
      { label: "Screens", value: "20+" },
    ],
    tags: ["UI Kit", "Figma", "Finance", "Mobile", "Free", "Community"],
    duration: "1 month",
    team: "1 person",
    year: "2021",
  },
  {
    slug: "yandex-go-scooters",
    title: "Yandex Go — Scooter Rental Design",
    client: "Figma Community",
    category: "Design / Mobile",
    description:
      "Free design for Figma Community. Scooter rental app interface concept for Yandex Go.",
    fullDescription:
      "A design concept for the Yandex Go scooter rental app, made for Figma Community. Includes scooter search, QR scan, navigation, active ride screen, and history. 3K+ downloads.",
    challenge:
      "Scooter rental apps should be as simple as possible — users want to start a ride in seconds. Existing solutions are cluttered or confusing.",
    solution:
      "Designed a minimal interface focused on speed: map with scooters, quick QR scan, large ride control buttons. Used Yandex brand colors for recognition.",
    image: "/images/usmanoff-cases/1765794832056-CEcpn8RuVyfTk0ujNHo9IeBgI6M.png",
    gallery: [],
    results: [
      { label: "Year", value: "2020" },
      { label: "Views", value: "15K+" },
      { label: "Duplicates", value: "3K+" },
      { label: "Flow", value: "5 screens" },
    ],
    tags: ["Figma", "Mobile", "Transport", "UX", "Community"],
    duration: "2 weeks",
    team: "1 person",
    year: "2020",
  },
]

export function getCaseBySlugEn(slug: string): CaseStudy | undefined {
  return casesDataEn.find((c) => c.slug === slug)
}

export function getAllCaseSlugsEn(): string[] {
  return casesDataEn.map((c) => c.slug)
}

if (typeof process !== "undefined") {
  const { casesData } = require("./cases-data") as { casesData: CaseStudy[] }
  for (const enCase of casesDataEn) {
    const ruCase = casesData.find((c: CaseStudy) => c.slug === enCase.slug)
    if (ruCase && ruCase.title === enCase.title) {
      throw new Error(
        `[cases-data] Duplicate H1/title between RU and EN for slug "${enCase.slug}": "${enCase.title}". RU title must differ from EN.`
      )
    }
  }
}
