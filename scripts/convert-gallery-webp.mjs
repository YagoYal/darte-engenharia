import sharp from 'sharp'
import { readdirSync, statSync, existsSync } from 'fs'
import { join, extname, basename, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const BASE = join(__dirname, '..', 'src', 'assets', 'images', 'experiencia')

function walk(dir) {
  const entries = []
  for (const name of readdirSync(dir)) {
    const full = join(dir, name)
    if (statSync(full).isDirectory()) {
      entries.push(...walk(full))
    } else {
      entries.push(full)
    }
  }
  return entries
}

const EXTS = new Set(['.jpg', '.jpeg', '.png'])
const files = walk(BASE).filter(f => EXTS.has(extname(f).toLowerCase()))

let totalBefore = 0
let totalAfter = 0

for (const src of files) {
  const ext = extname(src)
  const dest = src.replace(new RegExp(`\\${ext}$`, 'i'), '.webp')

  if (existsSync(dest)) {
    console.log(`SKIP  ${basename(dest)} (já existe)`)
    continue
  }

  const before = statSync(src).size
  await sharp(src).webp({ quality: 82 }).toFile(dest)
  const after = statSync(dest).size
  const saved = ((before - after) / before * 100).toFixed(1)

  totalBefore += before
  totalAfter += after

  const kb = (n) => (n / 1024).toFixed(0).padStart(6) + ' kB'
  console.log(`OK  ${kb(before)} → ${kb(after)}  (-${saved}%)  ${basename(dest)}`)
}

if (totalBefore > 0) {
  const pct = ((totalBefore - totalAfter) / totalBefore * 100).toFixed(1)
  const mb = (n) => (n / 1024 / 1024).toFixed(2) + ' MB'
  console.log(`\nTotal  ${mb(totalBefore)} → ${mb(totalAfter)}  (-${pct}%)`)
}
