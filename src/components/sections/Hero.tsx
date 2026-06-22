"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { waTableLink } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { QuizModal } from "@/components/ui/QuizModal";

const TYPEWRITER_WORDS = ["Setiap Sudut", "Akurasi Turnamen", "Ruang Personal"];

export function Hero() {
  const [wordIdx, setWordIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase] = useState<"typing" | "holding" | "deleting">("typing");
  const [quizOpen, setQuizOpen] = useState(false);

  useEffect(() => {
    const word = TYPEWRITER_WORDS[wordIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (displayed.length < word.length) {
        timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setPhase("holding"), 1800);
      }
    } else if (phase === "holding") {
      timeout = setTimeout(() => setPhase("deleting"), 1500);
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length - 1)), 40);
      } else {
        setWordIdx((wordIdx + 1) % TYPEWRITER_WORDS.length);
        setPhase("typing");
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, phase, wordIdx]);

  return (
    <>
      <section className="relative min-h-[100svh] flex flex-col md:flex-row pt-24 lg:pt-0">
        {/* Left: text */}
        <div className="w-full md:w-1/2 h-full min-h-[60vh] md:min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20 pb-16 md:pb-0 relative z-10">
          <div className="w-12 h-px bg-copper mb-6 md:mb-8 mt-8 md:mt-0" />

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] mb-6 text-white">
            <span className="block">Seni Presisi</span>
            <span className="italic font-light text-gray-500 block mt-1 md:mt-2">Dalam</span>
            <span className="block h-[1.2em] mt-1 md:mt-2">
              <span className="text-copper">{displayed}</span>
              <span className="inline-block w-[2px] h-[0.9em] bg-copper ml-1 align-middle animate-pulse" />
            </span>
          </h1>

          <p className="font-light text-gray-400 text-sm md:text-base leading-relaxed max-w-md mb-8 md:mb-10">
            Menghadirkan furnitur hiburan bertaraf turnamen. Kami mengkurasi, mengirim, dan merakit presisi absolut untuk ruang eksklusif Anda.
          </p>

          <div className="flex flex-col gap-6">
            <Link
              href="/meja-billiard"
              className="text-xs uppercase tracking-[0.2em] font-semibold flex items-center group w-max text-white"
            >
              Eksplorasi Kurasi
              <span className="ml-4 w-8 h-px bg-white group-hover:w-16 group-hover:bg-copper transition-all duration-300" />
            </Link>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              <button
                type="button"
                onClick={() => setQuizOpen(true)}
                className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-semibold text-copper border border-copper px-6 py-3 hover:bg-copper hover:text-white transition-all duration-300"
              >
                Temukan Meja Ideal 🎯
              </button>
              <a
                href={waTableLink("Halo Vania Billiard, saya ingin konsultasi meja billiard premium.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-xs uppercase tracking-widest font-bold text-white hover:text-copper transition-colors group"
              >
                <span className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center mr-3 group-hover:border-copper transition-all">
                  <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                Konsultasi VIP
              </a>
            </div>
          </div>
        </div>

        {/* Right: hero image with hotspots */}
        <div className="w-full md:w-1/2 h-[50vh] md:h-screen relative bg-[#111] overflow-hidden group">
          <div className="absolute inset-0 bg-[url('/images/hero/hero-main.jpg')] bg-cover bg-center opacity-70 group-hover:opacity-90 transition-opacity duration-700 scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-bg/60 via-transparent to-transparent md:from-bg/40" />

          {/* Hotspot 1: Worsted Cloth */}
          <div className="absolute top-[60%] left-[40%] group/hs z-20 hidden md:block">
            <div className="w-4 h-4 bg-copper rounded-full animate-ping absolute opacity-75" />
            <div className="w-4 h-4 bg-copper border-2 border-white rounded-full relative cursor-pointer shadow-[0_0_10px_#C86A36]" />
            <div className="absolute hidden group-hover/hs:block bottom-8 -left-16 w-56 bg-surface p-4 border border-copper/30 shadow-2xl pointer-events-none">
              <p className="text-[10px] uppercase tracking-widest text-copper font-bold mb-1">Worsted Cloth</p>
              <p className="text-[10px] text-gray-400 leading-relaxed">
                Laken anyaman tanpa bulu, laju bola lebih cepat dan minim friksi.
              </p>
            </div>
          </div>

          {/* Hotspot 2: Leather Pocket */}
          <div className="absolute top-[25%] right-[20%] group/hs z-20 hidden md:block">
            <div className="w-4 h-4 bg-copper rounded-full animate-ping absolute opacity-75" />
            <div className="w-4 h-4 bg-copper border-2 border-white rounded-full relative cursor-pointer shadow-[0_0_10px_#C86A36]" />
            <div className="absolute hidden group-hover/hs:block bottom-8 -right-10 w-56 bg-surface p-4 border border-copper/30 shadow-2xl pointer-events-none">
              <p className="text-[10px] uppercase tracking-widest text-copper font-bold mb-1">Leather Pocket</p>
              <p className="text-[10px] text-gray-400 leading-relaxed">
                Jahitan kulit asli dengan redaman suara untuk kenyamanan bermain.
              </p>
            </div>
          </div>

          {/* Floating credit */}
          <div className="absolute bottom-6 right-6 z-20 hidden lg:block">
            <p className="text-[9px] uppercase tracking-[0.3em] text-copper font-mono">
              Workshoot Ambarawa · Est. 2018
            </p>
          </div>
        </div>
      </section>

      <QuizModal open={quizOpen} onClose={() => setQuizOpen(false)} />
    </>
  );
}
