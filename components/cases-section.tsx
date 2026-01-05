"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

const cases = [
  {
    title: "FinTech платформа",
    category: "FinTech / SaaS",
    description: "Платёжная платформа с интеграцией банковских API, KYC/AML верификацией и real-time аналитикой",
    metrics: ["$2M привлечено", "50K пользователей", "99.9% uptime"],
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "AI-ассистент для e-commerce",
    category: "AI / Чат-бот",
    description: "Умный консультант на базе GPT с RAG-системой для интернет-магазина косметики",
    metrics: ["+40% конверсия", "-60% нагрузка на поддержку", "24/7 работа"],
    tags: ["ChatGPT", "LangChain", "Pinecone", "Next.js"],
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Маркетплейс услуг",
    category: "Веб-платформа",
    description: "Агрегатор локальных услуг с системой бронирования, отзывами и интеграцией платежей",
    metrics: ["100K MAU", "15K бизнесов", "4.8★ рейтинг"],
    tags: ["Next.js", "Supabase", "React Native"],
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "DevOps автоматизация",
    category: "DevOps / Инфраструктура",
    description: "Полная автоматизация CI/CD для крупного e-commerce с микросервисной архитектурой",
    metrics: ["10x быстрее деплой", "-70% затрат на инфру", "0 даунтайм"],
    tags: ["Kubernetes", "Terraform", "GitLab CI", "AWS"],
    image: "/placeholder.svg?height=400&width=600",
  },
]

export function CasesSection() {
  return (
    <section id="cases" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Кейсы
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Проекты, которыми гордимся
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Наши клиенты привлекают раунды инвестиций и масштабируют бизнес благодаря технологическим решениям, которые
            мы создаём
          </p>
        </div>

        {/* Cases Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {cases.map((caseItem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden bg-card border-border hover:border-primary/30 transition-colors group">
                {/* Image */}
                <div className="relative aspect-video overflow-hidden bg-secondary">
                  <img
                    src={caseItem.image || "/placeholder.svg"}
                    alt={caseItem.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                </div>

                <CardContent className="p-6">
                  {/* Category */}
                  <Badge variant="secondary" className="mb-4 text-xs">
                    {caseItem.category}
                  </Badge>

                  {/* Title & Description */}
                  <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {caseItem.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{caseItem.description}</p>

                  {/* Metrics */}
                  <div className="flex flex-wrap gap-4 mb-4">
                    {caseItem.metrics.map((metric, mIndex) => (
                      <div key={mIndex} className="text-sm">
                        <span className="text-primary font-semibold">{metric}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {caseItem.tags.map((tag, tIndex) => (
                      <Badge key={tIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <Link href="#contact">
              Обсудить ваш проект
              <ArrowUpRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
