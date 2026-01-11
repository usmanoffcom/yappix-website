"use client"

import { useState } from "react"
import { Calendar, Clock, X, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

// Генерируем временные слоты с 9:00 до 19:00 с интервалом 30 минут
const timeSlots = Array.from({ length: 21 }, (_, i) => {
  const hour = 9 + Math.floor(i / 2)
  const minute = (i % 2) * 30
  return `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`
})

interface BookingCalendarProps {
  isOpen: boolean
  onClose: () => void
}

export function BookingCalendar({ isOpen, onClose }: BookingCalendarProps) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState<string>("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  // Получаем доступные даты (30 дней вперед, исключая СБ и ВС)
  const getAvailableDates = () => {
    const dates: Date[] = []
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    for (let i = 0; i < 60; i++) {
      const date = new Date(today)
      date.setDate(today.getDate() + i)
      const dayOfWeek = date.getDay()
      // 0 = Воскресенье, 6 = Суббота
      if (dayOfWeek !== 0 && dayOfWeek !== 6) {
        dates.push(date)
      }
    }
    return dates
  }

  const availableDates = getAvailableDates()

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("ru-RU", {
      weekday: "short",
      day: "numeric",
      month: "long",
    })
  }

  const formatDateForAPI = (date: Date) => {
    return date.toISOString().split("T")[0]
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!selectedDate || !selectedTime) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          date: formatDateForAPI(selectedDate),
          time: selectedTime,
        }),
      })

      if (response.ok) {
        setSubmitStatus("success")
        // Сброс формы
        setTimeout(() => {
          setFormData({ name: "", email: "", phone: "" })
          setSelectedDate(null)
          setSelectedTime("")
          setSubmitStatus("idle")
          onClose()
        }, 3000)
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
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            Забронировать звонок
          </DialogTitle>
          <DialogDescription>
            Выберите удобное время для 30-минутной консультации. Мы свяжемся с вами в выбранное время.
          </DialogDescription>
        </DialogHeader>

        {submitStatus === "success" ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center">
              <Send className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Звонок забронирован!</h3>
            <p className="text-muted-foreground">
              Мы свяжемся с вами {selectedDate && formatDate(selectedDate)} в {selectedTime}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Выбор даты */}
            <div className="space-y-3">
              <Label className="text-foreground">Выберите дату *</Label>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 max-h-48 overflow-y-auto">
                {availableDates.map((date, index) => {
                  const isSelected =
                    selectedDate?.toDateString() === date.toDateString()
                  const isToday = date.toDateString() === new Date().toDateString()

                  return (
                    <button
                      key={index}
                      type="button"
                      onClick={() => {
                        setSelectedDate(date)
                        setSelectedTime("")
                      }}
                      className={`p-3 rounded-lg border text-sm text-left transition-colors ${
                        isSelected
                          ? "bg-primary text-primary-foreground border-primary"
                          : "bg-background border-border hover:border-primary/50"
                      } ${isToday ? "ring-2 ring-primary/20" : ""}`}
                    >
                      <div className="font-medium">
                        {date.toLocaleDateString("ru-RU", { day: "numeric", month: "short" })}
                      </div>
                      <div className="text-xs opacity-75">
                        {date.toLocaleDateString("ru-RU", { weekday: "short" })}
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Выбор времени */}
            {selectedDate && (
              <div className="space-y-3">
                <Label className="text-foreground flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Выберите время *
                </Label>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectedTime(time)}
                      className={`p-2 rounded-lg border text-sm transition-colors ${
                        selectedTime === time
                          ? "bg-primary text-primary-foreground border-primary"
                          : "bg-background border-border hover:border-primary/50"
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Форма контактов */}
            {selectedDate && selectedTime && (
              <div className="space-y-4 pt-4 border-t border-border">
                <h3 className="font-semibold text-foreground">Ваши контакты</h3>

                <div className="space-y-2">
                  <Label htmlFor="booking-name" className="text-foreground">
                    ФИО *
                  </Label>
                  <Input
                    id="booking-name"
                    placeholder="Иван Иванов"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-input border-border"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="booking-email" className="text-foreground">
                      Email *
                    </Label>
                    <Input
                      id="booking-email"
                      type="email"
                      placeholder="email@company.com"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-input border-border"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="booking-phone" className="text-foreground">
                      Телефон *
                    </Label>
                    <Input
                      id="booking-phone"
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-input border-border"
                    />
                  </div>
                </div>

                {submitStatus === "error" && (
                  <p className="text-sm text-red-500">
                    Ошибка отправки. Попробуйте позже или свяжитесь по телефону.
                  </p>
                )}

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Отправка..." : "Забронировать звонок"}
                  <Send className="w-4 h-4 ml-2" />
                </Button>
              </div>
            )}
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
