"use client"

import { useEffect } from "react"

/** GSAP + reveal: откладываем до idle + отдельный чанк, чтобы снизить TBT на мобильных. */
export function ScrollAnimations() {
  useEffect(() => {
    if (typeof window === "undefined") return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    let cancelled = false
    let idleCallbackId: number | undefined
    let fallbackTimeoutId: ReturnType<typeof setTimeout> | undefined
    let innerCleanup: (() => void) | undefined

    const run = async () => {
      const { registerGSAP, gsap, ScrollTrigger } = await import("@/lib/gsap-init")
      if (cancelled) return

      registerGSAP()

      ScrollTrigger.getAll().forEach((t) => t.kill())

      const main = document.querySelector("main")
      if (!main || cancelled) return

      const staleEls = Array.from(main.querySelectorAll("section:not([data-hero-section]) *")).filter(
        (el) => !(el instanceof SVGElement || el.closest("svg")),
      )
      gsap.set(staleEls, { clearProps: "all" })

      const style = document.createElement("style")
      style.id = "reveal-styles"
      if (cancelled) return

      style.textContent = `
      .reveal-hidden {
        opacity: 0 !important;
        transform: translateY(28px) !important;
        transition: opacity 0.6s cubic-bezier(0.16,1,0.3,1),
                    transform 0.6s cubic-bezier(0.16,1,0.3,1) !important;
      }
      .reveal-visible {
        opacity: 1 !important;
        transform: translateY(0) !important;
      }
    `
      document.head.appendChild(style)

      if (cancelled) {
        style.remove()
        return
      }

      const targets: Element[] = []

      main.querySelectorAll(":scope > section:not([data-hero-section])").forEach((section) => {
        const heading = section.querySelector("h2")
        const lead = heading?.closest(".text-center")?.querySelector("p")
        const grid = section.querySelector("[class*='grid-cols']")
        const video = section.querySelector(".aspect-video")
        const founderCard = section.querySelector("[class*='ring-primary']")
        const container = section.querySelector(".container")

        if (heading) targets.push(heading)
        if (lead) targets.push(lead)
        if (grid) {
          Array.from(grid.children).forEach((child, i) => {
            ;(child as HTMLElement).style.transitionDelay = `${i * 80}ms`
            targets.push(child)
          })
        }
        if (video) targets.push(video)
        if (founderCard) targets.push(founderCard)
        if (!heading && !grid && container) targets.push(container)
      })

      targets.forEach((el) => el.classList.add("reveal-hidden"))

      let observerRef: IntersectionObserver | null = null

      requestAnimationFrame(() => {
        if (cancelled) {
          style.remove()
          targets.forEach((el) => {
            el.classList.remove("reveal-hidden", "reveal-visible")
            ;(el as HTMLElement).style.transitionDelay = ""
          })
          return
        }
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("reveal-visible")
                observer.unobserve(entry.target)
              }
            })
          },
          { threshold: 0.05, rootMargin: "0px 0px -30px 0px" },
        )

        targets.forEach((el) => observer.observe(el))
        observerRef = observer
      })

      initMicroInteractions()

      innerCleanup = () => {
        observerRef?.disconnect()
        style.remove()
        targets.forEach((el) => {
          el.classList.remove("reveal-hidden", "reveal-visible")
          ;(el as HTMLElement).style.transitionDelay = ""
        })
      }
    }

    const start = () => {
      void run()
    }

    if ("requestIdleCallback" in window) {
      idleCallbackId = window.requestIdleCallback(start, { timeout: 2500 })
    } else {
      fallbackTimeoutId = setTimeout(start, 200)
    }

    return () => {
      cancelled = true
      if (idleCallbackId !== undefined) window.cancelIdleCallback(idleCallbackId)
      if (fallbackTimeoutId !== undefined) clearTimeout(fallbackTimeoutId)
      document.getElementById("reveal-styles")?.remove()
      innerCleanup?.()
    }
  }, [])

  return null
}

function initMicroInteractions() {
  if (typeof window === "undefined") return
  if (window.matchMedia("(pointer: coarse)").matches) return

  document.querySelectorAll<HTMLElement>("[data-stat-card]").forEach((card) => {
    card.style.transition = "transform 0.3s cubic-bezier(0.16,1,0.3,1)"
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5
      card.style.transform = `perspective(600px) rotateX(${-y * 5}deg) rotateY(${x * 5}deg)`
    })
    card.addEventListener("mouseleave", () => {
      card.style.transform = ""
    })
  })
}
