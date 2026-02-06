import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft, Search, MessageCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "404 — Страница не найдена | YappiX",
  description: "Запрашиваемая страница не найдена. Вернитесь на главную или воспользуйтесь навигацией.",
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: "404 — Страница не найдена",
    description: "Запрашиваемая страница не найдена на сайте YappiX.",
    type: "website",
    url: "https://yappix.ru/404",
    siteName: "YappiX",
    images: [
      {
        url: "/icon-512x512.png",
        width: 512,
        height: 512,
        alt: "YappiX",
      },
    ],
  },
}

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background flex items-center justify-center">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-2xl mx-auto text-center">
            {/* 404 Number */}
            <div className="relative mb-8">
              <span className="text-[150px] md:text-[200px] font-bold text-primary/10 select-none leading-none">
                404
              </span>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  404
                </div>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Страница не найдена
            </h1>

            {/* Description */}
            <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
              К сожалению, запрашиваемая страница не существует. Возможно, она была удалена или вы перешли по неверной ссылке.
            </p>

            {/* Quick Links */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button asChild size="lg">
                <Link href="/">
                  <Home className="w-5 h-5 mr-2" />
                  На главную
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/kontakty">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Связаться с нами
                </Link>
              </Button>
            </div>

            {/* Helpful Links */}
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
              <h2 className="text-xl font-semibold text-foreground mb-6">
                Возможно, вы искали:
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <Link
                  href="/uslugi"
                  className="flex items-center gap-3 p-4 rounded-xl bg-background border border-border hover:border-primary/50 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Search className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                      Услуги
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Разработка сайтов и приложений
                    </div>
                  </div>
                </Link>
                <Link
                  href="/kejsy"
                  className="flex items-center gap-3 p-4 rounded-xl bg-background border border-border hover:border-primary/50 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Search className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                      Кейсы
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Наши работы и проекты
                    </div>
                  </div>
                </Link>
                <Link
                  href="/blog"
                  className="flex items-center gap-3 p-4 rounded-xl bg-background border border-border hover:border-primary/50 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Search className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                      Блог
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Статьи и новости
                    </div>
                  </div>
                </Link>
                <Link
                  href="/o-kompanii"
                  className="flex items-center gap-3 p-4 rounded-xl bg-background border border-border hover:border-primary/50 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Search className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                      О компании
                    </div>
                    <div className="text-sm text-muted-foreground">
                      История и команда YappiX
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Back Button */}
            <div className="mt-8">
              <button 
                onClick={() => window.history.back()} 
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Вернуться назад
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
