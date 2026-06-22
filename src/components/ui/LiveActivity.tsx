"use client";

import { useEffect, useState } from "react";

const PRODUCTS = [
  "Abimanyu Gen-5 Pro",
  "Custom 8ft Mahogani",
  "Meja 7ft Rekreasi",
  "Inspeksi Batu Slate",
  "Pemasangan Laken Worsted",
  "Kalibrasi Leveling",
  "Paket Aksesoris Pro",
  "Bongkar Pasar (Relokasi)",
];

const CITIES = [
  "Semarang",
  "Ambarawa",
  "Salatiga",
  "Demak",
  "Ungaran",
  "Kendal",
  "Jakarta (Kargo)",
  "Surabaya (Kargo)",
  "Bali (Kargo)",
  "Medan (Kargo)",
];

const STATUSES = [
  { text: "Selesai", color: "text-gray-400", border: "border-border-subtle" },
  { text: "Proses Instalasi", color: "text-green-400", border: "border-green-500/30 bg-green-500/10" },
  { text: "Persiapan Kargo", color: "text-copper", border: "border-copper/30 bg-copper/10" },
  { text: "Tahap Kalibrasi", color: "text-blue-400", border: "border-blue-500/30 bg-blue-500/10" },
];

function pseudoRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

export function LiveActivity() {
  const [activities, setActivities] = useState<
    { product: string; city: string; status: typeof STATUSES[number] }[]
  >([]);

  useEffect(() => {
    // Seed changes every 6 hours (21600000 ms)
    const seed = Math.floor(Date.now() / 21600000);

    const generated = Array.from({ length: 3 }).map((_, i) => {
      const s = seed + i;
      const prodIdx = Math.floor(pseudoRandom(s) * PRODUCTS.length);
      const cityIdx = Math.floor(pseudoRandom(s + 1) * CITIES.length);
      const statIdx = Math.floor(pseudoRandom(s + 2) * STATUSES.length);
      return {
        product: PRODUCTS[prodIdx],
        city: CITIES[cityIdx],
        status: STATUSES[statIdx],
      };
    });

    setActivities(generated);
  }, []);

  return (
    <div className="bg-[#111]/80 backdrop-blur-md border border-border-subtle p-6 shadow-2xl relative">
      <div className="flex justify-between items-end border-b border-border-subtle pb-4 mb-4">
        <div>
          <p className="text-[9px] uppercase tracking-[0.2em] text-gray-500 mb-1">
            Aktivitas Kurator
          </p>
          <p className="text-white text-sm font-serif">Live Installation Status</p>
        </div>
        <span className="text-green-500 text-[10px] uppercase tracking-widest font-bold flex items-center bg-green-500/10 px-2 py-1 rounded">
          <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse mr-2" />
          Live
        </span>
      </div>

      <div className="space-y-4 min-h-[100px] flex flex-col justify-center">
        {activities.length === 0 ? (
          <>
            <div className="w-full h-2 bg-surface-elevated animate-pulse rounded" />
            <div className="w-3/4 h-2 bg-surface-elevated animate-pulse rounded" />
          </>
        ) : (
          activities.map((act, i) => {
            const isProcess = act.status.text !== "Selesai";
            const prodClass = isProcess
              ? "text-white font-bold"
              : "text-gray-300 font-light";
            const pulse = isProcess ? "animate-pulse" : "";

            return (
              <div
                key={i}
                className="flex justify-between items-center group animate-[fadeIn_0.5s_ease-out]"
              >
                <p className={`text-xs ${prodClass}`}>
                  <span className={`text-copper font-bold mr-2 ${pulse}`}>
                    0{i + 1}
                  </span>
                  {act.product}
                </p>
                <span
                  className={`text-[9px] uppercase tracking-widest ${act.status.color} ${act.status.border} border px-2 py-0.5 rounded shadow-sm text-right max-w-[140px] truncate`}
                  title={`${act.status.text} (${act.city})`}
                >
                  {act.status.text}
                  <br />
                  <span className="opacity-70">{act.city}</span>
                </span>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
