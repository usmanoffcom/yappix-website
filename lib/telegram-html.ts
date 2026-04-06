/**
 * Экранирование для Telegram sendMessage с parse_mode: "HTML".
 * Символы <, >, & в тексте пользователя ломают разбор и дают ok: false — письмо при этом может уйти.
 */
export function escapeTelegramHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
}
