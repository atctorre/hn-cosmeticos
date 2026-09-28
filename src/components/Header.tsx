"use client";

import Link from "next/link";
import { useState } from "react";
import {
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  PHONE_DISPLAY,
  WA_MESSAGES,
  telLink,
  waLink,
} from "@/lib/contact";

const nav = [
  { href: "/catalogo", label: "Catálogo" },
  { href: "/fragancias", label: "Fragancias" },
  { href: "/maquillaje", label: "Maquillaje" },
  { href: "/calzado", label: "Calzado" },
  { href: "/ubicacion", label: "Ubicación" },
  { href: "/envios-y-politicas", label: "Envíos" },
  { href: "/faq", label: "FAQ" },
  { href: "/contacto", label: "Contacto" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-blush-deep/40 bg-blush/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-3 shrink-0" onClick={() => setOpen(false)}>
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-plum text-sm font-semibold tracking-wide text-blush ring-2 ring-rose/30">
            HN
          </span>
          <span>
            <span className="block font-serif text-lg tracking-wide text-plum sm:text-xl">
              HN <span className="text-rose">Cosméticos</span>
            </span>
            <span className="block text-[10px] uppercase tracking-[0.2em] text-mauve">
              Mexicali · Justo Sierra
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-4 lg:flex" aria-label="Principal">
          {nav.slice(0, 6).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-plum-muted transition hover:text-rose"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={telLink()}
            className="hidden rounded-full border border-blush-deep px-3 py-1.5 text-xs text-plum-soft transition hover:border-rose hover:text-rose sm:inline-flex"
          >
            {PHONE_DISPLAY}
          </a>
          <a
            href={waLink(WA_MESSAGES.home)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-[#25D366] px-3 py-1.5 text-xs font-medium text-white transition hover:bg-[#1ebe57] sm:px-4 sm:text-sm"
          >
            WhatsApp
          </a>
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-plum/15 text-plum lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((v) => !v)}
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-nav" className="border-t border-blush-mid bg-blush px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-2" aria-label="Móvil">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-2 py-2 text-plum-soft hover:bg-blush-soft hover:text-rose"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/nosotros" className="rounded-lg px-2 py-2 text-plum-soft hover:bg-blush-soft" onClick={() => setOpen(false)}>
              Nosotros
            </Link>
            <Link href="/como-pedir" className="rounded-lg px-2 py-2 text-plum-soft hover:bg-blush-soft" onClick={() => setOpen(false)}>
              Cómo pedir
            </Link>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="rounded-lg px-2 py-2 text-rose" onClick={() => setOpen(false)}>{`Instagram @${INSTAGRAM_HANDLE}`}</a>
          </nav>
        </div>
      )}
    </header>
  );
}
