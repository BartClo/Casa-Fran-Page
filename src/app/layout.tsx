import type { Metadata } from "next";
import { Montserrat, Geist_Mono } from "next/font/google"; // Use Montserrat as requested
import "./globals.css";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { Preloader } from "@/components/layout/Preloader";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {

  metadataBase: new URL("http://localhost:3000"),
  title: {
    default: "Casa Fran | Banquetería y Eventos en Doñihue y Coltauco",
    template: "%s | Casa Fran",
  },
  description: "Organización integral de matrimonios, graduaciones y eventos corporativos en la VI Región. Contamos con centros de eventos propios: Refugio de Naela y Oficina Doñihue. Servicios All Inclusive.",
  keywords: ["banquetería doñihue", "eventos coltauco", "matrimonios rancagua", "arriendo local eventos", "graduaciones sexta región", "casa fran"],
  openGraph: {
    title: "Casa Fran: Planificamos tu Evento Soñado",
    description: "Matrimonios, Graduaciones y Eventos de Empresa. ¡Nos encargamos de todo! Cotiza online.",
    images: ["/images/hero-bg.jpg"],
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Casa Fran",
  "image": "/images/hero-bg.jpg",
  "description": "Organización integral de matrimonios, graduaciones y eventos corporativos en la VI Región.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Av. Rancagua #372",
    "addressLocality": "Doñihue",
    "addressRegion": "VI Región",
    "addressCountry": "CL"
  },
  "telephone": "+569 57371147",
  "priceRange": "$$"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth scroll-pt-24">
      <body
        className={`${montserrat.variable} ${geistMono.variable} antialiased font-sans bg-background text-foreground`}
      >
        <Preloader />
        {children}
        <WhatsAppButton />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
