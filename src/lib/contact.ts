export const WHATSAPP_NUMBER = "526862340805";
export const PHONE_DISPLAY = "686 2340805";
export const PHONE_TEL = "+526862340805";
export const INSTAGRAM_HANDLE = "hncosmeticosyperfumeria";
export const INSTAGRAM_URL = "https://instagram.com/hncosmeticosyperfumeria";
export const SITE_NAME = "HN Cosméticos y Perfumería";
export const SITE_URL = "https://hn-cosmeticos.vercel.app";
export const CITY = "Mexicali, Baja California";
export const ADDRESS_LINE = "Justo Sierra #1551, Independencia, C.P. 21290";
export const ADDRESS_REF =
  "Plaza Casino Caliente (por Benito Juárez), junto a Farmacia Benavides";
export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Justo+Sierra+1551+Independencia+Mexicali+21290";
export const MAPS_EMBED =
  "https://maps.google.com/maps?q=Justo%20Sierra%201551%2C%20Independencia%2C%2021290%20Mexicali%2C%20B.C.&t=&z=16&ie=UTF8&iwloc=&output=embed";
export const AGENCY_NAME = "AgendadoSV · soluciones digitales";
export const AGENCY_URL = "https://agendadosv.com/";

export function waLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function telLink(): string {
  return `tel:${PHONE_TEL}`;
}

export const WA_MESSAGES = {
  home: "Hola HN, vi su página web y quiero consultar un producto",
  floating: "Hola HN, vi su página web y quiero consultar un producto",
  catalog: "Hola HN, vi su catálogo web y quiero consultar un producto.",
  fragancias: "Hola HN, busco un perfume. ¿Me ayudan a elegir?",
  maquillaje: "Hola HN, busco maquillaje. ¿Me orientan con tono/disponibilidad?",
  cosmeticos: "Hola HN, busco cosméticos. ¿Qué tienen disponible?",
  calzado: "Hola HN, busco calzado. ¿Qué arrivals tienen?",
  skincare: "Hola HN, busco skincare. ¿Me asesoran?",
  shipping: "Hola HN, quiero preguntar por envíos / apartado / entrega.",
  location: "Hola HN, quiero saber cómo llegar al local en Justo Sierra.",
  product: (name: string, variant?: string) =>
    variant
      ? `Hola HN, me interesa ${name} (${variant}). Vi su página y quiero confirmar disponibilidad.`
      : `Hola HN, me interesa ${name}. Vi su página y quiero confirmar disponibilidad.`,
} as const;
