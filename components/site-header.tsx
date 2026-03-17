"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
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
import { Menu, Phone, ArrowRight, Globe, Code, Bot, Cloud, Landmark, Server, Search, Share2, Database, LineChart, Palette, ShieldCheck } from "lucide-react"
import { cn } from "@/lib/utils"
import { Logo } from "./logo"

type Locale = "ru" | "en"
type NavItem = { href: string; label: string }
type ServiceItem = { href: string; label: string; desc: string; icon: typeof Globe }

const servicesByLocale: Record<Locale, ServiceItem[]> = {
  ru: [
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
    {
      href: "/uslugi/integracii-i-api",
      label: "Интеграции и API",
      desc: "1C, CRM, ERP, REST, GraphQL",
      icon: Database,
    },
    {
      href: "/uslugi/analitika-dannyh",
      label: "Аналитика данных",
      desc: "BI-дашборды, ML, предиктив",
      icon: LineChart,
    },
    {
      href: "/uslugi/ux-ui-dizajn",
      label: "UX/UI дизайн",
      desc: "Исследования, прототипы, дизайн-системы",
      icon: Palette,
    },
    {
      href: "/uslugi/kiberbezopasnost",
      label: "Кибербезопасность",
      desc: "Аудит, пентесты, 152-ФЗ, GDPR",
      icon: ShieldCheck,
    },
  ],
  en: [
    { href: "/en/services", label: "Web Development", desc: "Corporate sites, landing pages, e-commerce", icon: Globe },
    { href: "/en/services", label: "Mobile Apps", desc: "iOS, Android, cross-platform solutions", icon: Code },
    { href: "/en/services", label: "AI Chatbots", desc: "Intelligent assistants and automation", icon: Bot },
    { href: "/en/services", label: "SaaS / PaaS", desc: "Cloud products and platforms", icon: Cloud },
    { href: "/en/services", label: "FinTech", desc: "Payment systems and financial solutions", icon: Landmark },
    { href: "/en/services", label: "DevOps", desc: "CI/CD, infrastructure, monitoring", icon: Server },
    { href: "/en/services", label: "SEO", desc: "Search optimization and analytics", icon: Search },
    { href: "/en/services", label: "SMM", desc: "Social media marketing", icon: Share2 },
    { href: "/en/services", label: "Integrations & API", desc: "1C, CRM, ERP, REST, GraphQL", icon: Database },
    { href: "/en/services", label: "Data Analytics", desc: "BI dashboards, ML, predictive", icon: LineChart },
    { href: "/en/services", label: "UX/UI Design", desc: "Research, prototypes, design systems", icon: Palette },
    { href: "/en/services", label: "Cybersecurity", desc: "Audit, pentests, GDPR", icon: ShieldCheck },
  ],
}

type TrustItem = { href: string; label: string }

const trustByLocale: Record<Locale, TrustItem[]> = {
  ru: [
    { href: "/evidence", label: "Evidence Hub" },
    { href: "/security-compliance", label: "Security & Compliance" },
    { href: "/sla-support", label: "SLA & Support" },
    { href: "/roi-methodology", label: "ROI Methodology" },
  ],
  en: [
    { href: "/en/evidence", label: "Evidence Hub" },
    { href: "/en/security-compliance", label: "Security & Compliance" },
    { href: "/en/sla-support", label: "SLA & Support" },
    { href: "/en/roi-methodology", label: "ROI Methodology" },
  ],
}

const navByLocale: Record<Locale, NavItem[]> = {
  ru: [
    { href: "/kejsy", label: "Кейсы" },
    { href: "/o-kompanii", label: "О нас" },
    { href: "/kontakty", label: "Контакты" },
  ],
  en: [
    { href: "/en/cases", label: "Cases" },
    { href: "/en/about", label: "About" },
    { href: "/en/contact", label: "Contact" },
  ],
}

const textByLocale = {
  ru: {
    services: "Услуги",
    company: "Компания",
    discuss: "Обсудить проект",
    contactHref: "/kontakty",
    langLabel: "EN",
    langHref: "/en",
    langTitle: "English version",
    mobileLang: "🇬🇧 English version",
    freeCall: "Бесплатно по России",
    openMenu: "Открыть меню",
    logoHref: "/",
  },
  en: {
    services: "Services",
    company: "Company",
    discuss: "Get in Touch",
    contactHref: "/en/contact",
    langLabel: "RU",
    langHref: "/",
    langTitle: "Russian version",
    mobileLang: "🇷🇺 Russian version",
    freeCall: "Free in Russia",
    openMenu: "Open menu",
    logoHref: "/en",
  },
} as const

/** EN path → RU path for language switcher (when on EN, link to same page in RU) */
const enToRuPath: Record<string, string> = {
  "/en": "/",
  "/en/about": "/o-kompanii",
  "/en/cases": "/kejsy",
  "/en/contact": "/kontakty",
  "/en/career": "/karera",
  "/en/evidence": "/evidence",
  "/en/security-compliance": "/security-compliance",
  "/en/sla-support": "/sla-support",
  "/en/roi-methodology": "/roi-methodology",
  "/en/rag-enterprise-knowledge-search": "/rag-poisk-po-baze-znanij",
  "/en/controlled-ai-contour": "/upravlyaemyj-ai-kontur",
  "/en/roi-first-automation": "/avtomatizaciya-s-roi",
  "/en/rekvizity": "/rekvizity",
  "/en/templates": "/shablony",
  "/en/services": "/uslugi",
  "/en/founder": "/founder",
}

function getRuHref(pathname: string): string {
  const exact = enToRuPath[pathname]
  if (exact) return exact
  if (pathname.startsWith("/en/cases/")) return pathname.replace(/^\/en\/cases/, "/kejsy")
  return "/"
}

export function SiteHeader({ locale }: { locale: Locale }) {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const services = servicesByLocale[locale]
  const navItems = navByLocale[locale]
  const t = textByLocale[locale]
  const langHref = locale === "en" ? getRuHref(pathname ?? "") : t.langHref

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
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
        <nav className="flex items-center justify-between h-16 min-[1100px]:h-20">
          <Logo href={t.logoHref} />

          <div className="hidden min-[1100px]:flex items-center gap-1">
            <NavigationMenu viewport={false}>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-muted-foreground hover:text-foreground px-4 py-2">
                    {t.services}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-popover text-popover-foreground border shadow-lg rounded-md mt-1.5">
                    <div className="max-h-[calc(100vh-5rem)] overflow-y-auto overscroll-contain">
                      <ul className="grid w-[540px] gap-2 p-5 md:grid-cols-2">
                        {services.map((service) => (
                          <li key={`${service.href}-${service.label}`}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={service.href}
                                className="flex items-start gap-3 select-none rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-muted/50 group [&_svg]:text-primary"
                              >
                                <service.icon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                                <div>
                                  <span className="text-sm font-medium block text-foreground">{service.label}</span>
                                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{service.desc}</p>
                                </div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <NavigationMenu viewport={false}>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-muted-foreground hover:text-foreground px-4 py-2">
                    {locale === "ru" ? "Доказательства" : "Evidence"}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-popover text-popover-foreground border shadow-lg rounded-md mt-1.5">
                    <ul className="grid w-[280px] gap-1 p-3">
                      {trustByLocale[locale].map((item) => (
                        <li key={item.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={item.href}
                              className="block select-none rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-muted/50 text-sm font-medium text-foreground"
                            >
                              {item.label}
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
                className="text-sm text-muted-foreground hover:text-foreground transition-colors px-4 py-2 rounded-md hover:bg-muted/50 whitespace-nowrap"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden min-[1100px]:flex items-center gap-4">
            <Link
              href={langHref}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors px-2 py-1"
              title={t.langTitle}
            >
              {t.langLabel}
            </Link>
            <Link
              href="tel:+79950955593"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden xl:inline">+7 995 095 55 93</span>
            </Link>
            <Button asChild className="rounded-full px-6">
              <Link href={t.contactHref}>
                {t.discuss}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="relative min-[1100px]:hidden">
                <Menu className="w-6 h-6" />
                <span className="sr-only">{t.openMenu}</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full sm:w-[380px] bg-background border-l border-border/50 p-0 flex flex-col"
            >
              <SheetHeader className="px-6 py-5 border-b border-border/50">
                <SheetTitle className="sr-only">{t.openMenu}</SheetTitle>
                <div className="flex items-center justify-between">
                  <Logo href={t.logoHref} />
                </div>
              </SheetHeader>

              <div className="flex-1 overflow-y-auto">
                <div className="px-6 py-5">
                  <h3 className="text-xs font-semibold uppercase text-muted-foreground mb-4 tracking-widest">
                    {t.services}
                  </h3>
                  <div className="space-y-1">
                    {services.map((service) => (
                      <Link
                        key={`${service.href}-mobile-${service.label}`}
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

                <div className="h-px bg-border/50 mx-6" />

                <div className="px-6 py-5">
                  <h3 className="text-xs font-semibold uppercase text-muted-foreground mb-4 tracking-widest">
                    {t.company}
                  </h3>
                  <div className="space-y-1">
                    {navItems.map((item) => (
                      <Link
                        key={`${item.href}-mobile`}
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

              <div className="border-t border-border/50 px-6 py-5 space-y-4 bg-muted/30">
                <Link
                  href={langHref}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t.mobileLang}
                </Link>
                <Link
                  href="tel:+79950955593"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">{t.freeCall}</div>
                    <div className="text-sm font-semibold text-foreground">+7 995 095 55 93</div>
                  </div>
                </Link>
                <Button asChild className="w-full rounded-full h-12" onClick={() => setIsOpen(false)}>
                  <Link href={t.contactHref}>
                    {t.discuss}
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
