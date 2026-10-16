import type { IconProps } from "./types";

export default function DatabaseIcon({
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
      <ellipse cx="12" cy="5.5" rx="7.5" ry="2.5" />
      <path d="M4.5 5.5v6c0 1.38 3.36 2.5 7.5 2.5s7.5-1.12 7.5-2.5v-6" />
      <path d="M4.5 11.5v6c0 1.38 3.36 2.5 7.5 2.5s7.5-1.12 7.5-2.5v-6" />
    </svg>
  );
}
