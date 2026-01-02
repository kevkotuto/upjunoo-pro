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
import Image from "next/image";
import { useEffect } from "react";
import { trackDriverApplication, trackExternalLink } from "@/lib/analytics";
import { useTranslations } from "next-intl";

export default function ChauffeurPage() {
  const t = useTranslations("devenirChauffeurPage");

  const structuredProcess = [
    {
      icon: UserCheck,
      text: t("structuredProcess.step1"),
    },
    {
      icon: Car,
      text: t("structuredProcess.step2"),
    },
    {
      icon: Shield,
      text: t("structuredProcess.step3"),
    },
    {
      icon: TrendingUp,
      text: t("structuredProcess.step4"),
    },
  ];

  const driverAdvantages = [
    {
      icon: CreditCard,
      title: t("advantages.income.title"),
      description: t("advantages.income.description"),
    },
    {
      icon: Award,
      title: t("advantages.bonus.title"),
      description: t("advantages.bonus.description"),
    },
    {
      icon: Clock,
      title: t("advantages.flexible.title"),
      description: t("advantages.flexible.description"),
    },
    {
      icon: Smartphone,
      title: t("advantages.app.title"),
      description: t("advantages.app.description"),
    },
    {
      icon: MapPin,
      title: t("advantages.coverage.title"),
      description: t("advantages.coverage.description"),
    },
    {
      icon: Shield,
      title: t("advantages.protection.title"),
      description: t("advantages.protection.description"),
    },
  ];

  const validationConditions = t.raw("conditions.items") as string[];

  const trainingTopics = [
    {
      icon: Smartphone,
      text: t("training.app"),
    },
    {
      icon: Users,
      text: t("training.service"),
    },
    {
      icon: Shield,
      text: t("training.safety"),
    },
    {
      icon: Headphones,
      text: t("training.conflicts"),
    },
  ];

  const howItWorks = t.raw("process.steps") as string[];

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

  const screenshots = [
    {
      src: "/images/screenshots/chauffeur-app.jpeg",
      title: t("driverApp.interface.title"),
      description: t("driverApp.interface.description"),
    },
    {
      src: "/images/screenshots/chauffeur-finalisation.jpeg",
      title: t("driverApp.finalization.title"),
      description: t("driverApp.finalization.description"),
    },
  ];

  // Track page view for driver application
  useEffect(() => {
    trackDriverApplication('page_view');
  }, []);

  return (
    <>
      <PageHero
        badge={t("badge")}
        title={t("title")}
        highlight={t("highlight")}
        description={t("description")}
        backgroundImage="/images/banniere/main-volant-upjunoo-1-1.jpg"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            asChild
            className="gap-2 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold"
            onClick={() => trackDriverApplication('cta_click')}
          >
            <Link href="#contact">
              <UserCheck className="h-5 w-5" />
              {t("signUp")}
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="gap-2 bg-transparent border-2 border-white/40 text-white hover:bg-white hover:text-primary font-semibold"
          >
            <Link href="#benefits">
              {t("seeBenefits")}
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
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              {t("whyJoin.badge")}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              {t("whyJoin.title")} <span className="text-primary">{t("whyJoin.highlight")}</span> ?
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-3xl p-8 lg:p-12 border border-primary/20"
            >
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-gradient-to-br from-yellow-400 to-yellow-300 rounded-full opacity-20 blur-2xl" />
              <p className="text-lg text-center mb-6">
                <span className="font-semibold text-primary">UPJUNOO PRO</span> {t("whyJoin.intro")}
              </p>
              <p className="text-muted-foreground text-center mb-6">
                {t("whyJoin.description")}
              </p>
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <p className="text-center font-semibold text-primary">
                  {t("whyJoin.objective")}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Structured Process */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              {t("structuredProcess.badge")}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              {t("structuredProcess.title")} <span className="text-primary">{t("structuredProcess.highlight")}</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              {t("structuredProcess.description")}
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-6">
            {structuredProcess.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-border/50 hover:border-primary/30 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center flex-shrink-0"
                      >
                        <item.icon className="h-7 w-7 text-white" />
                      </motion.div>
                      <p className="text-sm pt-3">{item.text}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              {t("advantages.badge")}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              {t("advantages.title")} <span className="text-primary">{t("advantages.highlight")}</span> ?
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {driverAdvantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-border/50 hover:border-primary/30 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <advantage.icon className="h-7 w-7 text-white" />
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
            ))}
          </div>
        </div>
      </section>

      {/* Validation Conditions */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              {t("conditions.badge")}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              {t("conditions.title")} <span className="text-primary">{t("conditions.highlight")}</span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
              <CardContent className="p-8 lg:p-10">
                <ul className="space-y-5">
                  {validationConditions.map((condition, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-4"
                    >
                      <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      </div>
                      <span className="text-base">{condition}</span>
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
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              {t("training.badge")}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              {t("training.title")} <span className="text-primary">{t("training.highlight")}</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t("training.description")}
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-6 mb-8">
            {trainingTopics.map((topic, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-border/50 hover:border-primary/30 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center flex-shrink-0 group-hover:from-primary group-hover:to-primary/80 transition-all">
                        <topic.icon className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                      </div>
                      <p className="text-sm pt-2">{topic.text}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <Card className="border-primary/20 bg-gradient-to-r from-primary/10 to-primary/5">
              <CardContent className="p-6 text-center">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center mx-auto mb-4"
                >
                  <BookOpen className="h-8 w-8 text-white" />
                </motion.div>
                <p className="font-medium text-lg">
                  {t("training.followUp")}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Driver App Screenshots */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              {t("driverApp.badge")}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              {t("driverApp.title")} <span className="text-primary">{t("driverApp.highlight")}</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t("driverApp.description")}
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
            {screenshots.map((screenshot, index) => (
              <motion.div
                key={screenshot.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group max-w-xs"
              >
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 p-2 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl">
                  <div className="relative aspect-[9/19] rounded-xl overflow-hidden shadow-lg bg-gray-900">
                    <Image
                      src={screenshot.src}
                      alt={screenshot.title}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="mt-4 text-center pb-2">
                    <h3 className="font-semibold text-base text-white">{screenshot.title}</h3>
                    <p className="text-sm text-gray-400 mt-1">
                      {screenshot.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              {t("process.badge")}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              {t("process.title")} <span className="text-primary">{t("process.highlight")}</span> ?
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
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="flex flex-col items-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary/80 text-primary-foreground flex items-center justify-center font-bold text-lg"
                  >
                    {index + 1}
                  </motion.div>
                  {index < howItWorks.length - 1 && (
                    <div className="w-0.5 h-full bg-gradient-to-b from-primary/50 to-primary/10 mt-2" />
                  )}
                </div>
                <div className="flex-1 pb-8 pt-3">
                  <p className="text-lg">{step}</p>
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
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              {t("testimonials.badge")}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              {t("testimonials.title")} <span className="text-primary">{t("testimonials.highlight")}</span>
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
                <Card className="h-full border-border/50 hover:border-primary/30 transition-all duration-300">
                  <CardContent className="p-8">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4"
                    >
                      <Quote className="h-6 w-6 text-primary" />
                    </motion.div>
                    <p className="text-muted-foreground mb-6 italic text-lg">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    <div className="border-t border-border pt-4">
                      <p className="font-semibold text-lg">{testimonial.author}</p>
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
      <section className="py-16 bg-gradient-to-br from-primary via-primary to-[#046d7a] text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold">
              {t("stats.title")}
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: "+1 200", label: t("stats.drivers") },
              { value: "+50 000", label: t("stats.trips") },
              { value: "4.7/5", label: t("stats.rating") },
              { value: "Variable", label: t("stats.bonus") },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="text-4xl sm:text-5xl font-bold mb-2"
                >
                  {stat.value}
                </motion.div>
                <div className="text-primary-foreground/70 text-sm">
                  {stat.label}
                </div>
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
            className="relative rounded-3xl bg-gradient-to-br from-primary via-primary to-[#046d7a] p-8 lg:p-16 text-center overflow-hidden"
          >
            {/* Background decorations */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                className="absolute -top-1/2 -right-1/2 w-full h-full border border-white/10 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-1/2 -left-1/2 w-full h-full border border-white/10 rounded-full"
              />
            </div>

            <div className="relative text-white">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring" }}
                className="w-20 h-20 rounded-full bg-yellow-400 flex items-center justify-center mx-auto mb-6"
              >
                <Car className="h-10 w-10 text-gray-900" />
              </motion.div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                {t("cta.title")}
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
                {t("cta.description")}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a
                  href="mailto:contact@upjunoopro.com"
                  onClick={() => trackExternalLink('mailto:contact@upjunoopro.com', 'email')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  contact@upjunoopro.com
                </a>
                <a
                  href="https://www.upjunoo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackExternalLink('https://www.upjunoo.com', 'website')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium transition-colors border border-white/20"
                >
                  <Globe className="h-5 w-5" />
                  www.upjunoo.com
                </a>
              </div>

              <p className="text-sm text-white/60 mb-4">
                {t("cta.orPartner")}
              </p>

              <div className="mt-8 pt-8 border-t border-white/20">
                <p className="text-lg font-semibold italic mb-2">
                  &ldquo;{t("cta.quote1")}&rdquo;
                </p>
                <p className="text-sm text-white/70">
                  {t("cta.quote2")}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
