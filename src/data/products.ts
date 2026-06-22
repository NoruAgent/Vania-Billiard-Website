// Abimanyu lineup — PRD v1.0 Section 14
// 10 featured + 1 custom

export type TableSize = "7ft" | "8ft" | "9ft";
export type ProductStatus = "ready" | "custom" | "import" | "second";

export interface Product {
  id: string;
  slug: string;
  name: string;
  series: "abimanyu" | "standard" | "custom";
  tagline: string;
  startingPrice: number | null; // null = "Hubungi WhatsApp"
  priceNote: string;
  highlights: string[];
  sizes: TableSize[];
  featured: boolean;
  bestSeller?: boolean;
  recommended?: boolean;
  status: ProductStatus;
  positioning: string;
  // Specs (PRD Section 15.3 — could be placeholder, marked editable)
  specs: {
    kayuUtama: string;
    slate: string;
    cloth: string;
    pocket: string;
    finishing: string;
    garansi: string;
  };
}

export const products: Product[] = [
  // ——— Meja Ukuran (entry tier) ———
  {
    id: "meja-7ft",
    slug: "meja-billiard-7ft",
    name: "Meja 7ft",
    series: "standard",
    tagline: "Entry-friendly. Cocok untuk ruang keluarga & pemula.",
    startingPrice: 9_500_000,
    priceNote: "Mulai dari Rp 9.500.000",
    highlights: [
      "Ukuran compact 7ft (213×107cm)",
      "Slate 19mm, kaki solid wood",
      "Cocok ruangan 4×5 meter",
    ],
    sizes: ["7ft"],
    featured: true,
    status: "ready",
    positioning:
      "Pilihan entry-friendly untuk rumah dengan ruangan terbatas, pemain pemula, atau ruang keluarga yang ingin suasana kasual tanpa kompromi kualitas dasar.",
    specs: {
      kayuUtama: "Kayu Jati / Mahoni (pilih saat order)",
      slate: "Slate 1pc 19mm",
      cloth: "Kain laken standar (warna pilih)",
      pocket: "6 pocket standar",
      finishing: "NC finishing gloss/satin",
      garansi: "1 tahun konstruksi",
    },
  },
  {
    id: "meja-8ft",
    slug: "meja-billiard-8ft",
    name: "Meja 8ft",
    series: "standard",
    tagline: "Sweet spot. Standar kafe & komunitas.",
    startingPrice: 10_500_000,
    priceNote: "Mulai dari Rp 10.500.000",
    highlights: [
      "Ukuran populer 8ft (254×127cm)",
      "Slate 25mm, kaki solid wood",
      "Cocok ruangan 5×6 meter",
    ],
    sizes: ["8ft"],
    featured: true,
    bestSeller: true,
    status: "ready",
    positioning:
      "Ukuran paling populer untuk kafe, ruang komunitas, dan rumah dengan ruangan sedang. Keseimbangan ideal antara luas area bermain dan footprint ruangan.",
    specs: {
      kayuUtama: "Kayu Jati (grade A)",
      slate: "Slate 1pc 25mm",
      cloth: "Kain laken premium (warna pilih)",
      pocket: "6 pocket standar",
      finishing: "NC finishing gloss",
      garansi: "1 tahun konstruksi",
    },
  },

  // ——— Abimanyu Series ———
  {
    id: "abimanyu-gen-1",
    slug: "abimanyu-gen-1",
    name: "Abimanyu Gen 1",
    series: "abimanyu",
    tagline: "Pendahulu lineup Abimanyu. Klasik, handal.",
    startingPrice: 12_500_000,
    priceNote: "Mulai dari Rp 12.500.000",
    highlights: [
      "Seri original Abimanyu",
      "Slate 25mm, kayu jati grade A",
      "Cocok rumah & venue kasual",
    ],
    sizes: ["7ft", "8ft"],
    featured: false,
    status: "ready",
    positioning:
      "Pendahulu seri Abimanyu yang sudah teruji. Cocok untuk yang ingin upgrade dari meja standar dengan konstruksi lebih solid dan detail finishing lebih rapi.",
    specs: {
      kayuUtama: "Kayu Jati grade A",
      slate: "Slate 1pc 25mm",
      cloth: "Kain laken premium (8 warna)",
      pocket: "6 pocket dengan leather net",
      finishing: "PU finishing satin",
      garansi: "2 tahun konstruksi",
    },
  },
  {
    id: "abimanyu-gen-2",
    slug: "abimanyu-gen-2",
    name: "Abimanyu Gen 2",
    series: "abimanyu",
    tagline: "Value-for-money. Tampilan premium, harga masuk akal.",
    startingPrice: 15_000_000,
    priceNote: "Mulai dari Rp 15.000.000",
    highlights: [
      "Best value seri Abimanyu",
      "Slate 30mm, kayu jati perhutani",
      "Cocok rumah, ruang santai, casual",
    ],
    sizes: ["7ft", "8ft"],
    featured: true,
    recommended: true,
    status: "ready",
    positioning:
      "Pilihan value-for-money untuk rumah, ruang santai, dan pemakaian casual dengan tampilan tetap premium.",
    specs: {
      kayuUtama: "Kayu Jati Perhutani",
      slate: "Slate 1pc 30mm",
      cloth: "Kain laken Simonis grade (warna pilih)",
      pocket: "6 pocket dengan leather net premium",
      finishing: "PU finishing gloss premium",
      garansi: "3 tahun konstruksi",
    },
  },
  {
    id: "abimanyu-gen-3",
    slug: "abimanyu-gen-3",
    name: "Abimanyu Gen 3",
    series: "abimanyu",
    tagline: "Mid-tier performa. Stabilitas lebih baik.",
    startingPrice: 20_000_000,
    priceNote: "Mulai dari Rp 20.000.000",
    highlights: [
      "Slate 30mm presisi tinggi",
      "Rel solid stainless steel",
      "Cocok pemain serius & venue",
    ],
    sizes: ["7ft", "8ft", "9ft"],
    featured: false,
    status: "ready",
    positioning:
      "Pilihan mid-tier dengan fokus pada stabilitas dan presisi. Cocok untuk pemain yang sudah serius dan venue yang membutuhkan konsistensi bermain.",
    specs: {
      kayuUtama: "Kayu Jati Perhutani grade A+",
      slate: "Slate 1pc 30mm (presisi ±0.1mm)",
      cloth: "Kain Simonis 860 (Impor Belgia)",
      pocket: "6 pocket + leather net premium",
      finishing: "PU finishing high-gloss",
      garansi: "3 tahun konstruksi",
    },
  },
  {
    id: "abimanyu-gen-5-basic",
    slug: "abimanyu-gen-5-basic",
    name: "Abimanyu Gen 5 Basic",
    series: "abimanyu",
    tagline: "Entry performa Gen 5. Lebih ringan di budget.",
    startingPrice: 15_000_000,
    priceNote: "Mulai dari Rp 15.000.000",
    highlights: [
      "Platform Gen 5, basic spec",
      "Slate 30mm, kayu jati perhutani",
      "Cocok upgrade dari Gen 2",
    ],
    sizes: ["7ft", "8ft"],
    featured: false,
    status: "ready",
    positioning:
      "Entry-level dari platform Gen 5 untuk yang ingin spesifikasi terbaru dengan budget yang lebih masuk akal.",
    specs: {
      kayuUtama: "Kayu Jati Perhutani",
      slate: "Slate 1pc 30mm",
      cloth: "Kain laken premium grade A",
      pocket: "6 pocket standar premium",
      finishing: "PU finishing satin premium",
      garansi: "3 tahun konstruksi",
    },
  },
  {
    id: "abimanyu-gen-5-pro",
    slug: "abimanyu-gen-5-pro",
    name: "Abimanyu Gen 5 Pro",
    series: "abimanyu",
    tagline: "Performa Gen 5 full-spec. Untuk pemain serius.",
    startingPrice: 23_000_000,
    priceNote: "Mulai dari Rp 23.000.000",
    highlights: [
      "Full-spec Gen 5 platform",
      "Slate 38mm, level presisi tinggi",
      "Cocok pemain serius & kafe premium",
    ],
    sizes: ["8ft", "9ft"],
    featured: true,
    bestSeller: true,
    status: "ready",
    positioning:
      "Pilihan performa lebih serius dengan spesifikasi lebih kuat, cocok untuk pemain yang ingin pengalaman bermain lebih stabil.",
    specs: {
      kayuUtama: "Kayu Jati Perhutani grade A+",
      slate: "Slate 1pc 38mm (level turnamen)",
      cloth: "Kain Simonis 860 / Iwan Simonis 950",
      pocket: "6 pocket + leather net import",
      finishing: "PU finishing high-gloss + detail ukir",
      garansi: "5 tahun konstruksi",
    },
  },
  {
    id: "abimanyu-prime-basic",
    slug: "abimanyu-prime-basic",
    name: "Abimanyu Prime Basic",
    series: "abimanyu",
    tagline: "Platform Prime entry. Estetika premium, basic spec.",
    startingPrice: 15_000_000,
    priceNote: "Mulai dari Rp 15.000.000",
    highlights: [
      "Platform Prime, basic spec",
      "Slate 30mm, kayu jati perhutani",
      "Detail ukir signature Prime",
    ],
    sizes: ["7ft", "8ft"],
    featured: false,
    status: "ready",
    positioning:
      "Entry-level dari lini premium Prime. Untuk yang mengutamakan estetika dan detail ukiran signature Prime dengan budget yang lebih masuk akal.",
    specs: {
      kayuUtama: "Kayu Jati Perhutani",
      slate: "Slate 1pc 30mm",
      cloth: "Kain laken premium grade A",
      pocket: "6 pocket + detail ukir signature",
      finishing: "PU finishing gloss premium + ukir",
      garansi: "3 tahun konstruksi",
    },
  },
  {
    id: "abimanyu-prime",
    slug: "abimanyu-prime",
    name: "Abimanyu Prime",
    series: "abimanyu",
    tagline: "Tampilan elegan, spesifikasi lengkap. Signature.",
    startingPrice: 24_000_000,
    priceNote: "Mulai dari Rp 24.000.000",
    highlights: [
      "Signature series Prime",
      "Slate 38mm, kayu jati grade premium",
      "Detail ukir handmade signature",
    ],
    sizes: ["8ft", "9ft"],
    featured: true,
    recommended: true,
    status: "ready",
    positioning:
      "Pilihan premium dengan tampilan elegan dan spesifikasi lebih lengkap untuk rumah, cafe, dan ruang billiard berkelas.",
    specs: {
      kayuUtama: "Kayu Jati Perhutani grade premium",
      slate: "Slate 1pc 38mm (level turnamen)",
      cloth: "Kain Iwan Simonis 950 (Impor Belgia)",
      pocket: "6 pocket + leather net premium + detail ukir",
      finishing: "PU finishing high-gloss + ukir handmade signature",
      garansi: "5 tahun konstruksi",
    },
  },
  {
    id: "abimanyu-phantom",
    slug: "abimanyu-phantom",
    name: "Abimanyu Phantom",
    series: "abimanyu",
    tagline: "Limited series. Material impor, produksi terbatas.",
    startingPrice: 24_000_000,
    priceNote: "Mulai dari Rp 24.000.000",
    highlights: [
      "Limited series, produksi terbatas",
      "Material kayu & cloth impor",
      "Cocok kolektor & private premium",
    ],
    sizes: ["8ft", "9ft"],
    featured: true,
    status: "ready",
    positioning:
      "Limited series untuk kolektor dan private premium. Material impor, produksi terbatas, dengan detail yang tidak akan ditemukan di seri lain.",
    specs: {
      kayuUtama: "Kayu oak/maple impor (terbatas)",
      slate: "Slate 1pc 38mm (Italian slate)",
      cloth: "Kain Iwan Simonis 950 (limited edition)",
      pocket: "6 pocket custom + leather net import",
      finishing: "Hand-rubbed lacquer premium + ukir khusus",
      garansi: "5 tahun konstruksi + 1 tahun finishing",
    },
  },
  {
    id: "custom",
    slug: "custom-meja-billiard",
    name: "Custom Order",
    series: "custom",
    tagline: "Sesuaikan semuanya. Material, ukuran, finishing, ukir.",
    startingPrice: null,
    priceNote: "Hubungi WhatsApp untuk konsultasi",
    highlights: [
      "Ukuran custom (sampai 12ft)",
      "Kayu & finishing pilih sendiri",
      "Konsultasi gratis via WhatsApp",
    ],
    sizes: ["7ft", "8ft", "9ft"],
    featured: true,
    status: "custom",
    positioning:
      "Untuk yang ingin meja benar-benar satu-satunya. Mulai dari ukuran custom, pilihan kayu, finishing, kain, sampai detail ukiran. Semua bisa disesuaikan.",
    specs: {
      kayuUtama: "Pilih sendiri (jati, mahoni, sono, dll)",
      slate: "Pilih sendiri (19/25/30/38mm)",
      cloth: "Pilih sendiri (8+ warna)",
      pocket: "Pilih sendiri (standar / premium / custom)",
      finishing: "Pilih sendiri (gloss / satin / matte / custom)",
      garansi: "Disesuaikan dengan paket",
    },
  },
];

// Helpers
export const featuredProducts = () => products.filter((p) => p.featured);
export const bestSellers = () => products.filter((p) => p.bestSeller);
export const recommended = () => products.filter((p) => p.recommended);
export const bySeries = (series: Product["series"]) =>
  products.filter((p) => p.series === series);
export const byId = (id: string) => products.find((p) => p.id === id);
export const bySlug = (slug: string) => products.find((p) => p.slug === slug);

export const formatRupiah = (n: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(n);
