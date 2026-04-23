# YappiX Website - Руководство разработчика

## 🚀 Быстрый старт

### 1. Клонирование репозитория
```bash
git clone git@github.com:usmanoffcom/yappix-website-seo.git
cd yappix-website-seo
```

### 2. Установка зависимостей
```bash
npm install --legacy-peer-deps
```

### 3. Запуск локально
```bash
npm run dev
```
Открой http://localhost:3000

---

## 📦 Стек технологий

- **Framework:** Next.js 14.2.21
- **React:** 18.2.0
- **Styling:** Tailwind CSS 4.x
- **3D:** @splinetool/react-spline 2.2.6
- **UI:** Radix UI, Lucide Icons
- **Forms:** React Hook Form + Zod

---

## 🌐 Деплой на VDS

### Автоматический деплой (рекомендуется)

После пуша в main, зайди на сервер и выполни:
```bash
ssh root@80.249.150.154
cd /var/www/yappix.ru
./deploy.sh
```

### Ручной деплой
```bash
ssh root@80.249.150.154
cd /var/www/yappix.ru
git pull origin main
npm install --legacy-peer-deps
npm run build
pm2 restart yappix-ru
```

---

## 🔑 Доступы

### VDS Сервер
- **IP:** 80.249.150.154
- **User:** root
- **Password:** wR_DUF3Ays3kVu
- **SSH:** `ssh root@80.249.150.154`

### Пути на сервере
- **Проект:** /var/www/yappix.ru
- **PM2 процесс:** yappix-ru
- **Порт:** 3001
- **Nginx:** /etc/nginx/sites-available/yappix.ru

### GitHub
- **Repo:** https://github.com/usmanoffcom/yappix-website-seo
- **Branch:** main

---

## 📁 Структура проекта

```
yappix-website-seo/
├── app/                    # Next.js App Router
│   ├── api/               # API Routes
│   │   ├── chat/          # AI чат-бот (OpenRouter)
│   │   └── contact/       # Форма заявок (Telegram)
│   ├── blog/              # Блог
│   ├── kejsy/             # Кейсы
│   ├── uslugi/            # Услуги
│   └── layout.tsx         # Корневой layout
├── components/            # React компоненты
│   ├── hero-section.tsx   # Главный экран + Spline робот
│   ├── chat-widget.tsx    # AI чат виджет
│   └── ...
├── public/                # Статика
└── package.json
```

---

## 🤖 AI Чат-бот

Использует OpenRouter API с моделью GPT-4o-mini.

**API ключ:** В `app/api/chat/route.ts`

---

## 📨 Заявки (Leads)

Заявки отправляются в Telegram группу **yappix_leads**.

**Настройки в** `app/api/contact/route.ts`:
- Bot Token: 8317760178:AAEUGZWwyAWBaHVW-umTrV29V3FcCTCIRyQ
- Chat ID: -1002757127968

---

## 🎨 Spline 3D

### Сцены
- **Робот (desktop ≥1200px):** https://prod.spline.design/YsrhGK1AHO4x8zaQ/scene.splinecode
- **Фон (mobile <1200px):** https://prod.spline.design/YMKHOsTacHbgDg3g/scene.splinecode

### Использование
```tsx
import dynamic from 'next/dynamic'

const Spline = dynamic(() => import('@splinetool/react-spline').then(m => m.default), {
  ssr: false
})

<Spline scene="https://prod.spline.design/YsrhGK1AHO4x8zaQ/scene.splinecode" />
```

---

## 🛠 Полезные команды

### Локально
```bash
npm run dev          # Запуск dev сервера
npm run build        # Сборка
npm run lint         # Проверка кода
```

### На сервере
```bash
pm2 status           # Статус процессов
pm2 logs yappix-ru   # Логи
pm2 restart yappix-ru # Перезапуск
```

---

## ⚠️ Важно

1. **Версии пакетов** - не обновляй Next.js выше 14.x и Spline выше 2.2.6 (баги с React 18)
2. **Legacy peer deps** - всегда используй `--legacy-peer-deps` при npm install
3. **Кэш браузера** - после деплоя очищай кэш (Ctrl+Shift+R)

---

## 📞 Контакты

- **Сайт:** https://yappix.ru
- **Телефон:** +7 995 095 55 93
- **Telegram:** @yappix
