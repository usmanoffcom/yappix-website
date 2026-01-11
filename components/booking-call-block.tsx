"use client"

import { useState } from "react"
import { Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BookingCalendar } from "@/components/booking-calendar"

export function BookingCallBlock() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  return (
    <>
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

      <BookingCalendar isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </>
  )
}
