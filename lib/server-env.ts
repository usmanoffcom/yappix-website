/**
 * Server-only env via bracket access so values stay runtime (from `.env.production`
 * / PM2) and are not replaced at `next build` when the key was absent on CI.
 */
export function serverEnv(name: string): string | undefined {
  const v = process.env[name]
  if (v === undefined || v === "") return undefined
  const t = v.trim()
  return t === "" ? undefined : t
}
