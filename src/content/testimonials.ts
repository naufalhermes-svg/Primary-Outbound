// Testimoni klien (placeholder).
// Ganti nama, role, quote, dan photo dengan testimoni asli nanti.
// Foto disimpan di public/images/testimonials/

export interface Testimonial {
  name: string
  role: string
  quote: string
  photo: string
}

export const testimonials: Testimonial[] = [
  {
    name: 'Andi Wijaya',
    role: 'HR Manager, PT Contoh',
    quote:
      'Acara team building kami berjalan luar biasa. Tim Primary Outbound sangat profesional dan responsif. Peserta senang semua!',
    photo: '/images/testimonials/placeholder-1.jpg',
  },
  {
    name: 'Siti Rahayu',
    role: 'Guru, SMA Negeri 1',
    quote:
      'Study tour kelas kami jadi berkesan. Permainan edukatif dan aman untuk siswa. Dokumentasi lengkap, murid-murid dapat kenangan indah.',
    photo: '/images/testimonials/placeholder-2.jpg',
  },
  {
    name: 'Budi Santoso',
    role: 'Ketua Panitia Reuni',
    quote:
      'Reuni kami di-handle dengan baik. Treasure hunt-nya seru banget, semua teman-teman ikut sampai akhir. Recommended!',
    photo: '/images/testimonials/placeholder-3.jpg',
  },
  {
    name: 'Dewi Lestari',
    role: 'Ibu Rumah Tangga',
    quote:
      'Family gathering kami jadi momen tak terlupakan. Anak-anak senang, orang tua juga nyaman. Tim sabar dan ramah.',
    photo: '/images/testimonials/placeholder-4.jpg',
  },
]
