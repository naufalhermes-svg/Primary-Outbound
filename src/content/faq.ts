// FAQ (pertanyaan yang sering ditanyakan).
// Edit atau tambah pertanyaan di sini.

export interface FAQ {
  question: string
  answer: string
}

export const faqs: FAQ[] = [
  {
    question: 'Berapa harga paket outbound?',
    answer:
      'Harga bervariasi tergantung jenis kegiatan, jumlah peserta, lokasi, dan durasi. Hubungi kami via WhatsApp untuk penawaran sesuai kebutuhan Anda.',
  },
  {
    question: 'Berapa minimal jumlah peserta?',
    answer:
      'Minimal 10 orang untuk paket fun games dan team building. Untuk rafting dan offroad, minimal 8 orang per kelompok.',
  },
  {
    question: 'Apakah equipment sudah termasuk?',
    answer:
      'Ya, semua equipment standar (pelampung, helm, tali, dsb.) sudah termasuk dalam paket. Peserta cukup membawa pakaian ganti dan semangat.',
  },
  {
    question: 'Bagaimana sistem pembayarannya?',
    answer:
      'DP 30% saat konfirmasi booking. Pelunasan 3 hari sebelum hari H. Pembayaran via transfer bank.',
  },
  {
    question: 'Apakah ada asuransi kecelakaan?',
    answer:
      'Ya, semua peserta dilindungi asuransi kecelakaan selama kegiatan berlangsung.',
  },
  {
    question: 'Bisakah custom paket sesuai kebutuhan?',
    answer:
      'Tentu. Pilih kategori "By Request" dan ceritakan keinginan Anda via WhatsApp. Kami akan rancang paket yang paling cocok.',
  },
  {
    question: 'Bagaimana jika hujan?',
    answer:
      'Kami menyediakan opsi lokasi indoor atau tenda. Jika cuaca sangat tidak memungkinkan, kegiatan dapat di-reschedule tanpa biaya tambahan.',
  },
  {
    question: 'Apakah mendapat dokumentasi?',
    answer:
      'Ya, dokumentasi foto dan video kegiatan kami serahkan via Google Drive setelah kegiatan selesai, biasanya 3-5 hari kerja.',
  },
]
