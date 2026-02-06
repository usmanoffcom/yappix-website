import Link from "next/link"
import { Logo } from "./logo"

export function FooterEn() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground">
              Full-cycle IT studio. Building complex products faster with AI.
            </p>
            <div className="flex gap-2 mt-4">
              <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Skolkovo</span>
              <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">IT Park</span>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/en/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Web Development</Link></li>
              <li><Link href="/en/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Mobile Apps</Link></li>
              <li><Link href="/en/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">AI & Chatbots</Link></li>
              <li><Link href="/en/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">DevOps</Link></li>
              <li><Link href="/en/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">SEO & Marketing</Link></li>
              <li><Link href="/en/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">FinTech</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/en/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About Us</Link></li>
              <li><Link href="/en/cases" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Case Studies</Link></li>
              <li><Link href="/en/templates" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Templates</Link></li>
              <li><Link href="/en/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Offices</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>🇺🇸 USA — Delaware</li>
              <li>🇷🇺 Russia — Moscow, Skolkovo</li>
              <li>🇹🇷 Turkey — Istanbul</li>
              <li>🇷🇸 Serbia — Belgrade</li>
              <li>🇰🇿 Kazakhstan — Almaty</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© 2026 YappiX. All rights reserved.</p>
          <p className="text-sm text-muted-foreground">YAPPIX, LLC • EIN: 38-4161656</p>
          <Link href="/" className="text-sm text-primary hover:underline">🇷🇺 Русская версия</Link>
        </div>
      </div>
    </footer>
  )
}
