export interface CaseStudy {
  slug: string
  title: string
  client: string
  category: string
  description: string
  fullDescription: string
  challenge: string
  solution: string
  image: string
  videos?: string[]
  gallery: string[]
  results: { label: string; value: string }[]
  tags: string[]
  testimonial?: {
    text: string
    author: string
    role: string
  }
  duration: string
  team: string
  year: string
  /** Ссылка на живой проект (кнопка «Смотреть проект») */
  projectUrl?: string
  /** Набор ссылок на несколько живых проектов */
  projectLinks?: Array<{
    label: string
    url: string
  }>
  /** Элемент из раздела «Шаблоны» — кнопка «Назад» ведёт на /shablony */
  isTemplate?: boolean
  /** Ссылка на скачивание (Figma / LemonSqueezy) — кнопка в карточке деталей */
  productUrl?: string
  productLabel?: string
  architecture?: string
  measurement?: string
  risks?: string
  nextSteps?: string
  relatedServices?: string[]
  relatedArticles?: string[]
  /** Унифицированный evidence pack для кейсов с доказательной методикой */
  evidencePack?: {
    baseline: string
    period: string
    source: string
    methodology: string[]
    artifacts: string[]
    metrics: Array<{
      name: string
      before: string
      after: string
      note?: string
    }>
  }
}

export const casesData: CaseStudy[] = [
  {
    slug: "myunion-platform",
    title: "MyUnion Pro — платформа управления профсоюзами",
    client: "MyUnion",
    category: "SaaS / AI",
    description: "Полнофункциональное веб-приложение для управления профсоюзами с чат-ботами на базе ИИ, автоматическим созданием документов и функциями вовлечения членов.",
    fullDescription:
      "MyUnion Pro — это полнофункциональное веб-приложение для управления профсоюзом с чат-ботами на базе искусственного интеллекта, автоматическим созданием документов, отслеживанием обращений и функциями вовлечения членов. Живое приложение: myunion.pro. Версия: 1.6.1.",
    challenge:
      "Профсоюзы использовали разрозненные системы для учёта членов, документооборота и коммуникаций. Обработка заявлений занимала дни, а вовлечённость членов была минимальной. Нужна была единая платформа с современными технологиями.",
    solution:
      "Разработал единую платформу с AI-ассистентом для автоматической обработки обращений, генерации документов и персонализированных рекомендаций. Внедрил систему скидок от партнёров, новостную ленту и чаты для повышения вовлечённости членов профсоюза.",
    image: "/images/16_9.webp",
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
      { label: "Пользователей", value: "50K+" },
      { label: "AI-автоматизация", value: "80%" },
      { label: "Время обработки", value: "-90%" },
      { label: "Вовлечённость", value: "+150%" },
    ],
    tags: ["Next.js", "GPT-4", "PostgreSQL", "LangChain", "Redis", "AWS"],
    testimonial: {
      text: "Платформа MyUnion Pro полностью трансформировала работу нашего профсоюза. AI-ассистент закрывает 80% обращений автоматически.",
      author: "Виталий Николаевич",
      role: "Председатель профсоюза",
    },
    duration: "3 месяца",
    team: "1 человек",
    year: "2025",
    projectUrl: "https://myunion.pro/",
    architecture: "Монолитный Next.js 14 App Router, GPT-4o через LangChain для обработки обращений, PostgreSQL + pgvector для RAG-поиска по документам профсоюза, AWS EC2 + RDS, CI/CD через GitHub Actions.",
    measurement: "Сравниваем 8-недельный baseline до релиза с 8 неделями после стабилизации. Метрики: медиана TTR (тикеты), доля auto-resolved (логи ассистента), WAU/MAU (GA4). Сезонность учтена через сравнение аналогичных месяцев.",
    risks: "Контроль галлюцинаций через ограничение контура данных и правила ответа. Регулярный аудит качества ответов по выборке. RBAC для доступа к персональным данным членов профсоюза. Ежемесячный пересмотр метрик качества.",
    nextSteps: "Расширение RAG-контура на внутренние регламенты и законодательство. Интеграция с системой голосования. Внедрение SLO по времени ответа ассистента.",
    relatedServices: ["ai-chat-boty", "razrabotka-sajtov"],
    relatedArticles: ["vnedrenie-iskusstvennogo-intellekta-v-biznes"],
    evidencePack: {
      baseline: "Входящий поток обращений, время обработки и доля ручного маршрута",
      period: "Сравнение 8 недель до внедрения и 8 недель после стабилизации релиза",
      source: "Логи тикет-системы + CRM профкома + внутренний BI-дашборд",
      methodology: [
        "Метрика времени обработки считалась по медиане TTR, чтобы исключить влияние выбросов.",
        "Доля AI-автоматизации считалась как процент обращений, закрытых без эскалации на специалиста.",
        "Пиковые недели исключались при сравнении периодов, чтобы снизить сезонный шум.",
      ],
      artifacts: [
        "График TTR до/после по неделям",
        "Воронка обращений: ручной маршрут vs AI-маршрут",
        "Снимок SLA-доски с распределением очередей",
      ],
      metrics: [
        { name: "Время обработки обращения (TTR)", before: "2.4 дня", after: "0.24 дня", note: "-90%" },
        { name: "Доля AI-автоматизации", before: "22%", after: "80%", note: "+58 п.п." },
        { name: "Вовлеченность членов (MAU/WAU)", before: "1.0x", after: "2.5x", note: "+150%" },
      ],
    },
  },
  {
    slug: "reallaw-ai",
    title: "realLaw AI — Legal Tech SaaS для ОАЭ",
    client: "realLaw",
    category: "SaaS / Legal Tech",
    description: "Legal-tech SaaS для бизнеса и юристов ОАЭ. Полный цикл: исследование, бренд, дизайн-система, фронтенд на Next.js/Framer.",
    fullDescription:
      "realLaw AI — это legal-tech SaaS для бизнеса ОАЭ и юристов. Платформа объединяет базу знаний по законодательству ОАЭ, AI-ассистента для правовых консультаций и систему генерации документов. Я отвечал за полный цикл продукта: UX-исследования, бренд, дизайн-систему и фронтенд на Next.js/Framer.",
    challenge:
      "Юридические услуги в ОАЭ дороги и недоступны для малого бизнеса. Законодательство сложное, а поиск нужной информации занимает часы. Требовалась платформа, которая сделает юридические знания доступными и понятными для широкой аудитории.",
    solution:
      "Разработали AI-платформу с базой знаний по законодательству ОАЭ, интеллектуальным поиском и генератором документов. Создали интуитивную дизайн-систему и реализовали фронтенд на Next.js с интеграцией Framer для анимаций.",
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
      { label: "Год", value: "2025" },
      { label: "Платформа", value: "Web" },
      { label: "AI", value: "GPT-4" },
      { label: "Регион", value: "UAE" },
    ],
    tags: ["Legal Tech", "SaaS", "Next.js", "Framer", "UAE", "AI"],
    duration: "4 месяца",
    team: "1 человек",
    year: "2025",
    projectUrl: "https://reallaw.ai/",
  },
  {
    slug: "jupid-platform",
    title: "Jupid — AI бухгалтер для запуска LLC",
    client: "Jupid",
    category: "FinTech / AI",
    description:
      "AI-native бухгалтерия для малого бизнеса: запуск LLC, умная бухгалтерия и налоговый комплаенс в чате. White-label для банков и финтех-платформ.",
    fullDescription:
      "Jupid — AI-native платформа учёта и комплаенса для бизнеса в США, встроенная в digital banking. Сервис покрывает полный путь SMB: бесплатная регистрация LLC, ведение бухгалтерии, подготовка и подача налогов, а также консультации через WhatsApp/iMessage и встроенный чат. Решение запускается за 4-6 недель и не требует изменений core-систем банка.",
    challenge:
      "Банки и финтехи теряют предпринимателей на этапе регистрации бизнеса: новые LLC уходят в сторонние сервисы ещё до открытия бизнес-счёта. При этом ручная бухгалтерия и налоги дорогие и неудобные для SMB.",
    solution:
      "Собрали white-label продукт с контекстным AI-движком: автоматическая категоризация операций, conversational-помощник 24/7, tax filing с CPA-overview и единый интерфейс для операций бизнеса. Я структурировал продуктовые флоу, UX/UI, дизайн-систему и контентные блоки с фокусом на ценность для банковских партнёров.",
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
      { label: "Год", value: "2025" },
      { label: "Go-live", value: "4-6 недель" },
      { label: "Интеграция", value: "Без core-изменений" },
      { label: "Точность AI", value: "95%+" },
    ],
    tags: ["AI", "FinTech", "Embedded Banking", "Accounting", "Tax Compliance", "USA"],
    duration: "3 месяца",
    team: "1 человек",
    year: "2025",
    projectUrl: "https://jupid.com/",
  },
  {
    slug: "priboy-hotels",
    title: "Grand Hotels & SPA Priboy — сеть отелей",
    client: "Группа отелей Прибой",
    category: "Hospitality / Marketing",
    description: "Комплексная разработка, техническая поддержка, SEO-продвижение и SMM для сети премиальных отелей на Черноморском побережье.",
    fullDescription:
      "Полный цикл digital-услуг для группы отелей Прибой: разработка и поддержка сайтов priboy-spa.ru (4*) и priboy1.ru (3*), SEO-оптимизация для высоких позиций в поисковой выдаче, ведение социальных сетей ВКонтакте с созданием контента и таргетированной рекламой. Отели расположены в Анапе и предлагают премиальный отдых с SPA-комплексами, бассейнами и ресторанами.",
    challenge:
      "Сеть отелей нуждалась в современном digital-присутствии: устаревшие сайты не конвертировали посетителей в бронирования, позиции в поиске были низкими, а социальные сети практически не велись. Требовалось комплексное решение для увеличения прямых бронирований и узнаваемости бренда.",
    solution:
      "Разработали современные адаптивные сайты с интеграцией систем бронирования, оптимизировали под SEO с фокусом на геозапросы «отель Анапа», «SPA отель Черное море». Запустили SMM-стратегию с регулярным контентом, сторис, reels и таргетированной рекламой во ВКонтакте. Настроили аналитику и сквозную отчётность.",
    image: "/images/priboy.avif",
    videos: [
      "/images/priboy_overview.mp4",
      "/images/usmanoff-cases/1765792488847-pr1.mp4",
    ],
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
      { label: "Рост трафика", value: "+180%" },
      { label: "Прямые брони", value: "+65%" },
      { label: "Подписчики VK", value: "12K+" },
      { label: "ТОП-3 Яндекс", value: "85%" },
    ],
    tags: ["Next.js", "SEO", "SMM", "VK Ads", "Яндекс.Метрика", "TildaCMS"],
    testimonial: {
      text: "После редизайна сайтов и запуска SEO-продвижения количество прямых бронирований выросло на 65%. Наконец-то мы не зависим только от агрегаторов.",
      author: "Администрация отеля",
      role: "Grand Hotel & SPA Priboy",
    },
    duration: "Постоянная поддержка",
    team: "3 человека",
    year: "2023–2025",
    projectLinks: [
      { label: "Grand Hotel & SPA Priboy", url: "https://priboy-spa.ru/" },
      { label: "Гостиница Priboy", url: "https://priboy1.ru/" },
      { label: "Отель Dvin", url: "https://hoteldvin.ru/" },
    ],
    architecture: "Next.js SSG + ISR для 3 сайтов отелей, Яндекс.Метрика + GA4 для аналитики, VK Ads API для таргетированной рекламы, интеграция с booking engine для отслеживания прямых броней. SEO: семантическое ядро на 1200+ запросов.",
    measurement: "Трафик: sessions из Яндекс.Метрики (фильтр organic, без роботов). Прямые брони: booking engine CRM, атрибуция по UTM + реферер. ТОП-3: позиции из Яндекс.Вебмастера по ядру из 85 приоритетных запросов, замер еженедельно.",
    risks: "Мониторинг доступности 3 сайтов. Контроль позиций при обновлениях алгоритмов. Разделение аналитики по каждому отелю. A/B тестирование посадочных для VK Ads.",
    nextSteps: "Расширение SEO-ядра на англоязычный трафик. Интеграция чат-бота для бронирования. Внедрение сквозной аналитики до уровня RevPAR.",
    relatedServices: ["seo-prodvizhenie", "razrabotka-sajtov", "smm"],
    relatedArticles: [],
    evidencePack: {
      baseline: "Органический трафик, прямые брони и позиции в поиске по геокластерам",
      period: "Сравнение 6 месяцев до запуска стратегии и 6 месяцев после",
      source: "Яндекс.Метрика + booking engine + SEO-панель семантики",
      methodology: [
        "Прямые брони считались без агрегаторов, только из собственного сайта/движка бронирования.",
        "Трафик считался по органическому сегменту, брендовые кампании исключались.",
        "TOP-3 рассчитывался как доля приоритетной семантики в топ-3 по целевому региону.",
      ],
      artifacts: [
        "Тренд органического трафика по месяцам",
        "Отчет по прямым броням и их доле в общем канале",
        "Матрица позиций по ключевым кластерам (Анапа, SPA, семейный отдых)",
      ],
      metrics: [
        { name: "Органический трафик", before: "1.0x", after: "2.8x", note: "+180%" },
        { name: "Прямые брони", before: "1.0x", after: "1.65x", note: "+65%" },
        { name: "Доля семантики в TOP-3", before: "31%", after: "85%", note: "+54 п.п." },
      ],
    },
  },
  {
    slug: "bridgeinto-platform",
    title: "BridgeInto — Приватная бизнес-платформа",
    client: "BridgeInto",
    category: "Enterprise / Blockchain",
    description: "Безопасная бизнес-платформа для приватности и контроля данных. Бренд, UX/UI, дизайн-система, продуктовый сайт.",
    fullDescription:
      "BridgeInto — это безопасная бизнес-платформа для людей, которые ценят приватность и контроль над своими данными. Включает файловый менеджер на блокчейне, бухгалтерию, систему управления налогами и защищённые коммуникации. Я создал бренд, UX, UI, дизайн-систему и продуктовый сайт.",
    challenge:
      "Современные бизнес-платформы хранят данные на своих серверах, не давая полного контроля. Компании опасаются утечек конфиденциальной информации и зависимости от внешних сервисов.",
    solution:
      "Разработали платформу с хранением данных на блокчейне, где пользователи контролируют свои ключи шифрования. Создал самодостаточную систему с файловым менеджером, бухгалтерией и защищёнными коммуникациями. Разработал бренд и дизайн-систему, подчёркивающие безопасность и приватность.",
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
      { label: "Год", value: "2024" },
      { label: "Блокчейн", value: "Да" },
      { label: "Шифрование", value: "E2E" },
      { label: "Статус", value: "Продакшн" },
    ],
    tags: ["SaaS", "Blockchain", "Security", "File Manager", "E2E Encryption"],
    duration: "5 месяцев",
    team: "1 человек",
    year: "2024",
  },
  {
    slug: "global-olive-corporation",
    title: "Global Olive Corp. — Инвестиционная платформа",
    client: "Global Olive Corporation",
    category: "Marketing / eCommerce",
    description: "Инвестиционная платформа для оливковых деревьев с прозрачной системой владения, персонализированными сертификатами и возможностью подарить дерево.",
    fullDescription:
      "Global Olive Corporation — инновационная инвестиционная платформа, позволяющая пользователям приобретать оливковые деревья как уникальные активы. Каждое дерево привязано к персональному сертификату владения с QR-кодом, фото и GPS-координатами. Платформа включает функции подарка дерева, личный кабинет с трекером урожая и интеграцию с платёжными системами. Полностью адаптивный дизайн для мобильных устройств.",
    challenge:
      "Клиенту требовалось создать цифровую платформу для продажи оливковых деревьев как инвестиционного актива. Необходимо было разработать систему прозрачного владения с сертификатами, возможность дарения и удобный личный кабинет для отслеживания активов и урожая.",
    solution:
      "Разработали полнофункциональную eCommerce платформу на React с интуитивным процессом покупки, генерацией персонализированных сертификатов владения (PDF с QR-кодом), функцией подарка с уникальным кодом активации и личным кабинетом с историей владения и статистикой урожая. Интегрировали Stripe для безопасных платежей и nodemailer для email-уведомлений.",
    image: "/images/goc.webp",
    videos: [
      "/images/usmanoff-cases/1765726788099-Olive.mp4",
    ],
    gallery: [
      "/images/olive/Screenshot 2026-04-05 at 23.27.21.png",
      "/images/olive/Screenshot 2026-04-05 at 23.28.03.png",
      "/images/olive/Screenshot 2026-04-05 at 23.28.30.png",
      "/images/olive/Screenshot 2026-04-05 at 23.28.58.png",
    ],
    results: [
      { label: "Конверсия", value: "+35%" },
      { label: "Деревьев продано", value: "500+" },
      { label: "Средний чек", value: "$180" },
      { label: "Подарков", value: "120+" },
    ],
    tags: ["React", "Node.js", "Stripe", "PostgreSQL", "PDF Generation", "QR Codes"],
    testimonial: {
      text: "Платформа превзошла все наши ожидания. Процесс покупки интуитивен, а сертификаты выглядят премиально. Продажи выросли на 35% после запуска нового сайта.",
      author: "Marco Ferretti",
      role: "CEO Global Olive Corporation",
    },
    duration: "3 месяца",
    team: "4 человека",
    year: "2024",
    projectUrl: "https://myolive.shop/",
    architecture: "React SPA + Node.js REST API, PostgreSQL, Stripe для платежей, автогенерация PDF-сертификатов с QR-кодами через Puppeteer, CDN для медиа, Vercel для фронтенда.",
    measurement: "Конверсия: purchase_completed / sessions (GA4). Средний чек: revenue / orders (Stripe Dashboard). Подарки: gift_purchase events. Период сравнения: 90 дней до и после релиза. Атрибуция — last-click, с фильтрацией ботов.",
    risks: "Мониторинг доступности платёжного шлюза Stripe. Автоматические бэкапы БД сертификатов. Rate-limiting на генерацию PDF. Контроль целостности QR-кодов.",
    nextSteps: "Интеграция трекера урожая с IoT-датчиками. Подписочная модель для ежегодных отчётов по дереву. Мультиязычный интерфейс.",
    relatedServices: ["razrabotka-sajtov"],
    relatedArticles: [],
    evidencePack: {
      baseline: "Конверсия витрины, средний чек и доля подарочных покупок",
      period: "Сравнение 90 дней до релиза и 90 дней после релиза",
      source: "Shop analytics + Stripe + CRM заказов",
      methodology: [
        "Конверсия считалась как purchase_completed / sessions на витрине.",
        "Средний чек считался как revenue / orders без возвратов.",
        "Подарки считались по событиям gift_purchase и gift_activation.",
      ],
      artifacts: [
        "Воронка checkout с конверсией по шагам",
        "Дашборд заказов: средний чек и repeat rate",
        "Отчет по сертификатам и активациям подарков",
      ],
      metrics: [
        { name: "Конверсия витрины", before: "2.6%", after: "3.5%", note: "+35%" },
        { name: "Продано деревьев", before: "210", after: "500+", note: "рост объема" },
        { name: "Подарочные покупки", before: "45", after: "120+", note: "x2.6" },
      ],
    },
  },
  {
    slug: "my-buyer-crm",
    title: "MY BUYER — CRM для маркетплейсов",
    client: "MY BUYER",
    category: "E-commerce / CRM",
    description: "CRM для работы с товарами с китайских и СНГ маркетплейсов. UX/UI для веб и мобильных приложений.",
    fullDescription:
      "MY BUYER — это CRM для покупателей, логистов и продавцов, работающих с товарами с китайских и СНГ маркетплейсов. Система управляет заказами, отслеживает поставки, автоматизирует взаиморасчёты и заменяет электронные таблицы на удобный интерфейс. Я руководил UX и UI дизайном для веб и мобильных приложений.",
    challenge:
      "Покупатели и логисты использовали десятки Excel-таблиц для учёта заказов, товаров, поставщиков и платежей. Это приводило к ошибкам, потере данных и невозможности масштабирования бизнеса.",
    solution:
      "Спроектировал CRM-систему с интуитивным интерфейсом, заменившую электронные таблицы на структурированную базу данных. Разработал UX/UI для веб и iOS приложений с фокусом на скорость работы и минимальное количество кликов.",
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
      { label: "Год", value: "2023" },
      { label: "Платформы", value: "Web + iOS" },
      { label: "Пользователей", value: "5K+" },
      { label: "Экономия времени", value: "70%" },
    ],
    tags: ["CRM", "E-commerce", "iOS", "Web App", "Supply Chain"],
    duration: "4 месяца",
    team: "1 человек",
    year: "2023",
  },
  {
    slug: "fintech-marketplace",
    title: "Card2Card — MVP мобильного приложения",
    client: "NDA",
    category: "FinTech / Mobile",
    description: "Мобильное приложение для переводов с карты на карту по всему миру. Автоматическая комиссия, простой перевод и ничего лишнего.",
    fullDescription:
      "CARD 2 CARD — мобильное приложение для мгновенных переводов с карты на карту по всему миру в эпоху деглобализации. Минимальные комиссии, простой процесс перевода, никаких лишних функций. Приложение уже работает под другим названием.",
    challenge:
      "Большинство банковских приложений перегружены лишними функциями: оплата коммунальных услуг, корпоративные счета, инвестиции, накопительные программы. В России даже маркетплейсы добавляют. Кажется, банки пытаются впихнуть все свои продукты в одно приложение. При этом отправить деньги с карты на карту за рубеж сложно из-за большого количества требуемых данных. Люди в основном используют только две функции: переводы с карты на карту и по номеру телефона.",
    solution:
      "Разработано мобильное приложение для бесшовных международных переводов с карты на карту между ЕС, США, Азией и Африкой через шлюзы VISA, Mastercard и USDT. Упрощает отправку денег друзьям и родственникам за рубеж без лишних функций.",
    image: "/images/05f1e332931093.589da5ec81ead.gif",
    gallery: [
      "/images/Multiple-Isometric-iPhone-MockUps.png",
      "/images/2ceefb137491185.63bb560c97aec.png",
      "/images/05f1e332931093.589da5ec81ead.gif",
    ],
    results: [
      { label: "Разработчиков", value: "14" },
      { label: "Шлюзы", value: "VISA, MC, USDT" },
      { label: "Регионы", value: "EU, US, Asia, Africa" },
      { label: "Год", value: "2022" },
    ],
    tags: ["React Native", "Node.js", "VISA API", "Mastercard", "USDT", "FinTech"],
    testimonial: {
      text: "YappiX разработали MVP, которое позволило нам быстро выйти на рынок и проверить гипотезу. Приложение уже работает и приносит прибыль.",
      author: "Имя скрыто",
      role: "NDA",
    },
    duration: "4 месяца",
    team: "15 человек",
    year: "2022",
  },
  {
    slug: "ai-food-assistant",
    title: "Ассистент заявок — голосовой заказ еды",
    client: "Food Delivery",
    category: "AI / Voice",
    description: "Голосовой AI-ассистент для заказа еды без касания экрана. Идеально для водителей и людей с ограниченными возможностями.",
    fullDescription:
      "Революционное решение для hands-free заказа еды через голосового AI-ассистента. Пользователь может заказать еду голосом, не касаясь телефона — идеально для водителей за рулём. Ассистент понимает естественную речь, уточняет детали заказа и принимает оплату картой.",
    challenge:
      "Водители и люди с занятыми руками не могут безопасно использовать приложения доставки еды. Существующие решения требуют касания экрана, что отвлекает от дороги и создаёт опасные ситуации.",
    solution:
      "Разработали голосового AI-ассистента на базе GPT-4 с распознаванием речи. Пользователь произносит заказ естественным языком, ассистент уточняет детали, подтверждает и принимает оплату — всё голосом. Интегрировали с платёжными системами для оплаты картой без касания.",
    image: "/images/checkout_ai_2.mp4",
    videos: [
      "/images/checkout_ai_2.mp4",
      "/images/food_ordering.mp4",
    ],
    gallery: [],
    results: [
      { label: "Конверсия", value: "+40%" },
      { label: "Hands-free", value: "100%" },
      { label: "Доступность", value: "24/7" },
      { label: "Время заказа", value: "30 сек" },
    ],
    tags: ["GPT-3", "Speech Recognition", "Voice AI", "Stripe", "React Native"],
    testimonial: {
      text: "Теперь я могу заказать еду прямо за рулём, не отвлекаясь от дороги. Просто говорю что хочу, и ассистент всё делает сам.",
      author: "Пользователь",
      role: "Водитель",
    },
    duration: "3 месяца",
    team: "3 человека",
    year: "2021",
  },
  {
    slug: "yappix-cms",
    title: "YappiX CMS — конструктор мобильных приложений",
    client: "YappiX (собственный продукт)",
    category: "SaaS / Mobile",
    description: "No-code конструктор нативных мобильных приложений с CMS, AR-технологиями и распознаванием речи. Поддержан Microsoft for Startups.",
    fullDescription:
      "YappiX CMS — революционный конструктор нативных мобильных приложений, не требующий знания программирования. Система позволяет создавать полноценные iOS и Android приложения через визуальный интерфейс с CMS для управления контентом. Поддерживает AR-технологии и распознавание речи. Проект получил гранты на R&D и статус участника программы Microsoft for Startups.",
    challenge:
      "Создание мобильных приложений требовало дорогих разработчиков и месяцев работы. Малый бизнес не мог позволить себе собственное приложение, а существующие конструкторы создавали только веб-обёртки, а не нативные приложения.",
    solution:
      "Разработали уникальную систему компиляции, которая генерирует настоящий нативный код из визуального конструктора. Магическая система компиляции стала технологическим прорывом того времени, за что проект получил гранты на R&D. Отчёт доступен на сайте GISNAUKA.",
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
      { label: "Гранты", value: "ФСИ + MS" },
      { label: "Инвестиции", value: "2 раунда" },
      { label: "Резидент", value: "Сколково" },
      { label: "Технология", value: "Патенты" },
    ],
    tags: ["React", "Node.js", "Swift", "Kotlin", "AR", "Speech Recognition", "No-code"],
    testimonial: {
      text: "YappiX CMS — это технологический прорыв в создании мобильных приложений. Система компиляции, которую мы разработали, позволила генерировать настоящий нативный код без программирования.",
      author: "Ренат Усманов",
      role: "Founder YappiX",
    },
    duration: "3+ года",
    team: "8 человек",
    year: "2015–2022",
    architecture: "Собственный компилятор, транспилирующий визуальный конструктор в нативный Swift/Kotlin код. Бэкенд: Node.js + MongoDB. CMS-панель: React. AR-модуль на ARKit/ARCore. Инфраструктура: AWS, CI/CD через Jenkins.",
    measurement: "Продуктовые метрики: time-to-app (от брифа до публикации в сторе), число созданных приложений, стоимость R&D vs revenue. Не web-метрики, а инженерные и бизнес-показатели.",
    risks: "Сложность поддержки кастомного компилятора при обновлениях iOS/Android SDK. Патентная защита ключевых алгоритмов. Зависимость от ручной верификации сгенерированного кода.",
    nextSteps: "Продукт закрыт в 2022. Технологии и опыт перенесены в текущие проекты автоматизации: подходы к code generation и AI-контурам для delivery.",
    relatedServices: ["mobilnye-prilozheniya", "saas-paas"],
    relatedArticles: [],
    evidencePack: {
      baseline: "Скорость выпуска мобильных приложений и стоимость запуска MVP",
      period: "Сравнение проектных циклов до платформы и после внедрения CMS",
      source: "Product backlog + release-логи + финансовая модель R&D",
      methodology: [
        "Скорость релизов считалась по времени от брифа до публикации MVP.",
        "Экономия бюджета считалась по фактическим трудозатратам команд.",
        "Качество проверялось по чек-листу нативной сборки iOS/Android.",
      ],
      artifacts: [
        "Карта архитектуры визуального конструктора и compile-pipeline",
        "Таймлайн релизов до/после внедрения CMS",
        "Пакет R&D-артефактов (грантовый контур и патентные материалы)",
      ],
      metrics: [
        { name: "Время вывода MVP", before: "14-18 недель", after: "3-5 недель", note: "~x3 быстрее" },
        { name: "Стоимость запуска MVP", before: "1.0x", after: "0.42x", note: "-58%" },
        { name: "Доля переиспользуемых модулей", before: "15%", after: "70%", note: "+55 п.п." },
      ],
    },
  },
  {
    slug: "coinpulse-crypto",
    title: "CoinPulse — Крипто-дашборд для мониторинга рынка",
    client: "Community",
    category: "FinTech / Crypto",
    description: "Готовый шаблон крипто-дашборда на Next.js. Конвертация макета из Figma за 30 минут благодаря дизайн-токенам и правильной разметке компонентов.",
    fullDescription:
      "CoinPulse — production-ready шаблон криптовалютного дашборда, сконвертированный из Figma-макета в живой Next.js за 30 минут. Секрет скорости — дизайн-токены (цвета, типографика, отступы), auto layout и правильная структура компонентов в Figma, которые 1:1 ложатся на Tailwind CSS. Подходит для крипто-бирж, DeFi-панелей, портфельных трекеров и финтех-стартапов.",
    challenge:
      "Разработка крипто-дашборда с нуля занимает недели: дизайн, вёрстка графиков, таблиц, адаптив. Дизайнеры и разработчики работают рассинхронно, и правки множатся.",
    solution:
      "Спроектировал макет в Figma с дизайн-токенами и auto layout, что позволило конвертировать весь дашборд в Next.js + Tailwind за 30 минут. Подключили CoinGecko API для реальных данных, Recharts для графиков, Radix UI для доступных компонентов.",
    image: "/images/coinpulse/cover.png",
    gallery: [
      "/images/coinpulse/dashboard.png",
      "/images/coinpulse/details.png",
      "/images/coinpulse/tokens.png",
    ],
    results: [
      { label: "Figma → Code", value: "30 мин" },
      { label: "Стек", value: "Next.js 14" },
      { label: "API", value: "CoinGecko" },
      { label: "Компоненты", value: "40+" },
    ],
    tags: ["Next.js", "Tailwind CSS", "Figma Tokens", "CoinGecko API", "Recharts", "Radix UI", "TypeScript"],
    duration: "1 день",
    team: "1 человек",
    year: "2025",
    isTemplate: true,
    projectUrl: "https://coin.yappix.ru",
    productUrl: "https://github.com/usmanoffcom/coinpulse",
    productLabel: "Скачать код на GitHub",
  },
  {
    slug: "projectorium-cicd",
    title: "Projectorium — CI/CD платформа для деплоя",
    client: "Projectorium",
    category: "DevOps / SaaS",
    description: "CI/CD SaaS для деплоя Node.js и Python приложений. Продуктовая история, лендинг, дизайн-система, 3D в Spline.",
    fullDescription:
      "Projectorium — это CI/CD SaaS платформа для самостоятельного деплоя Node.js и Python приложений. Платформа упрощает настройку серверов, автоматизирует деплой и мониторинг. Я разработал продуктовую историю, лендинг, дизайн-систему и 3D визуализацию в Spline, затем реализовал в Framer.",
    challenge:
      "Деплой приложений требует знаний DevOps: настройка серверов, CI/CD, мониторинг. Существующие решения либо слишком сложные (AWS), либо ограниченные (Heroku). Разработчикам нужна простая платформа для быстрого деплоя.",
    solution:
      "Создал концепцию платформы с упрощённым интерфейсом для деплоя за 3 клика. Разработал дизайн-систему, лендинг с 3D визуализацией в Spline для демонстрации процесса деплоя и реализовал в Framer.",
    image: "/m1fjlIfFhD1Rbz3LZBm0KPjCnIc.png",
    gallery: [
      "/m1fjlIfFhD1Rbz3LZBm0KPjCnIc.png",
      "/images/usmanoff-cases/1765784900404-p2.png",
      "/images/usmanoff-cases/1765785752006-p3.png",
    ],
    results: [
      { label: "Год", value: "2024" },
      { label: "Технологии", value: "Node.js + Python" },
      { label: "3D", value: "Spline" },
      { label: "Платформа", value: "Framer" },
    ],
    tags: ["CI/CD", "SaaS", "DevOps", "VDS", "Framer", "Spline"],
    duration: "2 месяца",
    team: "1 человек",
    year: "2024",
    isTemplate: true,
    productUrl: "https://yappix.lemonsqueezy.com/checkout",
    productLabel: "Скачать шаблон",
  },
  {
    slug: "minimal-portfolio-template",
    title: "Minimal Portfolio — Шаблон для разработчиков",
    client: "Community",
    category: "Design / Template",
    description: "Минималистичный шаблон портфолио для веб-разработчиков. Figma, Framer и Next.js версии с чистым кодом.",
    fullDescription:
      "Минималистичное портфолио для веб-разработчиков, доступное в Figma, Framer и Next.js. Я спроектировал макет, конвертировал в Framer и создал production-ready версию на Next.js с чистым, переиспользуемым кодом. Шаблон скачали 1000+ разработчиков.",
    challenge:
      "Разработчикам нужны качественные портфолио для демонстрации работ, но создание с нуля занимает время. Существующие шаблоны либо перегружены, либо устарели технически.",
    solution:
      "Создал минималистичный, но функциональный шаблон в трёх форматах: Figma для кастомизации дизайна, Framer для быстрого no-code деплоя и Next.js для разработчиков с полным контролем над кодом.",
    image: "/images/usmanoff-cases/1765793571452-5LXgMXEyVXeZH3OcVnyj6ZWrGY.png",
    gallery: [],
    results: [
      { label: "Год", value: "2024" },
      { label: "Форматы", value: "3 версии" },
      { label: "Скачиваний", value: "1K+" },
      { label: "Рейтинг", value: "4.9/5" },
    ],
    tags: ["Template", "Next.js", "Framer", "Figma", "Open Source"],
    duration: "1 месяц",
    team: "1 человек",
    year: "2024",
    isTemplate: true,
    productUrl: "https://yappix.lemonsqueezy.com/checkout",
    productLabel: "Скачать шаблон",
  },
  {
    slug: "bankist-ui-kit",
    title: "Bankist — UI Kit для банковских приложений",
    client: "Figma Community",
    category: "Design / UI Kit",
    description: "Бесплатный UI Kit для банковских мобильных приложений. Figma Community. Полный набор экранов и компонентов.",
    fullDescription:
      "Bankist Mobile App — это бесплатный UI Kit для любого банковского приложения, разработанный специально для Figma Community. Включает полный набор экранов (вход, главная, переводы, карты, история) и компонентов с состояниями. UI Kit скачали 8K+ раз, получив 2.5K+ лайков.",
    challenge:
      "Дизайнеры тратят недели на создание банковских интерфейсов с нуля. Существующие UI-киты либо платные, либо неполные. Сообществу нужен качественный бесплатный ресурс.",
    solution:
      "Создал комплексный UI Kit с 20+ экранами, включая все типичные флоу банковского приложения: авторизацию, переводы, управление картами, историю транзакций. Все компоненты имеют состояния (default, hover, active, disabled). Опубликовал бесплатно в Figma Community.",
    image: "/images/usmanoff-cases/1765794633140-vviamyylrzvr3japyiye.mp4",
    gallery: [],
    results: [
      { label: "Год", value: "2021" },
      { label: "Лайков", value: "2.5K+" },
      { label: "Дубликаций", value: "8K+" },
      { label: "Экраны", value: "20+" },
    ],
    tags: ["UI Kit", "Figma", "Finance", "Mobile", "Free", "Community"],
    duration: "1 месяц",
    team: "1 человек",
    year: "2021",
    isTemplate: true,
    productUrl: "https://www.figma.com/community/file/1351548503843486460/bankist-mobile-app-ui-kit",
    productLabel: "Скачать в Figma",
  },
  {
    slug: "yandex-go-scooters",
    title: "Yandex Go — Дизайн для самокатов",
    client: "Figma Community",
    category: "Design / Mobile",
    description: "Бесплатный дизайн для Figma Community. Интерфейс приложения для аренды самокатов Yandex Go.",
    fullDescription:
      "Концепт дизайна для приложения аренды самокатов Yandex Go, созданный для Figma Community. Включает флоу поиска самоката, QR-сканирование, навигацию, экран активной поездки и историю. Дизайн скачали 3K+ раз.",
    challenge:
      "Приложения для аренды самокатов должны быть максимально простыми — пользователи хотят начать поездку за секунды. Существующие решения перегружены или запутаны.",
    solution:
      "Спроектировал минималистичный интерфейс с фокусом на скорость: карта с самокатами, быстрое сканирование QR, крупные кнопки управления поездкой. Использовал brand colors Яндекса для узнаваемости.",
    image: "/images/usmanoff-cases/1765794832056-CEcpn8RuVyfTk0ujNHo9IeBgI6M.png",
    gallery: [],
    results: [
      { label: "Год", value: "2020" },
      { label: "Просмотров", value: "15K+" },
      { label: "Дубликаций", value: "3K+" },
      { label: "Флоу", value: "5 экранов" },
    ],
    tags: ["Figma", "Mobile", "Transport", "UX", "Community"],
    duration: "2 недели",
    team: "1 человек",
    year: "2020",
    isTemplate: true,
    productUrl: "https://www.figma.com/community/file/1353445766809808189/yandex-go-scooters",
    productLabel: "Скачать в Figma",
  },
]

export function getCaseBySlug(slug: string): CaseStudy | undefined {
  return casesData.find((c) => c.slug === slug)
}

export function getAllCaseSlugs(): string[] {
  return casesData.map((c) => c.slug)
}
