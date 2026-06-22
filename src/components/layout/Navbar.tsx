"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNav } from "@/data/nav";
import { waConsultationLink } from "@/lib/whatsapp";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-bg/95 backdrop-blur-md border-b border-border-subtle"
            : "bg-bg/40 backdrop-blur-sm"
        }`}
      >
        <nav className="mx-auto max-w-7xl px-5 lg:px-8 h-16 lg:h-20 flex items-center justify-between gap-8">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 shrink-0 group"
            aria-label="Vania Billiard home"
          >
            <div className="w-9 h-9 border-2 border-copper flex items-center justify-center font-serif font-semibold text-copper group-hover:bg-copper group-hover:text-bg transition-colors">
              V
            </div>
            <div className="hidden sm:block">
              <p className="font-serif text-lg font-semibold leading-none">
                Vania Billiard
              </p>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-muted leading-none mt-1">
                Workshop Ambarawa
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1 flex-1 justify-center">
            {mainNav.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`px-3 py-2 text-sm transition-colors ${
                      active
                        ? "text-copper"
                        : "text-text-muted hover:text-text"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={waConsultationLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-10 px-5 bg-copper text-bg text-sm font-medium uppercase tracking-wide hover:bg-copper-bright transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.96 7.96 0 01-4.11-1.13l-.29-.174-2.87.85.85-2.87-.174-.29A7.96 7.96 0 014 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z" />
              </svg>
              Konsultasi WhatsApp
            </a>
          </div>

          {/* Mobile burger */}
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="lg:hidden w-10 h-10 flex items-center justify-center text-text"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="3" y1="7" x2="21" y2="7" />
              <line x1="3" y1="13" x2="21" y2="13" />
              <line x1="3" y1="19" x2="21" y2="19" />
            </svg>
          </button>
        </nav>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
