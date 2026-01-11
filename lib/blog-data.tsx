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
  { name: "Новости", slug: "novosti" },
  { name: "Разработка", slug: "razrabotka" },
  { name: "AI и ML", slug: "ai-ml" },
  { name: "DevOps", slug: "devops" },
  { name: "SEO", slug: "seo" },
  { name: "Бизнес", slug: "biznes" },
]

export const blogPosts: BlogPost[] = [
  {
    slug: "yappix-cms-zainteresoval-kremnievuyu-dolinu",
    title: "В Кремниевой долине заинтересовались проектом YappiX из Челнов",
    metaTitle: "YappiX CMS прошёл экспертизу Runa Capital | Новости YappiX",
    metaDescription:
      "Конструктор мобильных приложений YappiX CMS прошёл первую экспертную комиссию венчурного фонда Runa Capital из Кремниевой долины. Основатель приглашён в Silicon Valley.",
    keywords: ["YappiX CMS", "Runa Capital", "венчурные инвестиции", "Кремниевая долина", "стартап", "Набережные Челны"],
    excerpt:
      "Проектом YappiX CMS, созданным программистами из Набережных Челнов, заинтересовались инвесторы в Кремниевой долине. Основатель приглашён в штаб-квартиру Runa Capital для обсуждения сотрудничества.",
    content: `
      <h2>Интерес со стороны Кремниевой долины</h2>
      <p>Проектом YappiX CMS, созданным программистами из Набережных Челнов, заинтересовались инвесторы в Кремниевой долине. Команда предложила разработку, благодаря которой можно конструировать нативные мобильные приложения в связке с веб-сайтом и поддержкой AR/VR. Для создания конечного продукта при этом не потребуется знание языков программирования.</p>
      
      <h2>Экспертиза Runa Capital</h2>
      <p>Проект прошёл первую экспертную комиссию международного венчурного фонда <strong>Runa Capital</strong>. По словам представителей фонда, у продукта есть большие шансы выйти на мировой рынок. Детали возможного сотрудничества обсудят при личной встрече в штаб-квартире фонда в Кремниевой долине.</p>
      
      <h2>Технологический прорыв</h2>
      <p>YappiX CMS представляет собой уникальную систему компиляции, позволяющую генерировать настоящий нативный код для iOS и Android из визуального конструктора. Это был настоящий технологический прорыв в мобильных технологиях того времени, за что проект получил гранты на R&D от Фонда содействия инновациям.</p>
      
      <h2>Резидент бизнес-инкубатора и Сколково</h2>
      <p>YappiX является резидентом Челнинского бизнес-инкубатора и инновационного центра «Сколково». Статус резидента Сколково подтверждает высокий технологический уровень разработки и открывает доступ к налоговым льготам, грантам и экспертной поддержке.</p>
      
      <h2>Источники</h2>
      <ul>
        <li><a href="https://entermedia.io/news/v-kremnievoj-doline-zainteresovalis-proektom-iz-chelnov/" target="_blank">Enter Media: В Кремниевой долине заинтересовались проектом из Челнов</a></li>
        <li><a href="https://chelny-izvest.ru/news/business/v-kremnievoy-doline-zainteresovalis-proektom-rezidenta-chelninskogo-biznes-inkubatora" target="_blank">Челнинские известия: В Кремниевой долине заинтересовались проектом резидента бизнес-инкубатора</a></li>
        <li><a href="https://tatcenter.ru/news/proektom-programmistov-iz-tatarstana-zainteresovalis-v-kremnievoj-doline/" target="_blank">TatCenter: Проектом программистов из Татарстана заинтересовались в Кремниевой долине</a></li>
      </ul>
    `,
    image: "/images/1765791715753-akppqeDKMhBDLRyBcnGi33oLFx8_width_2880_height_1800.avif",
    category: "Новости",
    tags: ["YappiX CMS", "Runa Capital", "Инвестиции", "Сколково", "Стартап"],
    author: "YappiX Team",
    authorRole: "Пресс-служба",
    publishedAt: "2025-01-11",
    readingTime: "5 мин",
  },
  {
    slug: "yappix-poluchil-podderzhku-microsoft-for-startups",
    title: "YappiX теперь участник Microsoft for Startups Founders Hub",
    metaTitle: "YappiX — участник Microsoft for Startups Founders Hub | Новости",
    metaDescription:
      "YappiX is now a part of Microsoft for Startups Founders Hub. Проект получил доступ к облачным ресурсам Azure, технической поддержке и глобальной сети партнёров Microsoft.",
    keywords: ["Microsoft for Startups", "Founders Hub", "YappiX", "Azure", "облачные технологии", "стартап"],
    excerpt:
      "YappiX is now a part of Microsoft for Startups Founders Hub! Мы получили доступ к облачным ресурсам Azure до $150,000, технической поддержке от инженеров Microsoft и глобальной партнёрской сети.",
    content: `
      <h2>YappiX is now a part of Microsoft for Startups Founders Hub</h2>
      <p>Мы рады сообщить, что YappiX успешно прошёл отбор и стал участником программы <strong>Microsoft for Startups Founders Hub</strong> — глобальной инициативы Microsoft по поддержке перспективных технологических стартапов со всего мира.</p>
      
      <h2>Что даёт участие в Founders Hub</h2>
      <ul>
        <li><strong>Облачные кредиты Azure до $150,000</strong> — бесплатный доступ ко всей инфраструктуре Microsoft Azure: виртуальные машины, базы данных, AI-сервисы, CDN и многое другое</li>
        <li><strong>GitHub Enterprise</strong> — полный доступ к GitHub Enterprise для команды</li>
        <li><strong>Техническая поддержка</strong> — прямой доступ к инженерам Microsoft для консультаций по архитектуре и оптимизации</li>
        <li><strong>OpenAI credits</strong> — кредиты на использование Azure OpenAI Service для AI-разработки</li>
        <li><strong>Менторство и нетворкинг</strong> — доступ к экспертам Microsoft и глобальному сообществу стартапов</li>
        <li><strong>Co-sell opportunities</strong> — возможность совместных продаж через партнёрскую сеть Microsoft</li>
      </ul>
      
      <h2>Почему это важно для YappiX</h2>
      <p>Программа Microsoft for Startups Founders Hub — это не просто финансовая поддержка. Это признание технологии YappiX CMS на глобальном уровне и подтверждение её потенциала для масштабирования на мировом рынке.</p>
      <p>Благодаря ресурсам Azure мы сможем:</p>
      <ul>
        <li>Масштабировать инфраструктуру для обслуживания растущего числа пользователей</li>
        <li>Использовать передовые AI-сервисы для улучшения платформы</li>
        <li>Обеспечить глобальную доступность и низкую латентность для пользователей из любой точки мира</li>
      </ul>
      
      <h2>О программе Microsoft for Startups</h2>
      <p>Microsoft for Startups Founders Hub — это бесплатная программа для стартапов на любой стадии развития. Microsoft отбирает проекты с инновационным потенциалом и предоставляет им ресурсы для ускоренного роста. В программе участвуют тысячи стартапов из более чем 140 стран.</p>
    `,
    image: "/images/portal.startups.microsoft.png",
    category: "Новости",
    tags: ["Microsoft", "Azure", "Founders Hub", "Стартапы", "YappiX CMS"],
    author: "YappiX Team",
    authorRole: "Пресс-служба",
    publishedAt: "2025-01-09",
    readingTime: "5 мин",
  },
  {
    slug: "kak-chelninskij-dizajner-privlek-amerikanskih-investorov",
    title: "Как челнинский дизайнер привлёк американских инвесторов: опыт YappiX",
    metaTitle: "История YappiX: от Челнов до Кремниевой долины | Сколково",
    metaDescription:
      "История Рената Усманова и YappiX: от гранта ФСИ до встречи с Runa Capital в Silicon Valley. Как стартап из Набережных Челнов вышел на международный уровень.",
    keywords: ["YappiX", "Сколково", "Runa Capital", "стартап история", "венчурные инвестиции", "Набережные Челны"],
    excerpt:
      "История основателя YappiX Рената Усманова: от первых грантов Фонда содействия инновациям до приглашения в Кремниевую долину от Runa Capital и статуса резидента Сколково.",
    content: `
      <h2>От дизайнера до технологического предпринимателя</h2>
      <p>История YappiX началась в Набережных Челнах, когда дизайнер Ренат Усманов решил создать инструмент, который позволит людям без навыков программирования создавать настоящие мобильные приложения. Не веб-обёртки, а нативные приложения для iOS и Android.</p>
      
      <h2>Первые гранты и признание</h2>
      <p>Проект получил поддержку Фонда содействия инновациям (ФСИ), что позволило провести R&D и создать уникальную систему компиляции. Это был настоящий технологический прорыв — визуальный конструктор, который генерирует реальный нативный код.</p>
      
      <h2>Внимание Кремниевой долины</h2>
      <p>YappiX CMS прошёл первую экспертную комиссию венчурного фонда <strong>Runa Capital</strong> — одного из крупнейших фондов, инвестирующих в технологические стартапы. Эксперты отметили большой потенциал продукта для выхода на мировой рынок.</p>
      <p>Ренат Усманов был приглашён в штаб-квартиру Runa Capital в Кремниевой долине для личной встречи и обсуждения возможного сотрудничества.</p>
      
      <h2>Резидент Сколково</h2>
      <p>YappiX получил статус резидента инновационного центра «Сколково», что подтвердило высокий технологический уровень разработки. Статус резидента открыл доступ к:</p>
      <ul>
        <li>Налоговым льготам и грантовой поддержке</li>
        <li>Экспертизе и менторству от ведущих специалистов</li>
        <li>Инфраструктуре для развития и масштабирования</li>
        <li>Нетворкингу с инвесторами и партнёрами</li>
      </ul>
      
      <h2>Ключевые уроки</h2>
      <ul>
        <li><strong>Создавайте реальный продукт</strong> — инвесторы ищут работающие решения, а не презентации</li>
        <li><strong>Используйте гранты</strong> — ФСИ и другие фонды помогают на ранних стадиях</li>
        <li><strong>Думайте глобально</strong> — с первого дня проектируйте продукт для мирового рынка</li>
        <li><strong>Получите экспертизу</strong> — резидентство в Сколково открывает двери</li>
      </ul>
      
      <h2>Источники</h2>
      <ul>
        <li><a href="https://sk.ru/news/kak-chelninskij-dizajner-privlek-amerikanskih-investorov-opyt-yappix/" target="_blank">Сколково: Как челнинский дизайнер привлёк американских инвесторов</a></li>
        <li><a href="https://tatcenter.ru/rubrics/narrative/kak-chelninskij-dizajner-privlek-amerikanskih-investorov/" target="_blank">TatCenter: История успеха YappiX</a></li>
      </ul>
    `,
    image: "/images/1 phase YappiX CMS v1.0 .avif",
    category: "Бизнес",
    tags: ["YappiX", "Сколково", "Runa Capital", "Стартапы", "Инвестиции"],
    author: "YappiX Team",
    authorRole: "Основатель",
    publishedAt: "2025-01-08",
    readingTime: "7 мин",
  },
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
      <p>Традиционный подход к разработке MVP занимает 2-3 месяца. Мы сократили этот срок до 7 дней благодаря AI-инструментам и отработанным процессам. Секрет в правильном сочетании генеративного AI для кода, готовых компонентов и cloud-first архитектуры.</p>
      
      <h2>Наш стек для быстрой разработки</h2>
      <ul>
        <li><strong>v0.dev</strong> — генерация UI-компонентов на основе описания. За час можно получить полный набор экранов.</li>
        <li><strong>Cursor</strong> — AI-ассистент для кода, который понимает контекст всего проекта и пишет код быстрее человека.</li>
        <li><strong>Vercel</strong> — деплой за секунды с автоматическим CI/CD и edge-функциями.</li>
        <li><strong>Supabase</strong> — база данных PostgreSQL, авторизация и real-time подписки из коробки.</li>
      </ul>
      
      <h2>День за днём: процесс создания MVP</h2>
      <p><strong>День 1:</strong> Анализ требований, создание user stories, проектирование базы данных.</p>
      <p><strong>День 2-3:</strong> Генерация UI в v0.dev, настройка проекта, базовая авторизация.</p>
      <p><strong>День 4-5:</strong> Бизнес-логика, интеграции, API-эндпоинты.</p>
      <p><strong>День 6:</strong> Тестирование, исправление багов, оптимизация.</p>
      <p><strong>День 7:</strong> Деплой, настройка аналитики, передача клиенту.</p>
      
      <h2>Кейс: Маркетплейс услуг</h2>
      <p>Клиент пришёл с идеей маркетплейса для фрилансеров. За 7 дней мы создали: регистрацию и профили, каталог услуг с поиском, чат между заказчиком и исполнителем, базовую систему оплаты через Stripe.</p>
      
      <h2>Результат</h2>
      <p>Клиент получил рабочий MVP, собрал первых 50 пользователей и привлёк pre-seed инвестиции на $200K. Общие затраты на разработку — в 5 раз меньше традиционного подхода.</p>
    `,
    image: "/images/2 phase YappiX CMS v1.5 .avif",
    category: "Разработка",
    tags: ["MVP", "AI", "Стартапы", "v0.dev", "Cursor"],
    author: "YappiX Team",
    authorRole: "Команда разработки",
    publishedAt: "2025-01-06",
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
      "Детальное руководство по SEO для Next.js в 2025 году. Разбираем метатеги, structured data, оптимизацию производительности и продвижение в Яндекс и Google.",
    content: `
      <h2>Почему Next.js идеален для SEO</h2>
      <p>Next.js из коробки поддерживает SSR (Server-Side Rendering) и SSG (Static Site Generation) — два ключевых подхода для SEO-оптимизации. В отличие от чистого React, контент рендерится на сервере и сразу доступен поисковым роботам без выполнения JavaScript.</p>
      <p>По нашему опыту, сайты на Next.js индексируются в 2-3 раза быстрее, чем SPA на чистом React. Это критично для бизнеса: чем быстрее страницы в индексе — тем быстрее органический трафик.</p>
      
      <h2>Обязательные метатеги</h2>
      <p>Каждая страница должна иметь уникальные title и description. В Next.js 14+ используйте Metadata API:</p>
      <pre><code>export const metadata = {
  title: 'Заголовок страницы | Бренд',
  description: 'Описание до 160 символов с ключевыми словами',
  keywords: ['ключевое слово 1', 'ключевое слово 2'],
  openGraph: {
    title: 'Заголовок для соцсетей',
    description: 'Описание для шеринга',
    images: ['/og-image.jpg'],
  },
}</code></pre>
      
      <h2>JSON-LD разметка (Structured Data)</h2>
      <p>Structured data помогает поисковикам понять контент и показывать rich snippets. Добавляйте соответствующие схемы в зависимости от типа страницы:</p>
      <ul>
        <li><strong>Organization</strong> — для главной страницы компании</li>
        <li><strong>Article / BlogPosting</strong> — для статей блога</li>
        <li><strong>Product</strong> — для страниц товаров</li>
        <li><strong>LocalBusiness</strong> — для локального бизнеса</li>
        <li><strong>FAQ</strong> — для страниц с вопросами и ответами</li>
      </ul>
      
      <h2>Core Web Vitals: LCP, FID, CLS</h2>
      <p>Google учитывает метрики производительности при ранжировании:</p>
      <ul>
        <li><strong>LCP (Largest Contentful Paint)</strong> — должен быть менее 2.5 секунд</li>
        <li><strong>FID (First Input Delay)</strong> — менее 100 миллисекунд</li>
        <li><strong>CLS (Cumulative Layout Shift)</strong> — менее 0.1</li>
      </ul>
      <p>Next.js 14+ с App Router показывает отличные результаты из коробки благодаря Server Components и автоматической оптимизации изображений.</p>
      
      <h2>Оптимизация для Яндекса</h2>
      <p>Яндекс имеет свои особенности индексации. Обязательно добавьте сайт в Яндекс.Вебмастер, создайте турбо-страницы для мобильных пользователей и настройте региональность, если работаете в конкретных городах.</p>
    `,
    image: "/images/1765791666409-Qwl2eN6NaWQvwvcVj32lG6Vw_width_2880_height_1800.avif",
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
      "Какие технологии выбрать для SaaS-продукта в 2025: фронтенд, бэкенд, база данных, инфраструктура. Сравнение и рекомендации от практиков.",
    keywords: ["SaaS стек", "технологии для SaaS", "Next.js SaaS", "PostgreSQL", "Kubernetes"],
    excerpt:
      "Разбираем оптимальный стек для SaaS в 2025: от фронтенда до инфраструктуры. Основано на опыте 250+ проектов YappiX.",
    content: `
      <h2>Фронтенд: Next.js — безоговорочный лидер</h2>
      <p>Для большинства SaaS рекомендуем Next.js 14+ с App Router. React Server Components (RSC) радикально снижают нагрузку на клиент, улучшают SEO и производительность. Экосистема богатейшая: Tailwind CSS для стилей, shadcn/ui для компонентов, Framer Motion для анимаций.</p>
      <p>Альтернативы: Remix — если нужен полный контроль над загрузкой данных; Astro — для контентных сайтов с минимумом интерактивности.</p>
      
      <h2>Бэкенд: выбор зависит от задачи</h2>
      <ul>
        <li><strong>Node.js (NestJS, Express)</strong> — для быстрого старта и единого языка с фронтендом. Идеально для 80% SaaS.</li>
        <li><strong>Python (FastAPI, Django)</strong> — для ML-интенсивных проектов и сложной аналитики. Лучшая экосистема для AI.</li>
        <li><strong>Go</strong> — для высоконагруженных систем с миллионами запросов в секунду. Отличная производительность, но дольше разработка.</li>
      </ul>
      
      <h2>База данных: PostgreSQL как основа</h2>
      <p>PostgreSQL — универсальный выбор для 95% проектов. Поддерживает JSON, полнотекстовый поиск, геоданные. Для специализированных задач добавляйте:</p>
      <ul>
        <li><strong>Redis</strong> — кэширование, очереди, real-time счётчики</li>
        <li><strong>Elasticsearch / Meilisearch</strong> — полнотекстовый поиск с фасетами</li>
        <li><strong>ClickHouse</strong> — аналитика на больших данных</li>
        <li><strong>MongoDB</strong> — только если действительно нужны документы без схемы</li>
      </ul>
      
      <h2>Инфраструктура: начните просто</h2>
      <p>Главное правило — не оверинжинирьте на старте. Эволюция инфраструктуры:</p>
      <ol>
        <li><strong>MVP</strong>: Vercel + Supabase или Railway. Деплой за минуты, масштабирование автоматическое.</li>
        <li><strong>Рост</strong>: AWS/GCP с managed-сервисами. RDS для базы, ECS для контейнеров.</li>
        <li><strong>Масштаб</strong>: Kubernetes для полного контроля. Только если команда готова поддерживать.</li>
      </ol>
      
      <h2>Мониторинг и observability</h2>
      <p>С первого дня внедряйте: Sentry для ошибок, Posthog для аналитики, Grafana + Prometheus для метрик. Это сэкономит сотни часов при диагностике проблем.</p>
    `,
    image: "/images/1765791581257-yJhYOoAv5rNuaqBK66Kdsw73Xg.avif",
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
      "Как использовать AI-агентов для автоматизации бизнес-процессов. Кейсы, инструменты, ROI. Практический опыт внедрения от YappiX.",
    keywords: ["AI агенты", "автоматизация бизнеса", "LLM", "GPT для бизнеса", "RAG"],
    excerpt:
      "Как AI-агенты меняют бизнес-процессы: от поддержки клиентов до анализа данных. Реальные кейсы YappiX и метрики эффективности.",
    content: `
      <h2>Что такое AI-агенты и чем они отличаются от чат-ботов</h2>
      <p>AI-агент — это автономная система на базе LLM (Large Language Model), которая не просто отвечает на вопросы, но и выполняет задачи: ищет информацию, интегрируется с внешними системами, принимает решения и действует от имени пользователя.</p>
      <p>Ключевые отличия от классических чат-ботов:</p>
      <ul>
        <li><strong>Понимание контекста</strong> — агент помнит всю историю диалога и учитывает её</li>
        <li><strong>Работа с инструментами</strong> — может вызывать API, искать в базах данных, создавать документы</li>
        <li><strong>Автономность</strong> — способен разбивать сложные задачи на подзадачи и выполнять их последовательно</li>
      </ul>
      
      <h2>Где применять AI-агентов: проверенные сценарии</h2>
      <ul>
        <li><strong>Поддержка клиентов</strong> — ответы на 80% типовых вопросов, эскалация сложных кейсов</li>
        <li><strong>Продажи</strong> — квалификация лидов, персонализированные follow-up, ответы на вопросы о продукте 24/7</li>
        <li><strong>HR</strong> — скрининг резюме, первичные интервью, ответы кандидатам, онбординг</li>
        <li><strong>Документооборот</strong> — анализ контрактов, генерация отчётов, извлечение данных</li>
        <li><strong>Аналитика</strong> — SQL-запросы на естественном языке, визуализация данных</li>
      </ul>
      
      <h2>Технологический стек для AI-агентов</h2>
      <p>Основные компоненты системы:</p>
      <ul>
        <li><strong>LLM</strong> — GPT-4, Claude 3, или open-source модели (Llama, Mistral)</li>
        <li><strong>RAG (Retrieval-Augmented Generation)</strong> — для работы с корпоративными данными</li>
        <li><strong>Vector Database</strong> — Pinecone, Weaviate, или pgvector для PostgreSQL</li>
        <li><strong>Orchestration</strong> — LangChain, LlamaIndex, или собственная логика</li>
      </ul>
      
      <h2>ROI внедрения: реальные цифры</h2>
      <p>На основе наших проектов (MyUnion Pro и другие):</p>
      <ul>
        <li>Средний ROI от AI-агентов в поддержке — <strong>300% за первый год</strong></li>
        <li>Снижение нагрузки на операторов — <strong>60-70%</strong></li>
        <li>Время ответа клиенту — <strong>с часов до секунд</strong></li>
        <li>Доступность — <strong>24/7/365</strong> без дополнительных затрат</li>
      </ul>
      
      <h2>С чего начать</h2>
      <p>Начните с пилота на ограниченном scope: один канал коммуникации, одна категория вопросов. Соберите метрики, докажите ROI, масштабируйте. Типичный пилот занимает 4-6 недель.</p>
    `,
    image: "/images/1765791715753-akppqeDKMhBDLRyBcnGi33oLFx8_width_2880_height_1800.avif",
    category: "AI и ML",
    tags: ["AI", "Автоматизация", "LLM", "Чат-боты", "ROI"],
    author: "YappiX Team",
    authorRole: "AI-инженеры",
    publishedAt: "2024-12-15",
    readingTime: "9 мин",
  },
  {
    slug: "bezopasnost-fintech-prilozhenij-chek-list",
    title: "Безопасность FinTech-приложений: чек-лист 2025",
    metaTitle: "Безопасность FinTech: полный чек-лист 2025 | YappiX",
    metaDescription:
      "Чек-лист безопасности для FinTech-приложений: PCI DSS, шифрование, аутентификация, мониторинг. Основано на опыте Card2Card и требованиях регуляторов.",
    keywords: ["FinTech безопасность", "PCI DSS", "безопасность платежей", "шифрование данных", "152-ФЗ"],
    excerpt:
      "Полный чек-лист безопасности для финтех-продуктов в 2025 году. От базовых требований до соответствия PCI DSS и 152-ФЗ. Основано на опыте проекта Card2Card.",
    content: `
      <h2>Базовые требования безопасности</h2>
      <p>Эти пункты обязательны для любого финтех-приложения, независимо от масштаба:</p>
      <ul>
        <li><strong>HTTPS везде</strong> — TLS 1.3, HSTS включен, HSTS preload для критичных доменов</li>
        <li><strong>Хэширование паролей</strong> — bcrypt с cost factor ≥ 12 или Argon2id</li>
        <li><strong>2FA обязательна</strong> — для входа, подтверждения платежей, изменения настроек</li>
        <li><strong>Rate limiting</strong> — на всех эндпоинтах, особенно на авторизации</li>
        <li><strong>Input validation</strong> — на сервере, никогда не доверяйте клиенту</li>
        <li><strong>SQL injection protection</strong> — только параметризованные запросы</li>
      </ul>
      
      <h2>Требования PCI DSS</h2>
      <p>Если обрабатываете карточные данные, соответствие PCI DSS обязательно. Ключевые требования:</p>
      <ul>
        <li><strong>Сегментация сети</strong> — CDE (Cardholder Data Environment) изолирована от остальной инфраструктуры</li>
        <li><strong>Шифрование данных карт</strong> — AES-256 для хранения, TLS для передачи</li>
        <li><strong>Токенизация</strong> — не храните PAN, используйте токены от платёжного шлюза</li>
        <li><strong>Регулярные аудиты</strong> — ежеквартальные сканирования ASV, ежегодный аудит QSA</li>
        <li><strong>Логирование</strong> — все операции с картами должны логироваться с retention 1 год</li>
      </ul>
      
      <h2>152-ФЗ: персональные данные</h2>
      <p>Для работы в России обязательно соблюдение 152-ФЗ:</p>
      <ul>
        <li><strong>Локализация данных</strong> — ПД граждан РФ хранятся на территории России</li>
        <li><strong>Согласие на обработку</strong> — явное, информированное, документируемое</li>
        <li><strong>Политика конфиденциальности</strong> — публичная, актуальная, понятная</li>
        <li><strong>Уведомление Роскомнадзора</strong> — при обработке ПД</li>
        <li><strong>Право на удаление</strong> — процедура удаления данных по запросу</li>
      </ul>
      
      <h2>Мониторинг и реагирование на инциденты</h2>
      <ul>
        <li><strong>SIEM-система</strong> — для обнаружения аномалий в реальном времени</li>
        <li><strong>Логирование</strong> — все операции, все ошибки, все входы</li>
        <li><strong>Алерты</strong> — на подозрительную активность: множественные неудачные входы, необычные суммы, новые устройства</li>
        <li><strong>Incident Response Plan</strong> — документированная процедура реагирования на инциденты</li>
      </ul>
      
      <h2>Наш опыт: проект Card2Card</h2>
      <p>При разработке международного платёжного приложения Card2Card мы реализовали все вышеперечисленные требования. Интеграция с VISA, Mastercard и USDT-шлюзами прошла аудит безопасности и соответствует стандартам всех четырёх регионов присутствия.</p>
    `,
    image: "/images/05f1e332931093.589da5ec81ead.gif",
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
      "Сравнение Kubernetes и Serverless для разных типов проектов в 2025. Когда использовать каждый подход, плюсы, минусы и реальные кейсы.",
    keywords: ["Kubernetes", "Serverless", "AWS Lambda", "DevOps", "облачная инфраструктура"],
    excerpt: "Детальное сравнение Kubernetes и Serverless в 2025 году. Помогаем выбрать оптимальный подход для вашего проекта на основе реального опыта.",
    content: `
      <h2>Kubernetes: полный контроль и масштаб</h2>
      <p>Kubernetes — это оркестратор контейнеров, который даёт максимальный контроль над инфраструктурой. Выбирайте K8s, когда:</p>
      <ul>
        <li><strong>Предсказуемая нагрузка</strong> — знаете, сколько ресурсов нужно</li>
        <li><strong>Stateful-приложения</strong> — базы данных, очереди, кэши внутри кластера</li>
        <li><strong>Сложные зависимости</strong> — микросервисы с inter-service communication</li>
        <li><strong>Требуется полный контроль</strong> — кастомные сети, storage, политики</li>
        <li><strong>Есть DevOps-команда</strong> — K8s требует экспертизы для поддержки</li>
      </ul>
      <p><strong>Минусы:</strong> высокий порог входа, стоимость поддержки, overhead на небольших проектах.</p>
      
      <h2>Serverless: скорость и экономия</h2>
      <p>Serverless (AWS Lambda, Google Cloud Functions, Vercel Functions) — это модель, где вы платите только за выполнение кода. Идеально для:</p>
      <ul>
        <li><strong>Переменная нагрузка</strong> — от 0 до 10000 запросов в секунду</li>
        <li><strong>Event-driven архитектура</strong> — обработка событий, webhooks, триггеры</li>
        <li><strong>Быстрый старт</strong> — деплой за секунды, без настройки серверов</li>
        <li><strong>Pay-per-use</strong> — платите только за реальные вызовы</li>
        <li><strong>Нет DevOps-команды</strong> — управление инфраструктурой на провайдере</li>
      </ul>
      <p><strong>Минусы:</strong> холодные старты, ограничения по времени выполнения (15 мин), сложность отладки, vendor lock-in.</p>
      
      <h2>Гибридный подход: лучшее из двух миров</h2>
      <p>В 2025 году большинство проектов используют гибридную архитектуру:</p>
      <ul>
        <li><strong>Ядро на Kubernetes</strong> — основной API, базы данных, критичные сервисы</li>
        <li><strong>Периферия на Serverless</strong> — обработка изображений, email, webhooks, cron-задачи</li>
      </ul>
      <p>Такой подход позволяет получить контроль там, где он нужен, и экономию там, где нагрузка непредсказуема.</p>
      
      <h2>Наш опыт в YappiX</h2>
      <p>Для проектов до 10K MAU начинаем с serverless (Vercel + Supabase). При росте мигрируем критичные сервисы на Kubernetes в AWS EKS. Такой путь минимизирует затраты на старте и обеспечивает масштабируемость при росте.</p>
    `,
    image: "/images/yappix_content.png",
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
