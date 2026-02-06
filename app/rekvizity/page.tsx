import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MapPin, Phone, Building2, Users, CreditCard, ExternalLink } from "lucide-react"

export const metadata: Metadata = {
  title: "Реквизиты YappiX — банковские реквизиты и контакты",
  description:
    "Реквизиты компании YAPPIX, LLC: банковские реквизиты, юридический адрес, EIN, информация о членах компании. Реквизиты для России и стран СНГ.",
  keywords: ["реквизиты YappiX", "банковские реквизиты", "EIN", "YAPPIX LLC"],
  alternates: {
    canonical: "https://yappix.ru/rekvizity",
  },
  openGraph: {
    title: "Реквизиты YappiX — банковские реквизиты",
    description: "Реквизиты компании YAPPIX, LLC: EIN, юридический адрес, банковские реквизиты.",
    type: "website",
    url: "https://yappix.ru/rekvizity",
    siteName: "YappiX",
    images: [
      {
        url: "/icon-512x512.png",
        width: 512,
        height: 512,
        alt: "YappiX — Реквизиты",
      },
    ],
    locale: "ru_RU",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RekvizityPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                Реквизиты компании
              </h1>
              <p className="text-xl text-muted-foreground text-pretty">
                Полная информация о юридических и банковских реквизитах компании YAPPIX, LLC
              </p>
            </div>
          </div>
        </section>

        {/* Company Info */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {/* Company Details */}
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Building2 className="w-5 h-5 text-primary" />
                      <h2 className="text-2xl md:text-3xl font-bold text-foreground">YAPPIX, LLC</h2>
                    </div>
                    <div className="space-y-3 text-muted-foreground">
                      <p>
                        <span className="font-semibold text-foreground">Entity ID:</span> 202030310656
                      </p>
                      <p>
                        <span className="font-semibold text-foreground">EIN:</span> 38-4161656
                      </p>
                      <p>
                        <span className="font-semibold text-foreground">D-U-N-S Number:</span> 108915689
                      </p>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <MapPin className="w-5 h-5 text-primary" />
                      <h3 className="text-xl font-semibold text-foreground">Юридический адрес</h3>
                    </div>
                    <p className="text-muted-foreground">2108 N St Ste N, Sacramento, CA 95816 US</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Phone className="w-5 h-5 text-primary" />
                      <h3 className="text-xl font-semibold text-foreground">Телефон</h3>
                    </div>
                    <Link href="tel:+18454777766" className="text-primary hover:underline">
                      +1 (845) 477-7766
                    </Link>
                  </div>
                </div>

                {/* Management */}
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Users className="w-5 h-5 text-primary" />
                      <h3 className="text-xl font-semibold text-foreground">Управление</h3>
                    </div>
                    <div className="space-y-3 text-muted-foreground">
                      <p>
                        <span className="font-semibold text-foreground">CEO:</span> USMANOV RENAT
                      </p>
                      <div className="mt-4">
                        <p className="font-semibold text-foreground mb-2">Члены компании (MBR):</p>
                        <ul className="space-y-2">
                          <li>USMANOV RENAT — 50%</li>
                          <li>SHARIPOV MARAT — 50%</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bank Details */}
              <div className="mb-12">
                <div className="flex items-center gap-2 mb-6">
                  <CreditCard className="w-5 h-5 text-primary" />
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">Банковские реквизиты (США)</h2>
                </div>
                <div className="p-6 bg-card border border-border rounded-xl space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Routing number</p>
                      <p className="text-lg font-semibold text-foreground">084106768</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Account number</p>
                      <p className="text-lg font-semibold text-foreground">9800305499</p>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground mb-2">Банк</p>
                    <p className="text-foreground font-medium">
                      Evolve Bank & Trust
                      <br />
                      6070 Poplar Ave, Suite 200
                      <br />
                      Memphis, TN 38119
                    </p>
                  </div>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Способы оплаты</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 bg-card border border-border rounded-xl">
                    <h3 className="font-semibold text-foreground mb-4">Для России и стран СНГ</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Оплата через банковскую карту или перевод
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="https://www.tinkoff.ru/rm/r_lEFpuqhJGQ.UOiMipDBzq/mJHD862222" target="_blank">
                        Оплатить через Т‑Банк
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                  <div className="p-6 bg-card border border-border rounded-xl">
                    <h3 className="font-semibold text-foreground mb-4">Для других стран</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Банковский перевод, карты, PayPal, USDT/USDC
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/kontakty">
                        Связаться для реквизитов
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Additional Links */}
              <div className="pt-8 border-t border-border">
                <h3 className="font-semibold text-foreground mb-4">Полезные ссылки</h3>
                <div className="flex flex-wrap gap-4">
                  <Button asChild variant="outline" size="sm">
                    <Link href="https://github.com/usmanoffcom" target="_blank">
                      GitHub профиль
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/o-kompanii">
                      О компании
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/kontakty">
                      Контакты
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
