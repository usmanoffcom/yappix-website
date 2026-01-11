// Валидация и защита от спама

// reCAPTCHA ключи
export const RECAPTCHA_SITE_KEY = "6LcwakcsAAAAAD_Fo5Ogl7WFft8l7EuDOAPqny-F"
export const RECAPTCHA_SECRET_KEY = "6LcwakcsAAAAADbB0QGqWTG3Tuxo4Mqg6Kmow0Ff"

// Паттерны для валидации email
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const DISPOSABLE_DOMAINS = [
  "tempmail.com", "guerrillamail.com", "10minutemail.com", "mailinator.com",
  "throwaway.email", "temp-mail.org", "fakeinbox.com", "getnada.com",
  "yopmail.com", "maildrop.cc", "discard.email", "mailnesia.com"
]

// Паттерны спама в именах
const SPAM_NAME_PATTERNS = [
  /^[a-z]{1,2}$/i, // Слишком короткие
  /^[^a-zа-яё\s]+$/i, // Только спецсимволы
  /\d{3,}/, // Много цифр подряд
  /(.)\1{3,}/, // Повторяющиеся символы (aaaa)
  /^(test|testing|qwerty|asdf|admin|user|demo|sample|example)$/i,
  /[<>{}[\]\\\/]/,  // HTML/код
  /https?:\/\//i, // Ссылки
  /^[qweasdzxcrtyfghvbnuiojklmp]{4,}$/i, // Случайная раскладка
]

// Паттерны спама в названиях компаний
const SPAM_COMPANY_PATTERNS = [
  /^[a-z]{1,2}$/i,
  /\d{5,}/,
  /(.)\1{4,}/,
  /^(test|testing|company|firm|org|corp|inc|llc|ooo|ооо)$/i,
  /[<>{}[\]\\\/]/,
  /https?:\/\//i,
  /^[qweasdzxcrtyfghvbnuiojklmp]{5,}$/i,
]

// Русские имена для валидации
const RUSSIAN_NAME_PATTERNS = [
  /^[а-яёА-ЯЁ][а-яёА-ЯЁ\s-]{1,50}$/,
  /^[a-zA-Z][a-zA-Z\s-]{1,50}$/,
]

/**
 * Валидация email
 */
export function validateEmail(email: string): { valid: boolean; error?: string } {
  if (!email) {
    return { valid: false, error: "Email обязателен" }
  }
  
  const trimmedEmail = email.trim().toLowerCase()
  
  if (!EMAIL_REGEX.test(trimmedEmail)) {
    return { valid: false, error: "Некорректный формат email" }
  }
  
  const domain = trimmedEmail.split("@")[1]
  if (DISPOSABLE_DOMAINS.some(d => domain.includes(d))) {
    return { valid: false, error: "Используйте корпоративный email" }
  }
  
  // Проверка на подозрительные паттерны
  const localPart = trimmedEmail.split("@")[0]
  if (/^[0-9]+$/.test(localPart) || localPart.length < 2) {
    return { valid: false, error: "Некорректный email" }
  }
  
  return { valid: true }
}

/**
 * Валидация имени
 */
export function validateName(name: string): { valid: boolean; error?: string } {
  if (!name || name.trim().length < 2) {
    return { valid: false, error: "Введите ваше имя" }
  }
  
  const trimmedName = name.trim()
  
  // Проверка на спам-паттерны
  for (const pattern of SPAM_NAME_PATTERNS) {
    if (pattern.test(trimmedName)) {
      return { valid: false, error: "Введите настоящее имя" }
    }
  }
  
  // Проверка на допустимые символы
  const hasValidPattern = RUSSIAN_NAME_PATTERNS.some(p => p.test(trimmedName))
  if (!hasValidPattern) {
    return { valid: false, error: "Имя должно содержать только буквы" }
  }
  
  return { valid: true }
}

/**
 * Валидация названия компании
 */
export function validateCompany(company: string): { valid: boolean; error?: string } {
  if (!company) {
    return { valid: true } // Необязательное поле
  }
  
  const trimmedCompany = company.trim()
  
  if (trimmedCompany.length < 2) {
    return { valid: false, error: "Слишком короткое название" }
  }
  
  for (const pattern of SPAM_COMPANY_PATTERNS) {
    if (pattern.test(trimmedCompany)) {
      return { valid: false, error: "Введите настоящее название компании" }
    }
  }
  
  return { valid: true }
}

/**
 * Форматирование российского телефона
 * 89XX -> +79XX
 */
export function formatRussianPhone(phone: string): string {
  // Удаляем все кроме цифр
  const digits = phone.replace(/\D/g, "")
  
  // Если начинается с 8 и 11 цифр - российский номер
  if (digits.startsWith("8") && digits.length === 11) {
    return "+7" + digits.slice(1)
  }
  
  // Если начинается с 7 и 11 цифр
  if (digits.startsWith("7") && digits.length === 11) {
    return "+" + digits
  }
  
  // Если 10 цифр без кода - добавляем +7
  if (digits.length === 10 && digits.startsWith("9")) {
    return "+7" + digits
  }
  
  return phone
}

/**
 * Валидация телефона
 */
export function validatePhone(phone: string): { valid: boolean; error?: string; formatted?: string } {
  if (!phone) {
    return { valid: true } // Необязательное поле
  }
  
  const formatted = formatRussianPhone(phone)
  const digits = formatted.replace(/\D/g, "")
  
  // Минимум 10 цифр для международного номера
  if (digits.length < 10) {
    return { valid: false, error: "Некорректный номер телефона" }
  }
  
  // Максимум 15 цифр (международный стандарт)
  if (digits.length > 15) {
    return { valid: false, error: "Слишком длинный номер" }
  }
  
  return { valid: true, formatted }
}

/**
 * Валидация сообщения
 */
export function validateMessage(message: string): { valid: boolean; error?: string } {
  if (!message || message.trim().length < 10) {
    return { valid: false, error: "Сообщение слишком короткое (минимум 10 символов)" }
  }
  
  if (message.length > 5000) {
    return { valid: false, error: "Сообщение слишком длинное" }
  }
  
  // Проверка на спам
  const lowerMessage = message.toLowerCase()
  const spamKeywords = ["casino", "viagra", "crypto", "bitcoin", "lottery", "winner"]
  if (spamKeywords.some(kw => lowerMessage.includes(kw))) {
    return { valid: false, error: "Сообщение содержит недопустимый контент" }
  }
  
  return { valid: true }
}

/**
 * Проверка reCAPTCHA на сервере
 */
export async function verifyRecaptcha(token: string): Promise<{ success: boolean; score?: number; error?: string }> {
  try {
    const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${RECAPTCHA_SECRET_KEY}&response=${token}`,
    })
    
    const data = await response.json()
    
    if (!data.success) {
      return { success: false, error: "Проверка безопасности не пройдена" }
    }
    
    // reCAPTCHA v3 возвращает score от 0.0 до 1.0
    // 1.0 = человек, 0.0 = бот
    if (data.score && data.score < 0.3) {
      return { success: false, score: data.score, error: "Подозрительная активность" }
    }
    
    return { success: true, score: data.score }
  } catch (error) {
    console.error("reCAPTCHA verification error:", error)
    return { success: false, error: "Ошибка проверки безопасности" }
  }
}

/**
 * Комплексная валидация формы
 */
export function validateContactForm(data: {
  name: string
  email: string
  phone?: string
  company?: string
  message: string
}): { valid: boolean; errors: Record<string, string> } {
  const errors: Record<string, string> = {}
  
  const nameValidation = validateName(data.name)
  if (!nameValidation.valid) errors.name = nameValidation.error!
  
  const emailValidation = validateEmail(data.email)
  if (!emailValidation.valid) errors.email = emailValidation.error!
  
  if (data.phone) {
    const phoneValidation = validatePhone(data.phone)
    if (!phoneValidation.valid) errors.phone = phoneValidation.error!
  }
  
  if (data.company) {
    const companyValidation = validateCompany(data.company)
    if (!companyValidation.valid) errors.company = companyValidation.error!
  }
  
  const messageValidation = validateMessage(data.message)
  if (!messageValidation.valid) errors.message = messageValidation.error!
  
  return {
    valid: Object.keys(errors).length === 0,
    errors
  }
}
