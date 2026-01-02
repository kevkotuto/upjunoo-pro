"use client";

import { motion } from "motion/react";
import {
  Truck,
  Package,
  MapPin,
  Shield,
  Headphones,
  CheckCircle,
  ArrowRight,
  Download,
  Scale,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageHero } from "@/components/sections/page-hero";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function FretUrbainPage() {
  const t = useTranslations("fretUrbainPage");

  const features = [
    {
      icon: Truck,
      title: t("features.vehicles.title"),
      description: t("features.vehicles.description"),
    },
    {
      icon: MapPin,
      title: t("features.gps.title"),
      description: t("features.gps.description"),
    },
    {
      icon: Shield,
      title: t("features.insured.title"),
      description: t("features.insured.description"),
    },
    {
      icon: Scale,
      title: t("features.heavy.title"),
      description: t("features.heavy.description"),
    },
    {
      icon: Headphones,
      title: t("features.support.title"),
      description: t("features.support.description"),
    },
    {
      icon: Calendar,
      title: t("features.flexible.title"),
      description: t("features.flexible.description"),
    },
  ];

  const vehicleTypes = [
    {
      title: t("fleet.pickup.title"),
      capacity: t("fleet.pickup.capacity"),
      description: t("fleet.pickup.description"),
      icon: Truck,
      popular: false,
    },
    {
      title: t("fleet.van.title"),
      capacity: t("fleet.van.capacity"),
      description: t("fleet.van.description"),
      icon: Truck,
      popular: true,
    },
    {
      title: t("fleet.truck.title"),
      capacity: t("fleet.truck.capacity"),
      description: t("fleet.truck.description"),
      icon: Truck,
      popular: false,
    },
  ];

  const howItWorksSteps = [
    {
      step: "1",
      title: t("howItWorks.step1.title"),
      desc: t("howItWorks.step1.description"),
    },
    {
      step: "2",
      title: t("howItWorks.step2.title"),
      desc: t("howItWorks.step2.description"),
    },
    {
      step: "3",
      title: t("howItWorks.step3.title"),
      desc: t("howItWorks.step3.description"),
    },
    {
      step: "4",
      title: t("howItWorks.step4.title"),
      desc: t("howItWorks.step4.description"),
    },
  ];

  return (
    <>
      <PageHero
        badge={t("badge")}
        title={t("title")}
        highlight={t("highlight")}
        description={t("description")}
        backgroundImage="/images/banniere/camion-fret-urbain-format-16-9.jpg"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            asChild
            className="gap-2 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold"
          >
            <Link href="/#download">
              <Download className="h-5 w-5" />
              {t("requestQuote")}
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="gap-2 bg-transparent border-2 border-white/40 text-white hover:bg-white hover:text-primary font-semibold"
          >
            <Link href="#vehicules">
              {t("seeVehicles")}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </PageHero>

      {/* Vehicle Types */}
      <section id="vehicules" className="py-20 lg:py-28 bg-gradient-to-b from-background to-muted/30">
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

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {vehicleTypes.map((vehicle, index) => (
              <motion.div
                key={vehicle.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  className={`h-full relative overflow-hidden transition-all duration-300 hover:scale-105 ${
                    vehicle.popular ? "border-primary border-2" : "border-border/50"
                  }`}
                >
                  {vehicle.popular && (
                    <div className="absolute top-0 right-0 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-bl-xl">
                      {t("fleet.recommended")}
                    </div>
                  )}
                  <CardContent className="p-6 text-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 ${
                        vehicle.popular
                          ? "bg-gradient-to-br from-primary to-primary/80 text-primary-foreground"
                          : "bg-gradient-to-br from-primary/20 to-primary/10"
                      }`}
                    >
                      <vehicle.icon
                        className={`h-8 w-8 ${vehicle.popular ? "" : "text-primary"}`}
                      />
                    </motion.div>
                    <h3 className="font-bold text-xl mb-1">{vehicle.title}</h3>
                    <p className="text-primary font-semibold text-lg mb-3">
                      {t("fleet.upTo")} {vehicle.capacity}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {vehicle.description}
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
              {t("features.badge")}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              {t("features.title")} <span className="text-primary">{t("features.highlight")}</span>
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

      {/* How it works */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                {t("howItWorks.badge")}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                {t("howItWorks.title")} <span className="text-primary">{t("howItWorks.highlight")}</span> ?
              </h2>

              <div className="space-y-6">
                {howItWorksSteps.map((item, index) => (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/80 text-primary-foreground flex items-center justify-center font-bold flex-shrink-0"
                    >
                      {item.step}
                    </motion.div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square max-w-md mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl" />
                <div className="absolute inset-4 rounded-2xl overflow-hidden">
                  <Image
                    src="/images/tricycle.png"
                    alt="Tricycle de fret urbain Upjunoo"
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Floating elements */}
                <motion.div
                  animate={{ y: [0, -15, 0], rotate: [-5, 5, -5] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-4 right-4 w-16 h-16 bg-card rounded-2xl flex items-center justify-center border border-border/50"
                >
                  <Package className="h-8 w-8 text-amber-500" />
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0], rotate: [5, -5, 5] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-4 left-4 w-16 h-16 bg-card rounded-2xl flex items-center justify-center border border-border/50"
                >
                  <CheckCircle className="h-8 w-8 text-green-500" />
                </motion.div>

                <motion.div
                  animate={{ x: [-10, 10, -10], y: [5, -5, 5] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute top-1/2 right-0 w-12 h-12 bg-card rounded-xl flex items-center justify-center border border-border/50"
                >
                  <MapPin className="h-6 w-6 text-primary" />
                </motion.div>
              </div>
            </motion.div>
          </div>
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
                <Truck className="h-10 w-10 text-gray-900" />
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
