import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import BeautyPlaceholder from "@/components/BeautyPlaceholder";
import CallButton from "@/components/CallButton";
import ProductCard from "@/components/ProductCard";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  CATEGORY_LABELS,
  GENDER_LABELS,
  getByCategory,
  getProduct,
  products,
} from "@/data/products";
import { PHONE_DISPLAY, WA_MESSAGES } from "@/lib/contact";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Producto" };
  return {
    title: `${product.name} | HN Mexicali`,
    description: `${product.shortDescription} Consulta al ${PHONE_DISPLAY}.`,
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  const related = getByCategory(product.category).filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <nav className="text-sm text-mauve">
        <Link href="/catalogo" className="hover:text-rose">Catálogo</Link>
        <span className="mx-2">/</span>
        <span>{CATEGORY_LABELS[product.category]}</span>
      </nav>
      <div className="mt-8 grid gap-10 lg:grid-cols-2">
        <BeautyPlaceholder label={product.name} gradient={product.gradient} aspect="aspect-[4/5]" badge={CATEGORY_LABELS[product.category]} className="shadow-xl shadow-plum/15" />
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-rose">{product.brand} · {CATEGORY_LABELS[product.category]} · {GENDER_LABELS[product.gender]}</p>
          <h1 className="mt-3 font-serif text-4xl text-plum">{product.name}</h1>
          <p className="mt-4 leading-relaxed text-mauve">{product.shortDescription}</p>
          <p className="mt-4 text-sm text-plum-muted">{product.details}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {product.variants.map((v) => (
              <span key={v} className="rounded-full border border-blush-deep bg-blush-soft px-3 py-1.5 text-sm text-plum">{v}</span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <WhatsAppButton message={WA_MESSAGES.product(product.name, product.variants[0])}>Pedir por WhatsApp</WhatsAppButton>
            <CallButton variant="ghost">Llamar {PHONE_DISPLAY}</CallButton>
          </div>
        </div>
      </div>
      {related.length > 0 && (
        <section className="mt-16">
          <h2 className="font-serif text-2xl text-plum">Productos relacionados</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => <ProductCard key={p.slug} product={p} />)}
          </div>
        </section>
      )}
    </div>
  );
}
