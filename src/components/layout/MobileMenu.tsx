"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { mobileNav } from "@/data/nav";
import { WA } from "@/lib/whatsapp";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const [show, setShow] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (open) {
      // delay to allow transition
      requestAnimationFrame(() => setShow(true));
      document.body.style.overflow = "hidden";
    } else {
      setShow(false);
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    if (open) window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-bg/80 backdrop-blur-sm transition-opacity duration-300 ${
          show ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <nav
        className={`absolute top-0 right-0 h-full w-[85vw] max-w-sm bg-bg border-l border-border-subtle shadow-2xl flex flex-col transition-transform duration-300 ${
          show ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-border-subtle">
          <p className="font-serif text-lg font-semibold">Menu</p>
          <button
            type="button"
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center text-text"
            aria-label="Close menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="18" y1="6" x2="6" y2="18" />
            </svg>
          </button>
        </div>

        {/* Links */}
        <ul className="flex-1 overflow-y-auto py-4">
          {mobileNav.map((item) => {
            const active = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  className={`flex items-center justify-between px-5 py-4 text-lg font-serif transition-colors ${
                    active
                      ? "text-copper border-l-2 border-copper"
                      : "text-text hover:bg-surface"
                  }`}
                >
                  {item.label}
                  <span className="text-copper">→</span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Footer CTAs */}
        <div className="p-5 border-t border-border-subtle space-y-2">
          <a
            href={`https://wa.me/${WA.meja}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full h-12 bg-copper text-bg font-medium uppercase tracking-wide text-sm"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            </svg>
            Konsultasi Meja
          </a>
          <a
            href={`https://wa.me/${WA.aksesoris}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full h-12 bg-wa text-white font-medium uppercase tracking-wide text-sm"
          >
            Tanya Aksesoris
          </a>
        </div>
      </nav>
    </div>
  );
}
