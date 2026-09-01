// =============================================================
// SITE CONFIG — editable by non-developer
// =============================================================
// Ganti nilai di bawah ini untuk update informasi kontak.
// Semua section di landing page (Navbar, Hero, CTA, Footer, dll)
// akan otomatis menggunakan nilai terbaru setelah site di-rebuild.
// =============================================================

export const site = {
  name: 'Primary Outbound',
  tagline: 'Petualangan tak terlupakan untuk semua usia',
  description:
    'Penyedia outbound profesional untuk corporate, sekolah, dan keluarga. Fun games, team building, treasure hunt, rafting, offroad — semua bisa disesuaikan dengan kebutuhan Anda.',

  // ---- KONTAK (edit di sini) ----
  whatsapp: '6281234567890',           // Format: 62 + nomor tanpa + / 0 di depan
  whatsappDisplay: '+62 812-3456-7890', // Tampilan untuk user
  email: 'hello@primaryoutbound.id',
  instagram: '@primaryoutbound',
  tiktok: '@primaryoutbound',
  address: 'Jl. Contoh No. 123, Kota, Provinsi',

  // ---- DEFAULT WHATSAPP MESSAGE (used by general CTAs like Navbar/Hero/Footer) ----
  defaultWhatsappMessage: 'Halo Primary Outbound, saya ingin info lebih lanjut tentang layanan outbound Anda.',

  // ---- URL (untuk SEO + sitemap) ----
  url: 'https://primary-outbound.vercel.app',
} as const

// Helper untuk generate link WhatsApp dengan custom message.
// Dipakai di CategoryCard, FAQ, dll.
export const whatsappLink = (message: string): string =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`

// Helper untuk link WhatsApp dengan default message (umum).
// Dipakai di Navbar, Hero, Footer (general CTAs).
export const generalWhatsappLink = (): string =>
  whatsappLink(site.defaultWhatsappMessage)
