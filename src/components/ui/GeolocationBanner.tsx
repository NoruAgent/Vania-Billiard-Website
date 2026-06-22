"use client";

import { useEffect, useState } from "react";

const LOCAL_CITIES = ["Semarang", "Ambarawa", "Salatiga", "Ungaran"];

export function GeolocationBanner() {
  const [visible, setVisible] = useState(false);
  const [city, setCity] = useState<string | null>(null);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("geo-banner-dismissed")) return;

    // Use ipapi.co JSON. Free tier, no key.
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 4000);

    fetch("https://ipapi.co/json/", { signal: controller.signal })
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        clearTimeout(timeout);
        if (data?.city) {
          setCity(data.city);
          setVisible(true);
        }
      })
      .catch(() => clearTimeout(timeout));

    return () => {
      clearTimeout(timeout);
      controller.abort();
    };
  }, []);

  if (!visible || dismissed || !city) return null;

  const isLocal = LOCAL_CITIES.includes(city);

  const handleDismiss = () => {
    sessionStorage.setItem("geo-banner-dismissed", "1");
    setDismissed(true);
  };

  return (
    <div
      className="bg-copper text-white text-[10px] md:text-xs text-center py-2 px-4 font-bold tracking-widest uppercase relative z-40 flex items-center justify-center gap-3"
      role="status"
    >
      <span>
        {isLocal
          ? `🌟 LAYANAN INSTALASI VIP TERSEDIA LANGSUNG UNTUK AREA ${city.toUpperCase()}`
          : `🚚 PENGIRIMAN KARGO KHUSUS TERSEDIA UNTUK AREA ${city.toUpperCase()}`}
      </span>
      <button
        onClick={handleDismiss}
        aria-label="Tutup"
        className="text-white/80 hover:text-white text-base leading-none"
      >
        ✕
      </button>
    </div>
  );
}
