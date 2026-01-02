import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import {
  FileText,
  Shield,
  Cookie,
  Lock,
  Car,
  Package,
  Key,
  Truck,
  CreditCard,
  AlertTriangle,
  RefreshCw,
  CheckCircle,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { PageHero } from "@/components/sections/page-hero";
import type { LucideIcon } from "lucide-react";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("termsPage");
  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
  };
}

interface Section {
  id: string;
  icon: LucideIcon;
  titleKey: string;
  contentType: "privacy" | "cookies" | "security" | "conditions" | "responsibilities" | "payments" | "suspension" | "evolution";
}

export default async function ConditionsPage() {
  const t = await getTranslations("termsPage");

  const sections: Section[] = [
    {
      id: "confidentialite",
      icon: Shield,
      titleKey: "sections.privacy.title",
      contentType: "privacy",
    },
    {
      id: "cookies",
      icon: Cookie,
      titleKey: "sections.cookies.title",
      contentType: "cookies",
    },
    {
      id: "securite",
      icon: Lock,
      titleKey: "sections.security.title",
      contentType: "security",
    },
    {
      id: "conditions",
      icon: FileText,
      titleKey: "sections.conditions.title",
      contentType: "conditions",
    },
    {
      id: "responsabilites",
      icon: AlertTriangle,
      titleKey: "sections.responsibilities.title",
      contentType: "responsibilities",
    },
    {
      id: "paiements",
      icon: CreditCard,
      titleKey: "sections.payments.title",
      contentType: "payments",
    },
    {
      id: "suspension",
      icon: AlertTriangle,
      titleKey: "sections.suspension.title",
      contentType: "suspension",
    },
    {
      id: "evolution",
      icon: RefreshCw,
      titleKey: "sections.evolution.title",
      contentType: "evolution",
    },
  ];

  const privacyDataItems = [
    "sections.privacy.data.identification",
    "sections.privacy.data.location",
    "sections.privacy.data.professional",
    "sections.privacy.data.payment",
    "sections.privacy.data.technical",
  ];

  const privacyUsageItems = [
    "sections.privacy.usage.improve",
    "sections.privacy.usage.security",
    "sections.privacy.usage.payments",
    "sections.privacy.usage.statistics",
  ];

  const cookieItems = [
    "sections.cookies.items.experience",
    "sections.cookies.items.analytics",
    "sections.cookies.items.security",
  ];

  const conditionServices = [
    { icon: Car, textKey: "sections.conditions.services.vtc" },
    { icon: Package, textKey: "sections.conditions.services.delivery" },
    { icon: Key, textKey: "sections.conditions.services.rental" },
    { icon: Truck, textKey: "sections.conditions.services.freight" },
  ];

  const responsibilityItems = [
    "sections.responsibilities.items.platform",
    "sections.responsibilities.items.partners",
    "sections.responsibilities.items.user",
  ];

  const renderSectionContent = (section: Section) => {
    switch (section.contentType) {
      case "privacy":
        return (
          <>
            <p className="text-muted-foreground mb-4">
              {t("sections.privacy.intro")}
            </p>
            <h4 className="font-semibold text-lg mt-6 mb-3">
              {t("sections.privacy.dataTitle")}
            </h4>
            <p className="text-muted-foreground mb-3">
              {t("sections.privacy.dataDescription")}
            </p>
            <ul className="space-y-2 mb-6">
              {privacyDataItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-muted-foreground"
                >
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  {t(item)}
                </li>
              ))}
            </ul>
            <h4 className="font-semibold text-lg mt-6 mb-3">
              {t("sections.privacy.usageTitle")}
            </h4>
            <p className="text-muted-foreground mb-3">
              {t("sections.privacy.usageDescription")}
            </p>
            <ul className="space-y-2">
              {privacyUsageItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-muted-foreground"
                >
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  {t(item)}
                </li>
              ))}
            </ul>
          </>
        );
      case "cookies":
        return (
          <>
            <p className="text-muted-foreground mb-4">
              {t("sections.cookies.description")}
            </p>
            <ul className="space-y-2 mb-6">
              {cookieItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-muted-foreground"
                >
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  {t(item)}
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground">{t("sections.cookies.note")}</p>
          </>
        );
      case "security":
        return (
          <p className="text-muted-foreground">{t("sections.security.text")}</p>
        );
      case "conditions":
        return (
          <>
            <p className="text-muted-foreground mb-6">
              {t("sections.conditions.intro")}
            </p>
            <h4 className="font-semibold text-lg mb-3">
              {t("sections.conditions.accessTitle")}
            </h4>
            <p className="text-muted-foreground mb-3">
              {t("sections.conditions.accessDescription")}
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {conditionServices.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-lg bg-muted/50"
                >
                  <item.icon className="h-5 w-5 text-primary" />
                  <span className="text-sm">{t(item.textKey)}</span>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground">
              {t("sections.conditions.note")}
            </p>
          </>
        );
      case "responsibilities":
        return (
          <ul className="space-y-3">
            {responsibilityItems.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-2 text-muted-foreground"
              >
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                {t(item)}
              </li>
            ))}
          </ul>
        );
      case "payments":
        return (
          <p className="text-muted-foreground">{t("sections.payments.text")}</p>
        );
      case "suspension":
        return (
          <p className="text-muted-foreground">
            {t("sections.suspension.text")}
          </p>
        );
      case "evolution":
        return (
          <p className="text-muted-foreground">{t("sections.evolution.text")}</p>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <PageHero
        badge={t("hero.badge")}
        title={t("hero.title")}
        highlight={t("hero.highlight")}
        description={t("hero.description")}
      />

      {/* Table of Contents */}
      <section className="py-12 border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="font-semibold text-lg mb-4">{t("toc.title")}</h2>
            <div className="grid sm:grid-cols-2 gap-2">
              {sections.map((section, index) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="flex items-center gap-2 p-2 rounded-lg hover:bg-muted transition-colors text-sm"
                >
                  <span className="text-primary font-medium">{index + 1}.</span>
                  {t(section.titleKey)}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {sections.map((section) => (
              <div key={section.id} id={section.id}>
                <Card className="border-border/50">
                  <CardContent className="p-6 lg:p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <section.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-bold text-xl">
                        {t(section.titleKey)}
                      </h3>
                    </div>
                    {renderSectionContent(section)}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">{t("contact.title")}</h2>
            <p className="text-muted-foreground mb-6">
              {t("contact.description")}
            </p>
            <a
              href="mailto:contact@upjunoopro.com"
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
            >
              contact@upjunoopro.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
