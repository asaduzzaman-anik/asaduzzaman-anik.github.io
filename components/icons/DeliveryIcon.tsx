import type { IconProps } from "./types";

export default function DeliveryIcon({
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
      <circle cx="6" cy="5.5" r="2.5" />
      <circle cx="6" cy="18.5" r="2.5" />
      <circle cx="18" cy="9" r="2.5" />
      <path d="M6 8v8" />
      <path d="M18 11.5c0 3.5-4 4-9.5 5.5" />
    </svg>
  );
}
