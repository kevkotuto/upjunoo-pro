"use client";

import { motion } from "motion/react";
import { ArrowRight, Users, Building2, CheckCircle, Car, Truck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function CTASection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6"
          >
            <Sparkles className="h-4 w-4" />
            Opportunités
          </motion.div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Rejoignez l'aventure{" "}
            <span className="text-primary">UPJUNOO PRO</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Que vous soyez chauffeur, livreur ou entrepreneur, nous avons une opportunité pour vous.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Driver CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-[#046d7a] rounded-3xl" />

            {/* Animated background shapes */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl">
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-white/10 rounded-full"
              />
              <motion.div
                animate={{ scale: [1.2, 1, 1.2], opacity: [0.05, 0.1, 0.05] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-1/4 -left-1/4 w-72 h-72 bg-yellow-400/10 rounded-full"
              />
            </div>

            <div className="relative p-8 lg:p-10">
              <div className="flex items-start justify-between mb-8">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center"
                >
                  <Users className="h-8 w-8 text-white" />
                </motion.div>
                <motion.div
                  animate={{ y: [0, -10, 0], rotate: [-3, 3, -3] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-white/20 rounded-full blur-xl" />
                  <Image
                    src="/images/voiture.png"
                    alt="Voiture"
                    width={100}
                    height={60}
                    className="w-20 h-auto relative"
                  />
                </motion.div>
              </div>

              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Devenez chauffeur ou livreur
              </h3>
              <p className="text-white/80 mb-8 max-w-md text-lg">
                Rejoignez notre équipe et profitez d'horaires flexibles, de
                revenus attractifs et d'une liberté totale.
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  "Horaires de travail 100% flexibles",
                  "Revenus attractifs à la commission",
                  "Support et assistance 24/7",
                  "Assurance incluse",
                ].map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 text-white/90"
                  >
                    <div className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-4 w-4 text-gray-900" />
                    </div>
                    {item}
                  </motion.li>
                ))}
              </ul>

              <Button
                asChild
                size="lg"
                className="gap-2 h-14 px-8 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold shadow-xl hover:scale-105 transition-all"
              >
                <Link href="/devenir-chauffeur">
                  Rejoindre l'équipe
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Franchise CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl" />

            {/* Animated background shapes */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl">
              <motion.div
                animate={{ scale: [1, 1.15, 1], opacity: [0.05, 0.1, 0.05] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-1/4 -left-1/4 w-80 h-80 bg-primary/20 rounded-full"
              />
              <motion.div
                animate={{ scale: [1.1, 1, 1.1], opacity: [0.08, 0.12, 0.08] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-1/2 -right-1/4 w-96 h-96 bg-primary/10 rounded-full"
              />
            </div>

            <div className="relative p-8 lg:p-10">
              <div className="flex items-start justify-between mb-8">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  className="w-16 h-16 rounded-2xl bg-primary/20 backdrop-blur-sm flex items-center justify-center"
                >
                  <Building2 className="h-8 w-8 text-primary" />
                </motion.div>
                <motion.div
                  animate={{ y: [0, -8, 0], scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full backdrop-blur-sm"
                >
                  <span className="text-primary text-sm font-semibold">Franchise</span>
                </motion.div>
              </div>

              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Devenez franchisé UPJUNOO PRO
              </h3>
              <p className="text-gray-400 mb-8 max-w-md text-lg">
                Lancez votre propre activité avec la marque UPJUNOO PRO. Bénéficiez
                de notre expertise et de notre technologie.
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  "Marque reconnue à l'international",
                  "Formation et accompagnement complet",
                  "Technologie clé en main",
                  "Support marketing inclus",
                ].map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    {item}
                  </motion.li>
                ))}
              </ul>

              <Button
                asChild
                size="lg"
                className="gap-2 h-14 px-8 bg-primary hover:bg-primary/90 text-white font-bold shadow-xl shadow-primary/25 hover:scale-105 transition-all"
              >
                <Link href="/offres-partenaires/franchises">
                  Devenir franchise
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
