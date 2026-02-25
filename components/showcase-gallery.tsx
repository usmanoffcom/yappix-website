"use client"

import Image from "next/image"
import { useRef, useState, useEffect } from "react"

const showcaseItems = [
  { src: "/images/4cc28332931093.5c18cb73b0830.gif", altRu: "Анимация интерфейса веб-приложения", altEn: "Web application interface animation" },
  { src: "/images/05f1e332931093.589da5ec81ead.gif", altRu: "Пример UX-анимации пользовательского сценария", altEn: "UX animation example for a user flow" },
  { src: "/images/315b7632931093.578641cd9a891.gif", altRu: "Интерактивный экран цифрового продукта", altEn: "Interactive screen of a digital product" },
  { src: "/images/3793ab32931093.5c5d279a753e3.gif", altRu: "Детализация UI-компонентов и переходов", altEn: "Detailed UI components and transitions" },
  { src: "/images/001.gif", altRu: "Сценарий взаимодействия в мобильном интерфейсе", altEn: "Interaction scenario in a mobile interface" },
  { src: "/images/ezgif-7c88f3d1be0e62.gif", altRu: "Демонстрация анимации интерфейса продукта", altEn: "Product interface animation demonstration" },
]

// Компонент для lazy loading отдельного GIF
function LazyGifItem({ src, alt, index }: { src: string; alt: string; index: number }) {
  const [isVisible, setIsVisible] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

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
    <div
      ref={ref}
      className="flex-shrink-0 relative rounded-xl overflow-hidden bg-background border border-border hover:border-primary/50 transition-colors group"
    >
      <div className="relative w-[300px] sm:w-[350px] md:w-[400px] aspect-[4/3] bg-muted">
        {/* Placeholder skeleton */}
        {!isLoaded && (
          <div className="absolute inset-0 bg-gradient-to-r from-muted via-muted-foreground/10 to-muted animate-pulse" />
        )}
        
        {/* Загружаем изображение только когда элемент виден */}
        {isVisible && (
          <Image
            src={src}
            alt={alt}
            fill
            className={`object-cover group-hover:scale-105 transition-all duration-500 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
            unoptimized={src.endsWith('.gif')}
            loading="lazy"
            onLoad={() => setIsLoaded(true)}
          />
        )}
      </div>
    </div>
  )
}

const showcaseHeadByLocale = {
  ru: { headline: "Наши работы в деталях", body: "Примеры UI/UX анимаций и интерфейсов, которые мы создаём для клиентов" },
  en: { headline: "Our Work in Detail", body: "Examples of UI/UX animations and interfaces we build for clients" },
}

export function ShowcaseGallery({ locale = "ru" }: { locale?: "ru" | "en" }) {
  const [isInView, setIsInView] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const head = showcaseHeadByLocale[locale]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { rootMargin: "200px", threshold: 0 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-card overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {head.headline}
          </h2>
          <p className="text-lg text-muted-foreground">
            {head.body}
          </p>
        </div>
      </div>
      
      <div className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth px-4">
        {isInView ? (
          showcaseItems.map((item, index) => (
            <LazyGifItem
              key={index}
              src={item.src}
              alt={locale === "ru" ? item.altRu : item.altEn}
              index={index}
            />
          ))
        ) : (
          // Placeholder пока секция не видна
          Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="flex-shrink-0 relative rounded-xl overflow-hidden bg-muted border border-border"
            >
              <div className="w-[300px] sm:w-[350px] md:w-[400px] aspect-[4/3]" />
            </div>
          ))
        )}
      </div>
    </section>
  )
}
