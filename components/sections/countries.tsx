"use client";

import { motion } from "motion/react";
import { Globe } from "lucide-react";
import { countriesData, formattedKpis } from "@/data/kpis";

export function CountriesSection() {
  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Notre couverture
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            Présent dans <span className="text-primary">15 pays</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            UPJUNOO PRO est disponible partout dans le monde.
          </p>
        </motion.div>

        {/* Countries Grid - Style like image */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {countriesData.map((country, index) => (
            <motion.div
              key={country.code}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-card rounded-full border border-border/50 hover:border-primary/30 transition-all duration-300"
            >
              <span className="text-xl">{country.flag}</span>
              <span className="text-sm font-medium text-foreground">{country.name}</span>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center"
        >
          {[
            { value: formattedKpis.pays, label: "Pays actifs" },
            { value: formattedKpis.villes, label: "Villes couvertes" },
            { value: formattedKpis.utilisateurs, label: "Utilisateurs" },
            { value: formattedKpis.support, label: "Support" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-4">
            Votre région n'est pas encore couverte ?
          </p>
          <motion.a
            href="/offres-partenaires/franchises"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            <Globe className="h-4 w-4" />
            Devenez franchise et lancez UPJUNOO PRO dans votre région
            <span>→</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
