import Link from "next/link";
import CallButton from "@/components/CallButton";
import { PHONE_DISPLAY } from "@/lib/contact";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <h1 className="font-serif text-4xl text-plum">404</h1>
      <p className="mt-4 text-mauve">
        Esta página no existe. Ve al catálogo o llama al {PHONE_DISPLAY}.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/catalogo"
          className="inline-flex rounded-full bg-plum px-6 py-3 text-sm font-medium text-cream hover:bg-plum-soft"
        >
          Ver catálogo
        </Link>
        <CallButton variant="ghost">Llamar {PHONE_DISPLAY}</CallButton>
      </div>
    </div>
  );
}
