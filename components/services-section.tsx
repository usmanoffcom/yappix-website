"use client"

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
import { motion } from "framer-motion"

const services = [
  {
    icon: Globe,
    title: "Веб-разработка",
    description: "Корпоративные сайты, интернет-магазины, веб-сервисы и порталы любой сложности",
    tags: ["Next.js", "React", "Vue", "Node.js"],
    popular: true,
  },
  {
    icon: Smartphone,
    title: "Мобильные приложения",
    description: "Нативные и кроссплатформенные приложения для iOS и Android",
    tags: ["React Native", "Flutter", "Swift", "Kotlin"],
    popular: true,
  },
  {
    icon: Bot,
    title: "AI и чат-боты",
    description: "Интеллектуальные ассистенты, RAG-системы, интеграция с GPT и LLM",
    tags: ["ChatGPT", "Claude", "LangChain", "RAG"],
    popular: true,
  },
  {
    icon: Cloud,
    title: "SaaS / PaaS решения",
    description: "Облачные платформы и сервисы с подписной моделью монетизации",
    tags: ["Multi-tenant", "Billing", "Analytics"],
    popular: false,
  },
  {
    icon: CreditCard,
    title: "FinTech",
    description: "Платёжные системы, банкинг, трейдинг платформы, криптовалютные решения",
    tags: ["PCI DSS", "KYC/AML", "Blockchain"],
    popular: false,
  },
  {
    icon: Server,
    title: "DevOps услуги",
    description: "CI/CD пайплайны, контейнеризация, облачная инфраструктура, мониторинг",
    tags: ["Docker", "Kubernetes", "AWS", "Terraform"],
    popular: false,
  },
  {
    icon: Search,
    title: "SEO продвижение",
    description: "Техническая оптимизация, контент-маркетинг, продвижение в Яндекс и Google",
    tags: ["Яндекс", "Google", "Контент"],
    popular: false,
  },
  {
    icon: Share2,
    title: "SMM маркетинг",
    description: "Стратегия продвижения в социальных сетях, таргетированная реклама",
    tags: ["VK", "Telegram", "Таргет"],
    popular: false,
  },
  {
    icon: Database,
    title: "Интеграции и API",
    description: "Интеграция с 1C, CRM, ERP системами, разработка REST и GraphQL API",
    tags: ["1C", "Bitrix24", "AmoCRM"],
    popular: false,
  },
  {
    icon: LineChart,
    title: "Аналитика данных",
    description: "BI-системы, дашборды, предиктивная аналитика и машинное обучение",
    tags: ["Python", "ML", "Tableau"],
    popular: false,
  },
  {
    icon: Palette,
    title: "UX/UI дизайн",
    description: "Исследования, прототипирование, дизайн-системы, брендинг",
    tags: ["Figma", "Design System"],
    popular: false,
  },
  {
    icon: ShieldCheck,
    title: "Кибербезопасность",
    description: "Аудит безопасности, пентесты, защита данных, соответствие стандартам",
    tags: ["Pentest", "GDPR", "152-ФЗ"],
    popular: false,
  },
]

export function ServicesSection() {
  return (
    <section id="uslugi" className="section-padding">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12 lg:mb-16">
          <Badge variant="outline" className="mb-3 sm:mb-4">
            Услуги
          </Badge>
          <h2 className="text-headline text-foreground mb-4 sm:mb-5 text-balance">Полный цикл digital-разработки</h2>
          <p className="text-body-lg text-pretty">
            От идеи до масштабирования — реализуем проекты любой сложности с использованием современных технологий и
            AI-инструментов
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-card hover:bg-secondary/50 transition-colors border-border group cursor-pointer">
                <CardHeader className="pb-3 sm:pb-4">
                  <div className="flex items-start justify-between gap-2">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                      <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    {service.popular && (
                      <Badge className="bg-primary/20 text-primary border-0 text-[10px] sm:text-xs px-2 py-0.5">
                        Популярно
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-base sm:text-lg text-foreground mt-3 sm:mt-4 leading-tight">
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
