"use client"

import { useEffect } from "react"
import Link from "next/link"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-xl font-semibold text-foreground mb-2">
        Что-то пошло не так
      </h1>
      <p className="text-muted-foreground mb-6 max-w-sm">
        Перезагрузите страницу или перейдите на главную.
      </p>
      <div className="flex gap-3">
        <button
          type="button"
          onClick={() => reset()}
          className="px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:opacity-90"
        >
          Повторить
        </button>
        <Link
          href="/"
          className="px-4 py-2 rounded-lg border border-border text-foreground hover:bg-secondary"
        >
          На главную
        </Link>
      </div>
    </main>
  )
}
