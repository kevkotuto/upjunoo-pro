import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components/layout";
import { Toaster } from "sonner";
import GoogleAnalytics, { GTMNoScript } from "@/components/GoogleAnalytics";

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
    default: "UPJUNOO PRO | Mobilité & Logistique - Taxi, Livraison, Location, Fret",
    template: "%s | UPJUNOO PRO",
  },
  description:
    "La mobilité intelligente, simple et inclusive. VTC/Taxi, livraison express, location de véhicules et fret urbain réunis sur une plateforme unique. Solution internationale disponible dans plusieurs pays.",
  keywords: [
    "taxi",
    "VTC",
    "livraison",
    "livraison colis",
    "livraison express",
    "fret urbain",
    "fret peri-urbain",
    "location voiture",
    "location véhicule",
    "transport",
    "chauffeur",
    "UPJUNOO PRO",
    "mobilité",
    "logistique",
    "international",
  ],
  authors: [{ name: "UPJUNOO PRO", url: "https://upjunoo.pro" }],
  creator: "UPJUNOO PRO",
  publisher: "UPJUNOO PRO",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "UPJUNOO PRO | Mobilité & Logistique intelligente internationale",
    description:
      "La mobilité intelligente, simple et inclusive. VTC/Taxi, livraison express, location et fret urbain sur une plateforme unique. Solution internationale.",
    url: "https://upjunoo.pro",
    siteName: "UPJUNOO PRO",
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "UPJUNOO PRO - Mobilité & Logistique internationale",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UPJUNOO PRO | Mobilité & Logistique intelligente",
    description:
      "VTC/Taxi, livraison express, location et fret urbain réunis sur une plateforme unique. Solution internationale.",
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
      <head>
        <GoogleAnalytics />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <GTMNoScript />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
