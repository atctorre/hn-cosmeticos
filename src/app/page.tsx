import Link from "next/link";
import CallButton from "@/components/CallButton";
import ProductCard from "@/components/ProductCard";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getFeatured } from "@/data/products";
import { ADDRESS_LINE, PHONE_DISPLAY, WA_MESSAGES } from "@/lib/contact";

export default function HomePage() {
  const featured = getFeatured().slice(0, 6);
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <p className="text-xs uppercase tracking-[0.3em] text-rose">Mexicali · Baja California</p>
        <h1 className="mt-4 font-serif text-4xl text-plum sm:text-5xl">Perfumería y cosméticos en Mexicali</h1>
        <p className="mt-5 max-w-xl text-mauve">Fragancias, maquillaje y más. Local en Justo Sierra #1551 y el mismo número de siempre.</p>
        <ul className="mt-6 space-y-2 text-sm text-plum-soft">
          <li>✦ Local en Justo Sierra #1551, Independencia</li>
          <li>✦ Envíos a todo México, entregas en punto y apartado</li>
          <li>✦ Pagos: tarjetas, efectivo y transferencia</li>
          <li>✦ Pedidos al {PHONE_DISPLAY} o por WhatsApp</li>
          <li>✦ Accesorios Marc Jacobs / lentes MK cuando hay stock</li>
        </ul>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/catalogo" className="inline-flex rounded-full bg-plum px-6 py-3 text-sm font-medium text-cream">Ver catálogo</Link>
          <WhatsAppButton message={WA_MESSAGES.home}>WhatsApp</WhatsAppButton>
          <CallButton variant="ghost">Llamar {PHONE_DISPLAY}</CallButton>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <h2 className="font-serif text-3xl text-plum">Novedades</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => <ProductCard key={p.slug} product={p} />)}
        </div>
      </section>
      <section className="border-y border-blush-deep/40 bg-blush-soft">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="font-serif text-3xl text-plum">Visítanos en Mexicali</h2>
          <p className="mt-4 text-mauve">{ADDRESS_LINE}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/ubicacion" className="inline-flex rounded-full bg-plum px-6 py-3 text-sm font-medium text-cream">Ver ubicación</Link>
            <CallButton variant="ghost">Llamar {PHONE_DISPLAY}</CallButton>
          </div>
        </div>
      </section>
    </>
  );
}
