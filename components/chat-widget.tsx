"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { useGoogleReCaptcha } from "react-google-recaptcha-v3"
import { MessageCircle, X, Send, Bot, User, Loader2, Phone, Mail, Sparkles, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { validateName, validateEmail, formatRussianPhone } from "@/lib/validation"

interface Message {
  role: "user" | "assistant"
  content: string
}

const INITIAL_MESSAGE = `👋 Привет! Я AI-ассистент YappiX.

Чем могу помочь?
• Рассказать об услугах
• Оценить ваш проект
• Связать с менеджером

Напишите ваш вопрос!`

export function ChatWidget() {
  const { executeRecaptcha } = useGoogleReCaptcha()
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: INITIAL_MESSAGE }
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showLeadForm, setShowLeadForm] = useState(false)
  const [leadData, setLeadData] = useState({ name: "", contact: "", message: "" })
  const [leadErrors, setLeadErrors] = useState<Record<string, string>>({})
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

      const data = await response.json()
      
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

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: leadData.name,
          email: isEmail ? leadData.contact : "",
          phone: !isEmail ? formattedContact : "",
          message: leadData.message || "Заявка из чата",
          recaptchaToken,
        }),
      })

      if (response.ok) {
        setLeadSent(true)
        setMessages(prev => [...prev, { 
          role: "assistant", 
          content: "✅ Спасибо! Мы получили ваши контакты и скоро свяжемся с вами!" 
        }])
      } else {
        const data = await response.json()
        setMessages(prev => [...prev, { 
          role: "assistant", 
          content: `❌ ${data.error || "Ошибка отправки. Попробуйте позже."}` 
        }])
      }
    } catch {
      setMessages(prev => [...prev, { 
        role: "assistant", 
        content: "❌ Ошибка сети. Позвоните: +7 995 095 55 93" 
      }])
    } finally {
      setIsLoading(false)
      setShowLeadForm(false)
    }
  }, [leadData, executeRecaptcha])

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
          className="fixed bottom-6 right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-primary to-pink-600 text-white shadow-lg shadow-primary/25 flex items-center justify-center transition-transform hover:scale-110 active:scale-95"
        >
          <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-background animate-pulse" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[400px] h-[500px] sm:h-[550px] bg-card border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border bg-gradient-to-r from-primary/10 to-pink-600/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-pink-600 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-semibold text-foreground">YappiX Assistant</div>
                <div className="text-xs text-green-500 flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  Онлайн
                </div>
              </div>
            </div>
            <button
              onClick={handleClose}
              className="p-2 hover:bg-secondary rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
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
                  className={`max-w-[80%] p-3 rounded-2xl text-sm whitespace-pre-wrap ${
                    msg.role === "user"
                      ? "bg-primary text-primary-foreground rounded-br-md"
                      : "bg-secondary text-foreground rounded-bl-md"
                  }`}
                >
                  {msg.content}
                </div>
                {msg.role === "user" && (
                  <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <User className="w-4 h-4 text-muted-foreground" />
                  </div>
                )}
              </div>
            ))}
            
            {isLoading && (
              <div className="flex gap-2 justify-start">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-pink-600 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div className="bg-secondary p-3 rounded-2xl rounded-bl-md">
                  <Loader2 className="w-4 h-4 animate-spin text-muted-foreground" />
                </div>
              </div>
            )}

            {/* Lead Form */}
            {showLeadForm && !leadSent && (
              <div className="bg-gradient-to-br from-primary/10 to-pink-600/10 border border-primary/20 rounded-xl p-4 space-y-3 animate-in fade-in slide-in-from-bottom-2 duration-200">
                <div className="text-sm font-medium text-foreground">
                  📝 Оставьте контакты — мы перезвоним!
                </div>
                <div>
                  <Input
                    placeholder="Ваше имя"
                    value={leadData.name}
                    onChange={(e) => {
                      setLeadData({ ...leadData, name: e.target.value })
                      setLeadErrors(prev => ({ ...prev, name: "" }))
                    }}
                    className={`bg-background/50 ${leadErrors.name ? "border-red-500" : ""}`}
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
                    }}
                    className={`bg-background/50 ${leadErrors.contact ? "border-red-500" : ""}`}
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
                  onChange={(e) => setLeadData({ ...leadData, message: e.target.value })}
                  className="bg-background/50 resize-none h-16"
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

          {/* Quick Actions */}
          <div className="px-4 pb-2 flex gap-2 overflow-x-auto">
            <button
              onClick={() => window.open("tel:+79950955593")}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-secondary rounded-full text-xs text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
            >
              <Phone className="w-3 h-3" />
              Позвонить
            </button>
            <button
              onClick={() => window.open("https://t.me/yappix_bot")}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-secondary rounded-full text-xs text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
            >
              <MessageCircle className="w-3 h-3" />
              Telegram
            </button>
            <button
              onClick={() => window.open("mailto:sales@yappix.ru")}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-secondary rounded-full text-xs text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
            >
              <Mail className="w-3 h-3" />
              Email
            </button>
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border">
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
                className="flex-1"
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
