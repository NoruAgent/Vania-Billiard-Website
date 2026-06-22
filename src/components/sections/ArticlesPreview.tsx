import { featuredArticles } from "@/data/articles";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";

export function ArticlesPreview() {
  const articles = featuredArticles();

  return (
    <section className="py-20 lg:py-32 bg-surface border-y border-border-subtle">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 lg:mb-16">
          <SectionHeading
            eyebrow="Edukasi & Panduan"
            title="Pelajari Sebelum Membeli"
            subtitle="Artikel dan panduan dari workshop Vania Billiard untuk membantu Anda membuat keputusan yang tepat."
          />
          <Button href="/artikel" variant="ghost" size="md" className="lg:mb-14">
            Semua Artikel →
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {articles.map((a) => (
            <a
              key={a.id}
              href={`/artikel/${a.slug}`}
              className="group flex flex-col bg-bg border border-border-subtle hover:border-copper-dim transition-colors"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={`/images/articles/${a.imageSlug}.jpg`}
                  alt={a.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 px-2 py-1 bg-bg/90 border border-border text-[10px] font-mono uppercase tracking-wider text-copper">
                  {a.category}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-serif text-xl lg:text-2xl font-medium mb-3 leading-tight group-hover:text-copper transition-colors text-balance">
                  {a.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed mb-4 flex-1">
                  {a.excerpt}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-border-subtle text-xs font-mono uppercase tracking-wider text-text-dim">
                  <span>{a.readTime} min baca</span>
                  <span className="text-copper group-hover:translate-x-1 transition-transform">
                    Baca →
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
