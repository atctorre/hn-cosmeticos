import type { Metadata } from "next";
import CallButton from "@/components/CallButton";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  ADDRESS_LINE,
  ADDRESS_REF,
  CITY,
  MAPS_EMBED,
  MAPS_URL,
  PHONE_DISPLAY,
  WA_MESSAGES,
} from "@/lib/contact";

export const metadata: Metadata = {
  title: "Cómo llegar | HN Cosméticos Mexicali",
  description: `Justo Sierra #1551, Independencia, Mexicali. Pedidos al ${PHONE_DISPLAY}.`,
};

export default function UbicacionPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <p className="text-xs uppercase tracking-[0.25em] text-rose">Mexicali, B.C.</p>
      <h1 className="mt-3 font-serif text-4xl text-plum sm:text-5xl">
        Cómo llegar — HN Cosméticos Mexicali
      </h1>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <dl className="space-y-6 rounded-2xl border border-blush-deep/50 bg-white p-6 shadow-sm">
          <div>
            <dt className="text-xs uppercase tracking-[0.15em] text-rose">Dirección</dt>
            <dd className="mt-2 text-plum">
              {ADDRESS_LINE}, {CITY}
            </dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-[0.15em] text-rose">Referencia</dt>
            <dd className="mt-2 text-plum">{ADDRESS_REF}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-[0.15em] text-rose">Teléfono</dt>
            <dd className="mt-2 text-plum">{PHONE_DISPLAY}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-[0.15em] text-rose">WhatsApp</dt>
            <dd className="mt-2">
              <WhatsAppButton message={WA_MESSAGES.location}>Escribir por WhatsApp</WhatsAppButton>
            </dd>
          </div>
          <div className="flex flex-wrap gap-3 pt-2">
            <CallButton>Llamar {PHONE_DISPLAY}</CallButton>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-plum/20 px-6 py-3 text-sm text-plum-soft hover:border-rose hover:text-rose"
            >
              Abrir en Maps
            </a>
          </div>
        </dl>
        <div className="overflow-hidden rounded-2xl border border-blush-deep/50 bg-blush-soft shadow-sm">
          <iframe
            title="Mapa HN Cosméticos Justo Sierra 1551 Mexicali"
            src={MAPS_EMBED}
            className="h-[360px] w-full border-0 sm:h-full sm:min-h-[420px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}
