"use client";

import { motion } from "motion/react";
import {
  Handshake,
  Building2,
  Briefcase,
  Users,
  CheckCircle,
  ArrowRight,
  Mail,
  TrendingUp,
  Shield,
  Zap,
  Globe,
  HeartHandshake,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageHero } from "@/components/sections/page-hero";
import Link from "next/link";

type IconType = "building" | "briefcase" | "globe" | "users" | "trending" | "shield" | "zap" | "hearthandshake";

interface PartnerType {
  title: string;
  description: string;
  iconType: IconType;
  benefits: string[];
}

interface Advantage {
  iconType: IconType;
  title: string;
  description: string;
}

interface Step {
  number: string;
  title: string;
  description: string;
}

interface Stat {
  value: string;
  label: string;
}

interface Translations {
  hero: {
    badge: string;
    title: string;
    highlight: string;
    description: string;
  };
  buttons: {
    becomePartner: string;
    seeOffers: string;
  };
  sections: {
    partnerTypes: {
      badge: string;
      title: string;
      description: string;
    };
    advantages: {
      badge: string;
      title: string;
    };
    process: {
      badge: string;
      title: string;
    };
    contact: {
      title: string;
      description: string;
      contactForm: string;
    };
  };
}

interface PartenairesContentProps {
  partnerTypes: PartnerType[];
  advantages: Advantage[];
  steps: Step[];
  stats: Stat[];
  translations: Translations;
}

const iconMap = {
  building: Building2,
  briefcase: Briefcase,
  globe: Globe,
  users: Users,
  trending: TrendingUp,
  shield: Shield,
  zap: Zap,
  hearthandshake: HeartHandshake,
};

export function PartenairesContent({
  partnerTypes,
  advantages,
  steps,
  stats,
  translations,
}: PartenairesContentProps) {
  return (
    <>
      <PageHero
        badge={translations.hero.badge}
        title={translations.hero.title}
        highlight={translations.hero.highlight}
        description={translations.hero.description}
        backgroundImage="/images/banniere/personne-sourriante-16-9.jpg"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild className="gap-2">
            <Link href="#contact">
              <Handshake className="h-5 w-5" />
              {translations.buttons.becomePartner}
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="gap-2">
            <Link href="#types">
              {translations.buttons.seeOffers}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </PageHero>

      {/* Partner Types */}
      <section id="types" className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              {translations.sections.partnerTypes.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
              {translations.sections.partnerTypes.title}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {translations.sections.partnerTypes.description}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerTypes.map((type, index) => {
              const Icon = iconMap[type.iconType];
              return (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full border-border/50 hover:border-primary/30 transition-colors">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-bold text-lg mb-2">{type.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        {type.description}
                      </p>
                      <ul className="space-y-2">
                        {type.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              {translations.sections.advantages.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
              {translations.sections.advantages.title}
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => {
              const Icon = iconMap[advantage.iconType];
              return (
                <motion.div
                  key={advantage.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{advantage.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {advantage.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              {translations.sections.process.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
              {translations.sections.process.title}
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="text-5xl font-bold text-primary/10 mb-2">
                    {step.number}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 right-0 w-full h-0.5 bg-gradient-to-r from-primary/20 to-transparent transform translate-x-1/2" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl bg-gradient-to-br from-primary to-primary/80 p-8 lg:p-16 text-center overflow-hidden"
          >
            <div className="relative text-primary-foreground">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                {translations.sections.contact.title}
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
                {translations.sections.contact.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:contact@upjunoopro.com"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-background text-foreground font-medium hover:bg-background/90 transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  contact@upjunoopro.com
                </a>
                <Button
                  variant="secondary"
                  size="lg"
                  asChild
                  className="bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20"
                >
                  <Link href="/contact">{translations.sections.contact.contactForm}</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
