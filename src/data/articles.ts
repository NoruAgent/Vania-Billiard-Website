// Articles seed — PRD v1.0 Section 22.1
// 8 seed articles

export interface Article {
  id: string;
  slug: string;
  title: string;
  metaDescription: string;
  category: "Pemilihan Ukuran" | "Perawatan" | "Pemula" | "Cafe & Usaha" | "Material & Spec";
  excerpt: string;
  readTime: number; // minutes
  publishedAt: string;
  content: string; // markdown
  imageSlug: string; // references /public/images/articles/{slug}.jpg
}

export const articles: Article[] = [
  {
    id: "art-1",
    slug: "cara-memilih-ukuran-meja-billiard-untuk-rumah",
    title: "Cara Memilih Ukuran Meja Billiard untuk Rumah",
    metaDescription:
      "Panduan lengkap memilih ukuran meja billiard 7ft, 8ft, atau 9ft untuk rumah. Pertimbangkan ruangan, pemain, dan budget Anda.",
    category: "Pemilihan Ukuran",
    excerpt:
      "Ukuran meja billiard menentukan kenyamanan bermain dan kecocokan dengan ruangan. Panduan ini membantu Anda memilih antara 7ft, 8ft, atau 9ft.",
    readTime: 6,
    publishedAt: "2024-12-15",
    imageSlug: "art-1",
    content: `## Mengapa Ukuran Meja Penting

Ukuran meja billiard bukan hanya soal luas ruangan. Ukuran memengaruhi:

- **Kenyamanan cue stroke** — butuh space minimal 1.5m di setiap sisi
- **Jumlah pemain** — 7ft cukup untuk 2-3 pemain kasual, 8ft untuk 3-4, 9ft untuk 4+ serius
- **Skill level** — 7ft cocok pemula, 8ft menengah, 9ft turnamen
- **Estetika ruangan** — meja terlalu besar buat ruangan kecil terlihat overwhelming

## Perbandingan Ukuran

| Ukuran | Dimensi | Cocok Ruangan | Skill Level |
|---|---|---|---|
| 7ft | 213 × 107 cm | 4 × 5 meter | Pemula, casual |
| 8ft | 254 × 127 cm | 5 × 6 meter | Menengah, komunitas |
| 9ft | 274 × 137 cm | 5.5 × 7 meter | Serius, turnamen |

## Rekomendasi Berdasarkan Ruangan

- **Ruang tamu kecil (3×4m)** — Meja 7ft dengan cue pendek, atau pertimbangkan meja portable
- **Ruang keluarga (4×5m)** — Meja 7ft ideal, cukup cue stroke untuk pemain kasual
- **Ruang billiard khusus (5×6m)** — Meja 8ft, pilihan paling versatile
- **Ruang billiard besar (5.5×7m+)** — Meja 9ft, untuk pemain serius dan venue premium

## Tips Tambahan

1. **Ukur ruangan Anda** sebelum memutuskan, dengan margin 1.5m di setiap sisi
2. **Pertimbangkan pemain** yang akan sering main — pemula cukup 7ft, serius butuh 8ft+
3. **Cek tinggi langit-langit** — pastikan lampu gantung punya jarak cukup (minimal 80cm dari meja)
4. **Pakai simulator ruangan** Vania Billiard untuk visualisasi sebelum beli

Mau konsultasi lebih lanjut? [Hubungi WhatsApp Vania Billiard] untuk rekomendasi personal.`,
  },
  {
    id: "art-2",
    slug: "perbedaan-meja-billiard-7ft-8ft-9ft",
    title: "Perbedaan Meja Billiard 7ft, 8ft, dan 9ft",
    metaDescription:
      "Detail perbedaan ukuran, harga, dan penggunaan meja billiard 7ft, 8ft, dan 9ft. Mana yang paling cocok untuk Anda?",
    category: "Pemilihan Ukuran",
    excerpt:
      "Tabel perbandingan lengkap: dimensi, harga, ruang yang dibutuhkan, dan skill level yang cocok untuk masing-masing ukuran.",
    readTime: 5,
    publishedAt: "2024-12-20",
    imageSlug: "art-2",
    content: `## Overview Perbandingan

| Aspek | 7ft | 8ft | 9ft |
|---|---|---|---|
| Dimensi meja | 213 × 107 cm | 254 × 127 cm | 274 × 137 cm |
| Cocok ruangan | 4 × 5 m | 5 × 6 m | 5.5 × 7 m |
| Berat rata-rata | 250-300 kg | 350-400 kg | 450-550 kg |
| Harga mulai | Rp 9.5 juta | Rp 10.5 juta | Rp 15 juta |
| Pemain ideal | 2-3 casual | 3-4 menengah | 4+ serius |
| Cue stroke minimum | 1.4 m | 1.5 m | 1.6 m |
| Standar turnamen | Tidak | Tidak (8-ball local) | Ya (9-ball) |

## 7ft — Entry & Casual

- **Untuk**: Rumah dengan ruang terbatas, pemain pemula, keluarga
- **Kelebihan**: Lebih murah, footprint kecil, instalasi lebih mudah
- **Kekurangan**: Ruang gerak terbatas, tidak untuk pemain serius
- **Cocok untuk**: Ruang keluarga, apartemen, ruang multifungsi

## 8ft — Sweet Spot

- **Untuk**: Kafe, ruang komunitas, rumah dengan ruangan sedang
- **Kelebihan**: Ukuran paling versatile, harga reasonable, cukup untuk turnamen 8-ball lokal
- **Kekurangan**: Bukan standar turnamen internasional
- **Cocok untuk**: Kafe billiard, ruang komunitas, rumah mewah

## 9ft — Tournament Grade

- **Untuk**: Pemain serius, venue premium, turnamen
- **Kelebihan**: Standar turnamen 9-ball, bermain paling otentik
- **Kekurangan**: Mahal, butuh ruangan besar, instalasi lebih kompleks
- **Cocok untuk**: Klub billiard profesional, rumah mewah dengan ruang khusus

## Mana yang Harus Dipilih?

Jawab pertanyaan ini:
1. Berapa ukuran ruangan Anda? (ukur dengan margin 1.5m)
2. Siapa yang akan main? (keluarga / komunitas / serius)
3. Berapa budget Anda?

Kebanyakan orang memilih 8ft sebagai sweet spot.`,
  },
  {
    id: "art-3",
    slug: "cara-mengukur-ruangan-sebelum-membeli-meja-billiard",
    title: "Cara Mengukur Ruangan Sebelum Membeli Meja Billiard",
    metaDescription:
      "Step-by-step mengukur ruangan untuk meja billiard. Termasuk margin cue stroke dan tinggi langit-langit.",
    category: "Pemilihan Ukuran",
    excerpt:
      "Sebelum beli meja billiard, ukur ruangan Anda dengan benar. Panduan ini menjelaskan margin minimum, tinggi langit-langit, dan hal teknis lainnya.",
    readTime: 7,
    publishedAt: "2024-12-25",
    imageSlug: "art-3",
    content: `## Margin Minimum yang Harus Dipahami

Cue billiard standar panjangnya 1.45-1.5m. Untuk stroke yang nyaman, butuh space:

- **Panjang cue stroke minimum**: 1.4 m
- **Margin dari dinding ke meja**: 1.5 m di setiap sisi
- **Tinggi langit-langit minimum**: 2.5 m (untuk lampu gantung standar)

## Step-by-Step Mengukur

### 1. Ukur Panjang Ruangan

Panjang minimum:
- 7ft: 4.0 m
- 8ft: 5.0 m
- 9ft: 5.5 m

### 2. Ukur Lebar Ruangan

Lebar minimum:
- 7ft: 3.5 m (cukup untuk stroke pendek)
- 8ft: 4.2 m
- 9ft: 4.5 m

### 3. Ukur Tinggi Langit-Langit

Ketinggian minimum 2.5 m. Lampu gantung standar butuh 80-100 cm dari permukaan meja.

### 4. Cek Posisi Pintu & Jendela

Pastikan pintu & jendela tidak mengganggu cue stroke. Kalau ada pilar atau obstruction, ukur dari titik terjauh.

### 5. Pertimbangkan Furniture Lain

Sofa, rak, atau furniture lain juga butuh space. Ruangan "terbuka" lebih ideal daripada penuh furniture.

## Calculator Sederhana

\`\`\`
Panjang ruangan (m) - 1.5 (margin cue pendek) - 1.5 (margin cue panjang) = panjang meja max
Lebar ruangan (m) - 1.5 (margin kiri) - 1.5 (margin kanan) = lebar meja max
\`\`\`

Contoh: Ruangan 5 × 6 m
- Panjang max meja: 5 - 3 = 2 m → 7ft (2.13m tidak muat, 7ft bisa dengan margin ketat)
- Lebar max meja: 6 - 3 = 3 m → muat semua ukuran

## Pakai Simulator Vania Billiard

Daripada hitung manual, coba [Simulator Ruangan Vania Billiard] yang bisa visualize layout 2D dengan margin cue stroke. Hasil simulasi bisa langsung dikirim ke WhatsApp untuk konsultasi.

## Tips Tambahan

- **Akses pintu masuk**: pastikan meja bisa masuk (meja 9ft panjangnya 2.74m, butuh akses minimal 1.5m × 2.8m)
- **Lantai**: lantai harus rata dan kuat menahan berat (300-500 kg)
- **Sirkulasi udara**: ruangan billiard butuh ventilasi baik karena keringat dan asap rokok (kalau ada)

[Hubungi WhatsApp Vania Billiard] untuk konsultasi ukuran ruangan.`,
  },
  {
    id: "art-4",
    slug: "rekomendasi-meja-billiard-untuk-cafe-dan-tempat-usaha",
    title: "Rekomendasi Meja Billiard untuk Cafe dan Tempat Usaha",
    metaDescription:
      "Memilih meja billiard untuk bisnis cafe, tempat billiard, atau venue. Pertimbangkan durability, harga, dan return on investment.",
    category: "Cafe & Usaha",
    excerpt:
      "Untuk bisnis, meja billiard adalah investasi jangka panjang. Panduan ini membantu memilih meja yang tepat untuk cafe dan venue.",
    readTime: 8,
    publishedAt: "2025-01-05",
    imageSlug: "art-4",
    content: `## Pertimbangan Utama untuk Bisnis

### 1. Durability

Meja untuk komersial butuh:
- **Slate lebih tebal** (30-38mm) untuk menahan pemakaian 8-12 jam/hari
- **Kayu grade premium** (jati perhutani atau setara) untuk tahan rayap dan perubahan cuaca
- **Cloth turnamen** (Simonis 860 atau setara) yang tahan 3-5 tahun pemakaian berat
- **Konstruksi reinforced** — kaki dan rel harus kuat menahan gerakan pemain

### 2. Ukuran untuk Cafe

- **8ft** adalah pilihan paling populer untuk cafe di Indonesia
- Cukup untuk 3-4 pemain, footprint tidak terlalu besar
- ROI lebih cepat dibanding 9ft (investasi sama, okupansi lebih tinggi)

### 3. Return on Investment (ROI)

Misal:
- Investasi meja 8ft + instalasi: Rp 18-25 juta
- Tarif rental per jam: Rp 30.000-50.000
- Okupansi rata-rata 6 jam/hari
- Estimasi payback: 12-18 bulan

### 4. Rekomendasi Seri untuk Bisnis

#### Budget Rp 10-15 juta
- Meja 8ft standar (slate 25mm)
- Cocok untuk cafe pemula, ruang komunitas
- Expected lifespan: 3-5 tahun

#### Budget Rp 15-25 juta
- **Abimanyu Gen 2** atau **Gen 3** (slate 30mm)
- Cocok untuk cafe serius, venue premium
- Expected lifespan: 5-8 tahun

#### Budget Rp 25-40 juta
- **Abimanyu Gen 5 Pro** atau **Prime** (slate 38mm)
- Cocok untuk venue high-end, turnamen
- Expected lifespan: 8-12 tahun

## Hal yang Sering Diabaikan Pemilik Cafe

1. **Asuransi** — meja billiard rusak karena banjir atau kebakaran butuh proteksi
2. **Maintenance schedule** — cloth perlu diganti 2-3 tahun, brushing harian
3. **Lampu gantung** — pencahayaan yang tepat meningkatkan pengalaman dan durasi bermain
4. **Signage & branding** — meja branded dengan logo cafe meningkatkan estetika venue
5. **Peralatan tambahan** — rak stick, scoreboard, glove dispenser

## Custom Branding untuk Cafe

Vania Billiard melayani custom:
- Logo cafe di ukiran kaki meja
- Warna cloth sesuai brand
- Finishing sesuai tema venue

[Hubungi WhatsApp] untuk konsultasi paket cafe.`,
  },
  {
    id: "art-5",
    slug: "tips-merawat-kain-laken-billiard-agar-awet",
    title: "Tips Merawat Kain Laken Billiard Agar Awet",
    metaDescription:
      "Cara merawat kain laken billiard agar tahan 5+ tahun. Brushing, vacuum, dan perlindungan dari kerusakan umum.",
    category: "Perawatan",
    excerpt:
      "Cloth adalah komponen meja billiard yang paling sering diganti. Dengan perawatan yang tepat, cloth bisa tahan 5+ tahun.",
    readTime: 6,
    publishedAt: "2025-01-10",
    imageSlug: "art-5",
    content: `## Mengapa Cloth Perlu Dirawat

Cloth billiard (terutama Simonis 860) harganya Rp 4-7 juta untuk satu meja. Dengan perawatan yang tepat:
- **Tanpa perawatan**: tahan 1-2 tahun (cafe: 6-12 bulan)
- **Dengan perawatan rutin**: tahan 5-8 tahun (cafe: 2-3 tahun)

## Rutinitas Perawatan Harian

### 1. Brushing Setelah Main (5 menit)

Setelah sesi main selesai:
1. Sikat seluruh permukaan dengan brush khusus (arah searah, bukan bolak-balik)
2. Fokus di area sekitar pocket dan area "sugar" (tempat cue ball sering lewat)
3. Buang kapur yang menumpuk di tepi rail

### 2. Tutup dengan Cover

Selalu tutup meja dengan cover setelah main, terutama:
- Untuk melindungi dari debu
- Melindungi dari sinar UV langsung (rusak warna)
- Melindungi dari tumpahan minuman

## Rutinitas Mingguan (15-30 menit)

### 1. Vacuum Lembut

- Pakai vacuum dengan brush attachment (nozzle lembut)
- Vacuum seluruh permukaan dengan tekanan rendah
- Jangan pakai vacuum basah/water extraction

### 2. Spot Cleaning Noda

- Noda kapur: brush kering sudah cukup
- Noda minuman: lap microfiber sedikit basah, tepuk-tepuk (jangan gosok)
- Noda membandel: pakai cloth cleaner khusus billiard

## Rutinitas Bulanan

### 1. Cek Kondisi Pocket

- Bersihkan pocket dari debu dan serpihan
- Cek jaring pocket (leather net) — ganti kalau sudah kendor

### 2. Cek Rail Bumper

- Rail bumper yang keras mempengaruhi bounce bola
- Ganti kalau sudah aus

## Rutinitas Tahunan (oleh Profesional)

### 1. Re-felting / Re-clothing

- Ganti cloth setiap 2-3 tahun untuk pemakaian rumah
- Ganti setiap 1-2 tahun untuk pemakaian cafe/komersial
- Vania Billiard melayani jasa re-cloth dengan cloth Simonis atau setara

### 2. Leveling Check

- Cek apakah meja masih level (bisa mempengaruhi roll bola)
- Kalau ada perubahan, perlu di-level ulang

## Kesalahan Umum yang Merusak Cloth

1. **Minuman tanpa tutup** — tumpahan minuman ringan (cola, juice) langsung merusak cloth
2. **Merokok di atas meja** — nikotin dan abu merusak cloth
3. **Sinar matahari langsung** — memudarkan warna dalam hitungan bulan
4. **Cue yang kotor** — serak kayu atau debu di ujung cue menggores cloth
5. **Jari yang berkapur** — kapur berlebih di tangan membuat build-up di cloth

## Cloth Replacement Service

Vania Billiard melayani:
- Re-cloth meja (pakai Simonis 860 atau Iwan Simonis 950)
- Estimasi waktu: 4-6 jam (meja tetap di tempat)
- Bisa sambil re-leveling dan cek rel

[Hubungi WhatsApp] untuk booking re-cloth.`,
  },
  {
    id: "art-6",
    slug: "perbedaan-meja-billiard-lokal-import-custom-dan-second",
    title: "Perbedaan Meja Billiard Lokal, Import, Custom, dan Second",
    metaDescription:
      "Panduan memilih antara meja billiard lokal, import, custom, atau second. Plus, harga, kualitas, dan trade-off masing-masing.",
    category: "Material & Spec",
    excerpt:
      "Ada 4 jenis meja billiard di pasar Indonesia: lokal, import, custom, dan second. Masing-masing punya kelebihan dan kekurangan.",
    readTime: 7,
    publishedAt: "2025-01-15",
    imageSlug: "art-6",
    content: `## 4 Tipe Meja Billiard di Pasar Indonesia

### 1. Meja Lokal (Workshop Indonesia)

**Produsen**: Vania Billiard, beberapa workshop di Jepara, Ambarawa, dan Jawa Tengah

**Kelebihan**:
- Harga paling reasonable (Rp 9.5-25 juta untuk 7ft-8ft)
- Custom order mudah (warna, ukuran, kayu, ukiran)
- After-sales mudah (workshop lokal, spare part ready)
- Bisa request instalasi dan re-cloth berkala

**Kekurangan**:
- Material cloth standar (bukan Simonis 860, kecuali order khusus)
- Konstruksi bervariasi antar workshop (perlu cek kredibilitas)
- Brand awareness belum setinggi import

**Cocok untuk**: Rumah, cafe pemula, venue menengah

**Contoh harga**:
- Meja 7ft lokal: Rp 9.5-13 juta
- Meja 8ft lokal: Rp 10.5-18 juta
- Meja 9ft lokal: Rp 15-30 juta

### 2. Meja Import (Branded)

**Brand**: Brunswick, Olhausen, Predator, Iwan Simonis (cloth only)

**Kelebihan**:
- Material premium (cloth Simonis 860 standar)
- Konstruksi presisi tinggi
- Brand value (untuk yang mau pamer brand)
- Garansi jelas

**Kekurangan**:
- Harga 3-5x lipat meja lokal
- Custom order terbatas (model standar saja)
- After-sales lambat (butuh spare part import)
- Ongkir + bea masuk menambah 20-30% dari harga

**Cocok untuk**: Venue high-end, rumah mewah, kolektor

**Contoh harga**:
- Brunswick 7ft: USD 3,000-5,000 (Rp 45-75 juta)
- Olhausen 8ft: USD 4,000-7,000 (Rp 60-105 juta)
- Predator 9ft: USD 6,000+ (Rp 90+ juta)

### 3. Meja Custom (Made-to-Order)

**Produsen**: Vania Billiard (custom), beberapa workshop spesialis custom

**Kelebihan**:
- Ukuran custom (bisa 6ft, 10ft, 12ft)
- Material pilih sendiri (kayu, cloth, finishing)
- Detail ukiran atau branding custom
- Instalasi dan after-sales dari workshop yang sama

**Kekurangan**:
- Lead time lebih lama (2-4 minggu)
- Harga 30-50% lebih tinggi dari meja standar
- Butuh workshop yang punya track record custom

**Cocok untuk**: Cafe dengan tema khusus, private premium, hotel,别墅

**Contoh harga**:
- Custom 7ft (kayu oak, cloth import, ukiran): Rp 18-30 juta
- Custom 9ft (full premium): Rp 40-70 juta

### 4. Meja Second (Bekas)

**Sumber**: Marketplace, komunitas billiard, bisnis yang tutup

**Kelebihan**:
- Harga paling murah (40-60% dari harga baru)
- Brand terkenal dengan harga terjangkau
- Untuk pemula yang mau coba dulu

**Kekurangan**:
- Cloth pasti sudah aus (perlu re-cloth = tambah Rp 4-7 juta)
- Konstruksi tidak diketahui (bisa ada kerusakan tersembunyi)
- Tidak ada garansi
- Ongkir + instalasi + re-cloth bisa total 70% harga baru

**Cocok untuk**: Pemula dengan budget ketat, eksperimen

**Tips beli meja second**:
1. Cek kondisi slate (retak? gompal?)
2. Cek kondisi rel dan pocket
3. Cek kayu (rayap? lapuk?)
4. Negosiasi dengan asumsi re-cloth + re-leveling

## Rekomendasi

Untuk kebanyakan orang, **meja lokal dari workshop terpercaya** adalah pilihan terbaik:
- Kualitas sebanding import 70-80% dengan harga 30-50%
- After-sales jelas
- Custom order fleksibel

Vania Billiard membuat meja lokal dengan standar material yang sebanding import pada seri Abimanyu Gen 5 Pro ke atas.

[Hubungi WhatsApp] untuk konsultasi jenis meja yang tepat.`,
  },
  {
    id: "art-7",
    slug: "perlengkapan-aksesoris-billiard-yang-wajib-dimiliki",
    title: "Perlengkapan Aksesoris Billiard yang Wajib Dimiliki",
    metaDescription:
      "Daftar aksesoris billiard yang wajib dimiliki: stick, bola, kapur, glove, cover, dan lainnya. Plus tips memilih yang tepat.",
    category: "Pemula",
    excerpt:
      "Beli meja billiard saja tidak cukup. Aksesoris yang tepat membuat pengalaman bermain jauh lebih baik. Panduan ini menjelaskan apa yang wajib.",
    readTime: 6,
    publishedAt: "2025-01-20",
    imageSlug: "art-7",
    content: `## Aksesoris Wajib (Set Minimum)

### 1. Stick Billiard (Minimal 2)

- **Untuk rumah**: 2 stick cukup (1 untuk setiap pemain umum)
- **Untuk cafe**: 4-6 stick dengan berat berbeda
- **Pemilihan**: maple wood (standar), berat 18-19oz untuk pemula

**Rekomendasi Vania Billiard**:
- Stick Lokal Jati: Rp 750.000 (entry)
- Stick Viking: Rp 2.5 juta (premium)

### 2. Set Bola Billiard (1 set)

- 16 bola + 1 cue ball = total 17 bola
- **Standar**: Aramith Standard (Rp 1.4 juta) untuk pemula
- **Tournament**: Aramith Pro (Rp 2.2 juta) untuk serius
- Warna standar: 1-7 solid, 9-15 striped, 8 hitam, cue putih

### 3. Kapur Chalk

- Wajib dipakai setiap kali shoot
- Tanpa kapur, cue meleset (miscue)
- 1 box (12pcs) cukup untuk 6-12 bulan
- Rekomendasi: Kapur Master (Rp 65.000/box)

### 4. Glove

- Meminimalkan gesekan cue di bridge hand
- 1 glove cukup untuk satu pemain (atau 2-3 untuk shared)
- Rekomendasi: Glove Billiard (Rp 150.000)

### 5. Brush Pembersih

- Untuk brushing cloth setelah main
- Brush khusus billiard (bukan brush serbaguna)
- Harga: Rp 100.000-200.000

## Aksesoris Penting (Tidak Wajib Tapi Sangat Disarankan)

### 6. Tas Stick

- Melindungi stick saat disimpan/dibawa
- Hardcase lebih awet dari softcase
- Rekomendasi: Tas Stick Hardcase (Rp 450.000)

### 7. Cover Meja

- Melindungi meja dari debu, air, dan sinar UV
- Wajib untuk meja yang jarang dipakai
- Rekomendasi: Cover Meja Premium (Rp 850.000)

### 8. Lampu Gantung

- Pencahayaan yang tepat penting untuk visibility
- Lampu billiard standar: 3 lampu LED di atas meja
- Investasi: Rp 1.5-3 juta

### 9. Microfiber Cleaning Cloth

- Untuk lap kering/basah pada bola, stick, dan meja
- 2pcs cukup
- Rekomendasi: Microfiber Premium 2pcs (Rp 75.000)

## Aksesoris Untuk Upgrade Pengalaman

### 10. Scoreboard

- Papan score kayu (manual) atau digital
- Papan kayu handmade lebih estetik
- Rekomendasi: Papan Score Kayu (Rp 350.000)

### 11. Cue Rack / Stick Holder

- Tempat penyimpanan stick yang rapi
- Wall-mounted atau floor-standing

### 12. Lampu LED Premium

- Upgrade dari lampu standar ke lampu dengan color temperature yang bisa diatur
- Investasi: Rp 3-8 juta

## Total Budget Aksesoris

### Setup Minimum (Pemula)
- 2 stick lokal: Rp 1.5 juta
- 1 set bola standar: Rp 1.4 juta
- 1 box kapur: Rp 65.000
- 1 brush: Rp 150.000
- 1 glove: Rp 150.000
- **Total**: ~Rp 3.3 juta

### Setup Recommended (Serius)
- 2 stick premium: Rp 5 juta
- 1 set bola turnamen: Rp 2.2 juta
- 1 box kapur: Rp 65.000
- 1 brush premium: Rp 200.000
- 2 glove: Rp 300.000
- 1 tas stick: Rp 450.000
- 1 cover meja: Rp 850.000
- **Total**: ~Rp 9.1 juta

### Setup Premium (Venue)
- 6 stick berbagai berat: Rp 12-15 juta
- 1 set bola turnamen: Rp 2.2 juta
- 5 box kapur: Rp 325.000
- 5 brush: Rp 750.000
- 5 glove: Rp 750.000
- 6 tas stick: Rp 2.7 juta
- 1 cover meja: Rp 850.000
- 1 lampu gantung: Rp 2.5 juta
- **Total**: ~Rp 25 juta

[Hubungi WhatsApp Vania Billiard] untuk paket aksesoris sesuai budget.`,
  },
  {
    id: "art-8",
    slug: "cara-memilih-stick-billiard-untuk-pemula",
    title: "Cara Memilih Stick Billiard untuk Pemula",
    metaDescription:
      "Panduan memilih stick billiard pertama: bahan, berat, panjang, tip size, dan budget. Untuk pemula yang baru mulai main.",
    category: "Pemula",
    excerpt:
      "Stick billiard pertama harus tepat agar tidak menghambat perkembangan skill. Panduan ini membahas semua yang perlu diketahui pemula.",
    readTime: 5,
    publishedAt: "2025-01-25",
    imageSlug: "art-8",
    content: `## Anatomy Stick Billiard

Sebelum memilih, p dulu bagian-bagiannya:

1. **Butt (handle/pangkal)** — bagian belakang, biasanya lebih tebal
2. **Wrap** — lapisan grip di butt (Irish linen, leather, atau tanpa wrap)
3. **Joint** — sambungan antara butt dan shaft (biasanya di tengah)
4. **Shaft** — bagian depan yang tipis, tempat "action" cue
5. **Ferrule** — plastik putih di atas shaft
6. **Tip** — ujung atas (leather), yang kontak dengan bola
7. **Bumper** — karet di butt paling belakang

## 5 Hal yang Harus Dipertimbangkan Pemula

### 1. Berat (Weight)

- **18-19 oz** — standar, cocok untuk pemula
- <18 oz — cue lebih ringan, butuh teknik lebih
- >19 oz — cue lebih berat, butuh kekuatan lebih

**Rekomendasi pemula**: 19 oz

### 2. Panjang (Length)

- **57-59 inci** — standar orang dewasa Indonesia
- <57 inci — untuk anak atau orang pendek
- 60+ inci — untuk cue stroke panjang (jarang)

**Cara ukur**: berdiri tegak, cue dipegang vertikal di lantai. Panjang ideal = dari lantai sampai dagu.

### 3. Bahan (Material)

#### Maple (Standar)
- Keras, awet, populer
- Harga: Rp 750.000 - 2.5 juta
- Cocok untuk pemula-menengah

#### Oak (Premium)
- Lebih keras dari maple
- Harga: Rp 2-5 juta
- Untuk serius

#### Fiberglass (Komposit)
- Shaft fiberglass = low deflection (bola tidak meleset)
- Harga: Rp 1.5-3 juta
- Cocok untuk pemula yang mau cepat improve

**Rekomendasi pemula**: Maple entry-level atau fiberglass

### 4. Tip Size

- **11-12 mm** — standar pemula, lebih banyak kontak dengan bola
- **13 mm** — lebih banyak kontrol, untuk power break
- **<11 mm** — butuh skill tinggi

**Rekomendasi pemula**: 12 mm

### 5. Wrap

- **Tanpa wrap** — licin, perlu glove
- **Irish linen** — grip baik, populer
- **Leather** — grip terbaik, harga lebih tinggi

**Rekomendasi pemula**: Irish linen (kompromi harga-grip)

## Rekomendasi untuk Budget Berbeda

### Budget <Rp 1 juta
- **Stick Lokal Kayu Jati** (Rp 750.000)
- Maple wood, handcrafted
- Cocok untuk pemula yang baru coba-coba

### Budget Rp 1-2.5 juta
- **Stick Cuetec** (Rp 1.8 juta)
- Fiberglass shaft (low deflection)
- Irish linen wrap
- Value terbaik untuk pemula serius

### Budget Rp 2.5-5 juta
- **Stick Viking** (Rp 2.5 juta+)
- Maple import
- Phenolic ferrule
- Bisa upgrade tip size

## Kesalahan Pemula dalam Memilih Stick

1. **Beli stick yang terlalu ringan** — kontrol lebih susah
2. **Beli stick second tanpa cek** — bisa ada warping atau crack
3. **Tidak beli glove** — tanpa glove, bridge hand licin
4. **Beli stick murahan yang beratnya tidak sesuai** — distribusi berat tidak seimbang

## Setelah Beli Stick

1. **Latih bridge** — pakai glove, latih konsistensi bridge
2. **Cek tip** — pastikan tip pas, tidak terlalu tipis/tebal
3. **Main 2-3x seminggu** — untuk adaptasi
4. **Ganti chalk tiap shoot** — jangan skip

## Kapan Harus Upgrade?

- Setelah 6-12 bulan main rutin (2-3x seminggu)
- Kalau sudah bisa kontrol bola dengan konsisten
- Kalau sudah paham english (side spin)
- Budget siap invest Rp 2.5+ juta

[Hubungi WhatsApp] untuk konsultasi stick sesuai budget.`,
  },
];

export const featuredArticles = () => articles.slice(0, 3);
export const allArticles = () => articles;
export const byArticleSlug = (slug: string) => articles.find((a) => a.slug === slug);
export const relatedArticles = (currentSlug: string, limit = 3) =>
  articles.filter((a) => a.slug !== currentSlug).slice(0, limit);
