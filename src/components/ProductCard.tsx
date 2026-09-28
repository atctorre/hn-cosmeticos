import Image from "next/image";
import Link from "next/link";
import BeautyPlaceholder from "@/components/BeautyPlaceholder";
import { CATEGORY_LABELS, type Product } from "@/data/products";
import { PHONE_DISPLAY, WA_MESSAGES, telLink, waLink } from "@/lib/contact";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-blush-deep/50 bg-white shadow-sm shadow-plum/5 transition hover:border-rose/40 hover:shadow-lg hover:shadow-rose/10">
      <Link href={`/catalogo/${product.slug}`} className="relative block aspect-square overflow-hidden bg-blush-mid">
        {product.image ? (
          <>
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover transition duration-300 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <span className="absolute left-3 top-3 z-10 rounded-full bg-plum-deep/70 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-blush backdrop-blur">
              {CATEGORY_LABELS[product.category]}
            </span>
          </>
        ) : (
          <BeautyPlaceholder
            label={product.name}
            gradient={product.gradient}
            badge={CATEGORY_LABELS[product.category]}
          />
        )}
      </Link>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-blush-soft px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-plum-muted">
            {product.brand}
          </span>
          <span className="rounded-full bg-rose/10 px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-rose">
            Consultar disponibilidad
          </span>
        </div>
        <h3 className="font-serif text-lg text-plum">
          <Link href={`/catalogo/${product.slug}`} className="hover:text-rose">
            {product.name}
          </Link>
        </h3>
        <p className="line-clamp-2 flex-1 text-sm text-mauve">{product.shortDescription}</p>
        <p className="text-xs text-plum-muted">Precio por WhatsApp / teléfono</p>
        <div className="flex flex-col gap-2 pt-1 sm:flex-row">
          <a
            href={waLink(WA_MESSAGES.product(product.name, product.variants[0]))}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center rounded-full bg-[#25D366] px-4 py-2.5 text-xs font-medium text-white transition hover:bg-[#1ebe57]"
          >
            Pedir por WhatsApp
          </a>
          <a
            href={telLink()}
            className="inline-flex items-center justify-center rounded-full border border-plum/25 px-4 py-2.5 text-xs text-plum transition hover:border-rose hover:text-rose"
          >
            Llamar {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </article>
  );
}
