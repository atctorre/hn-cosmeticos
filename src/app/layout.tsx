import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import Header from "@/components/Header";
import "./globals.css";

const sans = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const serif = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hn-cosmeticos.vercel.app"),
  title: {
    default: "Perfumería y cosméticos en Mexicali | HN",
    template: "%s | HN Cosméticos",
  },
  description:
    "HN Cosméticos y Perfumería en Mexicali: fragancias, maquillaje y más. Justo Sierra 1551. Llama o escribe al 686 2340805.",
  openGraph: {
    type: "website",
    locale: "es_MX",
    siteName: "HN Cosméticos y Perfumería",
    title: "Perfumería y cosméticos en Mexicali | HN",
    description:
      "Fragancias, maquillaje y más en Mexicali. Justo Sierra 1551. Pedidos al 686 2340805.",
  },
  robots: { index: true, follow: true },
  keywords: [
    "perfumería Mexicali",
    "cosméticos Mexicali",
    "comprar perfume Mexicali",
    "maquillaje Mexicali",
    "fragancias Baja California",
    "HN Cosméticos Mexicali",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-MX" className={`${sans.variable} ${serif.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-blush font-sans text-ink">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
