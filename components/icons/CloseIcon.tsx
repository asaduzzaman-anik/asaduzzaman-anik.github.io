import type { IconProps } from "./types";

export default function CloseIcon({
  className = "h-5 w-5",
  ...props
}: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden
      {...props}
    >
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}
