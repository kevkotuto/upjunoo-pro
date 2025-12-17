"use client";

import { motion } from "motion/react";
import { Clock, Wallet, Shield, MapPin } from "lucide-react";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import motoAnimation from "@/public/annimation/Navy blue delivery motorbike.json";

const benefits = [
  {
    icon: Clock,
    title: "Horaires de travail flexibles",
    description:
      "Vous êtes libre de choisir vos horaires de travail en fonction de vos préférences, ce qui vous permet de concilier vie professionnelle et personnelle.",
  },
  {
    icon: Wallet,
    title: "Revenus attractifs",
    description:
      "Chez UPJUNOO PRO, vous êtes payé à la course ou à la livraison, ce qui vous permet de maximiser vos revenus en fonction de vos horaires et de votre zone de travail.",
  },
  {
    icon: Shield,
    title: "Assurance incluse",
    description:
      "Bénéficiez d'une couverture d'assurance pendant vos courses pour conduire et livrer en toute sérénité.",
  },
  {
    icon: MapPin,
    title: "Choisissez votre zone",
    description:
      "Travaillez dans les zones qui vous conviennent le mieux et optimisez vos trajets pour gagner plus.",
  },
];

export function DriveSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-32 bg-muted/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Animation - Mobile first */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center order-first lg:order-last"
          >
            <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-lg">
              {/* Background glow */}
              <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl scale-75" />

              {/* Map background decoration */}
              <div className="absolute inset-0 opacity-20">
                <svg
                  viewBox="0 0 400 400"
                  className="w-full h-full"
                  fill="none"
                >
                  <circle
                    cx="200"
                    cy="200"
                    r="150"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeDasharray="8 8"
                    className="text-primary"
                  />
                  <circle
                    cx="200"
                    cy="200"
                    r="100"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                    className="text-primary"
                  />
                  <circle
                    cx="200"
                    cy="200"
                    r="50"
                    stroke="currentColor"
                    strokeWidth="1"
                    className="text-primary"
                  />
                  {/* Location pins */}
                  <circle cx="120" cy="150" r="6" className="fill-primary/50" />
                  <circle cx="280" cy="180" r="6" className="fill-primary/50" />
                  <circle cx="200" cy="280" r="6" className="fill-primary/50" />
                  <circle cx="150" cy="250" r="4" className="fill-primary/30" />
                  <circle cx="260" cy="130" r="4" className="fill-primary/30" />
                </svg>
              </div>

              {/* Lottie Animation */}
              <div className="relative z-10">
                <Lottie
                  animationData={motoAnimation}
                  loop={true}
                  autoplay={true}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4"
            >
              Devenez partenaire
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-4 sm:mb-6"
            >
              Conduisez et Livrez avec{" "}
              <span className="text-primary">confiance</span>, gagnez avec{" "}
              <span className="text-primary">assurance</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-base sm:text-lg mb-8 sm:mb-10 max-w-xl mx-auto lg:mx-0"
            >
              Rejoignez notre réseau de chauffeurs et livreurs partenaires et
              profitez d'une flexibilité totale dans votre activité.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="group"
                >
                  <div className="flex items-start gap-3 sm:gap-4 text-left">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <benefit.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold text-sm sm:text-base mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
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
