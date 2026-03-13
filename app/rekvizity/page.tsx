import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Реквизиты ООО «ЯППИКС»",
  description:
    "Официальные реквизиты ООО «ЯППИКС»: ОГРН, ИНН, КПП, юридический адрес, банковские реквизиты, система налогообложения, контактные данные и информация о генеральном директоре.",
  keywords: [
    "реквизиты ООО ЯППИКС",
    "ИНН 9707055804",
    "ОГРН 1267700040684",
    "банковские реквизиты ЯППИКС",
    "юридический адрес ЯППИКС",
  ],
  alternates: {
    canonical: "https://yappix.ru/rekvizity",
    languages: {
      "ru-RU": "https://yappix.ru/rekvizity",
      "en-US": "https://yappix.ru/en/rekvizity",
    },
  },
  openGraph: {
    title: "Реквизиты ООО «ЯППИКС»",
    description:
      "Юридические и банковские реквизиты ООО «ЯППИКС»: ИНН, ОГРН, адрес, банковские счета и контактная информация.",
    url: "https://yappix.ru/rekvizity",
    siteName: "YappiX",
    type: "website",
    locale: "ru_RU",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "YappiX" }],
  },
}

export default function RekvizityPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-display text-foreground mb-6 text-balance">Реквизиты компании</h1>
              <div className="p-6 md:p-8 bg-card border border-border rounded-2xl space-y-6 text-sm md:text-base text-foreground leading-relaxed">
                <div>
                  <p>Общество с ограниченной ответственностью «ЯППИКС»</p>
                  <p>Сокращенное наименование: ООО «ЯППИКС»</p>
                  <p>ОГРН: 1267700040684</p>
                  <p>ИНН: 9707055804</p>
                  <p>КПП: 770701001</p>
                </div>

                <div>
                  <p className="font-semibold">Юридический адрес:</p>
                  <p>127055, г. Москва, вн.тер.г. муниципальный округ Тверской, ул. Палиха, д. 7–9, к. 4, пом. 1/1</p>
                </div>

                <div>
                  <p className="font-semibold">Банковские реквизиты:</p>
                  <p>Расчётный счёт: 40702810910002055576</p>
                  <p>Банк: АО «Тинькофф Банк»</p>
                  <p>БИК: 044525974</p>
                  <p>Корреспондентский счёт: 30101810145250000974</p>
                </div>

                <div>
                  <p className="font-semibold">Система налогообложения:</p>
                  <p>Применяется упрощенная система налогообложения (УСН).</p>
                  <p>Объект налогообложения: доходы (6%).</p>
                </div>

                <div>
                  <p>Телефон: +7 995 095 55 93</p>
                  <p>Сайт: yappix.ru</p>
                  <p>Ел.почта: sales@yappix.ru, ceo@yappix.ru</p>
                </div>

                <div>
                  <p className="font-semibold">Генеральный директор:</p>
                  <p>Усманов Ренат Рушанович</p>
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
