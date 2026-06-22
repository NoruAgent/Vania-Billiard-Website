import Link from "next/link";
import { footerNav, marketplaceLinks, socialLinks } from "@/data/nav";
import { WA } from "@/lib/whatsapp";
import { SocialIcon } from "@/components/ui/SocialIcon";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-surface border-t border-border-subtle">
      {/* Top section */}
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand block */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 border-2 border-copper flex items-center justify-center font-serif font-semibold text-copper">
                V
              </div>
              <div>
                <p className="font-serif text-xl font-semibold leading-none">
                  Vania Billiard
                </p>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-muted leading-none mt-1">
                  Workshop Ambarawa
                </p>
              </div>
            </div>
            <p className="text-text-muted text-sm leading-relaxed mb-6 max-w-sm">
              Spesialis meja billiard lokal, custom order, pengiriman nasional, dan aksesoris billiard lengkap. Berdiri sejak 2014, melayani ratusan rumah, kafe, dan venue di seluruh Indonesia.
            </p>

            {/* WhatsApp contacts */}
            <div className="space-y-2 mb-6">
              <a
                href={`https://wa.me/${WA.meja}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm hover:text-copper transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-copper shrink-0">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
                </svg>
                <span className="font-mono text-xs">
                  Meja — {WA.displayMeja}
                </span>
              </a>
              <a
                href={`https://wa.me/${WA.aksesoris}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm hover:text-copper transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-wa shrink-0">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
                </svg>
                <span className="font-mono text-xs">
                  Aksesoris — {WA.displayAksesoris}
                </span>
              </a>
            </div>

            {/* Marketplace links */}
            <div className="flex flex-wrap gap-2">
              {marketplaceLinks.map((m) => (
                <a
                  key={m.label}
                  href={m.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-bg border border-border-subtle text-xs font-mono uppercase tracking-wider hover:border-copper hover:text-copper transition-colors"
                >
                  {m.label}
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-copper mb-4">
                Produk
              </p>
              <ul className="space-y-2.5">
                {footerNav.produk.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-text-muted hover:text-text transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-copper mb-4">
                Informasi
              </p>
              <ul className="space-y-2.5">
                {footerNav.informasi.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-text-muted hover:text-text transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-copper mb-4">
                Bantuan
              </p>
              <ul className="space-y-2.5">
                {footerNav.bantuan.map((l) => (
                  <li key={l.href}>
                    {l.href.startsWith("https://wa.me") ? (
                      <a
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-text-muted hover:text-text transition-colors"
                      >
                        {l.label}
                      </a>
                    ) : (
                      <Link
                        href={l.href}
                        className="text-sm text-text-muted hover:text-text transition-colors"
                      >
                        {l.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social + Map */}
          <div className="lg:col-span-2">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-copper mb-4">
              Ikuti Kami
            </p>
            <div className="flex lg:flex-col gap-2 mb-6">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-border-subtle flex items-center justify-center hover:border-copper hover:text-copper transition-colors"
                  aria-label={s.label}
                >
                  <SocialIcon kind={s.icon} />
                </a>
              ))}
            </div>
            <a
              href="https://maps.google.com/?q=Ambarawa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-text-muted hover:text-copper transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Lihat di Maps
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border-subtle">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-text-dim">
          <p>
            © {year} Vania Billiard · Workshop Ambarawa, Jawa Tengah
          </p>
          <p>
            Built with Next.js · Designed for premium billiard experience
          </p>
        </div>
      </div>
    </footer>
  );
}
