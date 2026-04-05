export type PillarLocale = "ru" | "en"
export type PillarSlug = "roi-automation" | "ai-contour" | "rag-search" | "ai-first-razrabotka" | "mvp-zapusk" | "vnedrenie-ai-rag" | "cto-service" | "stoimost-sroki" | "kejsy-metodologiya"

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
    "ai-first-razrabotka": {
      slug: "ai-first-razrabotka",
      title: "AI-first разработка — как мы строим продукты быстрее | YappiX",
      description: "Что такое AI-first подход к разработке: AI на каждом этапе от прототипа до деплоя. Как это ускоряет запуск и снижает стоимость.",
      h1: "AI-first разработка: как мы строим продукты быстрее",
      intro: "AI-first — это не маркетинговый слоган. Это конкретный подход: AI-инструменты на каждом этапе — от прототипирования до код-ревью. Разработчики фокусируются на продуктовой логике, а не на рутине.",
      canonicalPath: "/ai-first-razrabotka",
      ctaLabel: "Обсудить проект с AI-first подходом",
      ctaHref: "/kontakty",
      sections: [
        { title: "Что значит AI-first", body: "AI-инструменты встроены в каждый этап: прототипирование (v0.dev), разработка (Cursor AI), тестирование, контент, SEO. Это не замена разработчиков — это усиление их возможностей." },
        { title: "Как это влияет на сроки", body: "AI-first подход сокращает рутинные задачи: генерация UI-компонентов, бойлерплейт-код, документация, тесты. Команда фокусируется на бизнес-логике и UX." },
        { title: "Качество и контроль", body: "Весь AI-сгенерированный код проходит ревью. Автотесты, CI/CD, мониторинг — стандарт. AI ускоряет, но не заменяет инженерный контроль." },
        { title: "Когда AI-first не подходит", body: "Если проект требует уникальных алгоритмов или deep domain expertise без аналогов — AI-ускорение будет минимальным. Мы честно оцениваем, где подход даёт эффект." },
      ],
      relatedCases: ["myunion-platform"],
      relatedServices: ["razrabotka-sajtov", "ai-chat-boty", "saas-paas"],
      faqs: [
        { question: "AI-first значит, что код пишет ИИ?", answer: "Нет. AI генерирует черновой код, прототипы, тесты. Инженеры проверяют, дорабатывают и контролируют качество." },
        { question: "Это дешевле обычной разработки?", answer: "Обычно да — за счёт сокращения рутины. Но стоимость зависит от сложности продуктовой логики, а не от количества строк кода." },
      ],
    },
    "mvp-zapusk": {
      slug: "mvp-zapusk",
      title: "MVP и запуск продукта — от идеи до рабочего контура | YappiX",
      description: "Как мы запускаем MVP: product logic, UX, AI-assisted delivery. Когда нужен MVP, а когда — полноценный продукт.",
      h1: "MVP и запуск продукта: от идеи до рабочего контура",
      intro: "MVP — это не «сырой продукт». Это минимальный рабочий контур, который можно показать пользователям, инвесторам или команде. Мы помогаем определить scope, спроектировать UX и быстро запустить.",
      canonicalPath: "/mvp-i-zapusk-produkta",
      ctaLabel: "Оценить MVP за 24 часа",
      ctaHref: "/kontakty",
      sections: [
        { title: "Когда нужен MVP", body: "Когда есть идея, но нет уверенности в product-market fit. Когда нужно показать инвесторам рабочий прототип. Когда команда тратит месяцы на разработку без обратной связи от пользователей." },
        { title: "Как мы определяем scope", body: "Discovery → User stories → Приоритезация → MVP-scope. Выбираем core-функции, которые проверяют главную гипотезу. Всё остальное — в backlog." },
        { title: "Процесс запуска", body: "2–8 недель от discovery до рабочего продукта. Итерации каждые 2–3 дня. AI-assisted delivery для ускорения." },
        { title: "После запуска", body: "Собираем обратную связь, анализируем метрики, планируем следующие итерации. MVP — это начало, а не конец." },
      ],
      relatedCases: ["myunion-platform", "global-olive-corporation"],
      relatedServices: ["razrabotka-sajtov", "saas-paas"],
      faqs: [
        { question: "Сколько стоит MVP?", answer: "От 200 000 ₽ за core-функциональность. Точная оценка — после discovery (2–5 дней)." },
        { question: "Можно ли потом развить MVP в полноценный продукт?", answer: "Именно для этого мы проектируем архитектуру: чтобы MVP масштабировался без переписывания." },
      ],
    },
    "vnedrenie-ai-rag": {
      slug: "vnedrenie-ai-rag",
      title: "Внедрение AI и RAG для бизнеса — когда это работает | YappiX",
      description: "Когда бизнесу реально нужен AI, а когда это дорогая игрушка. RAG, AI-ассистенты, автоматизация — подход без hype.",
      h1: "Внедрение AI и RAG: когда это реально работает",
      intro: "Мы не продаём «AI ради AI». Сначала разбираемся, где автоматизация даёт реальный эффект, считаем экономику и честно говорим об ограничениях.",
      canonicalPath: "/vnedrenie-ai-i-rag",
      ctaLabel: "Обсудить AI-проект",
      ctaHref: "/kontakty",
      sections: [
        { title: "Когда AI даёт эффект", body: "Поиск по базе знаний, автоматизация поддержки, обработка документов, AI в продажах и HR. Везде, где есть повторяющаяся рутина с большим объёмом данных." },
        { title: "Когда AI — дорогая игрушка", body: "Если процесса нет, данных мало, задача требует 100% точности или deep expertise — AI не поможет. Мы честно говорим об этом до старта." },
        { title: "Наш подход", body: "Аудит процесса → расчёт экономики → пилот → масштабирование. Без первых двух шагов проект не запускаем." },
        { title: "RAG: поиск по базе знаний", body: "RAG подключает LLM к документам компании: сотрудники получают ответы с цитатами из источников вместо ручного поиска. Экономия 40–60% времени." },
      ],
      relatedCases: ["myunion-platform"],
      relatedServices: ["ai-chat-boty"],
      faqs: [
        { question: "Что нужно подготовить до внедрения?", answer: "Структурированные данные, доступ к документам, описание процесса и метрики текущего состояния." },
        { question: "Как контролировать качество AI-ответов?", answer: "Метрики, логирование, ограничение контура данных и регулярное тестирование. Подробнее — на странице управляемого AI-контура." },
      ],
    },
    "cto-service": {
      slug: "cto-service",
      title: "CTO as a Service — техническая стратегия для стартапа | YappiX",
      description: "Техническая стратегия, архитектура, наём команды и delivery-процесс без full-time CTO. Для стартапов и компаний на ранней стадии.",
      h1: "CTO as a Service: техническая стратегия без найма full-time CTO",
      intro: "На ранней стадии full-time CTO — дорого и часто избыточно. Мы подключаемся как технический партнёр: выстраиваем архитектуру, налаживаем delivery и помогаем нанять команду.",
      canonicalPath: "/cto-as-a-service",
      ctaLabel: "Обсудить CTO-формат",
      ctaHref: "/kontakty",
      sections: [
        { title: "Когда нужен CTO as a Service", body: "Стартап на pre-seed / seed, нет технического co-founder. Компания растёт, но текущий техлид не справляется с архитектурными решениями. Нужно быстро выстроить delivery без длительного найма." },
        { title: "Что входит", body: "Техническая стратегия, выбор стека, архитектура, настройка CI/CD, код-ревью, наём и менторинг разработчиков, product delivery." },
        { title: "Формат работы", body: "10–20 часов в неделю на старте. По мере роста команды — меньше. Работаем с фаундером напрямую, без посредников." },
        { title: "Чем отличается от аутсорсинга", body: "Аутсорсинг — это «сделайте что сказали». CTO as a Service — это «помогите понять, что нужно строить, и как это сделать правильно»." },
      ],
      relatedCases: ["myunion-platform", "global-olive-corporation"],
      relatedServices: ["razrabotka-sajtov", "saas-paas"],
      faqs: [
        { question: "Сколько стоит CTO as a Service?", answer: "Зависит от объёма вовлечённости. Обычно от 200 000 ₽/мес за 10–20 часов в неделю." },
        { question: "Как долго нужен CTO as a Service?", answer: "Обычно 3–6 месяцев до формирования собственной технической команды." },
      ],
    },
    "stoimost-sroki": {
      slug: "stoimost-sroki",
      title: "Стоимость и сроки разработки — из чего складывается цена | YappiX",
      description: "Из чего складывается стоимость разработки MVP, SaaS, сайта или AI-проекта. Типовые бюджеты и сроки.",
      h1: "Стоимость и сроки разработки: из чего складывается цена",
      intro: "Мы не называем цену «от 50 000 ₽» без контекста. На этой странице — честный разбор: из чего складывается стоимость, какие факторы влияют на сроки и как мы считаем бюджет.",
      canonicalPath: "/stoimost-i-sroki-razrabotki",
      ctaLabel: "Оценить проект",
      ctaHref: "/kontakty",
      sections: [
        { title: "Из чего складывается стоимость", body: "Discovery, UX/UI, разработка, тестирование, деплой, поддержка. Каждый этап — отдельная строка в смете. AI-ускорение снижает стоимость рутинных задач, но не заменяет продуктовую работу." },
        { title: "Типовые бюджеты", body: "Лендинг: от 62 500 ₽. MVP: от 200 000 ₽. SaaS / кабинет: от 400 000 ₽. AI-пилот: от 150 000 ₽. Полноценный продукт: от 1 000 000 ₽. Все цифры — после discovery." },
        { title: "Что влияет на сроки", body: "Сложность продуктовой логики, количество интеграций, качество входных данных (для AI), наличие готового дизайна, скорость обратной связи от заказчика." },
        { title: "Почему дешёвый подряд обходится дороже", body: "Дешёвый подрядчик экономит на discovery, UX и архитектуре. Результат — продукт, который нужно переделывать. Мы считаем total cost of ownership, а не стоимость первого релиза." },
      ],
      relatedCases: ["myunion-platform", "global-olive-corporation", "priboy-hotels"],
      relatedServices: ["razrabotka-sajtov", "saas-paas", "ai-chat-boty"],
      faqs: [
        { question: "Можно ли получить оценку до discovery?", answer: "Грубую вилку — да. Точную оценку — только после discovery (2–5 дней), потому что стоимость зависит от scope." },
        { question: "Фиксированная цена или time & material?", answer: "Для MVP и чётких scope — фиксированная цена. Для долгосрочных продуктов — T&M с ежемесячным бюджетом." },
      ],
    },
    "kejsy-metodologiya": {
      slug: "kejsy-metodologiya",
      title: "Кейсы и методология YappiX — как мы доказываем результат",
      description: "Как мы оцениваем проект, измеряем impact и строим кейсы с реальными метриками. Методология, артефакты и доказательства.",
      h1: "Кейсы и методология: как мы доказываем результат",
      intro: "Кейс без методики измерения мало что значит. Мы фиксируем baseline, считаем impact и передаём клиенту evidence pack с реальными метриками.",
      canonicalPath: "/kejsy-i-metodologiya",
      ctaLabel: "Посмотреть кейсы",
      ctaHref: "/kejsy",
      sections: [
        { title: "Как мы оцениваем проект до старта", body: "Discovery-сессия, фиксация целей и метрик, определение baseline. Без этого невозможно доказать эффект после запуска." },
        { title: "Что должно быть в нормальном кейсе", body: "Задача, контекст, baseline, что сделали, метрики до/после, ограничения, артефакты. Без метрик — это не кейс, а маркетинговый текст." },
        { title: "Как мы считаем impact", body: "Фиксируем KPI до и после: конверсия, время обработки, стоимость операции, удовлетворённость. Сравниваем на одинаковом периоде." },
        { title: "Артефакты на каждом этапе", body: "Product brief, wireframes, прототип, код, документация, тест-кейсы, метрики, roadmap. Клиент получает не «готовый сайт», а полный набор артефактов." },
      ],
      relatedCases: ["myunion-platform", "global-olive-corporation", "priboy-hotels"],
      relatedServices: ["razrabotka-sajtov", "ai-chat-boty", "saas-paas"],
      faqs: [
        { question: "Можно ли посмотреть кейсы?", answer: "Да. Публичные кейсы — на странице /kejsy. Детальные кейсы с NDA — по запросу." },
        { question: "Как вы измеряете ROI?", answer: "Фиксируем baseline до старта, считаем экономию после запуска. Подробнее — на странице ROI-методологии." },
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
    "ai-first-razrabotka": {
      slug: "ai-first-razrabotka",
      title: "AI-first engineering — how we ship products faster | YappiX",
      description:
        "What AI-first delivery means in practice: AI-assisted steps from prototype to deploy — and how it speeds up launches without cutting quality corners.",
      h1: "AI-first engineering: how we ship products faster",
      intro:
        "AI-first is not a slogan. It’s a concrete workflow: AI tooling across prototyping, implementation, testing, and review — so engineers focus on product logic, not repetitive work.",
      canonicalPath: "/en/ai-first-razrabotka",
      ctaLabel: "Discuss an AI-first engagement",
      ctaHref: "/en/contact",
      sections: [
        {
          title: "What “AI-first” means here",
          body: "AI tools are embedded across the workflow: rapid UI prototyping, implementation accelerators, tests, docs, and content. It’s not a replacement for engineers — it multiplies throughput when used with review and standards.",
        },
        {
          title: "Impact on timelines",
          body: "AI-first reduces repetitive work: UI scaffolding, boilerplate, documentation drafts, and test harnesses. The team spends more time on business logic, UX, and integration risk.",
        },
        {
          title: "Quality and control",
          body: "AI-generated output goes through human review. Automated tests, CI/CD, and monitoring are non‑negotiable. AI accelerates; it doesn’t replace engineering judgment.",
        },
        {
          title: "When AI-first helps less",
          body: "If you need novel algorithms or deep domain expertise with no analogs, acceleration is smaller. We’ll tell you upfront where the leverage is — and where it isn’t.",
        },
      ],
      relatedCases: ["myunion-platform"],
      relatedServices: ["razrabotka-sajtov", "ai-chat-boty", "saas-paas"],
      faqs: [
        {
          question: "Does AI-first mean the model writes all code?",
          answer: "No. AI helps draft and accelerate; engineers review, harden, and own outcomes.",
        },
        {
          question: "Is it cheaper than “classic” development?",
          answer: "Often yes on routine-heavy work — but total cost still depends on product complexity, not line count.",
        },
      ],
    },
    "mvp-zapusk": {
      slug: "mvp-zapusk",
      title: "MVP & product launch — from idea to a working contour | YappiX",
      description:
        "How we launch MVPs: product logic, UX, AI-assisted delivery — and when an MVP is the right step vs a full product build.",
      h1: "MVP & product launch: from idea to a working contour",
      intro:
        "An MVP isn’t a broken demo. It’s the smallest working system you can show to users, investors, or your team. We help define scope, design UX, and ship fast — without baking in dead ends.",
      canonicalPath: "/en/mvp-i-zapusk-produkta",
      ctaLabel: "Get an MVP assessment",
      ctaHref: "/en/contact",
      sections: [
        {
          title: "When you need an MVP",
          body: "When you have a hypothesis but not certainty on product/market fit. When investors need something real. When the team would otherwise ship late without user feedback.",
        },
        {
          title: "How we define scope",
          body: "Discovery → user stories → prioritization → MVP scope. We keep the core that validates the main hypothesis; everything else goes to backlog with intent.",
        },
        {
          title: "Launch process",
          body: "Typically 2–8 weeks from discovery to a working release. Iterations every 2–3 days. AI-assisted delivery where it actually helps.",
        },
        {
          title: "After launch",
          body: "We collect feedback, read metrics, and plan the next iterations. The MVP is a starting point — not the destination.",
        },
      ],
      relatedCases: ["myunion-platform", "global-olive-corporation"],
      relatedServices: ["razrabotka-sajtov", "saas-paas"],
      faqs: [
        {
          question: "What does an MVP cost?",
          answer: "From ~200,000 RUB for core functionality — exact estimate after a short discovery (2–5 days).",
        },
        {
          question: "Can an MVP grow into a full product?",
          answer: "That’s the point: we architect for evolution so you don’t have to rewrite everything after the first users.",
        },
      ],
    },
    "vnedrenie-ai-rag": {
      slug: "vnedrenie-ai-rag",
      title: "AI & RAG for business — when it actually works | YappiX",
      description:
        "When AI is worth it — and when it’s an expensive toy. RAG, assistants, automation: a hype-free approach grounded in economics and constraints.",
      h1: "AI & RAG adoption: when it actually works",
      intro:
        "We don’t sell “AI for AI”. We start from process reality: where automation saves time, what data exists, and what guardrails you need — then we pilot and scale.",
      canonicalPath: "/en/vnedrenie-ai-i-rag",
      ctaLabel: "Discuss an AI initiative",
      ctaHref: "/en/contact",
      sections: [
        {
          title: "Where AI tends to pay off",
          body: "Knowledge search, support automation, document workflows, sales/ops assistance — high-volume repetitive work with structured inputs.",
        },
        {
          title: "Where AI is a bad bet",
          body: "No stable process, tiny datasets, or requirements for perfect accuracy without human oversight — we’ll say so before you spend budget.",
        },
        {
          title: "Our approach",
          body: "Process audit → economics → pilot → scale. If the first two steps don’t clear the bar, we don’t start building.",
        },
        {
          title: "RAG: knowledge search",
          body: "RAG connects an LLM to your documents so answers cite sources instead of relying on memory. Typical time savings: 40–60% on internal search workloads — when data quality is there.",
        },
      ],
      relatedCases: ["myunion-platform"],
      relatedServices: ["ai-chat-boty"],
      faqs: [
        {
          question: "What should be ready before implementation?",
          answer: "Access to documents, a described workflow, and baseline metrics for the current state.",
        },
        {
          question: "How do you control answer quality?",
          answer: "Metrics, logging, data contour boundaries, and periodic evaluation — see also the controlled AI contour pillar page.",
        },
      ],
    },
    "cto-service": {
      slug: "cto-service",
      title: "CTO as a Service — technical strategy for startups | YappiX",
      description:
        "Technical strategy, architecture, hiring, and delivery — without hiring a full-time CTO too early.",
      h1: "CTO as a Service: technical strategy without a full-time CTO",
      intro:
        "Early on, a full-time CTO is expensive and often unnecessary. We join as a technical partner: architecture, delivery discipline, and hiring support — focused on shipping, not slides.",
      canonicalPath: "/en/cto-as-a-service",
      ctaLabel: "Discuss the CTO format",
      ctaHref: "/en/contact",
      sections: [
        {
          title: "When CTO-as-a-Service fits",
          body: "Pre-seed/seed without a technical co-founder, or a growing team that needs architectural leadership and a sane delivery rhythm — fast.",
        },
        {
          title: "What’s included",
          body: "Technical strategy, stack choices, architecture, CI/CD, code review, hiring support and mentoring, hands-on delivery guidance.",
        },
        {
          title: "How we work",
          body: "Often 10–20 hours/week early on, then less as your team matures. Direct founder communication — no unnecessary layers.",
        },
        {
          title: "Not “outsourcing by the hour”",
          body: "Outsourcing executes tickets. CTO-as-a-Service helps decide what to build, how to build it, and how to scale the team responsibly.",
        },
      ],
      relatedCases: ["myunion-platform", "global-olive-corporation"],
      relatedServices: ["razrabotka-sajtov", "saas-paas"],
      faqs: [
        {
          question: "What does CTO as a Service cost?",
          answer: "Depends on involvement — commonly from ~200,000 RUB/month for 10–20 hours/week.",
        },
        {
          question: "How long is it needed?",
          answer: "Often 3–6 months until you can hire or promote an internal technical lead.",
        },
      ],
    },
    "stoimost-sroki": {
      slug: "stoimost-sroki",
      title: "Cost & timeline — what drives price in product engineering | YappiX",
      description:
        "What shapes budgets for MVPs, SaaS, websites, and AI pilots — with realistic ranges and honest constraints.",
      h1: "Cost & timeline: what drives the price",
      intro:
        "We don’t quote “from $500” without context. This page breaks down what goes into cost, what changes timelines, and how we estimate responsibly after discovery.",
      canonicalPath: "/en/stoimost-i-sroki-razrabotki",
      ctaLabel: "Get a project estimate",
      ctaHref: "/en/contact",
      sections: [
        {
          title: "What cost is made of",
          body: "Discovery, UX/UI, engineering, QA, release, and support are separate budget lines. AI acceleration can reduce routine work — it doesn’t remove product design and integration risk.",
        },
        {
          title: "Typical budget ranges",
          body: "Landing: from ~62,500 RUB. MVP: from ~200,000 RUB. SaaS/portal: from ~400,000 RUB. AI pilot: from ~150,000 RUB. Full product: from ~1,000,000 RUB. Always calibrated after discovery.",
        },
        {
          title: "What changes timelines",
          body: "Product complexity, integrations, data readiness (especially for AI), design readiness, and feedback cadence from stakeholders.",
        },
        {
          title: "Why the cheapest bid often costs more",
          body: "Cheap bids usually skip discovery, UX, and architecture — then you pay again in rework. We optimize total cost of ownership, not the cheapest first invoice.",
        },
      ],
      relatedCases: ["myunion-platform", "global-olive-corporation", "priboy-hotels"],
      relatedServices: ["razrabotka-sajtov", "saas-paas", "ai-chat-boty"],
      faqs: [
        {
          question: "Can you estimate before discovery?",
          answer: "A rough range — yes. A firm estimate — only after a short discovery (2–5 days) because scope drives cost.",
        },
        {
          question: "Fixed price or time & materials?",
          answer: "Fixed price for well-bounded MVPs; T&M with a monthly cap for evolving products.",
        },
      ],
    },
    "kejsy-metodologiya": {
      slug: "kejsy-metodologiya",
      title: "Cases & methodology — how we prove impact | YappiX",
      description:
        "How we scope work, measure outcomes, and publish cases with evidence — not adjectives.",
      h1: "Cases & methodology: how we prove impact",
      intro:
        "A case study without measurement is marketing. We capture baselines, track impact, and share evidence packs clients can actually use.",
      canonicalPath: "/en/kejsy-i-metodologiya",
      ctaLabel: "Browse cases",
      ctaHref: "/en/cases",
      sections: [
        {
          title: "How we evaluate work before starting",
          body: "Discovery, goals, metrics, and baseline — without that, “success” is just a story.",
        },
        {
          title: "What a serious case includes",
          body: "Context, baseline, what we shipped, before/after metrics, constraints, and artifacts — not screenshots with vague claims.",
        },
        {
          title: "How we measure impact",
          body: "We align KPIs before and after: conversion, handling time, cost per operation, satisfaction — on comparable periods.",
        },
        {
          title: "Artifacts at every stage",
          body: "Briefs, wireframes, prototypes, code, docs, tests, metrics, roadmap — you get a system, not a black box deliverable.",
        },
      ],
      relatedCases: ["myunion-platform", "global-olive-corporation", "priboy-hotels"],
      relatedServices: ["razrabotka-sajtov", "ai-chat-boty", "saas-paas"],
      faqs: [
        {
          question: "Can we see public cases?",
          answer: "Yes — start at /en/cases. More detailed stories may be available under NDA.",
        },
        {
          question: "How do you measure ROI?",
          answer: "Baseline first, then measured savings after launch — aligned with the ROI methodology pages.",
        },
      ],
    },
  },
}

export const pillarSlugs: PillarSlug[] = ["roi-automation", "ai-contour", "rag-search", "ai-first-razrabotka", "mvp-zapusk", "vnedrenie-ai-rag", "cto-service", "stoimost-sroki", "kejsy-metodologiya"]

export const pillarRouteMap: Record<PillarSlug, { ru: string; en: string }> = {
  "roi-automation": { ru: "/avtomatizaciya-s-roi", en: "/en/roi-first-automation" },
  "ai-contour": { ru: "/upravlyaemyj-ai-kontur", en: "/en/controlled-ai-contour" },
  "rag-search": { ru: "/rag-poisk-po-baze-znanij", en: "/en/rag-enterprise-knowledge-search" },
  "ai-first-razrabotka": { ru: "/ai-first-razrabotka", en: "/en/ai-first-razrabotka" },
  "mvp-zapusk": { ru: "/mvp-i-zapusk-produkta", en: "/en/mvp-i-zapusk-produkta" },
  "vnedrenie-ai-rag": { ru: "/vnedrenie-ai-i-rag", en: "/en/vnedrenie-ai-i-rag" },
  "cto-service": { ru: "/cto-as-a-service", en: "/en/cto-as-a-service" },
  "stoimost-sroki": { ru: "/stoimost-i-sroki-razrabotki", en: "/en/stoimost-i-sroki-razrabotki" },
  "kejsy-metodologiya": { ru: "/kejsy-i-metodologiya", en: "/en/kejsy-i-metodologiya" },
}
