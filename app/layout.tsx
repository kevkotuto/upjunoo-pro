import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components/layout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://upjunoo.pro"),
  title: {
    default: "UPJUNOO PRO | Mobilite & Logistique - Taxi, Livraison, Location, Fret",
    template: "%s | UPJUNOO PRO",
  },
  description:
    "La mobilite intelligente, simple et inclusive. VTC/Taxi, livraison express, location de vehicules et fret urbain reunis sur une plateforme unique. Disponible dans 15 pays africains.",
  keywords: [
    "taxi",
    "taxi Abidjan",
    "taxi Afrique",
    "VTC",
    "livraison",
    "livraison colis",
    "livraison express",
    "fret urbain",
    "fret peri-urbain",
    "location voiture",
    "location vehicule",
    "Afrique",
    "Cote d'Ivoire",
    "Senegal",
    "Cameroun",
    "transport",
    "chauffeur",
    "UPJUNOO",
    "mobilite",
    "logistique",
  ],
  authors: [{ name: "UPJUNOO", url: "https://upjunoo.pro" }],
  creator: "UPJUNOO",
  publisher: "UPJUNOO",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "UPJUNOO PRO | Mobilite & Logistique intelligente en Afrique",
    description:
      "La mobilite intelligente, simple et inclusive. VTC/Taxi, livraison express, location et fret urbain sur une plateforme unique. 15 pays africains.",
    url: "https://upjunoo.pro",
    siteName: "UPJUNOO PRO",
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "UPJUNOO PRO - Mobilite & Logistique en Afrique",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UPJUNOO PRO | Mobilite & Logistique intelligente",
    description:
      "VTC/Taxi, livraison express, location et fret urbain reunis sur une plateforme unique. Disponible dans 15 pays africains.",
    creator: "@upjunoo",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "votre-code-google",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
