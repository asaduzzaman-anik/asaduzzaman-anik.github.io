import type { IconProps } from "./types";

export default function TrendUpIcon({
  className = "h-6 w-6",
  ...props
}: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      aria-hidden
      {...props}
    >
      <path d="M4 17 10 11l4 4 6-7" />
      <path d="M14 8h6v6" />
    </svg>
  );
}
