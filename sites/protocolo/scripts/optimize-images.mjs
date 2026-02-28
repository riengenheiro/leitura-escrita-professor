#!/usr/bin/env node
/**
 * Otimiza imagens em public/images para WebP (leve para web).
 * Uso: node scripts/optimize-images.mjs
 * Gera versão .webp e mantém original como fallback.
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const publicImages = path.join(__dirname, '..', 'public', 'images')

async function main() {
  let sharp
  try {
    sharp = (await import('sharp')).default
  } catch {
    console.warn('⚠️  sharp não instalado. Rode: npm install --save-dev sharp')
    console.warn('   Depois execute: node scripts/optimize-images.mjs')
    process.exit(1)
  }

  const maxWidth = 1400
  const webpQuality = 82

  const files = fs.readdirSync(publicImages).filter((f) =>
    /\.(png|jpe?g)$/i.test(f)
  )

  for (const file of files) {
    const base = file.replace(/\.(png|jpe?g)$/i, '')
    const webpPath = path.join(publicImages, `${base}.webp`)
    const inputPath = path.join(publicImages, file)

    // Já existe .webp e é mais novo? Pode pular se quiser (aqui sempre regera)
    const stat = fs.statSync(inputPath)
    const sizeKb = (stat.size / 1024).toFixed(1)
    console.log(`Otimizando ${file} (${sizeKb} KB)...`)

    await sharp(inputPath)
      .resize(maxWidth, null, { withoutEnlargement: true })
      .webp({ quality: webpQuality })
      .toFile(webpPath)

    const outStat = fs.statSync(webpPath)
    const outKb = (outStat.size / 1024).toFixed(1)
    console.log(`  → ${base}.webp (${outKb} KB)`)
  }

  console.log('✅ Concluído.')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
