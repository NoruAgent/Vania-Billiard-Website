import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";

export function SimulatorTeaser() {
  return (
    <section className="py-20 lg:py-32 bg-surface border-y border-border-subtle">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: visual */}
          <div className="relative aspect-[4/3] bg-bg border border-border-subtle overflow-hidden">
            <img
              src="/images/workshop/workshop-warehouse.jpg"
              alt="Vania Billiard Workshop"
              className="w-full h-full object-cover opacity-50"
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-center justify-center p-8">
              {/* Mock simulator UI */}
              <div className="w-full max-w-md aspect-[4/3] bg-bg/80 border border-copper-dim p-4 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-3">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-copper">
                    Simulator Ruangan
                  </p>
                  <p className="font-mono text-[10px] text-text-muted">v1.0</p>
                </div>
                <div className="relative aspect-[3/2] border border-border-subtle bg-bg/60">
                  {/* Room outline */}
                  <div className="absolute inset-4 border border-text-dim border-dashed" />
                  {/* Table */}
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/5 aspect-[2/1] bg-copper/30 border border-copper"
                    style={{ transform: "translate(-50%, -50%) rotate(0deg)" }}
                  />
                  <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10px] font-mono text-copper">
                    8ft
                  </p>
                </div>
                <div className="mt-3 flex gap-2 text-[10px] font-mono text-text-muted">
                  <span>P: 5.0m</span>
                  <span>·</span>
                  <span>L: 6.0m</span>
                  <span>·</span>
                  <span className="text-copper">✓ Cocok</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: copy */}
          <div>
            <SectionHeading
              eyebrow="Flagship Feature"
              title="Cek Ukuran Ruangan dalam 30 Detik"
              subtitle="Tidak perlu bayangan atau tebak-tebakan. Masukkan panjang & lebar ruangan, pilih ukuran meja, langsung lihat layout dan rekomendasi."
            />

            <ul className="space-y-3 mb-8">
              {[
                "Visualisasi 2D ruangan dengan margin cue stroke",
                "Pilih 7ft, 8ft, atau 9ft — lihat langsung apakah muat",
                "Peringatan otomatis kalau ruangan terlalu kecil",
                "Hasil simulasi bisa langsung dikirim ke WhatsApp",
                "Bisa dipakai berkali-kali, tanpa login",
              ].map((f, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-text-muted"
                >
                  <span className="shrink-0 w-5 h-5 border border-copper text-copper flex items-center justify-center font-mono text-[10px] mt-0.5">
                    {i + 1}
                  </span>
                  <span className="leading-relaxed">{f}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button href="/simulator" variant="primary" size="lg">
                Buka Simulator
              </Button>
              <Button
                href="https://wa.me/6282241545326?text=Halo%20Vania%20Billiard%2C%20saya%20ingin%20konsultasi%20ukuran%20ruangan"
                external
                variant="outline"
                size="lg"
              >
                Konsultasi via WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
