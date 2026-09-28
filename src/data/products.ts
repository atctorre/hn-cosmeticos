export type Category =
  | "fragancias"
  | "cosmeticos"
  | "maquillaje"
  | "calzado"
  | "skincare";
export type Gender = "dama" | "caballero" | "unisex";

export interface Product {
  slug: string;
  name: string;
  brand: string;
  category: Category;
  gender: Gender;
  variants: string[];
  shortDescription: string;
  details: string;
  featured?: boolean;
  gradient: string;
}

export const CATEGORY_LABELS: Record<Category, string> = {
  fragancias: "Fragancias",
  cosmeticos: "Cosméticos",
  maquillaje: "Maquillaje",
  calzado: "Calzado",
  skincare: "Skincare",
};

export const GENDER_LABELS: Record<Gender, string> = {
  dama: "Dama",
  caballero: "Caballero",
  unisex: "Unisex",
};

export const products: Product[] = [
  {
    slug: "fragancia-floral-dama",
    name: "Fragancia floral dama",
    brand: "Perfumería HN",
    category: "fragancias",
    gender: "dama",
    variants: ["30 ml", "50 ml", "100 ml"],
    shortDescription:
      "Perfume floral para ella. Consulta presentación y disponibilidad al pedir.",
    details: "Notas y marca según existencia. Ideal para el día a día en Mexicali.",
    featured: true,
    gradient: "from-rose-100 via-pink-300 to-fuchsia-800",
  },
  {
    slug: "fragancia-fresca-caballero",
    name: "Fragancia fresca caballero",
    brand: "Perfumería HN",
    category: "fragancias",
    gender: "caballero",
    variants: ["50 ml", "100 ml"],
    shortDescription:
      "Aroma fresco para él. Confirma ml y stock por WhatsApp o teléfono.",
    details: "Presentación según existencia. Te orientamos si buscas algo más intenso.",
    featured: true,
    gradient: "from-slate-200 via-indigo-300 to-slate-800",
  },
  {
    slug: "set-fragancia-duo",
    name: "Set fragancia dúo",
    brand: "Perfumería HN",
    category: "fragancias",
    gender: "unisex",
    variants: ["Set"],
    shortDescription: "Combo para regalo o uso diario. Consulta contenido al pedir.",
    details: "Armamos el set según lo que hay en local.",
    featured: true,
    gradient: "from-amber-100 via-rose-200 to-purple-800",
  },
  {
    slug: "base-maquillaje",
    name: "Base de maquillaje",
    brand: "Maquillaje HN",
    category: "maquillaje",
    gender: "dama",
    variants: ["Tono claro", "Tono medio", "Tono oscuro"],
    shortDescription:
      "Bases disponibles — te ayudamos a elegir tono por chat o en el local.",
    details: "Acabado y tonos sujetos a stock. Pregunta por bases disponibles.",
    featured: true,
    gradient: "from-orange-100 via-rose-200 to-stone-700",
  },
  {
    slug: "labial-creme",
    name: "Labial crème",
    brand: "Maquillaje HN",
    category: "maquillaje",
    gender: "dama",
    variants: ["Nude", "Rosa", "Berry"],
    shortDescription: "Labial cremoso. Consulta tono y disponibilidad.",
    details: "Tonos sujetos a existencia en Justo Sierra.",
    featured: true,
    gradient: "from-rose-200 via-red-300 to-rose-900",
  },
  {
    slug: "paleta-sombras",
    name: "Paleta de sombras",
    brand: "Maquillaje HN",
    category: "maquillaje",
    gender: "dama",
    variants: ["Neutros"],
    shortDescription: "Sombras para look diario o de noche. Confirma stock al pedir.",
    details: "Consulta otras paletas en camino o en local.",
    gradient: "from-stone-200 via-amber-200 to-stone-700",
  },
  {
    slug: "cosmetico-esencial-diario",
    name: "Esencial cosmético diario",
    brand: "Cosméticos HN",
    category: "cosmeticos",
    gender: "unisex",
    variants: ["Presentación estándar"],
    shortDescription: "Lo esencial del día a día. Consulta opciones por WhatsApp.",
    details: "Variedad según arrivals en Mexicali.",
    featured: true,
    gradient: "from-pink-100 via-rose-200 to-pink-800",
  },
  {
    slug: "limpiador-facial",
    name: "Limpiador facial",
    brand: "Skincare HN",
    category: "skincare",
    gender: "unisex",
    variants: ["150 ml"],
    shortDescription: "Limpieza diaria. Pregúntanos qué conviene para tu piel.",
    details: "Parte de rutina básica — confirma presentación.",
    featured: true,
    gradient: "from-sky-100 via-teal-200 to-cyan-800",
  },
  {
    slug: "hidratante-dia",
    name: "Hidratante de día",
    brand: "Skincare HN",
    category: "skincare",
    gender: "unisex",
    variants: ["50 ml"],
    shortDescription: "Hidratación ligera para el clima de Mexicali.",
    details: "Textura y stock se confirman al pedir.",
    gradient: "from-emerald-100 via-teal-200 to-emerald-800",
  },
  {
    slug: "calzado-arrival-sneakers",
    name: "Sneakers arrival",
    brand: "Calzado HN",
    category: "calzado",
    gender: "unisex",
    variants: ["Consulta talla"],
    shortDescription:
      "Arrivals de calzado original cuando hay stock. Pregunta tallas disponibles.",
    details: "Incluye temporadas con New Balance y otras líneas según llegada.",
    featured: true,
    gradient: "from-stone-100 via-neutral-300 to-stone-800",
  },
  {
    slug: "calzado-casual",
    name: "Calzado casual",
    brand: "Calzado HN",
    category: "calzado",
    gender: "unisex",
    variants: ["Consulta talla"],
    shortDescription: "Calzado original — confirma modelo y talla al 686 2340805.",
    details: "Inventario rota; te confirmamos al momento.",
    gradient: "from-amber-50 via-stone-300 to-amber-900",
  },
  {
    slug: "kit-apartado-favorito",
    name: "Aparta tu favorito",
    brand: "HN",
    category: "cosmeticos",
    gender: "unisex",
    variants: ["Apartado"],
    shortDescription:
      "Separa tu mercancía con sistema de apartado y págalo a tu ritmo.",
    details: "Pregunta condiciones de apartado al pedir por WhatsApp o en local.",
    featured: true,
    gradient: "from-fuchsia-100 via-pink-300 to-purple-900",
  },
];

export const catalogCategories = [
  {
    href: "/fragancias",
    title: "Perfumería / fragancias",
    text: "Para ella y para él",
    cta: "Ver fragancias",
  },
  {
    href: "/maquillaje",
    title: "Maquillaje y bases",
    text: "Tonos y acabados a consultar",
    cta: "Ver maquillaje",
  },
  {
    href: "/catalogo?categoria=cosmeticos",
    title: "Cosméticos",
    text: "Lo esencial del día a día",
    cta: "Ver cosméticos",
  },
  {
    href: "/calzado",
    title: "Calzado",
    text: "Arrivals y originales cuando hay stock",
    cta: "Ver calzado",
  },
] as const;

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getByCategory(category: Category): Product[] {
  return products.filter((p) => p.category === category);
}

export function getFeatured(): Product[] {
  return products.filter((p) => p.featured);
}
