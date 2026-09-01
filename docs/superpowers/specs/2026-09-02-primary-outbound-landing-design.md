# Primary Outbound Landing Page — Design Spec

**Date**: 2026-09-02
**Status**: Draft (awaiting user approval)
**Path**: Architectural

## 1. Purpose

Build a single-page landing site for **Primary Outbound**, an outbound activity provider serving corporate, school, and family segments. The site's job is to introduce the brand, present six activity categories, communicate the booking process, and convert visitors into WhatsApp conversations.

## 2. Goals & Non-Goals

### Goals
- Communicate outbound offerings to a mixed audience (corporate, school, family)
- Drive WhatsApp conversations as the primary conversion action
- Load fast (< 1.5s LCP) and score 95+ on Lighthouse
- Be maintainable by a non-developer: replace photos/videos by dropping files into named folders; edit contact info in one config file
- Look polished and trustworthy using restrained motion design

### Non-Goals (YAGNI)
- Multi-page architecture with per-category sub-pages (defer until traffic/SEO data justifies)
- Form-based contact (replaced by `wa.me` link)
- Booking/payment system (handled out-of-band via WhatsApp)
- Blog / CMS
- User authentication
- Multi-language (Indonesian only for v1)
- Analytics integration (can be added later; not part of initial scope)

## 3. Target Audience

| Segment | Motivation | Decision Maker |
|---|---|---|
| Corporate (HR / Event Organizer) | Team building, gathering, outing | HR or EO coordinator |
| School / University | Study tour, LDKS, orientation | Teacher / student committee |
| Family / Community | Reunion, gathering, celebration | Family head / community organizer |
| Adventure seekers (B2C) | Rafting, offroad, thrill | Individual or small group |

All four are served by the same six activity categories and the same WhatsApp CTA.

## 4. Tech Stack

| Layer | Choice | Rationale |
|---|---|---|
| Framework | Astro 4.x | Static-first, zero JS by default, excellent image optimization, ideal for content sites |
| Styling | Tailwind CSS 3.x | Config-driven color/font tokens, rapid iteration, small output |
| Language | TypeScript | Type safety for config and content modules |
| Fonts | Plus Jakarta Sans (headings) + Inter (body) via `@fontsource` | Self-hosted, no external request, both free |
| Icons | `lucide` | Lightweight SVG, tree-shakable |
| Animations | `motion` (Framer Motion successor) | Restrained micro-interactions: fade-in on scroll, hover scale, smooth anchor scroll |
| Image optimization | Astro `<Image>` component | Automatic WebP, lazy load, responsive `srcset` |
| Deployment | Vercel | Free tier, auto-deploy from GitHub, easy custom domain later |
| Version control | Git + GitHub | User already created repo `naufalhermes-svg/Primary-Outbound` |

## 5. Design System

### Color Palette
Defined in `tailwind.config.mjs` as semantic tokens:

| Token | Hex | Use |
|---|---|---|
| `primary` | `#0F4C3A` | Headings, primary CTA, nav active state |
| `secondary` | `#D97706` | Accent, badges, hover highlights, adventure feel |
| `stone` | `#F5F5F4` | Page background, card surface |
| `text` | `#1C1917` | Body text |
| `muted` | `#78716C` | Secondary text, captions |

Tone: balanced — adventurous (earth-tone green + orange) trustworthy enough for corporate, warm enough for family.

### Typography
- **Headings**: Plus Jakarta Sans, 600/700 weight
- **Body**: Inter, 400/500 weight
- **Type scale** (Tailwind defaults extended):
  - `text-4xl` (36px) — H1 (hero headline)
  - `text-3xl` (30px) — H2 (section titles)
  - `text-2xl` (24px) — H3 (card titles)
  - `text-base` (16px) — body
  - `text-sm` (14px) — captions, meta
- **Line height**: 1.6 body, 1.2 headings
- **Tracking**: tight on headings (`tracking-tight`)

### Spacing
- 8px base unit (Tailwind default)
- Section vertical padding: `py-20` desktop / `py-12` mobile
- Container max-width: `max-w-6xl` (1152px)

### Border Radius
- Cards: `rounded-2xl` (16px)
- Buttons: `rounded-full` (pill) or `rounded-xl` (12px) — to be decided per component

### Shadow
- Cards: `shadow-sm` resting, `shadow-lg` hover
- Navbar: `shadow-sm` when scrolled

## 6. Information Architecture

### Page Structure (single scroll, anchor-linked)

1. **Navbar** (sticky)
2. **Hero** (#top)
3. **About** (#about)
4. **Categories** (#kategori)
5. **Process / How It Works** (#proses)
6. **Why Us** (#keunggulan)
7. **Testimonials** (#testimoni)
8. **FAQ** (#faq)
9. **CTA Banner** (#kontak)
10. **Footer**

### Section Detail

#### 6.1 Navbar
- Logo (left) + 5 anchor links (Tentang, Kategori, Proses, Testimoni, FAQ) + "Chat WhatsApp" button (right)
- Sticky on scroll, background turns from transparent → `stone` with `shadow-sm`
- Mobile: hamburger → slide-down menu, full-width

#### 6.2 Hero
- Headline (large, bold): "Petualangan Outbound Tak Terlupakan untuk Semua Usia"
- Subheadline: 1-2 kalimat tentang Primary Outbound
- 2 CTA buttons: "Chat WhatsApp" (primary, orange) + "Lihat Paket" (secondary, outline, anchor ke #kategori)
- Background: image carousel, 3-4 foto outbound, auto-rotate 5s dengan fade transition
- Height: `min-h-[80vh]`, full viewport on small screens

#### 6.3 About
- 2-3 paragraf tentang Primary Outbound
- Tone: adventurous + trustworthy
- 3-4 nilai utama dalam icon + judul + deskripsi singkat (e.g., Instruktur Bersertifikat, Equipment Standar, Pengalaman 10+ Tahun, Custom Paket)

#### 6.4 Categories
- 6 card dalam grid:
  - Desktop: 3 kolom × 2 baris
  - Tablet: 2 kolom × 3 baris
  - Mobile: 1 kolom
- Per card: icon (lucide) + judul + deskripsi 2-3 kalimat + foto grid 2-3 thumbnail + tombol "Chat untuk paket ini" → WhatsApp dengan pre-filled message
- Kategori: Fun Games, Team Building, Treasure Hunt, Rafting, Offroad, By Request

#### 6.5 Process / How It Works
- 5 step horizontal (desktop) / vertical (mobile):
  1. **Pilih Paket** — lihat 6 kategori, pilih yang cocok
  2. **Konsultasi Gratis** — chat WhatsApp, diskusikan kebutuhan
  3. **DP 30%** — konfirmasi booking dengan uang muka
  4. **Hari H** — tim datang, kegiatan berjalan
  5. **Dokumentasi** — foto + video kegiatan sebagai kenang-kenangan
- Per step: nomor + icon + judul + deskripsi singkat

#### 6.6 Why Us
- 4-6 poin keunggulan dalam grid 2×3 atau 3×2:
  - Instruktur bersertifikat
  - Equipment standar keamanan
  - Asuransi kegiatan
  - Custom paket sesuai kebutuhan
  - Dokumentasi foto + video
  - Pengalaman 10+ tahun / 1000+ peserta

#### 6.7 Testimonials
- 3-6 card dengan: foto (placeholder) + nama + peran (HR/ortu/guru) + quote
- Desktop: grid 3 kolom
- Mobile: horizontal scroll dengan snap

#### 6.8 FAQ
- 6-8 pertanyaan umum, accordion collapse (satu terbuka pada satu waktu)
- Topik: harga, durasi, lokasi, equipment, DP, refund, pakaian, dokumentasi
- Default tertutup, click untuk expand

#### 6.9 CTA Banner
- Full-width, background `primary` (hijau tua) atau gradient
- Headline: "Siap untuk petualangan berikutnya?"
- 1 CTA besar: "Chat WhatsApp Sekarang" + nomor WA

#### 6.10 Footer
- 3-4 kolom: Logo + tagline | Kontak (alamat, email, WA) | Sosial (Instagram, TikTok) | Copyright
- Mobile: stack vertical

## 7. Data Model

### `src/config/site.ts`
```ts
export const site = {
  name: 'Primary Outbound',
  tagline: 'Petualangan tak terlupakan untuk semua usia',
  description: 'Penyedia outbound profesional untuk corporate, sekolah, dan keluarga.',
  whatsapp: '6281234567890',          // PLACEHOLDER — user edits later
  whatsappDisplay: '+62 812-3456-7890', // PLACEHOLDER
  email: 'hello@primaryoutbound.id',    // PLACEHOLDER
  instagram: '@primaryoutbound',         // PLACEHOLDER
  tiktok: '@primaryoutbound',            // PLACEHOLDER
  address: 'Jl. ..., Kota ..., Prov ...', // PLACEHOLDER
}
```

### `src/content/categories.ts`
```ts
export const categories = [
  {
    id: 'fun-games',
    title: 'Fun Games',
    description: 'Serangkaian permainan ringan yang memecah kebekuan dan mencairkan suasana.',
    icon: 'Gamepad2',
    waMessage: 'Halo, saya tertarik dengan paket Fun Games',
  },
  // ... 5 lainnya
]
```

### `src/content/process.ts`
```ts
export const processSteps = [
  { step: 1, title: 'Pilih Paket', description: '...', icon: 'Search' },
  // ... 4 lainnya
]
```

### `src/content/testimonials.ts`
```ts
export const testimonials = [
  { name: '...', role: '...', quote: '...', photo: '/images/testimonials/placeholder-1.jpg' },
  // ... 2-5 lainnya
]
```

### `src/content/faq.ts`
```ts
export const faqs = [
  { question: 'Berapa harga paket outbound?', answer: '...' },
  // ... 5-7 lainnya
]
```

## 8. File Structure

```
primary-outbound/
├── public/
│   ├── images/
│   │   ├── README.md              # instruksi replace foto
│   │   ├── logo.png
│   │   ├── hero/                   # 3-4 foto
│   │   ├── fun-games/              # 4-6 foto
│   │   ├── team-building/
│   │   ├── treasure-hunt/
│   │   ├── rafting/
│   │   ├── offroad/
│   │   └── testimonials/           # 3-6 placeholder
│   ├── og.png                      # social preview (auto-generated via Astro)
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.astro
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── CategoryCard.astro
│   │   ├── Categories.astro
│   │   ├── Process.astro
│   │   ├── WhyUs.astro
│   │   ├── Testimonials.astro
│   │   ├── FAQ.astro
│   │   ├── CTA.astro
│   │   └── Footer.astro
│   ├── config/
│   │   └── site.ts
│   ├── content/
│   │   ├── categories.ts
│   │   ├── process.ts
│   │   ├── testimonials.ts
│   │   └── faq.ts
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── docs/
│   └── superpowers/
│       └── specs/
│           └── 2026-09-02-primary-outbound-landing-design.md
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
├── tsconfig.json
└── README.md
```

## 9. Asset Conventions

### Photos
- Format: JPG (photos) / PNG (logo with transparency)
- Recommended size: 1920×1080 for hero, 800×600 for category thumbnails
- Folder per category: `public/images/<kategori-id>/`
- Naming: `<kategori>-<number>.jpg` (e.g., `fun-games-1.jpg`)
- WebP conversion handled automatically by Astro `<Image>` component

### Videos (future)
- Format: MP4 (H.264), short loops for hero background if used
- Folder: `public/videos/`
- Naming: `hero-1.mp4`, `hero-2.mp4`

### `public/images/README.md` content
Brief Indonesian instructions for the non-developer user:
```
# Cara Ganti Foto

1. Siapkan foto baru dengan format JPG
2. Simpan dengan nama yang sama (misal: fun-games-1.jpg)
   atau tambahkan file baru
3. Tim developer akan update kode untuk memuat foto baru

Atau hubungi tim untuk bantuan.
```

## 10. Component Contracts

Each component is a standalone `.astro` file receiving props or using static content. No client-side JS except for FAQ accordion (small inline script) and hero carousel (intersection-driven).

### Key props / behaviors
- `Navbar`: client island only for mobile menu toggle (~1KB JS)
- `Hero`: image carousel via vanilla JS + CSS transitions
- `CategoryCard`: receives `category` object, renders WhatsApp link with pre-filled message
- `FAQ`: one-open-at-a-time accordion via inline `<script>`
- `CTA`, `Footer`, `Process`, `WhyUs`, `Testimonials`, `About`: static

## 11. Responsive Strategy

| Breakpoint | Width | Layout changes |
|---|---|---|
| Mobile | < 640px | 1 column, hamburger nav, larger touch targets (min 44×44px), stacked process steps |
| Tablet | 640–1024px | 2 column grids, full nav |
| Desktop | > 1024px | 3 column grids, full nav, wider hero |

Tailwind defaults used: `sm:`, `md:`, `lg:`.

## 12. SEO & Social

- `<title>` per page (just one for v1): "Primary Outbound — Petualangan Outbound untuk Semua Usia"
- `<meta description>`: 150-160 char
- Open Graph + Twitter Card meta tags
- Schema.org `LocalBusiness` JSON-LD in `<head>`
- `sitemap.xml` via `@astrojs/sitemap`
- `robots.txt` allowing all
- Semantic HTML (`<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`)

## 13. Performance Budget

| Metric | Target |
|---|---|
| Lighthouse Performance | 95+ |
| Lighthouse Accessibility | 95+ |
| Lighthouse Best Practices | 95+ |
| Lighthouse SEO | 95+ |
| LCP | < 1.5s |
| CLS | < 0.1 |
| Total page weight (excl. images) | < 300KB |
| Initial JS | < 30KB |

Achieved via: static generation, lazy-loaded images, self-hosted fonts (subset), no heavy client JS.

## 14. Animations (restrained)

- **Fade-in on scroll**: opacity 0→1 + translateY 16px→0, 400ms ease-out, threshold 0.2
- **Hover scale**: 1.02 on cards, 200ms ease-out
- **Anchor scroll**: CSS `scroll-behavior: smooth`
- **Hero carousel**: opacity crossfade, 5s interval
- **FAQ accordion**: max-height transition, 300ms ease-out
- **Mobile nav**: slide-down 250ms

All motion respects `prefers-reduced-motion`.

## 15. Testing Strategy

- **Visual**: User reviews in browser, screenshots per section
- **Responsive**: Chrome DevTools device emulation at 375px, 768px, 1280px
- **Accessibility**: Lighthouse + manual keyboard navigation check
- **Lighthouse**: full audit on deployed URL
- **Link check**: all WhatsApp links resolve correctly

## 16. Deployment

1. Push to `main` branch on GitHub
2. Vercel auto-detects Astro, builds, deploys to `primary-outbound.vercel.app`
3. User adds custom domain later via Vercel dashboard (optional, not v1 scope)

## 17. Out of Scope (Explicit)

- Multi-language support
- Blog / news section
- Booking system / payment gateway
- Admin panel / CMS
- User accounts
- Live chat widget (WhatsApp button is the chat entry)
- Analytics (can be added later)
- Search functionality
- Dark mode
- PWA / offline support

## 18. Open Questions

None — all clarifying questions answered during brainstorming session.

## 19. Acceptance Criteria

The site is considered done when:

1. All 10 sections render correctly on desktop, tablet, mobile
2. Lighthouse score 95+ on all 4 categories
3. WhatsApp link works with pre-filled message per category
4. User can replace photos by dropping files into `public/images/<kategori>/` folders
5. User can update WhatsApp number, email, social handles by editing `src/config/site.ts`
6. Site deploys automatically to Vercel on push to `main`
7. No console errors on page load
8. Smooth scroll between sections works
9. FAQ accordion behaves correctly (one open at a time)
10. Hero carousel rotates through 3-4 images
11. All images lazy-load and use WebP
12. Site is in Indonesian throughout
