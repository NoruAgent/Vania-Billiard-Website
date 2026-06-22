// Real SVG icons for social links

interface SocialIconProps {
  kind: "instagram" | "tiktok" | "facebook" | "youtube";
}

export function SocialIcon({ kind }: SocialIconProps) {
  const common = "w-4 h-4";
  if (kind === "instagram") {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={common} aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
      </svg>
    );
  }
  if (kind === "tiktok") {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className={common} aria-hidden="true">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.5a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.93Z" />
      </svg>
    );
  }
  if (kind === "facebook") {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className={common} aria-hidden="true">
        <path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01Z" />
      </svg>
    );
  }
  if (kind === "youtube") {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className={common} aria-hidden="true">
        <path d="M21.582 6.186a2.506 2.506 0 0 0-1.768-1.768C18.254 4 12 4 12 4s-6.254 0-7.814.418a2.506 2.506 0 0 0-1.768 1.768C2 7.746 2 12 2 12s0 4.254.418 5.814a2.506 2.506 0 0 0 1.768 1.768C5.746 20 12 20 12 20s6.254 0 7.814-.418a2.506 2.506 0 0 0 1.768-1.768C22 16.254 22 12 22 12s0-4.254-.418-5.814ZM10 15.464V8.536L16 12l-6 3.464Z" />
      </svg>
    );
  }
  return null;
}
