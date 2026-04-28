/**
 * Запросы к внешним HTTPS API с VDS без прямого маршрута часто нуждаются в прокси.
 * ---
 * Telegram: с некоторых сетей `api.telegram.org:443` таймаутит — задайте
 * TELEGRAM_HTTPS_PROXY или общий HTTPS_PROXY (http CONNECT, формат http://host:3128 ).
 * ---
 * OpenRouter: при блокировках — OPENROUTER_HTTPS_PROXY или HTTPS_PROXY .
 */
import { ProxyAgent, fetch as undiciFetch } from "undici"

import { serverEnv } from "@/lib/server-env"

const proxyCache = new Map<string, ProxyAgent>()

function getDispatcher(forWhat: "telegram" | "openrouter"): ProxyAgent | undefined {
  let url: string | undefined
  if (forWhat === "telegram") {
    url =
      serverEnv("TELEGRAM_HTTPS_PROXY") ||
      serverEnv("HTTPS_PROXY") ||
      serverEnv("ALL_PROXY")
  } else {
    url =
      serverEnv("OPENROUTER_HTTPS_PROXY") ||
      serverEnv("HTTPS_PROXY") ||
      serverEnv("ALL_PROXY")
  }
  if (!url?.trim()) return undefined
  const key = url.trim()
  if (!proxyCache.has(key)) {
    try {
      proxyCache.set(key, new ProxyAgent(key))
    } catch {
      console.error("[proxy-fetch] неверный URL прокси:", key.slice(0, 24))
      return undefined
    }
  }
  return proxyCache.get(key)
}

export async function telegramBotFetch(input: string, init?: RequestInit) {
  const dispatcher = getDispatcher("telegram")
  return undiciFetch(input, {
    ...init,
    ...(dispatcher ? { dispatcher } : {}),
  } as Parameters<typeof undiciFetch>[1])
}

/** Чат сайта → OpenRouter. */
export async function openRouterFetch(input: string, init?: RequestInit) {
  const dispatcher = getDispatcher("openrouter")
  return undiciFetch(input, {
    ...init,
    ...(dispatcher ? { dispatcher } : {}),
  } as Parameters<typeof undiciFetch>[1])
}

export function proxyConfigured(which: "telegram" | "openrouter"): boolean {
  return Boolean(getDispatcher(which))
}
