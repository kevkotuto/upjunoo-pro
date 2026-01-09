"use client";

import { motion } from "motion/react";
import {
  Clock,
  Smartphone,
  Shield,
  Headphones,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Car,
  UserCheck,
  Users,
  Award,
  BookOpen,
  Mail,
  Globe,
  Quote,
  CreditCard,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageHero } from "@/components/sections/page-hero";
import Link from "next/link";

type ProcessIconType = "usercheck" | "car" | "shield" | "trending";
type AdvantageIconType = "creditcard" | "award" | "clock" | "smartphone" | "mappin";
type TrainingIconType = "smartphone" | "users" | "shield" | "headphones";

interface ProcessItem {
  iconType: ProcessIconType;
  text: string;
}

interface AdvantageItem {
  iconType: AdvantageIconType;
  title: string;
  description: string;
}

interface TrainingItem {
  iconType: TrainingIconType;
  text: string;
}

interface Testimonial {
  quote: string;
  author: string;
  role: string;
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
    register: string;
    seeAdvantages: string;
  };
  sections: {
    whyJoin: {
      badge: string;
      title: string;
      intro: string;
      description: string;
      objective: string;
    };
    process: {
      badge: string;
      title: string;
      description: string;
    };
    advantages: {
      badge: string;
      title: string;
    };
    conditions: {
      badge: string;
      title: string;
    };
    training: {
      badge: string;
      title: string;
      description: string;
      followUp: string;
    };
    howItWorks: {
      badge: string;
      title: string;
    };
    testimonials: {
      badge: string;
      title: string;
    };
    stats: {
      title: string;
    };
    contact: {
      title: string;
      description: string;
      orPartner: string;
      quote: string;
      quoteDescription: string;
    };
  };
}

interface ChauffeursContentProps {
  structuredProcess: ProcessItem[];
  driverAdvantages: AdvantageItem[];
  validationConditions: string[];
  trainingTopics: TrainingItem[];
  howItWorks: string[];
  testimonials: Testimonial[];
  stats: Stat[];
  translations: Translations;
}

const processIconMap = {
  usercheck: UserCheck,
  car: Car,
  shield: Shield,
  trending: TrendingUp,
};

const advantageIconMap = {
  creditcard: CreditCard,
  award: Award,
  clock: Clock,
  smartphone: Smartphone,
  mappin: MapPin,
};

const trainingIconMap = {
  smartphone: Smartphone,
  users: Users,
  shield: Shield,
  headphones: Headphones,
};

export function ChauffeursContent({
  structuredProcess,
  driverAdvantages,
  validationConditions,
  trainingTopics,
  howItWorks,
  testimonials,
  stats,
  translations,
}: ChauffeursContentProps) {
  return (
    <>
      <PageHero
        badge={translations.hero.badge}
        title={translations.hero.title}
        highlight={translations.hero.highlight}
        description={translations.hero.description}
        backgroundImage="/images/banniere/main-volant-upjunoo-1-1.jpg"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild className="gap-2">
            <Link href="#contact">
              <UserCheck className="h-5 w-5" />
              {translations.buttons.register}
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="gap-2">
            <Link href="#benefits">
              {translations.buttons.seeAdvantages}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </PageHero>

      {/* Why join UPJUNOO PRO */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              {translations.sections.whyJoin.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-6">
              {translations.sections.whyJoin.title}
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-8 border border-border/50 mb-12"
            >
              <p className="text-lg text-center mb-6">
                <span className="font-semibold text-primary">UPJUNOO PRO</span>{" "}
                {translations.sections.whyJoin.intro}
              </p>
              <p className="text-muted-foreground text-center mb-4">
                {translations.sections.whyJoin.description}
              </p>
              <p className="text-center font-semibold text-primary">
                {translations.sections.whyJoin.objective}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Structured Process */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              {translations.sections.process.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-6">
              {translations.sections.process.title}
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              {translations.sections.process.description}
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-6">
            {structuredProcess.map((item, index) => {
              const Icon = processIconMap[item.iconType];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full border-border/50">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <p className="text-sm pt-2">{item.text}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Driver Advantages */}
      <section id="benefits" className="py-20 lg:py-28">
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

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {driverAdvantages.map((advantage, index) => {
              const Icon = advantageIconMap[advantage.iconType];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full border-border/50">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-lg mb-1">
                        {advantage.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {advantage.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Validation Conditions */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              {translations.sections.conditions.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
              {translations.sections.conditions.title}
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Card className="border-primary/20">
              <CardContent className="p-8">
                <ul className="space-y-4">
                  {validationConditions.map((condition, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span>{condition}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Training & Follow-up */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              {translations.sections.training.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-6">
              {translations.sections.training.title}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {translations.sections.training.description}
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-6 mb-8">
            {trainingTopics.map((topic, index) => {
              const Icon = trainingIconMap[topic.iconType];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full border-border/50">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <p className="text-sm pt-2">{topic.text}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-6 text-center">
                <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
                <p className="font-medium">
                  {translations.sections.training.followUp}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              {translations.sections.howItWorks.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
              {translations.sections.howItWorks.title}
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {howItWorks.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4 sm:gap-6 mb-8 last:mb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-base sm:text-lg flex-shrink-0">
                    {index + 1}
                  </div>
                  {index < howItWorks.length - 1 && (
                    <div className="w-0.5 h-full bg-border mt-2" />
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <p className="text-base sm:text-lg">{step}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              {translations.sections.testimonials.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
              {translations.sections.testimonials.title}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-border/50">
                  <CardContent className="p-8">
                    <Quote className="h-10 w-10 text-primary/20 mb-4" />
                    <p className="text-muted-foreground mb-6 italic">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    <div className="border-t border-border pt-4">
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 lg:py-28 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              {translations.sections.stats.title}
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/70 text-xs sm:text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-20 lg:py-28 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl bg-gradient-to-br from-foreground to-foreground/90 p-8 lg:p-16 text-center overflow-hidden"
          >
            <div className="relative text-background">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                {translations.sections.contact.title}
              </h2>
              <p className="text-background/70 text-lg mb-8 max-w-xl mx-auto">
                {translations.sections.contact.description}
              </p>

              <div className="flex justify-center mb-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  Nous contacter
                </Link>
              </div>

              <p className="text-sm text-background/60 mb-4">
                {translations.sections.contact.orPartner}
              </p>

              <div className="mt-8 pt-8 border-t border-background/20">
                <p className="text-lg font-semibold italic mb-2">
                  &ldquo;{translations.sections.contact.quote}&rdquo;
                </p>
                <p className="text-sm text-background/70">
                  {translations.sections.contact.quoteDescription}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
