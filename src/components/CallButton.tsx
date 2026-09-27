import { PHONE_DISPLAY, telLink } from "@/lib/contact";

type Props = {
  children?: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
};

const variants: Record<NonNullable<Props["variant"]>, string> = {
  primary: "bg-plum text-cream hover:bg-plum-soft shadow-lg shadow-plum/25",
  secondary: "bg-cream text-plum border border-blush-deep hover:border-rose hover:bg-white",
  ghost: "bg-transparent text-plum border border-plum/20 hover:border-rose hover:text-rose",
};

export default function CallButton({
  children,
  className = "",
  variant = "primary",
}: Props) {
  return (
    <a
      href={telLink()}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition ${variants[variant]} ${className}`}
    >
      {children ?? `Llamar ${PHONE_DISPLAY}`}
    </a>
  );
}
