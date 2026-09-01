// Data 6 kategori outbound.
// Edit teks di sini untuk update deskripsi atau pesan WhatsApp per kategori.

export interface Category {
  id: string
  title: string
  description: string
  icon: string
  imageCount: number
  waMessage: string
}

export const categories: Category[] = [
  {
    id: 'fun-games',
    title: 'Fun Games',
    description:
      'Serangkaian permainan ringan yang memecah kebekuan dan mencairkan suasana. Cocok untuk gathering, reuni, atau acara santai bersama tim.',
    icon: 'Gamepad2',
    imageCount: 4,
    waMessage: 'Halo Primary Outbound, saya tertarik dengan paket Fun Games. Bisa info lebih lanjut?',
  },
  {
    id: 'team-building',
    title: 'Team Building',
    description:
      'Aktivitas kolaboratif yang memperkuat kekompakan, komunikasi, dan kepercayaan antar anggota tim. Cocok untuk corporate outing.',
    icon: 'Users',
    imageCount: 4,
    waMessage: 'Halo Primary Outbound, saya tertarik dengan paket Team Building untuk kantor kami.',
  },
  {
    id: 'treasure-hunt',
    title: 'Treasure Hunt',
    description:
      'Petualangan memecahkan teka-teki dan menemukan harta karun. Mengasah strategi, kerja sama, dan ketangkasan berpikir.',
    icon: 'Map',
    imageCount: 4,
    waMessage: 'Halo Primary Outbound, saya tertarik dengan paket Treasure Hunt.',
  },
  {
    id: 'rafting',
    title: 'Rafting',
    description:
      'Arung jeram di sungai dengan tingkat kesulitan yang bisa disesuaikan. Sensasi adrenalin dengan standar keamanan tinggi.',
    icon: 'Waves',
    imageCount: 4,
    waMessage: 'Halo Primary Outbound, saya tertarik dengan paket Rafting. Bisa info lokasi dan harga?',
  },
  {
    id: 'offroad',
    title: 'Offroad',
    description:
      'Petualangan mengendarai jeep atau ATV di jalur ekstrem. Cocok untuk yang mencari tantangan dan pemandangan alam.',
    icon: 'Truck',
    imageCount: 4,
    waMessage: 'Halo Primary Outbound, saya tertarik dengan paket Offroad.',
  },
  {
    id: 'by-request',
    title: 'By Request',
    description:
      'Paket custom sesuai kebutuhan Anda. Ceritakan keinginan Anda, kami rancang kegiatan yang paling cocok.',
    icon: 'Sparkles',
    imageCount: 0,
    waMessage: 'Halo Primary Outbound, saya ingin membuat paket outbound custom sesuai kebutuhan kami.',
  },
]
