# Primary Outbound Landing Page

Landing page untuk Primary Outbound, penyedia kegiatan outbound profesional.

## Tech Stack

- Astro 4.x (static site generator)
- Tailwind CSS 3.x
- TypeScript
- Vitest (testing)
- Vercel (deployment)

## Development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # build ke dist/
npm test         # run vitest
```

## Project Structure

```
src/
├── components/   # section components (Navbar, Hero, About, dll)
├── config/       # site config (WA, email, sosmed) — EDITABLE
├── content/      # data modules (categories, process, testimonials, faq)
├── layouts/      # BaseLayout dengan SEO + global styles
├── pages/        # route pages
├── scripts/      # client-side scripts (reveal animation)
└── styles/       # global CSS

public/
├── images/       # semua foto + logo (ganti via file drop)
└── favicon.svg
```

## Cara Edit Konten

### Ganti nomor WhatsApp / email / sosmed

Edit `src/config/site.ts`. Semua section yang reference data ini akan otomatis update.

```ts
export const site = {
  whatsapp: '6281234567890',          // ← ganti di sini
  email: 'hello@primaryoutbound.id',  // ← dan di sini
  instagram: '@primaryoutbound',       // ← dan di sini
  // ...
}
```

### Ganti foto kegiatan

1. Siapkan foto JPG dengan ukuran rekomendasi 1920x1080 (hero) atau 800x600 (kategori)
2. Taruh di `public/images/<kategori>/` dengan nama file yang sama (misal `fun-games-1.jpg`)
3. Commit + push

Lihat `public/images/README.md` untuk detail lengkap.

### Edit teks section (About, Process, FAQ, dll)

- `src/content/categories.ts` — 6 kategori outbound
- `src/content/process.ts` — 5 langkah booking
- `src/content/testimonials.ts` — testimoni klien
- `src/content/faq.ts` — pertanyaan umum

Edit teks di dalam array. Format:
```ts
{
  id: 'fun-games',
  title: 'Fun Games',
  description: '...',
}
```

## Deployment

Project di-host di Vercel, auto-deploy dari branch `main`.

1. Push ke `main` di GitHub
2. Vercel otomatis build + deploy
3. URL: `https://primary-outbound.vercel.app`

Custom domain: tambahkan di Vercel dashboard.

## Specs & Plans

- Design spec: `docs/superpowers/specs/2026-09-02-primary-outbound-landing-design.md`
- Implementation plan: `docs/superpowers/plans/2026-09-02-primary-outbound-landing.md`
