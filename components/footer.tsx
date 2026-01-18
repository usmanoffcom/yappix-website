import Link from "next/link"
import Image from "next/image"
import { Logo } from "./logo"

const footerLinks = {
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
    { label: "Шаблоны", href: "https://yappix.lemonsqueezy.com/", external: true },
    { label: "Карьера", href: "/karera" },
    { label: "Контакты", href: "/kontakty" },
  ],
  legal: [
    { label: "Политика конфиденциальности", href: "/politika-konfidencialnosti" },
    { label: "Оферта", href: "/oferta" },
    { label: "Реквизиты", href: "/rekvizity" },
  ],
}

const socialLinks = [
  { label: "Telegram", href: "https://t.me/yappix_bot" },
  { label: "VK", href: "https://vk.com/yappix" },
  { label: "LinkedIn", href: "https://linkedin.com/company/yappix" },
  { label: "GitHub", href: "https://github.com/yappix" },
]

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto py-10 sm:py-12 md:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-2 md:col-span-4 lg:col-span-1">
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 leading-relaxed">
              IT-студия полного цикла. Разрабатываем сложные продукты быстрее с AI.
            </p>
            <div className="flex items-center gap-3 mt-3">
              <Link
                href="https://sk.ru/news/kak-chelninskij-dizajner-privlek-amerikanskih-investorov-opyt-yappix/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/sk_it/sk.png"
                  alt="Сколково"
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
                  alt="ИТ-парк"
                  width={64}
                  height={64}
                  className="h-auto max-h-[64px] w-auto"
                />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground text-sm sm:text-base mb-3 sm:mb-4">Услуги</h4>
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

          {/* Company */}
          <div>
            <h4 className="font-semibold text-foreground text-sm sm:text-base mb-3 sm:mb-4">Компания</h4>
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

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-foreground text-sm sm:text-base mb-3 sm:mb-4">Документы</h4>
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

          {/* Social */}
          <div>
            <h4 className="font-semibold text-foreground text-sm sm:text-base mb-3 sm:mb-4">Соцсети</h4>
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

        {/* Bottom */}
        <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground text-center sm:text-left">
            © {new Date().getFullYear()} YappiX. Все права защищены.
          </p>
          <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground">YAPPIX, LLC • EIN: 38-4161656</p>
        </div>
      </div>
    </footer>
  )
}
