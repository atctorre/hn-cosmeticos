import type { Metadata } from "next";
import CallButton from "@/components/CallButton";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  ADDRESS_LINE,
  CITY,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  PHONE_DISPLAY,
  WA_MESSAGES,
  telLink,
  waLink,
} from "@/lib/contact";

export const metadata: Metadata = {
  title: "Contacto Mexicali | Tel. 686 2340805 | HN",
  description:
    "Contáctanos en Mexicali: teléfono 686 2340805, WhatsApp e Instagram @hn_cosmeticosyperfumeria.",
};

export default function ContactoPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <p className="text-xs uppercase tracking-[0.25em] text-rose">Mexicali</p>
      <h1 className="mt-3 font-serif text-4xl text-plum sm:text-5xl">Contáctanos en Mexicali</h1>
      <p className="mt-4 max-w-xl text-mauve">Habla con nosotros por teléfono o WhatsApp. Mismo número de siempre.</p>
      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        <a href={telLink()} className="rounded-2xl border border-blush-deep/50 bg-white p-6 shadow-sm">
          <p className="text-xs uppercase tracking-[0.15em] text-rose">Teléfono</p>
          <p className="mt-2 font-serif text-2xl text-plum">{PHONE_DISPLAY}</p>
        </a>
        <a href={waLink(WA_MESSAGES.home)} target="_blank" rel="noopener noreferrer" className="rounded-2xl border border-blush-deep/50 bg-white p-6 shadow-sm">
          <p className="text-xs uppercase tracking-[0.15em] text-rose">WhatsApp</p>
          <p className="mt-2 font-serif text-2xl text-plum">{PHONE_DISPLAY}</p>
        </a>
        <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="rounded-2xl border border-blush-deep/50 bg-white p-6 shadow-sm">
          <p className="text-xs uppercase tracking-[0.15em] text-rose">Instagram</p>
          <p className="mt-2 font-serif text-2xl text-plum">@{INSTAGRAM_HANDLE}</p>
        </a>
        <div className="rounded-2xl border border-blush-deep/50 bg-white p-6 shadow-sm">
          <p className="text-xs uppercase tracking-[0.15em] text-rose">Local</p>
          <p className="mt-2 font-serif text-xl text-plum">{ADDRESS_LINE}<br />{CITY}</p>
        </div>
      </div>
      <div className="mt-12 rounded-3xl bg-plum-deep px-6 py-10 text-center text-cream">
        <h2 className="font-serif text-2xl sm:text-3xl">Hablar ahora — {PHONE_DISPLAY}</h2>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <WhatsAppButton message={WA_MESSAGES.home}>Pedir por WhatsApp</WhatsAppButton>
          <CallButton variant="secondary">Llamar</CallButton>
        </div>
      </div>
    </div>
  );
}
