"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Smartphone, Clock, Shield, Headphones, Zap, CreditCard } from "lucide-react";

const features = [
  {
    icon: Smartphone,
    title: "Commandez en quelques clics",
    description: "Interface intuitive pour une reservation rapide et sans effort",
  },
  {
    icon: Clock,
    title: "Suivi en temps reel",
    description: "Suivez votre chauffeur ou votre colis en direct sur la carte",
  },
  {
    icon: Shield,
    title: "Securite garantie",
    description: "Chauffeurs verifies et trajets securises pour votre tranquillite",
  },
  {
    icon: Headphones,
    title: "Support 24/7",
    description: "Une equipe dediee disponible a tout moment pour vous assister",
  },
  {
    icon: Zap,
    title: "Livraison express",
    description: "Vos colis livres en un temps record grace a notre reseau",
  },
  {
    icon: CreditCard,
    title: "Paiement flexible",
    description: "Plusieurs options de paiement adaptees a vos preferences",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Pourquoi nous choisir
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-6">
              Une experience de mobilite{" "}
              <span className="text-primary">exceptionnelle</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              UPJUNOO PRO reinvente vos deplacements avec une application pensee
              pour votre confort et votre securite.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.slice(0, 4).map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Background circles */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="w-full h-full rounded-full bg-primary/5"
                />
              </div>
              <div className="absolute inset-8 flex items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.6, 0.4] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="w-full h-full rounded-full bg-primary/10"
                />
              </div>
              <div className="absolute inset-16 flex items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.7, 0.5] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="w-full h-full rounded-full bg-primary/15"
                />
              </div>

              {/* Center image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="relative w-44 h-80"
                >
                  <Image
                    src="/images/center.jpg"
                    alt="UPJUNOO App Interface"
                    fill
                    className="object-contain drop-shadow-2xl"
                  />
                </motion.div>
              </div>

              {/* Floating feature cards */}
              {[
                { icon: Zap, label: "Rapide", position: "top-0 left-0" },
                { icon: Shield, label: "Secure", position: "top-0 right-0" },
                { icon: Clock, label: "24/7", position: "bottom-0 left-0" },
                { icon: CreditCard, label: "Flexible", position: "bottom-0 right-0" },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                  animate={{ y: [0, -5, 0] }}
                  className={`absolute ${item.position} w-20 h-20 bg-card rounded-2xl shadow-lg flex flex-col items-center justify-center`}
                  style={{
                    animationDelay: `${index * 0.5}s`,
                  }}
                >
                  <item.icon className="h-6 w-6 text-primary mb-1" />
                  <span className="text-xs font-medium">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
