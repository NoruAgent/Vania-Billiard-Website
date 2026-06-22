import Link from "next/link";
import { waTableLink } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] lg:min-h-[90vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero/hero-main.jpg"
          alt=""
          className="w-full h-full object-cover opacity-60 scale-105"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/80 to-bg/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent" />
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse at right, transparent 30%, var(--bg) 75%)" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8 pt-32 pb-32 lg:pt-24 lg:pb-24 w-full">
        <div className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-copper mb-6 lg:mb-8">
            Vania Billiard · Workshop Ambarawa
          </p>

          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-medium leading-[1.02] tracking-[-0.02em] text-balance mb-6 lg:mb-8">
            Meja Billiard{" "}
            <span className="italic text-copper">Premium</span> untuk Rumah, Usaha, dan Ruang Bermain yang Lebih Berkelas.
          </h1>

          <p className="text-text-muted text-lg lg:text-xl leading-relaxed max-w-2xl mb-10 lg:mb-12 text-balance">
            Vania Billiard menyediakan meja billiard pilihan, custom request, pengiriman nasional, dan aksesoris lengkap — dengan konsultasi ukuran ruangan sebelum kamu membeli.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-12 lg:mb-16">
            <a
              href={waTableLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 h-14 px-8 bg-copper text-bg font-medium uppercase tracking-wide hover:bg-copper-bright transition-colors text-base w-full sm:w-auto"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.96 7.96 0 01-4.11-1.13l-.29-.174-2.87.85.85-2.87-.174-.29A7.96 7.96 0 014 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z" />
              </svg>
              Konsultasi Meja via WhatsApp
            </a>
            <Link
              href="/simulator"
              className="inline-flex items-center justify-center gap-2 h-14 px-8 bg-transparent text-text border-2 border-text hover:bg-text hover:text-bg transition-colors font-medium uppercase tracking-wide text-base w-full sm:w-auto"
            >
              Cek Ukuran Ruangan
            </Link>
            <Link
              href="/meja-billiard"
              className="inline-flex items-center justify-center gap-2 h-14 px-8 bg-transparent text-text hover:bg-surface transition-colors font-medium uppercase tracking-wide text-base w-full sm:w-auto"
            >
              Lihat Katalog →
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 lg:gap-8 pt-8 border-t border-border-subtle max-w-xl">
            <div>
              <p className="font-serif text-2xl lg:text-3xl text-copper font-semibold">
                11
              </p>
              <p className="font-mono text-[11px] uppercase tracking-wider text-text-muted">
                Seri Meja
              </p>
            </div>
            <div>
              <p className="font-serif text-2xl lg:text-3xl text-copper font-semibold">
                5 Thn
              </p>
              <p className="font-mono text-[11px] uppercase tracking-wider text-text-muted">
                Garansi
              </p>
            </div>
            <div>
              <p className="font-serif text-2xl lg:text-3xl text-copper font-semibold">
                Nasional
              </p>
              <p className="font-mono text-[11px] uppercase tracking-wider text-text-muted">
                Pengiriman
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
