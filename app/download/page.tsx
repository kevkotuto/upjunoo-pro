import { headers } from "next/headers";
import { getTranslations } from "next-intl/server";
import { detectPlatform } from "@/lib/platform-detection";
import { DownloadContent } from "./download-content";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Télécharger l'application UPJUNOO PRO",
    description: "Téléchargez l'application UPJUNOO PRO pour passagers ou chauffeurs. Disponible sur iOS et Android.",
    openGraph: {
      title: "Télécharger UPJUNOO PRO",
      description: "Application de mobilité pour passagers et chauffeurs",
      images: ["/og-image.png"],
    },
    alternates: {
      canonical: "https://upjunoo.pro/download",
    },
  };
}

export default async function DownloadPage() {
  const headersList = headers();
  const userAgent = headersList.get('user-agent') || '';
  const platformInfo = detectPlatform(userAgent);

  const t = await getTranslations();

  return <DownloadContent platformInfo={platformInfo} translations={t} />;
}
