// Accessories — PRD v1.0 Section 17

export type AccessoryCategory =
  | "kain-laken"
  | "stick"
  | "bola"
  | "cover"
  | "glove"
  | "tas-stick"
  | "microfiber"
  | "kapur"
  | "scoreboard"
  | "other";

export interface Accessory {
  id: string;
  slug: string;
  name: string;
  category: AccessoryCategory;
  shortDescription: string;
  price?: number; // undefined = "Tanya WA"
  priceNote: string;
  stockStatus: "ready" | "preorder" | "habis";
  highlights: string[];
  bestSeller?: boolean;
}

export const categoryLabels: Record<AccessoryCategory, string> = {
  "kain-laken": "Kain Laken",
  stick: "Stick Billiard",
  bola: "Bola Billiard",
  cover: "Cover Meja",
  glove: "Glove",
  "tas-stick": "Tas Stick",
  microfiber: "Microfiber",
  kapur: "Kapur Chalk",
  scoreboard: "Papan Score",
  other: "Lainnya",
};

export const accessories: Accessory[] = [
  // Kain Laken
  {
    id: "kain-simonis-860",
    slug: "kain-simonis-860",
    name: "Kain Simonis 860",
    category: "kain-laken",
    shortDescription:
      "Kain turnamen profesional. 90% worsted wool, 10% nylon. Standar WPA.",
    price: 4_500_000,
    priceNote: "Mulai dari Rp 4.500.000",
    stockStatus: "ready",
    highlights: [
      "Standar turnamen WPA",
      "Warna: Biru, hijau, merah maroon, abu",
      "Include jasa pasang",
    ],
    bestSeller: true,
  },
  {
    id: "kain-iwan-simonis-950",
    slug: "kain-iwan-simonis-950",
    name: "Kain Iwan Simonis 950",
    category: "kain-laken",
    shortDescription:
      "Premium cloth impor Belgia. 100% worsted wool. Untuk venue premium.",
    price: 6_500_000,
    priceNote: "Mulai dari Rp 6.500.000",
    stockStatus: "ready",
    highlights: [
      "100% worsted wool (import Belgia)",
      "Warna: Biru tournament, hijau tournament",
      "Untuk Abimanyu Gen 5 Pro & Prime ke atas",
    ],
  },
  {
    id: "kain-laken-premium",
    slug: "kain-laken-premium",
    name: "Kain Laken Premium",
    category: "kain-laken",
    shortDescription:
      "Kain laken premium untuk meja rumahan. Pilihan warna lengkap.",
    price: 2_500_000,
    priceNote: "Mulai dari Rp 2.500.000",
    stockStatus: "ready",
    highlights: [
      "8 pilihan warna",
      "Standar untuk meja 7ft-8ft",
      "Include pasang",
    ],
    bestSeller: true,
  },

  // Stick
  {
    id: "stick-viking",
    slug: "stick-viking",
    name: "Stick Viking",
    category: "stick",
    shortDescription:
      "Stick import premium. Maple wood, ferrule phenolic, tip leather 11mm.",
    price: 2_500_000,
    priceNote: "Mulai dari Rp 2.500.000",
    stockStatus: "ready",
    highlights: [
      "Maple wood import",
      "Tip leather 11mm",
      "Berat 18-19oz (custom)",
    ],
  },
  {
    id: "stick-cuetec",
    slug: "stick-cuetec",
    name: "Stick Cuetec",
    category: "stick",
    shortDescription:
      "Stick composite dengan shaft fiberglass. Tahan lama, harga reasonable.",
    price: 1_800_000,
    priceNote: "Mulai dari Rp 1.800.000",
    stockStatus: "ready",
    highlights: [
      "Shaft fiberglass (low deflection)",
      "Wrap Irish linen",
      "Cocok pemula hingga menengah",
    ],
  },
  {
    id: "stick-lokal-jati",
    slug: "stick-lokal-jati",
    name: "Stick Lokal Kayu Jati",
    category: "stick",
    shortDescription:
      "Stick produksi lokal kayu jati. Handcrafted, finishing rapi.",
    price: 750_000,
    priceNote: "Mulai dari Rp 750.000",
    stockStatus: "ready",
    highlights: [
      "Kayu jati lokal",
      "Handcrafted, finishing rapi",
      "Cocok pemula & latihan",
    ],
    bestSeller: true,
  },

  // Bola
  {
    id: "bola-aramith-pro",
    slug: "bola-aramith-pro",
    name: "Bola Aramith Pro",
    category: "bola",
    shortDescription:
      "Bola standar turnamen. Phenolic resin, diameter 57.2mm, berat 170g.",
    price: 2_200_000,
    priceNote: "Mulai dari Rp 2.200.000",
    stockStatus: "ready",
    highlights: [
      "Phenolic resin (standar turnamen)",
      "Set 16 bola + 1 cue ball",
      "Include bola nomor 8 khusus",
    ],
  },
  {
    id: "bola-aramith-standard",
    slug: "bola-aramith-standard",
    name: "Bola Aramith Standard",
    category: "bola",
    shortDescription: "Bola phenolic resin untuk pemakaian rumahan & kafe.",
    price: 1_400_000,
    priceNote: "Mulai dari Rp 1.400.000",
    stockStatus: "ready",
    highlights: [
      "Phenolic resin standar",
      "Set 16 bola + 1 cue ball",
      "Awet 5+ tahun",
    ],
    bestSeller: true,
  },

  // Cover
  {
    id: "cover-meja-premium",
    slug: "cover-meja-premium",
    name: "Cover Meja Premium",
    category: "cover",
    shortDescription:
      "Cover meja billiard heavy-duty. Melindungi dari debu, air, dan sinar UV.",
    price: 850_000,
    priceNote: "Mulai dari Rp 850.000",
    stockStatus: "ready",
    highlights: [
      "Heavy-duty polyester + PVC coating",
      "Tahan air & UV",
      "Custom size untuk 7ft/8ft/9ft",
    ],
  },

  // Glove
  {
    id: "glove-billiard",
    slug: "glove-billiard",
    name: "Glove Billiard",
    category: "glove",
    shortDescription:
      "Glove breathable untuk bridge hand. Spandex + lycra, jari terbuka.",
    price: 150_000,
    priceNote: "Rp 150.000",
    stockStatus: "ready",
    highlights: [
      "Spandex + lycra breathable",
      "Jari terbuka (bridge)",
      "All size (karet)",
    ],
  },

  // Tas
  {
    id: "tas-stick-hardcase",
    slug: "tas-stick-hardcase",
    name: "Tas Stick Hardcase",
    category: "tas-stick",
    shortDescription:
      "Tas stick hardcase. Melindungi stick dari benturan. Muat 1 stick + asesoris.",
    price: 450_000,
    priceNote: "Rp 450.000",
    stockStatus: "ready",
    highlights: [
      "Hardcase ABS + fabric",
      "Muat 1 stick full-size",
      "Include pocket asesoris",
    ],
  },

  // Microfiber
  {
    id: "microfiber-premium",
    slug: "microfiber-premium",
    name: "Microfiber Premium (2pcs)",
    category: "microfiber",
    shortDescription:
      "Lap microfiber untuk cleaning cloth & stick. 2pcs per paket.",
    price: 75_000,
    priceNote: "Rp 75.000 (2pcs)",
    stockStatus: "ready",
    highlights: ["Microfiber 400gsm", "2pcs per paket", "Mesin cuci aman"],
  },

  // Kapur
  {
    id: "kapur-master",
    slug: "kapur-master",
    name: "Kapur Master",
    category: "kapur",
    shortDescription:
      "Kapur chalk premium. Daya rekat tinggi, tidak mudah rontok.",
    price: 65_000,
    priceNote: "Rp 65.000",
    stockStatus: "ready",
    highlights: ["Premium chalk", "Daya rekat tinggi", "1 box (12pcs)"],
    bestSeller: true,
  },

  // Scoreboard
  {
    id: "scoreboard-kayu",
    slug: "scoreboard-kayu",
    name: "Papan Score Kayu",
    category: "scoreboard",
    shortDescription:
      "Papan score kayu jati. Cocok untuk kafe, komunitas, dan rumah.",
    price: 350_000,
    priceNote: "Rp 350.000",
    stockStatus: "ready",
    highlights: [
      "Kayu jati handmade",
      "Muat 2 pemain (bola 1-15)",
      "Cocok dinding & di atas meja",
    ],
  },
];

// Group by category
export const accessoriesByCategory = () => {
  const groups: Record<AccessoryCategory, Accessory[]> = {} as Record<
    AccessoryCategory,
    Accessory[]
  >;
  for (const acc of accessories) {
    if (!groups[acc.category]) groups[acc.category] = [];
    groups[acc.category].push(acc);
  }
  return groups;
};

export const featuredAccessories = () =>
  accessories.filter((a) => a.bestSeller);
