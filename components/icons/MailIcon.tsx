import type { IconProps } from "./types";

export default function MailIcon({
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
      <path d="M4 4h16v16H4z" />
      <path d="m4 6 8 6 8-6" />
    </svg>
  );
}
