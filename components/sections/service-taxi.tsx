"use client";

import { motion } from "motion/react";
import { Car, Clock, MapPin, Shield, CreditCard, Star, ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { formattedKpis, kpis } from "@/data/kpis";

const features = [
  {
    icon: Clock,
    title: "Disponible 24/7",
    description: "Reservez a tout moment, de jour comme de nuit.",
  },
  {
    icon: MapPin,
    title: "Suivi GPS en direct",
    description: "Suivez votre chauffeur en temps reel sur la carte.",
  },
  {
    icon: Shield,
    title: "Chauffeurs verifies",
    description: "Tous nos chauffeurs sont formes et certifies.",
  },
  {
    icon: CreditCard,
    title: "Paiement flexible",
    description: "Especes, mobile money ou carte bancaire.",
  },
];

const benefits = [
  "Estimation du prix avant la course",
  "Partage de trajet avec vos proches",
  "Historique de vos courses",
  "Notes et avis sur les chauffeurs",
];

export function ServiceTaxiSection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-primary/5 to-white" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ y: [0, -20, 0], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-[15%] w-80 h-80 bg-primary rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0], opacity: [0.03, 0.08, 0.03] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 left-[10%] w-72 h-72 bg-[#046d7a] rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6"
            >
              <Car className="h-4 w-4" />
              Taxi & VTC
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6"
            >
              Vos trajets{" "}
              <span className="text-primary">simplifies</span>,<br />
              <span className="relative inline-block">
                partout
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="absolute -bottom-1 left-0 right-0 h-3 bg-primary/20 -z-10 origin-left"
                />
              </span>{" "}
              en Afrique
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-lg mb-8 leading-relaxed"
            >
              Commandez un taxi ou VTC en quelques secondes. Nos chauffeurs professionnels
              vous conduisent en toute securite, avec un service de qualite et des tarifs transparents.
            </motion.p>

            {/* Benefits list */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <Link href="/passager">
                <Button size="lg" className="rounded-full px-8 gap-2 shadow-lg shadow-primary/25">
                  Reserver un trajet
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Car Image with Christmas Theme */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl scale-75" />

            {/* Car image */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <Image
                src="/images/vehicule/voiture-noel-2025-taxi.png"
                alt="Voiture UPJUNOO PRO - Edition Noel"
                width={600}
                height={338}
                className="w-full h-auto drop-shadow-2xl"
                priority
              />
            </motion.div>

            {/* Features Grid below the car */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="group"
                >
                  <div className="bg-white rounded-2xl p-4 h-full border border-border/50 hover:border-primary/30 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <feature.icon className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-bold text-sm">{feature.title}</h3>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Rating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="mt-6 flex justify-center"
            >
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full border border-border/50 shadow-sm">
                <div className="flex -space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <span className="text-sm font-medium">{formattedKpis.satisfaction} - Plus de {kpis.coursesParJour.value.toLocaleString('fr-FR')} courses/jour</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
