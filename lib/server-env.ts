/**
 * Server-only env via bracket access so values stay runtime (from `.env.production`
 * / PM2) and are not replaced at `next build` when the key was absent on CI.
 */
export function serverEnv(name: string): string | undefined {
  const v = process.env[name]
  if (v === undefined || v === "") return undefined
  let t = v.trim()
  // Снимаем окружающие кавычки, если их положили в .env вручную ('secret' или "secret").
  if (t.length >= 2) {
    const a = t[0]
    const b = t[t.length - 1]
    if ((a === "'" && b === "'") || (a === '"' && b === '"')) {
      t = t.slice(1, -1).trim()
    }
  }
  return t === "" ? undefined : t
}
