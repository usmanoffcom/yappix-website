import {
  Music,
  Palette,
  Layout,
  Rocket,
  TrendingUp,
  Code2,
  Sparkles,
  Brain,
  Lightbulb,
  Zap,
  Search,
  Layers,
  TestTube,
  IterationCcw,
  Clock,
  Users,
  Link2,
  FlaskConical,
  Shrink,
  Eye,
  Target,
  Building2,
  Briefcase,
  type LucideIcon,
} from "lucide-react"

export type TimelineItem = {
  icon: LucideIcon
  title: string
  description: string
}

export type FaqItem = {
  question: string
  answer: string
}

export type MethodCard = {
  icon: LucideIcon
  title: string
  description: string
}

export type MetricCard = {
  value: string
  label: string
}

export type BenefitCard = {
  icon: LucideIcon
  title: string
  description: string
}

export type AudienceCard = {
  icon: LucideIcon
  title: string
  description: string
}

export const founderTimeline: TimelineItem[] = [
  {
    icon: Music,
    title: "Музыка и визуальное мышление",
    description: "Занимался музыкой и работал со звуком — это сформировало чувство ритма, структуры и внимание к деталям.",
  },
  {
    icon: Palette,
    title: "Переход в дизайн",
    description: "Визуальное мышление естественно привело в графический и веб-дизайн. Начал создавать интерфейсы.",
  },
  {
    icon: Layout,
    title: "Рост в UX/UI",
    description: "Углубился в user experience и accessibility. Проблемы со зрением заставили глубже понять, как люди взаимодействуют с продуктами.",
  },
  {
    icon: Rocket,
    title: "Стартапы и продуктовый подход",
    description: "Запускал собственные продукты: CMS, маркетплейсы, SaaS. Прошёл через полный цикл от идеи до пользователей.",
  },
  {
    icon: TrendingUp,
    title: "Привлечение инвестиций",
    description: "Привлекал инвестиции в стартапы, работал с инвесторами из России и США. Научился считать unit-экономику и защищать продуктовые решения.",
  },
  {
    icon: Code2,
    title: "Возврат в full stack",
    description: "AI и accessibility сильно упростили путь от дизайна к коду. Вернулся в full stack разработку — Next.js, TypeScript, Node.js.",
  },
  {
    icon: Sparkles,
    title: "AI-first методология",
    description: "Сегодня объединяю весь этот опыт: UX/UI + full stack + product strategy + AI-ускорение на каждом этапе.",
  },
]

export const founderStoryCards = [
  {
    icon: Brain,
    title: "Founder mindset",
    description: "Мышление предпринимателя: от юнит-экономики до go-to-market.",
  },
  {
    icon: Lightbulb,
    title: "Product thinking",
    description: "Вижу продукт целиком — от UX-исследований до архитектуры и масштабирования.",
  },
  {
    icon: Zap,
    title: "AI-first delivery",
    description: "AI ускоряет каждый этап: прототипирование, код, тесты, документация.",
  },
]

export const founderMethod: MethodCard[] = [
  {
    icon: Search,
    title: "Аналитика",
    description: "AI анализирует рынок, конкурентов и пользователей. Формируем гипотезы на данных, а не на интуиции.",
  },
  {
    icon: Layers,
    title: "UX/UI и прототипирование",
    description: "AI генерирует варианты интерфейсов, дизайнер выбирает лучший. От wireframe до pixel-perfect в 3-5 раз быстрее.",
  },
  {
    icon: Code2,
    title: "Full stack разработка",
    description: "Cursor AI, v0.dev и Copilot ускоряют написание кода. Один специалист закрывает фронтенд, бэкенд и DevOps.",
  },
  {
    icon: TestTube,
    title: "Тестирование и документация",
    description: "AI пишет тесты, генерирует документацию и проверяет код на уязвимости. Качество — не ручной труд, а система.",
  },
  {
    icon: IterationCcw,
    title: "Быстрые итерации и запуск",
    description: "MVP за недели, а не месяцы. Быстрая обратная связь, быстрые правки, быстрый выход на рынок.",
  },
]

export const founderMetrics: MetricCard[] = [
  { value: "20+", label: "лет в digital и product-среде" },
  { value: "250+", label: "проектов реализовано" },
  { value: "5", label: "локаций (США, РФ, Турция, Сербия, Казахстан)" },
  { value: "AI-first", label: "подход к каждому проекту" },
  { value: "7-12×", label: "ускорение с AI-инструментами" },
  { value: "Сколково", label: "резидент фонда" },
]

export const founderProjects = [
  "YappiX — AI-first delivery company",
  "YAPPIX CMS — собственная CMS-платформа",
  "realLaw AI — Legal Tech SaaS для ОАЭ",
  "Priboy Hotels — digital для сети отелей",
  "Jupid — AI dating platform",
  "CoinPulse — crypto portfolio tracker",
]

export const founderBenefits: BenefitCard[] = [
  {
    icon: Clock,
    title: "Быстрее time-to-market",
    description: "AI-first процесс сокращает путь от идеи до релиза в 3-5 раз по сравнению с классическим подходом.",
  },
  {
    icon: Users,
    title: "Меньше потерь на найм",
    description: "Один продуктовый контур вместо отдельных подрядчиков на дизайн, фронтенд, бэкенд и управление.",
  },
  {
    icon: Link2,
    title: "Связность идеи и реализации",
    description: "Один человек понимает и UX, и код, и продукт — ничего не теряется при передаче между командами.",
  },
  {
    icon: FlaskConical,
    title: "Быстрая проверка гипотез",
    description: "MVP за недели, а не месяцы. Можно быстро проверить идею на реальных пользователях и скорректировать курс.",
  },
  {
    icon: Shrink,
    title: "Компактный старт продукта",
    description: "Не нужно раздувать штат на старте. Полноценный продукт от одного специалиста с AI-ускорением.",
  },
  {
    icon: Eye,
    title: "Прозрачность процесса",
    description: "Артефакты на каждом этапе: прототипы, код в репозитории, документация. Всё видно и управляемо.",
  },
]

export const founderAudience: AudienceCard[] = [
  {
    icon: Rocket,
    title: "Founders и стартапы",
    description: "Нужно быстро запустить MVP и проверить гипотезу без раздувания бюджета.",
  },
  {
    icon: Building2,
    title: "Компании с идеей продукта",
    description: "Есть бизнес-задача, но нет in-house команды разработки. Нужен человек, который доведёт до релиза.",
  },
  {
    icon: Sparkles,
    title: "AI-first запуск",
    description: "Хотите использовать AI не как маркетинговый ярлык, а как реальный ускоритель разработки.",
  },
  {
    icon: Target,
    title: "Product/UX/Full stack контур",
    description: "Нужен сильный специалист на стыке дизайна, кода и продуктовой стратегии.",
  },
  {
    icon: Briefcase,
    title: "Предприниматели без штата",
    description: "Не хотите нанимать 5 человек на старте. Нужен один контур, который закроет полный цикл.",
  },
]

export const founderFaq: FaqItem[] = [
  {
    question: "Кто такой AI-first product developer?",
    answer: "Это специалист, который использует AI-инструменты на всех этапах создания продукта: от аналитики и прототипирования до кода, тестирования и документации. AI — не витрина, а рабочий инструмент, который ускоряет каждый этап в 3-12 раз.",
  },
  {
    question: "Чем ваш подход отличается от студии?",
    answer: "Студия — это команда из 5-15 человек с накладными расходами и длинной цепочкой согласований. Мой подход — один продуктовый контур, где я вижу продукт целиком: UX/UI + код + стратегия. Меньше потерь на коммуникации, быстрее результат, ниже стоимость.",
  },
  {
    question: "Вы занимаетесь только дизайном?",
    answer: "Нет. Я прошёл путь от дизайна к full stack разработке. Сегодня закрываю полный цикл: UX-исследования, UI-дизайн, фронтенд (Next.js, React), бэкенд (Node.js), DevOps, AI-интеграции.",
  },
  {
    question: "Вы можете довести проект до релиза?",
    answer: "Да. От идеи и прототипа до production-ready продукта с деплоем, мониторингом и документацией. Работаю как единый delivery-контур.",
  },
  {
    question: "С какими продуктами вы работаете?",
    answer: "MVP, SaaS, мобильные приложения, AI-решения, корпоративные продукты, маркетплейсы. Индустрии: FinTech, LegalTech, EdTech, e-commerce, hospitality.",
  },
  {
    question: "Почему AI-first подход полезен бизнесу?",
    answer: "AI сокращает time-to-market в 3-5 раз, снижает стоимость MVP на 40-60% и позволяет быстрее проверять гипотезы. Вы получаете рабочий продукт за недели, а не месяцы.",
  },
]

export const usualApproach = [
  "Долгий цикл согласований между дизайнером, разработчиком и менеджером",
  "Потеря смысла при передаче макетов в разработку",
  "Отдельные подрядчики на каждый этап",
  "Месяцы до первого рабочего прототипа",
]

export const myApproach = [
  "Один продуктовый контур — от идеи до релиза",
  "AI-first процесс на каждом этапе",
  "В 3-5 раз быстрее от идеи до рабочего продукта",
  "Нет потерь на коммуникации между командами",
]
