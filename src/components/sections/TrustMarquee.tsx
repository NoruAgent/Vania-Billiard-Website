"use client";

const LOGOS = [
  "VIP Lounge Semarang",
  "Executive Club Ambarawa",
  "Grand Arena",
  "Private Villa Bali",
  "Onyx Billiard",
  "Café Billiard Yogya",
];

export function TrustMarquee() {
  // Duplicate list for seamless loop
  const doubled = [...LOGOS, ...LOGOS, ...LOGOS];

  return (
    <div className="bg-[#050505] border-y border-gray-900 py-6 overflow-hidden relative z-10 flex items-center">
      {/* Edge fade */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#050505] to-transparent z-20 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#050505] to-transparent z-20 pointer-events-none" />

      {/* Title */}
      <div className="absolute left-6 md:left-12 z-30 hidden md:block bg-[#050505] pr-6">
        <p className="text-[10px] uppercase tracking-[0.3em] text-copper font-bold whitespace-nowrap">
          Dipercaya Oleh :
        </p>
      </div>

      {/* Scrolling logos */}
      <div
        className="flex items-center opacity-50 hover:opacity-100 transition-opacity duration-500 px-12 md:pl-64 gap-12 md:gap-20 animate-[ticker_40s_linear_infinite] whitespace-nowrap"
        style={{ animation: "ticker 40s linear infinite" }}
      >
        {doubled.map((name, i) => (
          <span key={i} className="flex items-center gap-12 md:gap-20">
            <span className="text-sm md:text-base font-serif font-bold text-white tracking-widest uppercase">
              {name}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-copper shrink-0" />
          </span>
        ))}
      </div>

      <style jsx>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </div>
  );
}
