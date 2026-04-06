"use client"

import { useRef, useLayoutEffect } from "react"
import { registerGSAP, gsap, ScrollTrigger } from "@/lib/gsap-init"

export function useGSAP(callback: (gsapInstance: typeof gsap) => (() => void) | void, deps: unknown[] = []) {
  const scope = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    if (typeof window === "undefined") return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    registerGSAP()
    const cleanup = callback(gsap)
    return () => {
      cleanup?.()
      ScrollTrigger.getAll().forEach((t) => {
        if (scope.current && scope.current.contains(t.trigger as Element)) {
          t.kill()
        }
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return scope
}

export function useScrollReveal(
  selector: string,
  options: {
    y?: number
    x?: number
    opacity?: number
    duration?: number
    stagger?: number
    delay?: number
    start?: string
    rotateX?: number
    scale?: number
  } = {},
) {
  const containerRef = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    if (typeof window === "undefined") return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    registerGSAP()
    const ctx = gsap.context(() => {
      const elements = containerRef.current?.querySelectorAll(selector)
      if (!elements?.length) return

      gsap.from(elements, {
        y: options.y ?? 40,
        x: options.x ?? 0,
        opacity: options.opacity ?? 0,
        duration: options.duration ?? 0.8,
        stagger: options.stagger ?? 0.1,
        delay: options.delay ?? 0,
        rotateX: options.rotateX ?? 0,
        scale: options.scale ?? 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: options.start ?? "top 85%",
          toggleActions: "play none none reverse",
        },
      })
    }, containerRef)

    return () => ctx.revert()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return containerRef
}
