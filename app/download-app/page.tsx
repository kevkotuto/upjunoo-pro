import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { DownloadAppContent } from "./download-app-content";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("downloadApp");

  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
    openGraph: {
      title: t("metadata.title"),
      description: t("metadata.description"),
    },
  };
}

export default async function DownloadAppPage() {
  const t = await getTranslations("downloadApp");

  const translations = {
    title: t("title"),
    subtitle: t("subtitle"),
    apps: {
      rider: {
        name: t("apps.rider.name"),
        subtitle: t("apps.rider.subtitle"),
        description: t("apps.rider.description"),
        features: [
          t("apps.rider.features.taxi"),
          t("apps.rider.features.delivery"),
          t("apps.rider.features.rental"),
        ],
      },
      driver: {
        name: t("apps.driver.name"),
        subtitle: t("apps.driver.subtitle"),
        description: t("apps.driver.description"),
        features: [
          t("apps.driver.features.rides"),
          t("apps.driver.features.earnings"),
          t("apps.driver.features.dashboard"),
        ],
      },
    },
    comingSoon: t("comingSoon"),
    downloadPlayStore: t("downloadPlayStore"),
    footer: t("footer"),
  };

  return <DownloadAppContent translations={translations} />;
}
