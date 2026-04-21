/** Карьера: вакансии AI R&D — RU/EN для SEO-страниц /karera/* и /en/career/* */

export const CAREER_COMPANY = "YappiX"
export const CAREER_EMAIL = "hr@yappix.ru"
export const CAREER_LOCATION_RU = "Сколково / удалённо"
export const CAREER_LOCATION_EN = "Skolkovo / remote"
export const CAREER_WORK_FORMAT_RU = "Полная занятость, удалённо"
export const CAREER_WORK_FORMAT_EN = "Full-time, remote"
export const CAREER_APPLY_URL_RU = "https://yappix.ru/kontakty"
export const CAREER_APPLY_URL_EN = "https://yappix.ru/en/contact"

export const CAREER_SLUGS = [
  "senior-ai-research-engineer-research-ml-architect",
  "ml-systems-infrastructure-engineer-ai-llm",
  "ai-data-evaluation-engineer",
] as const

export type CareerSlug = (typeof CAREER_SLUGS)[number]

export interface CareerLocaleBlock {
  seoTitle: string
  metaDescription: string
  h1: string
  about: string[]
  responsibilities: string[]
  requirements: string[]
  niceToHave: string[]
  notAFit: string[]
  whatWeOffer: string[]
  howToApply: string
}

export interface CareerJob {
  slug: CareerSlug
  department: { ru: string; en: string }
  skills: string[]
  datePosted: string
  validThrough: string
  ru: CareerLocaleBlock
  en: CareerLocaleBlock
}

function isCareerSlug(s: string): s is CareerSlug {
  return (CAREER_SLUGS as readonly string[]).includes(s)
}

export function getCareerJob(slug: string): CareerJob | undefined {
  if (!isCareerSlug(slug)) return undefined
  return careersBySlug[slug]
}

export const careersBySlug: Record<CareerSlug, CareerJob> = {
  "senior-ai-research-engineer-research-ml-architect": {
    slug: "senior-ai-research-engineer-research-ml-architect",
    department: { ru: "AI Research", en: "AI Research" },
    skills: [
      "Python",
      "PyTorch",
      "LLM",
      "Deep Learning",
      "NLP",
      "Transformers",
      "Evaluation",
      "Linux",
      "Docker",
    ],
    datePosted: "2026-04-21",
    validThrough: "2026-12-31",
    ru: {
      seoTitle:
        "Senior AI Research Engineer / Research ML Architect — вакансия в YappiX",
      metaDescription:
        "YappiX ищет Senior AI Research Engineer / Research ML Architect для разработки новых AI-архитектур, LLM, evaluation pipelines и AI-first R&D. Удалённо / Сколково.",
      h1: "Senior AI Research Engineer / Research ML Architect",
      about: [
        `${CAREER_COMPANY} ищет Senior AI Research Engineer / Research ML Architect для разработки новых архитектур ИИ, алгоритмов, LLM-систем и AI-first продуктов.`,
        "Это не позиция для человека, который просто интегрирует готовые API или пишет обвязки вокруг чужих моделей. Нам нужен сильный инженер-исследователь, который умеет формулировать гипотезы, проектировать архитектуру, проверять её экспериментом и доводить до рабочего результата.",
        "Мы строим AI-first команду, где AI IDE, AI-агенты и deep coding используются как ускоритель мышления и разработки, а не как замена инженерного уровня. Мы ищем человека, который умеет думать самостоятельно, спорить по существу, критиковать слабые решения и находить новые.",
      ],
      responsibilities: [
        "проектировать и проверять новые архитектуры ИИ и алгоритмы",
        "разрабатывать прототипы моделей, inference pipelines и evaluation pipelines",
        "работать с LLM, нейронными сетями, архитектурами трансформеров и новыми вычислительными подходами",
        "формализовать гипотезы и превращать идеи в воспроизводимые эксперименты",
        "разрабатывать AI-first продукты, внутренние системы и исследовательские прототипы",
        "строить и улучшать качество моделей, надёжность, latency, memory efficiency и quality-per-compute",
        "работать с данными, метриками, evaluation, benchmarking и error analysis",
        "использовать AI IDE и AI coding tools как ускоритель R&D и engineering workflow",
      ],
      requirements: [
        "сильный Python",
        "уверенный PyTorch",
        "глубокое понимание machine learning, deep learning и нейронных сетей",
        "опыт работы с LLM, NLP, трансформерами и архитектурами моделей",
        "умение самостоятельно проектировать решения без детального пошагового ТЗ",
        "инженерная аккуратность, внимание к деталям и экспериментальная дисциплина",
        "способность критически мыслить, предлагать новые подходы и отстаивать решение аргументами",
        "понимание evaluation, benchmarking, reproducibility и исследовательской логики",
        "опыт работы с Linux, Docker, Git и современным AI-first toolchain",
      ],
      niceToHave: [
        "опыт с CUDA, distributed training, inference optimization, Triton, DeepSpeed",
        "опыт с собственной AI-инфраструктурой, GPU-оптимизацией и systems engineering",
        "опыт чтения и реализации research papers",
        "опыт разработки новых архитектур, а не только fine-tuning и интеграций",
        "опыт с AI IDE, Cursor, Claude Code, Copilot и другими AI coding tools как с рабочим инструментом",
      ],
      notAFit: [
        "человек, которому нужен полный таск-лист на каждый шаг",
        "разработчик, который пишет код ради процесса, а не ради результата",
        "специалист, который умеет пользоваться AI-инструментами, но не умеет мыслить самостоятельно",
        "кандидат, который избегает ответственности за решение и архитектурный выбор",
      ],
      whatWeOffer: [
        "участие в создании нового AI-first направления",
        "работу над новой архитектурой ИИ, а не над шаблонными интеграциями",
        "высокий уровень влияния на продукт, архитектуру и R&D",
        "компактную сильную команду без лишней бюрократии",
        "быстрый цикл проверки гипотез и выхода в прототип",
        `удалённый формат / ${CAREER_LOCATION_RU}`,
        `формат работы: ${CAREER_WORK_FORMAT_RU}`,
      ],
      howToApply: `Отправьте резюме, GitHub, описание проектов и краткий рассказ о задачах, которые вы решали самостоятельно, на ${CAREER_EMAIL} или через форму: ${CAREER_APPLY_URL_RU}`,
    },
    en: {
      seoTitle: "Senior AI Research Engineer / Research ML Architect Job — YappiX",
      metaDescription:
        "YappiX is hiring a Senior AI Research Engineer / Research ML Architect to build new AI architectures, LLM systems, evaluation pipelines, and AI-first products. Remote / Skolkovo.",
      h1: "Senior AI Research Engineer / Research ML Architect",
      about: [
        `${CAREER_COMPANY} is hiring a Senior AI Research Engineer / Research ML Architect to work on new AI architectures, algorithms, LLM systems, and AI-first products.`,
        "This is not a role for someone who only integrates existing APIs or builds wrappers around third-party models. We are looking for a strong research-minded engineer who can turn hypotheses into architecture, architecture into experiments, and experiments into working systems.",
        "We build in an AI-first way: AI IDEs, AI agents, and deep coding are used to accelerate thinking, design, development, testing, and iteration — not to replace engineering judgment. We need someone who can think independently, challenge weak ideas, and propose better ones.",
      ],
      responsibilities: [
        "design and validate new AI architectures and algorithms",
        "build model prototypes, inference pipelines, and evaluation pipelines",
        "work with LLMs, neural networks, transformers, and new computational approaches",
        "turn research hypotheses into reproducible experiments",
        "contribute to AI-first products, internal tools, and research prototypes",
        "improve model quality, reliability, latency, memory efficiency, and quality-per-compute",
        "work with data, metrics, benchmarking, and error analysis",
        "use AI IDEs and AI coding tools as part of an efficient R&D workflow",
      ],
      requirements: [
        "strong Python",
        "solid PyTorch",
        "deep understanding of machine learning, deep learning, and neural networks",
        "hands-on experience with LLMs, NLP, transformers, and model architecture design",
        "ability to work independently without waiting for detailed product specs at every step",
        "strong attention to detail, engineering rigor, and experimental discipline",
        "ability to critique ideas, propose alternatives, and defend decisions with evidence",
        "understanding of evaluation, benchmarking, reproducibility, and research methodology",
        "experience with Linux, Docker, Git, and a modern AI-first toolchain",
      ],
      niceToHave: [
        "experience with CUDA, distributed training, inference optimization, Triton, or DeepSpeed",
        "systems engineering and GPU optimization experience",
        "experience reading and implementing research papers",
        "experience designing new architectures rather than only fine-tuning or integrations",
        "experience using AI IDEs such as Cursor, Claude Code, or Copilot as serious engineering tools",
      ],
      notAFit: [
        "you need step-by-step task breakdowns for everything",
        "you write code for process rather than for outcomes",
        "you rely on AI tools but cannot reason independently",
        "you avoid ownership of architecture and technical decisions",
      ],
      whatWeOffer: [
        "a chance to help shape a new AI-first direction",
        "work on new AI architecture rather than repetitive integrations",
        "real ownership over product, architecture, and R&D",
        "a compact, high-signal team with low bureaucracy",
        "a fast hypothesis-to-prototype cycle",
        `remote / ${CAREER_LOCATION_EN}`,
        `work format: ${CAREER_WORK_FORMAT_EN}`,
      ],
      howToApply: `Send your CV, GitHub, portfolio, and a short note about problems you solved independently to ${CAREER_EMAIL} or apply at ${CAREER_APPLY_URL_EN}`,
    },
  },

  "ml-systems-infrastructure-engineer-ai-llm": {
    slug: "ml-systems-infrastructure-engineer-ai-llm",
    department: { ru: "ML Infrastructure", en: "ML Infrastructure" },
    skills: [
      "Python",
      "Linux",
      "Docker",
      "CI/CD",
      "GPU",
      "Distributed systems",
      "Kubernetes",
      "ML pipelines",
    ],
    datePosted: "2026-04-21",
    validThrough: "2026-12-31",
    ru: {
      seoTitle: "ML Systems / Infrastructure Engineer (AI / LLM) — вакансия в YappiX",
      metaDescription:
        "YappiX ищет ML Systems / Infrastructure Engineer для AI/LLM-инфраструктуры, GPU, distributed training, inference optimization и AI-first engineering. Удалённо / Сколково.",
      h1: "ML Systems / Infrastructure Engineer (AI / LLM)",
      about: [
        `${CAREER_COMPANY} ищет ML Systems / Infrastructure Engineer для разработки и поддержки инфраструктуры под AI, LLM, новые архитектуры ИИ и высоконагруженные inference / training workflows.`,
        "Нам нужен инженер, который понимает не только код, но и то, как реально работают GPU, память, latency, batching, inference, контейнеры, reproducibility и distributed systems.",
        "Это роль для человека, который умеет превращать исследовательскую идею в устойчивую инженерную систему.",
      ],
      responsibilities: [
        "строить инфраструктуру для обучения, inference и evaluation AI-моделей",
        "работать с GPU, памятью, latency, throughput и оптимизацией вычислений",
        "собирать reproducible environment для research и production",
        "поддерживать контейнеры, CI/CD, deployment и внутренние пайплайны",
        "работать с distributed training, distributed inference и systems-level optimization",
        "помогать research-команде быстро проверять гипотезы без хаоса в инфраструктуре",
        "улучшать надёжность, мониторинг, логирование и инженерную воспроизводимость",
      ],
      requirements: [
        "сильный Python",
        "хороший Linux",
        "Docker, Git, CI/CD",
        "понимание GPU memory, inference optimization и distributed systems",
        "опыт с ML-инфраструктурой, AI/LLM pipelines или systems engineering",
        "инженерная педантичность и дисциплина",
        "способность самостоятельно находить bottleneck'и и устранять их",
      ],
      niceToHave: [
        "CUDA",
        "Triton",
        "DeepSpeed",
        "Ray",
        "vLLM",
        "Kubernetes",
        "Prometheus / Grafana",
        "работа с training clusters и GPU orchestration",
      ],
      notAFit: [
        "человек, который умеет только разворачивать типовой backend",
        "кандидат, который не понимает разницу между research prototype и production system",
        "инженер, который ждёт идеального ТЗ вместо того, чтобы решать проблему",
      ],
      whatWeOffer: [
        "участие в создании AI-first инженерного контура",
        "работу на стыке research, infra и новых AI-систем",
        "высокий уровень ответственности и влияния",
        "компактную команду и быстрые итерации",
        `удалённый формат / ${CAREER_LOCATION_RU}`,
      ],
      howToApply: `Отправьте резюме, GitHub и краткое описание инфраструктурных задач, которые вы решали, на ${CAREER_EMAIL} или через форму: ${CAREER_APPLY_URL_RU}`,
    },
    en: {
      seoTitle: "ML Systems / Infrastructure Engineer (AI / LLM) Job — YappiX",
      metaDescription:
        "YappiX is hiring an ML Systems / Infrastructure Engineer for AI/LLM infrastructure, GPU systems, distributed training, inference optimization, and AI-first engineering. Remote / Skolkovo.",
      h1: "ML Systems / Infrastructure Engineer (AI / LLM)",
      about: [
        `${CAREER_COMPANY} is hiring an ML Systems / Infrastructure Engineer to build and operate infrastructure for AI systems, LLMs, new AI architectures, and high-performance training and inference workflows.`,
        "We need someone who understands not only code, but also GPU behavior, memory limits, latency, batching, reproducibility, and distributed systems.",
        "This role is for an engineer who can turn research ideas into reliable engineering systems.",
      ],
      responsibilities: [
        "build infrastructure for model training, inference, and evaluation",
        "work on GPU performance, memory efficiency, latency, and throughput",
        "create reproducible environments for research and production",
        "maintain containers, CI/CD, deployment workflows, and internal pipelines",
        "support distributed training, distributed inference, and systems-level optimization",
        "help the research team move fast without creating infrastructure chaos",
        "improve observability, reliability, and engineering reproducibility",
      ],
      requirements: [
        "strong Python",
        "solid Linux",
        "Docker, Git, CI/CD",
        "understanding of GPU memory, inference optimization, and distributed systems",
        "experience with ML infrastructure, AI/LLM pipelines, or systems engineering",
        "strong engineering discipline and attention to detail",
        "ability to find bottlenecks independently and solve them",
      ],
      niceToHave: [
        "CUDA",
        "Triton",
        "DeepSpeed",
        "Ray",
        "vLLM",
        "Kubernetes",
        "Prometheus / Grafana",
        "experience with GPU clusters and orchestration",
      ],
      notAFit: [
        "you only know standard backend deployment patterns",
        "you do not understand the difference between a research prototype and a production system",
        "you wait for perfect specs instead of solving the real problem",
      ],
      whatWeOffer: [
        "a chance to build the AI-first infrastructure layer of a serious technical team",
        "work at the intersection of research, infrastructure, and new AI systems",
        "meaningful ownership and technical influence",
        "a compact team and fast iteration cycles",
        `remote / ${CAREER_LOCATION_EN}`,
      ],
      howToApply: `Send your CV, GitHub, and a short note about infrastructure problems you solved to ${CAREER_EMAIL} or via ${CAREER_APPLY_URL_EN}`,
    },
  },

  "ai-data-evaluation-engineer": {
    slug: "ai-data-evaluation-engineer",
    department: { ru: "AI Data", en: "AI Data" },
    skills: [
      "Python",
      "Datasets",
      "LLM evaluation",
      "Benchmarks",
      "Data pipelines",
      "Pandas",
      "SQL",
      "Quality metrics",
    ],
    datePosted: "2026-04-21",
    validThrough: "2026-12-31",
    ru: {
      seoTitle: "AI Data & Evaluation Engineer — вакансия в YappiX",
      metaDescription:
        "YappiX ищет AI Data & Evaluation Engineer для датасетов, LLM evaluation, benchmark design, data pipelines и AI-first R&D. Удалённо / Сколково.",
      h1: "AI Data & Evaluation Engineer",
      about: [
        `${CAREER_COMPANY} ищет AI Data & Evaluation Engineer для работы с данными, датасетами, разметкой, benchmark design, LLM evaluation и quality control в AI-first продуктах и новых архитектурах ИИ.`,
        "Нам нужен человек, который понимает, что модель становится лучше не от красивых обещаний, а от правильных данных, честных тестов и сильной evaluation-системы.",
      ],
      responsibilities: [
        "собирать, очищать, нормализовать и структурировать датасеты",
        "строить evaluation pipelines и benchmark suites",
        "разрабатывать private test sets, adversarial tests и quality metrics",
        "анализировать ошибки моделей и находить слабые места архитектуры",
        "работать с synthetic data, filtering, deduplication и quality control",
        "поддерживать data workflow для research и product experiments",
        "работать вместе с research и engineering-командой над качеством модели и доказуемостью результатов",
      ],
      requirements: [
        "Python",
        "опыт работы с данными, ML datasets и data pipelines",
        "понимание LLM evaluation, quality metrics и benchmarking",
        "аккуратность, педантичность и любовь к чистым данным",
        "способность видеть системные ошибки, а не только локальные",
        "умение самостоятельно предлагать метрики и схемы проверки",
        "понимание reproducibility и data quality",
      ],
      niceToHave: [
        "опыт с NLP, LLM, prompt evaluation, red teaming",
        "опыт с synthetic data generation и dataset curation",
        "опыт в разметке, QA и исследовательской аналитике",
        "опыт с SQL, DuckDB, Pandas, Arrow, Hugging Face Datasets",
      ],
      notAFit: [
        "человек, который воспринимает данные как вспомогательный мусор",
        "специалист, который не умеет строить честные и воспроизводимые тесты",
        'кандидат, который не видит разницы между «модель отвечает красиво» и «модель отвечает правильно»',
      ],
      whatWeOffer: [
        "работу с AI-first системами и новыми архитектурами ИИ",
        "сильную роль в качестве модели и качестве результатов",
        "участие в построении benchmark и evaluation framework с нуля",
        "компактную команду и быстрый цикл экспериментов",
        `удалённый формат / ${CAREER_LOCATION_RU}`,
      ],
      howToApply: `Отправьте резюме, примеры data/eval-проектов и краткое описание того, как вы строили test sets или quality metrics, на ${CAREER_EMAIL} или через форму: ${CAREER_APPLY_URL_RU}`,
    },
    en: {
      seoTitle: "AI Data & Evaluation Engineer Job — YappiX",
      metaDescription:
        "YappiX is hiring an AI Data & Evaluation Engineer to build datasets, LLM evaluation pipelines, benchmarks, and data quality systems for AI-first R&D. Remote / Skolkovo.",
      h1: "AI Data & Evaluation Engineer",
      about: [
        `${CAREER_COMPANY} is hiring an AI Data & Evaluation Engineer to work on datasets, labeling, benchmark design, LLM evaluation, and quality control for AI-first products and new AI architectures.`,
        "We need someone who understands that models do not improve because of slogans — they improve because of better data, honest tests, and rigorous evaluation.",
      ],
      responsibilities: [
        "collect, clean, normalize, and structure datasets",
        "build evaluation pipelines and benchmark suites",
        "design private test sets, adversarial tests, and quality metrics",
        "analyze model failures and identify architectural weak points",
        "work with synthetic data, filtering, deduplication, and quality control",
        "support data workflows for research and product experiments",
        "collaborate with research and engineering teams on model quality and measurable outcomes",
      ],
      requirements: [
        "Python",
        "experience with data workflows, ML datasets, and data pipelines",
        "understanding of LLM evaluation, quality metrics, and benchmarking",
        "attention to detail and strong data discipline",
        "ability to detect system-level errors rather than only local issues",
        "ability to propose metrics and validation schemes independently",
        "understanding of reproducibility and data quality",
      ],
      niceToHave: [
        "experience with NLP, LLMs, prompt evaluation, or red teaming",
        "experience with synthetic data generation and dataset curation",
        "experience in labeling, QA, and research analytics",
        "experience with SQL, DuckDB, Pandas, Arrow, or Hugging Face Datasets",
      ],
      notAFit: [
        "you treat data work as a secondary support task",
        "you cannot design honest and reproducible tests",
        'you do not distinguish between “the model sounds good” and “the model is correct.”',
      ],
      whatWeOffer: [
        "work on AI-first systems and new AI architectures",
        "a strong role in model quality and measurable results",
        "the opportunity to build benchmark and evaluation systems from scratch",
        "a compact team and fast experimental cycles",
        `remote / ${CAREER_LOCATION_EN}`,
      ],
      howToApply: `Send your CV, examples of data or evaluation work, and a short note on how you designed test sets or quality metrics to ${CAREER_EMAIL} or via ${CAREER_APPLY_URL_EN}`,
    },
  },
}

export const careersListOrdered: CareerJob[] = CAREER_SLUGS.map((s) => careersBySlug[s])

/** Plain text для JSON-LD description */
export function careerPlainDescription(job: CareerJob, locale: "ru" | "en"): string {
  const c = job[locale]
  const parts = [
    c.metaDescription,
    ...c.about.map((p) => p.replace(/\*\*/g, "")),
    ...c.responsibilities,
    ...c.requirements,
  ]
  return parts.join(" ").slice(0, 10000)
}
