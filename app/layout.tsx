import type { Metadata } from "next";
import { DM_Sans, Cormorant_Garamond } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
 
// ─── Fuentes ─────────────────────────────────────────────────────────────────
 
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});
 
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});
 
// ─── Metadata ────────────────────────────────────────────────────────────────
 
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://epicus.com.mx";
 
export const metadata: Metadata = {
  title: {
    default: "EPICUS — Asesoría Inmobiliaria en Monterrey",
    template: "%s | EPICUS",
  },
  description:
    "Asesoría e inteligencia inmobiliaria en Monterrey y área metropolitana. Acceso a 95 proyectos activos y 4,480 unidades disponibles.",
  metadataBase: new URL(siteUrl),
 
  openGraph: {
    title: "EPICUS — Asesoría Inmobiliaria en Monterrey",
    description:
      "Asesoría e inteligencia inmobiliaria en Monterrey y área metropolitana.",
    url: siteUrl,
    siteName: "EPICUS",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "EPICUS — Asesoría Inmobiliaria",
      },
    ],
  },
 
  twitter: {
    card: "summary_large_image",
    title: "EPICUS — Asesoría Inmobiliaria en Monterrey",
    description:
      "Asesoría e inteligencia inmobiliaria en Monterrey y área metropolitana.",
    images: ["/og-image.png"],
  },
 
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
 
  icons: {
    icon: "/icons/favicon.ico",
    shortcut: "/icons/favicon-32x32.png",
    apple: "/icons/apple-touch-icon.png",
  },
};
 
// ─── Layout ──────────────────────────────────────────────────────────────────
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${dmSans.variable} ${cormorant.variable}`}>
      <body className="font-sans antialiased bg-white text-ink">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}