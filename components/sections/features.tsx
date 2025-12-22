"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Smartphone, Clock, Shield, Headphones, Zap, CreditCard, ArrowRight } from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Smartphone,
    title: "Commandez en quelques clics",
    description: "Interface intuitive pour une reservation rapide et sans effort",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    icon: Clock,
    title: "Suivi en temps reel",
    description: "Suivez votre chauffeur ou votre colis en direct sur la carte",
    color: "text-green-500",
    bg: "bg-green-500/10",
  },
  {
    icon: Shield,
    title: "Securite garantie",
    description: "Chauffeurs verifies et trajets securises pour votre tranquillite",
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
  {
    icon: Headphones,
    title: "Support 24/7",
    description: "Une equipe dediee disponible a tout moment pour vous assister",
    color: "text-orange-500",
    bg: "bg-orange-500/10",
  },
];

const floatingFeatures = [
  { icon: Zap, label: "Rapide", color: "bg-yellow-500" },
  { icon: Shield, label: "Secure", color: "bg-green-500" },
  { icon: Clock, label: "24/7", color: "bg-blue-500" },
  { icon: CreditCard, label: "Flexible", color: "bg-purple-500" },
];

export function FeaturesSection() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.03, 0.05, 0.03] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6"
            >
              <Zap className="h-4 w-4" />
              Fonctionnalites
            </motion.div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Une experience de mobilite{" "}
              <span className="text-primary relative">
                exceptionnelle
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="absolute -bottom-1 left-0 right-0 h-3 bg-yellow-400/30 -z-10 origin-left"
                />
              </span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              UPJUNOO PRO reinvente vos deplacements avec une application pensee
              pour votre confort et votre securite. Decouvrez nos fonctionnalites phares.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex gap-4 group cursor-pointer"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-12 h-12 rounded-2xl ${feature.bg} flex items-center justify-center flex-shrink-0`}
                  >
                    <feature.icon className={`h-6 w-6 ${feature.color}`} />
                  </motion.div>
                  <div>
                    <h3 className="font-bold mb-1 group-hover:text-primary transition-colors">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-10"
            >
              <Link
                href="#download"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all"
              >
                Telecharger maintenant
                <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>
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
              {/* Animated circles */}
              <motion.div
                animate={{ scale: [1, 1.05, 1], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-primary/50"
              />
              <motion.div
                animate={{ scale: [1, 1.08, 1], opacity: [0.15, 0.25, 0.15] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute inset-8 rounded-full bg-gradient-to-br from-primary to-primary/50"
              />
              <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute inset-16 rounded-full bg-gradient-to-br from-primary to-primary/50"
              />

              {/* Center phone */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="relative w-44 h-80 bg-gray-900 rounded-[2.5rem] p-1.5 shadow-2xl"
                >
                  <div className="w-full h-full rounded-[2rem] overflow-hidden relative bg-white">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-gray-900 rounded-b-xl z-10" />
                    <Image
                      src="/images/captureHome.jpeg"
                      alt="UPJUNOO PRO App"
                      fill
                      className="object-cover"
                    />
                  </div>
                </motion.div>
              </div>

              {/* Floating feature cards */}
              {[
                { ...floatingFeatures[0], position: "top-4 left-4", delay: 0 },
                { ...floatingFeatures[1], position: "top-4 right-4", delay: 0.2 },
                { ...floatingFeatures[2], position: "bottom-4 left-4", delay: 0.4 },
                { ...floatingFeatures[3], position: "bottom-4 right-4", delay: 0.6 },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + item.delay, duration: 0.4, type: "spring" }}
                  className={`absolute ${item.position}`}
                >
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3 + index * 0.5, repeat: Infinity, ease: "easeInOut" }}
                    className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center justify-center min-w-[80px]"
                  >
                    <div className={`w-10 h-10 rounded-xl ${item.color} flex items-center justify-center mb-2`}>
                      <item.icon className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-xs font-semibold">{item.label}</span>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
