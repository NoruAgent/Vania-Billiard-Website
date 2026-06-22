"use client";

import { useEffect, useRef, useState } from "react";
import { LiveActivity } from "@/components/ui/LiveActivity";

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  highlight?: boolean;
}

const STATS: StatItem[] = [
  { value: 150, suffix: "+", label: "Unit Terinstalasi", highlight: true },
  { value: 15, suffix: "+", label: "Kota Jangkauan" },
  { value: 100, suffix: "%", label: "Presisi Leveling" },
  { value: 24, suffix: "/7", label: "Dukungan Klien", highlight: true },
];

function useCountUp(target: number, start: boolean) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    const duration = 1500;
    const startTime = Date.now();
    const tick = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(target * eased));
      if (progress < 1) requestAnimationFrame(tick);
    };
    tick();
  }, [target, start]);
  return value;
}

function StatCard({ stat, inView }: { stat: StatItem; inView: boolean }) {
  const value = useCountUp(stat.value, inView);
  return (
    <div>
      <div
        className={`text-4xl md:text-5xl font-serif mb-2 flex items-center ${
          stat.highlight ? "text-copper" : "text-white"
        }`}
      >
        <span className="font-bold">{value}</span>
        <span className="text-3xl ml-1">{stat.suffix}</span>
      </div>
      <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">
        {stat.label}
      </p>
    </div>
  );
}

export function StatsCounter() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="py-24 md:py-32 bg-bg border-b border-gray-900 relative overflow-hidden"
    >
      {/* Decorative rotating ring */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-gray-800/30 rounded-full opacity-20 flex items-center justify-center pointer-events-none hidden lg:flex">
        <div className="w-[400px] h-[400px] border border-gray-800/40 rounded-full flex items-center justify-center animate-[spin_15s_linear_infinite]">
          <div className="w-2 h-2 bg-copper rounded-full absolute -top-1 shadow-[0_0_15px_#C86A36]" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 md:px-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
          {/* Left: stats grid */}
          <div className="w-full lg:w-5/12 grid grid-cols-2 gap-x-8 gap-y-12">
            {STATS.map((stat) => (
              <StatCard key={stat.label} stat={stat} inView={inView} />
            ))}
          </div>

          {/* Right: distribution + live activity */}
          <div className="w-full lg:w-7/12">
            <div className="mb-10">
              <div className="flex items-center text-copper mb-4">
                <div className="w-2 h-2 bg-copper rounded-full animate-ping mr-3" />
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold">
                  Jejak Distribusi Logistik
                </span>
              </div>
              <h3 className="font-serif text-3xl md:text-4xl text-white mb-6 leading-tight">
                Menguasai Teritori.
                <br />
                Menjaga Kualitas.
              </h3>

              <div className="flex flex-wrap gap-x-6 gap-y-3 text-xs font-light text-gray-400">
                <span className="flex items-center">
                  <Check /> Semarang Raya
                </span>
                <span className="flex items-center text-copper font-bold">
                  <Check /> Ambarawa (HQ)
                </span>
                <span className="flex items-center">
                  <Check /> Salatiga
                </span>
                <span className="flex items-center">
                  <Bolt /> Ekspor Nasional via Kargo
                </span>
              </div>
            </div>

            <LiveActivity />
          </div>
        </div>
      </div>
    </section>
  );
}

function Check() {
  return (
    <svg
      className="w-3 h-3 text-copper mr-2 shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}

function Bolt() {
  return (
    <svg
      className="w-3 h-3 text-gray-600 mr-2 shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    </svg>
  );
}
