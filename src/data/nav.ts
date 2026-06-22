// Navigation config — PRD v1.0 Section 11

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Meja Billiard", href: "/meja-billiard" },
  { label: "Aksesoris", href: "/aksesoris" },
  { label: "Simulator Ruangan", href: "/simulator" },
  { label: "Galeri", href: "/galeri" },
  { label: "Artikel", href: "/artikel" },
  { label: "Tentang Kami", href: "/tentang" },
  { label: "Kontak", href: "/kontak" },
];

export const mobileNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Meja", href: "/meja-billiard" },
  { label: "Aksesoris", href: "/aksesoris" },
  { label: "Simulator", href: "/simulator" },
  { label: "Galeri", href: "/galeri" },
  { label: "Artikel", href: "/artikel" },
  { label: "Tentang", href: "/tentang" },
  { label: "Kontak", href: "/kontak" },
];

export const footerNav = {
  produk: [
    { label: "Meja 7ft", href: "/meja-billiard/meja-7ft" },
    { label: "Meja 8ft", href: "/meja-billiard/meja-8ft" },
    { label: "Abimanyu Gen 2", href: "/meja-billiard/abimanyu-gen-2" },
    { label: "Abimanyu Gen 5 Pro", href: "/meja-billiard/abimanyu-gen-5-pro" },
    { label: "Abimanyu Prime", href: "/meja-billiard/abimanyu-prime" },
    { label: "Custom Order", href: "/meja-billiard/custom" },
    { label: "Kain Laken", href: "/aksesoris/kain-laken" },
    { label: "Stick Billiard", href: "/aksesoris/stick" },
  ],
  informasi: [
    { label: "Simulator Ruangan", href: "/simulator" },
    { label: "Galeri", href: "/galeri" },
    { label: "Artikel & Panduan", href: "/artikel" },
    { label: "Tentang Kami", href: "/tentang" },
    { label: "FAQ", href: "/faq" },
    { label: "Sitemap", href: "/sitemap.xml" },
  ],
  bantuan: [
    { label: "Konsultasi Meja", href: "https://wa.me/6282241545326" },
    { label: "Konsultasi Aksesoris", href: "https://wa.me/6285182306565" },
    { label: "Kontak", href: "/kontak" },
    { label: "Kebijakan Privasi", href: "/privacy" },
    { label: "Syarat & Ketentuan", href: "/terms" },
  ],
};

// Marketplace + social — PRD Section 10
export const marketplaceLinks = [
  { label: "Shopee", href: "https://shopee.co.id/vaniabilliard", icon: "shopee" },
  { label: "TikTok Shop", href: "#", icon: "tiktok" }, // placeholder
  { label: "Other Store", href: "https://tr.ee/wyOXUkTWfc", icon: "link" },
] as const;
// Real social icons (SVG paths) — needed for footer
export const socialLinks: { label: string; href: string; icon: "instagram" | "tiktok" | "facebook" | "youtube" }[] = [
  { label: "Instagram", href: "https://instagram.com/vaniabilliard", icon: "instagram" },
  { label: "TikTok", href: "https://tiktok.com/@vaniabilliard", icon: "tiktok" },
  { label: "Facebook", href: "https://facebook.com/vaniabilliard", icon: "facebook" },
  { label: "YouTube", href: "https://youtube.com/@vaniabilliard", icon: "youtube" },
];
