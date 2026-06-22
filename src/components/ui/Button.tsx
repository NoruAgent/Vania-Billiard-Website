import Link from "next/link";
import type { ComponentProps, ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "whatsapp";
type Size = "sm" | "md" | "lg";

interface BaseProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
}

// Link variant
interface LinkButtonProps
  extends BaseProps,
    Omit<ComponentProps<"a">, "ref" | "children" | "className"> {
  href: string;
  external?: boolean;
  onClick?: never;
}

// Plain button variant
interface PlainButtonProps
  extends BaseProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "ref" | "children" | "className"> {
  href?: never;
  external?: never;
}

type ButtonProps = LinkButtonProps | PlainButtonProps;

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-copper text-bg hover:bg-[#a3592a] focus-visible:ring-copper",
  secondary:
    "bg-surface-elevated text-text hover:bg-border focus-visible:ring-text border border-border",
  outline:
    "bg-transparent text-text border border-text hover:bg-text hover:text-bg focus-visible:ring-text",
  ghost:
    "bg-transparent text-text hover:bg-surface focus-visible:ring-text",
  whatsapp:
    "bg-wa text-white hover:bg-[#1ebe5d] focus-visible:ring-wa",
};

const sizeClasses: Record<Size, string> = {
  sm: "h-9 px-4 text-xs",
  md: "h-11 px-6 text-sm",
  lg: "h-14 px-8 text-base",
};

const baseClasses =
  "inline-flex items-center justify-center font-bold uppercase tracking-widest transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:opacity-50 disabled:cursor-not-allowed";

export function Button(props: ButtonProps) {
  const variant = props.variant ?? "primary";
  const size = props.size ?? "md";
  const className = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${props.className ?? ""}`;

  if ("href" in props && props.href) {
    const { href, external, children, variant: _v, size: _s, className: _c, ...rest } = props;
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
          {...rest}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={className} {...rest}>
        {children}
      </Link>
    );
  }

  const { children, variant: _v, size: _s, className: _c, ...rest } = props as PlainButtonProps;
  return (
    <button type="button" className={className} {...rest}>
      {children}
    </button>
  );
}
