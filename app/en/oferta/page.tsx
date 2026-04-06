import type { Metadata } from "next"
import Link from "next/link"
import { HeaderEn } from "@/components/header-en"
import { FooterEn } from "@/components/footer-en"
import { TelegramLeadLink } from "@/components/telegram-lead-link"

export const metadata: Metadata = {
  title: "Terms of Service — YappiX",
  description:
    "Public offer and terms of service for YappiX IT services: web, mobile, AI, DevOps. Cooperation, payment, and legal summary.",
  alternates: {
    canonical: "https://yappix.ru/en/oferta",
    languages: {
      "ru-RU": "https://yappix.ru/oferta",
      "en-US": "https://yappix.ru/en/oferta",
      "x-default": "https://yappix.ru/oferta",
    },
  },
  openGraph: {
    title: "Terms of Service — YappiX",
    description: "Terms of service and public offer summary for YappiX clients.",
    type: "website",
    url: "https://yappix.ru/en/oferta",
    siteName: "YappiX",
    locale: "en_US",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "YappiX" }],
  },
  robots: { index: true, follow: true },
}

export default function OfertaEnPage() {
  return (
    <>
      <HeaderEn />
      <main className="pt-20">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-invert prose-lg prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary prose-strong:text-foreground">
              <h1 className="text-display text-foreground mb-6">Terms of service (public offer)</h1>
              <p className="text-sm text-muted-foreground mb-8">
                Last updated:{" "}
                {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
              </p>

              <div className="space-y-6 not-prose text-muted-foreground leading-relaxed">
                <p>
                  This page is an <strong className="text-foreground">English summary</strong> of how YappiX (YAPPIX,
                  LLC) offers software development, web and mobile products, AI solutions, DevOps, and related services.
                  The legally binding public offer is maintained in Russian as the primary document.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Placing an order, paying for services, or signing a statement of work constitutes acceptance of our
                    offer and project terms.
                  </li>
                  <li>Scope, milestones, and fees are defined per project in the contract or commercial proposal.</li>
                  <li>
                    We provide confidentiality for client materials; see also our{" "}
                    <Link href="/en/privacy-policy" className="text-primary hover:underline">
                      Privacy policy
                    </Link>
                    .
                  </li>
                  <li>
                    Intellectual property transfers to the client after full payment unless the contract states otherwise.
                  </li>
                  <li>Disputes are resolved by negotiation; governing law may be specified in your agreement.</li>
                </ul>
                <p>
                  <strong className="text-foreground">Full legal text (Russian):</strong>{" "}
                  <Link href="/oferta" className="text-primary hover:underline">
                    Публичная оферта (RU)
                  </Link>
                  .
                </p>
                <p>
                  Contact:{" "}
                  <Link href="mailto:sales@yappix.ru" className="text-primary hover:underline">
                    sales@yappix.ru
                  </Link>
                  , <Link href="tel:+79950955593">+7 995 095 55 93</Link>, <TelegramLeadLink>@yappix_bot</TelegramLeadLink>
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
