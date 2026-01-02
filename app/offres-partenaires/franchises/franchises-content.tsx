"use client";

import { motion } from "motion/react";
import {
  Building2,
  TrendingUp,
  Users,
  Headphones,
  Shield,
  Rocket,
  CheckCircle,
  ArrowRight,
  Mail,
  BarChart3,
  Target,
  Award,
  Settings,
  Globe,
  Briefcase,
  UserCheck,
  Network,
  FileCheck,
  Quote,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageHero } from "@/components/sections/page-hero";
import Link from "next/link";
import { useEffect } from "react";
import { trackFranchiseLead, trackExternalLink } from "@/lib/analytics";

type MarketIconType = "trending" | "users" | "target";
type ProfileIconType = "briefcase" | "building" | "usercheck" | "users" | "network" | "award";
type OfferIconType = "rocket" | "award" | "headphones" | "shield";
type ConditionIconType = "filecheck" | "award" | "settings" | "barchart";

interface MarketItem {
  iconType: MarketIconType;
  text: string;
}

interface ProfileItem {
  iconType: ProfileIconType;
  text: string;
}

interface OfferItem {
  title: string;
  iconType: OfferIconType;
  items: string[];
}

interface ConditionItem {
  iconType: ConditionIconType;
  text: string;
}

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

interface InvestmentTable {
  headers: {
    position: string;
    detail: string;
  };
  rows: {
    position: string;
    detail: string;
  }[];
}

interface Translations {
  hero: {
    badge: string;
    title: string;
    highlight: string;
    description: string;
  };
  buttons: {
    becomeFranchise: string;
    learnMore: string;
  };
  sections: {
    whyBecome: {
      badge: string;
      title: string;
      intro: string;
      description: string;
      marketTitle: string;
    };
    profile: {
      badge: string;
      title: string;
      description: string;
      youAre: string;
    };
    offers: {
      badge: string;
      title: string;
    };
    responsibilities: {
      badge: string;
      title: string;
      description: string;
      mainMissions: string;
    };
    investment: {
      badge: string;
      title: string;
    };
    conditions: {
      badge: string;
      title: string;
    };
    testimonials: {
      badge: string;
      title: string;
    };
    contact: {
      title: string;
      description: string;
      availability: string;
      quote: string;
    };
  };
}

interface FranchisesContentProps {
  marketPotential: MarketItem[];
  franchiseeProfile: ProfileItem[];
  upjunooOffers: OfferItem[];
  responsibilities: string[];
  accessConditions: ConditionItem[];
  testimonials: Testimonial[];
  investmentTable: InvestmentTable;
  translations: Translations;
}

const marketIconMap = {
  trending: TrendingUp,
  users: Users,
  target: Target,
};

const profileIconMap = {
  briefcase: Briefcase,
  building: Building2,
  usercheck: UserCheck,
  users: Users,
  network: Network,
  award: Award,
};

const offerIconMap = {
  rocket: Rocket,
  award: Award,
  headphones: Headphones,
  shield: Shield,
};

const conditionIconMap = {
  filecheck: FileCheck,
  award: Award,
  settings: Settings,
  barchart: BarChart3,
};

export function FranchisesContent({
  marketPotential,
  franchiseeProfile,
  upjunooOffers,
  responsibilities,
  accessConditions,
  testimonials,
  investmentTable,
  translations,
}: FranchisesContentProps) {
  // Track page view for franchise lead
  useEffect(() => {
    trackFranchiseLead('page_view');
  }, []);

  return (
    <>
      <PageHero
        badge={translations.hero.badge}
        title={translations.hero.title}
        highlight={translations.hero.highlight}
        description={translations.hero.description}
        backgroundImage="/images/banniere/voiture-brander-upjunoo-16-9.png"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild className="gap-2" onClick={() => trackFranchiseLead('cta_click')}>
            <Link href="#contact">
              <Building2 className="h-5 w-5" />
              {translations.buttons.becomeFranchise}
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="gap-2">
            <Link href="#benefits">
              {translations.buttons.learnMore}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </PageHero>

      {/* Why become a franchisee */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              {translations.sections.whyBecome.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-6">
              {translations.sections.whyBecome.title}
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
                {translations.sections.whyBecome.intro}
              </p>
              <p className="text-muted-foreground text-center">
                {translations.sections.whyBecome.description}
              </p>
            </motion.div>

            {/* Market Potential */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <BarChart3 className="h-6 w-6 text-primary" />
                {translations.sections.whyBecome.marketTitle}
              </h3>
              <div className="grid sm:grid-cols-3 gap-4">
                {marketPotential.map((item, index) => {
                  const Icon = marketIconMap[item.iconType];
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
                          <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                          <p className="text-sm">{item.text}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Franchisee Profile */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              {translations.sections.profile.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
              {translations.sections.profile.title}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {translations.sections.profile.description}
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <p className="text-center text-lg font-medium mb-8">{translations.sections.profile.youAre}</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {franchiseeProfile.map((item, index) => {
                const Icon = profileIconMap[item.iconType];
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 bg-card p-4 rounded-xl border border-border/50"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <p className="text-sm pt-2">{item.text}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* What UPJUNOO offers */}
      <section id="benefits" className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              {translations.sections.offers.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
              {translations.sections.offers.title}
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-8">
            {upjunooOffers.map((offer, index) => {
              const Icon = offerIconMap[offer.iconType];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full border-border/50">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="font-bold text-xl">{offer.title}</h3>
                      </div>
                      <ul className="space-y-3">
                        {offer.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-sm">{item}</span>
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

      {/* Local Responsibilities */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              {translations.sections.responsibilities.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
              {translations.sections.responsibilities.title}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {translations.sections.responsibilities.description}
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Card className="border-primary/20">
              <CardContent className="p-8">
                <p className="text-center mb-6 font-medium">
                  {translations.sections.responsibilities.mainMissions}
                </p>
                <ul className="space-y-4">
                  {responsibilities.map((resp, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>{resp}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Investment & Profitability */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              {translations.sections.investment.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
              {translations.sections.investment.title}
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-primary/20">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left p-4 sm:p-6 font-semibold">{investmentTable.headers.position}</th>
                        <th className="text-left p-4 sm:p-6 font-semibold">{investmentTable.headers.detail}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {investmentTable.rows.map((row, index) => (
                        <tr key={index} className={index < investmentTable.rows.length - 1 ? "border-b border-border" : ""}>
                          <td className="p-4 sm:p-6 font-medium">{row.position}</td>
                          <td className={`p-4 sm:p-6 ${index >= 3 ? "text-primary font-semibold" : ""}`}>{row.detail}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Access Conditions */}
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

          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-4">
            {accessConditions.map((condition, index) => {
              const Icon = conditionIconMap[condition.iconType];
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
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <p className="text-sm pt-2">{condition.text}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
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

      {/* Contact CTA */}
      <section id="contact" className="py-20 lg:py-28 bg-muted/30">
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

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a
                  href="mailto:contact@upjunoopro.com"
                  onClick={() => {
                    trackFranchiseLead('email_click');
                    trackExternalLink('mailto:contact@upjunoopro.com', 'email');
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-background text-foreground font-medium hover:bg-background/90 transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  contact@upjunoopro.com
                </a>
                <a
                  href="https://www.upjunoo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    trackFranchiseLead('website_click');
                    trackExternalLink('https://www.upjunoo.com', 'website');
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-foreground/10 text-primary-foreground font-medium hover:bg-primary-foreground/20 transition-colors"
                >
                  <Globe className="h-5 w-5" />
                  www.upjunoo.com
                </a>
              </div>

              <p className="text-sm text-primary-foreground/60 mb-4">
                {translations.sections.contact.availability}
              </p>
              <p className="text-sm font-medium italic">
                &ldquo;{translations.sections.contact.quote}&rdquo;
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
