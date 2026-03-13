#!/usr/bin/env python3
"""
Сканирование всего сайта по sitemap: HTTP статус, H1, базовая разметка Open Graph.
Результат: CSV в корне + вывод в консоль.
"""
import re
import sys
import csv
import urllib.request
import urllib.error
from html.parser import HTMLParser
from xml.etree import ElementTree as ET

BASE = "https://yappix.ru"
SITEMAP = f"{BASE}/sitemap.xml"
REQUIRED_OG = ["og:title", "og:description", "og:type", "og:url", "og:image"]
USER_AGENT = "YappiX-SEO-Scan/1.0"


def fetch(url, timeout=15):
    req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    try:
        with urllib.request.urlopen(req, timeout=timeout) as r:
            return r.getcode(), r.read().decode("utf-8", errors="replace")
    except urllib.error.HTTPError as e:
        return e.code, e.read().decode("utf-8", errors="replace") if e.fp else ""
    except Exception as e:
        return -1, str(e)


def get_sitemap_urls():
    code, body = fetch(SITEMAP)
    if code != 200:
        return []
    urls = []
    for m in re.finditer(r"<loc>\s*([^<]+)\s*</loc>", body, re.I):
        urls.append(m.group(1).strip())
    return sorted(set(urls))


def parse_meta_og(html):
    out = {}
    for m in re.finditer(
        r'<meta\s+[^>]*(?:property|name)\s*=\s*["\'](og:[^"\']+)["\'][^>]*content\s*=\s*["\']([^"\']*)["\']',
        html,
        re.I,
    ):
        out[m.group(1).lower()] = m.group(2).strip()
    for m in re.finditer(
        r'<meta\s+[^>]*content\s*=\s*["\']([^"\']*)["\'][^>]*(?:property|name)\s*=\s*["\'](og:[^"\']+)["\']',
        html,
        re.I,
    ):
        out[m.group(2).lower()] = m.group(1).strip()
    return out


def count_h1(html):
    return len(re.findall(r"<h1\b", html, re.I))


def scan_url(url):
    code, body = fetch(url)
    if isinstance(code, int) and code < 0:
        return {"url": url, "status": "ERR", "h1": 0, "og_ok": False, "errors": [body]}
    og = parse_meta_og(body)
    h1 = count_h1(body)
    missing_og = [k for k in REQUIRED_OG if not (og.get(k) or "").strip()]
    og_ok = len(missing_og) == 0
    errors = []
    if code != 200:
        errors.append(f"HTTP {code}")
    if h1 != 1:
        errors.append(f"H1 x{h1}")
    if not og_ok:
        errors.append("OG не заполнена: " + ", ".join(missing_og))
    return {
        "url": url,
        "status": code,
        "h1": h1,
        "og_ok": og_ok,
        "errors": errors,
        "og_title": (og.get("og:title") or "")[:80],
    }


def main():
    urls = get_sitemap_urls()
    if not urls:
        print("Не удалось загрузить sitemap", file=sys.stderr)
        sys.exit(1)
    print(f"Сканирование {len(urls)} URL из sitemap...")
    results = []
    for i, url in enumerate(urls, 1):
        r = scan_url(url)
        results.append(r)
        err_str = "; ".join(r["errors"]) if r["errors"] else "—"
        print(f"{i:3}/{len(urls)} {r['status']} H1={r['h1']} OG={'✓' if r['og_ok'] else '✗'} {url} | {err_str}")
    out_csv = "scan-site-seo-result.csv"
    with open(out_csv, "w", newline="", encoding="utf-8") as f:
        w = csv.DictWriter(
            f,
            fieldnames=["url", "status", "h1", "og_ok", "errors", "og_title"],
            extrasaction="ignore",
        )
        w.writeheader()
        for r in results:
            r["errors"] = "; ".join(r["errors"])
            w.writerow(r)
    issues = [r for r in results if r["errors"]]
    print(f"\nИтого: {len(results)} страниц, с замечаниями: {len(issues)}")
    print(f"Результат сохранён: {out_csv}")
    if issues:
        print("\nСтраницы с замечаниями:")
        for r in issues:
            print(f"  {r['url']} | {r['errors']}")
    return 0 if not issues else 1


if __name__ == "__main__":
    sys.exit(main())
