import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { ImplantationsContent } from "./implantations-content";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("locations");

  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
    openGraph: {
      title: t("metadata.title"),
      description: t("metadata.description"),
    },
  };
}

export default async function ImplantationsPage() {
  const t = await getTranslations("locations");

  const translations = {
    hero: {
      badge: t("hero.badge"),
      title: t("hero.title"),
      highlight: t("hero.highlight"),
      description: t("hero.description"),
    },
    stats: {
      countries: t("stats.countries"),
      cities: t("stats.cities"),
      users: t("stats.users"),
      franchises: t("stats.franchises"),
    },
    legend: {
      available: t("legend.available"),
    },
    regions: {
      badge: t("regions.badge"),
      title: t("regions.title"),
      titleHighlight: t("regions.titleHighlight"),
      description: t("regions.description"),
      westAfrica: t("regions.westAfrica"),
      centralAfrica: t("regions.centralAfrica"),
    },
    deployment: {
      note: t("deployment.note"),
    },
    cta: {
      title: t("cta.title"),
      description: t("cta.description"),
      button: t("cta.button"),
    },
  };

  return <ImplantationsContent translations={translations} />;
}
