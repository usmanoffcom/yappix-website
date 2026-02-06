import type { Metadata } from "next"
import Link from "next/link"
import { HeaderEn } from "@/components/header-en"
import { FooterEn } from "@/components/footer-en"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, MessageCircle, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact YappiX — Get in Touch | IT Studio",
  description:
    "Contact YappiX: phone, email, Telegram. Offices in Moscow, Delaware, Istanbul, Belgrade, Kazakhstan. Free project consultation.",
  alternates: {
    canonical: "https://yappix.ru/en/contact",
  },
  openGraph: {
    title: "Contact YappiX — Get in Touch",
    description: "Contact YappiX: offices in 5 countries, phone, email, Telegram. Free consultation.",
    type: "website",
    url: "https://yappix.ru/en/contact",
    locale: "en_US",
  },
}

const offices = [
  {
    city: "Delaware, USA",
    address: "1209 Orange Street, Wilmington, DE 19801",
    phone: "+1 302 123-4567",
    email: "contact@yappix.studio",
    timezone: "UTC-5",
  },
  {
    city: "Moscow, Russia",
    address: "Skolkovo Innovation Center, Bolshoy Boulevard 42, bld. 1",
    phone: "+7 995 095 5593",
    email: "sales@yappix.ru",
    timezone: "UTC+3",
  },
  {
    city: "Istanbul, Turkey",
    address: "Maslak Mahallesi, Buyukdere Caddesi, No: 255",
    phone: "+90 534 087 59 56",
    email: "contact@yappix.studio",
    timezone: "UTC+3",
  },
  {
    city: "Belgrade, Serbia",
    address: "Bulevar Mihajla Pupina 10a, Novi Beograd",
    phone: "+381 63 1780824",
    email: "contact@yappix.studio",
    timezone: "UTC+1",
  },
  {
    city: "Almaty, Kazakhstan",
    address: "Almaty",
    phone: "+7 995 095 5593",
    email: "contact@yappix.studio",
    timezone: "UTC+6",
  },
]

const contactMethods = [
  {
    icon: Phone,
    title: "Phone",
    value: "+7 995 095 55 93",
    description: "International calls",
    href: "tel:+79950955593",
  },
  {
    icon: Mail,
    title: "Email",
    value: "contact@yappix.studio",
    description: "We reply within 2 hours",
    href: "mailto:contact@yappix.studio",
  },
  {
    icon: MessageCircle,
    title: "Telegram",
    value: "@yappix_support",
    description: "Quick responses",
    href: "https://t.me/yappix_bot",
  },
  {
    icon: Clock,
    title: "Working Hours",
    value: "24/7",
    description: "Thanks to offices in different time zones",
    href: null,
  },
]

export default function ContactEnPage() {
  return (
    <>
      <HeaderEn />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                Get in Touch
              </h1>
              <p className="text-xl text-muted-foreground text-pretty">
                Tell us about your project — we&apos;ll provide a free consultation, estimate timeline and cost. We respond within 2 hours.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-12 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {contactMethods.map((method) => (
                <div key={method.title}>
                  {method.href ? (
                    <Link
                      href={method.href}
                      className="block p-4 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors"
                    >
                      <method.icon className="w-6 h-6 text-primary mb-3" />
                      <p className="text-sm text-muted-foreground">{method.title}</p>
                      <p className="font-semibold text-foreground">{method.value}</p>
                      <p className="text-xs text-muted-foreground mt-1">{method.description}</p>
                    </Link>
                  ) : (
                    <div className="p-4 bg-card border border-border rounded-xl">
                      <method.icon className="w-6 h-6 text-primary mb-3" />
                      <p className="text-sm text-muted-foreground">{method.title}</p>
                      <p className="font-semibold text-foreground">{method.value}</p>
                      <p className="text-xs text-muted-foreground mt-1">{method.description}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Form & Offices */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Form */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Send a Request</h2>
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input id="name" placeholder="Your name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input id="company" placeholder="Company name" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" placeholder="email@example.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" type="tel" placeholder="+1 (___) ___-____" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service">Service of Interest</Label>
                    <select
                      id="service"
                      aria-label="Select service of interest"
                      className="w-full px-3 py-2 bg-card border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select a service</option>
                      <option value="web">Web Development</option>
                      <option value="mobile">Mobile App</option>
                      <option value="ai">AI Chatbot</option>
                      <option value="saas">SaaS / PaaS</option>
                      <option value="fintech">FinTech</option>
                      <option value="devops">DevOps</option>
                      <option value="seo">SEO</option>
                      <option value="smm">SMM</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="budget">Approximate Budget</Label>
                    <select
                      id="budget"
                      aria-label="Select approximate budget"
                      className="w-full px-3 py-2 bg-card border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select a range</option>
                      <option value="1-5k">$1,000 — $5,000</option>
                      <option value="5-15k">$5,000 — $15,000</option>
                      <option value="15-50k">$15,000 — $50,000</option>
                      <option value="50-100k">$50,000 — $100,000</option>
                      <option value="100k+">$100,000+</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Project Description *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project: goals, objectives, desired timeline..."
                      rows={5}
                      required
                    />
                  </div>
                  <div className="flex items-start gap-2">
                    <input
                      type="checkbox"
                      id="privacy"
                      aria-label="Consent to personal data processing"
                      className="mt-1"
                      required
                    />
                    <Label htmlFor="privacy" className="text-sm text-muted-foreground">
                      I agree to the processing of personal data in accordance with the{" "}
                      <Link href="/politika-konfidencialnosti" className="text-primary hover:underline">
                        privacy policy
                      </Link>
                    </Label>
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    Send Request
                  </Button>
                  <p className="text-sm text-muted-foreground text-center">
                    Or write to us on{" "}
                    <Link href="https://t.me/yappix_bot" className="text-primary hover:underline">
                      Telegram
                    </Link>{" "}
                    — we&apos;ll respond faster
                  </p>
                </form>
              </div>

              {/* Offices */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Our Offices</h2>
                <div className="space-y-4">
                  {offices.map((office) => (
                    <div key={office.city} className="p-6 bg-card border border-border rounded-xl">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
                        <div>
                          <h3 className="font-semibold text-foreground">{office.city}</h3>
                          <p className="text-sm text-muted-foreground mt-1">{office.address}</p>
                          <div className="flex flex-wrap gap-4 mt-3 text-sm">
                            <Link href={`tel:${office.phone.replace(/\s/g, "")}`} className="text-primary hover:underline">
                              {office.phone}
                            </Link>
                            <Link href={`mailto:${office.email}`} className="text-primary hover:underline">
                              {office.email}
                            </Link>
                            <span className="text-muted-foreground">{office.timezone}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Payment Methods */}
                <div className="mt-8 p-6 bg-card border border-border rounded-xl">
                  <h3 className="font-semibold text-foreground mb-4">Payment Methods</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Wire Transfer", "Credit Cards", "PayPal", "USDT/USDC", "Installments"].map((method) => (
                      <span key={method} className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-lg">
                        {method}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
              {[
                {
                  q: "How quickly do you respond to requests?",
                  a: "During business hours — within 2 hours. On weekends — within 24 hours.",
                },
                {
                  q: "Can we start without upfront payment?",
                  a: "Yes, we offer a trial week with money-back guarantee.",
                },
                {
                  q: "Do you work with small budgets?",
                  a: "Yes, minimum project starts from $690. Special terms for startups.",
                },
                {
                  q: "Do you sign NDAs?",
                  a: "Yes, we sign NDAs before discussing project details upon client request.",
                },
              ].map((item) => (
                <div key={item.q} className="p-6 bg-background border border-border rounded-xl">
                  <h3 className="font-semibold text-foreground mb-2">{item.q}</h3>
                  <p className="text-muted-foreground text-sm">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <FooterEn />
    </>
  )
}
