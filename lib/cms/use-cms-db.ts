/** Включить чтение блога/кейсов/шаблонов из БД (после migrate + seed). */
export function useCmsDb(): boolean {
  return process.env.USE_CMS_DB === "1" && Boolean(process.env.DATABASE_URL?.trim())
}
