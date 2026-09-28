import Link from "next/link";
import { ADDRESS_LINE, AGENCY_NAME, AGENCY_URL, CITY, INSTAGRAM_HANDLE, INSTAGRAM_URL, PHONE_DISPLAY, WA_MESSAGES, telLink, waLink } from "@/lib/contact";

const links = [
  { href: "/catalogo", label: "Catálogo" },
  { href: "/fragancias", label: "Fragancias" },
  { href: "/maquillaje", label: "Maquillaje" },
  { href: "/calzado", label: "Calzado" },
  { href: "/ubicacion", label: "Ubicación" },
  { href: "/envios-y-politicas", label: "Envíos" },
  { href: "/como-pedir", label: "Cómo pedir" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/faq", label: "FAQ" },
  { href: "/contacto", label: "Contacto" },
];

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-plum/20 bg-plum-deep text-cream/85">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-serif text-2xl text-cream">HN <span className="text-rose-soft">Cosméticos</span></p>
          <p className="mt-3 text-sm leading-relaxed text-cream/70">Perfumería y cosméticos en Mexicali. Catálogo claro y el mismo número de siempre.</p>
          <p className="mt-3 text-xs text-cream/50">+35 mil en Instagram · @{INSTAGRAM_HANDLE}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-rose-soft">Explorar</p>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {links.map((l) => (
              <li key={l.href}><Link href={l.href} className="hover:text-rose-soft">{l.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-rose-soft">Contacto</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li><a href={telLink()} className="hover:text-rose-soft">Tel. {PHONE_DISPLAY}</a></li>
            <li><a href={waLink(WA_MESSAGES.home)} target="_blank" rel="noopener noreferrer" className="hover:text-rose-soft">WhatsApp: {PHONE_DISPLAY}</a></li>
            <li><a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-rose-soft">Instagram: @{INSTAGRAM_HANDLE}</a></li>
            <li className="text-cream/70">HN Cosméticos · {ADDRESS_LINE}, {CITY}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5 py-4 text-center text-xs text-cream/40">
        <p>© {new Date().getFullYear()} HN Cosméticos y Perfumería · Mexicali, Baja California</p>
        <p className="mt-2">Sitio con <a href={AGENCY_URL} target="_blank" rel="noopener noreferrer" className="text-cream/55 hover:text-rose-soft">{AGENCY_NAME}</a></p>
      </div>
    </footer>
  );
}
