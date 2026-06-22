interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  invertOnDark?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  invertOnDark = false,
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-10 lg:mb-14 ${
        align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-3xl"
      }`}
    >
      {eyebrow && (
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-copper mb-4">
          {eyebrow}
        </p>
      )}
      <h2 className="font-serif text-4xl lg:text-5xl font-medium leading-[1.1] tracking-tight mb-4 text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="text-text-muted text-base lg:text-lg leading-relaxed text-balance">
          {subtitle}
        </p>
      )}
    </div>
  );
}
