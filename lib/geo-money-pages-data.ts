export interface GeoMoneySection {
  title: string
  body: string
}

export interface GeoMoneyFaq {
  question: string
  answer: string
}

export interface GeoMoneyPage {
  slug: string
  region: "oae" | "eu" | "usa"
  title: string
  description: string
  h1: string
  offer: string
  canonicalPath: string
  sections: GeoMoneySection[]
  /** Slugs кейсов из /kejsy — показываются с заголовками, не «сырыми» id */
  relatedCaseSlugs: string[]
  relatedPillars: string[]
  relatedServices: string[]
  faqs: GeoMoneyFaq[]
  ctaLabel: string
  ctaHref: string
}

export const geoMoneyPages: GeoMoneyPage[] = [
  {
    slug: "razrabotka-mvp-v-dubae",
    region: "oae",
    title: "Разработка MVP в Дубае для фаундеров и бизнеса | YappiX",
    description: "Помогаем быстро собрать первый рабочий продукт в ОАЭ: от UX и структуры до разработки и запуска. Русскоязычная команда.",
    h1: "Разработка MVP в Дубае для фаундеров и бизнеса",
    offer: "Помогаем быстро собрать первый рабочий продукт: от UX и структуры до разработки и запуска.",
    canonicalPath: "/oae/razrabotka-mvp-v-dubae",
    sections: [
      {
        title: "Почему MVP в ОАЭ — это отдельная задача",
        body: "Рынок ОАЭ быстрый: здесь ценят скорость запуска, понятный UX и готовность к масштабированию. Фаундеру важно показать продукт инвесторам и первым пользователям за недели, а не месяцы.",
      },
      {
        title: "Что мы делаем",
        body: "Проектируем продуктовую логику, собираем UX, запускаем рабочий MVP с core-функциями. Работаем на стыке product thinking и AI-assisted delivery.",
      },
      {
        title: "Как работает процесс",
        body: "Discovery → Product logic → UX → AI-assisted delivery → QA и запуск. Ниже — блок с этапами и ссылкой на полное описание процесса.",
      },
    ],
    relatedCaseSlugs: ["myunion-platform", "global-olive-corporation"],
    relatedPillars: ["/mvp-i-zapusk-produkta", "/ai-first-razrabotka"],
    relatedServices: ["/uslugi/razrabotka-sajtov", "/uslugi/saas-paas"],
    faqs: [
      { question: "Сколько времени занимает MVP?", answer: "От 3 до 8 недель в зависимости от scope. Мы фиксируем scope на этапе discovery." },
      { question: "Работаете ли вы с фаундерами на ранней стадии?", answer: "Да. Помогаем определить MVP-scope, чтобы не строить лишнее до первых пользователей." },
    ],
    ctaLabel: "Обсудить MVP",
    ctaHref: "/kontakty",
  },
  {
    slug: "russkaya-komanda-razrabotki-v-oae",
    region: "oae",
    title: "Русскоязычная команда разработки в ОАЭ | YappiX",
    description: "Понятный технический партнёр без языкового барьера и тяжёлой подрядной машины для бизнеса в ОАЭ.",
    h1: "Русскоязычная команда разработки в ОАЭ",
    offer: "Когда нужен понятный технический партнёр без языкового барьера и тяжёлой подрядной машины.",
    canonicalPath: "/oae/russkaya-komanda-razrabotki-v-oae",
    sections: [
      {
        title: "Почему русскоязычная команда важна",
        body: "В ОАЭ много русскоязычных предпринимателей, которым нужна техническая команда с понятной коммуникацией. Мы говорим на одном языке — и в прямом, и в продуктовом смысле.",
      },
      {
        title: "Что мы даём",
        body: "Product engineering команду: UX, разработка, AI-ускорение, delivery. Без тяжёлого enterprise-процесса, без посредников.",
      },
      {
        title: "Как начать",
        body: "Расскажите о задаче — мы предложим формат: от разового MVP до постоянной product-команды.",
      },
    ],
    relatedCaseSlugs: ["jupid-platform", "bridgeinto-platform"],
    relatedPillars: ["/cto-as-a-service", "/ai-first-razrabotka"],
    relatedServices: ["/uslugi/razrabotka-sajtov", "/uslugi/ai-chat-boty"],
    faqs: [
      { question: "Вы физически находитесь в ОАЭ?", answer: "Мы работаем как распределённая команда с удобным таймзоном для ОАЭ. Личные встречи — по договорённости." },
      { question: "Какие форматы работы возможны?", answer: "Разовый проект, выделенная команда или CTO as a service — зависит от задачи." },
    ],
    ctaLabel: "Обсудить проект",
    ctaHref: "/kontakty",
  },
  {
    slug: "vnedrenie-ai-v-biznes-v-oae",
    region: "oae",
    title: "Внедрение AI в бизнес в ОАЭ | YappiX",
    description: "AI-ассистенты, поиск по базе знаний, автоматизация поддержки и внутренних процессов для бизнеса в ОАЭ.",
    h1: "Внедрение AI в бизнес в ОАЭ",
    offer: "AI-ассистенты, поиск по базе знаний, автоматизация поддержки и внутренних процессов.",
    canonicalPath: "/oae/vnedrenie-ai-v-biznes-v-oae",
    sections: [
      {
        title: "AI для бизнеса в ОАЭ",
        body: "Рынок ОАЭ активно внедряет AI. Мы помогаем бизнесу не просто «подключить ChatGPT», а выстроить управляемый AI-контур с контролем качества и измеримым эффектом.",
      },
      {
        title: "Что мы внедряем",
        body: "RAG по базе знаний, AI-ассистенты для команды и клиентов, автоматизация обработки обращений, AI в CRM и внутренних процессах.",
      },
      {
        title: "Подход",
        body: "Сначала считаем эффект, потом внедряем. Честно говорим об ограничениях. Не продаём «магию AI».",
      },
    ],
    relatedCaseSlugs: ["ai-food-assistant", "myunion-platform"],
    relatedPillars: ["/vnedrenie-ai-i-rag", "/ai-first-razrabotka"],
    relatedServices: ["/uslugi/ai-chat-boty"],
    faqs: [
      { question: "Какие AI-решения подходят бизнесу в ОАЭ?", answer: "Зависит от процессов. Чаще всего: поиск по знаниям, автоматизация поддержки, AI в продажах и HR." },
      { question: "Сколько стоит внедрение?", answer: "Пилот от 150 000 ₽. Полноценный контур — от 400 000 ₽. Точная оценка после discovery." },
    ],
    ctaLabel: "Обсудить AI-проект",
    ctaHref: "/kontakty",
  },
  {
    slug: "cto-as-a-service-dlya-startapa",
    region: "eu",
    title: "CTO as a Service для стартапа | YappiX",
    description: "Помогаем собрать техническую стратегию, архитектуру, команду и delivery-процесс без найма full-time CTO на старте.",
    h1: "CTO as a Service для стартапа",
    offer: "Помогаем собрать техническую стратегию, архитектуру, команду и delivery-процесс без найма full-time CTO на старте.",
    canonicalPath: "/eu/cto-as-a-service-dlya-startapa",
    sections: [
      {
        title: "Когда стартапу нужен CTO, но не full-time",
        body: "На ранней стадии full-time CTO — это дорого и часто избыточно. Нужен человек, который выстроит архитектуру, наладит delivery и поможет нанять команду. Именно это мы делаем.",
      },
      {
        title: "Что входит",
        body: "Техническая стратегия, выбор стека, архитектура, настройка CI/CD, наём разработчиков, менторинг команды, product delivery.",
      },
      {
        title: "Как это работает",
        body: "Подключаемся на часть времени. Работаем с фаундером напрямую. Фокус — на запуск, а не на документы.",
      },
    ],
    relatedCaseSlugs: ["myunion-platform", "projectorium-cicd"],
    relatedPillars: ["/cto-as-a-service", "/mvp-i-zapusk-produkta"],
    relatedServices: ["/uslugi/razrabotka-sajtov", "/uslugi/saas-paas"],
    faqs: [
      { question: "Сколько часов в неделю нужно?", answer: "Обычно 10–20 часов на старте, потом по мере роста команды — меньше." },
      { question: "Вы помогаете нанимать разработчиков?", answer: "Да. Помогаем составить профиль, провести техническое интервью и онбординг." },
    ],
    ctaLabel: "Обсудить CTO-формат",
    ctaHref: "/kontakty",
  },
  {
    slug: "perezapusk-digital-produkta",
    region: "eu",
    title: "Перезапуск digital-продукта без хаоса | YappiX",
    description: "Когда продукт уже сделан, но не даёт результата, разваливается в UX или тормозит команду — помогаем перезапустить.",
    h1: "Перезапуск digital-продукта без хаоса и повторной переплаты",
    offer: "Когда продукт уже сделан, но не даёт результата, разваливается в UX или тормозит команду.",
    canonicalPath: "/eu/perezapusk-digital-produkta",
    sections: [
      {
        title: "Когда пора перезапускать",
        body: "Продукт запущен, но конверсия низкая, пользователи уходят, техдолг растёт, команда буксует. Это не значит, что нужно всё переписывать — иногда достаточно пересобрать UX и архитектуру.",
      },
      {
        title: "Что мы делаем",
        body: "Аудит текущего продукта, выявление узких мест, product-редизайн, поэтапная пересборка без остановки бизнеса.",
      },
      {
        title: "Результат",
        body: "Рабочий продукт с обновлённым UX, чистой архитектурой и понятным roadmap развития.",
      },
    ],
    relatedCaseSlugs: ["priboy-hotels", "global-olive-corporation"],
    relatedPillars: ["/kejsy-i-metodologiya", "/stoimost-i-sroki-razrabotki"],
    relatedServices: ["/uslugi/ux-ui-dizajn", "/uslugi/razrabotka-sajtov"],
    faqs: [
      { question: "Нужно ли переписывать всё с нуля?", answer: "Не обязательно. Часто достаточно пересобрать UX, рефакторить критичные модули и выстроить delivery." },
      { question: "Сколько это занимает?", answer: "Аудит — 1–2 недели. Пересборка — от 4 до 12 недель в зависимости от масштаба." },
    ],
    ctaLabel: "Обсудить перезапуск",
    ctaHref: "/kontakty",
  },
  {
    slug: "ai-avtomatizaciya-dlya-biznesa",
    region: "eu",
    title: "AI-автоматизация для бизнеса в Европе | YappiX",
    description: "Собираем полезные AI-сценарии без «магии ради магии»: поиск знаний, помощники, контент, внутренние процессы.",
    h1: "AI-автоматизация для бизнеса в Европе",
    offer: "Собираем полезные AI-сценарии без «магии ради магии»: поиск знаний, помощники, контент, внутренние процессы.",
    canonicalPath: "/eu/ai-avtomatizaciya-dlya-biznesa",
    sections: [
      {
        title: "AI для европейского бизнеса",
        body: "Европейский рынок требует аккуратного подхода: GDPR, приватность данных, осторожность к hype. Мы внедряем AI там, где он реально помогает, а не «потому что все внедряют».",
      },
      {
        title: "Типовые сценарии",
        body: "Поиск по внутренней базе знаний, AI-ассистент для поддержки, автоматизация рутинных процессов, AI в продажах и HR.",
      },
      {
        title: "Подход к данным",
        body: "Работаем с учётом GDPR и корпоративных политик безопасности. Данные остаются под контролем клиента.",
      },
    ],
    relatedCaseSlugs: ["reallaw-ai", "ai-food-assistant"],
    relatedPillars: ["/vnedrenie-ai-i-rag", "/ai-first-razrabotka"],
    relatedServices: ["/uslugi/ai-chat-boty"],
    faqs: [
      { question: "Как вы учитываете GDPR?", answer: "Архитектура AI-контура проектируется с учётом GDPR: минимизация данных, контроль доступа, логирование." },
      { question: "Какие LLM используете?", answer: "OpenAI, Anthropic Claude, open-source модели — выбор зависит от требований к приватности и задачи." },
    ],
    ctaLabel: "Обсудить AI-проект",
    ctaHref: "/kontakty",
  },
  {
    slug: "product-team-dlya-russkoyazychnogo-foundera",
    region: "usa",
    title: "Product team для русскоязычного фаундера в США | YappiX",
    description: "Когда нужен гибкий партнёр на UX, продуктовую логику и запуск MVP для русскоязычного фаундера в США.",
    h1: "Product team для русскоязычного фаундера в США",
    offer: "Когда нужен гибкий партнёр на UX, продуктовую логику и запуск MVP.",
    canonicalPath: "/usa/product-team-dlya-russkoyazychnogo-foundera",
    sections: [
      {
        title: "Зачем русскоязычная product-команда",
        body: "Русскоязычный фаундер в США часто ищет команду, с которой можно говорить на одном языке — и буквально, и в продуктовом смысле. Мы понимаем контекст и помогаем быстрее запуститься.",
      },
      {
        title: "Что мы даём",
        body: "Product thinking + UX + разработка + AI-ускорение. Работаем как extension вашей команды, а не как «подрядчик на часы».",
      },
      {
        title: "Формат",
        body: "MVP-запуск, выделенная команда или CTO as a service — выбираем формат под задачу.",
      },
    ],
    relatedCaseSlugs: ["fintech-marketplace", "myunion-platform"],
    relatedPillars: ["/mvp-i-zapusk-produkta", "/cto-as-a-service"],
    relatedServices: ["/uslugi/razrabotka-sajtov", "/uslugi/saas-paas"],
    faqs: [
      { question: "В каком таймзоне вы работаете?", answer: "Команда распределена, покрываем US Eastern и Pacific. Коммуникация — async + синхронные звонки." },
      { question: "Можете ли вы быть моей единственной tech-командой?", answer: "Да. Мы можем закрыть весь tech-scope: от продуктовой логики до деплоя." },
    ],
    ctaLabel: "Обсудить проект",
    ctaHref: "/kontakty",
  },
  {
    slug: "razrabotka-saas-i-lichnyh-kabinetov",
    region: "usa",
    title: "Разработка SaaS и личных кабинетов | YappiX",
    description: "Проектируем и запускаем B2B-сервисы, кабинеты, внутренние панели и клиентские системы.",
    h1: "Разработка SaaS и личных кабинетов",
    offer: "Проектируем и запускаем B2B-сервисы, кабинеты, внутренние панели и клиентские системы.",
    canonicalPath: "/usa/razrabotka-saas-i-lichnyh-kabinetov",
    sections: [
      {
        title: "Когда нужен SaaS или кабинет",
        body: "Если ваш бизнес — это сервис для других компаний или пользователей, вам нужен не сайт, а продуктовая система: авторизация, роли, панели, биллинг, API.",
      },
      {
        title: "Что мы строим",
        body: "B2B SaaS, клиентские кабинеты, admin-панели, внутренние системы учёта и управления. Проектируем архитектуру, UX, API, фронтенд и бэкенд.",
      },
      {
        title: "Стек и подход",
        body: "Next.js, React, Node.js, PostgreSQL, Vercel/AWS. AI-ускорение на этапе разработки. Итерации каждые 2–3 дня.",
      },
    ],
    relatedCaseSlugs: ["myunion-platform", "jupid-platform"],
    relatedPillars: ["/stoimost-i-sroki-razrabotki", "/mvp-i-zapusk-produkta"],
    relatedServices: ["/uslugi/saas-paas", "/uslugi/razrabotka-sajtov"],
    faqs: [
      { question: "Сколько стоит SaaS MVP?", answer: "От 400 000 ₽ за core-функциональность. Точная оценка — после discovery." },
      { question: "Можно ли начать с MVP и потом развивать?", answer: "Именно так мы рекомендуем. Запускаем core, собираем обратную связь, итерируем." },
    ],
    ctaLabel: "Обсудить SaaS",
    ctaHref: "/kontakty",
  },
  {
    slug: "rag-i-vnutrenniy-ai-pomoshchnik",
    region: "usa",
    title: "RAG и внутренний AI-помощник для команды | YappiX",
    description: "Подключаем LLM к базе знаний и внутренним процессам: сотрудники получают ответы быстрее, компания не тонет в ручном поиске.",
    h1: "RAG и внутренний AI-помощник для команды",
    offer: "Подключаем LLM к базе знаний и внутренним процессам так, чтобы сотрудники получали ответы быстрее, а компания не тонула в ручном поиске.",
    canonicalPath: "/usa/rag-i-vnutrenniy-ai-pomoshchnik",
    sections: [
      {
        title: "Зачем внутренний AI-помощник",
        body: "Команды тратят часы на поиск информации в документах, Confluence, Google Drive. RAG-система подключает LLM к вашей базе знаний и даёт ответы с цитатами из источников.",
      },
      {
        title: "Как это работает",
        body: "Индексируем документы → строим vector store → подключаем LLM с retrieval → настраиваем контроль качества и доступа.",
      },
      {
        title: "Ограничения, о которых мы говорим сразу",
        body: "RAG не заменяет эксперта. Качество зависит от данных. Галлюцинации нельзя убрать на 100%. Мы проектируем систему с учётом этих ограничений.",
      },
    ],
    relatedCaseSlugs: ["reallaw-ai", "ai-food-assistant"],
    relatedPillars: ["/vnedrenie-ai-i-rag", "/ai-first-razrabotka"],
    relatedServices: ["/uslugi/ai-chat-boty"],
    faqs: [
      { question: "Какие данные можно подключить?", answer: "Документы, wiki, Confluence, Google Drive, Notion, внутренние базы. Формат: PDF, DOCX, HTML, Markdown." },
      { question: "Как контролировать качество ответов?", answer: "Метрики: точность, релевантность, полнота. Логирование всех запросов. Ограничение контура данных." },
    ],
    ctaLabel: "Обсудить RAG-проект",
    ctaHref: "/kontakty",
  },
]

export function getGeoMoneyPageBySlug(slug: string): GeoMoneyPage | undefined {
  return geoMoneyPages.find((p) => p.slug === slug)
}
