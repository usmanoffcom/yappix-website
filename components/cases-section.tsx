"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, Volume2, VolumeX } from "lucide-react"
import Link from "next/link"
import { useRef, useState } from "react"

const cases = [
  {
    title: "Card2Card — MVP мобильного приложения",
    category: "FinTech / Mobile",
    description: "Мобильное приложение для переводов с карты на карту по всему миру. Автоматическая комиссия, простой перевод и ничего лишнего.",
    metrics: ["14 разработчиков", "VISA, MC, USDT", "EU, US, Asia, Africa"],
    tags: ["React Native", "Node.js", "VISA API", "Mastercard"],
    image: "/images/05f1e332931093.589da5ec81ead.gif",
  },
  {
    title: "Ассистент заявок — голосовой заказ еды",
    category: "AI / Voice",
    description: "Голосовой AI-ассистент для заказа еды без касания экрана. Идеально для водителей за рулём.",
    metrics: ["+40% конверсия", "100% hands-free", "30 сек заказ"],
    tags: ["GPT-4", "Voice AI", "Speech Recognition", "Stripe"],
    video: "/images/checkout_ai_2.mp4",
  },
  {
    title: "MyUnion Pro — платформа управления профсоюзами",
    category: "SaaS / AI",
    description: "Полнофункциональное веб-приложение для управления профсоюзами с чат-ботами на базе ИИ и автоматическим созданием документов",
    metrics: ["1 человек", "3 месяца", "50K+ пользователей"],
    tags: ["Next.js", "GPT-4", "PostgreSQL", "LangChain"],
    image: "/images/image.png",
  },
  {
    title: "Global Olive Corporation",
    category: "E-commerce / FinTech",
    description: "Полнофункциональная e-commerce платформа для инвестирования в оливковые деревья. Пользователи могут покупать деревья, получать сертификаты владения, дарить деревья другим и отслеживать активы. Включает админ-панель для управления инвентарем, заказами и пользователями.",
    metrics: ["$500K+ инвестиций", "1000+ деревьев", "Сертификаты NFT"],
    tags: ["Next.js", "Stripe", "PostgreSQL", "AWS"],
    image: "/images/image copy.png",
  },
]

function VideoCard({ src, title }: { src: string; title: string }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isMuted, setIsMuted] = useState(true)
  const [isHovered, setIsHovered] = useState(false)

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted
      setIsMuted(videoRef.current.muted)
    }
  }

  return (
    <div 
      className="relative aspect-video overflow-hidden bg-black"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <video
        ref={videoRef}
        src={src}
        autoPlay
        loop
        muted
        playsInline
        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
      {/* Unmute button */}
      <button
        onClick={toggleMute}
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 text-white transition-opacity duration-300 hover:bg-black/80 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
      >
        {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
      </button>
    </div>
  )
}

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
            <div key={index} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <Card className="overflow-hidden bg-card border-border hover:border-primary/30 transition-colors group !p-0 !gap-0">
                {/* Image or Video */}
                {caseItem.video ? (
                  <VideoCard src={caseItem.video} title={caseItem.title} />
                ) : (
                  <div className="relative aspect-video overflow-hidden bg-black">
                    <img
                      src={caseItem.image || "/placeholder.svg"}
                      alt={caseItem.title}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  </div>
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
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center gap-4 mt-12">
          <Button variant="default" size="lg" asChild>
            <Link href="/kejsy">
              Все кейсы
              <ArrowUpRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
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
