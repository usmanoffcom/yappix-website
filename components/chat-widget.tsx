"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { useGoogleReCaptcha } from "react-google-recaptcha-v3"
import { MessageCircle, X, Send, Bot, User, Loader2, Phone, Mail, Sparkles, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { validateName, validateEmail, formatRussianPhone } from "@/lib/validation"
import { reachGoal } from "@/lib/mail-ru-goal"

interface Message {
  role: "user" | "assistant"
  content: string
}

const EMAIL_IN_TEXT_REGEX = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i
const PHONE_IN_TEXT_REGEX = /(?:\+?\d[\d\s\-()]{8,}\d)/

const INITIAL_MESSAGE = `👋 Привет! Я AI-ассистент YappiX.

Чем могу помочь?
• Рассказать об услугах
• Оценить ваш проект
• Связать с менеджером

Напишите ваш вопрос!`

function extractLeadHintsFromMessage(text: string): { name?: string; contact?: string } {
  const normalized = text.trim()
  if (!normalized) return {}

  const emailMatch = normalized.match(EMAIL_IN_TEXT_REGEX)
  if (emailMatch?.[0]) {
    return { contact: emailMatch[0] }
  }

  const phoneMatch = normalized.match(PHONE_IN_TEXT_REGEX)
  if (phoneMatch?.[0]) {
    const digits = phoneMatch[0].replace(/\D/g, "")
    if (digits.length >= 10) {
      return { contact: phoneMatch[0] }
    }
  }

  const namePatterns = [
    /(?:меня зовут|я)\s+([A-Za-zА-Яа-яЁё-]{2,40})/i,
    /(?:my name is|i am)\s+([A-Za-z-]{2,40})/i,
  ]

  for (const pattern of namePatterns) {
    const match = normalized.match(pattern)
    if (match?.[1]) {
      return { name: match[1] }
    }
  }

  return {}
}

function formatChatTranscript(messages: Message[], maxMessages = 20): string {
  const slice = messages.slice(-maxMessages)
  return slice
    .map((m) => (m.role === "user" ? "Клиент" : "Бот") + ": " + m.content.replace(/\n/g, " "))
    .join("\n")
}

export function ChatWidget() {
  const recaptchaContext = useGoogleReCaptcha()
  const executeRecaptcha = recaptchaContext?.executeRecaptcha
  
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: INITIAL_MESSAGE }
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showLeadForm, setShowLeadForm] = useState(false)
  const [leadData, setLeadData] = useState({ name: "", contact: "", message: "" })
  const [leadErrors, setLeadErrors] = useState<Record<string, string>>({})
  const [leadSubmitError, setLeadSubmitError] = useState("")
  const [leadSent, setLeadSent] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  // Auto-open after 15 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen && typeof window !== "undefined" && !localStorage.getItem("chatDismissed")) {
        setIsOpen(true)
      }
    }, 15000)
    return () => clearTimeout(timer)
  }, [isOpen])

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return

    const userMessage = input.trim()
    setLeadSubmitError("")
    const leadHints = extractLeadHintsFromMessage(userMessage)

    // Autofill lead form from free-form chat messages to avoid duplicate data entry.
    if (leadHints.name || leadHints.contact) {
      setLeadData((prev) => ({
        ...prev,
        name: prev.name || leadHints.name || "",
        contact: prev.contact || (leadHints.contact ? formatRussianPhone(leadHints.contact) : ""),
      }))
      setShowLeadForm(true)
    } else if (showLeadForm && userMessage.length >= 10) {
      setLeadData((prev) => ({
        ...prev,
        message: prev.message || userMessage,
      }))
    }

    setInput("")
    setMessages(prev => [...prev, { role: "user", content: userMessage }])
    setIsLoading(true)

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, { role: "user", content: userMessage }].slice(-10)
        }),
      })

      const data = await response.json().catch(() => ({} as { reply?: string; error?: string }))
      if (!response.ok) {
        const errText =
          typeof data?.error === "string" && data.error.trim()
            ? data.error
            : "Сервис временно недоступен. Напишите в Telegram @yappix_bot или позвоните: +7 995 095 55 93"
        setMessages((prev) => [...prev, { role: "assistant", content: errText }])
        return
      }

      if (data.reply) {
        setMessages(prev => [...prev, { role: "assistant", content: data.reply }])
        
        const lowerMessage = userMessage.toLowerCase()
        if (
          lowerMessage.includes("связ") ||
          lowerMessage.includes("контакт") ||
          lowerMessage.includes("заказ") ||
          lowerMessage.includes("стоимость") ||
          lowerMessage.includes("цена") ||
          messages.length >= 4
        ) {
          setTimeout(() => setShowLeadForm(true), 1000)
        }
      } else {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content:
              "Не удалось получить ответ. Попробуйте ещё раз или напишите в Telegram: @yappix_bot",
          },
        ])
      }
    } catch {
      setMessages(prev => [...prev, { 
        role: "assistant", 
        content: "Извините, произошла ошибка. Свяжитесь с нами: +7 995 095 55 93" 
      }])
    } finally {
      setIsLoading(false)
    }
  }

  const submitLead = useCallback(async () => {
    if (!leadData.name || !leadData.contact) return

    // Валидация
    const errors: Record<string, string> = {}
    setLeadSubmitError("")
    
    const nameValidation = validateName(leadData.name)
    if (!nameValidation.valid) {
      errors.name = nameValidation.error!
    }
    
    const isEmail = leadData.contact.includes("@")
    if (isEmail) {
      const emailValidation = validateEmail(leadData.contact)
      if (!emailValidation.valid) {
        errors.contact = emailValidation.error!
      }
    } else {
      // Проверка телефона - минимум 10 цифр
      const digits = leadData.contact.replace(/\D/g, "")
      if (digits.length < 10) {
        errors.contact = "Некорректный номер телефона"
      }
    }

    if (Object.keys(errors).length > 0) {
      setLeadErrors(errors)
      return
    }

    setIsLoading(true)
    setLeadErrors({})
    
    try {
      // Получаем токен reCAPTCHA
      let recaptchaToken = ""
      if (executeRecaptcha) {
        recaptchaToken = await executeRecaptcha("chat_lead")
      }

      const formattedContact = isEmail 
        ? leadData.contact 
        : formatRussianPhone(leadData.contact)

      const transcript = formatChatTranscript(messages)
      const messageForLead =
        leadData.message?.trim()
          ? leadData.message.trim() + "\n\n--- Переписка в чате ---\n" + transcript
          : transcript

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: leadData.name,
          email: isEmail ? leadData.contact : "",
          phone: !isEmail ? formattedContact : "",
          message: messageForLead,
          recaptchaToken,
        }),
      })

      const data = await response.json()

      if (response.ok && data?.success) {
        setLeadSent(true)
        setShowLeadForm(false)
        reachGoal("lead")
        setMessages(prev => [...prev, { 
          role: "assistant", 
          content: "✅ Спасибо! Мы получили ваши контакты и скоро свяжемся с вами!" 
        }])
      } else {
        const errorText = data?.error || "Ошибка отправки. Попробуйте позже."
        setLeadSubmitError(errorText)
        setMessages(prev => [...prev, { 
          role: "assistant", 
          content: `❌ ${errorText}` 
        }])
      }
    } catch {
      const errorText = "Ошибка сети. Проверьте интернет или позвоните: +7 995 095 55 93"
      setLeadSubmitError(errorText)
      setMessages(prev => [...prev, { 
        role: "assistant", 
        content: `❌ ${errorText}` 
      }])
    } finally {
      setIsLoading(false)
    }
  }, [leadData, messages, executeRecaptcha])

  const handleClose = () => {
    setIsOpen(false)
    if (typeof window !== "undefined") {
      localStorage.setItem("chatDismissed", "true")
    }
  }

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Открыть чат"
          title="Открыть чат"
          className="fixed bottom-6 right-6 z-[1100] w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-primary to-pink-600 text-white shadow-lg shadow-primary/25 flex items-center justify-center transition-transform hover:scale-110 active:scale-95"
        >
          <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-background animate-pulse" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[1100] isolate flex h-[500px] w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-2xl border border-zinc-700/90 bg-zinc-950 text-zinc-100 shadow-2xl shadow-black/50 animate-in fade-in slide-in-from-bottom-4 duration-300 sm:h-[550px] sm:w-[400px]">
          {/* Header — непрозрачный слой (theme --card ~5% alpha → «стекло» на всём сайте) */}
          <div className="flex shrink-0 items-center justify-between border-b border-zinc-700/90 bg-zinc-900 p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-pink-600 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-semibold text-zinc-50">YappiX Assistant</div>
                <div className="flex items-center gap-1 text-xs text-green-400">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  Онлайн
                </div>
              </div>
            </div>
            <button
              onClick={handleClose}
              aria-label="Закрыть чат"
              title="Закрыть чат"
              className="rounded-lg p-2 text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-zinc-100"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="min-h-0 flex-1 space-y-4 overflow-y-auto bg-zinc-950 p-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"} animate-in fade-in slide-in-from-bottom-2 duration-200`}
              >
                {msg.role === "assistant" && (
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-pink-600 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                )}
                <div
                  className={`max-w-[80%] whitespace-pre-wrap rounded-2xl p-3 text-sm ${
                    msg.role === "user"
                      ? "rounded-br-md bg-gradient-to-br from-primary to-pink-600 text-white"
                      : "rounded-bl-md border border-zinc-700/80 bg-zinc-900 text-zinc-100"
                  }`}
                >
                  {msg.content}
                </div>
                {msg.role === "user" && (
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-zinc-800">
                    <User className="h-4 w-4 text-zinc-300" />
                  </div>
                )}
              </div>
            ))}
            
            {isLoading && (
              <div className="flex gap-2 justify-start">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-pink-600 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div className="rounded-2xl rounded-bl-md border border-zinc-700/80 bg-zinc-900 p-3">
                  <Loader2 className="h-4 w-4 animate-spin text-zinc-400" />
                </div>
              </div>
            )}

            {/* Lead Form */}
            {showLeadForm && !leadSent && (
              <div className="space-y-3 rounded-xl border border-zinc-600/90 bg-zinc-900 p-4 animate-in fade-in slide-in-from-bottom-2 duration-200">
                <div className="text-sm font-medium text-zinc-50">
                  📝 Оставьте контакты — мы перезвоним!
                </div>
                <div>
                  <Input
                    placeholder="Ваше имя"
                    value={leadData.name}
                    onChange={(e) => {
                      setLeadData({ ...leadData, name: e.target.value })
                      setLeadErrors(prev => ({ ...prev, name: "" }))
                      setLeadSubmitError("")
                    }}
                    className={`border-zinc-600 bg-zinc-950 text-zinc-100 placeholder:text-zinc-500 ${leadErrors.name ? "border-red-500" : ""}`}
                  />
                  {leadErrors.name && (
                    <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {leadErrors.name}
                    </p>
                  )}
                </div>
                <div>
                  <Input
                    placeholder="Телефон или Email"
                    value={leadData.contact}
                    onChange={(e) => {
                      setLeadData({ ...leadData, contact: e.target.value })
                      setLeadErrors(prev => ({ ...prev, contact: "" }))
                      setLeadSubmitError("")
                    }}
                    className={`border-zinc-600 bg-zinc-950 text-zinc-100 placeholder:text-zinc-500 ${leadErrors.contact ? "border-red-500" : ""}`}
                  />
                  {leadErrors.contact && (
                    <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {leadErrors.contact}
                    </p>
                  )}
                </div>
                <Textarea
                  placeholder="Кратко о проекте (опционально)"
                  value={leadData.message}
                  onChange={(e) => {
                    setLeadData({ ...leadData, message: e.target.value })
                    setLeadSubmitError("")
                  }}
                  className="h-16 resize-none border-zinc-600 bg-zinc-950 text-zinc-100 placeholder:text-zinc-500"
                />
                <Button
                  onClick={submitLead}
                  disabled={!leadData.name || !leadData.contact || isLoading}
                  className="w-full"
                >
                  {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Отправить"}
                </Button>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {showLeadForm && typeof leadSubmitError === "string" && leadSubmitError.trim().length > 0 && (
            <div className="px-4 pb-2">
              <div className="text-xs text-red-500 bg-red-500/10 border border-red-500/30 rounded-md px-2.5 py-2">
                {leadSubmitError}
              </div>
            </div>
          )}

          {/* Quick Actions */}
          <div className="flex shrink-0 gap-2 overflow-x-auto border-zinc-800/90 bg-zinc-900 px-4 pb-2">
            <button
              type="button"
              onClick={() => window.open("tel:+79950955593")}
              className="flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border border-zinc-600/90 bg-zinc-800 px-3 py-1.5 text-xs text-zinc-200 transition-colors hover:bg-zinc-700 hover:text-white"
            >
              <Phone className="w-3 h-3" />
              Позвонить
            </button>
            <button
              type="button"
              onClick={() => {
                reachGoal("lead")
                window.open("https://t.me/yappix_bot")
              }}
              className="flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border border-zinc-600/90 bg-zinc-800 px-3 py-1.5 text-xs text-zinc-200 transition-colors hover:bg-zinc-700 hover:text-white"
            >
              <MessageCircle className="w-3 h-3" />
              Telegram
            </button>
            <button
              type="button"
              onClick={() => window.open("mailto:sales@yappix.ru")}
              className="flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border border-zinc-600/90 bg-zinc-800 px-3 py-1.5 text-xs text-zinc-200 transition-colors hover:bg-zinc-700 hover:text-white"
            >
              <Mail className="w-3 h-3" />
              Email
            </button>
          </div>

          {/* Input */}
          <div className="shrink-0 border-t border-zinc-700/90 bg-zinc-900 p-4">
            <form
              onSubmit={(e) => {
                e.preventDefault()
                sendMessage()
              }}
              className="flex gap-2"
            >
              <Input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Напишите сообщение..."
                className="flex-1 border-zinc-600 bg-zinc-950 text-zinc-100 placeholder:text-zinc-500"
                disabled={isLoading}
              />
              <Button type="submit" size="icon" disabled={!input.trim() || isLoading}>
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
