import { Reveal } from "../ui/Reveal";

// Billiard pattern: 3-4 trust pillars, no icons. We use 4 + left pull quote.

const reasons = [
  {
    title: "Workshop Sendiri",
    description:
      "Bukan reseller. Semua meja Vania Billiard diproduksi di workshop kami di Ambarawa, Jawa Tengah. Anda bisa visit, lihat proses produksi, dan pilih kayu langsung.",
  },
  {
    title: "Material Tanpa Kompromi",
    description:
      "Kayu jati perhutani grade A+, slate presisi 19-38mm, kain Simonis impor Belgia untuk seri premium. Tidak ada kompromi pada material inti.",
  },
  {
    title: "Custom, Bukan Katalog",
    description:
      "Ukuran custom, kayu pilihan, finishing, kain, sampai detail ukiran. Setiap meja adalah satu-satunya, sesuai visi Anda.",
  },
  {
    title: "Garansi & After-Sales",
    description:
      "Garansi konstruksi 1-5 tahun tergantung seri. Layanan re-cloth, re-leveling, dan spare part selalu tersedia untuk meja Vania.",
  },
];

export function WhyChooseVania() {
  return (
    <section className="py-20 lg:py-32 bg-surface border-y border-border-subtle">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-14 lg:mb-20">
          <Reveal className="lg:col-span-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-copper mb-5">
              Kenapa Vania
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.05] mb-6 text-white text-balance">
              Bukan cuma jual meja.
              <br />
              <span className="text-copper">Kami membangun</span>
              <br />
              pengalaman.
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-6 lg:col-start-7 flex items-end" delay={150}>
            <p className="text-text-secondary leading-relaxed text-base lg:text-lg max-w-xl">
              Empat hal yang membedakan Vania Billiard dari ratusan workshop
              lain di Indonesia. Bukan slogan, ini janji operasional yang bisa
              Anda verifikasi sendiri.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border-subtle">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 100} y={20}>
              <div className="bg-surface p-8 lg:p-10 h-full hover:bg-surface-elevated transition-colors duration-500">
                <div className="w-8 h-px bg-copper mb-5" />
                <h3 className="font-serif text-lg lg:text-xl font-medium mb-3 leading-tight text-white">
                  {r.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {r.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}