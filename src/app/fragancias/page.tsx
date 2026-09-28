import type { Metadata } from "next";
import Link from "next/link";
import CallButton from "@/components/CallButton";
import ProductCard from "@/components/ProductCard";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getByCategory } from "@/data/products";
import { PHONE_DISPLAY, WA_MESSAGES } from "@/lib/contact";

export const metadata: Metadata = {
  title: 'Perfumería Mexicali | HN Cosméticos',
  description: 'Fragancias y perfumería en Mexicali. Pide por WhatsApp o visita Justo Sierra 1551.',
};

export default function Page() {
  const items = getByCategory("fragancias");
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <p className="text-xs uppercase tracking-[0.25em] text-rose">Mexicali</p>
      <h1 className="mt-3 font-serif text-4xl text-plum sm:text-5xl">Perfumería en Mexicali</h1>
      <p className="mt-4 max-w-2xl text-mauve">Fragancias para ella y para él. Pregunta por tu favorita o déjanos recomendarte según lo que buscas.</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <WhatsAppButton message={WA_MESSAGES.fragancias}>WhatsApp</WhatsAppButton>
        <CallButton variant="ghost">Llamar {PHONE_DISPLAY}</CallButton>
        <Link
          href="/catalogo?categoria=fragancias"
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
