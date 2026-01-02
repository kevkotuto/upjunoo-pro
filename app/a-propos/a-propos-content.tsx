"use client";

import { motion } from "motion/react";
import {
  Car,
  Package,
  Key,
  Truck,
  Globe,
  Users,
  Shield,
  Smartphone,
  CreditCard,
  BarChart3,
  MapPin,
  Download,
  Target,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/sections/page-hero";
import Link from "next/link";
import { formattedKpis } from "@/data/kpis";

type AProposTranslations = {
  hero: {
    badge: string;
    title: string;
    highlight: string;
    description: string;
  };
  intro: {
    badge: string;
    title: string;
    titleHighlight: string;
    paragraph1: string;
    paragraph1Highlight: string;
    paragraph2: string;
    paragraph3: string;
  };
  services: {
    badge: string;
    title: string;
    titleHighlight: string;
    description: string;
    items: {
      vtc: { title: string; description: string };
      delivery: { title: string; description: string };
      rental: { title: string; description: string };
      freight: { title: string; description: string };
    };
  };
  features: {
    badge: string;
    title: string;
    titleHighlight: string;
    description: string;
    items: {
      gps: { title: string; description: string };
      proof: { title: string; description: string };
      payment: { title: string; description: string };
      dashboard: { title: string; description: string };
    };
  };
  values: {
    badge: string;
    title: string;
    titleHighlight: string;
    items: {
      inclusive: { title: string; description: string };
      international: { title: string; description: string };
      experience: { title: string; description: string };
    };
  };
  mission: {
    title: string;
    description: string;
    descriptionHighlight: string;
    cta: string;
    stats: {
      countries: string;
      users: string;
      ridesPerDay: string;
      satisfaction: string;
    };
  };
};

export function AProposContent({
  translations: t,
}: {
  translations: AProposTranslations;
}) {
  const services = [
    {
      icon: Car,
      title: t.services.items.vtc.title,
      description: t.services.items.vtc.description,
    },
    {
      icon: Package,
      title: t.services.items.delivery.title,
      description: t.services.items.delivery.description,
    },
    {
      icon: Key,
      title: t.services.items.rental.title,
      description: t.services.items.rental.description,
    },
    {
      icon: Truck,
      title: t.services.items.freight.title,
      description: t.services.items.freight.description,
    },
  ];

  const features = [
    {
      icon: MapPin,
      title: t.features.items.gps.title,
      description: t.features.items.gps.description,
    },
    {
      icon: Shield,
      title: t.features.items.proof.title,
      description: t.features.items.proof.description,
    },
    {
      icon: CreditCard,
      title: t.features.items.payment.title,
      description: t.features.items.payment.description,
    },
    {
      icon: BarChart3,
      title: t.features.items.dashboard.title,
      description: t.features.items.dashboard.description,
    },
  ];

  const values = [
    {
      icon: Users,
      title: t.values.items.inclusive.title,
      description: t.values.items.inclusive.description,
    },
    {
      icon: Globe,
      title: t.values.items.international.title,
      description: t.values.items.international.description,
    },
    {
      icon: Smartphone,
      title: t.values.items.experience.title,
      description: t.values.items.experience.description,
    },
  ];

  return (
    <>
      <PageHero
        badge={t.hero.badge}
        title={t.hero.title}
        highlight={t.hero.highlight}
        description={t.hero.description}
        backgroundImage="/images/banniere/personne-sourriante-16-9.jpg"
      />

      {/* Introduction */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              {t.intro.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              {t.intro.title}
              <span className="text-primary">{t.intro.titleHighlight}</span>
            </h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground mb-6"
            >
              <span className="font-semibold text-foreground">
                {t.intro.paragraph1Highlight}
              </span>{" "}
              {t.intro.paragraph1}
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground mb-6"
            >
              {t.intro.paragraph2}
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-lg text-muted-foreground"
            >
              {t.intro.paragraph3}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              {t.services.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              {t.services.title}{" "}
              <span className="text-primary">{t.services.titleHighlight}</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t.services.description}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-border/50 hover:border-primary/30 transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center mx-auto mb-4"
                    >
                      <service.icon className="h-8 w-8 text-white" />
                    </motion.div>
                    <h3 className="font-semibold text-lg mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              {t.features.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              {t.features.title}{" "}
              <span className="text-primary">{t.features.titleHighlight}</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t.features.description}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-border/50 hover:border-primary/30 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-4 group-hover:from-primary group-hover:to-primary/80 transition-all">
                      <feature.icon className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
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

      {/* Values */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              {t.values.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              {t.values.title}{" "}
              <span className="text-primary">{t.values.titleHighlight}</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-border/50 hover:border-primary/30 transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center mx-auto mb-6"
                    >
                      <value.icon className="h-10 w-10 text-white" />
                    </motion.div>
                    <h3 className="font-semibold text-xl mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl bg-gradient-to-br from-primary via-primary to-[#046d7a] p-8 lg:p-16 overflow-hidden"
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

            <div className="relative grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="w-20 h-20 rounded-full bg-yellow-400 flex items-center justify-center mb-6"
                >
                  <Target className="h-10 w-10 text-gray-900" />
                </motion.div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                  {t.mission.title}
                </h2>
                <p className="text-white/80 text-lg mb-8">
                  {t.mission.description}{" "}
                  <span className="font-semibold text-yellow-400">
                    {t.mission.descriptionHighlight}
                  </span>
                </p>
                <Button
                  size="lg"
                  asChild
                  className="gap-2 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold"
                >
                  <Link href="/#download">
                    <Download className="h-5 w-5" />
                    {t.mission.cta}
                  </Link>
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: formattedKpis.pays, label: t.mission.stats.countries },
                  { value: formattedKpis.utilisateurs, label: t.mission.stats.users },
                  { value: formattedKpis.coursesParJour, label: t.mission.stats.ridesPerDay },
                  { value: formattedKpis.satisfactionPourcentage, label: t.mission.stats.satisfaction },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center"
                  >
                    <div className="text-3xl sm:text-4xl font-bold text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-white/70 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
