export type EvidenceLocale = "ru" | "en"
export type EvidencePageKey = "evidence" | "security-compliance" | "sla-support" | "roi-methodology"

export interface AuditPriorityItem {
  id: string
  priority: "P0" | "P1"
  title: string
  description: string
}

export const auditBacklogByLocale: Record<EvidenceLocale, AuditPriorityItem[]> = {
  ru: [
    {
      id: "evidence-hub",
      priority: "P0",
      title: "Evidence Hub",
      description: "Публичные доказательства качества: PSI/Lighthouse baseline, методики и дата обновления артефактов.",
    },
    {
      id: "security-compliance",
      priority: "P0",
      title: "Security & Compliance",
      description: "Отдельная страница о baseline безопасности: data handling, access control, logging, headers, incident readiness.",
    },
    {
      id: "sla-support",
      priority: "P0",
      title: "SLA & Support",
      description: "Публичная операционная модель поддержки: каналы, реакция, восстановление, эскалации, SLO/SLA.",
    },
    {
      id: "roi-methodology",
      priority: "P0",
      title: "ROI Methodology",
      description: "Методика расчета ROI с допущениями, формулами и примером экономического контракта.",
    },
    {
      id: "case-measurement-standard",
      priority: "P1",
      title: "Стандартизация методики кейсов",
      description: "Для ключевых кейсов: определение метрик, период до/после, источник данных, учет сезонности.",
    },
    {
      id: "interlinking",
      priority: "P1",
      title: "Перелинковка доказательной архитектуры",
      description: "Связать услуги, кейсы, блог и новые evidence-страницы для topic clusters и E-E-A-T.",
    },
  ],
  en: [
    {
      id: "evidence-hub",
      priority: "P0",
      title: "Evidence Hub",
      description: "Public quality proof points: PSI/Lighthouse baseline, methodologies, and artifact update dates.",
    },
    {
      id: "security-compliance",
      priority: "P0",
      title: "Security & Compliance",
      description: "Dedicated security baseline page: data handling, access control, logging, headers, and incident readiness.",
    },
    {
      id: "sla-support",
      priority: "P0",
      title: "SLA & Support",
      description: "Public support model: channels, response and recovery targets, escalation paths, and SLO/SLA.",
    },
    {
      id: "roi-methodology",
      priority: "P0",
      title: "ROI Methodology",
      description: "ROI-first methodology with assumptions, formulas, and a practical economic contract framework.",
    },
    {
      id: "case-measurement-standard",
      priority: "P1",
      title: "Case measurement standardization",
      description: "For key cases: metric definitions, before/after period, source of truth, and seasonality handling.",
    },
    {
      id: "interlinking",
      priority: "P1",
      title: "Proof-driven internal linking",
      description: "Connect services, cases, blog, and evidence pages to strengthen topic clusters and E-E-A-T.",
    },
  ],
}

export interface EvidenceArtifact {
  id: string
  title: string
  description: string
  status: "published" | "in-progress"
  updatedAt: string
  image: string
  imageAlt: string
  bullets: string[]
}

export interface MetricDefinition {
  metric: string
  definition: string
  source: string
  period: string
}

export interface EvidencePageContent {
  key: EvidencePageKey
  title: string
  description: string
  h1: string
  intro: string
  canonicalPath: string
  ctaLabel: string
  ctaHref: string
  sections: {
    artifactsTitle: string
    artifactsSubtitle: string
    methodologyTitle: string
    methodologyBody: string
    metricsTitle: string
    faqTitle?: string
  }
  artifacts: EvidenceArtifact[]
  metrics: MetricDefinition[]
  faqs?: Array<{ question: string; answer: string }>
}

const sharedArtifacts: Record<"evidence" | "security" | "sla" | "roi", EvidenceArtifact> = {
  evidence: {
    id: "evidence-baseline",
    title: "PSI & Lighthouse Baseline",
    description: "Еженедельные снимки baseline производительности и доступности ключевых страниц.",
    status: "published",
    updatedAt: "2026-03-16",
    image: "/images/evidence/evidence-baseline.svg",
    imageAlt: "Дашборд baseline-метрик PSI и Lighthouse",
    bullets: ["Маршруты: главная, услуги, кейсы", "Mobile + desktop", "История изменений по неделям"],
  },
  security: {
    id: "security-baseline",
    title: "Security Baseline",
    description: "Публичный baseline контуров безопасности и соответствия для клиентских внедрений.",
    status: "published",
    updatedAt: "2026-03-16",
    image: "/images/evidence/security-controls.svg",
    imageAlt: "Матрица контролей безопасности и compliance по направлениям",
    bullets: ["Access control и журналирование", "Data handling и retention", "Headers baseline и incident process"],
  },
  sla: {
    id: "sla-flow",
    title: "SLA Escalation Map",
    description: "Прозрачная схема обработки инцидентов и эскалаций с целевыми окнами реакции.",
    status: "published",
    updatedAt: "2026-03-16",
    image: "/images/evidence/sla-escalation.svg",
    imageAlt: "Схема эскалации SLA с уровнями приоритета",
    bullets: ["P1/P2/P3 классификация", "Response time и recovery time", "Каналы и ответственные роли"],
  },
  roi: {
    id: "roi-model",
    title: "ROI Model Snapshot",
    description: "Пример финансовой модели с допущениями, TCO и сроком окупаемости.",
    status: "published",
    updatedAt: "2026-03-16",
    image: "/images/evidence/roi-model.svg",
    imageAlt: "Пример расчета ROI для AI-внедрения с моделью затрат и эффекта",
    bullets: ["Формула ROI и payback period", "Чувствительность по сценариям", "Связь KPI с бизнес-эффектом"],
  },
}

export const evidencePagesByLocale: Record<EvidenceLocale, Record<EvidencePageKey, EvidencePageContent>> = {
  ru: {
    evidence: {
      key: "evidence",
      title: "Evidence Hub — публичные артефакты качества | YappiX",
      description:
        "Evidence Hub YappiX: baseline отчеты PSI/Lighthouse, методики измерения и статус доказательных артефактов по ключевым направлениям.",
      h1: "Evidence Hub: подтверждаем качество артефактами",
      intro:
        "Эта страница показывает, как мы превращаем обещания в проверяемые результаты: отчеты, методики и контрольные чек-листы.",
      canonicalPath: "/evidence",
      ctaLabel: "Обсудить проект с evidence-планом",
      ctaHref: "/kontakty",
      sections: {
        artifactsTitle: "Ключевые артефакты",
        artifactsSubtitle: "Публичные артефакты качества. Данные обновляются еженедельно и по факту релизов.",
        methodologyTitle: "Как мы проверяем качество",
        methodologyBody:
          "Для каждого артефакта фиксируем источник данных, период сравнения и правила расчета. Это снижает риск интерпретации и делает выводы воспроизводимыми.",
        metricsTitle: "Минимальный стандарт метрик",
        faqTitle: "Частые вопросы",
      },
      artifacts: [sharedArtifacts.evidence, sharedArtifacts.roi],
      metrics: [
        {
          metric: "LCP / INP / CLS",
          definition: "Core Web Vitals для ключевых маршрутов в mobile и desktop разрезе.",
          source: "PSI/Lighthouse snapshots",
          period: "Weekly baseline",
        },
        {
          metric: "Lead Conversion",
          definition: "Доля заявок от целевого трафика по страницам услуг и кейсов.",
          source: "Analytics + CRM",
          period: "Month-over-month",
        },
      ],
      faqs: [
        {
          question: "Это реальные отчеты?",
          answer:
            "Да. Артефакты построены на данных Lighthouse, PSI и внутренних систем мониторинга. Каждый артефакт содержит дату обновления и источник данных.",
        },
        {
          question: "Как часто обновляются данные?",
          answer: "Минимум раз в неделю для baseline и по факту релиза для кейсовых evidence pack.",
        },
      ],
    },
    "security-compliance": {
      key: "security-compliance",
      title: "Безопасность и комплаенс — baseline контролей | YappiX",
      description:
        "Публичный baseline безопасности и комплаенса: управление доступами, данные, логирование, security headers и готовность к инцидентам.",
      h1: "Безопасность и комплаенс: baseline контролей",
      intro:
        "Мы проектируем AI-решения с управляемостью и контролем рисков: от доступа и логов до формализованной эскалации инцидентов.",
      canonicalPath: "/security-compliance",
      ctaLabel: "Запросить security briefing",
      ctaHref: "/kontakty",
      sections: {
        artifactsTitle: "Пакет контролей",
        artifactsSubtitle: "Baseline контролей безопасности. Применяется как стандарт для всех проектных внедрений.",
        methodologyTitle: "Принципы security-by-default",
        methodologyBody:
          "На старте фиксируем data-flow, роли доступа, retention и минимальные требования к мониторингу. Затем отражаем это в операционных регламентах проекта.",
        metricsTitle: "Контрольные показатели безопасности",
      },
      artifacts: [sharedArtifacts.security],
      metrics: [
        {
          metric: "Access Coverage",
          definition: "Доля критичных операций, покрытых role-based доступом и аудитом.",
          source: "Access policy matrix",
          period: "Per release",
        },
        {
          metric: "Incident Readiness",
          definition: "Наличие SLA эскалации и playbook для P1/P2 инцидентов.",
          source: "Runbook checklist",
          period: "Quarterly review",
        },
      ],
    },
    "sla-support": {
      key: "sla-support",
      title: "SLA & Support — операционная модель поддержки | YappiX",
      description:
        "SLA & Support YappiX: модель поддержки 24/7, приоритеты инцидентов, реакция и восстановление, матрица эскалаций.",
      h1: "SLA & Support: как работает операционная поддержка",
      intro:
        "Ниже — прозрачная модель поддержки: какие уровни приоритета мы используем, как быстро реагируем и как подтверждаем восстановление сервиса.",
      canonicalPath: "/sla-support",
      ctaLabel: "Получить SLA-матрицу",
      ctaHref: "/kontakty",
      sections: {
        artifactsTitle: "Операционные артефакты",
        artifactsSubtitle: "Операционная модель поддержки. Используется в коммерческих и технических приложениях к договору.",
        methodologyTitle: "Правила эскалации",
        methodologyBody:
          "Классифицируем инциденты по влиянию на бизнес и фиксируем для каждого уровня целевое время реакции, восстановления и канал эскалации.",
        metricsTitle: "SLO/SLA метрики",
        faqTitle: "FAQ по SLA",
      },
      artifacts: [sharedArtifacts.sla],
      metrics: [
        {
          metric: "Initial Response Time",
          definition: "Время до первого подтвержденного ответа по инциденту.",
          source: "Service desk",
          period: "Per incident",
        },
        {
          metric: "Recovery Time",
          definition: "Время до восстановления согласованного уровня доступности.",
          source: "Incident timeline",
          period: "Per incident",
        },
      ],
      faqs: [
        {
          question: "Что значит 24/7 в SLA?",
          answer:
            "24/7 относится к каналу регистрации и первичной реакции на критичные инциденты. Полная матрица режимов поддержки зависит от выбранного пакета.",
        },
      ],
    },
    "roi-methodology": {
      key: "roi-methodology",
      title: "ROI Methodology — методика расчета экономики AI | YappiX",
      description:
        "ROI Methodology YappiX: как считаем экономику внедрения AI, какие допущения используем, как строим TCO и срок окупаемости.",
      h1: "ROI Methodology: от гипотезы к экономическому контракту",
      intro:
        "Мы не запускаем AI-проект без финансовой модели: фиксируем baseline потерь, целевые KPI и формируем экономический контракт с понятными условиями.",
      canonicalPath: "/roi-methodology",
      ctaLabel: "Получить шаблон ROI-модели",
      ctaHref: "/kontakty",
      sections: {
        artifactsTitle: "Артефакты расчета ROI",
        artifactsSubtitle: "Структура финансовой модели с допущениями, формулами TCO и расчётом payback period.",
        methodologyTitle: "Формула и подход",
        methodologyBody:
          "Считаем экономию по сценариям, учитываем TCO, интеграционные и операционные затраты, затем фиксируем минимально приемлемый срок окупаемости.",
        metricsTitle: "Ключевые параметры модели",
        faqTitle: "FAQ по расчету ROI",
      },
      artifacts: [sharedArtifacts.roi, sharedArtifacts.evidence],
      metrics: [
        {
          metric: "Annual Savings",
          definition: "Суммарная годовая экономия после внедрения AI-контуров.",
          source: "Finance model",
          period: "Annualized",
        },
        {
          metric: "Payback Period",
          definition: "Срок достижения точки безубыточности проекта.",
          source: "ROI worksheet",
          period: "Monthly tracking",
        },
      ],
      faqs: [
        {
          question: "Можно ли считать ROI без исторических данных?",
          answer: "Можно сделать оценочную модель, но для финального контракта мы просим baseline минимум за 4-8 недель.",
        },
      ],
    },
  },
  en: {
    evidence: {
      key: "evidence",
      title: "Evidence Hub — public quality proof | YappiX",
      description:
        "YappiX Evidence Hub: PSI/Lighthouse baseline reports, measurement methodology, and artifact status for core pages.",
      h1: "Evidence Hub: proving quality with artifacts",
      intro:
        "This page turns claims into verifiable evidence: reports, definitions, and release-grade quality checklists.",
      canonicalPath: "/en/evidence",
      ctaLabel: "Discuss project with evidence plan",
      ctaHref: "/en/contact",
      sections: {
        artifactsTitle: "Core artifacts",
        artifactsSubtitle: "Public quality artifacts. Data is updated weekly and on each release.",
        methodologyTitle: "How we validate quality",
        methodologyBody:
          "Each artifact includes source of truth, comparison period, and metric definition to keep conclusions reproducible.",
        metricsTitle: "Minimum metric baseline",
        faqTitle: "FAQ",
      },
      artifacts: [
        { ...sharedArtifacts.evidence, description: "Weekly baseline snapshots for performance and accessibility." },
        { ...sharedArtifacts.roi, description: "A sample ROI worksheet snapshot linked to quality outcomes." },
      ],
      metrics: [
        {
          metric: "LCP / INP / CLS",
          definition: "Core Web Vitals for key routes across mobile and desktop.",
          source: "PSI/Lighthouse snapshots",
          period: "Weekly baseline",
        },
        {
          metric: "Lead Conversion",
          definition: "Qualified lead ratio from service and case pages.",
          source: "Analytics + CRM",
          period: "Month-over-month",
        },
      ],
      faqs: [
        {
          question: "Are these live reports?",
          answer: "Yes. Artifacts are built on Lighthouse, PSI, and internal monitoring data. Each artifact includes an update date and data source.",
        },
        {
          question: "How often is data updated?",
          answer: "At least weekly for baseline metrics and on every major release for case evidence packs.",
        },
      ],
    },
    "security-compliance": {
      key: "security-compliance",
      title: "Security & Compliance baseline | YappiX",
      description:
        "Public Security & Compliance baseline: access control, data handling, logging, security headers, and incident readiness.",
      h1: "Security & Compliance baseline",
      intro:
        "We deliver AI systems with risk controls in place: from RBAC and logs to incident escalation and governance artifacts.",
      canonicalPath: "/en/security-compliance",
      ctaLabel: "Request security briefing",
      ctaHref: "/en/contact",
      sections: {
        artifactsTitle: "Control package",
        artifactsSubtitle: "Security controls baseline. Applied as a standard for all project implementations.",
        methodologyTitle: "Security-by-default principles",
        methodologyBody:
          "At project start we define data flow, role model, retention policy, and baseline monitoring requirements.",
        metricsTitle: "Security control metrics",
      },
      artifacts: [{ ...sharedArtifacts.security, description: "Public baseline controls for compliance-oriented delivery." }],
      metrics: [
        {
          metric: "Access Coverage",
          definition: "Share of critical operations covered by RBAC and audit logging.",
          source: "Access policy matrix",
          period: "Per release",
        },
        {
          metric: "Incident Readiness",
          definition: "Availability of P1/P2 runbooks, escalation channels, and owner map.",
          source: "Runbook checklist",
          period: "Quarterly review",
        },
      ],
    },
    "sla-support": {
      key: "sla-support",
      title: "SLA & Support operating model | YappiX",
      description:
        "YappiX SLA & Support model: incident priorities, response and recovery targets, escalation matrix, and support channels.",
      h1: "SLA & Support operating model",
      intro:
        "A transparent support model with incident priorities, target response windows, recovery expectations, and escalation paths.",
      canonicalPath: "/en/sla-support",
      ctaLabel: "Request SLA matrix",
      ctaHref: "/en/contact",
      sections: {
        artifactsTitle: "Operational artifacts",
        artifactsSubtitle: "Operational support model. Used in commercial and technical contract appendices.",
        methodologyTitle: "Escalation policy",
        methodologyBody:
          "Incidents are classified by business impact. Each level has defined response target, recovery target, and escalation ownership.",
        metricsTitle: "SLO/SLA metrics",
        faqTitle: "SLA FAQ",
      },
      artifacts: [{ ...sharedArtifacts.sla, description: "Priority-based escalation map with response and recovery windows." }],
      metrics: [
        {
          metric: "Initial Response Time",
          definition: "Time to first acknowledged response after incident registration.",
          source: "Service desk timeline",
          period: "Per incident",
        },
        {
          metric: "Recovery Time",
          definition: "Time to restore agreed service quality threshold.",
          source: "Incident timeline",
          period: "Per incident",
        },
      ],
      faqs: [
        {
          question: "What does 24/7 support include?",
          answer: "24/7 applies to critical incident intake and first response. Full scope depends on the selected support tier.",
        },
      ],
    },
    "roi-methodology": {
      key: "roi-methodology",
      title: "ROI Methodology for AI initiatives | YappiX",
      description:
        "How YappiX calculates AI ROI: baseline losses, assumptions, TCO, payback period, and economic contract framework.",
      h1: "ROI Methodology: from hypothesis to economic contract",
      intro:
        "We start every AI initiative with a financial model: baseline losses, target KPI impact, and explicit payback assumptions.",
      canonicalPath: "/en/roi-methodology",
      ctaLabel: "Request ROI worksheet",
      ctaHref: "/en/contact",
      sections: {
        artifactsTitle: "ROI artifacts",
        artifactsSubtitle: "Financial model structure with assumptions, TCO formulas, and payback period calculation.",
        methodologyTitle: "Formula and model logic",
        methodologyBody:
          "We evaluate expected savings by scenario, account for TCO and operational overhead, then set payback thresholds before delivery starts.",
        metricsTitle: "Core model inputs",
        faqTitle: "ROI FAQ",
      },
      artifacts: [
        { ...sharedArtifacts.roi, description: "Sample ROI worksheet with assumptions, TCO, and payback logic." },
        { ...sharedArtifacts.evidence, description: "Quality metrics baseline tied to business-level outcomes." },
      ],
      metrics: [
        {
          metric: "Annual Savings",
          definition: "Total annualized savings after the AI solution reaches target maturity.",
          source: "Finance model",
          period: "Annualized",
        },
        {
          metric: "Payback Period",
          definition: "Months required to reach break-even from project launch.",
          source: "ROI worksheet",
          period: "Monthly tracking",
        },
      ],
      faqs: [
        {
          question: "Can ROI be estimated without historical data?",
          answer: "Yes for directional modeling, but final economic contracts require a baseline sample, usually 4-8 weeks.",
        },
      ],
    },
  },
}

export const evidencePageKeys: EvidencePageKey[] = [
  "evidence",
  "security-compliance",
  "sla-support",
  "roi-methodology",
]

export function getEvidencePageContent(locale: EvidenceLocale, key: EvidencePageKey): EvidencePageContent {
  return evidencePagesByLocale[locale][key]
}

if (typeof process !== "undefined") {
  for (const key of evidencePageKeys) {
    const ruH1 = evidencePagesByLocale.ru[key].h1
    const enH1 = evidencePagesByLocale.en[key].h1
    if (ruH1 === enH1) {
      throw new Error(
        `[evidence-pages-content] Duplicate H1 between RU and EN for "${key}": "${ruH1}". RU H1 must differ from EN H1.`
      )
    }
  }
}

