import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { AProposContent } from "./a-propos-content";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("about");

  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
    openGraph: {
      title: t("metadata.title"),
      description: t("metadata.description"),
    },
  };
}

export default async function AProposPage() {
  const t = await getTranslations("about");

  const translations = {
    hero: {
      badge: t("hero.badge"),
      title: t("hero.title"),
      highlight: t("hero.highlight"),
      description: t("hero.description"),
    },
    intro: {
      badge: t("intro.badge"),
      title: t("intro.title"),
      titleHighlight: t("intro.titleHighlight"),
      paragraph1: t("intro.paragraph1"),
      paragraph1Highlight: t("intro.paragraph1Highlight"),
      paragraph2: t("intro.paragraph2"),
      paragraph3: t("intro.paragraph3"),
    },
    services: {
      badge: t("services.badge"),
      title: t("services.title"),
      titleHighlight: t("services.titleHighlight"),
      description: t("services.description"),
      items: {
        vtc: {
          title: t("services.items.vtc.title"),
          description: t("services.items.vtc.description"),
        },
        delivery: {
          title: t("services.items.delivery.title"),
          description: t("services.items.delivery.description"),
        },
        rental: {
          title: t("services.items.rental.title"),
          description: t("services.items.rental.description"),
        },
        freight: {
          title: t("services.items.freight.title"),
          description: t("services.items.freight.description"),
        },
      },
    },
    features: {
      badge: t("features.badge"),
      title: t("features.title"),
      titleHighlight: t("features.titleHighlight"),
      description: t("features.description"),
      items: {
        gps: {
          title: t("features.items.gps.title"),
          description: t("features.items.gps.description"),
        },
        proof: {
          title: t("features.items.proof.title"),
          description: t("features.items.proof.description"),
        },
        payment: {
          title: t("features.items.payment.title"),
          description: t("features.items.payment.description"),
        },
        dashboard: {
          title: t("features.items.dashboard.title"),
          description: t("features.items.dashboard.description"),
        },
      },
    },
    values: {
      badge: t("values.badge"),
      title: t("values.title"),
      titleHighlight: t("values.titleHighlight"),
      items: {
        inclusive: {
          title: t("values.items.inclusive.title"),
          description: t("values.items.inclusive.description"),
        },
        international: {
          title: t("values.items.international.title"),
          description: t("values.items.international.description"),
        },
        experience: {
          title: t("values.items.experience.title"),
          description: t("values.items.experience.description"),
        },
      },
    },
    mission: {
      title: t("mission.title"),
      description: t("mission.description"),
      descriptionHighlight: t("mission.descriptionHighlight"),
      cta: t("mission.cta"),
      stats: {
        countries: t("mission.stats.countries"),
        users: t("mission.stats.users"),
        ridesPerDay: t("mission.stats.ridesPerDay"),
        satisfaction: t("mission.stats.satisfaction"),
      },
    },
  };

  return <AProposContent translations={translations} />;
}
