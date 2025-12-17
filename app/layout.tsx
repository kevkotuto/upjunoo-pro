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
    default: "UPJUNOO PRO | Taxi, Livraison & Location en Afrique",
    template: "%s | UPJUNOO PRO",
  },
  description:
    "Reservez un taxi, envoyez des colis ou louez un vehicule en quelques clics. UPJUNOO PRO, votre solution de mobilite dans 15 pays africains.",
  keywords: [
    "taxi",
    "taxi Abidjan",
    "taxi Afrique",
    "livraison",
    "livraison colis",
    "livraison express",
    "location voiture",
    "location vehicule",
    "Afrique",
    "Cote d'Ivoire",
    "Senegal",
    "Cameroun",
    "transport",
    "VTC",
    "chauffeur",
    "UPJUNOO",
    "mobilite",
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
    title: "UPJUNOO PRO | Taxi, Livraison & Location en Afrique",
    description:
      "Reservez un taxi, envoyez des colis ou louez un vehicule en quelques clics. Disponible dans 15 pays africains.",
    url: "https://upjunoo.pro",
    siteName: "UPJUNOO PRO",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "UPJUNOO PRO | Taxi, Livraison & Location en Afrique",
    description:
      "Reservez un taxi, envoyez des colis ou louez un vehicule en quelques clics.",
    creator: "@upjunoo",
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
