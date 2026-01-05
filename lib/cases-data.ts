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
}

export const casesData: CaseStudy[] = [
  {
    slug: "fintech-marketplace",
    title: "Финансовый маркетплейс",
    client: "FinHub",
    category: "FinTech",
    description: "Платформа для сравнения и оформления финансовых продуктов: кредиты, вклады, страховки.",
    fullDescription:
      "FinHub — это современный финансовый маркетплейс, который объединяет предложения от 50+ банков и страховых компаний. Платформа позволяет пользователям сравнивать условия, рассчитывать переплату и оформлять продукты онлайн без посещения офиса.",
    challenge:
      "Клиент пришёл с устаревшей платформой на монолитной архитектуре, которая не выдерживала нагрузку более 10 000 пользователей одновременно. Конверсия составляла всего 0.8%, а время загрузки страниц превышало 8 секунд.",
    solution:
      "Мы полностью переработали архитектуру, перейдя на микросервисы с использованием Next.js для фронтенда и Node.js для API. Внедрили персонализированные рекомендации на базе ML и оптимизировали воронку до 3 шагов. Интегрировали real-time скоринг через API банков-партнёров.",
    image: "/placeholder.svg?height=800&width=1200",
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    results: [
      { label: "Рост конверсии", value: "+340%" },
      { label: "Срок разработки", value: "4 мес" },
      { label: "MAU", value: "500K" },
      { label: "Время загрузки", value: "1.2 сек" },
    ],
    tags: ["Next.js", "PostgreSQL", "Stripe", "Kubernetes", "Redis", "ML"],
    testimonial: {
      text: "YappiX превзошли все ожидания. За 4 месяца мы получили платформу, которая обрабатывает в 50 раз больше трафика и конвертирует в 4 раза лучше.",
      author: "Алексей Петров",
      role: "CEO FinHub",
    },
    duration: "4 месяца",
    team: "8 человек",
    year: "2024",
  },
  {
    slug: "ai-support-bot",
    title: "AI-ассистент для банка",
    client: "Топ-10 банк РФ",
    category: "AI",
    description: "Интеллектуальный чат-бот для службы поддержки: отвечает на 80% вопросов без оператора.",
    fullDescription:
      "AI-ассистент для одного из крупнейших банков России, который обрабатывает более 2 миллионов обращений в месяц. Бот понимает естественный язык, работает с документами клиента и может выполнять операции: блокировка карты, выписки, переводы.",
    challenge:
      "Колл-центр банка обрабатывал 3 миллиона звонков в месяц, из которых 70% — типовые вопросы. Среднее время ожидания составляло 12 минут, а стоимость одного обращения — 150 рублей.",
    solution:
      "Разработали AI-ассистента на базе GPT-4 с RAG-архитектурой для работы с базой знаний банка. Интегрировали с core-banking системой для выполнения операций. Добавили распознавание намерений и эмоций для маршрутизации сложных кейсов на операторов.",
    image: "/placeholder.svg?height=800&width=1200",
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    results: [
      { label: "Автоматизация", value: "82%" },
      { label: "Экономия", value: "₽15M/год" },
      { label: "NPS", value: "+25 п.п." },
      { label: "Время ответа", value: "3 сек" },
    ],
    tags: ["GPT-4", "LangChain", "RAG", "Python", "FastAPI", "Vector DB"],
    testimonial: {
      text: "Бот от YappiX закрыл 82% обращений в первый месяц. Это позволило сократить колл-центр на 40% и направить ресурсы на сложные кейсы.",
      author: "Мария Иванова",
      role: "Директор по цифровизации",
    },
    duration: "6 месяцев",
    team: "6 человек",
    year: "2024",
  },
  {
    slug: "ecommerce-platform",
    title: "Маркетплейс электроники",
    client: "TechStore",
    category: "E-commerce",
    description: "Полный редизайн и миграция интернет-магазина с 1С-Битрикс на современный стек.",
    fullDescription:
      "TechStore — крупный интернет-магазин электроники с каталогом в 50 000 SKU. Мы мигрировали платформу с 1С-Битрикс на headless-архитектуру, сохранив все интеграции с 1С, складами и службами доставки.",
    challenge:
      "Старый сайт на Битрикс загружался 8+ секунд, мобильная версия практически не работала, а конверсия в мобайле была в 5 раз ниже десктопа. SEO-трафик стагнировал из-за технических проблем.",
    solution:
      "Перешли на Next.js + Medusa как headless CMS. Реализовали ISR для каталога, добавили Algolia для мгновенного поиска. Полностью переработали мобильный UX и внедрили PWA с push-уведомлениями.",
    image: "/placeholder.svg?height=800&width=1200",
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    results: [
      { label: "Скорость", value: "+400%" },
      { label: "Конверсия", value: "+65%" },
      { label: "SEO трафик", value: "+180%" },
      { label: "Mobile CR", value: "+210%" },
    ],
    tags: ["Next.js", "Medusa", "Algolia", "Vercel", "1С", "PWA"],
    duration: "5 месяцев",
    team: "7 человек",
    year: "2024",
  },
  {
    slug: "saas-hr-platform",
    title: "HR-платформа",
    client: "PeopleFirst",
    category: "SaaS",
    description: "SaaS-платформа для управления персоналом: найм, онбординг, оценка, аналитика.",
    fullDescription:
      "PeopleFirst — комплексная HR-платформа для среднего и крупного бизнеса. Система охватывает весь цикл работы с персоналом: от публикации вакансий до exit-интервью. Встроенная аналитика помогает HR принимать data-driven решения.",
    challenge:
      "Стартап имел MVP на no-code платформе, который не масштабировался. При 50+ компаниях-клиентах система начинала тормозить, а добавление новых функций занимало недели.",
    solution:
      "Разработали платформу с нуля на React + Node.js с multi-tenant архитектурой. Внедрили систему ролей и разрешений, интеграции с популярными job-бордами и мессенджерами. Автоматизировали онбординг через конструктор воронок.",
    image: "/placeholder.svg?height=800&width=1200",
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    results: [
      { label: "B2B клиентов", value: "200+" },
      { label: "ARR", value: "$2M" },
      { label: "Retention", value: "94%" },
      { label: "NPS", value: "72" },
    ],
    tags: ["React", "Node.js", "PostgreSQL", "AWS", "Stripe", "SendGrid"],
    testimonial: {
      text: "YappiX помогли нам вырасти с 50 до 200 клиентов за год. Платформа работает стабильно и масштабируется без проблем.",
      author: "Дмитрий Козлов",
      role: "Founder PeopleFirst",
    },
    duration: "8 месяцев",
    team: "10 человек",
    year: "2023",
  },
  {
    slug: "mobile-delivery-app",
    title: "Приложение доставки еды",
    client: "FoodRush",
    category: "Mobile",
    description: "Кроссплатформенное приложение для заказа еды с real-time трекингом и интеграцией с ресторанами.",
    fullDescription:
      "FoodRush — приложение для заказа еды в городах-миллионниках. Экосистема включает приложения для клиентов, курьеров и ресторанов, а также админ-панель для управления операциями.",
    challenge:
      "Клиент запускался на высококонкурентном рынке и нуждался в быстром выходе. Необходимо было создать 3 приложения + бэкенд за 4 месяца с нуля.",
    solution:
      "Использовали React Native для кроссплатформенной разработки клиентского и курьерского приложений. Бэкенд на Node.js с Socket.io для real-time обновлений. Интегрировали геолокацию, push-уведомления и платежи.",
    image: "/placeholder.svg?height=800&width=1200",
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    results: [
      { label: "Скачиваний", value: "1M+" },
      { label: "Рейтинг", value: "4.8★" },
      { label: "Заказов/день", value: "50K" },
      { label: "Time to market", value: "4 мес" },
    ],
    tags: ["React Native", "Firebase", "Node.js", "Stripe", "Socket.io", "Maps"],
    duration: "4 месяца",
    team: "9 человек",
    year: "2024",
  },
  {
    slug: "corporate-portal",
    title: "Корпоративный портал",
    client: "Крупный ритейлер",
    category: "Enterprise",
    description: "Внутренний портал для 15 000 сотрудников: новости, документы, заявки, аналитика.",
    fullDescription:
      "Корпоративный портал для федеральной розничной сети с 500+ магазинами. Единая точка входа для сотрудников: новости компании, база знаний, заявки на отпуск/командировки, согласования, обучение.",
    challenge:
      "Компания использовала 7 разных систем для внутренних процессов. Сотрудники тратили до 2 часов в день на переключение между системами и поиск информации.",
    solution:
      "Создали единый портал с интеграциями всех существующих систем через API. Реализовали SSO через Active Directory, персонализированную ленту новостей на основе роли и локации, мобильное приложение для полевых сотрудников.",
    image: "/placeholder.svg?height=800&width=1200",
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    results: [
      { label: "Пользователей", value: "15K" },
      { label: "DAU", value: "8K" },
      { label: "Интеграций", value: "12" },
      { label: "Экономия времени", value: "1.5ч/день" },
    ],
    tags: ["Next.js", "SharePoint", "MS Graph", "Azure", "Active Directory"],
    testimonial: {
      text: "Портал объединил все наши системы в одном месте. Сотрудники экономят полтора часа каждый день — это огромный эффект на 15 000 человек.",
      author: "Елена Смирнова",
      role: "HR Director",
    },
    duration: "7 месяцев",
    team: "12 человек",
    year: "2023",
  },
]

export function getCaseBySlug(slug: string): CaseStudy | undefined {
  return casesData.find((c) => c.slug === slug)
}

export function getAllCaseSlugs(): string[] {
  return casesData.map((c) => c.slug)
}
