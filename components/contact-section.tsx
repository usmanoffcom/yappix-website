"use client"

import type React from "react"
import { useState, useCallback } from "react"
import { useGoogleReCaptcha } from "react-google-recaptcha-v3"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Send, MessageCircle, Calendar, AlertCircle } from "lucide-react"
import Link from "next/link"
import { BookingCalendar } from "@/components/booking-calendar"
import { PhoneInputField } from "@/components/phone-input"
import { validateName, validateEmail, validateCompany, validateMessage } from "@/lib/validation"

const officesByLocale = {
  ru: [
    { country: "🇷🇺 Россия", city: "Москва, Сколково" },
    { country: "🇺🇸 США", city: "Delaware" },
    { country: "🇹🇷 Турция", city: "Стамбул" },
    { country: "🇷🇸 Сербия", city: "Белград" },
    { country: "🇰🇿 Казахстан", city: "Алматы" },
  ],
  en: [
    { country: "🇷🇺 Russia", city: "Moscow, Skolkovo" },
    { country: "🇺🇸 USA", city: "Delaware" },
    { country: "🇹🇷 Turkey", city: "Istanbul" },
    { country: "🇷🇸 Serbia", city: "Belgrade" },
    { country: "🇰🇿 Kazakhstan", city: "Almaty" },
  ],
}

const contactContentByLocale = {
  ru: {
    badge: "Контакты",
    headline: "Обсудим ваш проект?",
    body: "Расскажите о вашей идее — мы предложим оптимальное решение и составим план реализации бесплатно",
    cardTitle: "Оставить заявку",
    cardDesc: "Заполните форму и мы свяжемся с вами в течение 2 часов",
    nameLabel: "Имя *",
    namePlaceholder: "Ваше имя",
    companyLabel: "Компания",
    companyPlaceholder: "Название компании",
    emailLabel: "Email *",
    phoneLabel: "Телефон",
    messageLabel: "Расскажите о проекте *",
    messagePlaceholder: "Опишите вашу идею, задачи и примерные сроки...",
    submitBtn: "Отправить заявку",
    sendingBtn: "Отправка...",
    successTitle: "Заявка отправлена!",
    successDesc: "Мы свяжемся с вами в ближайшее время",
    errorDefault: "Ошибка отправки. Попробуйте позже или свяжитесь по телефону.",
    privacyPre: "Нажимая кнопку, вы соглашаетесь с",
    privacyLink: "политикой конфиденциальности",
    privacyHref: "/politika-konfidencialnosti",
    quickContact: "Быстрая связь",
    telegramDesc: "Ответим за 5 минут",
    callLabel: "Позвонить",
    ourOffices: "Наши офисы",
    bookCall: "Забронировать звонок",
    bookCallDesc: "Выберите удобное время для 30-минутной консультации с нашим экспертом",
    bookBtn: "Выбрать время",
  },
  en: {
    badge: "Contact",
    headline: "Let's Discuss Your Project?",
    body: "Tell us about your idea — we'll suggest the best solution and create an implementation plan for free",
    cardTitle: "Submit Request",
    cardDesc: "Fill out the form and we'll get back to you within 2 hours",
    nameLabel: "Name *",
    namePlaceholder: "Your name",
    companyLabel: "Company",
    companyPlaceholder: "Company name",
    emailLabel: "Email *",
    phoneLabel: "Phone",
    messageLabel: "Tell us about your project *",
    messagePlaceholder: "Describe your idea, goals and timeline...",
    submitBtn: "Send Request",
    sendingBtn: "Sending...",
    successTitle: "Request sent!",
    successDesc: "We'll get back to you soon",
    errorDefault: "Send failed. Try again later or contact us by phone.",
    privacyPre: "By submitting you agree to our",
    privacyLink: "Privacy Policy",
    privacyHref: "/politika-konfidencialnosti",
    quickContact: "Quick Contact",
    telegramDesc: "Reply within 5 minutes",
    callLabel: "Call",
    ourOffices: "Our Offices",
    bookCall: "Book a Call",
    bookCallDesc: "Choose a time for a 30-minute consultation with our expert",
    bookBtn: "Select Time",
  },
}

export function ContactSection({ locale = "ru" }: { locale?: "ru" | "en" }) {
  const offices = officesByLocale[locale]
  const t = contactContentByLocale[locale]
  const recaptchaContext = useGoogleReCaptcha()
  const executeRecaptcha = recaptchaContext?.executeRecaptcha
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [submitError, setSubmitError] = useState("")

  // Валидация поля при потере фокуса
  const validateField = (field: string, value: string) => {
    let validation: { valid: boolean; error?: string }
    
    switch (field) {
      case "name":
        validation = validateName(value)
        break
      case "email":
        validation = validateEmail(value)
        break
      case "company":
        validation = validateCompany(value)
        break
      case "message":
        validation = validateMessage(value)
        break
      default:
        return
    }

    setErrors(prev => ({
      ...prev,
      [field]: validation.valid ? "" : (validation.error || "")
    }))
  }

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")
    setSubmitError("")

    // Клиентская валидация
    const newErrors: Record<string, string> = {}
    
    const nameVal = validateName(formData.name)
    if (!nameVal.valid) newErrors.name = nameVal.error!
    
    const emailVal = validateEmail(formData.email)
    if (!emailVal.valid) newErrors.email = emailVal.error!
    
    if (formData.company) {
      const companyVal = validateCompany(formData.company)
      if (!companyVal.valid) newErrors.company = companyVal.error!
    }
    
    const messageVal = validateMessage(formData.message)
    if (!messageVal.valid) newErrors.message = messageVal.error!

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      setIsSubmitting(false)
      return
    }

    try {
      // Получаем токен reCAPTCHA
      let recaptchaToken = ""
      if (executeRecaptcha) {
        recaptchaToken = await executeRecaptcha("contact_form")
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          recaptchaToken,
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", company: "", email: "", phone: "", message: "" })
        setErrors({})
      } else {
        setSubmitStatus("error")
        setSubmitError(data.error || (locale === "en" ? "Send failed" : "Ошибка отправки"))
        if (data.field) {
          setErrors({ [data.field]: data.error })
        }
      }
    } catch {
      setSubmitStatus("error")
      setSubmitError(locale === "en" ? "Network error. Try again later." : "Ошибка сети. Попробуйте позже.")
    } finally {
      setIsSubmitting(false)
    }
  }, [formData, executeRecaptcha, locale])

  return (
    <section id="contact" className="py-20 md:py-32 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="outline" className="mb-4">
            {t.badge}
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            {t.headline}
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            {t.body}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground">{t.cardTitle}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {t.cardDesc}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {submitStatus === "success" ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center">
                      <Send className="w-8 h-8 text-green-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{t.successTitle}</h3>
                    <p className="text-muted-foreground">{t.successDesc}</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-foreground">
                          {t.nameLabel}
                        </Label>
                        <Input 
                          id="name" 
                          placeholder={t.namePlaceholder} 
                          required 
                          className={`bg-input border-border ${errors.name ? "border-red-500" : ""}`}
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          onBlur={() => validateField("name", formData.name)}
                        />
                        {errors.name && (
                          <p className="text-xs text-red-500 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            {errors.name}
                          </p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-foreground">
                          {t.companyLabel}
                        </Label>
                        <Input 
                          id="company" 
                          placeholder={t.companyPlaceholder} 
                          className={`bg-input border-border ${errors.company ? "border-red-500" : ""}`}
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          onBlur={() => validateField("company", formData.company)}
                        />
                        {errors.company && (
                          <p className="text-xs text-red-500 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            {errors.company}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-foreground">
                          {t.emailLabel}
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="email@company.com"
                          required
                          className={`bg-input border-border ${errors.email ? "border-red-500" : ""}`}
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          onBlur={() => validateField("email", formData.email)}
                        />
                        {errors.email && (
                          <p className="text-xs text-red-500 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            {errors.email}
                          </p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-foreground">
                          {t.phoneLabel}
                        </Label>
                        <PhoneInputField
                          value={formData.phone}
                          onChange={(value) => setFormData({ ...formData, phone: value })}
                          error={errors.phone}
                          className="bg-input"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-foreground">
                        {t.messageLabel}
                      </Label>
                      <Textarea
                        id="message"
                        placeholder={t.messagePlaceholder}
                        rows={4}
                        required
                        className={`bg-input border-border resize-none ${errors.message ? "border-red-500" : ""}`}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        onBlur={() => validateField("message", formData.message)}
                      />
                      {errors.message && (
                        <p className="text-xs text-red-500 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {submitStatus === "error" && (
                      <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20">
                        <p className="text-sm text-red-500 flex items-center gap-2">
                          <AlertCircle className="w-4 h-4" />
                          {submitError || t.errorDefault}
                        </p>
                      </div>
                    )}

                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? t.sendingBtn : t.submitBtn}
                      <Send className="w-4 h-4 ml-2" />
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      {t.privacyPre}
                      {" "}
                      <Link href={t.privacyHref} className="text-primary hover:underline">
                        {t.privacyLink}
                      </Link>
                      . Protected by reCAPTCHA.
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">{t.quickContact}</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <Link 
                  href="https://t.me/yappix_bot" 
                  target="_blank"
                  className="group inline-flex items-center justify-start gap-3 whitespace-nowrap rounded-md text-sm font-medium transition-all border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground active:bg-accent/90 active:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 h-auto py-4 px-6"
                >
                  <MessageCircle className="w-5 h-5 text-primary group-hover:text-accent-foreground transition-colors shrink-0" />
                  <div className="text-left">
                    <div className="font-semibold text-foreground group-hover:text-accent-foreground transition-colors">Telegram</div>
                    <div className="text-xs text-muted-foreground group-hover:text-accent-foreground/80 transition-colors">{t.telegramDesc}</div>
                  </div>
                </Link>
                <Link 
                  href="tel:+79950955593"
                  className="group inline-flex items-center justify-start gap-3 whitespace-nowrap rounded-md text-sm font-medium transition-all border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground active:bg-accent/90 active:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 h-auto py-4 px-6"
                >
                  <Phone className="w-5 h-5 text-primary group-hover:text-accent-foreground transition-colors shrink-0" />
                  <div className="text-left">
                    <div className="font-semibold text-foreground group-hover:text-accent-foreground transition-colors">{t.callLabel}</div>
                    <div className="text-xs text-muted-foreground group-hover:text-accent-foreground/80 transition-colors">+7 995 095 55 93</div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Email */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <div>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <Link href="mailto:sales@yappix.ru" className="text-foreground hover:text-primary transition-colors">
                    sales@yappix.ru
                  </Link>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                {t.ourOffices}
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {offices.map((office, index) => (
                  <div key={index} className="p-4 rounded-xl bg-secondary/50 border border-border">
                    <div className="font-medium text-foreground">{office.country}</div>
                    <div className="text-sm text-muted-foreground">{office.city}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-primary/10 border border-primary/20">
              <div className="flex items-start gap-4">
                <Calendar className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{t.bookCall}</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    {t.bookCallDesc}
                  </p>
                  <Button variant="outline" size="sm" onClick={() => setIsBookingOpen(true)}>
                    {t.bookBtn}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BookingCalendar isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </section>
  )
}
