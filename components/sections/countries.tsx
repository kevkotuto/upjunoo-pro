"use client";

import { motion } from "motion/react";
import { MapPin, Globe } from "lucide-react";

const regions = [
  { name: "Europe", flag: "🇪🇺", cities: 25 },
  { name: "Amerique du Nord", flag: "🌎", cities: 15 },
  { name: "Amerique Latine", flag: "🌎", cities: 12 },
  { name: "Asie", flag: "🌏", cities: 18 },
  { name: "Moyen-Orient", flag: "🌍", cities: 8 },
  { name: "Afrique", flag: "🌍", cities: 20 },
  { name: "Oceanie", flag: "🌏", cities: 5 },
];

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
            Couverture mondiale
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            Disponible <span className="text-primary">partout dans le monde</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Notre presence s'etend sur plusieurs continents et regions.
            UPJUNOO PRO vous accompagne ou que vous alliez.
          </p>
        </motion.div>

        {/* Regions Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {regions.map((region, index) => (
            <motion.div
              key={region.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="group relative bg-card rounded-2xl p-4 border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative text-center">
                <motion.span
                  className="text-3xl sm:text-4xl mb-3 block"
                  whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.3 }}
                >
                  {region.flag}
                </motion.span>
                <h3 className="font-medium text-xs sm:text-sm mb-1 line-clamp-1">
                  {region.name}
                </h3>
                <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
                  <MapPin className="h-3 w-3" />
                  <span>{region.cities}+ villes</span>
                </div>
              </div>

              {/* Active indicator */}
              <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75" />
              </div>
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
            { value: "50+", label: "Pays" },
            { value: "100+", label: "Villes" },
            { value: "1M+", label: "Utilisateurs" },
            { value: "24/7", label: "Support" },
          ].map((stat, index) => (
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
            Votre region n'est pas encore couverte ?
          </p>
          <motion.a
            href="/offres-partenaires/franchises"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            <Globe className="h-4 w-4" />
            Devenez franchise et lancez UPJUNOO PRO dans votre region
            <span>→</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
