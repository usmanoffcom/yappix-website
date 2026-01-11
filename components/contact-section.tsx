"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Send, MessageCircle, Calendar } from "lucide-react"
import Link from "next/link"
import { BookingCalendar } from "@/components/booking-calendar"

const offices = [
  { country: "🇷🇺 Россия", city: "Москва, Сколково" },
  { country: "🇺🇸 США", city: "Delaware" },
  { country: "🇹🇷 Турция", city: "Стамбул" },
  { country: "🇷🇸 Сербия", city: "Белград" },
  { country: "🇰🇿 Казахстан", city: "Алматы" },
]

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  })
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", company: "", email: "", phone: "", message: "" })
      } else {
        setSubmitStatus("error")
      }
    } catch {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-card/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Контакты
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Обсудим ваш проект?
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Расскажите о вашей идее — мы предложим оптимальное решение и составим план реализации бесплатно
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Оставить заявку</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Заполните форму и мы свяжемся с вами в течение 2 часов
                </CardDescription>
              </CardHeader>
              <CardContent>
                {submitStatus === "success" ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center">
                      <Send className="w-8 h-8 text-green-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Заявка отправлена!</h3>
                    <p className="text-muted-foreground">Мы свяжемся с вами в ближайшее время</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-foreground">
                          Имя *
                        </Label>
                        <Input 
                          id="name" 
                          placeholder="Ваше имя" 
                          required 
                          className="bg-input border-border"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-foreground">
                          Компания
                        </Label>
                        <Input 
                          id="company" 
                          placeholder="Название компании" 
                          className="bg-input border-border"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-foreground">
                          Email *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="email@company.com"
                          required
                          className="bg-input border-border"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-foreground">
                          Телефон
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+7 (___) ___-__-__"
                          className="bg-input border-border"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-foreground">
                        Расскажите о проекте *
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Опишите вашу идею, задачи и примерные сроки..."
                        rows={4}
                        required
                        className="bg-input border-border resize-none"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>

                    {submitStatus === "error" && (
                      <p className="text-sm text-red-500">Ошибка отправки. Попробуйте позже или свяжитесь по телефону.</p>
                    )}

                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Отправка..." : "Отправить заявку"}
                      <Send className="w-4 h-4 ml-2" />
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Quick Contact */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Быстрая связь</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <Link 
                  href="https://t.me/yappix_bot" 
                  target="_blank"
                  className="group inline-flex items-center justify-start gap-3 whitespace-nowrap rounded-md text-sm font-medium transition-all border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground active:bg-accent/90 active:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 h-auto py-4 px-6"
                >
                  <MessageCircle className="w-5 h-5 text-primary group-hover:text-accent-foreground transition-colors shrink-0" />
                  <div className="text-left">
                    <div className="font-semibold text-foreground group-hover:text-accent-foreground transition-colors">Telegram</div>
                    <div className="text-xs text-muted-foreground group-hover:text-accent-foreground/80 transition-colors">Ответим за 5 минут</div>
                  </div>
                </Link>
                <Link 
                  href="tel:+79950955593"
                  className="group inline-flex items-center justify-start gap-3 whitespace-nowrap rounded-md text-sm font-medium transition-all border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground active:bg-accent/90 active:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 h-auto py-4 px-6"
                >
                  <Phone className="w-5 h-5 text-primary group-hover:text-accent-foreground transition-colors shrink-0" />
                  <div className="text-left">
                    <div className="font-semibold text-foreground group-hover:text-accent-foreground transition-colors">Позвонить</div>
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

            {/* Offices */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                Наши офисы
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

            {/* CTA for call */}
            <div className="p-6 rounded-2xl bg-primary/10 border border-primary/20">
              <div className="flex items-start gap-4">
                <Calendar className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Забронировать звонок</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Выберите удобное время для 30-минутной консультации с нашим экспертом
                  </p>
                  <Button variant="outline" size="sm" onClick={() => setIsBookingOpen(true)}>
                    Выбрать время
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
