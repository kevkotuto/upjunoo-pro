"use client";

import { motion } from "motion/react";
import { Eye, Shield, Users, TrendingUp } from "lucide-react";

const reasons = [
  {
    icon: Eye,
    title: "Clarte",
    description:
      "Tarifs transparents, suivi en temps reel, preuve de service.",
  },
  {
    icon: Shield,
    title: "Securite",
    description:
      "KYC/KYB, assurance, bouton SOS, suivi GPS.",
  },
  {
    icon: Users,
    title: "Inclusion",
    description:
      "Integration des cooperatives, GIE, artisans-taxis et gestionnaires de flotte.",
  },
  {
    icon: TrendingUp,
    title: "Impact",
    description:
      "Reduction des couts logistiques pour PME et particuliers, creation d'emplois locaux.",
  },
];

export function WhyUpjunooSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4"
            >
              Mobilite & Logistique
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-6"
            >
              La mobilite intelligente,{" "}
              <span className="text-primary">simple</span> et{" "}
              <span className="text-primary">inclusive</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-base sm:text-lg mb-6 leading-relaxed"
            >
              Avec UPJUNOO PRO, la mobilite devient un service integre : VTC/Taxi,
              livraison express, location de vehicules et fret urbain, reunis au sein
              d'une plateforme unique. Performante et securisee, elle offre une experience
              sans friction et un modele de valeur equitable pour les chauffeurs, les
              gestionnaires de flotte et les franchises.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-muted-foreground text-sm sm:text-base leading-relaxed"
            >
              La mobilite quotidienne reste souvent fragmentee, couteuse et peu transparente.
              UPJUNOO PRO simplifie et unifie l'experience : une application intuitive pour
              commander un vehicule, expedier un colis, louer une voiture ou organiser un fret,
              tout en generant des revenus durables pour les acteurs.
            </motion.p>
          </motion.div>

          {/* Reasons Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="group"
                >
                  <div className="bg-card border border-border/50 rounded-2xl p-5 sm:p-6 h-full hover:shadow-lg hover:border-primary/30 transition-all">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <reason.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{reason.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {reason.description}
                    </p>
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
