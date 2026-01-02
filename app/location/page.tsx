"use client";

import { motion } from "motion/react";
import {
  CarFront,
  Calendar,
  Shield,
  CreditCard,
  Clock,
  MapPin,
  CheckCircle,
  ArrowRight,
  Download,
  Key,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PageHero } from "@/components/sections/page-hero";
import Link from "next/link";
import Image from "next/image";
import { formattedKpis } from "@/data/kpis";
import { useTranslations } from "next-intl";

export default function LocationPage() {
  const t = useTranslations("locationPage");

  const features = [
    {
      icon: CarFront,
      title: t("features.range.title"),
      description: t("features.range.description"),
    },
    {
      icon: Calendar,
      title: t("features.flexible.title"),
      description: t("features.flexible.description"),
    },
    {
      icon: Shield,
      title: t("features.insured.title"),
      description: t("features.insured.description"),
    },
    {
      icon: CreditCard,
      title: t("features.transparent.title"),
      description: t("features.transparent.description"),
    },
    {
      icon: Clock,
      title: t("features.available.title"),
      description: t("features.available.description"),
    },
    {
      icon: MapPin,
      title: t("features.pickup.title"),
      description: t("features.pickup.description"),
    },
  ];

  const vehicleCategories = [
    {
      name: t("fleet.economique.name"),
      description: t("fleet.economique.description"),
      image: "/images/vehicule/normal.jpg",
      features: t.raw("fleet.economique.features") as string[],
    },
    {
      name: t("fleet.confort.name"),
      description: t("fleet.confort.description"),
      image: "/images/vehicule/confor.jpg",
      features: t.raw("fleet.confort.features") as string[],
    },
    {
      name: t("fleet.suv.name"),
      description: t("fleet.suv.description"),
      image: "/images/vehicule/suv.jpg",
      features: t.raw("fleet.suv.features") as string[],
    },
  ];

  const faqs = [
    {
      question: t("faq.q1.question"),
      answer: t("faq.q1.answer"),
    },
    {
      question: t("faq.q2.question"),
      answer: t("faq.q2.answer"),
    },
    {
      question: t("faq.q3.question"),
      answer: t("faq.q3.answer"),
    },
    {
      question: t("faq.q4.question"),
      answer: t("faq.q4.answer"),
    },
  ];

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
          >
            <Link href="/#download">
              <Key className="h-5 w-5" />
              {t("bookNow")}
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="gap-2 bg-transparent border-2 border-white/40 text-white hover:bg-white hover:text-primary font-semibold"
          >
            <Link href="#vehicles">
              {t("seeVehicles")}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </PageHero>

      {/* Vehicle Categories */}
      <section id="vehicles" className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              {t("fleet.badge")}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              {t("fleet.title")} <span className="text-primary">{t("fleet.highlight")}</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t("fleet.description")}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {vehicleCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:border-primary/30 transition-all duration-300 border-border/50 overflow-hidden group">
                  <div className="h-56 relative overflow-hidden">
                    <Image
                      src={category.image}
                      alt={`Vehicule ${category.name}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="font-bold text-xl text-white mb-1">{category.name}</h3>
                      <p className="text-white/80 text-sm">{category.description}</p>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <ul className="space-y-3">
                      {category.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-3 text-sm"
                        >
                          <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center">
                            <CheckCircle className="h-3.5 w-3.5 text-green-500" />
                          </div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button
                      className="w-full mt-6 gap-2 bg-gradient-to-r from-primary to-primary/80"
                      asChild
                    >
                      <Link href="/#download">
                        <Key className="h-4 w-4" />
                        {t("fleet.book")}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              {t("features.badge")}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              {t("features.title")} <span className="text-primary">{t("features.highlight")}</span> ?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t("features.description")}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:border-primary/30 transition-all duration-300 border-border/50 group">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <feature.icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-br from-primary via-primary to-[#046d7a] text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: formattedKpis.vehiculesLocation, label: t("stats.vehicles"), icon: CarFront },
              { value: formattedKpis.pointsRetrait, label: t("stats.pickupPoints"), icon: MapPin },
              { value: formattedKpis.satisfaction, label: t("stats.satisfaction"), icon: Star },
              { value: formattedKpis.support, label: t("stats.support"), icon: Clock },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-3"
                >
                  <stat.icon className="h-6 w-6" />
                </motion.div>
                <div className="text-3xl sm:text-4xl font-bold mb-1">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/70 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              {t("faq.badge")}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              {t("faq.title")} <span className="text-primary">{t("faq.highlight")}</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-border/50">
                  <AccordionTrigger className="text-left hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28">
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

            <div className="relative">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring" }}
                className="w-20 h-20 rounded-full bg-yellow-400 flex items-center justify-center mx-auto mb-6"
              >
                <CarFront className="h-10 w-10 text-gray-900" />
              </motion.div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
                {t("cta.title")}
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
                {t("cta.description")}
              </p>
              <Button
                size="lg"
                asChild
                className="gap-2 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold text-lg px-8 py-6"
              >
                <Link href="/#download">
                  <Download className="h-5 w-5" />
                  {t("cta.button")}
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
