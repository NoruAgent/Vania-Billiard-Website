import Link from "next/link";
import { waTableLink } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] lg:min-h-[92vh] flex flex-col md:flex-row overflow-hidden">
      {/* Left: text */}
      <div className="w-full md:w-1/2 h-full min-h-[60vh] md:min-h-[92vh] flex flex-col justify-center px-6 md:px-12 lg:px-20 py-16 md:py-0 relative z-10">
        <div
          className="w-12 h-px bg-copper mb-6 md:mb-8 anim-fade-up"
          style={{ animationDelay: "200ms" }}
        />

        <p
          className="font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-copper mb-6 md:mb-8 anim-fade-up"
          style={{ animationDelay: "300ms" }}
        >
          Workshop Ambarawa · Sejak 2014
        </p>

        <h1
          className="font-serif text-4xl md:text-5xl lg:text-[5.5rem] font-medium leading-[1.02] mb-6 md:mb-8 text-white anim-fade-up"
          style={{ animationDelay: "450ms" }}
        >
          Seni Presisi
          <br />
          <span className="text-copper">Meja Billiard</span>
          <br />
          <span className="text-text-tertiary text-3xl md:text-4xl lg:text-5xl font-light">
            Buatan tangan.
          </span>
        </h1>

        <p
          className="font-light text-text-secondary text-sm md:text-base leading-relaxed max-w-md mb-8 md:mb-10 anim-fade-up"
          style={{ animationDelay: "650ms" }}
        >
          Diseleksi, diuji, dan dirakit dengan presisi absolut. Dikurasi untuk
          ruang keluarga, ruang billiard pribadi, hingga venue premium di
          seluruh Indonesia.
        </p>

        <div
          className="flex flex-col sm:flex-row items-start sm:items-center gap-5 anim-fade-up"
          style={{ animationDelay: "800ms" }}
        >
          <Button
            href={waTableLink("Halo Vania Billiard, saya ingin konsultasi meja billiard premium.")}
            variant="primary"
            size="md"
            external
          >
            Konsultasi via WhatsApp
          </Button>
          <Link
            href="/meja-billiard"
            className="link-underline text-xs uppercase tracking-[0.2em] font-semibold flex items-center group text-text-secondary hover:text-copper transition-colors"
          >
            Lihat Koleksi Meja
            <span className="ml-3 w-6 h-px bg-text-tertiary group-hover:w-12 group-hover:bg-copper transition-all duration-300" />
          </Link>
        </div>
      </div>

      {/* Right: hero image with hotspots */}
      <div className="w-full md:w-1/2 h-[60vh] md:h-[92vh] relative bg-[#0e0e0e] overflow-hidden group">
        <img
          src="/images/hero/hero-main.jpg"
          alt="Meja billiard Vania di ruang keluarga premium"
          className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-700 anim-ken-burns img-reveal"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/70 via-transparent to-transparent md:from-[#080808]/40" />

        {/* Hotspot 1: Worsted Cloth */}
        <div className="absolute top-[58%] left-[42%] z-20 hidden md:block group/hs">
          <div className="w-4 h-4 bg-copper rounded-full animate-ping absolute opacity-60" />
          <div className="w-4 h-4 bg-copper border-2 border-white rounded-full relative cursor-pointer shadow-[0_0_10px_#C86A36] anim-pulse-copper" />
          <div className="absolute hidden group-hover/hs:block bottom-8 -left-20 w-56 bg-[#141414] p-4 border border-copper/30 shadow-2xl pointer-events-none anim-fade-up">
            <p className="text-[10px] uppercase tracking-widest text-copper font-bold mb-1">
              Worsted Cloth
            </p>
            <p className="text-[10px] text-text-secondary leading-relaxed">
              Laken Simonis 860 anyaman wol impor Belgia. Laju bola presisi
              standar turnamen.
            </p>
          </div>
        </div>

        {/* Hotspot 2: Solid Slate */}
        <div className="absolute top-[28%] right-[18%] z-20 hidden md:block group/hs">
          <div className="w-4 h-4 bg-copper rounded-full animate-ping absolute opacity-60" />
          <div className="w-4 h-4 bg-copper border-2 border-white rounded-full relative cursor-pointer shadow-[0_0_10px_#C86A36] anim-pulse-copper" />
          <div className="absolute hidden group-hover/hs:block bottom-8 -right-12 w-56 bg-[#141414] p-4 border border-copper/30 shadow-2xl pointer-events-none anim-fade-up">
            <p className="text-[10px] uppercase tracking-widest text-copper font-bold mb-1">
              Solid Slate
            </p>
            <p className="text-[10px] text-text-secondary leading-relaxed">
              Batu alam presisi 19-38mm, dipotong dan di-leveling manual.
              Tidak melengkung seumur hidup.
            </p>
          </div>
        </div>

        {/* Floating credit */}
        <div className="absolute bottom-6 right-6 z-20 hidden lg:block anim-fade-in" style={{ animationDelay: "1200ms" }}>
          <p className="text-[9px] uppercase tracking-[0.3em] text-text-muted font-mono">
            Workshop Ambarawa · Est. 2014
          </p>
        </div>
      </div>
    </section>
  );
}