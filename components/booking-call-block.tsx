"use client"

import { useState } from "react"
import { Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BookingCalendar } from "@/components/booking-calendar"

const copy = {
  ru: {
    title: "Забронировать звонок",
    desc: "Выберите удобное время для 30-минутной консультации с нашим экспертом",
    btn: "Выбрать время",
  },
  en: {
    title: "Book a Call",
    desc: "Choose a time for a 30-minute consultation with our expert",
    btn: "Select Time",
  },
} as const

export function BookingCallBlock({ locale = "ru" }: { locale?: "ru" | "en" }) {
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const t = copy[locale]

  return (
    <>
      <div className="p-6 rounded-2xl bg-primary/10 border border-primary/20">
        <div className="flex items-start gap-4">
          <Calendar className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-semibold text-foreground mb-1">{t.title}</h4>
            <p className="text-sm text-muted-foreground mb-4">{t.desc}</p>
            <Button type="button" variant="outline" size="sm" onClick={() => setIsBookingOpen(true)}>
              {t.btn}
            </Button>
          </div>
        </div>
      </div>

      <BookingCalendar isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} locale={locale} />
    </>
  )
}
