import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import {
  FileText,
  Car,
  Package,
  Key,
  Truck,
  CreditCard,
  AlertTriangle,
  RefreshCw,
  CheckCircle,
  UserCheck,
  Scale,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { PageHero } from "@/components/sections/page-hero";
import Link from "next/link";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("cguPage");
  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
  };
}

export default async function CGUPage() {
  const t = await getTranslations("cguPage");

  const services = [
    { icon: Car, textKey: "access.services.vtc" },
    { icon: Package, textKey: "access.services.delivery" },
    { icon: Key, textKey: "access.services.rental" },
    { icon: Truck, textKey: "access.services.freight" },
  ];

  const responsibilities = [
    "responsibilities.items.platform",
    "responsibilities.items.partners",
    "responsibilities.items.user",
  ];

  const obligations = [
    "obligations.items.accurate",
    "obligations.items.legal",
    "obligations.items.respect",
    "obligations.items.report",
    "obligations.items.security",
  ];

  const paymentMethods = [
    "payments.methods.mobileMoney",
    "payments.methods.cash",
    "payments.methods.wallet",
  ];

  const suspensionReasons = [
    "suspension.reasons.fraud",
    "suspension.reasons.violation",
    "suspension.reasons.abuse",
    "suspension.reasons.behavior",
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
          <div className="bg-muted/50 rounded-2xl p-6 lg:p-8">
            <p className="text-muted-foreground">{t("intro.text")}</p>
          </div>
        </div>
      </section>

      {/* Access to Services */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <Card className="border-border/50 mb-8">
              <CardContent className="p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="font-bold text-xl">{t("access.title")}</h2>
                </div>
                <p className="text-muted-foreground mb-6">
                  {t("access.description")}
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {services.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-4 rounded-xl bg-muted/50"
                    >
                      <item.icon className="h-5 w-5 text-primary" />
                      <span className="text-sm">{t(item.textKey)}</span>
                    </div>
                  ))}
                </div>
                <p className="text-muted-foreground mt-6 text-sm">
                  {t("access.note")}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Responsibilities */}
          <div>
            <Card className="border-border/50 mb-8">
              <CardContent className="p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Scale className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="font-bold text-xl">
                    {t("responsibilities.title")}
                  </h2>
                </div>
                <ul className="space-y-4">
                  {responsibilities.map((item, index) => (
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

          {/* User Obligations */}
          <div>
            <Card className="border-border/50 mb-8">
              <CardContent className="p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <UserCheck className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="font-bold text-xl">{t("obligations.title")}</h2>
                </div>
                <ul className="space-y-4">
                  {obligations.map((item, index) => (
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

          {/* Payments */}
          <div>
            <Card className="border-border/50 mb-8">
              <CardContent className="p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <CreditCard className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="font-bold text-xl">{t("payments.title")}</h2>
                </div>
                <p className="text-muted-foreground mb-4">
                  {t("payments.description")}
                </p>
                <ul className="space-y-2 mb-4">
                  {paymentMethods.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      {t(item)}
                    </li>
                  ))}
                </ul>
                <p className="text-muted-foreground text-sm">
                  {t("payments.note")}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Suspension */}
          <div>
            <Card className="border-border/50 mb-8">
              <CardContent className="p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center">
                    <AlertTriangle className="h-6 w-6 text-orange-500" />
                  </div>
                  <h2 className="font-bold text-xl">{t("suspension.title")}</h2>
                </div>
                <p className="text-muted-foreground mb-4">
                  {t("suspension.description")}
                </p>
                <ul className="space-y-2">
                  {suspensionReasons.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <CheckCircle className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                      {t(item)}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Evolution */}
          <div>
            <Card className="border-border/50">
              <CardContent className="p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <RefreshCw className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="font-bold text-xl">{t("evolution.title")}</h2>
                </div>
                <p className="text-muted-foreground">{t("evolution.text")}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">{t("related.title")}</h2>
            <p className="text-muted-foreground mb-8">
              {t("related.description")}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/confidentialite"
                className="px-6 py-3 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
              >
                {t("related.links.privacy")}
              </Link>
              <Link
                href="/faq"
                className="px-6 py-3 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
              >
                {t("related.links.faq")}
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                {t("related.links.contact")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
