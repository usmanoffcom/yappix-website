"use client"

import { useState, useEffect } from "react"
import PhoneInput, { Country, isValidPhoneNumber, parsePhoneNumber } from "react-phone-number-input"
import "react-phone-number-input/style.css"
import { cn } from "@/lib/utils"

interface PhoneInputFieldProps {
  value: string
  onChange: (value: string) => void
  error?: string
  className?: string
  placeholder?: string
}

export function PhoneInputField({
  value,
  onChange,
  error,
  className,
  placeholder = "Телефон"
}: PhoneInputFieldProps) {
  const [country, setCountry] = useState<Country>("RU")
  
  // Автоопределение страны по IP (опционально)
  useEffect(() => {
    // Можно добавить определение страны по IP
  }, [])
  
  const handleChange = (newValue: string | undefined) => {
    if (newValue) {
      // Конвертация 89XX в +79XX для российских номеров
      const digits = newValue.replace(/\D/g, "")
      if (digits.startsWith("89") && digits.length === 11) {
        onChange("+7" + digits.slice(1))
        return
      }
    }
    onChange(newValue || "")
  }

  const isValid = value ? isValidPhoneNumber(value) : true

  return (
    <div className="space-y-1">
      <div
        className={cn(
          "flex items-center w-full rounded-md border bg-input px-3 py-2 text-sm transition-colors",
          "focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2",
          error || (!isValid && value) ? "border-red-500" : "border-border",
          className
        )}
      >
        <PhoneInput
          international
          countryCallingCodeEditable={false}
          defaultCountry={country}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className="phone-input-custom flex-1"
          numberInputProps={{
            className: "bg-transparent outline-none w-full text-foreground placeholder:text-muted-foreground"
          }}
        />
      </div>
      {error && <p className="text-xs text-red-500">{error}</p>}
      {!isValid && value && !error && (
        <p className="text-xs text-red-500">Некорректный номер телефона</p>
      )}
    </div>
  )
}

// Утилита для форматирования телефона для отображения
export function formatPhoneDisplay(phone: string): string {
  try {
    const parsed = parsePhoneNumber(phone)
    if (parsed) {
      return parsed.formatInternational()
    }
  } catch {
    // ignore
  }
  return phone
}
