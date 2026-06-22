"use client";

import { useState } from "react";
import { faqs } from "@/data/faqs";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";

export function FAQPreview() {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id || null);
  const visible = faqs.slice(0, 6);

  return (
    <section className="py-20 lg:py-32 bg-bg">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Pertanyaan Umum"
              title="Hal yang Sering Ditanyakan Pembeli"
              subtitle="Kalau pertanyaan lo gak ada di sini, langsung tanya via WhatsApp — fast response."
            />
            <div className="lg:mt-8">
              <Button
                href="https://wa.me/6282241545326"
                external
                variant="primary"
                size="md"
              >
                Tanya via WhatsApp
              </Button>
            </div>
          </div>

          <div className="divide-y divide-border-subtle border-y border-border-subtle">
            {visible.map((f) => {
              const isOpen = openId === f.id;
              return (
                <div key={f.id}>
                  <button
                    onClick={() => setOpenId(isOpen ? null : f.id)}
                    className="w-full py-6 flex items-center justify-between gap-4 text-left group"
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif text-lg lg:text-xl font-medium leading-tight group-hover:text-copper transition-colors">
                      {f.question}
                    </span>
                    <span
                      className={`shrink-0 w-7 h-7 border border-border-subtle flex items-center justify-center text-copper transition-transform ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <line x1="6" y1="2" x2="6" y2="10" />
                        <line x1="2" y1="6" x2="10" y2="6" />
                      </svg>
                    </span>
                  </button>
                  {isOpen && (
                    <div className="pb-6 pr-12">
                      <p className="text-text-muted leading-relaxed whitespace-pre-line text-sm lg:text-base">
                        {f.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-10 text-center">
          <Button href="/faq" variant="ghost" size="md">
            Lihat Semua FAQ →
          </Button>
        </div>
      </div>
    </section>
  );
}
