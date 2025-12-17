"use client";

import { motion } from "motion/react";
import { ArrowRight, Users, TrendingUp, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function CTASection() {
  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Driver CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80 rounded-3xl transform group-hover:scale-[1.02] transition-transform duration-300" />
            <div className="relative p-8 lg:p-10">
              <div className="flex items-start justify-between mb-8">
                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center">
                  <Users className="h-7 w-7 text-primary-foreground" />
                </div>
                <motion.div
                  animate={{ rotate: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Image
                    src="/images/voiture.png"
                    alt="Voiture"
                    width={80}
                    height={50}
                    className="w-16 h-auto"
                  />
                </motion.div>
              </div>

              <h3 className="text-2xl lg:text-3xl font-bold text-primary-foreground mb-4">
                Devenez chauffeur ou livreur
              </h3>
              <p className="text-primary-foreground/80 mb-6 max-w-md">
                Rejoignez notre equipe et profitez d'horaires flexibles, de
                revenus attractifs et d'une liberte totale dans votre travail.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  "Horaires de travail flexibles",
                  "Revenus a la commission",
                  "Support et assistance dedies",
                ].map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 text-primary-foreground/90"
                  >
                    <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-xs">
                      ✓
                    </span>
                    {item}
                  </motion.li>
                ))}
              </ul>

              <Button
                asChild
                size="lg"
                variant="secondary"
                className="gap-2 bg-white text-primary hover:bg-white/90"
              >
                <Link href="/devenir-chauffeur">
                  Rejoindre l'equipe
                  <ArrowRight className="h-4 w-4" />
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
            <div className="absolute inset-0 bg-gradient-to-br from-foreground to-foreground/90 rounded-3xl transform group-hover:scale-[1.02] transition-transform duration-300" />
            <div className="relative p-8 lg:p-10">
              <div className="flex items-start justify-between mb-8">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
                  <Building2 className="h-7 w-7 text-background" />
                </div>
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="text-4xl"
                >
                  🏢
                </motion.div>
              </div>

              <h3 className="text-2xl lg:text-3xl font-bold text-background mb-4">
                Devenez franchisé UPJUNOO
              </h3>
              <p className="text-background/70 mb-6 max-w-md">
                Lancez votre propre activite avec la marque UPJUNOO. Beneficiez
                de notre expertise et de notre technologie eprouvee.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  "Marque reconnue en Afrique",
                  "Formation et accompagnement",
                  "Technologie cle en main",
                ].map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 text-background/80"
                  >
                    <span className="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-xs text-primary-foreground">
                      ✓
                    </span>
                    {item}
                  </motion.li>
                ))}
              </ul>

              <Button
                asChild
                size="lg"
                className="gap-2"
              >
                <Link href="/franchise">
                  Devenir franchisé
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
