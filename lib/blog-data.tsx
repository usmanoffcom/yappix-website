export interface BlogPost {
  slug: string
  title: string
  metaTitle: string
  metaDescription: string
  keywords: string[]
  excerpt: string
  content: string
  image: string
  category: string
  tags: string[]
  author: string
  authorRole: string
  publishedAt: string
  updatedAt?: string
  readingTime: string
}

export interface BlogCategory {
  name: string
  slug: string
}

export const blogCategories: BlogCategory[] = [
  { name: "Все статьи", slug: "" },
  { name: "Разработка", slug: "razrabotka" },
  { name: "AI и ML", slug: "ai-ml" },
  { name: "DevOps", slug: "devops" },
  { name: "SEO", slug: "seo" },
  { name: "Бизнес", slug: "biznes" },
]

export const blogPosts: BlogPost[] = [
  {
    slug: "kak-my-sozdaem-mvp-za-7-dnej-s-pomoshchyu-ai",
    title: "Как мы создаём MVP за 7 дней с помощью AI",
    metaTitle: "Как создать MVP за 7 дней с AI | Руководство YappiX",
    metaDescription:
      "Пошаговое руководство по созданию MVP за неделю с использованием AI-инструментов. Реальный кейс: от идеи до рабочего прототипа.",
    keywords: ["MVP разработка", "AI разработка", "быстрое прототипирование", "стартап MVP"],
    excerpt:
      "Рассказываем, как AI-инструменты позволяют нам запускать MVP за 7 дней вместо 2-3 месяцев. Реальный кейс с цифрами и метриками.",
    content: `
      <h2>Почему 7 дней — это реально</h2>
      <p>Традиционный подход к разработке MVP занимает 2-3 месяца. Мы сократили этот срок до 7 дней благодаря AI-инструментам и отработанным процессам.</p>
      
      <h2>Наш стек для быстрой разработки</h2>
      <ul>
        <li><strong>v0.dev</strong> — генерация UI-компонентов</li>
        <li><strong>Cursor</strong> — AI-ассистент для кода</li>
        <li><strong>Vercel</strong> — деплой за секунды</li>
        <li><strong>Supabase</strong> — база данных и авторизация</li>
      </ul>
      
      <h2>Кейс: Маркетплейс услуг</h2>
      <p>Клиент пришёл с идеей маркетплейса для фрилансеров. За 7 дней мы создали:</p>
      <ul>
        <li>Регистрацию и профили</li>
        <li>Каталог услуг с поиском</li>
        <li>Чат между заказчиком и исполнителем</li>
        <li>Базовую систему оплаты</li>
      </ul>
      
      <h2>Результат</h2>
      <p>Клиент получил рабочий MVP, собрал первых 50 пользователей и привлёк pre-seed инвестиции на $200K.</p>
    `,
    image: "/placeholder.svg?height=600&width=1200",
    category: "Разработка",
    tags: ["MVP", "AI", "Стартапы", "v0.dev", "Cursor"],
    author: "YappiX Team",
    authorRole: "Команда разработки",
    publishedAt: "2025-01-10",
    readingTime: "8 мин",
  },
  {
    slug: "seo-optimizaciya-nextjs-polnoe-rukovodstvo-2025",
    title: "SEO-оптимизация Next.js: полное руководство 2025",
    metaTitle: "SEO для Next.js в 2025 году — полное руководство | YappiX",
    metaDescription:
      "Как оптимизировать Next.js сайт для Яндекса и Google. Метатеги, JSON-LD, Core Web Vitals, SSR vs SSG — всё в одном руководстве.",
    keywords: ["Next.js SEO", "SEO оптимизация", "React SEO", "метатеги Next.js", "JSON-LD"],
    excerpt:
      "Детальное руководство по SEO для Next.js в 2025 году. Разбираем метатеги, structured data, оптимизацию производительности.",
    content: `
      <h2>Почему Next.js идеален для SEO</h2>
      <p>Next.js из коробки поддерживает SSR и SSG — два ключевых подхода для SEO-оптимизации. В отличие от чистого React, контент рендерится на сервере и доступен поисковым роботам.</p>
      
      <h2>Обязательные метатеги</h2>
      <p>Каждая страница должна иметь уникальные title и description. В Next.js 14+ используйте Metadata API:</p>
      <pre><code>export const metadata = {
  title: 'Заголовок страницы',
  description: 'Описание до 160 символов'
}</code></pre>
      
      <h2>JSON-LD разметка</h2>
      <p>Structured data помогает поисковикам понять контент. Добавляйте Organization, Article, Product в зависимости от типа страницы.</p>
      
      <h2>Core Web Vitals</h2>
      <p>Google учитывает LCP, FID, CLS при ранжировании. Next.js 14+ с App Router показывает отличные результаты из коробки.</p>
    `,
    image: "/placeholder.svg?height=600&width=1200",
    category: "SEO",
    tags: ["Next.js", "SEO", "Яндекс", "Google", "Метатеги"],
    author: "YappiX Team",
    authorRole: "SEO-специалисты",
    publishedAt: "2025-01-05",
    readingTime: "12 мин",
  },
  {
    slug: "vybor-steka-tehnologij-dlya-saas-v-2025",
    title: "Выбор стека технологий для SaaS в 2025 году",
    metaTitle: "Технологический стек для SaaS 2025 | YappiX",
    metaDescription:
      "Какие технологии выбрать для SaaS-продукта в 2025: фронтенд, бэкенд, база данных, инфраструктура. Сравнение и рекомендации.",
    keywords: ["SaaS стек", "технологии для SaaS", "Next.js SaaS", "PostgreSQL", "Kubernetes"],
    excerpt:
      "Разбираем оптимальный стек для SaaS в 2025: от фронтенда до инфраструктуры. Основано на опыте 30+ проектов.",
    content: `
      <h2>Фронтенд: Next.js или Remix?</h2>
      <p>Для большинства SaaS рекомендуем Next.js 14+ с App Router. RSC снижают нагрузку на клиент, улучшают SEO и производительность.</p>
      
      <h2>Бэкенд: Node.js, Python или Go?</h2>
      <p>Node.js — для быстрого старта и единого языка. Python — для ML-интенсивных проектов. Go — для высоконагруженных систем.</p>
      
      <h2>База данных</h2>
      <p>PostgreSQL — универсальный выбор. Для документов — MongoDB. Для кэширования — Redis. Для поиска — Elasticsearch или Meilisearch.</p>
      
      <h2>Инфраструктура</h2>
      <p>Начните с Vercel/Railway, масштабируйтесь на AWS/GCP с Kubernetes. Не оверинжинирьте на старте.</p>
    `,
    image: "/placeholder.svg?height=600&width=1200",
    category: "Разработка",
    tags: ["SaaS", "Next.js", "PostgreSQL", "Kubernetes", "Архитектура"],
    author: "YappiX Team",
    authorRole: "Архитекторы",
    publishedAt: "2024-12-20",
    readingTime: "10 мин",
  },
  {
    slug: "ai-agenty-v-biznese-prakticheskoe-rukovodstvo",
    title: "AI-агенты в бизнесе: практическое руководство",
    metaTitle: "AI-агенты для бизнеса — как внедрить | YappiX",
    metaDescription:
      "Как использовать AI-агентов для автоматизации бизнес-процессов. Кейсы, инструменты, ROI. Практический опыт внедрения.",
    keywords: ["AI агенты", "автоматизация бизнеса", "LLM", "GPT для бизнеса", "RAG"],
    excerpt:
      "Как AI-агенты меняют бизнес-процессы: от поддержки клиентов до анализа данных. Реальные кейсы и метрики эффективности.",
    content: `
      <h2>Что такое AI-агенты</h2>
      <p>AI-агент — это система на базе LLM, которая может выполнять задачи автономно: отвечать на вопросы, обрабатывать документы, интегрироваться с внешними системами.</p>
      
      <h2>Где применять</h2>
      <ul>
        <li><strong>Поддержка клиентов</strong> — ответы на 80% типовых вопросов</li>
        <li><strong>Продажи</strong> — квалификация лидов, follow-up</li>
        <li><strong>HR</strong> — скрининг резюме, ответы кандидатам</li>
        <li><strong>Документы</strong> — анализ контрактов, генерация отчётов</li>
      </ul>
      
      <h2>ROI внедрения</h2>
      <p>Средний ROI от AI-агентов в поддержке — 300% за первый год. Снижение нагрузки на операторов — 60-70%.</p>
    `,
    image: "/placeholder.svg?height=600&width=1200",
    category: "AI и ML",
    tags: ["AI", "Автоматизация", "LLM", "Чат-боты", "ROI"],
    author: "YappiX Team",
    authorRole: "AI-инженеры",
    publishedAt: "2024-12-15",
    readingTime: "9 мин",
  },
  {
    slug: "bezopasnost-fintech-prilozhenij-chek-list",
    title: "Безопасность FinTech-приложений: чек-лист",
    metaTitle: "Безопасность FinTech: полный чек-лист | YappiX",
    metaDescription:
      "Чек-лист безопасности для FinTech-приложений: PCI DSS, шифрование, аутентификация, мониторинг. Основано на требованиях регуляторов.",
    keywords: ["FinTech безопасность", "PCI DSS", "безопасность платежей", "шифрование данных"],
    excerpt:
      "Полный чек-лист безопасности для финтех-продуктов. От базовых требований до соответствия PCI DSS и 152-ФЗ.",
    content: `
      <h2>Базовые требования</h2>
      <ul>
        <li>HTTPS везде, HSTS включен</li>
        <li>Все пароли хэшируются (bcrypt/argon2)</li>
        <li>2FA для критичных операций</li>
        <li>Rate limiting на всех эндпоинтах</li>
      </ul>
      
      <h2>Требования PCI DSS</h2>
      <p>Если обрабатываете карточные данные, нужен PCI DSS. Ключевые требования: сегментация сети, шифрование данных карт, регулярные аудиты.</p>
      
      <h2>152-ФЗ</h2>
      <p>Персональные данные граждан РФ должны храниться на территории России. Требуется согласие на обработку, политика конфиденциальности.</p>
      
      <h2>Мониторинг</h2>
      <p>Внедрите SIEM для обнаружения аномалий. Логируйте все операции. Настройте алерты на подозрительную активность.</p>
    `,
    image: "/placeholder.svg?height=600&width=1200",
    category: "Разработка",
    tags: ["FinTech", "Безопасность", "PCI DSS", "152-ФЗ", "Шифрование"],
    author: "YappiX Team",
    authorRole: "Security-инженеры",
    publishedAt: "2024-12-10",
    readingTime: "11 мин",
  },
  {
    slug: "kubernetes-vs-serverless-chto-vybrat",
    title: "Kubernetes vs Serverless: что выбрать в 2025",
    metaTitle: "Kubernetes или Serverless — сравнение 2025 | YappiX",
    metaDescription:
      "Сравнение Kubernetes и Serverless для разных типов проектов. Когда использовать каждый подход, плюсы и минусы.",
    keywords: ["Kubernetes", "Serverless", "AWS Lambda", "DevOps", "облачная инфраструктура"],
    excerpt: "Детальное сравнение Kubernetes и Serverless. Помогаем выбрать оптимальный подход для вашего проекта.",
    content: `
      <h2>Когда выбрать Kubernetes</h2>
      <ul>
        <li>Предсказуемая нагрузка</li>
        <li>Сложные stateful-приложения</li>
        <li>Требуется полный контроль</li>
        <li>Команда с DevOps-экспертизой</li>
      </ul>
      
      <h2>Когда выбрать Serverless</h2>
      <ul>
        <li>Переменная нагрузка</li>
        <li>Event-driven архитектура</li>
        <li>Быстрый старт без DevOps</li>
        <li>Pay-per-use экономика</li>
      </ul>
      
      <h2>Гибридный подход</h2>
      <p>В 2025 большинство проектов используют гибрид: ядро на Kubernetes, периферия на Lambda/Cloud Functions.</p>
    `,
    image: "/placeholder.svg?height=600&width=1200",
    category: "DevOps",
    tags: ["Kubernetes", "Serverless", "AWS", "DevOps", "Инфраструктура"],
    author: "YappiX Team",
    authorRole: "DevOps-инженеры",
    publishedAt: "2024-12-05",
    readingTime: "7 мин",
  },
]

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}
