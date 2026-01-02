import { getTranslations } from "next-intl/server";
import { Metadata } from "next";
import { OffresPartenairesContent } from "./offres-partenaires-content";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("offresPartenairesPage");

  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
  };
}

export default async function OffresPartenairesPage() {
  const t = await getTranslations("offresPartenairesPage");

  const offres = [
    {
      title: t("offres.franchises.title"),
      description: t("offres.franchises.description"),
      href: "/offres-partenaires/franchises",
      features: [
        t("offres.franchises.features.exclusivity"),
        t("offres.franchises.features.training"),
        t("offres.franchises.features.support"),
        t("offres.franchises.features.tools"),
      ],
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80",
      color: "from-primary to-primary/80",
      iconType: "store" as const,
    },
    {
      title: t("offres.partenaires.title"),
      description: t("offres.partenaires.description"),
      href: "/offres-partenaires/partenaires",
      features: [
        t("offres.partenaires.features.enterprise"),
        t("offres.partenaires.features.b2b"),
        t("offres.partenaires.features.api"),
        t("offres.partenaires.features.loyalty"),
      ],
      image: "/images/banniere/personne-sourriante-16-9.jpg",
      color: "from-[#046d7a] to-primary",
      iconType: "handshake" as const,
    },
    {
      title: t("offres.chauffeurs.title"),
      description: t("offres.chauffeurs.description"),
      href: "/offres-partenaires/chauffeurs",
      features: [
        t("offres.chauffeurs.features.revenue"),
        t("offres.chauffeurs.features.flexible"),
        t("offres.chauffeurs.features.app"),
        t("offres.chauffeurs.features.support"),
      ],
      image: "/images/banniere/main-volant-upjunoo-1-1.jpg",
      color: "from-yellow-500 to-yellow-400",
      iconType: "usercheck" as const,
    },
  ];

  const stats = [
    { value: "50+", label: t("stats.franchises") },
    { value: "1200+", label: t("stats.drivers") },
    { value: "15", label: t("stats.countries") },
    { value: "98%", label: t("stats.satisfaction") },
  ];

  const translations = {
    hero: {
      badge: t("hero.badge"),
      title: t("hero.title"),
      highlight: t("hero.highlight"),
      description: t("hero.description"),
    },
    learnMore: t("learnMore"),
    cta: {
      title: t("cta.title"),
      description: t("cta.description"),
      button: t("cta.button"),
    },
  };

  return (
    <OffresPartenairesContent
      offres={offres}
      stats={stats}
      translations={translations}
    />
  );
}
