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
import { motion } from "framer-motion"
import Link from "next/link"

const offices = [
  { country: "🇷🇺 Россия", city: "Москва, Сколково" },
  { country: "🇺🇸 США", city: "Delaware" },
  { country: "🇹🇷 Турция", city: "Стамбул" },
  { country: "🇷🇸 Сербия", city: "Белград" },
]

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    alert("Спасибо! Мы свяжемся с вами в ближайшее время.")
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
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Оставить заявку</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Заполните форму и мы свяжемся с вами в течение 2 часов
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground">
                        Имя *
                      </Label>
                      <Input id="name" placeholder="Ваше имя" required className="bg-input border-border" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-foreground">
                        Компания
                      </Label>
                      <Input id="company" placeholder="Название компании" className="bg-input border-border" />
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
                    />
                  </div>

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Отправка..." : "Отправить заявку"}
                    <Send className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Quick Contact */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Быстрая связь</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <Button variant="outline" size="lg" asChild className="justify-start h-auto py-4 bg-transparent">
                  <Link href="https://t.me/yappix" target="_blank">
                    <MessageCircle className="w-5 h-5 mr-3 text-primary" />
                    <div className="text-left">
                      <div className="font-semibold text-foreground">Telegram</div>
                      <div className="text-xs text-muted-foreground">Ответим за 5 минут</div>
                    </div>
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="justify-start h-auto py-4 bg-transparent">
                  <Link href="tel:+78001234567">
                    <Phone className="w-5 h-5 mr-3 text-primary" />
                    <div className="text-left">
                      <div className="font-semibold text-foreground">Позвонить</div>
                      <div className="text-xs text-muted-foreground">8 800 123-45-67</div>
                    </div>
                  </Link>
                </Button>
              </div>
            </div>

            {/* Email */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <div>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <Link href="mailto:hello@yappix.ru" className="text-foreground hover:text-primary transition-colors">
                    hello@yappix.ru
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
                  <Button variant="outline" size="sm">
                    Выбрать время
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
