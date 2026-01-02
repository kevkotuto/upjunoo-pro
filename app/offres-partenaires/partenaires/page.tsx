import { getTranslations } from "next-intl/server";
import { Metadata } from "next";
import { PartenairesContent } from "./partenaires-content";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("partenairesPage");

  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
  };
}

export default async function PartenairesPage() {
  const t = await getTranslations("partenairesPage");

  const partnerTypes = [
    {
      title: t("partnerTypes.enterprises.title"),
      description: t("partnerTypes.enterprises.description"),
      iconType: "building" as const,
      benefits: [
        t("partnerTypes.enterprises.benefits.rates"),
        t("partnerTypes.enterprises.benefits.billing"),
        t("partnerTypes.enterprises.benefits.reporting"),
        t("partnerTypes.enterprises.benefits.manager"),
      ],
    },
    {
      title: t("partnerTypes.commerce.title"),
      description: t("partnerTypes.commerce.description"),
      iconType: "briefcase" as const,
      benefits: [
        t("partnerTypes.commerce.benefits.integration"),
        t("partnerTypes.commerce.benefits.delivery"),
        t("partnerTypes.commerce.benefits.tracking"),
        t("partnerTypes.commerce.benefits.commission"),
      ],
    },
    {
      title: t("partnerTypes.hotels.title"),
      description: t("partnerTypes.hotels.description"),
      iconType: "globe" as const,
      benefits: [
        t("partnerTypes.hotels.benefits.vip"),
        t("partnerTypes.hotels.benefits.booking"),
        t("partnerTypes.hotels.benefits.drivers"),
        t("partnerTypes.hotels.benefits.languages"),
      ],
    },
    {
      title: t("partnerTypes.events.title"),
      description: t("partnerTypes.events.description"),
      iconType: "users" as const,
      benefits: [
        t("partnerTypes.events.benefits.fleet"),
        t("partnerTypes.events.benefits.coordination"),
        t("partnerTypes.events.benefits.rates"),
        t("partnerTypes.events.benefits.support"),
      ],
    },
  ];

  const advantages = [
    {
      iconType: "trending" as const,
      title: t("advantages.growth.title"),
      description: t("advantages.growth.description"),
    },
    {
      iconType: "shield" as const,
      title: t("advantages.reliability.title"),
      description: t("advantages.reliability.description"),
    },
    {
      iconType: "zap" as const,
      title: t("advantages.integration.title"),
      description: t("advantages.integration.description"),
    },
    {
      iconType: "hearthandshake" as const,
      title: t("advantages.support.title"),
      description: t("advantages.support.description"),
    },
  ];

  const steps = [
    {
      number: "01",
      title: t("steps.contact.title"),
      description: t("steps.contact.description"),
    },
    {
      number: "02",
      title: t("steps.study.title"),
      description: t("steps.study.description"),
    },
    {
      number: "03",
      title: t("steps.setup.title"),
      description: t("steps.setup.description"),
    },
    {
      number: "04",
      title: t("steps.launch.title"),
      description: t("steps.launch.description"),
    },
  ];

  const stats = [
    { value: t("stats.partners.value"), label: t("stats.partners.label") },
    { value: t("stats.satisfaction.value"), label: t("stats.satisfaction.label") },
    { value: t("stats.support.value"), label: t("stats.support.label") },
  ];

  const translations = {
    hero: {
      badge: t("hero.badge"),
      title: t("hero.title"),
      highlight: t("hero.highlight"),
      description: t("hero.description"),
    },
    buttons: {
      becomePartner: t("buttons.becomePartner"),
      seeOffers: t("buttons.seeOffers"),
    },
    sections: {
      partnerTypes: {
        badge: t("sections.partnerTypes.badge"),
        title: t("sections.partnerTypes.title"),
        description: t("sections.partnerTypes.description"),
      },
      advantages: {
        badge: t("sections.advantages.badge"),
        title: t("sections.advantages.title"),
      },
      process: {
        badge: t("sections.process.badge"),
        title: t("sections.process.title"),
      },
      contact: {
        title: t("sections.contact.title"),
        description: t("sections.contact.description"),
        contactForm: t("sections.contact.contactForm"),
      },
    },
  };

  return (
    <PartenairesContent
      partnerTypes={partnerTypes}
      advantages={advantages}
      steps={steps}
      stats={stats}
      translations={translations}
    />
  );
}
