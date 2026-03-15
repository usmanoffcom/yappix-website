import type { Metadata } from "next"
import { HeaderEn } from "@/components/header-en"
import { FooterEn } from "@/components/footer-en"
import { EvidencePageTemplate } from "@/components/evidence-page-template"
import { buildEvidenceMetadata } from "@/lib/evidence-page-metadata"

export const metadata: Metadata = buildEvidenceMetadata("en", "sla-support")

export default function SlaSupportEnPage() {
  return (
    <>
      <HeaderEn />
      <EvidencePageTemplate locale="en" pageKey="sla-support" />
      <FooterEn />
    </>
  )
}

