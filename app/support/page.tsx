import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import {
  Headphones,
  Mail,
  MessageSquare,
  Clock,
  CheckCircle,
  HelpCircle,
  FileText,
  AlertTriangle,
  CreditCard,
  Car,
  Package,
  Key,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/sections/page-hero";
import Link from "next/link";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("supportPage");
  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
  };
}

export default async function SupportPage() {
  const t = await getTranslations("supportPage");

  const supportChannels = [
    {
      icon: Mail,
      titleKey: "channels.email.title",
      descriptionKey: "channels.email.description",
      action: "contact@upjunoopro.com",
      href: "mailto:contact@upjunoopro.com",
    },
    {
      icon: MessageSquare,
      titleKey: "channels.chat.title",
      descriptionKey: "channels.chat.description",
      actionKey: "channels.chat.action",
      href: "/download-app",
    },
    {
      icon: HelpCircle,
      titleKey: "channels.faq.title",
      descriptionKey: "channels.faq.description",
      actionKey: "channels.faq.action",
      href: "/faq",
    },
  ];

  const commonIssues = [
    {
      icon: Car,
      titleKey: "issues.ride.title",
      descriptionKey: "issues.ride.description",
      href: "/contact?motif=course",
    },
    {
      icon: CreditCard,
      titleKey: "issues.payment.title",
      descriptionKey: "issues.payment.description",
      href: "/contact?motif=paiement",
    },
    {
      icon: Package,
      titleKey: "issues.delivery.title",
      descriptionKey: "issues.delivery.description",
      href: "/contact?motif=livraison",
    },
    {
      icon: Key,
      titleKey: "issues.rental.title",
      descriptionKey: "issues.rental.description",
      href: "/contact?motif=location",
    },
    {
      icon: AlertTriangle,
      titleKey: "issues.incident.title",
      descriptionKey: "issues.incident.description",
      href: "/contact?motif=incident",
    },
    {
      icon: FileText,
      titleKey: "issues.invoice.title",
      descriptionKey: "issues.invoice.description",
      href: "/contact?motif=facture",
    },
  ];

  const supportFeatures = [
    {
      icon: Clock,
      titleKey: "features.available.title",
      descriptionKey: "features.available.description",
    },
    {
      icon: CheckCircle,
      titleKey: "features.fast.title",
      descriptionKey: "features.fast.description",
    },
    {
      icon: Headphones,
      titleKey: "features.multilingual.title",
      descriptionKey: "features.multilingual.description",
    },
  ];

  return (
    <>
      <PageHero
        badge={t("hero.badge")}
        title={t("hero.title")}
        highlight={t("hero.highlight")}
        description={t("hero.description")}
        backgroundImage="/images/banniere/personne-sourriante-16-9.jpg"
      />

      {/* Support Features */}
      <section className="py-12 border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <div className="grid sm:grid-cols-3 gap-6">
              {supportFeatures.map((feature) => (
                <div
                  key={feature.titleKey}
                  className="flex items-center gap-4 p-4 rounded-xl bg-muted/50"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{t(feature.titleKey)}</h3>
                    <p className="text-sm text-muted-foreground">
                      {t(feature.descriptionKey)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              {t("channelsSection.title")}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("channelsSection.description")}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {supportChannels.map((channel) => (
              <div key={channel.titleKey}>
                <Card className="h-full border-border/50 hover:border-primary/30 transition-colors">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <channel.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">
                      {t(channel.titleKey)}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {t(channel.descriptionKey)}
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link href={channel.href}>
                        {channel.action || t(channel.actionKey!)}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Issues */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              {t("issuesSection.title")}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("issuesSection.description")}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {commonIssues.map((issue) => (
              <div key={issue.titleKey}>
                <Link href={issue.href}>
                  <Card className="h-full border-border/50 hover:border-primary/30 hover:bg-card transition-all cursor-pointer group">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          <issue.icon className="h-5 w-5 text-primary group-hover:text-primary-foreground" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold mb-1">
                            {t(issue.titleKey)}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {t(issue.descriptionKey)}
                          </p>
                        </div>
                        <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form CTA */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-br from-primary to-primary/80 p-8 lg:p-12 text-center overflow-hidden">
            <div className="relative text-primary-foreground">
              <Headphones className="h-16 w-16 mx-auto mb-6 opacity-90" />
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                {t("cta.title")}
              </h2>
              <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
                {t("cta.description")}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-background text-foreground hover:bg-background/90"
                >
                  <Link href="/contact">{t("cta.contactButton")}</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                >
                  <a href="mailto:contact@upjunoopro.com">
                    {t("cta.emailButton")}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
