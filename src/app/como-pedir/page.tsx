import type { Metadata } from "next";
import CallButton from "@/components/CallButton";
import WhatsAppButton from "@/components/WhatsAppButton";
import { PHONE_DISPLAY, WA_MESSAGES } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Cómo Pedir por Teléfono o WhatsApp | HN Mexicali",
  description: "Elige, escríbenos o llama al 686 2340805 y cierra tu pedido con HN en Mexicali.",
};

const steps = [
  { n: "1", title: "Elige", text: "El producto en el catálogo (o dinos la marca / nombre)." },
  { n: "2", title: "Escríbenos o llama", text: `WhatsApp o teléfono al ${PHONE_DISPLAY}.` },
  {
    n: "3",
    title: "Confirmamos",
    text: "Disponibilidad, presentación, pago (tarjeta, efectivo o transferencia) y envío, entrega en punto o recolección.",
  },
  { n: "4", title: "Cierras", text: "Tu pedido con nosotros — fácil y local." },
];

export default function ComoPedirPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <p className="text-xs uppercase tracking-[0.25em] text-rose">Pedido fácil</p>
      <h1 className="mt-3 font-serif text-4xl text-plum sm:text-5xl">Cómo pedir con HN</h1>
      <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s) => (
          <li key={s.n} className="rounded-2xl border border-blush-deep/50 bg-white p-6 shadow-sm">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-plum text-sm font-medium text-cream">
              {s.n}
            </span>
            <h2 className="mt-4 font-serif text-xl text-plum">{s.title}</h2>
            <p className="mt-2 text-sm text-mauve">{s.text}</p>
          </li>
        ))}
      </ol>
      <div className="mt-14 rounded-3xl bg-plum-deep px-6 py-10 text-center text-cream">
        <h2 className="font-serif text-2xl sm:text-3xl">Quiero pedir ahora</h2>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <WhatsAppButton message={WA_MESSAGES.home}>WhatsApp</WhatsAppButton>
          <CallButton variant="secondary">Llamar {PHONE_DISPLAY}</CallButton>
        </div>
      </div>
    </div>
  );
}
