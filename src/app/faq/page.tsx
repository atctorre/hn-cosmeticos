import type { Metadata } from "next";
import CallButton from "@/components/CallButton";
import WhatsAppButton from "@/components/WhatsAppButton";
import { PHONE_DISPLAY, WA_MESSAGES } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Preguntas frecuentes | HN Mexicali",
  description: "Envíos, apartado y cómo pedir en HN Cosméticos Mexicali.",
};

const faqs = [
  {
    q: "¿Dónde están?",
    a: "Justo Sierra #1551, Col. Independencia, Mexicali, B.C. (Plaza Casino Caliente, junto a Farmacia Benavides).",
  },
  {
    q: "¿Hacen envíos?",
    a: "Sí, envíos a todo México. También entregas en punto. Escríbenos o llama al 686 2340805 para armar tu pedido.",
  },
  {
    q: "¿Puedo apartar?",
    a: "Sí, manejamos apartado de mercancía. Pregunta condiciones al pedir.",
  },
  {
    q: "¿Aceptan tarjetas?",
    a: "Sí, crédito y débito. También efectivo y transferencia.",
  },
  {
    q: "¿Cómo pido por WhatsApp?",
    a: "Toca el botón de WhatsApp en la página o escribe al número ligado a 686 2340805. Dinos el producto y la variante que te interesa.",
  },
  {
    q: "¿Tienen una marca o perfume específico?",
    a: "El inventario rota. Mejor consulta por WhatsApp o en el local; te confirmamos al momento.",
  },
  {
    q: "¿Los precios están en la página?",
    a: "Publicamos el catálogo para que elijas con claridad. Precio y disponibilidad se confirman por WhatsApp o teléfono al pedir.",
  },
];

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <p className="text-xs uppercase tracking-[0.25em] text-rose">Ayuda</p>
      <h1 className="mt-3 font-serif text-4xl text-plum sm:text-5xl">Preguntas frecuentes</h1>
      <div className="mt-10 space-y-4">
        {faqs.map((f) => (
          <details
            key={f.q}
            className="group rounded-2xl border border-blush-deep/50 bg-white p-5 shadow-sm open:border-rose/30"
          >
            <summary className="cursor-pointer list-none font-serif text-lg text-plum">
              <span className="flex items-start justify-between gap-4">
                {f.q}
                <span className="text-rose transition group-open:rotate-45">+</span>
              </span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-mauve">{f.a}</p>
          </details>
        ))}
      </div>
      <div className="mt-12 flex flex-wrap gap-3">
        <WhatsAppButton message={WA_MESSAGES.home}>WhatsApp</WhatsAppButton>
        <CallButton variant="ghost">Llamar {PHONE_DISPLAY}</CallButton>
      </div>
    </div>
  );
}
