import { getTranslations } from "next-intl/server";
import { Metadata } from "next";
import { ChauffeursContent } from "./chauffeurs-content";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("chauffeursPage");

  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
  };
}

export default async function ChauffeursPartenairesPage() {
  const t = await getTranslations("chauffeursPage");

  const structuredProcess = [
    { iconType: "usercheck" as const, text: t("structuredProcess.validateProfile") },
    { iconType: "car" as const, text: t("structuredProcess.provideVehicle") },
    { iconType: "shield" as const, text: t("structuredProcess.secureAccess") },
    { iconType: "trending" as const, text: t("structuredProcess.trackProgress") },
  ];

  const driverAdvantages = [
    {
      iconType: "creditcard" as const,
      title: t("advantages.revenue.title"),
      description: t("advantages.revenue.description"),
    },
    {
      iconType: "award" as const,
      title: t("advantages.bonus.title"),
      description: t("advantages.bonus.description"),
    },
    {
      iconType: "clock" as const,
      title: t("advantages.flexible.title"),
      description: t("advantages.flexible.description"),
    },
    {
      iconType: "smartphone" as const,
      title: t("advantages.app.title"),
      description: t("advantages.app.description"),
    },
    {
      iconType: "mappin" as const,
      title: t("advantages.coverage.title"),
      description: t("advantages.coverage.description"),
    },
  ];

  const validationConditions = [
    t("conditions.license"),
    t("conditions.id"),
    t("conditions.presentation"),
    t("conditions.driving"),
    t("conditions.smartphone"),
  ];

  const trainingTopics = [
    { iconType: "smartphone" as const, text: t("training.app") },
    { iconType: "users" as const, text: t("training.service") },
    { iconType: "shield" as const, text: t("training.safety") },
    { iconType: "headphones" as const, text: t("training.conflicts") },
  ];

  const howItWorks = [
    t("howItWorks.step1"),
    t("howItWorks.step2"),
    t("howItWorks.step3"),
    t("howItWorks.step4"),
    t("howItWorks.step5"),
    t("howItWorks.step6"),
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

  const stats = [
    { value: "+1 200", label: t("stats.activeDrivers") },
    { value: "+50 000", label: t("stats.monthlyTrips") },
    { value: "4.7/5", label: t("stats.averageRating") },
    { value: t("stats.variableValue"), label: t("stats.monthlyBonus") },
  ];

  const translations = {
    hero: {
      badge: t("hero.badge"),
      title: t("hero.title"),
      highlight: t("hero.highlight"),
      description: t("hero.description"),
    },
    buttons: {
      register: t("buttons.register"),
      seeAdvantages: t("buttons.seeAdvantages"),
    },
    sections: {
      whyJoin: {
        badge: t("sections.whyJoin.badge"),
        title: t("sections.whyJoin.title"),
        intro: t("sections.whyJoin.intro"),
        description: t("sections.whyJoin.description"),
        objective: t("sections.whyJoin.objective"),
      },
      process: {
        badge: t("sections.process.badge"),
        title: t("sections.process.title"),
        description: t("sections.process.description"),
      },
      advantages: {
        badge: t("sections.advantages.badge"),
        title: t("sections.advantages.title"),
      },
      conditions: {
        badge: t("sections.conditions.badge"),
        title: t("sections.conditions.title"),
      },
      training: {
        badge: t("sections.training.badge"),
        title: t("sections.training.title"),
        description: t("sections.training.description"),
        followUp: t("sections.training.followUp"),
      },
      howItWorks: {
        badge: t("sections.howItWorks.badge"),
        title: t("sections.howItWorks.title"),
      },
      testimonials: {
        badge: t("sections.testimonials.badge"),
        title: t("sections.testimonials.title"),
      },
      stats: {
        title: t("sections.stats.title"),
      },
      contact: {
        title: t("sections.contact.title"),
        description: t("sections.contact.description"),
        orPartner: t("sections.contact.orPartner"),
        quote: t("sections.contact.quote"),
        quoteDescription: t("sections.contact.quoteDescription"),
      },
    },
  };

  return (
    <ChauffeursContent
      structuredProcess={structuredProcess}
      driverAdvantages={driverAdvantages}
      validationConditions={validationConditions}
      trainingTopics={trainingTopics}
      howItWorks={howItWorks}
      testimonials={testimonials}
      stats={stats}
      translations={translations}
    />
  );
}
