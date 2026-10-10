import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "NGIMBI BUSINESS TRADING — Sourcing, Achat & Logistique Chine ➡️ RDC",
  description:
    "Votre partenaire de confiance pour le sourcing, l'achat, le contrôle qualité et la logistique en Chine vers la RDC (Kinshasa, Lubumbashi, Goma) et l'Afrique. Fret maritime & aérien, dédouanement sécurisé.",
  keywords: [
    "sourcing Chine",
    "import Chine RDC",
    "fret maritime Kinshasa",
    "dédouanement Matadi",
    "Guangzhou Yiwu Kinshasa",
    "NGIMBI BUSINESS TRADING",
  ],
  openGraph: {
    title: "NGIMBI BUSINESS TRADING 🇨🇳✈️🇨🇩",
    description:
      "Sourcing, achat et logistique en Chine vers la RDC & l'Afrique. Fiabilité, Sécurité, Rapidité.",
    type: "website",
    locale: "fr_FR",
  },
};

export const viewport: Viewport = {
  themeColor: "#3B2F2F",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${inter.variable} ${outfit.variable}`}>
      <body className="min-h-screen overflow-x-hidden">{children}</body>
    </html>
  );
}