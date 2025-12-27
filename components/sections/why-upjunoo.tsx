"use client";

import { motion } from "motion/react";
import { Eye, Shield, Users, TrendingUp, CheckCircle, Zap } from "lucide-react";
import Image from "next/image";
import { formattedKpis } from "@/data/kpis";

const reasons = [
  {
    icon: Eye,
    title: "Clarte totale",
    description:
      "Tarifs transparents, suivi en temps reel, preuve de service. Aucune surprise.",
    color: "from-blue-500 to-blue-600",
    iconColor: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: Shield,
    title: "Securite maximale",
    description:
      "KYC/KYB, assurance complete, bouton SOS, suivi GPS en direct.",
    color: "from-green-500 to-green-600",
    iconColor: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    icon: Users,
    title: "Inclusion",
    description:
      "Integration des cooperatives, GIE, artisans-taxis et gestionnaires de flotte.",
    color: "from-purple-500 to-purple-600",
    iconColor: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    icon: TrendingUp,
    title: "Impact reel",
    description:
      "Reduction des couts logistiques pour PME et particuliers, creation d'emplois locaux.",
    color: "from-orange-500 to-orange-600",
    iconColor: "text-orange-500",
    bgColor: "bg-orange-500/10",
  },
];

const benefits = [
  "Application intuitive et rapide",
  `Disponible 24/7 dans ${formattedKpis.villes} villes`,
  "Support client reactif",
  "Paiement flexible (mobile money, carte)",
];

export function WhyUpjunooSection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-primary/5 to-white" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ y: [0, -30, 0], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-[10%] w-96 h-96 bg-primary rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 30, 0], opacity: [0.03, 0.08, 0.03] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 left-[10%] w-80 h-80 bg-yellow-400 rounded-full blur-3xl"
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
              <Zap className="h-4 w-4" />
              Pourquoi UPJUNOO PRO
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6"
            >
              La mobilite{" "}
              <span className="text-primary">intelligente</span>,<br />
              <span className="relative inline-block">
                simple
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="absolute -bottom-1 left-0 right-0 h-3 bg-yellow-400/30 -z-10 origin-left"
                />
              </span>{" "}
              et{" "}
              <span className="relative inline-block">
                inclusive
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  className="absolute -bottom-1 left-0 right-0 h-3 bg-primary/20 -z-10 origin-left"
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
              Avec UPJUNOO PRO, la mobilite devient un service integre : VTC/Taxi,
              livraison express, location de vehicules et fret urbain, reunis au sein
              d'une plateforme unique conçue pour l'Afrique.
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

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-8 pt-6 border-t border-border/50"
            >
              {[
                { value: formattedKpis.pays, label: "Pays" },
                { value: formattedKpis.villes, label: "Villes" },
                { value: formattedKpis.utilisateurs, label: "Utilisateurs" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Reasons Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="group"
                >
                  <div className="bg-white rounded-3xl p-6 h-full border border-border/50 hover:border-primary/30 transition-all duration-300 relative overflow-hidden">
                    {/* Hover gradient overlay */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${reason.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    />

                    <div className={`w-14 h-14 rounded-2xl ${reason.bgColor} flex items-center justify-center mb-5 relative`}>
                      <motion.div
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <reason.icon className={`h-7 w-7 ${reason.iconColor}`} />
                      </motion.div>
                    </div>
                    <h3 className="font-bold text-lg mb-2 relative">{reason.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed relative">
                      {reason.description}
                    </p>

                    {/* Decorative corner */}
                    <div className={`absolute -bottom-12 -right-12 w-24 h-24 rounded-full bg-gradient-to-br ${reason.color} opacity-5 group-hover:opacity-10 transition-opacity`} />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
