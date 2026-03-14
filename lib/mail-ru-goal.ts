/**
 * Отправка целевого события в счётчик Top.Mail.Ru (id 3749537).
 * В интерфейсе VK в «Название JS-события» укажите то же имя, что передаёте в goal.
 * Пример: reachGoal("lead") — в форме введите "lead".
 */
const TMR_ID = "3749537"

export function reachGoal(goal: string): void {
  if (typeof window === "undefined") return
  const _tmr = (window as { _tmr?: unknown[] })._tmr
  if (!Array.isArray(_tmr)) return
  _tmr.push({ type: "reachGoal", id: TMR_ID, goal })
}
