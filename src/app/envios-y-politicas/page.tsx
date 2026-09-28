import type { Metadata } from "next";
import CallButton from "@/components/CallButton";
import WhatsAppButton from "@/components/WhatsAppButton";
import { PHONE_DISPLAY, WA_MESSAGES } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Envíos a todo México | HN Cosméticos",
  description:
    "Envíos nacionales, entregas en punto y apartado. Tarjetas, efectivo y transferencia.",
};

const items = [
  { title: "Envíos a todo México", text: "Armamos tu pedido y lo enviamos a nivel nacional." },
  { title: "Entregas en punto", text: "También coordinamos entregas en punto. Pregunta al pedir." },
  {
    title: "Sistema de apartado",
    text: "Separa tu mercancía y págalo a tu ritmo. Condiciones al confirmar el pedido.",
  },
  {
    title: "Pagos",
    text: "Tarjetas de crédito y débito, efectivo y transferencia.",
  },
  {
    title: "Cómo compramos",
    text: "Venta en tienda (Justo Sierra), por mensaje y en lives de Instagram.",
  },
];

export default function EnviosPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <p className="text-xs uppercase tracking-[0.25em] text-rose">Pedido fácil</p>
      <h1 className="mt-3 font-serif text-4xl text-plum sm:text-5xl">
        Envíos, entregas y apartado
      </h1>
      <ul className="mt-10 space-y-4">
        {items.map((item) => (
          <li key={item.title} className="rounded-2xl border border-blush-deep/50 bg-white p-5 shadow-sm">
            <h2 className="font-serif text-xl text-plum">{item.title}</h2>
            <p className="mt-2 text-sm text-mauve">{item.text}</p>
          </li>
        ))}
      </ul>
      <div className="mt-10 flex flex-wrap gap-3">
        <WhatsAppButton message={WA_MESSAGES.shipping}>Pedir por WhatsApp</WhatsAppButton>
        <CallButton variant="ghost">Llamar {PHONE_DISPLAY}</CallButton>
      </div>
    </div>
  );
}
