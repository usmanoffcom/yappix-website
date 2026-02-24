"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Globe,
  Smartphone,
  Bot,
  Cloud,
  CreditCard,
  Search,
  Share2,
  Server,
  Database,
  LineChart,
  Palette,
  ShieldCheck,
} from "lucide-react"

const servicesByLocale = {
  ru: [
    { icon: Globe, title: "Веб-разработка", description: "Корпоративные сайты, порталы и веб-сервисы как основа для последующей автоматизации процессов", tags: ["Next.js", "React", "Vue", "Node.js"], popular: true, href: "/uslugi/razrabotka-sajtov" },
    { icon: Smartphone, title: "Мобильные приложения", description: "Нативные и кроссплатформенные приложения с AI-модулями и интеграциями в операционные процессы", tags: ["React Native", "Flutter", "Swift", "Kotlin"], popular: true, href: "/uslugi/mobilnye-prilozheniya" },
    { icon: Bot, title: "AI-автоматизация процессов", description: "Поиск по базе знаний, проверка документов, обработка обратной связи и ассистенты отделов с расчётом ROI", tags: ["ChatGPT", "Claude", "LangChain", "RAG"], popular: true, href: "/uslugi/ai-chat-boty" },
    { icon: Cloud, title: "SaaS / PaaS решения", description: "Облачные платформы и сервисы с подписной моделью монетизации", tags: ["Multi-tenant", "Billing", "Analytics"], popular: false, href: "/uslugi/saas-paas" },
    { icon: CreditCard, title: "FinTech", description: "Платёжные системы, банкинг, трейдинг платформы, криптовалютные решения", tags: ["PCI DSS", "KYC/AML", "Blockchain"], popular: false, href: "/kontakty?service=fintech" },
    { icon: Server, title: "DevOps услуги", description: "CI/CD пайплайны, контейнеризация, облачная инфраструктура, мониторинг", tags: ["Docker", "Kubernetes", "AWS", "Terraform"], popular: false, href: "/kontakty?service=devops" },
    { icon: Search, title: "SEO продвижение", description: "Техническая оптимизация, контент-маркетинг, продвижение в Яндекс и Google", tags: ["Яндекс", "Google", "Контент"], popular: false, href: "/uslugi/seo-prodvizhenie" },
    { icon: Share2, title: "SMM маркетинг", description: "Стратегия продвижения в социальных сетях, таргетированная реклама", tags: ["VK", "Telegram", "Таргет"], popular: false, href: "/kontakty?service=smm" },
    { icon: Database, title: "Интеграции и API", description: "Интеграция с 1C, CRM, ERP системами, разработка REST и GraphQL API", tags: ["1C", "Bitrix24", "AmoCRM"], popular: false, href: "/kontakty?service=integrations" },
    { icon: LineChart, title: "Аналитика данных", description: "BI-системы, дашборды, предиктивная аналитика и машинное обучение", tags: ["Python", "ML", "Tableau"], popular: false, href: "/kontakty?service=analytics" },
    { icon: Palette, title: "UX/UI дизайн", description: "Исследования, прототипирование, дизайн-системы, брендинг", tags: ["Figma", "Design System"], popular: false, href: "/kontakty?service=design" },
    { icon: ShieldCheck, title: "Кибербезопасность", description: "Аудит безопасности, пентесты, защита данных, соответствие стандартам", tags: ["Pentest", "GDPR", "152-ФЗ"], popular: false, href: "/kontakty?service=security" },
  ],
  en: [
    { icon: Globe, title: "Web Development", description: "Corporate sites, e-commerce, web apps and portals of any complexity", tags: ["Next.js", "React", "Vue", "Node.js"], popular: true, href: "/en/contact?service=web" },
    { icon: Smartphone, title: "Mobile Apps", description: "Native and cross-platform applications for iOS and Android", tags: ["React Native", "Flutter", "Swift", "Kotlin"], popular: true, href: "/en/contact?service=mobile" },
    { icon: Bot, title: "AI & Chatbots", description: "Intelligent assistants, RAG systems, GPT and LLM integration", tags: ["ChatGPT", "Claude", "LangChain", "RAG"], popular: true, href: "/en/contact?service=ai" },
    { icon: Cloud, title: "SaaS / PaaS", description: "Cloud platforms and services with subscription monetization", tags: ["Multi-tenant", "Billing", "Analytics"], popular: false, href: "/en/contact?service=saas" },
    { icon: CreditCard, title: "FinTech", description: "Payment systems, banking, trading platforms, crypto solutions", tags: ["PCI DSS", "KYC/AML", "Blockchain"], popular: false, href: "/en/contact?service=fintech" },
    { icon: Server, title: "DevOps", description: "CI/CD pipelines, containerization, cloud infrastructure, monitoring", tags: ["Docker", "Kubernetes", "AWS", "Terraform"], popular: false, href: "/en/contact?service=devops" },
    { icon: Search, title: "SEO & Marketing", description: "Technical optimization, content marketing, Yandex & Google promotion", tags: ["Yandex", "Google", "Content"], popular: false, href: "/en/contact?service=seo" },
    { icon: Share2, title: "SMM Marketing", description: "Social media promotion strategy, targeted advertising", tags: ["VK", "Telegram", "Targeting"], popular: false, href: "/en/contact?service=smm" },
    { icon: Database, title: "Integrations & API", description: "Integration with 1C, CRM, ERP, REST and GraphQL API development", tags: ["1C", "Bitrix24", "AmoCRM"], popular: false, href: "/en/contact?service=integrations" },
    { icon: LineChart, title: "Data Analytics", description: "BI systems, dashboards, predictive analytics and ML", tags: ["Python", "ML", "Tableau"], popular: false, href: "/en/contact?service=analytics" },
    { icon: Palette, title: "UX/UI Design", description: "Research, prototyping, design systems, branding", tags: ["Figma", "Design System"], popular: false, href: "/en/contact?service=design" },
    { icon: ShieldCheck, title: "Cybersecurity", description: "Security audit, pentests, data protection, compliance", tags: ["Pentest", "GDPR"], popular: false, href: "/en/contact?service=security" },
  ],
} as const

const sectionByLocale = {
  ru: { badge: "Услуги", headline: "Сохраняем разработку, усиливаем автоматизацией", body: "Делаем сайты, приложения и SaaS, а также внедряем AI-контуры в процессы: от поиска информации до комплаенса и клиентского сервиса." },
  en: { badge: "Services", headline: "Full-Cycle Digital Development", body: "From idea to scaling — we deliver projects of any complexity using modern technologies and AI tools" },
}

const popularLabel = { ru: "Популярно", en: "Popular" }

export function ServicesSection({ locale = "ru" }: { locale?: "ru" | "en" }) {
  const services = servicesByLocale[locale]
  const section = sectionByLocale[locale]
  const popular = popularLabel[locale]
  return (
    <section id={locale === "en" ? "services" : "uslugi"} className="section-padding">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12 lg:mb-16">
          <Badge variant="outline" className="mb-3 sm:mb-4">
            {section.badge}
          </Badge>
          <h2 className="text-headline text-foreground mb-4 sm:mb-5 text-balance">{section.headline}</h2>
          <p className="text-body-lg text-pretty">
            {section.body}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 min-[1100px]:grid-cols-3 min-[1400px]:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {services.map((service, index) => (
            <Link key={index} href={service.href} className="animate-in fade-in slide-in-from-bottom-4 duration-500 block">
              <Card className="h-full bg-card hover:bg-secondary/50 transition-colors border-border group cursor-pointer hover:border-primary/30">
                <CardHeader className="pb-3 sm:pb-4">
                  <div className="flex items-start justify-between gap-2">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                      <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    {service.popular && (
                      <Badge className="bg-primary/20 text-primary border-0 text-[10px] sm:text-xs px-2 py-0.5">
                        {popular}
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-base sm:text-lg text-foreground mt-3 sm:mt-4 leading-tight group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {service.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="text-[10px] sm:text-xs bg-secondary text-secondary-foreground px-2 py-0.5"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
