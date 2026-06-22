import { waTableLink } from "@/lib/whatsapp";
import { formatRupiah } from "@/data/products";
import type { Product } from "@/data/products";
import { Button } from "./Button";

interface ProductCardProps {
  product: Product;
  variant?: "default" | "compact" | "featured";
}

export function ProductCard({ product, variant = "default" }: ProductCardProps) {
  const isFeatured = variant === "featured";
  const isCompact = variant === "compact";

  return (
    <article
      className={`group relative flex flex-col bg-surface border border-border-subtle hover:border-copper-dim transition-all duration-300 ${
        isFeatured ? "lg:flex-row lg:items-stretch" : ""
      }`}
    >
      {/* Image */}
      <div
        className={`relative overflow-hidden bg-bg ${
          isFeatured ? "lg:w-1/2 aspect-[4/3] lg:aspect-auto" : "aspect-[4/3]"
        }`}
      >
        <img
          src={`/images/products/${product.slug}.jpg`}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
          loading="lazy"
        />
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          {product.bestSeller && (
            <span className="px-2 py-1 bg-copper text-bg text-[10px] font-mono uppercase tracking-wider font-semibold">
              Best Seller
            </span>
          )}
          {product.recommended && (
            <span className="px-2 py-1 bg-bg/90 text-copper border border-copper text-[10px] font-mono uppercase tracking-wider font-semibold">
              Recommended
            </span>
          )}
          {product.status === "custom" && (
            <span className="px-2 py-1 bg-bg/90 text-text text-[10px] font-mono uppercase tracking-wider font-semibold">
              Custom
            </span>
          )}
        </div>
        {/* Size tag */}
        <div className="absolute top-3 right-3 px-2 py-1 bg-bg/90 border border-border text-[10px] font-mono uppercase tracking-wider text-text-muted">
          {product.sizes.join(" / ")}
        </div>
      </div>

      {/* Content */}
      <div
        className={`flex flex-col flex-1 p-6 ${
          isFeatured ? "lg:w-1/2 lg:p-10" : ""
        } ${isCompact ? "p-5" : ""}`}
      >
        <div className="mb-2">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-copper mb-1">
            {product.series === "abimanyu" ? "Abimanyu Series" : product.series === "custom" ? "Custom Order" : "Standard Series"}
          </p>
          <h3 className="font-serif text-2xl lg:text-3xl font-medium leading-tight">
            {product.name}
          </h3>
        </div>

        <p className="text-text-muted text-sm leading-relaxed mb-4">
          {product.tagline}
        </p>

        {!isCompact && (
          <ul className="space-y-1.5 mb-5 flex-1">
            {product.highlights.slice(0, 3).map((h, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-text-muted">
                <span className="text-copper mt-1.5 shrink-0 w-1 h-1 bg-copper rounded-full" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="pt-4 border-t border-border-subtle">
          <p className="font-mono text-xs uppercase tracking-wider text-text-dim mb-1">
            {product.startingPrice ? "Mulai dari" : "Konsultasi"}
          </p>
          <p className="font-serif text-2xl lg:text-3xl text-copper font-semibold mb-4">
            {product.startingPrice ? formatRupiah(product.startingPrice) : "Hubungi WhatsApp"}
          </p>
          <div className="flex flex-col sm:flex-row gap-2">
            <Button
              href={`/meja-billiard/${product.slug}`}
              variant="outline"
              size="sm"
              className="flex-1"
            >
              Lihat Detail
            </Button>
            <Button
              href={waTableLink(product.name)}
              external
              variant="primary"
              size="sm"
              className="flex-1"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.96 7.96 0 01-4.11-1.13l-.29-.174-2.87.85.85-2.87-.174-.29A7.96 7.96 0 014 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z" />
              </svg>
              WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
