import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import {
  Shield,
  Cookie,
  Lock,
  Eye,
  Database,
  UserCheck,
  Bell,
  Trash2,
  CheckCircle,
  Mail,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { PageHero } from "@/components/sections/page-hero";
import Link from "next/link";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("privacyPage");
  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
  };
}

export default async function ConfidentialitePage() {
  const t = await getTranslations("privacyPage");

  const dataCollected = [
    {
      categoryKey: "dataCollected.categories.identification.title",
      items: [
        "dataCollected.categories.identification.items.name",
        "dataCollected.categories.identification.items.phone",
        "dataCollected.categories.identification.items.email",
      ],
    },
    {
      categoryKey: "dataCollected.categories.location.title",
      items: [
        "dataCollected.categories.location.items.trips",
        "dataCollected.categories.location.items.addresses",
        "dataCollected.categories.location.items.history",
      ],
    },
    {
      categoryKey: "dataCollected.categories.professional.title",
      items: [
        "dataCollected.categories.professional.items.drivers",
        "dataCollected.categories.professional.items.fleet",
        "dataCollected.categories.professional.items.partners",
      ],
    },
    {
      categoryKey: "dataCollected.categories.payment.title",
      items: [
        "dataCollected.categories.payment.items.transactions",
        "dataCollected.categories.payment.items.history",
      ],
    },
    {
      categoryKey: "dataCollected.categories.technical.title",
      items: [
        "dataCollected.categories.technical.items.cookies",
        "dataCollected.categories.technical.items.logs",
        "dataCollected.categories.technical.items.device",
      ],
    },
  ];

  const dataUsage = [
    "dataUsage.items.improve",
    "dataUsage.items.security",
    "dataUsage.items.payments",
    "dataUsage.items.statistics",
    "dataUsage.items.updates",
  ];

  const cookieUsage = [
    "cookies.usage.experience",
    "cookies.usage.analytics",
    "cookies.usage.security",
    "cookies.usage.preferences",
  ];

  const securityMeasures = [
    "security.measures.kyc",
    "security.measures.encryption",
    "security.measures.access",
    "security.measures.monitoring",
    "security.measures.backup",
  ];

  const userRights = [
    {
      icon: Eye,
      titleKey: "rights.access.title",
      descriptionKey: "rights.access.description",
    },
    {
      icon: UserCheck,
      titleKey: "rights.rectification.title",
      descriptionKey: "rights.rectification.description",
    },
    {
      icon: Trash2,
      titleKey: "rights.deletion.title",
      descriptionKey: "rights.deletion.description",
    },
    {
      icon: Bell,
      titleKey: "rights.opposition.title",
      descriptionKey: "rights.opposition.description",
    },
  ];

  return (
    <>
      <PageHero
        badge={t("hero.badge")}
        title={t("hero.title")}
        highlight={t("hero.highlight")}
        description={t("hero.description")}
      />

      {/* Introduction */}
      <section className="py-12 border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 lg:p-8">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="h-6 w-6 text-primary" />
              <h2 className="font-semibold text-lg">{t("commitment.title")}</h2>
            </div>
            <p className="text-muted-foreground">{t("commitment.text")}</p>
          </div>
        </div>
      </section>

      {/* Data Collected */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Database className="h-6 w-6 text-primary" />
              </div>
              <h2 className="font-bold text-2xl">{t("dataCollected.title")}</h2>
            </div>
            <p className="text-muted-foreground mb-8">
              {t("dataCollected.description")}
            </p>

            <div className="space-y-6">
              {dataCollected.map((category, index) => (
                <div key={index}>
                  <Card className="border-border/50">
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-3">
                        {t(category.categoryKey)}
                      </h3>
                      <ul className="space-y-2">
                        {category.items.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                          >
                            <CheckCircle className="h-4 w-4 text-primary" />
                            {t(item)}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Data Usage */}
          <div className="mb-12">
            <Card className="border-border/50">
              <CardContent className="p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Eye className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="font-bold text-xl">{t("dataUsage.title")}</h2>
                </div>
                <p className="text-muted-foreground mb-4">
                  {t("dataUsage.description")}
                </p>
                <ul className="space-y-3">
                  {dataUsage.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      {t(item)}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Cookies */}
          <div className="mb-12">
            <Card className="border-border/50">
              <CardContent className="p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Cookie className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="font-bold text-xl">{t("cookies.title")}</h2>
                </div>
                <p className="text-muted-foreground mb-4">
                  {t("cookies.description")}
                </p>
                <ul className="space-y-3 mb-6">
                  {cookieUsage.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      {t(item)}
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-muted-foreground bg-muted/50 p-4 rounded-lg">
                  {t("cookies.note")}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Security */}
          <div className="mb-12">
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Lock className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="font-bold text-xl">{t("security.title")}</h2>
                </div>
                <p className="text-muted-foreground mb-4">
                  {t("security.description")}
                </p>
                <ul className="space-y-3">
                  {securityMeasures.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      {t(item)}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* User Rights */}
          <div>
            <h2 className="font-bold text-2xl mb-6">{t("rights.title")}</h2>
            <p className="text-muted-foreground mb-8">
              {t("rights.description")}
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {userRights.map((right, index) => (
                <div key={index}>
                  <Card className="h-full border-border/50">
                    <CardContent className="p-6">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                        <right.icon className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-semibold mb-2">
                        {t(right.titleKey)}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {t(right.descriptionKey)}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">{t("contact.title")}</h2>
            <p className="text-muted-foreground mb-6">
              {t("contact.description")}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:contact@upjunoopro.com"
                className="px-6 py-3 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                contact@upjunoopro.com
              </a>
              <Link
                href="/cgu"
                className="px-6 py-3 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
              >
                {t("contact.links.cgu")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
