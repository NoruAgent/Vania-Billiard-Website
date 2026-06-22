import Image from "next/image";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { Button } from "../ui/Button";

const guides = [
  {
    size: "7ft",
    title: "Pemula & Casual",
    price: "Mulai Rp 9.5 juta",
    description:
      "Untuk ruang terbatas, pemain kasual, keluarga. Cocok untuk ruang keluarga atau apartemen.",
    specs: ["Ruangan 4×5 m", "1-3 pemain", "Slate 19-25mm", "Garansi 1 tahun"],
    best: false,
    productSlug: "meja-billiard-7ft",
  },
  {
    size: "9ft",
    title: "Standar Turnamen",
    price: "Mulai Rp 15 juta",
    description:
      "Ukuran yang paling banyak dipilih. Standar turnamen internasional, untuk ruang billiard pribadi dan venue premium.",
    specs: ["Ruangan 5.5×7 m", "3-6 pemain", "Slate 30-38mm", "Garansi 5 tahun"],
    best: true,
    productSlug: "abimanyu-prime",
  },
  {
    size: "8ft",
    title: "Ruang Menengah",
    price: "Mulai Rp 10.5 juta",
    description:
      "Pilihan paling versatile. Cocok untuk kafe, komunitas, dan rumah dengan ruangan sedang.",
    specs: ["Ruangan 5×6 m", "2-4 pemain", "Slate 25-30mm", "Garansi 2-3 tahun"],
    best: false,
    productSlug: "meja-billiard-8ft",
  },
];

export function TableSelectionGuide() {
  return (
    <section className="py-24 lg:py-36 bg-bg relative overflow-hidden">
      {/* Subtle copper glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-copper/[0.03] blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-5 lg:px-8 relative">
        <Reveal>
          <div className="text-center mb-12 lg:mb-16">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-copper mb-4">
              Panduan Ukuran
            </p>
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-medium leading-[1.05] mb-5 text-white text-balance">
              Umumnya meja Vania yang terlaris
              <br />
              adalah <span className="text-copper italic font-normal">9ft.</span>
            </h2>
            <p className="text-text-secondary leading-relaxed text-base lg:text-lg max-w-2xl mx-auto">
              Ini alasannya: 9ft adalah standar turnamen internasional. Slate
              lebih tebal, presisi lebih tinggi, pengalaman main lebih
              mendekati ruang billiard profesional.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 items-stretch">
          {guides.map((g, i) => (
            <Reveal key={g.size} delay={i * 100} y={32}>
              <div
                className={`relative h-full p-7 lg:p-9 border hover-lift overflow-hidden ${
                  g.best
                    ? "bg-surface border-copper shadow-[0_0_0_1px_var(--copper)]"
                    : "bg-surface border-border-subtle hover:border-copper/40"
                }`}
              >
                {/* Best badge */}
                {g.best && (
                  <>
                    <div className="absolute -top-px left-1/2 -translate-x-1/2 px-4 py-1.5 bg-copper text-bg text-[10px] font-mono uppercase tracking-[0.2em] font-bold">
                      Paling Umum
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-copper/[0.06] via-transparent to-transparent pointer-events-none" />
                  </>
                )}

                {/* Size header */}
                <div className="relative z-10">
                  <div className="flex items-baseline justify-between mb-5">
                    <p
                      className={`font-mono text-5xl lg:text-6xl font-bold leading-none ${
                        g.best ? "text-copper" : "text-text"
                      }`}
                    >
                      {g.size}
                    </p>
                    {g.best && (
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="var(--copper)"
                        aria-hidden="true"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    )}
                  </div>

                  <h3 className="font-serif text-xl lg:text-2xl font-medium mb-3 leading-tight text-white">
                    {g.title}
                  </h3>

                  <p className="text-text-secondary text-sm leading-relaxed mb-6 min-h-[60px]">
                    {g.description}
                  </p>

                  <ul className="space-y-2.5 mb-6 pb-6 border-b border-border-subtle">
                    {g.specs.map((s, j) => (
                      <li
                        key={j}
                        className="flex items-center gap-3 text-sm text-text-secondary"
                      >
                        <span
                          className={`shrink-0 w-1 h-1 rounded-full ${
                            g.best ? "bg-copper" : "bg-text-dim"
                          }`}
                        />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mb-6">
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-dim mb-1.5">
                      Mulai dari
                    </p>
                    <p
                      className={`font-serif text-2xl font-semibold ${
                        g.best ? "text-copper" : "text-text"
                      }`}
                    >
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
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={400}>
          <div className="mt-14 lg:mt-20 text-center">
            <div className="divider-copper max-w-xs mx-auto mb-10" />
            <p className="text-text-muted text-sm mb-5 max-w-md mx-auto">
              Masih bingung pilih ukuran? Cek ruangan Anda dengan simulator
              visual interaktif kami.
            </p>
            <Button href="/simulator" variant="ghost" size="md">
              Coba Simulator Ruangan →
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}