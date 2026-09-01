// Data 5 langkah booking.
// Edit teks di sini untuk menyesuaikan alur booking.

export interface ProcessStep {
  step: number
  title: string
  description: string
  icon: string
}

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: 'Pilih Paket',
    description: 'Lihat 6 kategori kegiatan kami dan pilih yang paling cocok untuk grup Anda.',
    icon: 'Search',
  },
  {
    step: 2,
    title: 'Konsultasi Gratis',
    description: 'Chat WhatsApp kami untuk diskusi detail: jumlah peserta, lokasi, tanggal, kebutuhan khusus.',
    icon: 'MessageCircle',
  },
  {
    step: 3,
    title: 'DP 30%',
    description: 'Konfirmasi booking dengan uang muka 30%. Pelunasan saat hari H atau H-3.',
    icon: 'CreditCard',
  },
  {
    step: 4,
    title: 'Hari H',
    description: 'Tim kami datang ke lokasi dengan equipment lengkap. Kegiatan berjalan sesuai rundown yang disepakati.',
    icon: 'Sun',
  },
  {
    step: 5,
    title: 'Dokumentasi',
    description: 'Foto dan video kegiatan kami serahkan sebagai kenang-kenangan untuk seluruh peserta.',
    icon: 'Camera',
  },
]
