import { waLink } from "@/lib/contact";

type Props = {
  message: string;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost" | "whatsapp";
};

const variants: Record<NonNullable<Props["variant"]>, string> = {
  primary: "bg-plum text-cream hover:bg-plum-soft shadow-lg shadow-plum/25",
  secondary: "bg-cream text-plum border border-blush-deep hover:border-rose hover:bg-white",
  ghost: "bg-transparent text-plum border border-plum/20 hover:border-rose hover:text-rose",
  whatsapp: "bg-[#25D366] text-white hover:bg-[#1ebe57] shadow-lg shadow-plum/10",
};

export default function WhatsAppButton({
  message,
  children,
  className = "",
  variant = "whatsapp",
}: Props) {
  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
