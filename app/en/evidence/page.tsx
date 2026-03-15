import type { Metadata } from "next"
import { HeaderEn } from "@/components/header-en"
import { FooterEn } from "@/components/footer-en"
import { EvidencePageTemplate } from "@/components/evidence-page-template"
import { buildEvidenceMetadata } from "@/lib/evidence-page-metadata"

export const metadata: Metadata = buildEvidenceMetadata("en", "evidence")

export default function EvidenceEnPage() {
  return (
    <>
      <HeaderEn />
      <EvidencePageTemplate locale="en" pageKey="evidence" />
      <FooterEn />
    </>
  )
}

