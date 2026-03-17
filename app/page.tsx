import dynamic from "next/dynamic"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"

const TrustBadges = dynamic(() => import("@/components/trust-badges").then((m) => ({ default: m.TrustBadges })), { ssr: true })
const FounderGreeting = dynamic(() => import("@/components/founder-greeting").then((m) => ({ default: m.FounderGreeting })), { ssr: true })
const AutomationEconomicsSection = dynamic(() => import("@/components/automation-economics-section").then((m) => ({ default: m.AutomationEconomicsSection })), { ssr: true })
const ServicesSection = dynamic(() => import("@/components/services-section").then((m) => ({ default: m.ServicesSection })), { ssr: true })
const ProcessSection = dynamic(() => import("@/components/process-section").then((m) => ({ default: m.ProcessSection })), { ssr: true })
const CasesSection = dynamic(() => import("@/components/cases-section").then((m) => ({ default: m.CasesSection })), { ssr: true })
const TechStack = dynamic(() => import("@/components/tech-stack").then((m) => ({ default: m.TechStack })), { ssr: true })
const PricingSection = dynamic(() => import("@/components/pricing-section").then((m) => ({ default: m.PricingSection })), { ssr: true })
const ShowcaseGallery = dynamic(() => import("@/components/showcase-gallery").then((m) => ({ default: m.ShowcaseGallery })), { ssr: true })
const TemplatesSection = dynamic(() => import("@/components/templates-section").then((m) => ({ default: m.TemplatesSection })), { ssr: true })
const ContactSection = dynamic(() => import("@/components/contact-section").then((m) => ({ default: m.ContactSection })), { ssr: true })
const Footer = dynamic(() => import("@/components/footer").then((m) => ({ default: m.Footer })), { ssr: true })

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <TrustBadges />
      <AutomationEconomicsSection />
      <ServicesSection />
      <ProcessSection />
      <FounderGreeting />
      <CasesSection />
      <TechStack />
      <PricingSection />
      <ShowcaseGallery />
      <TemplatesSection excludeSlugs={["yandex-go-scooters"]} />
      <ContactSection />
      <Footer />
    </main>
  )
}
