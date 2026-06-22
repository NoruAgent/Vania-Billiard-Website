import { SectionHeading } from "../ui/SectionHeading";

const steps = [
  {
    step: "1",
    title: "Packing Kayu Aman",
    description: "Meja dibungkus busa + kardus + peti kayu hardcase. Aman untuk pengiriman cargo.",
    image: "/images/gallery/gal-4.jpg",
  },
  {
    step: "2",
    title: "Proses Loading",
    description: "Tim logistik hati-hati mengangkat meja ke truk. Asuransi pengiriman opsional.",
    image: "/images/gallery/gal-5.jpg",
  },
  {
    step: "3",
    title: "Pengiriman Nasional",
    description: "Cargo via jalur darat, laut, atau udara. Tracking real-time sampai tujuan.",
    image: "/images/hero/hero-2.jpg",
  },
  {
    step: "4",
    title: "Instalasi di Lokasi",
    description: "Tim instalasi merakit, leveling, dan setting meja. Bisa include untuk area Jawa.",
    image: "/images/gallery/gal-6.jpg",
  },
];

export function ShippingProof() {
  return (
    <section className="py-20 lg:py-32 bg-bg">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Pengiriman & Service Area"
          title="Dari Workshop ke Ruangan Anda, dengan Proses yang Aman"
          subtitle="Kami kirim ke seluruh Indonesia. Untuk area Jawa, instalasi bisa di-include dalam paket."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div
              key={s.step}
              className="bg-surface border border-border-subtle overflow-hidden group"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 w-9 h-9 bg-copper text-bg flex items-center justify-center font-mono font-semibold text-sm">
                  {s.step}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-serif text-lg font-medium mb-2 leading-tight">
                  {s.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {s.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
