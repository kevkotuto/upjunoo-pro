import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "UPJUNOO PRO - Passager & Chauffeur",
    short_name: "UPJUNOO PRO",
    description:
      "La mobilité intelligente, simple et inclusive. VTC/Taxi, livraison express, location de véhicules et fret urbain réunis sur une plateforme unique.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    orientation: "portrait",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    categories: ["transportation", "lifestyle", "business"],
    lang: "fr",
  };
}
