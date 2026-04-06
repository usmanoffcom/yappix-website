import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

let registered = false

export function registerGSAP() {
  if (registered) return
  gsap.registerPlugin(ScrollTrigger)
  registered = true

  gsap.defaults({
    ease: "power3.out",
    duration: 0.8,
  })

  ScrollTrigger.defaults({
    toggleActions: "play none none reverse",
  })
}

export { gsap, ScrollTrigger }
