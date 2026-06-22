import { SectionHeading } from "../ui/SectionHeading";

const ANATOMY = [
  {
    title: "Black Slate",
    desc: "Kepadatan batu alam presisi memastikan meja tidak akan melengkung seumur hidup.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
        />
      </svg>
    ),
  },
  {
    title: "K-66 Cushion",
    desc: "Karet pantulan standar profesional. Konsisten dan tidak meredam tenaga pukulan.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
        />
      </svg>
    ),
  },
  {
    title: "Worsted Cloth",
    desc: "Laken anyaman rapat kelas dunia. Mengurangi friksi, bola melaju lebih cepat dan mulus.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 19V6.25A3.25 3.25 0 0112.25 3h.5A3.25 3.25 0 0116 6.25v12.5a3.25 3.25 0 01-3.25 3.25h-.5A3.25 3.25 0 019 18.75zM9 19H4.75A1.75 1.75 0 013 17.25V6.75A1.75 1.75 0 014.75 5H9"
        />
      </svg>
    ),
  },
  {
    title: "Solid Frame",
    desc: "Rangka kayu keras menahan beban ratusan kilogram batu tanpa menggeser kalibrasi presisi.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 6h16M4 10h16M4 14h16M4 18h16"
        />
      </svg>
    ),
  },
];

export function AnatomiPresisi() {
  return (
    <section className="py-24 bg-surface border-b border-gray-900">
      <div className="max-w-6xl mx-auto px-8 md:px-20">
        <SectionHeading
          eyebrow="Anatomi Presisi"
          title="Mengenal Komponen Turnamen"
          subtitle="Kemewahan sejati terletak pada detail yang tidak terlihat dari luar."
          align="center"
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ANATOMY.map((item, i) => (
            <div
              key={item.title}
              className="group p-8 border border-border-subtle bg-bg hover:border-copper hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(200,106,54,0.12)] transition-all duration-500"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="text-gray-500 group-hover:text-copper transition-colors mb-6">
                {item.icon}
              </div>
              <h4 className="font-bold text-white uppercase tracking-widest text-[11px] mb-3">
                {item.title}
              </h4>
              <p className="text-sm font-light text-gray-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
