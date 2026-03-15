import type { Metadata } from "next"
import { HeaderEn } from "@/components/header-en"
import { FooterEn } from "@/components/footer-en"
import { EvidencePageTemplate } from "@/components/evidence-page-template"
import { buildEvidenceMetadata } from "@/lib/evidence-page-metadata"

export const metadata: Metadata = buildEvidenceMetadata("en", "security-compliance")

export default function SecurityComplianceEnPage() {
  return (
    <>
      <HeaderEn />
      <EvidencePageTemplate locale="en" pageKey="security-compliance" />
      <FooterEn />
    </>
  )
}

