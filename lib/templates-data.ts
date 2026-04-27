/** Карточки раздела /shablony — источник для CMS и страницы шаблонов. */

export interface TemplateCard {
  slug: string
  title: string
  category: string
  description: string
  image: string
  stats: { label: string; value: string }[]
  tags: string[]
  features: string[]
  productUrl: string
  productLabel: string
  demoUrl?: string
  figmaUrl?: string
}

export const templatesRu: TemplateCard[] = [
  {
    slug: "coinpulse-crypto",
    title: "CoinPulse — Крипто-дашборд из Figma в Next.js за 30 минут",
    category: "Next.js Template",
    description:
      "Production-ready шаблон криптовалютного дашборда. Конвертация Figma → Next.js за 30 минут благодаря дизайн-токенам и правильной разметке. CoinGecko API, Recharts, Radix UI.",
    image: "/images/coinpulse/cover.png",
    stats: [
      { label: "Figma → Code", value: "30 мин" },
      { label: "Компоненты", value: "40+" },
      { label: "API", value: "CoinGecko" },
    ],
    tags: ["Next.js", "Tailwind", "Figma Tokens", "CoinGecko", "Recharts", "Crypto"],
    features: [
      "Figma-макет с дизайн-токенами и auto layout",
      "Конвертация в Next.js + Tailwind за 30 минут",
      "CoinGecko API для живых данных криптовалют",
      "Recharts графики, Radix UI компоненты",
      "Открытый исходный код на GitHub",
    ],
    productUrl: "https://github.com/usmanoffcom/coinpulse",
    productLabel: "Скачать код на GitHub",
    demoUrl: "https://coin.yappix.ru",
    figmaUrl: "/cryptopulse_assets/CoinPules - CryptoMarket.fig",
  },
  {
    slug: "bankist-ui-kit",
    title: "Bankist — UI Kit для банковских приложений",
    category: "UI Kit",
    description: "Бесплатный UI Kit для банковских мобильных приложений. 20+ экранов, полный набор компонентов с состояниями.",
    image: "/images/usmanoff-cases/1765794633140-vviamyylrzvr3japyiye.mp4",
    stats: [
      { label: "Лайков", value: "2.5K+" },
      { label: "Скачиваний", value: "8K+" },
      { label: "Экранов", value: "20+" },
    ],
    tags: ["Figma", "UI Kit", "Mobile", "Finance"],
    features: [
      "20+ готовых экранов",
      "Все компоненты с состояниями",
      "Адаптивный дизайн",
      "Бесплатно для коммерческого использования",
    ],
    productUrl: "https://www.figma.com/community/file/1351548503843486460/bankist-mobile-app-ui-kit",
    productLabel: "Скачать в Figma",
  },
  {
    slug: "projectorium-cicd",
    title: "Projectorium — Landing для CI/CD платформы",
    category: "Framer Template",
    description: "Современный лендинг для DevOps-продукта с 3D визуализацией в Spline. Полностью анимированный в Framer.",
    image: "/m1fjlIfFhD1Rbz3LZBm0KPjCnIc.png",
    stats: [
      { label: "3D Элементы", value: "Spline" },
      { label: "Анимации", value: "15+" },
      { label: "Формат", value: "Framer" },
    ],
    tags: ["Framer", "3D", "Spline", "DevOps"],
    features: [
      "3D визуализация в Spline",
      "Полностью анимированный",
      "Адаптивная версия",
      "Готов к деплою",
    ],
    productUrl: "https://yappix.lemonsqueezy.com/checkout",
    productLabel: "Скачать шаблон",
  },
  {
    slug: "minimal-portfolio-template",
    title: "Minimal Portfolio — Шаблон для разработчиков",
    category: "Multi-Format",
    description:
      "Минималистичное портфолио в трёх форматах: Figma для дизайна, Framer для no-code и Next.js для full control.",
    image: "/images/usmanoff-cases/1765793571452-5LXgMXEyVXeZH3OcVnyj6ZWrGY.png",
    stats: [
      { label: "Скачиваний", value: "1K+" },
      { label: "Форматы", value: "3 версии" },
      { label: "Рейтинг", value: "4.9/5" },
    ],
    tags: ["Next.js", "Framer", "Figma", "Portfolio"],
    features: [
      "3 формата: Figma, Framer, Next.js",
      "Чистый, переиспользуемый код",
      "SEO-оптимизированный",
      "Open source на GitHub",
    ],
    productUrl: "https://yappix.lemonsqueezy.com/checkout",
    productLabel: "Скачать шаблон",
  },
  {
    slug: "yandex-go-scooters",
    title: "Yandex Go — Дизайн для самокатов",
    category: "Figma Concept",
    description:
      "Концепт дизайна приложения аренды самокатов Yandex Go для Figma Community. Флоу поиска, QR-сканирование, навигация, экран поездки.",
    image: "/images/usmanoff-cases/1765794832056-CEcpn8RuVyfTk0ujNHo9IeBgI6M.png",
    stats: [
      { label: "Просмотров", value: "15K+" },
      { label: "Дубликаций", value: "3K+" },
      { label: "Флоу", value: "5 экранов" },
    ],
    tags: ["Figma", "Mobile", "Transport", "UX"],
    features: [
      "5 ключевых экранов",
      "QR-сканирование самоката",
      "Экран активной поездки",
      "Бренд-стиль Яндекса",
    ],
    productUrl: "https://www.figma.com/community/file/1353445766809808189/yandex-go-scooters",
    productLabel: "Скачать в Figma",
  },
]
