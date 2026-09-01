# Panduan Ganti Foto Primary Outbound

Folder ini berisi semua foto untuk landing page. Ganti file dengan foto asli Anda.

## Struktur Folder

| Folder | Isi | Jumlah Foto |
|---|---|---|
| `hero/` | Foto background halaman utama | 3-4 |
| `fun-games/` | Foto kegiatan Fun Games | 4-6 |
| `team-building/` | Foto kegiatan Team Building | 4-6 |
| `treasure-hunt/` | Foto kegiatan Treasure Hunt | 4-6 |
| `rafting/` | Foto kegiatan Rafting | 4-6 |
| `offroad/` | Foto kegiatan Offroad | 4-6 |
| `testimonials/` | Foto orang testimoni | 3-6 |
| `logo.png` | Logo perusahaan | 1 |

## Cara Ganti Foto

1. Siapkan foto dalam format **JPG**
2. Ukuran rekomendasi: 1920x1080 untuk hero, 800x600 untuk kategori
3. Rename file sesuai nama yang sudah ada (misal `fun-games-1.jpg`)
4. Taruh di folder yang sesuai
5. Hubungi tim developer untuk deploy

## Cara Tambah Foto Baru

Misalnya ingin menambah foto `fun-games-5.jpg`:

1. Taruh file di `fun-games/fun-games-5.jpg`
2. Kasih tahu tim: "tolong update `src/content/categories.ts` agar `fun-games` punya 5 foto"
3. Tim akan update kode

## Tips

- Foto landscape (horizontal) lebih baik untuk hero
- Foto dengan pencahayaan bagus lebih menarik
- Hindari foto yang terlalu gelap
- Compress foto sebelum upload (gunakan tinypng.com)
