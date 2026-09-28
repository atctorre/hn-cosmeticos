import type { Metadata } from "next";
import CallButton from "@/components/CallButton";
import WhatsAppButton from "@/components/WhatsAppButton";
import { INSTAGRAM_HANDLE, PHONE_DISPLAY, WA_MESSAGES } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Quiénes Somos | HN Cosméticos y Perfumería Mexicali",
  description:
    "HN Cosméticos en Mexicali: perfumería, cosméticos y más en Justo Sierra. Pedidos al 686 2340805.",
};

export default function NosotrosPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <p className="text-xs uppercase tracking-[0.25em] text-rose">Mexicali</p>
      <h1 className="mt-3 font-serif text-4xl text-plum sm:text-5xl">
        HN Cosméticos y Perfumería en Mexicali
      </h1>
      <div className="mt-8 space-y-5 text-base leading-relaxed text-mauve">
        <p>
          Somos HN en Mexicali: perfumería, cosméticos y más, con atención cercana en Justo Sierra y
          por mensaje. En Instagram somos @{INSTAGRAM_HANDLE}. Esta web es tu catálogo fijo — el
          pedido sigue con nosotros, al mismo número de siempre:{" "}
          <strong className="text-plum">{PHONE_DISPLAY}</strong>.
        </p>
      </div>
      <div className="mt-10 flex flex-wrap gap-3">
        <WhatsAppButton message={WA_MESSAGES.home}>WhatsApp</WhatsAppButton>
        <CallButton variant="ghost">Llamar {PHONE_DISPLAY}</CallButton>
      </div>
    </div>
  );
}
