"use client"

import Script from "next/script"

const YM_ID = 95481194

export function YandexMetrika() {
  return (
    <>
      <Script
        src="https://mc.yandex.ru/metrika/tag.js"
        strategy="lazyOnload"
        onLoad={() => {
          if (typeof window !== "undefined" && (window as any).ym) {
            (window as any).ym(YM_ID, "init", {
              webvisor: true,
              clickmap: true,
              accurateTrackBounce: true,
              trackLinks: true,
            })
          }
        }}
      />
      <noscript>
        <div>
          <img
            src={`https://mc.yandex.ru/watch/${YM_ID}`}
            width={1}
            height={1}
            alt="Счётчик Яндекс.Метрики"
            loading="lazy"
            className="absolute left-[-9999px]"
          />
        </div>
      </noscript>
    </>
  )
}
