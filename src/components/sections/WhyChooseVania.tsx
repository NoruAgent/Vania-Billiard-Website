import { SectionHeading } from "../ui/SectionHeading";

const reasons = [
  {
    num: "01",
    title: "Workshop Sendiri di Ambarawa",
    description:
      "Bukan reseller. Semua meja Vania Billiard diproduksi di workshop kami di Ambarawa, Jawa Tengah. Anda bisa request visit, lihat proses produksi, dan pilih kayu langsung.",
  },
  {
    num: "02",
    title: "Material Premium",
    description:
      "Kayu jati perhutani grade A+, slate presisi (19-38mm), kain Simonis (impor Belgia) untuk seri premium. Tidak ada kompromi pada material inti.",
  },
  {
    num: "03",
    title: "Konsultasi Ukuran Ruangan",
    description:
      "Beli meja billiard tanpa ukur ruangan dulu = pemborosan. Kami menyediakan simulator gratis + konsultasi WhatsApp untuk pastikan meja yang Anda pilih benar-benar muat.",
  },
  {
    num: "04",
    title: "Custom Order",
    description:
      "Ukuran custom, kayu pilihan, finishing, kain, sampai detail ukiran. Kami buat meja benar-benar satu-satunya — sesuai visi Anda, bukan katalog.",
  },
  {
    num: "05",
    title: "Pengiriman Nasional + Instalasi",
    description:
      "Packing kayu aman, kirim ke seluruh Indonesia via cargo. Tim instalasi berpengalaman untuk area Jawa. Untuk luar Jawa, instalasi bisa di-include.",
  },
  {
    num: "06",
    title: "After-Sales & Garansi",
    description:
      "Garansi konstruksi 1-5 tahun tergantung seri. Layanan re-cloth, re-leveling, dan spare part tersedia untuk meja Vania. Workshop lokal = respons cepat.",
  },
];

export function WhyChooseVania() {
  return (
    <section className="py-20 lg:py-32 bg-surface border-y border-border-subtle">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Kenapa Vania Billiard"
          title="Bukan Cuma Jual Meja. Kami Membangun Pengalaman."
          subtitle="Enam alasan kenapa ratusan rumah, kafe, dan venue di Indonesia mempercayakan meja billiard mereka ke Vania Billiard."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border-subtle">
          {reasons.map((r) => (
            <div key={r.num} className="bg-surface p-8 lg:p-10">
              <p className="font-mono text-3xl lg:text-4xl text-copper-dim font-semibold mb-4">
                {r.num}
              </p>
              <h3 className="font-serif text-xl lg:text-2xl font-medium mb-3 leading-tight">
                {r.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {r.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
