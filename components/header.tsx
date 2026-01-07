"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Menu, Phone, ArrowRight, Globe, Code, Bot, Cloud, Landmark, Server, Search, Share2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { Logo } from "./logo"

const services = [
  {
    href: "/uslugi/razrabotka-sajtov",
    label: "Разработка сайтов",
    desc: "Корпоративные сайты, лендинги, интернет-магазины",
    icon: Globe,
  },
  {
    href: "/uslugi/mobilnye-prilozheniya",
    label: "Мобильные приложения",
    desc: "iOS, Android, кроссплатформенные решения",
    icon: Code,
  },
  {
    href: "/uslugi/ai-chat-boty",
    label: "AI чат-боты",
    desc: "Интеллектуальные ассистенты и автоматизация",
    icon: Bot,
  },
  {
    href: "/uslugi/saas-paas",
    label: "SaaS / PaaS",
    desc: "Облачные продукты и платформы",
    icon: Cloud,
  },
  {
    href: "/uslugi/fintech",
    label: "FinTech",
    desc: "Платёжные системы и финансовые решения",
    icon: Landmark,
  },
  {
    href: "/uslugi/devops",
    label: "DevOps",
    desc: "CI/CD, инфраструктура, мониторинг",
    icon: Server,
  },
  {
    href: "/uslugi/seo-prodvizhenie",
    label: "SEO продвижение",
    desc: "Поисковая оптимизация и аналитика",
    icon: Search,
  },
  {
    href: "/uslugi/smm",
    label: "SMM",
    desc: "Маркетинг в социальных сетях",
    icon: Share2,
  },
]

const navItems = [
  { href: "/kejsy", label: "Кейсы" },
  { href: "/blog", label: "Блог" },
  { href: "/o-kompanii", label: "О компании" },
  { href: "/karera", label: "Карьера" },
  { href: "/kontakty", label: "Контакты" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-xl border-b border-border/50"
          : "bg-background/80 backdrop-blur-sm",
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 md:h-20">
          <Logo />

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-muted-foreground hover:text-foreground px-4 py-2">
                    Услуги
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[540px] gap-2 p-5 md:grid-cols-2">
                      {services.map((service) => (
                        <li key={service.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={service.href}
                              className="flex items-start gap-3 select-none rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-muted/50 group"
                            >
                              <service.icon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                              <div>
                                <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                                  {service.label}
                                </div>
                                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{service.desc}</p>
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors px-4 py-2 rounded-md hover:bg-muted/50"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="tel:+79950955593"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden xl:inline">+7 995 095 55 93</span>
            </Link>
            <Button asChild className="rounded-full px-6">
              <Link href="/kontakty">
                Обсудить проект
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          {/* Mobile Menu - полностью переверстанное мобильное меню */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="relative">
                <Menu className="w-6 h-6" />
                <span className="sr-only">Открыть меню</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full sm:w-[380px] bg-background border-l border-border/50 p-0 flex flex-col"
            >
              <SheetHeader className="px-6 py-5 border-b border-border/50">
                <SheetTitle className="flex items-center justify-between">
                  <Logo />
                </SheetTitle>
              </SheetHeader>

              <div className="flex-1 overflow-y-auto">
                {/* Услуги */}
                <div className="px-6 py-5">
                  <h3 className="text-xs font-semibold uppercase text-muted-foreground mb-4 tracking-widest">Услуги</h3>
                  <div className="space-y-1">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-3 py-3 px-3 -mx-3 rounded-lg text-foreground hover:bg-muted/50 transition-colors group"
                      >
                        <service.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                        <span className="text-sm font-medium">{service.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Разделитель */}
                <div className="h-px bg-border/50 mx-6" />

                {/* Основные страницы */}
                <div className="px-6 py-5">
                  <h3 className="text-xs font-semibold uppercase text-muted-foreground mb-4 tracking-widest">
                    Компания
                  </h3>
                  <div className="space-y-1">
                    {navItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center justify-between py-3 px-3 -mx-3 rounded-lg text-foreground hover:bg-muted/50 transition-colors group"
                      >
                        <span className="text-base font-medium">{item.label}</span>
                        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer мобильного меню */}
              <div className="border-t border-border/50 px-6 py-5 space-y-4 bg-muted/30">
                <Link
                  href="tel:+79950955593"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Бесплатно по России</div>
                    <div className="text-sm font-semibold text-foreground">+7 995 095 55 93</div>
                  </div>
                </Link>
                <Button asChild className="w-full rounded-full h-12" onClick={() => setIsOpen(false)}>
                  <Link href="/kontakty">
                    Обсудить проект
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  )
}
