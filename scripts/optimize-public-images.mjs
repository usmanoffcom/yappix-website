#!/usr/bin/env node
/**
 * Паковка растров в public/ через sharp (уже в dependencies).
 * Не трогает: .svg, .ico, .gif (анимированные — отдельно: gifsicle / ffmpeg / mp4).
 *
 * Сухой прогон (по умолчанию):
 *   node scripts/optimize-public-images.mjs
 * Записать:
 *   node scripts/optimize-public-images.mjs --write
 * Порог и размер:
 *   node scripts/optimize-public-images.mjs --write --min-kb=120 --max-width=1920
 */
import { readdir, stat, readFile, writeFile } from "node:fs/promises"
import { join, extname, relative } from "node:path"
import process from "node:process"
import { fileURLToPath } from "node:url"
import sharp from "sharp"

const __dirname = fileURLToPath(new URL(".", import.meta.url))
const projectRoot = join(__dirname, "..")

const args = process.argv.slice(2)
const doWrite = args.includes("--write")
const dryRun = !doWrite

let minBytes = 80 * 1024
let maxW = 2048
let jpegQ = 82
let webpQ = 82
let pngLevel = 9
let minSavingRatio = 0.95

for (const a of args) {
  if (a.startsWith("--min-kb=")) minBytes = Math.max(0, parseInt(a.split("=")[1], 10) * 1024)
  if (a.startsWith("--max-width=")) maxW = Math.max(320, parseInt(a.split("=")[1], 10))
  if (a.startsWith("--jpeg-quality=")) jpegQ = Math.min(100, Math.max(40, parseInt(a.split("=")[1], 10)))
  if (a.startsWith("--webp-quality=")) webpQ = Math.min(100, Math.max(40, parseInt(a.split("=")[1], 10)))
  if (a.startsWith("--min-saving=")) minSavingRatio = Math.min(1, Math.max(0.5, parseFloat(a.split("=")[1])))
}

const roots = (() => {
  const extra = args.filter((x) => !x.startsWith("-") && !x.includes("="))
  if (extra.length) return extra.map((p) => (p.startsWith("/") ? p : join(projectRoot, p)))
  return [join(projectRoot, "public/images")]
})()

const exts = new Set([".jpg", ".jpeg", ".png", ".webp"])

let totalIn = 0
let totalOut = 0
let filesN = 0
let errors = 0

async function walk(dir) {
  const names = await readdir(dir, { withFileTypes: true })
  for (const e of names) {
    const p = join(dir, e.name)
    if (e.isDirectory()) {
      if (e.name === "node_modules" || e.name === ".git") continue
      await walk(p)
    } else {
      const ext = extname(e.name).toLowerCase()
      if (!exts.has(ext)) continue
      const st = await stat(p)
      if (st.size < minBytes) continue
      await processFile(p, st.size, ext)
    }
  }
}

async function processFile(absPath, sizeBefore, ext) {
  const rel = relative(projectRoot, absPath)
  let buf
  try {
    const input = await readFile(absPath)
    const base = sharp(input).rotate()
    const meta = await base.metadata()
    const w0 = meta.width || maxW
    const h0 = meta.height || maxW
    const needResize = w0 > maxW || h0 > maxW
    const pipeline = needResize
      ? base.resize({ width: maxW, height: maxW, fit: "inside", withoutEnlargement: true })
      : base

    if (ext === ".png") {
      buf = await pipeline
        .png({ compressionLevel: pngLevel, adaptiveFiltering: true, effort: 7 })
        .toBuffer()
    } else if (ext === ".jpg" || ext === ".jpeg") {
      buf = await pipeline.jpeg({ quality: jpegQ, mozjpeg: true }).toBuffer()
    } else if (ext === ".webp") {
      buf = await pipeline.webp({ quality: webpQ, effort: 4 }).toBuffer()
    }
  } catch (e) {
    console.warn(`[skip] ${rel}: ${e?.message || e}`)
    errors++
    return
  }

  if (!buf || buf.length >= sizeBefore * minSavingRatio) {
    return
  }

  totalIn += sizeBefore
  totalOut += buf.length
  filesN++
  const pct = (((sizeBefore - buf.length) / sizeBefore) * 100).toFixed(1)
  const action = dryRun ? "would save" : "wrote"
  console.log(`${action}\t${rel}\t${(sizeBefore / 1024).toFixed(0)}→${(buf.length / 1024).toFixed(0)} KB\t-${pct}%`)

  if (doWrite) {
    await writeFile(absPath, buf)
  }
}

console.log(
  `optimize-public-images: dryRun=${dryRun} roots=${roots.map((r) => relative(projectRoot, r)).join(", ")} ` +
    `minKB=${(minBytes / 1024).toFixed(0)} maxW=${maxW} jpegQ=${jpegQ} webpQ=${webpQ}`
)
for (const r of roots) {
  try {
    await walk(r)
  } catch (e) {
    console.error(`[error] ${r}:`, e?.message || e)
    process.exitCode = 1
  }
}

const saved = totalIn - totalOut
console.log("---")
console.log(
  `Files ${dryRun ? "to update" : "updated"}: ${filesN} | before ${(totalIn / 1e6).toFixed(2)} MB | after ${(totalOut / 1e6).toFixed(2)} MB | saved ${(saved / 1e6).toFixed(2)} MB`
)
if (errors) console.log(`Errors/skips: ${errors}`)
if (dryRun) console.log("Run with --write to apply (backup git first).")
