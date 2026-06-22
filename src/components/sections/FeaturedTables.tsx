import { featuredProducts } from "@/data/products";
import { ProductCard } from "../ui/ProductCard";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";

export function FeaturedTables() {
  const featured = featuredProducts().slice(0, 4);
  const prime = featuredProducts().find((p) => p.id === "abimanyu-prime");

  return (
    <section className="py-20 lg:py-32 bg-bg">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 lg:mb-16">
          <SectionHeading
            eyebrow="Koleksi Unggulan"
            title="Meja Billiard Pilihan untuk Setiap Kebutuhan"
            subtitle="Dari entry-friendly sampai signature premium, pilih seri yang paling sesuai dengan ruangan, budget, dan gaya bermain Anda."
          />
          <Button href="/meja-billiard" variant="ghost" size="md" className="lg:mb-14">
            Lihat Semua Seri →
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        {/* Prime featured banner */}
        {prime && (
          <div className="mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-8 bg-surface border border-border-subtle">
            <div className="relative aspect-[4/3] lg:aspect-auto">
              <img
                src={`/images/products/${prime.slug}.jpg`}
                alt={prime.name}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 px-3 py-1.5 bg-copper text-bg text-xs font-mono uppercase tracking-wider font-semibold">
                Signature Series
              </div>
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-copper mb-3">
                {prime.series === "abimanyu" ? "Abimanyu Series" : ""}
              </p>
              <h3 className="font-serif text-3xl lg:text-4xl font-medium leading-tight mb-3">
                {prime.name}
              </h3>
              <p className="text-text-muted leading-relaxed mb-6">
                {prime.positioning}
              </p>
              <ul className="space-y-2 mb-6">
                {prime.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-text-muted">
                    <span className="text-copper mt-1.5 shrink-0 w-1 h-1 bg-copper rounded-full" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button href={`/meja-billiard/${prime.slug}`} variant="primary" size="md">
                  Lihat Detail
                </Button>
                <Button href="/meja-billiard" variant="ghost" size="md">
                  Bandingkan Seri →
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
