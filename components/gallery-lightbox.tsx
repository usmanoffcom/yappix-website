"use client"

import { useState, useCallback, useEffect } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

interface GalleryWithLightboxProps {
  images: string[]
  title: string
  locale?: "ru" | "en"
}

export function GalleryWithLightbox({ images, title, locale = "ru" }: GalleryWithLightboxProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openLightbox = (index: number) => {
    setCurrentIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }, [images.length])

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }, [images.length])

  // Keyboard navigation
  useEffect(() => {
    if (!lightboxOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox()
      if (e.key === "ArrowLeft") goToPrevious()
      if (e.key === "ArrowRight") goToNext()
    }

    document.addEventListener("keydown", handleKeyDown)
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = ""
    }
  }, [lightboxOpen, goToPrevious, goToNext])

  const isVideo = (src: string) => src?.endsWith('.mp4')

  return (
    <>
      {/* Gallery Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {images.map((media, index) => (
          <div
            key={index}
            className="relative aspect-[4/3] rounded-lg sm:rounded-xl overflow-hidden bg-card border border-border cursor-pointer group"
            onClick={() => !isVideo(media) && openLightbox(index)}
          >
            {isVideo(media) ? (
              <video
                src={media}
                autoPlay
                loop
                muted
                playsInline
                className="object-cover w-full h-full"
              />
            ) : (
              <>
                <Image
                  src={media || "/placeholder.svg"}
                  alt={
                    locale === "ru"
                      ? `${title} — скриншот проекта ${index + 1}`
                      : `${title} — project screenshot ${index + 1}`
                  }
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-3">
                    <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label={locale === "ru" ? "Закрыть" : "Close"}
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Navigation - Previous */}
          {images.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); goToPrevious() }}
              className="absolute left-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label={locale === "ru" ? "Предыдущее изображение" : "Previous image"}
            >
              <ChevronLeft className="w-8 h-8 text-white" />
            </button>
          )}

          {/* Image */}
          <div 
            className="relative w-full h-full max-w-6xl max-h-[90vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            {!isVideo(images[currentIndex]) && (
              <Image
                src={images[currentIndex]}
                alt={
                  locale === "ru"
                    ? `${title} — скриншот проекта ${currentIndex + 1}`
                    : `${title} — project screenshot ${currentIndex + 1}`
                }
                fill
                className="object-contain"
                priority
              />
            )}
          </div>

          {/* Navigation - Next */}
          {images.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); goToNext() }}
              className="absolute right-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label={locale === "ru" ? "Следующее изображение" : "Next image"}
            >
              <ChevronRight className="w-8 h-8 text-white" />
            </button>
          )}

          {/* Counter */}
          {images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-sm">
              {currentIndex + 1} / {images.length}
            </div>
          )}
        </div>
      )}
    </>
  )
}
