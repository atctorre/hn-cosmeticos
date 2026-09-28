import type { Metadata } from "next";
import CatalogFilters from "@/components/CatalogFilters";
import { products } from "@/data/products";
import { PHONE_DISPLAY } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Catálogo Mexicali | HN Cosméticos",
  description:
    "Explora fragancias, cosméticos, maquillaje y calzado. Consulta disponibilidad al 686 2340805.",
};

type Props = {
  searchParams: Promise<{ categoria?: string; para?: string }>;
};

export default async function CatalogoPage({ searchParams }: Props) {
  const params = await searchParams;
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <p className="text-xs uppercase tracking-[0.25em] text-rose">Mexicali</p>
      <h1 className="mt-3 font-serif text-4xl text-plum sm:text-5xl">
        Catálogo HN Cosméticos Mexicali
      </h1>
      <p className="mt-4 max-w-2xl text-mauve">
        Filtra por categoría. Cada ficha te lleva a consultar por WhatsApp o teléfono — sin vueltas.
        Pedidos al <strong className="text-plum">{PHONE_DISPLAY}</strong>.
      </p>
      <div className="mt-10">
        <CatalogFilters
          products={products}
          initialCategory={params.categoria}
          initialGender={params.para}
        />
      </div>
    </div>
  );
}
