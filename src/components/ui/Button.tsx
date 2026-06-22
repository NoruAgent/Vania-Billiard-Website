import Link from "next/link";
import type { ComponentProps } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "whatsapp";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends Omit<ComponentProps<"a">, "ref"> {
  variant?: Variant;
  size?: Size;
  href: string;
  external?: boolean;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-copper text-bg hover:bg-copper-bright focus-visible:ring-copper",
  secondary:
    "bg-surface-elevated text-text hover:bg-border focus-visible:ring-text border border-border",
  outline:
    "bg-transparent text-text border-2 border-text hover:bg-text hover:text-bg focus-visible:ring-text",
  ghost:
    "bg-transparent text-text hover:bg-surface focus-visible:ring-text",
  whatsapp:
    "bg-wa text-white hover:bg-wa-dark focus-visible:ring-wa",
};

const sizeClasses: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-14 px-8 text-base",
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  external,
  children,
  className = "",
  ...rest
}: ButtonProps) {
  const cls = `inline-flex items-center justify-center gap-2 font-medium tracking-wide uppercase transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:opacity-50 disabled:pointer-events-none ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cls}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cls} {...(rest as object)}>
      {children}
    </Link>
  );
}
