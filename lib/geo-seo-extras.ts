/** Keywords + FAQ по городам — отдельно от базовых полей GeoCity, чтобы не раздувать один объект. */
export interface GeoFaqItem {
  qRu: string
  aRu: string
  qEn: string
  aEn: string
}

export type GeoSeoExtra = {
  keywordsRu: string[]
  keywordsEn: string[]
  faq: GeoFaqItem[]
}

export const GEO_SEO_EXTRAS: Record<string, GeoSeoExtra> = {
  moskva: {
    keywordsRu: [
      "разработка сайтов Москва",
      "разработка ПО Сколково",
      "IT-студия Москва",
      "веб-разработка с ИИ",
      "мобильные приложения Москва",
      "ROI автоматизация",
      "YappiX Москва",
    ],
    keywordsEn: [
      "software development Moscow",
      "Skolkovo IT company",
      "web development AI Russia",
      "Moscow software agency",
      "mobile apps Moscow",
      "ROI automation consulting",
      "YappiX Moscow",
    ],
    faq: [
      {
        qRu: "Где находится офис YappiX в Москве?",
        aRu:
          "Офис в инновационном центре Сколково (Большой бульвар 42). Встречи по договорённости; часть коммуникации — онлайн в вашем часовом поясе UTC+3.",
        qEn: "Where is YappiX’s Moscow office?",
        aEn:
          "Skolkovo Innovation Center (Bolshoy Boulevard 42). Meetings by appointment; we also work online in the UTC+3 timezone.",
      },
      {
        qRu: "Подходит ли вам проект с оплатой и договором по РФ?",
        aRu:
          "Да: работаем с российскими юрлицами и ИП, заключаем договор, учитываем требования по персональным данным и отраслевым нормам по согласованию с вами.",
        qEn: "Do you work with Russian legal entities and contracts?",
        aEn:
          "Yes — we contract with Russian companies and sole proprietors and align on data protection and industry requirements for your project.",
      },
      {
        qRu: "Как вы считаете экономику и ROI до старта?",
        aRu:
          "На этапе отбора фиксируем гипотезы экономии, сценарии нагрузки и критерии окупаемости; внедрение AI-контура привязываем к измеримым метрикам (время, конверсия, стоимость лида).",
        qEn: "How do you estimate ROI before development starts?",
        aEn:
          "We document savings hypotheses, load scenarios, and payback criteria early; AI and automation scope ties to measurable metrics (time, conversion, CAC).",
      },
      {
        qRu: "С чего начать консультацию по проекту в Москве?",
        aRu:
          "Оставьте заявку на сайте или напишите на sales@yappix.ru — подберём формат созвона или встречи в Сколково и предложим следующий шаг без обязательств по оплате на первом этапе.",
        qEn: "How do I start a consultation for a Moscow-area project?",
        aEn:
          "Submit a request on the site or email sales@yappix.ru — we’ll schedule a call or a Skolkovo meeting and suggest a clear next step.",
      },
    ],
  },
  ssha: {
    keywordsRu: [
      "разработка SaaS США",
      "Delaware компания разработка",
      "AI automation USA",
      "стартап Y Combinator разработка",
      "unit economics ROI",
      "YappiX USA",
    ],
    keywordsEn: [
      "US SaaS development",
      "Delaware software company",
      "AI automation United States",
      "YC startup development",
      "unit economics software",
      "YappiX Delaware",
    ],
    faq: [
      {
        qRu: "Почему юридическое лицо в Delaware?",
        aRu:
          "Delaware — распространённая юрисдикция для US-стартапов и SaaS: предсказуемое корпоративное право и удобство для инвесторов. Договор и биллинг согласуем под вашу структуру.",
        qEn: "Why is the company incorporated in Delaware?",
        aEn:
          "Delaware is a common US jurisdiction for startups and SaaS—predictable corporate law and investor familiarity. We align contracts and billing with your entity structure.",
      },
      {
        qRu: "Работаете ли вы с VC и акселераторами?",
        aRu:
          "Да, есть опыт продуктов под требования инвесторов: метрики, отчётность по внедрению, дорожная карта релизов и прозрачная модель unit-экономики.",
        qEn: "Do you work with VC-backed and accelerator startups?",
        aEn:
          "Yes — we align delivery with investor expectations: metrics, rollout reporting, and transparent unit economics.",
      },
      {
        qRu: "Как учитываются часовые пояса и коммуникация с США?",
        aRu:
          "Планируем созвоны в пересечении рабочих окон (US East/West), фиксируем SLA по ответам в договоре и используем общие трекеры задач.",
        qEn: "How do you handle US time zones and communication?",
        aEn:
          "We schedule across US business hours, define response SLAs in the contract, and use shared task tracking.",
      },
      {
        qRu: "Что нужно для старта проекта на рынке США?",
        aRu:
          "Краткое ТЗ или бриф, понимание целевой аудитории и монетизации, доступы к аналитике при наличии. На созвоне уточняем compliance (GDPR/CCPA при необходимости) и интеграции.",
        qEn: "What do you need to kick off a US-market project?",
        aEn:
          "A brief or PRD, ICP and monetization context, analytics access if available. On a call we clarify compliance (e.g. GDPR/CCPA) and integrations.",
      },
    ],
  },
  germaniya: {
    keywordsRu: [
      "разработка сайтов Германия",
      "GDPR разработка ПО",
      "веб-разработка DACH",
      "AI Германия заказная разработка",
      "YappiX Germany",
    ],
    keywordsEn: [
      "software development Germany",
      "GDPR compliant development",
      "DACH web agency",
      "AI development Germany",
      "YappiX Germany representative",
    ],
    faq: [
      {
        qRu: "Как вы учитываете GDPR и данные в ЕС?",
        aRu:
          "Закладываем минимизацию данных, цели обработки, сроки хранения и роли контроллера/процессора в архитектуру; при необходимости подключаем вашего DPO или юристов.",
        qEn: "How do you address GDPR for EU data?",
        aEn:
          "We design for data minimization, lawful basis, retention, and controller/processor roles; we can work with your DPO or legal counsel.",
      },
      {
        qRu: "Есть ли представительство в Германии?",
        aRu:
          "Да — представительство для коммуникации с немецким рынком; детали договора и выставления счетов согласуем индивидуально.",
        qEn: "Do you have a presence in Germany?",
        aEn:
          "Yes — a representative office for the German market; invoicing and contracting are agreed per project.",
      },
      {
        qRu: "На каком языке ведёте проекты для DACH?",
        aRu:
          "Рабочие языки — немецкий и английский; документацию и релизы согласуем под аудиторию (DE/AT/CH) и локаль форматов.",
        qEn: "Which languages do you use for DACH projects?",
        aEn:
          "German and English; we align docs and releases with DE/AT/CH audiences and local formats.",
      },
      {
        qRu: "Как оцениваете сроки и стоимость?",
        aRu:
          "Даём ориентир по этапам после брифа, фиксируем допущения и риски; для долгих контуров возможен поэтапный бюджет с контрольными точками.",
        qEn: "How do you estimate timeline and cost?",
        aEn:
          "We provide phased estimates after the brief, state assumptions and risks, and can use milestone budgets for longer engagements.",
      },
    ],
  },
  turciya: {
    keywordsRu: [
      "разработка сайтов Стамбул",
      "IT Турция MENA",
      "мобильные приложения Турция",
      "AI автоматизация Istanbul",
      "YappiX Turkey",
    ],
    keywordsEn: [
      "software development Istanbul",
      "Turkey MENA tech",
      "mobile apps Turkey",
      "AI automation Istanbul",
      "YappiX Maslak",
    ],
    faq: [
      {
        qRu: "Где офис в Стамбуле?",
        aRu:
          "Офис в деловом районе Maslak (Büyükdere Caddesi). Удобно для встреч и созвонов в часовом поясе UTC+3.",
        qEn: "Where is your Istanbul office?",
        aEn:
          "Maslak business district (Büyükdere Caddesi), UTC+3 — suitable for meetings and calls across the region.",
      },
      {
        qRu: "Подходит ли вам проект с фокусом на MENA?",
        aRu:
          "Да: учитываем локальные платежи, языковые версии и специфику роста в регионе при проектировании продукта и маркетинга.",
        qEn: "Do you take MENA-focused projects?",
        aEn:
          "Yes — we factor local payments, language variants, and regional growth patterns into product design.",
      },
      {
        qRu: "Как строите коммуникацию с турецкими командами?",
        aRu:
          "Единый бэклог, регулярные демо, прозрачные релизы; при необходимости подключаем локальных партнёров по инфраструктуре.",
        qEn: "How do you collaborate with Turkish teams?",
        aEn:
          "Shared backlog, demos, transparent releases; local infra partners when needed.",
      },
      {
        qRu: "Можно ли начать с пилота?",
        aRu:
          "Да — часто начинаем с ограниченного скоупа и метрик успеха, затем масштабируем при достижении порогов.",
        qEn: "Can we start with a pilot?",
        aEn:
          "Yes — we often begin with a limited scope and success metrics, then scale when thresholds are met.",
      },
    ],
  },
  serbiya: {
    keywordsRu: [
      "разработка сайтов Белград",
      "IT аутсорс Сербия",
      "веб-разработка SEE",
      "AI Сербия заказная разработка",
      "YappiX Serbia",
    ],
    keywordsEn: [
      "software development Belgrade",
      "Serbia outsourcing IT",
      "Southeast Europe web agency",
      "AI development Serbia",
      "YappiX Novi Beograd",
    ],
    faq: [
      {
        qRu: "Почему офис в Нови-Београде?",
        aRu:
          "Белград — удобный хаб для SEE: европейское качество процессов, конкурентные ставки и пересечение с EU/US по таймзонам.",
        qEn: "Why Novi Beograd?",
        aEn:
          "Belgrade is a strong SEE hub—solid delivery quality, competitive rates, and workable overlap with EU/US timezones.",
      },
      {
        qRu: "Работаете ли с компаниями из ЕС?",
        aRu:
          "Да — типичны смешанные команды и договоры в валюте/формате под контрагента; налоговые и юридические детали уточняем с вашей стороной.",
        qEn: "Do you work with EU-based companies?",
        aEn:
          "Yes — mixed teams and contracts in the currency/format you need; tax/legal details coordinated with your advisors.",
      },
      {
        qRu: "Как обеспечиваете качество кода и безопасность?",
        aRu:
          "Code review, CI, секреты вне репозитория, минимальные привилегии доступа; для чувствительных отраслей — ужесточённые политики по согласованию.",
        qEn: "How do you ensure code quality and security?",
        aEn:
          "Reviews, CI, secrets outside the repo, least-privilege access; stricter policies for sensitive industries when agreed.",
      },
      {
        qRu: "Какой тип проектов вы усиливаете в регионе?",
        aRu:
          "Веб-сервисы, B2B-кабинеты, интеграции, AI-контуры с измеримым эффектом — от автоматизации поддержки до внутренних инструментов.",
        qEn: "What project types do you emphasize in the region?",
        aEn:
          "Web services, B2B portals, integrations, AI contours with measurable impact—from support automation to internal tools.",
      },
    ],
  },
  kazahstan: {
    keywordsRu: [
      "разработка сайтов Алматы",
      "IT Казахстан Kaspi",
      "интеграция 1С веб",
      "мобильные приложения Казахстан",
      "YappiX Kazakhstan",
    ],
    keywordsEn: [
      "software development Almaty",
      "Kazakhstan Kaspi integration",
      "1C web integration",
      "mobile apps Kazakhstan",
      "YappiX Almaty",
    ],
    faq: [
      {
        qRu: "Помогаете ли с интеграцией Kaspi и 1С?",
        aRu:
          "Да — проектируем обмен данными, очереди и отказоустойчивость; конкретные сценарии согласуем после аудита ваших систем.",
        qEn: "Do you integrate with Kaspi and 1C?",
        aEn:
          "Yes — we design data flows, queues, and resilience; scenarios are agreed after a short systems audit.",
      },
      {
        qRu: "Как учитываете кириллицу и латиницу в продуктах?",
        aRu:
          "Закладываем локаль, шрифты, SEO и контентные правила для KZ-аудитории; тестируем на реальных данных ввода.",
        qEn: "How do you handle Cyrillic and Latin in products?",
        aEn:
          "We plan locale, fonts, SEO, and content rules for KZ audiences and test with realistic input data.",
      },
      {
        qRu: "В каком часовом поясе ведёте проекты?",
        aRu:
          "Офис ориентирован на UTC+6 (Алматы); созвоны планируем с учётом вашей команды в регионе и глобальных стейкхолдеров.",
        qEn: "Which timezone do you operate in?",
        aEn:
          "Almaty UTC+6; we schedule calls across your regional and global stakeholders.",
      },
      {
        qRu: "С чего начать, если бизнес только выходит на цифровизацию?",
        aRu:
          "Созвон и короткий аудит процессов: где узкие места, что автоматизировать первым и какой эффект измерять в первые 30–60 дней.",
        qEn: "Where to start if we’re early in digitalization?",
        aEn:
          "A call and a short process audit: bottlenecks, what to automate first, and what to measure in the first 30–60 days.",
      },
    ],
  },
}

export function getGeoSeoExtra(slugRu: string): GeoSeoExtra | undefined {
  return GEO_SEO_EXTRAS[slugRu]
}
