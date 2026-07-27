import type { IconProps } from "./types";

export default function FrontendIcon({
  className = "h-6 w-6",
  ...props
}: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 8h18" />
      <circle cx="6.5" cy="6" r="0.75" fill="currentColor" stroke="none" />
      <circle cx="9" cy="6" r="0.75" fill="currentColor" stroke="none" />
      <path d="M8 13l-2 2 2 2M16 13l2 2-2 2M13 12l-2 6" />
    </svg>
  );
}
