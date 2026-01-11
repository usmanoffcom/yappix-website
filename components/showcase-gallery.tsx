"use client"

import Image from "next/image"
import { useRef, useEffect, useState } from "react"

const showcaseItems = [
  { src: "/images/4cc28332931093.5c18cb73b0830.gif", alt: "UI/UX Animation 1" },
  { src: "/images/05f1e332931093.589da5ec81ead.gif", alt: "UI/UX Animation 2" },
  { src: "/images/315b7632931093.578641cd9a891.gif", alt: "UI/UX Animation 3" },
  { src: "/images/3793ab32931093.5c5d279a753e3.gif", alt: "UI/UX Animation 4" },
  { src: "/images/001.gif", alt: "UI/UX Animation 5" },
  { src: "/images/ezgif-7c88f3d1be0e62.gif", alt: "UI/UX Animation 6" },
]

export function ShowcaseGallery() {
  const sectionRef = useRef<HTMLElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const section = sectionRef.current
    const scrollContainer = scrollRef.current
    if (!section || !scrollContainer) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsActive(entry.isIntersecting)
        })
      },
      {
        threshold: 0.2,
        rootMargin: "0px",
      }
    )

    observer.observe(section)

    const handleWheel = (e: WheelEvent) => {
      if (!isActive || !scrollContainer) return

      const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth
      const currentScroll = scrollContainer.scrollLeft
      const scrollDelta = e.deltaY * 0.8
      
      // Проверяем, достигли ли мы границ с небольшим допуском
      const isAtEnd = currentScroll >= maxScroll - 10
      const isAtStart = currentScroll <= 10

      // Если прокрутка вниз (вправо по галерее)
      if (e.deltaY > 0) {
        if (!isAtEnd) {
          // Блокируем скролл страницы и прокручиваем галерею
          e.preventDefault()
          e.stopPropagation()
          scrollContainer.scrollLeft = Math.min(currentScroll + scrollDelta, maxScroll)
        }
        return
      }

      // Если прокрутка вверх (влево по галерее)
      if (e.deltaY < 0) {
        if (!isAtStart) {
          // Блокируем скролл страницы и прокручиваем галерею
          e.preventDefault()
          e.stopPropagation()
          scrollContainer.scrollLeft = Math.max(currentScroll + scrollDelta, 0)
        }
        return
      }
    }

    // Добавляем обработчик с passive: false для возможности preventDefault
    window.addEventListener("wheel", handleWheel, { passive: false })

    return () => {
      observer.disconnect()
      window.removeEventListener("wheel", handleWheel)
    }
  }, [isActive])

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-card overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Наши работы в деталях
          </h2>
          <p className="text-lg text-muted-foreground">
            Примеры UI/UX анимаций и интерфейсов, которые мы создаём для клиентов
          </p>
        </div>
      </div>
      
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-scroll scrollbar-hide"
        style={{
          scrollBehavior: "smooth",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {showcaseItems.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 relative rounded-xl overflow-hidden bg-background border border-border hover:border-primary/50 transition-colors group"
          >
            <div className="relative w-[300px] sm:w-[350px] md:w-[400px] aspect-[4/3]">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                unoptimized
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
