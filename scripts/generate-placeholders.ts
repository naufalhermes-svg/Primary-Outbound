// Generate placeholder images for development.
// Run with: bun run scripts/generate-placeholders.ts
// In production, the user replaces these with real photos.

import { writeFileSync, mkdirSync } from 'node:fs'
import { join } from 'node:path'

// 1x1 transparent PNG (valid PNG, will be replaced by user)
const placeholder = Buffer.from(
  '89504e470d0a1a0a0000000d49484452000000010000000108060000001f15c4890000000d49444154789c6300010000000500010d0a2db40000000049454e44ae426082',
  'hex'
)

const publicImages = join(process.cwd(), 'public', 'images')

function writePlaceholders(dir: string, files: string[]): void {
  mkdirSync(dir, { recursive: true })
  for (const file of files) {
    writeFileSync(join(dir, file), placeholder)
  }
}

// Logo
writeFileSync(join(publicImages, 'logo.png'), placeholder)

// Hero
writePlaceholders(
  join(publicImages, 'hero'),
  ['hero-1.jpg', 'hero-2.jpg', 'hero-3.jpg']
)

// Category photos (4 each)
const categories = ['fun-games', 'team-building', 'treasure-hunt', 'rafting', 'offroad']
for (const cat of categories) {
  writePlaceholders(
    join(publicImages, cat),
    [1, 2, 3, 4].map((n) => `${cat}-${n}.jpg`)
  )
}

// Testimonials (4)
writePlaceholders(
  join(publicImages, 'testimonials'),
  [1, 2, 3, 4].map((n) => `placeholder-${n}.jpg`)
)

console.log('placeholder images written')
