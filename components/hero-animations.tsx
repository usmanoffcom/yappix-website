"use client"

import { useLayoutEffect } from "react"
import { registerGSAP, gsap } from "@/lib/gsap-init"

export function HeroAnimations() {
  useLayoutEffect(() => {
    if (typeof window === "undefined") return

    const section = document.querySelector("[data-hero-section]")
    if (!section) return

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      section.classList.remove("hero-gsap-hide")
      return
    }

    registerGSAP()

    const safetyId = window.setTimeout(() => {
      section.classList.remove("hero-gsap-hide")
    }, 4500)

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

      tl.set(
        [
          "[data-hero-badges]",
          "[data-hero-headline]",
          "[data-hero-desc]",
          "[data-hero-ctas]",
          "[data-hero-stats]",
          "[data-scroll-indicator]",
        ],
        { visibility: "visible" },
      )

      tl.from("[data-hero-badges] > *", {
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.08,
      })

      // Headline word-by-word reveal
      const headline = section.querySelector("[data-hero-headline]")
      if (headline) {
        const text = headline.textContent || ""
        const words = text.split(" ")
        headline.innerHTML = words
          .map((w) => `<span class="inline-block overflow-hidden"><span class="hero-word inline-block">${w}</span></span>`)
          .join(" ")

        tl.from(
          ".hero-word",
          {
            y: "100%",
            opacity: 0,
            duration: 0.6,
            stagger: 0.04,
            ease: "power4.out",
          },
          "-=0.2",
        )
      }

      // Description fade up
      tl.from(
        "[data-hero-desc]",
        {
          y: 30,
          opacity: 0,
          duration: 0.7,
        },
        "-=0.3",
      )

      // CTA buttons stagger
      tl.from(
        "[data-hero-ctas] > *",
        {
          y: 20,
          opacity: 0,
          scale: 0.9,
          duration: 0.5,
          stagger: 0.12,
        },
        "-=0.3",
      )

      // Stat cards stagger with counter
      const statCards = section.querySelectorAll("[data-stat-card]")
      tl.from(
        statCards,
        {
          y: 40,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
        },
        "-=0.2",
      )

      // Scroll indicator
      tl.from(
        "[data-scroll-indicator]",
        {
          opacity: 0,
          y: -10,
          duration: 0.5,
        },
        "-=0.2",
      )

      tl.eventCallback("onComplete", () => {
        section.classList.remove("hero-gsap-hide")
      })
    }, section)

    return () => {
      window.clearTimeout(safetyId)
      ctx.revert()
      section.classList.remove("hero-gsap-hide")
    }
  }, [])

  return null
}
