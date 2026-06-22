export function BigQuote() {
  return (
    <section className="py-32 bg-[#050505] relative overflow-hidden border-b border-gray-900">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-full bg-copper/5 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
        <svg
          className="w-10 h-10 text-copper mx-auto mb-8 opacity-80"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>

        <h3 className="font-serif text-3xl md:text-5xl text-white leading-tight mb-8">
          &ldquo;Kami tidak memproduksi meja secara massal.
          <br />
          Kami menyeleksi, menguji, dan mengkurasi presisi absolut untuk ruang
          eksklusif Anda.&rdquo;
        </h3>

        <div className="flex items-center justify-center space-x-4">
          <div className="w-12 h-px bg-gray-800" />
          <p className="text-gray-400 font-bold text-[10px] tracking-[0.3em] uppercase">
            Vania Billiard — Ambarawa
          </p>
          <div className="w-12 h-px bg-gray-800" />
        </div>
      </div>
    </section>
  );
}
