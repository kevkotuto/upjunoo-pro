"use client";

import { motion } from "motion/react";
import { CarFront, Calendar, Key, Shield, Fuel, CheckCircle, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Calendar,
    title: "Reservation flexible",
    description: "Louez pour quelques heures, jours ou semaines.",
  },
  {
    icon: Key,
    title: "Prise en main facile",
    description: "Recuperez votre vehicule en quelques minutes.",
  },
  {
    icon: Shield,
    title: "Assurance complete",
    description: "Tous nos vehicules sont entierement assures.",
  },
  {
    icon: Fuel,
    title: "Vehicules entretenus",
    description: "Flotte regulierement controlee et nettoyee.",
  },
];

const vehicleTypes = [
  "Citadines economiques",
  "Berlines confortables",
  "SUV familiaux",
  "Utilitaires legers",
];

export function ServiceLocationSection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-violet-500/5 to-white" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ y: [0, -20, 0], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-32 left-[15%] w-80 h-80 bg-violet-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 30, 0], opacity: [0.03, 0.08, 0.03] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-[10%] w-72 h-72 bg-violet-600 rounded-full blur-3xl"
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 text-violet-500 text-sm font-semibold mb-6"
            >
              <CarFront className="h-4 w-4" />
              Location de Vehicules
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6"
            >
              Louez le vehicule{" "}
              <span className="text-violet-500">ideal</span><br />
              <span className="relative inline-block">
                en toute liberte
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="absolute -bottom-1 left-0 right-0 h-3 bg-violet-500/20 -z-10 origin-left"
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
              Besoin d'un vehicule pour un deplacement, un evenement ou vos vacances ?
              Notre large gamme de vehicules s'adapte a tous vos besoins avec des tarifs
              competitifs et transparents.
            </motion.p>

            {/* Vehicle types */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
            >
              {vehicleTypes.map((type, index) => (
                <motion.div
                  key={type}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-violet-500/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-4 w-4 text-violet-500" />
                  </div>
                  <span className="text-sm font-medium">{type}</span>
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
              <Link href="/location">
                <Button size="lg" className="rounded-full px-8 gap-2 bg-violet-500 hover:bg-violet-600 shadow-lg shadow-violet-500/25">
                  Voir les vehicules
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
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
                  <div className="bg-white rounded-3xl p-6 h-full border border-border/50 hover:border-violet-500/30 transition-all duration-300 relative overflow-hidden">
                    {/* Hover gradient overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-violet-500 to-violet-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                    />

                    <div className="w-14 h-14 rounded-2xl bg-violet-500/10 flex items-center justify-center mb-5 relative">
                      <motion.div
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <feature.icon className="h-7 w-7 text-violet-500" />
                      </motion.div>
                    </div>
                    <h3 className="font-bold text-lg mb-2 relative">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed relative">
                      {feature.description}
                    </p>

                    {/* Decorative corner */}
                    <div className="absolute -bottom-12 -right-12 w-24 h-24 rounded-full bg-gradient-to-br from-violet-500 to-violet-600 opacity-5 group-hover:opacity-10 transition-opacity" />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Promo badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="mt-6 flex justify-center"
            >
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full border border-border/50 shadow-sm">
                <Sparkles className="h-5 w-5 text-violet-500" />
                <span className="text-sm font-medium">-15% sur votre premiere location</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
