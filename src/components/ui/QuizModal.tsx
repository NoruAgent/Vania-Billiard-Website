"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/Button";

interface QuizModalProps {
  open: boolean;
  onClose: () => void;
}

const RECOMMENDATIONS = {
  "Pro-Besar": {
    title: "Abimanyu Gen 5 Pro (9ft)",
    desc: "Fokus turnamen. Alas slate hitam, K-66 cushion, dan laken worsted kelas dunia. Untuk ruang di atas 5.5 x 7.5 meter.",
  },
  "Pro-Kecil": {
    title: "Abimanyu Gen 3 (8ft)",
    desc: "Standar turnamen dengan footprint lebih ringkas. Cocok untuk ruangan 4.8 x 6.5 meter.",
  },
  "Casual-Besar": {
    title: "Abimanyu Prime (8ft-9ft)",
    desc: "Keseimbangan presisi dan keindahan. Momen hiburan keluarga atau arisan tanpa kompromi.",
  },
  "Casual-Kecil": {
    title: "Meja 7ft Koleksi Standar",
    desc: "Pilihan paling populer untuk ruang terbatas. Kualitas premium dengan footprint 3.8 x 5.0 meter.",
  },
};

export function QuizModal({ open, onClose }: QuizModalProps) {
  const [step, setStep] = useState<"intro" | "space" | "result">("intro");
  const [focus, setFocus] = useState<"Pro" | "Casual" | null>(null);
  const [space, setSpace] = useState<"Besar" | "Kecil" | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  if (!open) return null;

  const handleClose = () => {
    onClose();
    // Reset after close animation
    setTimeout(() => {
      setStep("intro");
      setFocus(null);
      setSpace(null);
    }, 300);
  };

  const result = focus && space ? RECOMMENDATIONS[`${focus}-${space}` as keyof typeof RECOMMENDATIONS] : null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 animate-[fadeIn_0.3s_ease-out]"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      <div
        ref={dialogRef}
        className="bg-surface w-full max-w-lg p-8 md:p-10 border border-copper/30 shadow-[0_0_60px_rgba(200,106,54,0.2)] relative"
      >
        <button
          onClick={handleClose}
          aria-label="Tutup"
          className="absolute top-3 right-3 md:top-4 md:right-4 w-8 h-8 text-gray-500 hover:text-copper text-xl transition-colors"
        >
          ✕
        </button>

        <div className="mb-6">
          <p className="text-[10px] uppercase tracking-[0.2em] text-copper font-bold mb-2">
            Quiz Kurator
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white leading-tight">
            Bantu Kami Mengkurasi
          </h3>
        </div>

        {step === "intro" && (
          <div className="animate-[fadeIn_0.4s_ease-out]">
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              2 pertanyaan singkat. Kami akan merekomendasikan seri Abimanyu yang paling cocok untuk ruangan dan gaya bermain Anda.
            </p>
            <Button variant="primary" onClick={() => setStep("space")} className="w-full">
              Mulai Quiz
            </Button>
          </div>
        )}

        {step === "space" && !focus && (
          <div className="animate-[fadeIn_0.4s_ease-out]">
            <p className="text-sm text-gray-400 mb-4">
              1. Apa fokus utama permainan Anda?
            </p>
            <div className="space-y-3">
              <button
                onClick={() => {
                  setFocus("Pro");
                  // Move to next question (size) but reuse same step flow
                }}
                className="w-full text-left p-4 border border-border-subtle hover:border-copper hover:bg-copper/5 text-sm text-gray-200 transition-all"
              >
                Akurasi & Standar Turnamen (Pro)
              </button>
              <button
                onClick={() => setFocus("Casual")}
                className="w-full text-left p-4 border border-border-subtle hover:border-copper hover:bg-copper/5 text-sm text-gray-200 transition-all"
              >
                Hiburan Santai / Keluarga
              </button>
            </div>
          </div>
        )}

        {step === "space" && focus && (
          <div className="animate-[fadeIn_0.4s_ease-out]">
            <p className="text-sm text-gray-400 mb-4">
              2. Berapa perkiraan luas ruang kosong Anda?
            </p>
            <div className="space-y-3">
              <button
                onClick={() => {
                  setSpace("Besar");
                  setStep("result");
                }}
                className="w-full text-left p-4 border border-border-subtle hover:border-copper hover:bg-copper/5 text-sm text-gray-200 transition-all"
              >
                Lebih dari 4.5 x 5.8 meter
              </button>
              <button
                onClick={() => {
                  setSpace("Kecil");
                  setStep("result");
                }}
                className="w-full text-left p-4 border border-border-subtle hover:border-copper hover:bg-copper/5 text-sm text-gray-200 transition-all"
              >
                Terbatas (sekitar 4 x 5 meter)
              </button>
            </div>
            <button
              onClick={() => setFocus(null)}
              className="mt-4 text-[10px] uppercase tracking-widest text-gray-500 hover:text-copper"
            >
              ← Kembali
            </button>
          </div>
        )}

        {step === "result" && result && (
          <div className="text-center animate-[fadeIn_0.4s_ease-out]">
            <p className="text-[10px] uppercase tracking-widest text-copper mb-3">
              Rekomendasi Kurator
            </p>
            <h4 className="font-serif text-2xl md:text-3xl text-white mb-4 leading-tight">
              {result.title}
            </h4>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              {result.desc}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`/meja-billiard/${result.title.toLowerCase().split(" ")[0].replace(/[^a-z0-9]/g, "")}`}
                className="flex-1 bg-copper text-white px-6 py-3 text-xs uppercase tracking-widest font-bold hover:bg-[#a3592a] transition-colors text-center"
              >
                Lihat Detail
              </a>
              <button
                onClick={handleClose}
                className="flex-1 border border-border-subtle text-white px-6 py-3 text-xs uppercase tracking-widest font-bold hover:border-copper transition-colors"
              >
                Selesai
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
