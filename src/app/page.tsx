import Image from "next/image";
import Link from "next/link";
import CallButton from "@/components/CallButton";
import ProductCard from "@/components/ProductCard";
import WhatsAppButton from "@/components/WhatsAppButton";
import { catalogCategories, getFeatured } from "@/data/products";
import {
  ADDRESS_LINE,
  ADDRESS_REF,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  PHONE_DISPLAY,
  WA_MESSAGES,
} from "@/lib/contact";

export default function HomePage() {
  const featured = getFeatured().slice(0, 6);

  return (
    <>
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 80% 0%, rgba(196,91,122,0.22), transparent), radial-gradient(ellipse 45% 40% at 5% 90%, rgba(74,28,58,0.1), transparent)",
          }}
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-rose">
              Mexicali · Baja California · México
            </p>
            <h1 className="mt-4 font-serif text-4xl leading-tight text-plum sm:text-5xl lg:text-6xl">
              Perfumería y cosméticos en Mexicali
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-mauve sm:text-lg">
              Fragancias, maquillaje y más en un solo lugar. Catálogo claro, local en Justo Sierra y
              el mismo número de siempre para pedir.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-plum-soft">
              {[
                "Perfumería, cosméticos y maquillaje en Mexicali",
                "Local en Justo Sierra #1551, Independencia",
                "Envíos a todo México, entregas en punto y apartado",
                "Pagos: tarjetas, efectivo y transferencia",
                `Pedidos al ${PHONE_DISPLAY} o por WhatsApp`,
              ].map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="text-rose">✦</span> {b}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/catalogo"
                className="inline-flex items-center justify-center rounded-full bg-plum px-6 py-3 text-sm font-medium text-cream shadow-lg shadow-plum/25 transition hover:bg-plum-soft"
              >
                Ver catálogo
              </Link>
              <WhatsAppButton message={WA_MESSAGES.home}>WhatsApp</WhatsAppButton>
              <CallButton variant="ghost">Llamar {PHONE_DISPLAY}</CallButton>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md">
            <div className="aspect-square overflow-hidden rounded-[2rem] border border-blush-deep/50 bg-white shadow-2xl shadow-plum/15">
              <Image
                src="/products/01.jpg"
                alt="HN Cosméticos y Perfumería Mexicali"
                width={640}
                height={640}
                className="h-full w-full object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-4 -left-2 rounded-2xl border border-blush-deep bg-white/95 px-4 py-3 shadow-xl sm:left-4">
              <p className="text-[10px] uppercase tracking-[0.2em] text-rose">Instagram</p>
              <p className="font-serif text-lg text-plum">~35k · @{INSTAGRAM_HANDLE}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-blush-deep/40 bg-blush-soft">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
          {[
            "+35.000 personas nos siguen en Instagram",
            "Local en Mexicali — Justo Sierra 1551",
            "Envíos a todo México",
            "Aceptamos tarjetas de crédito y débito",
          ].map((t) => (
            <p key={t} className="text-center text-sm font-medium text-plum-soft sm:text-left">
              {t}
            </p>
          ))}
        </div>
      </section>

      <section className="bg-plum-deep text-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="font-serif text-3xl sm:text-4xl">Tu perfumería y cosméticos en Mexicali</h2>
          <p className="mt-5 max-w-3xl text-cream/75 leading-relaxed">
            En HN Cosméticos y Perfumería armamos lo que buscas: fragancias, cosméticos, bases y
            maquillaje, y también calzado original. Nos encuentras en Instagram como @
            {INSTAGRAM_HANDLE} y en el local de Justo Sierra. La web es para que veas el catálogo
            sin pelearte con el feed — y nos escribas o llames cuando quieras pedir.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <WhatsAppButton message={WA_MESSAGES.home}>Escribir por WhatsApp</WhatsAppButton>
            <Link
              href="/ubicacion"
              className="inline-flex items-center justify-center rounded-full border border-cream/30 px-6 py-3 text-sm text-cream transition hover:border-cream hover:bg-white/5"
            >
              Cómo llegar
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="font-serif text-3xl text-plum sm:text-4xl">¿Qué estás buscando?</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ...catalogCategories,
            {
              href: "/catalogo",
              title: "Accesorios",
              text: "Líneas como Marc Jacobs y lentes Michael Kors cuando hay existencia",
              cta: "Consultar en catálogo",
            },
            {
              href: "/envios-y-politicas",
              title: "Apartado",
              text: "Separa tu mercancía y págalo a tu ritmo",
              cta: "Ver envíos y apartado",
            },
          ].map((c) => (
            <Link
              key={c.title}
              href={c.href}
              className="group rounded-2xl border border-blush-deep/50 bg-white p-6 shadow-sm transition hover:border-rose/40 hover:shadow-md"
            >
              <h3 className="font-serif text-xl text-plum group-hover:text-rose">{c.title}</h3>
              <p className="mt-2 text-sm text-mauve">{c.text}</p>
              <span className="mt-4 inline-block text-sm font-medium text-rose">{c.cta} →</span>
            </Link>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-mauve">
          Precio y stock: consultar por WhatsApp o teléfono
        </p>
        <div className="mt-4 text-center">
          <Link href="/catalogo" className="text-sm font-medium text-rose hover:underline">
            Ver todo el catálogo
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
        <h2 className="font-serif text-3xl text-plum sm:text-4xl">Novedades y lo más pedido</h2>
        <p className="mt-3 text-mauve">
          Consultar disponibilidad · Llamar {PHONE_DISPLAY}
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      <section className="border-y border-blush-deep/40 bg-blush-soft">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="font-serif text-3xl text-plum">Visítanos en Mexicali</h2>
          <p className="mt-4 max-w-2xl text-mauve">
            {ADDRESS_LINE} — {ADDRESS_REF}.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/ubicacion"
              className="inline-flex rounded-full bg-plum px-6 py-3 text-sm font-medium text-cream hover:bg-plum-soft"
            >
              Ver ubicación
            </Link>
            <CallButton variant="ghost">Llamar {PHONE_DISPLAY}</CallButton>
          </div>
        </div>
      </section>

      <section className="border-y border-blush-deep/30 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-12 sm:flex-row sm:items-center sm:px-6">
          <div>
            <h2 className="font-serif text-2xl text-plum">Síguenos en Instagram</h2>
            <p className="mt-2 text-mauve">@{INSTAGRAM_HANDLE}</p>
          </div>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full bg-gradient-to-r from-rose to-plum px-6 py-3 text-sm font-medium text-cream"
          >
            Ver Instagram
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 sm:py-20">
        <h2 className="font-serif text-3xl text-plum sm:text-4xl">
          ¿Buscas un perfume o un tono en específico?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-mauve">
          Escríbenos o llámanos. Te confirmamos disponibilidad y te armamos el pedido.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <WhatsAppButton message={WA_MESSAGES.home}>WhatsApp</WhatsAppButton>
          <CallButton>Llamar {PHONE_DISPLAY}</CallButton>
          <Link
            href="/catalogo"
            className="inline-flex items-center rounded-full border border-plum/20 px-6 py-3 text-sm text-plum-soft hover:border-rose hover:text-rose"
          >
            Ver catálogo
          </Link>
        </div>
      </section>
    </>
  );
}
