import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { ActualitesContent } from "./actualites-content";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("news");

  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
    openGraph: {
      title: t("metadata.title"),
      description: t("metadata.description"),
    },
  };
}

export default async function ActualitesPage() {
  const t = await getTranslations("news");

  const translations = {
    hero: {
      badge: t("hero.badge"),
      title: t("hero.title"),
      highlight: t("hero.highlight"),
      description: t("hero.description"),
    },
    featured: {
      badge: t("featured.badge"),
      title: t("featured.title"),
      readTime: t("featured.readTime"),
      readArticle: t("featured.readArticle"),
    },
    all: {
      title: t("all.title"),
      categoryAll: t("all.categoryAll"),
    },
    newsletter: {
      title: t("newsletter.title"),
      description: t("newsletter.description"),
      placeholder: t("newsletter.placeholder"),
      subscribe: t("newsletter.subscribe"),
      success: t("newsletter.success"),
    },
  };

  return <ActualitesContent translations={translations} />;
}
