"use client"

import { useRef, useCallback, useEffect } from "react"
import { registerGSAP, gsap } from "@/lib/gsap-init"

export function useMagnetic(strength: number = 0.3) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    if (typeof window === "undefined") return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    if (window.matchMedia("(pointer: coarse)").matches) return

    registerGSAP()

    const el = ref.current
    if (!el) return

    const xTo = gsap.quickTo(el, "x", { duration: 0.4, ease: "power3.out" })
    const yTo = gsap.quickTo(el, "y", { duration: 0.4, ease: "power3.out" })

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      xTo((e.clientX - cx) * strength)
      yTo((e.clientY - cy) * strength)
    }

    const handleLeave = () => {
      xTo(0)
      yTo(0)
    }

    el.addEventListener("mousemove", handleMove)
    el.addEventListener("mouseleave", handleLeave)
    return () => {
      el.removeEventListener("mousemove", handleMove)
      el.removeEventListener("mouseleave", handleLeave)
    }
  }, [strength])

  return ref
}

export function useTilt(maxDeg: number = 6) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    if (typeof window === "undefined") return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    if (window.matchMedia("(pointer: coarse)").matches) return

    registerGSAP()

    const el = ref.current
    if (!el) return

    el.style.transformStyle = "preserve-3d"
    el.style.perspective = "800px"

    const rotXTo = gsap.quickTo(el, "rotateX", { duration: 0.4, ease: "power3.out" })
    const rotYTo = gsap.quickTo(el, "rotateY", { duration: 0.4, ease: "power3.out" })

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5
      rotXTo(-y * maxDeg)
      rotYTo(x * maxDeg)
    }

    const handleLeave = () => {
      rotXTo(0)
      rotYTo(0)
    }

    el.addEventListener("mousemove", handleMove)
    el.addEventListener("mouseleave", handleLeave)
    return () => {
      el.removeEventListener("mousemove", handleMove)
      el.removeEventListener("mouseleave", handleLeave)
    }
  }, [maxDeg])

  return ref
}
