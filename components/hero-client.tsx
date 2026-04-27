"use client"

import Image from "next/image"
import { useState, useEffect, useRef, type ComponentType } from "react"

/** Мобильный декоративный робот — только после idle, без priority (не конкурирует с LCP). */
export function HeroMobileRobotBg({ locale }: { locale: "ru" | "en" }) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    let cancelled = false
    const run = () => {
      if (!cancelled) setMounted(true)
    }
    if (typeof window.requestIdleCallback === "function") {
      const id = window.requestIdleCallback(run, { timeout: 2500 })
      return () => {
        cancelled = true
        window.cancelIdleCallback(id)
      }
    }
    const t = setTimeout(run, 1800)
    return () => {
      cancelled = true
      clearTimeout(t)
    }
  }, [])
  if (!mounted) return null
  const robotAlt =
    locale === "en" ? "YappiX robot brand illustration" : "Фирменная иллюстрация робота YappiX"
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.15] xl:hidden">
      <Image
        src="/Robot.png"
        alt={robotAlt}
        width={900}
        height={1200}
        sizes="100vw"
        quality={68}
        loading="lazy"
        decoding="async"
        className="absolute bottom-0 left-1/2 h-[85%] w-auto max-w-none origin-bottom -translate-x-1/2 scale-150 object-contain object-bottom"
      />
    </div>
  )
}

function LazySpline({ scene, className = "" }: { scene: string; className?: string }) {
  const [SplineComp, setSplineComp] = useState<ComponentType<{ scene: string; onLoad?: () => void }> | null>(null)
  const [splineLoaded, setSplineLoaded] = useState(false)
  const mounted = useRef(true)

  useEffect(() => {
    mounted.current = true
    const load = () => {
      if (!mounted.current) return
      import("@splinetool/react-spline")
        .then((mod) => {
          if (mounted.current) setSplineComp(() => mod.default)
        })
        .catch(() => {})
    }
    if (typeof window.requestIdleCallback === "function") {
      const id = window.requestIdleCallback(load, { timeout: 3000 })
      return () => {
        mounted.current = false
        window.cancelIdleCallback(id)
      }
    }
    const timer = setTimeout(load, 1500)
    return () => {
      mounted.current = false
      clearTimeout(timer)
    }
  }, [])

  return (
    <div className={`relative h-full min-h-[1px] w-full min-w-[1px] ${className}`.trim()}>
      <div
        className={`absolute inset-0 flex items-end justify-center transition-opacity duration-1000 ${splineLoaded ? "opacity-0 pointer-events-none" : "opacity-100"}`}
      >
        <Image
          src="/Robot.png"
          alt="YappiX Robot"
          width={900}
          height={900}
          sizes="(min-width: 1280px) 45vw, 0px"
          quality={68}
          loading="lazy"
          className="h-[120%] max-h-[900px] w-auto object-contain object-bottom align-bottom drop-shadow-[0_0_40px_rgba(236,72,153,0.3)]"
        />
      </div>
      {SplineComp ? (
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ${splineLoaded ? "opacity-100" : "opacity-0"}`}
        >
          <SplineComp scene={scene} onLoad={() => setSplineLoaded(true)} />
        </div>
      ) : null}
    </div>
  )
}

const SPLINE_SCENE = "https://prod.spline.design/YsrhGK1AHO4x8zaQ/scene.splinecode"

/**
 * Только при xl монтируем LazySpline — на мобильных не импортируем @splinetool.
 */
export function HeroDesktopSpline() {
  const [wide, setWide] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1280px)")
    const sync = () => setWide(mq.matches)
    sync()
    mq.addEventListener("change", sync)
    return () => mq.removeEventListener("change", sync)
  }, [])

  if (!wide) {
    return (
      <div className="h-[560px] min-[1280px]:h-[700px] 2xl:h-[800px] w-full" aria-hidden />
    )
  }

  return (
    <div className="absolute -inset-x-20 2xl:-inset-x-32 -top-10 -bottom-20 overflow-hidden animate-in fade-in zoom-in-90 duration-800 delay-200">
      <LazySpline scene={SPLINE_SCENE} />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background to-transparent pointer-events-none" />
    </div>
  )
}
