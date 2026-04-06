import type { Metadata } from "next"
import Link from "next/link"
import { HeaderEn } from "@/components/header-en"
import { FooterEn } from "@/components/footer-en"

export const metadata: Metadata = {
  title: "Privacy Policy — YappiX",
  description:
    "How YappiX collects, uses, and protects personal data when you use yappix.ru. GDPR-aligned practices.",
  alternates: {
    canonical: "https://yappix.ru/en/privacy-policy",
    languages: {
      "ru-RU": "https://yappix.ru/politika-konfidencialnosti",
      "en-US": "https://yappix.ru/en/privacy-policy",
      "x-default": "https://yappix.ru/politika-konfidencialnosti",
    },
  },
  openGraph: {
    title: "Privacy Policy — YappiX",
    description: "Personal data processing and protection at YappiX.",
    type: "website",
    url: "https://yappix.ru/en/privacy-policy",
    siteName: "YappiX",
    locale: "en_US",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "YappiX" }],
  },
  robots: { index: true, follow: true },
}

export default function PrivacyPolicyEnPage() {
  return (
    <>
      <HeaderEn />
      <main className="pt-20">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-invert prose-lg prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary prose-strong:text-foreground">
              <h1 className="text-display text-foreground mb-6">Privacy policy</h1>
              <p className="text-sm text-muted-foreground mb-8">
                Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
              </p>

              <div className="space-y-6 not-prose text-muted-foreground leading-relaxed">
                <p>
                  This page summarizes how YappiX (&quot;we&quot;) processes personal data when you use{" "}
                  <strong className="text-foreground">yappix.ru</strong> and related services operated by YAPPIX, LLC.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>We collect contact details you submit in forms (name, email, phone, company), message content, and technical data (IP, browser, cookies) needed to run the site securely and measure performance.</li>
                  <li>We use this data to respond to inquiries, deliver services, improve the product, and comply with law.</li>
                  <li>We do not sell personal data. Processors (e.g. hosting, analytics) are bound by appropriate agreements.</li>
                  <li>Where applicable, you may request access, correction, or deletion of your data by contacting us.</li>
                </ul>
                <p>
                  The legally complete version of this policy (including jurisdiction-specific clauses) is maintained in Russian as the primary document:{" "}
                  <Link href="/politika-konfidencialnosti" className="text-primary hover:underline">
                    Политика конфиденциальности (RU)
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterEn />
    </>
  )
}
