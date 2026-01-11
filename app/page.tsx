import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { TrustBadges } from "@/components/trust-badges"
import { ServicesSection } from "@/components/services-section"
import { ProcessSection } from "@/components/process-section"
import { CasesSection } from "@/components/cases-section"
import { TechStack } from "@/components/tech-stack"
import { PricingSection } from "@/components/pricing-section"
import { ShowcaseGallery } from "@/components/showcase-gallery"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <TrustBadges />
      <ServicesSection />
      <ProcessSection />
      <CasesSection />
      <TechStack />
      <PricingSection />
      <ShowcaseGallery />
      <ContactSection />
      <Footer />
    </main>
  )
}
