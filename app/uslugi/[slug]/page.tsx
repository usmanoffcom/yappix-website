import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Check, ArrowLeft } from "lucide-react"

const servicesData: Record<
  string,
  {
    title: string
    metaTitle: string
    metaDescription: string
    keywords: string[]
    heroDescription: string
    features: string[]
    process: { step: string; title: string; description: string }[]
    technologies: string[]
    pricing: { name: string; price: string; features: string[] }[]
    faq: { question: string; answer: string }[]
  }
> = {
  "razrabotka-sajtov": {
    title: "Разработка сайтов",
    metaTitle: "Разработка сайтов под ключ — цены от 150 000 ₽ | YappiX",
    metaDescription:
      "Создание сайтов любой сложности: корпоративные сайты, лендинги, интернет-магазины. SEO-оптимизация, адаптивный дизайн, интеграции. MVP за 7 дней.",
    keywords: [
      "разработка сайтов",
      "создание сайта",
      "веб-разработка",
      "корпоративный сайт",
      "интернет-магазин",
      "лендинг",
    ],
    heroDescription:
      "Создаём сайты, которые приносят клиентов. Современный стек, SEO из коробки, интеграция с CRM и аналитикой. От лендинга до сложного портала.",
    features: [
      "Адаптивный дизайн под все устройства",
      "SEO-оптимизация с первого дня",
      "Интеграция с CRM, 1С, платёжными системами",
      "Высокая скорость загрузки (Core Web Vitals)",
      "Защита от DDoS и взломов",
      "Техническая поддержка 24/7",
    ],
    process: [
      {
        step: "01",
        title: "Аналитика",
        description: "Изучаем бизнес, конкурентов, целевую аудиторию. Формируем ТЗ и прототипы.",
      },
      { step: "02", title: "Дизайн", description: "Создаём UI/UX дизайн, адаптивные макеты, интерактивные прототипы." },
      {
        step: "03",
        title: "Разработка",
        description: "Верстаем, программируем, интегрируем. Используем CI/CD для качества.",
      },
      {
        step: "04",
        title: "Запуск",
        description: "Тестируем, настраиваем хостинг, запускаем. Обучаем команду заказчика.",
      },
    ],
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Redis", "Vercel", "AWS"],
    pricing: [
      {
        name: "Лендинг",
        price: "от 150 000 ₽",
        features: ["1-5 экранов", "Адаптив", "Формы", "Аналитика", "2-3 недели"],
      },
      {
        name: "Корпоративный",
        price: "от 400 000 ₽",
        features: ["До 30 страниц", "CMS", "SEO", "Интеграции", "4-8 недель"],
      },
      {
        name: "Интернет-магазин",
        price: "от 800 000 ₽",
        features: ["Каталог", "Корзина", "Оплата", "CRM", "8-12 недель"],
      },
    ],
    faq: [
      {
        question: "Сколько времени занимает разработка сайта?",
        answer:
          "Лендинг — 2-3 недели, корпоративный сайт — 4-8 недель, интернет-магазин — 8-12 недель. Сроки зависят от сложности и готовности контента.",
      },
      {
        question: "Что входит в стоимость?",
        answer:
          "Дизайн, разработка, адаптив, базовая SEO-оптимизация, интеграция аналитики, обучение, 3 месяца гарантийной поддержки.",
      },
      {
        question: "Какие гарантии вы даёте?",
        answer:
          "Тестовая неделя с возможностью возврата средств. Гарантия на код — 12 месяцев. Фиксированная цена в договоре.",
      },
    ],
  },
  "mobilnye-prilozheniya": {
    title: "Мобильные приложения",
    metaTitle: "Разработка мобильных приложений iOS и Android | YappiX",
    metaDescription:
      "Создание мобильных приложений: нативная и кроссплатформенная разработка. React Native, Flutter, Swift, Kotlin. Публикация в App Store и Google Play.",
    keywords: ["разработка мобильных приложений", "iOS приложение", "Android приложение", "React Native", "Flutter"],
    heroDescription:
      "Разрабатываем мобильные приложения, которые пользователи любят. Нативные и кроссплатформенные решения с фокусом на UX и производительность.",
    features: [
      "Кроссплатформенная разработка (один код — две платформы)",
      "Нативная производительность и UX",
      "Офлайн-режим и синхронизация",
      "Push-уведомления и геолокация",
      "Интеграция с платёжными системами",
      "Публикация и поддержка в сторах",
    ],
    process: [
      {
        step: "01",
        title: "Discovery",
        description: "Исследуем рынок, формируем MVP-функциональность, создаём прототипы.",
      },
      { step: "02", title: "Дизайн", description: "Проектируем UX, создаём UI по гайдлайнам Apple и Google." },
      {
        step: "03",
        title: "Разработка",
        description: "Пишем код, интегрируем API, тестируем на реальных устройствах.",
      },
      { step: "04", title: "Релиз", description: "Публикуем в App Store и Google Play, настраиваем аналитику." },
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "GraphQL", "WebSocket", "CI/CD"],
    pricing: [
      {
        name: "MVP",
        price: "от 500 000 ₽",
        features: ["Базовый функционал", "1 платформа", "4-6 недель", "Публикация"],
      },
      { name: "Стандарт", price: "от 1 500 000 ₽", features: ["iOS + Android", "Админ-панель", "Push", "8-12 недель"] },
      {
        name: "Enterprise",
        price: "от 3 000 000 ₽",
        features: ["Сложные интеграции", "Офлайн", "Аналитика", "12+ недель"],
      },
    ],
    faq: [
      {
        question: "React Native или Flutter?",
        answer:
          "React Native — если важна скорость и есть React-команда. Flutter — если нужна максимальная производительность и кастомный UI. Поможем выбрать.",
      },
      {
        question: "Сколько стоит публикация в сторах?",
        answer:
          "Apple Developer Program — $99/год, Google Play — $25 единоразово. Публикация входит в стоимость разработки.",
      },
      {
        question: "Как происходит поддержка после запуска?",
        answer:
          "Предлагаем пакеты поддержки: исправление багов, обновления под новые версии ОС, развитие функциональности.",
      },
    ],
  },
  "ai-chat-boty": {
    title: "AI чат-боты",
    metaTitle: "Разработка AI чат-ботов на GPT, Claude | YappiX",
    metaDescription:
      "Создание интеллектуальных чат-ботов: интеграция с GPT-4, Claude, собственные LLM. RAG, fine-tuning, автоматизация поддержки.",
    keywords: ["AI чат-бот", "GPT бот", "разработка чат-бота", "LLM интеграция", "RAG система"],
    heroDescription:
      "Создаём AI-ассистентов, которые понимают контекст, отвечают по делу и экономят время вашей команды. Интеграция с любыми системами.",
    features: [
      "Интеграция с GPT-4, Claude, Gemini, Llama",
      "RAG — ответы на основе ваших документов",
      "Fine-tuning под специфику бизнеса",
      "Мультиканальность (сайт, Telegram, WhatsApp)",
      "Аналитика диалогов и улучшение качества",
      "Соответствие 152-ФЗ, хранение в РФ",
    ],
    process: [
      { step: "01", title: "Аудит", description: "Анализируем текущие процессы, определяем сценарии автоматизации." },
      { step: "02", title: "Прототип", description: "Создаём MVP бота, тестируем на реальных диалогах." },
      { step: "03", title: "Обучение", description: "Настраиваем RAG, fine-tuning, интегрируем базы знаний." },
      { step: "04", title: "Интеграция", description: "Подключаем к CRM, сайту, мессенджерам. Запускаем в продакшн." },
    ],
    technologies: ["OpenAI API", "Anthropic Claude", "LangChain", "Pinecone", "Qdrant", "Python", "FastAPI", "Redis"],
    pricing: [
      {
        name: "Базовый",
        price: "от 200 000 ₽",
        features: ["FAQ бот", "1 канал", "До 1000 запросов/день", "2-3 недели"],
      },
      {
        name: "Продвинутый",
        price: "от 500 000 ₽",
        features: ["RAG система", "Мультиканал", "CRM интеграция", "4-6 недель"],
      },
      { name: "Enterprise", price: "от 1 500 000 ₽", features: ["Fine-tuning", "On-premise", "SLA", "8-12 недель"] },
    ],
    faq: [
      {
        question: "Какой LLM лучше выбрать?",
        answer:
          "GPT-4 — универсальный, лучший для большинства задач. Claude — для длинных текстов и анализа. Llama — если нужен on-premise.",
      },
      {
        question: "Как обеспечить качество ответов?",
        answer:
          "RAG + промпт-инжиниринг + fine-tuning + человеческая модерация. Качество растёт с каждым месяцем использования.",
      },
      {
        question: "Можно ли хранить данные в России?",
        answer:
          "Да, развёртываем на российских серверах с соблюдением 152-ФЗ. Используем YandexGPT или self-hosted LLM.",
      },
    ],
  },
  "saas-paas": {
    title: "SaaS / PaaS разработка",
    metaTitle: "Разработка SaaS и PaaS платформ | YappiX",
    metaDescription:
      "Создание облачных SaaS продуктов и PaaS платформ. Мультитенантность, биллинг, масштабирование, безопасность корпоративного уровня.",
    keywords: ["SaaS разработка", "PaaS платформа", "облачный сервис", "мультитенантность", "B2B SaaS"],
    heroDescription:
      "Строим облачные продукты, которые масштабируются. От MVP до платформы с миллионами пользователей. Архитектура, которая выдержит рост.",
    features: [
      "Мультитенантная архитектура",
      "Гибкая система биллинга и подписок",
      "API-first подход",
      "Автоскейлинг и высокая доступность",
      "Безопасность корпоративного уровня",
      "Аналитика и мониторинг в реальном времени",
    ],
    process: [
      { step: "01", title: "Product Discovery", description: "Валидируем идею, исследуем рынок, формируем MVP scope." },
      { step: "02", title: "Архитектура", description: "Проектируем масштабируемую архитектуру, выбираем стек." },
      { step: "03", title: "Разработка", description: "Итеративная разработка с релизами каждые 2 недели." },
      { step: "04", title: "Масштабирование", description: "Оптимизируем под нагрузку, добавляем enterprise-фичи." },
    ],
    technologies: ["Kubernetes", "PostgreSQL", "Redis", "Kafka", "gRPC", "GraphQL", "Terraform", "DataDog"],
    pricing: [
      {
        name: "MVP",
        price: "от 1 000 000 ₽",
        features: ["Core функционал", "Базовый биллинг", "До 100 клиентов", "8-12 недель"],
      },
      {
        name: "Growth",
        price: "от 3 000 000 ₽",
        features: ["Полный функционал", "Интеграции", "До 10K клиентов", "4-6 месяцев"],
      },
      {
        name: "Enterprise",
        price: "от 10 000 000 ₽",
        features: ["White-label", "On-premise", "Неограниченно", "6-12 месяцев"],
      },
    ],
    faq: [
      {
        question: "Как быстро можно запустить MVP?",
        answer:
          "MVP с core-функциональностью — 8-12 недель. Используем AI-инструменты для ускорения разработки на 40%.",
      },
      {
        question: "Какой стек технологий вы используете?",
        answer:
          "Next.js/React для фронтенда, Node.js/Python для бэкенда, PostgreSQL + Redis для данных, Kubernetes для оркестрации.",
      },
      {
        question: "Как обеспечивается безопасность?",
        answer: "SOC 2 практики, шифрование данных, регулярные пентесты, WAF, DDoS-защита, резервное копирование.",
      },
    ],
  },
  fintech: {
    title: "FinTech решения",
    metaTitle: "Разработка FinTech решений и платёжных систем | YappiX",
    metaDescription:
      "Создание финтех продуктов: платёжные системы, банковские интеграции, криптокошельки. PCI DSS, 152-ФЗ. Опыт работы с ЦБ.",
    keywords: ["FinTech разработка", "платёжная система", "банковская интеграция", "криптокошелёк", "PCI DSS"],
    heroDescription:
      "Разрабатываем финансовые продукты с соблюдением всех регуляторных требований. Платёжные системы, банковские интеграции, DeFi.",
    features: [
      "Соответствие PCI DSS, 152-ФЗ, 115-ФЗ",
      "Интеграция с банками и платёжными системами",
      "Криптовалютные решения и DeFi",
      "Высоконагруженные системы (100K+ TPS)",
      "Фрод-мониторинг и AML",
      "Отчётность для ЦБ",
    ],
    process: [
      { step: "01", title: "Комплаенс", description: "Анализируем регуляторные требования, формируем архитектуру." },
      { step: "02", title: "Безопасность", description: "Проектируем с учётом threat modeling, готовим к аудитам." },
      { step: "03", title: "Разработка", description: "Разрабатываем с фокусом на надёжность и производительность." },
      { step: "04", title: "Сертификация", description: "Помогаем пройти аудиты и получить необходимые лицензии." },
    ],
    technologies: ["Java", "Kotlin", "PostgreSQL", "Kafka", "Redis", "HSM", "Blockchain", "Smart Contracts"],
    pricing: [
      { name: "Интеграции", price: "от 500 000 ₽", features: ["Эквайринг", "СБП", "Банк API", "4-8 недель"] },
      {
        name: "Платёжная система",
        price: "от 5 000 000 ₽",
        features: ["Полный цикл", "PCI DSS", "Фрод", "6-12 месяцев"],
      },
      {
        name: "Банковский продукт",
        price: "от 15 000 000 ₽",
        features: ["Core banking", "ЦБ отчётность", "12+ месяцев"],
      },
    ],
    faq: [
      {
        question: "Есть ли опыт работы с регуляторами?",
        answer: "Да, помогали клиентам получать лицензии ЦБ, проходить PCI DSS аудиты, внедрять 115-ФЗ комплаенс.",
      },
      {
        question: "Можете ли разработать криптопродукт?",
        answer: "Да, разрабатываем криптокошельки, DEX, DeFi протоколы. Работаем с Ethereum, Solana, TON.",
      },
      {
        question: "Как обеспечивается безопасность?",
        answer: "HSM для ключей, шифрование на всех уровнях, пентесты, SOC-мониторинг, резервирование в разных ДЦ.",
      },
    ],
  },
  devops: {
    title: "DevOps услуги",
    metaTitle: "DevOps услуги — CI/CD, Kubernetes, мониторинг | YappiX",
    metaDescription:
      "DevOps услуги: настройка CI/CD, контейнеризация, Kubernetes, мониторинг, автоскейлинг. Снижение time-to-market на 50%.",
    keywords: ["DevOps услуги", "CI/CD", "Kubernetes", "Docker", "мониторинг", "инфраструктура"],
    heroDescription:
      "Автоматизируем процессы разработки и деплоя. CI/CD, контейнеризация, мониторинг — всё для быстрой и надёжной доставки кода.",
    features: [
      "CI/CD пайплайны (GitLab, GitHub Actions, Jenkins)",
      "Контейнеризация и оркестрация (Docker, K8s)",
      "Infrastructure as Code (Terraform, Pulumi)",
      "Мониторинг и алертинг (Prometheus, Grafana)",
      "Оптимизация затрат на облако до 40%",
      "Disaster Recovery и бэкапы",
    ],
    process: [
      { step: "01", title: "Аудит", description: "Анализируем текущую инфраструктуру, находим узкие места." },
      { step: "02", title: "Архитектура", description: "Проектируем целевое состояние, составляем roadmap." },
      { step: "03", title: "Внедрение", description: "Настраиваем инструменты, автоматизируем процессы." },
      { step: "04", title: "Передача", description: "Документируем, обучаем команду, передаём в поддержку." },
    ],
    technologies: ["Kubernetes", "Docker", "Terraform", "Ansible", "GitLab CI", "ArgoCD", "Prometheus", "ELK Stack"],
    pricing: [
      { name: "Аудит", price: "от 100 000 ₽", features: ["Анализ", "Рекомендации", "Roadmap", "1-2 недели"] },
      { name: "CI/CD", price: "от 300 000 ₽", features: ["Пайплайны", "Автотесты", "Деплой", "2-4 недели"] },
      {
        name: "Полный DevOps",
        price: "от 150 000 ₽/мес",
        features: ["Инфраструктура", "Мониторинг", "Поддержка 24/7"],
      },
    ],
    faq: [
      {
        question: "Работаете ли с российскими облаками?",
        answer: "Да, работаем с Yandex Cloud, VK Cloud, Selectel, а также с AWS, GCP, Azure.",
      },
      {
        question: "Можете ли мигрировать с одного облака на другое?",
        answer: "Да, проводим миграции между облаками с минимальным даунтаймом. Используем IaC для повторяемости.",
      },
      {
        question: "Как быстро можете подключиться к проекту?",
        answer: "В течение 1-2 дней. Работаем по модели dedicated team или time & materials.",
      },
    ],
  },
  "seo-prodvizhenie": {
    title: "SEO продвижение",
    metaTitle: "SEO продвижение сайтов — рост трафика от 200% | YappiX",
    metaDescription:
      "Комплексное SEO продвижение: техническая оптимизация, контент-маркетинг, линкбилдинг. Рост органического трафика и конверсий.",
    keywords: ["SEO продвижение", "поисковая оптимизация", "продвижение сайта", "SEO аудит", "контент-маркетинг"],
    heroDescription:
      "Выводим сайты в топ Яндекса и Google. Комплексный подход: техническое SEO, контент, ссылки, поведенческие. Прозрачная отчётность.",
    features: [
      "Техническая оптимизация и Core Web Vitals",
      "Семантическое ядро и контент-стратегия",
      "Качественный линкбилдинг",
      "Локальное SEO и карточки организаций",
      "E-E-A-T оптимизация",
      "Ежемесячная отчётность и аналитика",
    ],
    process: [
      { step: "01", title: "Аудит", description: "Полный аудит сайта: техника, контент, ссылки, конкуренты." },
      {
        step: "02",
        title: "Стратегия",
        description: "Формируем семантику, приоритизируем страницы, планируем контент.",
      },
      {
        step: "03",
        title: "Оптимизация",
        description: "Внедряем технические правки, публикуем контент, строим ссылки.",
      },
      { step: "04", title: "Рост", description: "Анализируем результаты, корректируем стратегию, масштабируем." },
    ],
    technologies: ["Яндекс Вебмастер", "Google Search Console", "Ahrefs", "Screaming Frog", "SurferSEO", "DataForSEO"],
    pricing: [
      { name: "Старт", price: "от 80 000 ₽/мес", features: ["До 50 запросов", "Техаудит", "Контент", "Отчёты"] },
      { name: "Бизнес", price: "от 150 000 ₽/мес", features: ["До 200 запросов", "Линкбилдинг", "Локальное SEO"] },
      { name: "Enterprise", price: "от 300 000 ₽/мес", features: ["Без ограничений", "Выделенная команда", "SLA"] },
    ],
    faq: [
      {
        question: "Когда ждать результатов?",
        answer: "Первые улучшения — через 2-3 месяца. Стабильный рост — через 6 месяцев. SEO — это марафон, не спринт.",
      },
      {
        question: "Даёте ли гарантии на позиции?",
        answer:
          "Не даём гарантий на конкретные позиции (это нарушает правила поисковиков). Гарантируем рост органического трафика.",
      },
      {
        question: "Работаете ли с молодыми сайтами?",
        answer: "Да, но рекомендуем параллельно вкладываться в контекстную рекламу на время набора SEO-позиций.",
      },
    ],
  },
  smm: {
    title: "SMM продвижение",
    metaTitle: "SMM продвижение в соцсетях | YappiX",
    metaDescription:
      "SMM продвижение: стратегия, контент-план, таргетированная реклама. VK, Telegram, TikTok, YouTube. Рост подписчиков и продаж.",
    keywords: ["SMM продвижение", "ведение соцсетей", "таргетированная реклама", "контент для соцсетей"],
    heroDescription:
      "Строим присутствие бренда в соцсетях. Стратегия, контент, таргет, работа с инфлюенсерами. Превращаем подписчиков в клиентов.",
    features: [
      "Разработка SMM-стратегии",
      "Создание контента (тексты, визуал, видео)",
      "Таргетированная реклама",
      "Работа с блогерами и инфлюенсерами",
      "Комьюнити-менеджмент",
      "Аналитика и отчётность",
    ],
    process: [
      { step: "01", title: "Аудит", description: "Анализируем текущее присутствие, конкурентов, ЦА." },
      { step: "02", title: "Стратегия", description: "Формируем tone of voice, контент-план, KPI." },
      { step: "03", title: "Реализация", description: "Создаём контент, запускаем рекламу, ведём сообщества." },
      { step: "04", title: "Оптимизация", description: "Анализируем метрики, A/B тестируем, масштабируем успешное." },
    ],
    technologies: ["VK Ads", "Telegram Ads", "TikTok Ads", "YouTube", "Figma", "CapCut", "Notion"],
    pricing: [
      { name: "Старт", price: "от 60 000 ₽/мес", features: ["1 соцсеть", "12 публикаций", "Базовый таргет"] },
      { name: "Бизнес", price: "от 120 000 ₽/мес", features: ["2-3 соцсети", "20 публикаций", "Таргет + блогеры"] },
      {
        name: "Enterprise",
        price: "от 250 000 ₽/мес",
        features: ["Все площадки", "Видеоконтент", "Выделенная команда"],
      },
    ],
    faq: [
      {
        question: "Какие соцсети сейчас актуальны в России?",
        answer: "VK, Telegram, TikTok, YouTube, Дзен. Выбор зависит от вашей аудитории и типа контента.",
      },
      {
        question: "Создаёте ли видеоконтент?",
        answer: "Да, снимаем и монтируем видео для Reels, TikTok, YouTube Shorts. Есть своя студия.",
      },
      {
        question: "Как измеряете эффективность?",
        answer: "Охваты, вовлечённость, переходы, лиды, продажи. Ежемесячные отчёты с визуализацией.",
      },
    ],
  },
}

type Params = Promise<{ slug: string }>

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params
  const service = servicesData[slug]
  if (!service) return { title: "Услуга не найдена" }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: {
      canonical: `https://yappix.ru/uslugi/${slug}`,
    },
  }
}

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({ slug }))
}

export default async function ServicePage({ params }: { params: Params }) {
  const { slug } = await params
  const service = servicesData[slug]
  if (!service) notFound()

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="container mx-auto px-4">
            <Link
              href="/uslugi"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Все услуги
            </Link>
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                {service.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-8 text-pretty">{service.heroDescription}</p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link href="/kontakty">Обсудить проект</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/kejsy">Смотреть кейсы</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Что мы делаем</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border">
                  <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Как мы работаем</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.process.map((step) => (
                <div key={step.step} className="relative">
                  <span className="text-6xl font-bold text-primary/20">{step.step}</span>
                  <h3 className="text-xl font-semibold text-foreground mt-2 mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Технологии</h2>
            <div className="flex flex-wrap gap-3">
              {service.technologies.map((tech) => (
                <span key={tech} className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Стоимость</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {service.pricing.map((plan) => (
                <div key={plan.name} className="p-6 bg-background border border-border rounded-xl flex flex-col">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-2xl font-bold text-primary mb-6">{plan.price}</p>
                  <ul className="space-y-2 mb-6 flex-1">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full">
                    <Link href="/kontakty">Заказать</Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Частые вопросы</h2>
            <div className="max-w-3xl space-y-6">
              {service.faq.map((item, idx) => (
                <div key={idx} className="p-6 bg-card border border-border rounded-xl">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.question}</h3>
                  <p className="text-muted-foreground">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-primary/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Готовы начать проект?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Оставьте заявку — обсудим задачу, предложим решение и назовём точные сроки и стоимость.
            </p>
            <Button size="lg" asChild>
              <Link href="/kontakty">Обсудить проект</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
