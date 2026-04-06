"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, Volume2, VolumeX } from "lucide-react"
import Link from "next/link"
import { useRef, useState, useEffect } from "react"

const casesByLocale = {
  ru: [
    { slug: "myunion-platform", title: "MyUnion Pro — платформа управления профсоюзами", category: "SaaS / AI", description: "Полнофункциональное веб-приложение для управления профсоюзами с чат-ботами на базе ИИ и автоматическим созданием документов", metrics: ["4 человека", "3 месяца", "50K+ пользователей"], tags: ["Next.js", "GPT-4", "PostgreSQL", "LangChain"], image: "/images/image.png", video: undefined as string | undefined },
    { slug: "global-olive-corporation", title: "Global Olive Corp. — Инвестиционная платформа", category: "Marketing / eCommerce", description: "Инвестиционная платформа для оливковых деревьев с прозрачной системой владения, персонализированными сертификатами и возможностью подарить дерево.", metrics: ["+35% конверсия", "500+ деревьев", "Подарки 120+"], tags: ["React", "Node.js", "Stripe", "PostgreSQL"], image: "/images/image copy.png", video: "/images/usmanoff-cases/1765726788099-Olive.mp4" },
    { slug: "priboy-hotels", title: "Grand Hotels & SPA Priboy — сеть отелей", category: "Hospitality / Marketing", description: "Комплексная разработка, техническая поддержка, SEO-продвижение и SMM для сети премиальных отелей на Черноморском побережье.", metrics: ["+180% трафик", "+65% прямые брони", "ТОП-3 Яндекс"], tags: ["Next.js", "SEO", "SMM", "VK Ads"], image: "/images/priboy.avif", video: undefined },
    { slug: "ai-food-assistant", title: "Ассистент заявок — голосовой заказ еды", category: "AI / Voice", description: "Голосовой AI-ассистент для заказа еды без касания экрана. Идеально для водителей за рулём.", metrics: ["+40% конверсия", "100% hands-free", "30 сек заказ"], tags: ["GPT-4", "Voice AI", "Speech Recognition", "Stripe"], image: undefined, video: "/images/checkout_ai_2.mp4" },
  ],
  en: [
    { slug: "myunion-platform", title: "MyUnion Pro — Trade Union Management Platform", category: "SaaS / AI", description: "Full-featured web application for trade union management with AI chatbots and automated document generation.", metrics: ["1 person", "3 months", "50K+ users"], tags: ["Next.js", "GPT-4", "PostgreSQL", "LangChain"], image: "/images/image.png", video: undefined },
    { slug: "global-olive-corporation", title: "Global Olive Corp. — Investment Platform", category: "Marketing / eCommerce", description: "Investment platform for olive trees with transparent ownership, personalized certificates, and gifting.", metrics: ["+35% conversion", "500+ trees", "120+ gifts"], tags: ["React", "Node.js", "Stripe", "PostgreSQL"], image: "/images/image copy.png", video: "/images/usmanoff-cases/1765726788099-Olive.mp4" },
    { slug: "priboy-hotels", title: "Grand Hotels & SPA Priboy — Hotel Chain", category: "Hospitality / Marketing", description: "Full-cycle digital services for a premium hotel chain: development, SEO, SMM on the Black Sea coast.", metrics: ["+180% traffic", "+65% direct bookings", "TOP-3 Yandex"], tags: ["Next.js", "SEO", "SMM", "VK Ads"], image: "/images/priboy.avif", video: undefined },
    { slug: "ai-food-assistant", title: "Order Assistant — Voice Food Ordering", category: "AI / Voice", description: "Voice AI assistant for hands-free food ordering. Ideal for drivers on the road.", metrics: ["+40% conversion", "100% hands-free", "30 sec order"], tags: ["GPT-4", "Voice AI", "Speech Recognition", "Stripe"], image: undefined, video: "/images/checkout_ai_2.mp4" },
  ],
}

const casesHeadByLocale = {
  ru: { badge: "Кейсы", headline: "Проекты, которыми гордимся", body: "Наши клиенты привлекают раунды инвестиций и масштабируют бизнес благодаря технологическим решениям, которые мы создаём", allCases: "Все кейсы", discuss: "Обсудить ваш проект" },
  en: { badge: "Cases", headline: "Projects We're Proud Of", body: "Our clients raise investment rounds and scale businesses thanks to the technology solutions we build", allCases: "All Case Studies", discuss: "Discuss Your Project" },
}

// Lazy loading video component
function VideoCard({ src, title }: { src: string; title: string }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMuted, setIsMuted] = useState(true)
  const [isHovered, setIsHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: "100px", threshold: 0.1 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted
      setIsMuted(videoRef.current.muted)
    }
  }

  return (
    <div 
      ref={containerRef}
      className="relative aspect-video overflow-hidden bg-muted"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isVisible ? (
        <video
          ref={videoRef}
          src={src}
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          title={title}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-r from-muted via-muted-foreground/10 to-muted animate-pulse" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
      {/* Unmute button */}
      {isVisible && (
        <button
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            toggleMute()
          }}
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 text-white transition-opacity duration-300 hover:bg-black/80 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        >
          {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
        </button>
      )}
    </div>
  )
}

// Lazy loading image component
function LazyImage({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: "100px", threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="relative aspect-video overflow-hidden bg-muted">
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-muted via-muted-foreground/10 to-muted animate-pulse" />
      )}
      {isVisible && (
        <img
          src={src}
          alt={alt || "Кейс YappiX"}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          className={`object-cover w-full h-full group-hover:scale-105 transition-all duration-500 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
    </div>
  )
}

export function CasesSection({ locale = "ru" }: { locale?: "ru" | "en" }) {
  const cases = casesByLocale[locale]
  const head = casesHeadByLocale[locale]
  const casesBase = locale === "en" ? "/en/cases" : "/kejsy"
  const contactAnchor = locale === "en" ? "/en/contact" : "#contact"
  return (
    <section id="cases" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="outline" className="mb-4">
            {head.badge}
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            {head.headline}
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            {head.body}
          </p>
        </div>

        {/* Cases Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {cases.map((caseItem, index) => (
            <Link key={index} href={`${casesBase}/${caseItem.slug}`} className="block">
              <Card className="overflow-hidden glass hover:border-primary/30 transition-all group !p-0 !gap-0 cursor-pointer h-full">
                {/* Image or Video */}
                {caseItem.video ? (
                  <VideoCard src={caseItem.video} title={caseItem.title} />
                ) : (
                  <LazyImage src={caseItem.image || "/placeholder.svg"} alt={caseItem.title || "Кейс YappiX"} />
                )}

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
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center gap-4 mt-12">
          <Button variant="default" size="lg" asChild>
            <Link href={locale === "en" ? "/en/cases" : "/kejsy"}>
              {head.allCases}
              <ArrowUpRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href={contactAnchor}>
              {head.discuss}
              <ArrowUpRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
