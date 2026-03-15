import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { EvidencePageTemplate } from "@/components/evidence-page-template"
import { buildEvidenceMetadata } from "@/lib/evidence-page-metadata"

export const metadata: Metadata = buildEvidenceMetadata("ru", "evidence")

export default function EvidencePage() {
  return (
    <>
      <Header />
      <EvidencePageTemplate locale="ru" pageKey="evidence" />
      <Footer />
    </>
  )
}

