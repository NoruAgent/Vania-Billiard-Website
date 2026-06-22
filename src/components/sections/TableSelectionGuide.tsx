import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";

const guides = [
  {
    size: "7ft",
    title: "Pemula & Casual",
    price: "Mulai Rp 9.5 juta",
    description: "Ruang terbatas, pemain kasual, keluarga. Cocok untuk ruang keluarga atau apartemen.",
    specs: ["Ruangan 4×5 m", "1-3 pemain", "Slate 19-25mm", "Garansi 1 tahun"],
    best: false,
    productSlug: "meja-7ft",
  },
  {
    size: "8ft",
    title: "Sweet Spot",
    price: "Mulai Rp 10.5 juta",
    description: "Pilihan paling versatile. Cocok untuk kafe, komunitas, dan rumah dengan ruangan sedang.",
    specs: ["Ruangan 5×6 m", "2-4 pemain", "Slate 25-30mm", "Garansi 2-3 tahun"],
    best: true,
    productSlug: "meja-8ft",
  },
  {
    size: "9ft",
    title: "Tournament Grade",
    price: "Mulai Rp 15 juta",
    description: "Untuk pemain serius dan venue premium. Standar turnamen 9-ball internasional.",
    specs: ["Ruangan 5.5×7 m", "3-6 pemain", "Slate 30-38mm", "Garansi 5 tahun"],
    best: false,
    productSlug: "abimanyu-gen-5-pro",
  },
];

export function TableSelectionGuide() {
  return (
    <section className="py-20 lg:py-32 bg-bg">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Panduan Ukuran"
          title="Pilih Ukuran Meja yang Tepat untuk Ruangan Anda"
          subtitle="Tidak yakin antara 7ft, 8ft, atau 9ft? Gunakan panduan ini atau coba simulator ruangan untuk visualisasi."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {guides.map((g) => (
            <div
              key={g.size}
              className={`relative p-8 lg:p-10 border transition-all ${
                g.best
                  ? "bg-surface border-copper"
                  : "bg-surface border-border-subtle hover:border-border"
              }`}
            >
              {g.best && (
                <div className="absolute -top-3 left-8 px-3 py-1 bg-copper text-bg text-[10px] font-mono uppercase tracking-wider font-semibold">
                  Paling Populer
                </div>
              )}

              <p className="font-mono text-xs uppercase tracking-[0.2em] text-copper mb-3">
                {g.size}
              </p>
              <h3 className="font-serif text-3xl font-medium mb-2">
                {g.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed mb-6">
                {g.description}
              </p>

              <ul className="space-y-2 mb-6 pb-6 border-b border-border-subtle">
                {g.specs.map((s, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-sm text-text-muted"
                  >
                    <span className="text-copper">·</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>

              <div className="mb-6">
                <p className="font-mono text-[11px] uppercase tracking-wider text-text-dim mb-1">
                  Mulai dari
                </p>
                <p className="font-serif text-2xl text-copper font-semibold">
                  {g.price}
                </p>
              </div>

              <Button
                href={`/meja-billiard/${g.productSlug}`}
                variant={g.best ? "primary" : "outline"}
                size="md"
                className="w-full"
              >
                Lihat Detail {g.size}
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-text-muted text-sm mb-4">
            Masih bingung pilih ukuran? Cek ruangan Anda dengan simulator.
          </p>
          <Button href="/simulator" variant="secondary" size="md">
            Coba Simulator Ruangan →
          </Button>
        </div>
      </div>
    </section>
  );
}
