"use client";

import { motion } from "motion/react";
import { Package, Zap, MapPin, Clock, Bell, CheckCircle, ArrowRight, Timer } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Zap,
    title: "Livraison express",
    description: "Vos colis livres en moins de 2 heures en ville.",
  },
  {
    icon: MapPin,
    title: "Suivi en temps reel",
    description: "Localisez votre colis a chaque etape de la livraison.",
  },
  {
    icon: Bell,
    title: "Notifications",
    description: "Soyez informe de l'avancement de votre livraison.",
  },
  {
    icon: Clock,
    title: "Livraison planifiee",
    description: "Programmez vos envois a l'heure qui vous convient.",
  },
];

const benefits = [
  "Livraison le jour meme",
  "Photo de preuve a la livraison",
  "Assurance colis incluse",
  "Livreurs professionnels",
];

export function ServiceLivraisonSection() {
  return (
    <section className="py-24 lg:py-32 bg-gray-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -left-40 w-80 h-80 border border-orange-500/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-20 -right-20 w-60 h-60 border border-orange-500/10 rounded-full"
        />
        <motion.div
          animate={{ y: [0, -30, 0], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-40 right-[20%] w-64 h-64 bg-orange-500 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Features Grid - Left side this time */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="group"
                >
                  <div className="bg-white rounded-3xl p-6 h-full border border-border/50 hover:border-orange-500/30 transition-all duration-300 relative overflow-hidden">
                    {/* Hover gradient overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                    />

                    <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-5 relative">
                      <motion.div
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <feature.icon className="h-7 w-7 text-orange-500" />
                      </motion.div>
                    </div>
                    <h3 className="font-bold text-lg mb-2 relative">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed relative">
                      {feature.description}
                    </p>

                    {/* Decorative corner */}
                    <div className="absolute -bottom-12 -right-12 w-24 h-24 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 opacity-5 group-hover:opacity-10 transition-opacity" />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Speed badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="mt-6 flex justify-center"
            >
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full border border-border/50 shadow-sm">
                <Timer className="h-5 w-5 text-orange-500" />
                <span className="text-sm font-medium">Temps moyen de livraison : 45 min</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Content - Right side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 text-orange-500 text-sm font-semibold mb-6"
            >
              <Package className="h-4 w-4" />
              Livraisons Express
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6"
            >
              Vos colis livres{" "}
              <span className="text-orange-500">rapidement</span><br />
              <span className="relative inline-block">
                et en securite
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="absolute -bottom-1 left-0 right-0 h-3 bg-orange-500/20 -z-10 origin-left"
                />
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-lg mb-8 leading-relaxed"
            >
              Envoyez et recevez vos colis en un temps record. Notre reseau de livreurs
              professionnels assure une prise en charge rapide et une livraison soignee
              de tous vos envois.
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
                  <div className="w-6 h-6 rounded-full bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-4 w-4 text-orange-500" />
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
              <Link href="/livraison">
                <Button size="lg" className="rounded-full px-8 gap-2 bg-orange-500 hover:bg-orange-600 shadow-lg shadow-orange-500/25">
                  Envoyer un colis
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
