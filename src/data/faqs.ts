// FAQ — PRD v1.0 Section 23

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: "Ukuran" | "Custom" | "Pengiriman" | "Harga" | "Instalasi" | "Aksesoris" | "Konsultasi" | "Marketplace" | "Order";
}

export const faqs: FAQ[] = [
  {
    id: "faq-1",
    question: "Berapa ukuran ruangan minimal untuk meja billiard?",
    answer:
      "Ukuran ruangan minimum tergantung ukuran meja:\n\n• Meja 7ft — ruangan minimal 4 × 5 meter\n• Meja 8ft — ruangan minimal 5 × 6 meter\n• Meja 9ft — ruangan minimal 5.5 × 7 meter\n\nMargin cue stroke minimum 1.5m di setiap sisi meja. Coba Simulator Ruangan Vania Billiard untuk visualisasi layout ruangan Anda sebelum membeli.",
    category: "Ukuran",
  },
  {
    id: "faq-2",
    question: "Apa beda meja 7ft, 8ft, dan 9ft?",
    answer:
      "Perbedaan utama:\n\n• **7ft** (213×107cm) — untuk ruang terbatas, pemain pemula, harga lebih terjangkau mulai Rp 9.5 juta\n• **8ft** (254×127cm) — ukuran paling populer untuk kafe dan komunitas, mulai Rp 10.5 juta\n• **9ft** (274×137cm) — standar turnamen, untuk pemain serius dan venue premium, mulai Rp 15 juta\n\nSemua ukuran tersedia di Vania Billiard dengan berbagai seri dari Abimanyu Gen 2 sampai Phantom.",
    category: "Ukuran",
  },
  {
    id: "faq-3",
    question: "Apakah bisa custom meja?",
    answer:
      "Ya, Vania Billiard melayani custom order:\n\n• Ukuran custom (sampai 12ft)\n• Pilihan kayu (jati, mahoni, sono keling, maple, oak)\n• Finishing custom (gloss, satin, matte, dengan detail ukir)\n• Warna kain pilih sendiri\n• Logo atau inisial di ukiran kaki meja\n• Pocket custom\n\nKonsultasikan kebutuhan Anda via WhatsApp untuk estimasi harga dan lead time (umumnya 2-4 minggu).",
    category: "Custom",
  },
  {
    id: "faq-4",
    question: "Apakah bisa kirim luar kota?",
    answer:
      "Ya, Vania Billiard melayani pengiriman nasional ke seluruh Indonesia:\n\n• Pengiriman via ekspedisi cargo (meja + packing kayu)\n• Estimasi ongkir tergantung lokasi dan ukuran meja\n• Include packing kayu untuk keamanan\n• Asuransi pengiriman opsional\n• Instalasi di lokasi bisa di-include (tergantung lokasi)\n\nKonsultasikan via WhatsApp untuk estimasi ongkir ke kota Anda.",
    category: "Pengiriman",
  },
  {
    id: "faq-5",
    question: "Apakah harga sudah termasuk ongkir?",
    answer:
      "Harga yang tertera di website adalah harga meja saja (belum termasuk ongkir dan instalasi).\n\nBiaya tambahan:\n• Ongkir — tergantung lokasi, mulai Rp 500.000 untuk Jawa, lebih untuk luar Jawa\n• Instalasi — optional, Rp 500.000-1.500.000 tergantung lokasi dan kompleksitas\n• Packing kayu — include dalam ongkir\n\nTotal akhir akan diinformasikan via WhatsApp setelah konsultasi.",
    category: "Harga",
  },
  {
    id: "faq-6",
    question: "Apakah ada layanan pemasangan?",
    answer:
      "Ya, Vania Billiard menyediakan layanan instalasi:\n\n• Instalasi standar (leveling, setting rel, pasang cloth): Rp 500.000-1.500.000\n• Instalasi termasuk di Jabodetabek dan kota-kota besar di Jawa\n• Untuk luar Jawa, instalasi bisa di-include dalam paket ongkir\n• Tim instalasi berpengalaman (5+ tahun)\n\nKonsultasikan via WhatsApp untuk estimasi biaya instalasi ke lokasi Anda.",
    category: "Instalasi",
  },
  {
    id: "faq-7",
    question: "Apakah bisa beli aksesoris saja?",
    answer:
      "Ya, Anda bisa beli aksesoris billiard saja tanpa beli meja:\n\n• Tersedia stick, bola, kain laken, kapur, glove, tas stick, cover meja, dan lainnya\n• Bisa order via WhatsApp untuk konsultasi stok dan harga\n• Tersedia juga di Shopee dan TikTok Shop Vania Billiard\n• Pengiriman ke seluruh Indonesia\n\nKhusus kain laken, kami juga melayani jasa re-cloth untuk meja existing (bukan hanya meja Vania).",
    category: "Aksesoris",
  },
  {
    id: "faq-8",
    question: "Apakah bisa konsultasi dulu sebelum beli?",
    answer:
      "Tentu, bahkan sangat disarankan! Konsultasi gratis via WhatsApp:\n\n• Konsultasi ukuran ruangan (pakai Simulator + analisa manual)\n• Konsultasi seri meja yang cocok (sesuai budget dan kebutuhan)\n• Konsultasi material dan finishing\n• Konsultasi custom order\n• Konsultasi instalasi dan pengiriman\n\nTidak ada biaya konsultasi, dan tidak ada obligation untuk order. Hubungi via WhatsApp meja (untuk konsultasi meja) atau WhatsApp aksesoris (untuk konsultasi aksesoris).",
    category: "Konsultasi",
  },
  {
    id: "faq-9",
    question: "Apakah produk tersedia di Shopee/TikTok Shop?",
    answer:
      "Ya, sebagian besar aksesoris dan beberapa seri meja tersedia di marketplace:\n\n• **Shopee**: [shopee.co.id/vaniabilliard](https://shopee.co.id/vaniabilliard)\n• **TikTok Shop**: Vania Billiard Official\n• **Link lainnya**: [tr.ee/wyOXUkTWfc](https://tr.ee/wyOXUkTWfc)\n\nUntuk seri meja premium (Abimanyu Gen 5 Pro ke atas dan custom), umumnya hanya tersedia via WhatsApp karena butuh konsultasi detail.",
    category: "Marketplace",
  },
  {
    id: "faq-10",
    question: "Bagaimana cara order?",
    answer:
      "Cara order di Vania Billiard:\n\n1. **Konsultasi** via WhatsApp (meja atau aksesoris)\n2. **Pilih produk** dan konfirmasi harga, ongkir, instalasi\n3. **DP 50%** untuk konfirmasi order (transfer bank)\n4. **Produksi** (untuk custom) atau **persiapan barang** (untuk ready stock)\n5. **Pelunasan 50%** sebelum pengiriman\n6. **Pengiriman + instalasi** (jika termasuk)\n7. **Garansi** sesuai seri yang dipilih\n\nUntuk marketplace (Shopee/TikTok Shop), order via platform masing-masing dengan sistem pembayaran marketplace.",
    category: "Order",
  },
];

export const faqsByCategory = () => {
  const groups: Record<FAQ["category"], FAQ[]> = {} as Record<
    FAQ["category"],
    FAQ[]
  >;
  for (const f of faqs) {
    if (!groups[f.category]) groups[f.category] = [];
    groups[f.category].push(f);
  }
  return groups;
};
