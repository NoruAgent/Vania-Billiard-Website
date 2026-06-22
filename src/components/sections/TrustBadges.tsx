// Billiard pattern: 3-4 trust pillars, NO icons, all-caps or bold title, 1-line desc.
// We use 4 — addresses the 4 things a billiard buyer fears most:
// quality, fit, delivery, after-sales.

const pillars = [
  {
    title: "Workshop Sendiri",
    desc: "Diproduksi di Ambarawa. Anda bisa visit dan pilih kayu langsung.",
  },
  {
    title: "Custom Built",
    desc: "Ukuran, kayu, finishing, kain. Semua sesuai ruangan Anda.",
  },
  {
    title: "Packing Aman",
    desc: "Packing kayu keras, kirim ke seluruh Indonesia via cargo.",
  },
  {
    title: "Garansi 5 Tahun",
    desc: "Untuk seri premium. Re-cloth & re-leveling selalu tersedia.",
  },
];

export function TrustBadges() {
  return (
    <section className="py-12 lg:py-16 bg-bg border-y border-border-subtle">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8 lg:gap-x-12">
          {pillars.map((p) => (
            <div key={p.title} className="border-l border-border-subtle pl-4 lg:pl-6">
              <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-copper mb-2 font-semibold">
                {p.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}