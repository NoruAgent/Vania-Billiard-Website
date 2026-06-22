import { categoryLabels, accessories } from "@/data/accessories";
import { Button } from "../ui/Button";

const categoryIcons: Record<string, React.ReactNode> = {
  "kain-laken": (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="3" width="18" height="18" rx="1" />
      <line x1="3" y1="8" x2="21" y2="8" />
      <line x1="3" y1="13" x2="21" y2="13" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  ),
  stick: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <line x1="20" y1="4" x2="10" y2="14" />
      <line x1="14" y1="10" x2="20" y2="16" />
      <circle cx="6" cy="18" r="2" />
    </svg>
  ),
  bola: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  cover: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 8l9-5 9 5v12H3z" />
      <line x1="3" y1="13" x2="21" y2="13" />
    </svg>
  ),
  glove: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M14 8V4a2 2 0 0 0-4 0v8" />
      <path d="M10 8V3a2 2 0 0 0-4 0v9" />
      <path d="M18 7a2 2 0 1 1 4 0v9a6 6 0 0 1-6 6h-2a8 8 0 0 1-8-8V9a2 2 0 1 1 4 0" />
    </svg>
  ),
};

export function AccessoriesCategories() {
  const categories = (Object.keys(categoryLabels) as (keyof typeof categoryLabels)[]).slice(0, 6);
  const counts: Record<string, number> = {};
  for (const a of accessories) {
    counts[a.category] = (counts[a.category] || 0) + 1;
  }

  return (
    <section className="py-20 lg:py-32 bg-bg">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 lg:mb-16">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-copper mb-4">
              Aksesoris Lengkap
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl font-medium leading-[1.1] tracking-tight max-w-2xl text-balance">
              Lengkapi Pengalaman Bermain dengan Aksesoris Pilihan
            </h2>
          </div>
          <p className="text-text-muted lg:max-w-md">
            Tersedia juga di Shopee & TikTok Shop Vania Billiard. Semua ready stock, kecuali item tertentu yang preorder.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-px bg-border-subtle">
          {categories.map((c) => (
            <a
              key={c}
              href={`/aksesoris/${c}`}
              className="group bg-bg p-6 lg:p-8 hover:bg-surface transition-colors"
            >
              <div className="text-copper mb-4 group-hover:scale-110 transition-transform origin-left">
                {categoryIcons[c] || categoryIcons.bola}
              </div>
              <h3 className="font-serif text-xl lg:text-2xl font-medium mb-2 group-hover:text-copper transition-colors">
                {categoryLabels[c]}
              </h3>
              <p className="font-mono text-[11px] uppercase tracking-wider text-text-muted">
                {counts[c] || 0} produk
              </p>
              <p className="text-sm text-text-muted mt-3 group-hover:translate-x-1 transition-transform inline-block">
                Lihat →
              </p>
            </a>
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-3 items-center justify-center">
          <Button href="/aksesoris" variant="primary" size="md">
            Lihat Semua Aksesoris
          </Button>
          <Button
            href="https://wa.me/6285182306565"
            external
            variant="whatsapp"
            size="md"
          >
            Tanya Aksesoris via WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}
