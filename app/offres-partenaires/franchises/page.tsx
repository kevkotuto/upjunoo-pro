import { getTranslations } from "next-intl/server";
import { Metadata } from "next";
import { FranchisesContent } from "./franchises-content";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("franchisesPage");

  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
  };
}

export default async function FranchisesPage() {
  const t = await getTranslations("franchisesPage");

  const marketPotential = [
    { iconType: "trending" as const, text: t("marketPotential.growth") },
    { iconType: "users" as const, text: t("marketPotential.demand") },
    { iconType: "target" as const, text: t("marketPotential.opportunity") },
  ];

  const franchiseeProfile = [
    { iconType: "briefcase" as const, text: t("profile.entrepreneur") },
    { iconType: "building" as const, text: t("profile.fleetOwner") },
    { iconType: "usercheck" as const, text: t("profile.manager") },
    { iconType: "users" as const, text: t("profile.teamManager") },
    { iconType: "network" as const, text: t("profile.network") },
    { iconType: "award" as const, text: t("profile.quality") },
  ];

  const upjunooOffers = [
    {
      title: t("offers.turnkey.title"),
      iconType: "rocket" as const,
      items: [
        t("offers.turnkey.item1"),
        t("offers.turnkey.item2"),
        t("offers.turnkey.item3"),
      ],
    },
    {
      title: t("offers.brand.title"),
      iconType: "award" as const,
      items: [
        t("offers.brand.item1"),
        t("offers.brand.item2"),
        t("offers.brand.item3"),
      ],
    },
    {
      title: t("offers.support.title"),
      iconType: "headphones" as const,
      items: [
        t("offers.support.item1"),
        t("offers.support.item2"),
        t("offers.support.item3"),
        t("offers.support.item4"),
      ],
    },
    {
      title: t("offers.contract.title"),
      iconType: "shield" as const,
      items: [
        t("offers.contract.item1"),
        t("offers.contract.item2"),
        t("offers.contract.item3"),
      ],
    },
  ];

  const responsibilities = [
    t("responsibilities.recruit"),
    t("responsibilities.vehicles"),
    t("responsibilities.operations"),
    t("responsibilities.marketing"),
    t("responsibilities.partnerships"),
  ];

  const accessConditions = [
    { iconType: "filecheck" as const, text: t("accessConditions.contract") },
    { iconType: "award" as const, text: t("accessConditions.charter") },
    { iconType: "settings" as const, text: t("accessConditions.training") },
    { iconType: "barchart" as const, text: t("accessConditions.reporting") },
  ];

  const testimonials = [
    {
      quote: t("testimonials.testimonial1.quote"),
      author: t("testimonials.testimonial1.author"),
      role: t("testimonials.testimonial1.role"),
    },
    {
      quote: t("testimonials.testimonial2.quote"),
      author: t("testimonials.testimonial2.author"),
      role: t("testimonials.testimonial2.role"),
    },
  ];

  const investmentTable = {
    headers: {
      position: t("investment.headers.position"),
      detail: t("investment.headers.detail"),
    },
    rows: [
      { position: t("investment.contribution.label"), detail: t("investment.contribution.value") },
      { position: t("investment.license.label"), detail: t("investment.license.value") },
      { position: t("investment.starterPack.label"), detail: t("investment.starterPack.value") },
      { position: t("investment.profitability.label"), detail: t("investment.profitability.value") },
      { position: t("investment.revenue.label"), detail: t("investment.revenue.value") },
    ],
  };

  const translations = {
    hero: {
      badge: t("hero.badge"),
      title: t("hero.title"),
      highlight: t("hero.highlight"),
      description: t("hero.description"),
    },
    buttons: {
      becomeFranchise: t("buttons.becomeFranchise"),
      learnMore: t("buttons.learnMore"),
    },
    sections: {
      whyBecome: {
        badge: t("sections.whyBecome.badge"),
        title: t("sections.whyBecome.title"),
        intro: t("sections.whyBecome.intro"),
        description: t("sections.whyBecome.description"),
        marketTitle: t("sections.whyBecome.marketTitle"),
      },
      profile: {
        badge: t("sections.profile.badge"),
        title: t("sections.profile.title"),
        description: t("sections.profile.description"),
        youAre: t("sections.profile.youAre"),
      },
      offers: {
        badge: t("sections.offers.badge"),
        title: t("sections.offers.title"),
      },
      responsibilities: {
        badge: t("sections.responsibilities.badge"),
        title: t("sections.responsibilities.title"),
        description: t("sections.responsibilities.description"),
        mainMissions: t("sections.responsibilities.mainMissions"),
      },
      investment: {
        badge: t("sections.investment.badge"),
        title: t("sections.investment.title"),
      },
      conditions: {
        badge: t("sections.conditions.badge"),
        title: t("sections.conditions.title"),
      },
      testimonials: {
        badge: t("sections.testimonials.badge"),
        title: t("sections.testimonials.title"),
      },
      contact: {
        title: t("sections.contact.title"),
        description: t("sections.contact.description"),
        availability: t("sections.contact.availability"),
        quote: t("sections.contact.quote"),
      },
    },
  };

  return (
    <FranchisesContent
      marketPotential={marketPotential}
      franchiseeProfile={franchiseeProfile}
      upjunooOffers={upjunooOffers}
      responsibilities={responsibilities}
      accessConditions={accessConditions}
      testimonials={testimonials}
      investmentTable={investmentTable}
      translations={translations}
    />
  );
}
