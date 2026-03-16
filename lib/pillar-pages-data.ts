export type PillarLocale = "ru" | "en"
export type PillarSlug = "roi-automation" | "ai-contour" | "rag-search"

export interface PillarFaq {
  question: string
  answer: string
}

export interface PillarSection {
  title: string
  body: string
}

export interface PillarPage {
  slug: PillarSlug
  title: string
  description: string
  h1: string
  intro: string
  canonicalPath: string
  ctaLabel: string
  ctaHref: string
  sections: PillarSection[]
  relatedCases: string[]
  relatedServices: string[]
  faqs: PillarFaq[]
}

export const pillarPagesByLocale: Record<PillarLocale, Record<PillarSlug, PillarPage>> = {
  ru: {
    "roi-automation": {
      slug: "roi-automation",
      title: "Автоматизация с ROI — как внедрять ИИ с измеримым результатом | YappiX",
      description: "Как рассчитать окупаемость AI-внедрения, какие KPI использовать и как контролировать эффект. Методика, кейсы, калькулятор ROI.",
      h1: "Автоматизация с ROI: как внедрять ИИ с измеримым результатом",
      intro: "Мы не запускаем AI-проекты без финансовой модели. На этой странице — методика расчёта ROI, типовые сценарии экономии и реальные кейсы с метриками до/после.",
      canonicalPath: "/avtomatizaciya-s-roi",
      ctaLabel: "Рассчитать экономию для вашего процесса",
      ctaHref: "/kontakty",
      sections: [
        {
          title: "Зачем считать ROI до старта",
          body: "70% AI-проектов не окупаются, потому что запускаются без baseline и целевых метрик. Мы фиксируем текущие потери (объём операций, время, стоимость часа) и прогнозируем экономию до первой строчки кода.",
        },
        {
          title: "Как выглядит baseline",
          body: "Baseline — это измеримое состояние процесса до внедрения: количество обращений в день, медиана времени обработки, стоимость часа сотрудника, доля ручного труда. Без baseline невозможно доказать эффект.",
        },
        {
          title: "KPI и метрики эффекта",
          body: "Типовые KPI: сокращение TTR (time-to-resolution), доля auto-resolved обращений, экономия в рублях/месяц, payback period. Каждый KPI привязан к источнику данных и периоду сравнения.",
        },
        {
          title: "Типовые сценарии экономии",
          body: "Поиск информации в базе знаний: экономия 40–60% времени. Проверка документов: сокращение ручных операций на 70%. Обработка обратной связи: автозакрытие 30–50% обращений. Все цифры — из реальных внедрений с evidence pack.",
        },
        {
          title: "Ограничения расчёта",
          body: "ROI-модель строится на допущениях. Мы явно указываем: какие данные взяты из реальной аналитики, какие — экспертные оценки, и какова чувствительность модели к изменению ключевых параметров.",
        },
      ],
      relatedCases: ["myunion-platform", "global-olive-corporation", "priboy-hotels"],
      relatedServices: ["ai-chat-boty", "razrabotka-sajtov"],
      faqs: [
        { question: "Сколько стоит расчёт ROI?", answer: "Входит в стоимость пилота автоматизации (от 150 000 ₽). Финансовая модель передаётся клиенту как артефакт проекта." },
        { question: "Что если ROI отрицательный?", answer: "Мы честно скажем, что автоматизация этого процесса не окупится, и предложим альтернативный сценарий или откажемся от проекта." },
        { question: "Как долго окупается типовое внедрение?", answer: "3–6 месяцев при корректном выборе процесса и фиксированных метриках до/после." },
      ],
    },
    "ai-contour": {
      slug: "ai-contour",
      title: "Управляемый AI-контур — архитектура, безопасность и контроль качества | YappiX",
      description: "Как выглядит управляемый AI-контур: RBAC, логирование, метрики качества ответов, контроль галлюцинаций, SLO и наблюдаемость.",
      h1: "Управляемый AI-контур: архитектура, безопасность и контроль качества",
      intro: "Мы внедряем не «чат-бота», а управляемый операционный контур с разграничением доступа, логированием, метриками качества и SLA. На этой странице — как это устроено.",
      canonicalPath: "/upravlyaemyj-ai-kontur",
      ctaLabel: "Обсудить внедрение AI-контура",
      ctaHref: "/kontakty",
      sections: [
        {
          title: "Что такое AI-контур",
          body: "AI-контур — это не LLM-промпт, а операционная система: данные → модель → правила ответа → логирование → метрики → алерты. Каждый компонент управляется отдельно, что позволяет итеративно улучшать качество без переделки архитектуры.",
        },
        {
          title: "RBAC и доступы",
          body: "Роли определяют, кто видит какие данные и какие действия может выполнять ассистент. Это критично для enterprise-клиентов: персональные данные, финансы и комплаенс требуют гранулярного контроля.",
        },
        {
          title: "Логирование и аудит",
          body: "Каждый запрос и ответ записывается: входные данные, контекст, сгенерированный ответ, confidence score, время отклика. Это позволяет проводить post-mortem анализ и регулярный QA.",
        },
        {
          title: "Метрики качества ответов",
          body: "Accuracy (доля корректных ответов), coverage (доля вопросов, на которые ассистент ответил), escalation rate (доля переданных оператору), time saved (экономия времени в часах).",
        },
        {
          title: "Контроль галлюцинаций",
          body: "Ограничение контура данных: ассистент отвечает только на основе предоставленных документов. Правила ответа: если confidence ниже порога — эскалация, а не ответ. Регулярное A/B тестирование на контрольной выборке.",
        },
        {
          title: "SLO и наблюдаемость",
          body: "Для каждого AI-контура задаём SLO: время отклика <2s, accuracy >90%, availability 99.5%. Мониторинг через Prometheus/Grafana с алертами в Telegram/Slack при деградации.",
        },
      ],
      relatedCases: ["myunion-platform", "ai-food-assistant"],
      relatedServices: ["ai-chat-boty", "devops"],
      faqs: [
        { question: "Чем AI-контур отличается от обычного чат-бота?", answer: "Чат-бот — это интерфейс. AI-контур — это операционная система: роли, логи, метрики, алерты, SLA. Это разница между «игрушкой» и «инструментом»." },
        { question: "Можно ли развернуть в закрытом контуре?", answer: "Да. Поддерживаем on-premise и private cloud, включая российские облака, с self-hosted моделями." },
        { question: "Как контролируются галлюцинации?", answer: "Тремя способами: ограничение контура данных (RAG), правила confidence-порогов с эскалацией, и регулярное тестирование на контрольной выборке." },
      ],
    },
    "rag-search": {
      slug: "rag-search",
      title: "RAG-поиск по базе знаний — архитектура и оценка качества | YappiX",
      description: "RAG-поиск по корпоративной базе знаний: архитектура, безопасность, оценка качества, интеграции с CRM/ERP и стоимость внедрения.",
      h1: "RAG-поиск по базе знаний: от архитектуры до оценки качества",
      intro: "RAG (Retrieval-Augmented Generation) — это поиск информации в корпоративных документах с генерацией ответа на естественном языке. На этой странице — как это устроено, как оценивать качество и сколько стоит.",
      canonicalPath: "/rag-poisk-po-baze-znanij",
      ctaLabel: "Обсудить RAG-решение",
      ctaHref: "/kontakty",
      sections: [
        {
          title: "Что такое RAG",
          body: "RAG — это архитектурный паттерн: документы разбиваются на чанки, превращаются в векторные эмбеддинги и индексируются. При запросе пользователя система находит релевантные фрагменты и передаёт их LLM для генерации ответа с ссылками на источники.",
        },
        {
          title: "Архитектура RAG-системы",
          body: "Компоненты: документный пайплайн (парсинг, чанкинг, эмбеддинги), векторная БД (Pinecone/Qdrant/pgvector), retriever (поиск по запросу), LLM (генерация ответа), постпроцессинг (цитирование, фильтрация).",
        },
        {
          title: "Безопасность и доступы",
          body: "Документы часто содержат конфиденциальную информацию. RAG-система должна наследовать политику доступа: пользователь видит только те документы, к которым у него есть права. Это реализуется через metadata-фильтры при поиске.",
        },
        {
          title: "Оценка качества RAG",
          body: "Ключевые метрики: precision@k (доля релевантных чанков среди top-k), recall (полнота покрытия), answer correctness (корректность сгенерированного ответа), faithfulness (соответствие ответа источникам). Оцениваем на ручной выборке 50-100 вопросов.",
        },
        {
          title: "Стоимость и ROI",
          body: "Типовой пилот RAG: от 150 000 ₽ за 2-3 недели. Экономия: 40-60% времени на поиск информации. При 10+ сотрудниках, тратящих 1-2 часа в день на поиск, окупаемость — 2-4 месяца.",
        },
      ],
      relatedCases: ["myunion-platform"],
      relatedServices: ["ai-chat-boty", "saas-paas"],
      faqs: [
        { question: "RAG или fine-tuning — что выбрать?", answer: "RAG — когда нужен поиск по обновляемым документам. Fine-tuning — когда нужно изменить стиль или формат ответа модели. В большинстве корпоративных сценариев RAG эффективнее и дешевле." },
        { question: "Какие документы можно индексировать?", answer: "PDF, DOCX, XLSX, HTML, Markdown, Confluence, Notion, Google Docs. Поддерживаем OCR для сканов. Пайплайн настраивается под формат клиента." },
        { question: "Можно ли развернуть on-premise?", answer: "Да. Векторная БД, embedding-модель и LLM могут работать в закрытом контуре. Используем open-source модели (Llama, Mistral) для on-prem сценариев." },
      ],
    },
  },
  en: {
    "roi-automation": {
      slug: "roi-automation",
      title: "ROI-First Automation — How to Implement AI with Measurable Results | YappiX",
      description: "How to calculate AI implementation ROI, which KPIs to use, and how to control the effect. Methodology, case studies, ROI calculator.",
      h1: "ROI-First Automation: How to Implement AI with Measurable Results",
      intro: "We don't launch AI projects without a financial model. This page covers ROI calculation methodology, typical savings scenarios, and real case studies with before/after metrics.",
      canonicalPath: "/en/roi-first-automation",
      ctaLabel: "Calculate savings for your process",
      ctaHref: "/en/contact",
      sections: [
        { title: "Why calculate ROI before launch", body: "70% of AI projects fail to deliver ROI because they launch without a baseline or target metrics. We capture current losses (operation volume, time, hourly cost) and forecast savings before writing a single line of code." },
        { title: "What a baseline looks like", body: "A baseline is the measurable state of a process before implementation: daily requests, median processing time, employee hourly cost, share of manual work. Without a baseline, you cannot prove impact." },
        { title: "KPIs and impact metrics", body: "Typical KPIs: TTR reduction (time-to-resolution), auto-resolved share, monthly savings in currency, payback period. Each KPI is tied to a data source and comparison period." },
        { title: "Typical savings scenarios", body: "Knowledge base search: 40-60% time savings. Document verification: 70% reduction in manual operations. Feedback processing: 30-50% auto-closure rate. All figures from real implementations with evidence packs." },
        { title: "Calculation limitations", body: "The ROI model is built on assumptions. We explicitly state: which data comes from real analytics, which are expert estimates, and how sensitive the model is to changes in key parameters." },
      ],
      relatedCases: ["myunion-platform", "global-olive-corporation", "priboy-hotels"],
      relatedServices: ["ai-chat-boty", "razrabotka-sajtov"],
      faqs: [
        { question: "How much does an ROI assessment cost?", answer: "Included in the automation pilot cost (from 150,000 RUB). The financial model is delivered as a project artifact." },
        { question: "What if ROI is negative?", answer: "We will honestly say that automating this process won't pay off and suggest an alternative scenario or decline the project." },
        { question: "How long does a typical implementation take to pay back?", answer: "3-6 months with correct process selection and fixed before/after metrics." },
      ],
    },
    "ai-contour": {
      slug: "ai-contour",
      title: "Controlled AI Contour — Architecture, Security, and Quality Control | YappiX",
      description: "What a controlled AI contour looks like: RBAC, logging, response quality metrics, hallucination control, SLO and observability.",
      h1: "Controlled AI Contour: Architecture, Security, and Quality Control",
      intro: "We don't deploy a 'chatbot' — we deploy a controlled operational contour with access control, logging, quality metrics, and SLA. This page explains how it works.",
      canonicalPath: "/en/controlled-ai-contour",
      ctaLabel: "Discuss AI contour implementation",
      ctaHref: "/en/contact",
      sections: [
        { title: "What is an AI contour", body: "An AI contour is not an LLM prompt — it's an operational system: data → model → response rules → logging → metrics → alerts. Each component is managed separately, enabling iterative quality improvement." },
        { title: "RBAC and access control", body: "Roles determine who sees what data and what actions the assistant can perform. Critical for enterprise clients: personal data, finances, and compliance require granular control." },
        { title: "Logging and audit", body: "Every request and response is recorded: input data, context, generated response, confidence score, response time. This enables post-mortem analysis and regular QA." },
        { title: "Response quality metrics", body: "Accuracy (share of correct answers), coverage (share of questions answered), escalation rate (share escalated to human), time saved (hours saved per period)." },
        { title: "Hallucination control", body: "Data contour restriction: the assistant only responds based on provided documents. Response rules: if confidence is below threshold — escalate, don't answer. Regular A/B testing on a control sample." },
        { title: "SLO and observability", body: "For each AI contour we set SLOs: response time <2s, accuracy >90%, availability 99.5%. Monitoring via Prometheus/Grafana with alerts on degradation." },
      ],
      relatedCases: ["myunion-platform", "ai-food-assistant"],
      relatedServices: ["ai-chat-boty", "devops"],
      faqs: [
        { question: "How is an AI contour different from a chatbot?", answer: "A chatbot is an interface. An AI contour is an operational system: roles, logs, metrics, alerts, SLA. The difference between a toy and a tool." },
        { question: "Can it be deployed in a closed environment?", answer: "Yes. We support on-premise and private cloud, including self-hosted models." },
        { question: "How are hallucinations controlled?", answer: "Three ways: data contour restriction (RAG), confidence threshold rules with escalation, and regular testing on a control sample." },
      ],
    },
    "rag-search": {
      slug: "rag-search",
      title: "RAG Knowledge Search — From Architecture to Quality Evaluation | YappiX",
      description: "RAG search over corporate knowledge bases: architecture, security, quality evaluation, CRM/ERP integrations, and implementation cost.",
      h1: "RAG Knowledge Search: From Architecture to Quality Evaluation",
      intro: "RAG (Retrieval-Augmented Generation) is information retrieval from corporate documents with natural language answer generation. This page covers architecture, quality evaluation, and costs.",
      canonicalPath: "/en/rag-enterprise-knowledge-search",
      ctaLabel: "Discuss a RAG solution",
      ctaHref: "/en/contact",
      sections: [
        { title: "What is RAG", body: "RAG is an architectural pattern: documents are split into chunks, converted to vector embeddings, and indexed. On user query, the system finds relevant fragments and passes them to an LLM for answer generation with source citations." },
        { title: "RAG system architecture", body: "Components: document pipeline (parsing, chunking, embeddings), vector DB (Pinecone/Qdrant/pgvector), retriever (query search), LLM (answer generation), post-processing (citation, filtering)." },
        { title: "Security and access control", body: "Documents often contain confidential information. The RAG system must inherit access policies: users only see documents they have rights to. Implemented through metadata filters during search." },
        { title: "RAG quality evaluation", body: "Key metrics: precision@k (share of relevant chunks in top-k), recall (coverage completeness), answer correctness, faithfulness (answer-to-source alignment). Evaluated on a manual sample of 50-100 questions." },
        { title: "Cost and ROI", body: "Typical RAG pilot: from 150,000 RUB for 2-3 weeks. Savings: 40-60% time on information search. With 10+ employees spending 1-2 hours daily searching, payback is 2-4 months." },
      ],
      relatedCases: ["myunion-platform"],
      relatedServices: ["ai-chat-boty", "saas-paas"],
      faqs: [
        { question: "RAG or fine-tuning — which to choose?", answer: "RAG — when you need search over updatable documents. Fine-tuning — when you need to change model response style or format. In most corporate scenarios, RAG is more effective and cheaper." },
        { question: "What documents can be indexed?", answer: "PDF, DOCX, XLSX, HTML, Markdown, Confluence, Notion, Google Docs. OCR supported for scans. Pipeline is customized to client format." },
        { question: "Can it be deployed on-premise?", answer: "Yes. Vector DB, embedding model, and LLM can run in a closed environment. We use open-source models (Llama, Mistral) for on-prem scenarios." },
      ],
    },
  },
}

export const pillarSlugs: PillarSlug[] = ["roi-automation", "ai-contour", "rag-search"]

export const pillarRouteMap: Record<PillarSlug, { ru: string; en: string }> = {
  "roi-automation": { ru: "/avtomatizaciya-s-roi", en: "/en/roi-first-automation" },
  "ai-contour": { ru: "/upravlyaemyj-ai-kontur", en: "/en/controlled-ai-contour" },
  "rag-search": { ru: "/rag-poisk-po-baze-znanij", en: "/en/rag-enterprise-knowledge-search" },
}
