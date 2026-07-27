import type { IconProps } from "./types";

export default function ChevronRightIcon({
  className = "h-4 w-4",
  ...props
}: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
      {...props}
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
