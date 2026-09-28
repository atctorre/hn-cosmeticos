"use client";

import { useMemo, useState } from "react";
import ProductCard from "@/components/ProductCard";
import {
  CATEGORY_LABELS,
  GENDER_LABELS,
  type Category,
  type Gender,
  type Product,
} from "@/data/products";
import { WA_MESSAGES, waLink } from "@/lib/contact";

type Props = {
  products: Product[];
  initialCategory?: string;
  initialGender?: string;
};

const categories = Object.keys(CATEGORY_LABELS) as Category[];
const genders = Object.keys(GENDER_LABELS) as Gender[];

export default function CatalogFilters({
  products,
  initialCategory,
  initialGender,
}: Props) {
  const [categoria, setCategoria] = useState<string>(
    initialCategory && initialCategory in CATEGORY_LABELS ? initialCategory : "todas"
  );
  const [para, setPara] = useState<string>(
    initialGender && initialGender in GENDER_LABELS ? initialGender : "todos"
  );
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return products.filter((p) => {
      const catOk = categoria === "todas" || p.category === categoria;
      const genderOk = para === "todos" || p.gender === para;
      const searchOk =
        !needle ||
        p.name.toLowerCase().includes(needle) ||
        p.brand.toLowerCase().includes(needle) ||
        p.shortDescription.toLowerCase().includes(needle);
      return catOk && genderOk && searchOk;
    });
  }, [products, categoria, para, q]);

  return (
    <div>
      <div className="rounded-2xl border border-blush-deep/50 bg-white p-4 shadow-sm sm:p-5">
        <div className="mb-4">
          <span className="mb-2 block text-xs uppercase tracking-[0.15em] text-rose">Categoría</span>
          <div className="flex flex-wrap gap-2">
            {[{ value: "todas", label: "Todas" }, ...categories.map((c) => ({ value: c, label: CATEGORY_LABELS[c] }))].map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => setCategoria(opt.value)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  categoria === opt.value
                    ? "bg-plum text-cream shadow-md shadow-plum/30"
                    : "border border-blush-deep bg-blush text-plum-soft hover:border-rose"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block text-sm">
            <span className="mb-1.5 block text-xs uppercase tracking-[0.15em] text-rose">Para</span>
            <select value={para} onChange={(e) => setPara(e.target.value)} className="w-full rounded-xl border border-blush-deep bg-blush px-3 py-2.5 text-plum outline-none focus:border-rose">
              <option value="todos">Todos</option>
              {genders.map((g) => (
                <option key={g} value={g}>{GENDER_LABELS[g]}</option>
              ))}
            </select>
          </label>
          <label className="block text-sm">
            <span className="mb-1.5 block text-xs uppercase tracking-[0.15em] text-rose">Buscar…</span>
            <input type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Marca, producto…" className="w-full rounded-xl border border-blush-deep bg-blush px-3 py-2.5 text-plum outline-none focus:border-rose" />
          </label>
        </div>
        <p className="mt-4 text-xs text-mauve">{filtered.length} producto{filtered.length === 1 ? "" : "s"} · Precios y stock se confirman al momento del pedido</p>
      </div>

      {filtered.length === 0 ? (
        <div className="mt-10 rounded-2xl border border-dashed border-blush-deep bg-blush-soft/50 px-6 py-12 text-center">
          <p className="font-serif text-xl text-plum">No hay resultados — escríbenos y lo buscamos.</p>
          <a href={waLink(WA_MESSAGES.catalog)} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-medium text-white">Escribir por WhatsApp</a>
        </div>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
