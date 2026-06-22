import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";

const galleryItems = [
  { slug: "gal-1", alt: "Vila modern dengan meja billiard premium" },
  { slug: "gal-2", alt: "Private club dengan custom 9ft" },
  { slug: "gal-3", alt: "Instalasi meja billiard" },
  { slug: "gal-4", alt: "Meja billiard siap kirim" },
  { slug: "gal-5", alt: "Proses pengiriman" },
  { slug: "gal-6", alt: "Instalasi di rumah pelanggan" },
  { slug: "gal-7", alt: "Suasana cafe billiard" },
  { slug: "gal-8", alt: "Turnamen billiard" },
];

export function GalleryPreview() {
  return (
    <section className="py-20 lg:py-32 bg-bg">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 lg:mb-16">
          <SectionHeading
            eyebrow="Galeri & Portfolio"
            title="Lihat Sendiri Kualitas Produksi & Instalasi Kami"
            subtitle="Galeri showroom, workshop, instalasi, dan event. Foto-foto asli dari pekerjaan Vania Billiard."
          />
          <Button href="/galeri" variant="ghost" size="md" className="lg:mb-14">
            Lihat Galeri Lengkap →
          </Button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-3">
          {galleryItems.map((g, i) => (
            <div
              key={g.slug}
              className={`relative overflow-hidden bg-surface border border-border-subtle group ${
                i === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-square"
              }`}
            >
              <img
                src={`/images/gallery/${g.slug}.jpg`}
                alt={g.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
