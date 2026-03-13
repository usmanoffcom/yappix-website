"use client"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="ru">
      <head>
        <style>{`
          .g-error-body { margin: 0; font-family: system-ui, sans-serif; min-height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 1.5rem; text-align: center; background-color: #0a0a0f; color: #fafafa; }
          .g-error-title { font-size: 1.25rem; font-weight: 600; margin-bottom: 0.5rem; }
          .g-error-text { color: #a1a1aa; margin-bottom: 1.5rem; max-width: 20rem; }
          .g-error-actions { display: flex; gap: 0.75rem; }
          .g-error-btn { padding: 0.5rem 1rem; border-radius: 0.5rem; background: #ec4899; color: #fff; border: none; cursor: pointer; }
          .g-error-link { padding: 0.5rem 1rem; border-radius: 0.5rem; border: 1px solid #27272a; color: #fafafa; text-decoration: none; }
        `}</style>
      </head>
      <body className="g-error-body">
        <h1 className="g-error-title">Что-то пошло не так</h1>
        <p className="g-error-text">
          Перезагрузите страницу или перейдите на главную.
        </p>
        <div className="g-error-actions">
          <button type="button" onClick={() => reset()} className="g-error-btn">
            Повторить
          </button>
          <a href="/" className="g-error-link">
            На главную
          </a>
        </div>
      </body>
    </html>
  )
}
