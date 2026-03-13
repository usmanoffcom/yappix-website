import type { Metadata } from "next"
import { HeaderEn } from "@/components/header-en"
import { FooterEn } from "@/components/footer-en"

export const metadata: Metadata = {
  title: "Company Details — YAPPIX, LLC",
  description:
    "Official company details of YAPPIX, LLC: Entity ID, EIN, registered address, US bank account information, members, CEO and D-U-N-S number.",
  keywords: [
    "YAPPIX LLC details",
    "YAPPIX EIN 38-4161656",
    "YAPPIX Entity ID 202030310656",
    "YAPPIX bank details",
    "YAPPIX D-U-N-S 108915689",
  ],
  alternates: {
    canonical: "https://yappix.ru/en/rekvizity",
    languages: {
      "ru-RU": "https://yappix.ru/rekvizity",
      "en-US": "https://yappix.ru/en/rekvizity",
    },
  },
  openGraph: {
    title: "Company Details — YAPPIX, LLC",
    description:
      "Official legal and banking details of YAPPIX, LLC (US): EIN, Entity ID, address, bank details, members and CEO.",
    url: "https://yappix.ru/en/rekvizity",
    siteName: "YappiX",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "YappiX" }],
  },
}

export default function CompanyDetailsEnPage() {
  return (
    <>
      <HeaderEn />
      <main className="pt-20">
        <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-display text-foreground mb-6 text-balance">Company details</h1>
              <div className="p-6 md:p-8 bg-card border border-border rounded-2xl space-y-6 text-sm md:text-base text-foreground leading-relaxed">
                <div>
                  <p>YAPPIX, LLC</p>
                  <p>Entity ID 202030310656</p>
                  <p>Address: 2108 N St Ste N, Sacramento, CA 95816 US</p>
                  <p>EIN: 38-4161656</p>
                </div>

                <div>
                  <p className="font-semibold">Bank details:</p>
                  <p>Routing number: 084106768</p>
                  <p>Account number: 9800305499</p>
                  <p>Bank: Evolve Bank & Trust, 6070 Poplar Ave, Suite 200, Memphis, TN 38119</p>
                </div>

                <div>
                  <p>MBR: USMANOV RENAT 50%</p>
                  <p>MBR: SHARIPOV MARAT 50%</p>
                  <p>CEO: USMANOV RENAT</p>
                </div>

                <div>
                  <p>Tel.: +1 (845) 477-7766</p>
                </div>

                <div>
                  <p>D-U-N-S Number is 108915689</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterEn />
    </>
  )
}
