import Link from "next/link"
import Image from "next/image"
import { Logo } from "./logo"

type Locale = "ru" | "en"
type FooterLink = { label: string; href: string; external?: boolean }

const footerLinksByLocale: Record<
  Locale,
  { services: FooterLink[]; company: FooterLink[]; legal: FooterLink[] }
> = {
  ru: {
    services: [
      { label: "Веб-разработка", href: "/uslugi/razrabotka-sajtov" },
      { label: "Мобильные приложения", href: "/uslugi/mobilnye-prilozheniya" },
      { label: "AI и чат-боты", href: "/uslugi/ai-chat-boty" },
      { label: "DevOps услуги", href: "/uslugi/devops" },
      { label: "SEO продвижение", href: "/uslugi/seo-prodvizhenie" },
      { label: "FinTech решения", href: "/uslugi/fintech" },
    ],
    company: [
      { label: "О компании", href: "/o-kompanii" },
      { label: "Кейсы", href: "/kejsy" },
      { label: "Блог", href: "/blog" },
      { label: "Шаблоны", href: "/shablony" },
      { label: "Карьера", href: "/karera" },
      { label: "Контакты", href: "/kontakty" },
    ],
    legal: [
      { label: "Политика конфиденциальности", href: "/politika-konfidencialnosti" },
      { label: "Оферта", href: "/oferta" },
      { label: "Реквизиты", href: "/rekvizity" },
    ],
  },
  en: {
    services: [
      { label: "Web Development", href: "/en/services" },
      { label: "Mobile Apps", href: "/en/services" },
      { label: "AI & Chatbots", href: "/en/services" },
      { label: "DevOps", href: "/en/services" },
      { label: "SEO", href: "/en/services" },
      { label: "FinTech", href: "/en/services" },
    ],
    company: [
      { label: "About Us", href: "/en/about" },
      { label: "Cases", href: "/en/cases" },
      { label: "Blog", href: "/blog" },
      { label: "Templates", href: "/en/templates" },
      { label: "Career", href: "/en/career" },
      { label: "Contact", href: "/en/contact" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/politika-konfidencialnosti" },
      { label: "Terms of Service", href: "/oferta" },
      { label: "Company Details", href: "/rekvizity" },
    ],
  },
}

const socialLinks: FooterLink[] = [
  { label: "Telegram", href: "https://t.me/yappix_bot", external: true },
  { label: "VK", href: "https://vk.com/yappix", external: true },
  { label: "LinkedIn", href: "https://linkedin.com/company/yappix", external: true },
  { label: "GitHub", href: "https://github.com/yappix", external: true },
]

const textByLocale = {
  ru: {
    brand: "IT-студия полного цикла. Разрабатываем сложные продукты быстрее с AI.",
    services: "Услуги",
    company: "Компания",
    legal: "Документы",
    social: "Соцсети",
    rights: "Все права защищены.",
    logoHref: "/",
    showSwitch: false,
    switchLabel: "🇷🇺 Russian version",
    switchHref: "/",
  },
  en: {
    brand: "Full-cycle IT studio. Building complex products faster with AI.",
    services: "Services",
    company: "Company",
    legal: "Legal",
    social: "Social",
    rights: "All rights reserved.",
    logoHref: "/en",
    showSwitch: true,
    switchLabel: "🇷🇺 Russian version",
    switchHref: "/",
  },
} as const

export function SiteFooter({ locale }: { locale: Locale }) {
  const footerLinks = footerLinksByLocale[locale]
  const t = textByLocale[locale]

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto py-10 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 min-[1100px]:grid-cols-5 gap-8 sm:gap-10 lg:gap-12">
          <div className="col-span-1 sm:col-span-2 md:col-span-3 min-[1100px]:col-span-1">
            <div className="mb-4">
              <Logo href={t.logoHref} />
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 leading-relaxed">{t.brand}</p>
            <div className="flex items-center gap-3 mt-3">
              <Link
                href="https://sk.ru/news/kak-chelninskij-dizajner-privlek-amerikanskih-investorov-opyt-yappix/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/sk_it/sk.png"
                  alt={locale === "ru" ? "Сколково" : "Skolkovo"}
                  width={64}
                  height={64}
                  className="h-auto max-h-[64px] w-auto"
                />
              </Link>
              <Link
                href="https://bi.itpark.tech/graduates/yappix-cms/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/sk_it/it-park.png"
                  alt={locale === "ru" ? "ИТ-парк" : "IT Park"}
                  width={64}
                  height={64}
                  className="h-auto max-h-[64px] w-auto"
                />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground text-sm sm:text-base mb-3 sm:mb-4">{t.services}</h4>
            <ul className="space-y-2 sm:space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground text-sm sm:text-base mb-3 sm:mb-4">{t.company}</h4>
            <ul className="space-y-2 sm:space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                    {link.external && " ↗"}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground text-sm sm:text-base mb-3 sm:mb-4">{t.legal}</h4>
            <ul className="space-y-2 sm:space-y-2.5">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground text-sm sm:text-base mb-3 sm:mb-4">{t.social}</h4>
            <ul className="space-y-2 sm:space-y-2.5">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground text-center sm:text-left" suppressHydrationWarning>
            © {new Date().getFullYear()} YappiX. {t.rights}
          </p>
          <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground">YAPPIX, LLC • EIN: 38-4161656 • VK: 57100</p>
          {t.showSwitch && (
            <Link href={t.switchHref} className="text-[10px] sm:text-xs md:text-sm text-primary hover:underline">
              {t.switchLabel}
            </Link>
          )}
        </div>
      </div>
    </footer>
  )
}
