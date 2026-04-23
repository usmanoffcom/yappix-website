"use client"

import Script from "next/script"

const TMR_ID = "3749570"

export function MailRuTop() {
  return (
    <>
      <Script id="mail-ru-top-init" strategy="afterInteractive">
        {`
          var _tmr = window._tmr || (window._tmr = []);
          _tmr.push({id: "${TMR_ID}", type: "pageView", start: (new Date()).getTime()});
        `}
      </Script>
      <Script id="mail-ru-top-code" strategy="afterInteractive">
        {`
          (function (d, w, id) {
            if (d.getElementById(id)) return;
            var ts = d.createElement("script"); ts.type = "text/javascript"; ts.async = true; ts.id = id;
            ts.src = "https://top-fwz1.mail.ru/js/code.js";
            var f = function () { var s = d.getElementsByTagName("script")[0]; s.parentNode.insertBefore(ts, s); };
            if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); }
          })(document, window, "tmr-code");
        `}
      </Script>
    </>
  )
}
