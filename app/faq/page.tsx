import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import {
  HelpCircle,
  CreditCard,
  Users,
  MapPin,
  Package,
  Headphones,
  Car,
  Key,
  Smartphone,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { PageHero } from "@/components/sections/page-hero";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("faqPage");
  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
  };
}

interface FAQCategory {
  icon: LucideIcon;
  titleKey: string;
  id: string;
  faqs: {
    questionKey: string;
    answerKey: string;
  }[];
}

export default async function FAQPage() {
  const t = await getTranslations("faqPage");

  const faqCategories: FAQCategory[] = [
    {
      icon: Smartphone,
      titleKey: "categories.application.title",
      id: "application",
      faqs: [
        {
          questionKey: "categories.application.faqs.download.question",
          answerKey: "categories.application.faqs.download.answer",
        },
        {
          questionKey: "categories.application.faqs.free.question",
          answerKey: "categories.application.faqs.free.answer",
        },
        {
          questionKey: "categories.application.faqs.account.question",
          answerKey: "categories.application.faqs.account.answer",
        },
      ],
    },
    {
      icon: CreditCard,
      titleKey: "categories.payment.title",
      id: "paiement",
      faqs: [
        {
          questionKey: "categories.payment.faqs.methods.question",
          answerKey: "categories.payment.faqs.methods.answer",
        },
        {
          questionKey: "categories.payment.faqs.calculation.question",
          answerKey: "categories.payment.faqs.calculation.answer",
        },
        {
          questionKey: "categories.payment.faqs.invoice.question",
          answerKey: "categories.payment.faqs.invoice.answer",
        },
      ],
    },
    {
      icon: Car,
      titleKey: "categories.rides.title",
      id: "trajets",
      faqs: [
        {
          questionKey: "categories.rides.faqs.book.question",
          answerKey: "categories.rides.faqs.book.answer",
        },
        {
          questionKey: "categories.rides.faqs.cancel.question",
          answerKey: "categories.rides.faqs.cancel.answer",
        },
        {
          questionKey: "categories.rides.faqs.rate.question",
          answerKey: "categories.rides.faqs.rate.answer",
        },
      ],
    },
    {
      icon: Package,
      titleKey: "categories.delivery.title",
      id: "livraison",
      faqs: [
        {
          questionKey: "categories.delivery.faqs.how.question",
          answerKey: "categories.delivery.faqs.how.answer",
        },
        {
          questionKey: "categories.delivery.faqs.types.question",
          answerKey: "categories.delivery.faqs.types.answer",
        },
        {
          questionKey: "categories.delivery.faqs.track.question",
          answerKey: "categories.delivery.faqs.track.answer",
        },
      ],
    },
    {
      icon: Key,
      titleKey: "categories.rental.title",
      id: "location",
      faqs: [
        {
          questionKey: "categories.rental.faqs.how.question",
          answerKey: "categories.rental.faqs.how.answer",
        },
        {
          questionKey: "categories.rental.faqs.documents.question",
          answerKey: "categories.rental.faqs.documents.answer",
        },
        {
          questionKey: "categories.rental.faqs.modify.question",
          answerKey: "categories.rental.faqs.modify.answer",
        },
      ],
    },
    {
      icon: MapPin,
      titleKey: "categories.availability.title",
      id: "disponibilite",
      faqs: [
        {
          questionKey: "categories.availability.faqs.city.question",
          answerKey: "categories.availability.faqs.city.answer",
        },
        {
          questionKey: "categories.availability.faqs.check.question",
          answerKey: "categories.availability.faqs.check.answer",
        },
      ],
    },
    {
      icon: Users,
      titleKey: "categories.partners.title",
      id: "partenaires",
      faqs: [
        {
          questionKey: "categories.partners.faqs.driver.question",
          answerKey: "categories.partners.faqs.driver.answer",
        },
        {
          questionKey: "categories.partners.faqs.franchise.question",
          answerKey: "categories.partners.faqs.franchise.answer",
        },
      ],
    },
    {
      icon: Headphones,
      titleKey: "categories.support.title",
      id: "support",
      faqs: [
        {
          questionKey: "categories.support.faqs.contact.question",
          answerKey: "categories.support.faqs.contact.answer",
        },
        {
          questionKey: "categories.support.faqs.problem.question",
          answerKey: "categories.support.faqs.problem.answer",
        },
      ],
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

      {/* Quick Links */}
      <section className="py-12 border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
              {faqCategories.map((category) => (
                <a
                  key={category.id}
                  href={`#${category.id}`}
                  className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-muted transition-colors text-center"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <category.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-xs font-medium">
                    {t(category.titleKey)}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {faqCategories.map((category) => (
              <div key={category.id} id={category.id}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="font-bold text-xl">{t(category.titleKey)}</h2>
                </div>

                <Accordion type="single" collapsible className="space-y-3">
                  {category.faqs.map((faq, index) => (
                    <div key={index}>
                      <AccordionItem
                        value={`${category.id}-${index}`}
                        className="bg-card border border-border/50 rounded-xl px-6 data-[state=open]:border-primary/30"
                      >
                        <AccordionTrigger className="text-left font-medium hover:no-underline py-4 text-sm sm:text-base">
                          {t(faq.questionKey)}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground pb-4 text-sm sm:text-base">
                          {t(faq.answerKey)}
                        </AccordionContent>
                      </AccordionItem>
                    </div>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Need Help */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <HelpCircle className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">{t("needHelp.title")}</h2>
            <p className="text-muted-foreground mb-8">
              {t("needHelp.description")}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/support"
                className="px-6 py-3 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                {t("needHelp.supportButton")}
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
              >
                {t("needHelp.contactButton")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
