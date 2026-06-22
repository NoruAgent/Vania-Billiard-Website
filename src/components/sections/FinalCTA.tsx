import { waTableLink } from "@/lib/whatsapp";
import { WA } from "@/lib/whatsapp";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";

export function FinalCTA() {
  return (
    <section className="py-24 lg:py-36 relative overflow-hidden bg-bg">
      {/* Background */}
      <div className="absolute inset-0 opacity-30">
        <img
          src="/images/hero/hero-3.jpg"
          alt=""
          className="w-full h-full object-cover anim-ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/85 to-bg/60" />
      </div>

      {/* Decorative divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-copper to-transparent" />

      <div className="relative mx-auto max-w-5xl px-5 lg:px-8 text-center">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-copper mb-6">
            Konsultasi Gratis
          </p>
        </Reveal>

        <Reveal delay={100}>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.05] tracking-tight mb-6 text-balance">
            Siap Punya Meja Billiard Impian?
          </h2>
        </Reveal>

        <Reveal delay={200}>
          <p className="text-text-muted text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto mb-10 lg:mb-12 text-balance">
            Chat kami via WhatsApp. Ceritakan kebutuhan lo: ukuran ruangan,
            budget, preferensi. Kami bantu pilih seri yang paling pas atau
            rancang custom order.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center mb-10">
            <Button
              href={waTableLink()}
              external
              variant="primary"
              size="lg"
              className="w-full sm:w-auto"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.96 7.96 0 01-4.11-1.13l-.29-.174-2.87.85.85-2.87-.174-.29A7.96 7.96 0 014 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z" />
              </svg>
              Konsultasi Meja · {WA.displayMeja}
            </Button>
            <Button
              href={`https://wa.me/${WA.aksesoris}`}
              external
              variant="whatsapp"
              size="lg"
              className="w-full sm:w-auto"
            >
              Tanya Aksesoris · {WA.displayAksesoris}
            </Button>
          </div>
        </Reveal>

        <Reveal delay={400}>
          <p className="text-text-muted text-sm">
            Respons dalam 1 jam (jam kerja). Atau coba{" "}
            <a href="/simulator" className="link-underline text-copper">
              Simulator Ruangan
            </a>{" "}
            dulu untuk cek ukuran.
          </p>
        </Reveal>
      </div>
    </section>
  );
}