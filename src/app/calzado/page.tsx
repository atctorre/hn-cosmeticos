import type { Metadata } from "next";
import Link from "next/link";
import CallButton from "@/components/CallButton";
import ProductCard from "@/components/ProductCard";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getByCategory } from "@/data/products";
import { PHONE_DISPLAY, WA_MESSAGES } from "@/lib/contact";

export const metadata: Metadata = {
  title: 'Calzado Mexicali | HN Cosméticos',
  description: 'Calzado original en Mexicali. Consulta arrivals al 686 2340805.',
};

export default function Page() {
  const items = getByCategory("calzado");
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <p className="text-xs uppercase tracking-[0.25em] text-rose">Mexicali</p>
      <h1 className="mt-3 font-serif text-4xl text-plum sm:text-5xl">Calzado original</h1>
      <p className="mt-4 max-w-2xl text-mauve">Arrivals y calzado original cuando hay stock (incluyendo New Balance en temporadas de llegada). Pregunta disponibilidad al 686 2340805.</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <WhatsAppButton message={WA_MESSAGES.calzado}>WhatsApp</WhatsAppButton>
        <CallButton variant="ghost">Llamar {PHONE_DISPLAY}</CallButton>
        <Link
          href="/catalogo?categoria=calzado"
          className="inline-flex items-center rounded-full border border-plum/20 px-5 py-3 text-sm text-plum-soft hover:border-rose hover:text-rose"
        >
          Filtrar en catálogo
        </Link>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </div>
  );
}
