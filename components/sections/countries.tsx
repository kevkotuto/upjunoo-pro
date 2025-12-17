"use client";

import { motion } from "motion/react";
import { MapPin } from "lucide-react";

const countries = [
  { name: "Cote d'Ivoire", flag: "🇨🇮", cities: 12 },
  { name: "Senegal", flag: "🇸🇳", cities: 8 },
  { name: "Cameroun", flag: "🇨🇲", cities: 6 },
  { name: "Burkina Faso", flag: "🇧🇫", cities: 4 },
  { name: "Mali", flag: "🇲🇱", cities: 3 },
  { name: "Benin", flag: "🇧🇯", cities: 4 },
  { name: "Togo", flag: "🇹🇬", cities: 3 },
  { name: "Niger", flag: "🇳🇪", cities: 2 },
  { name: "Guinee", flag: "🇬🇳", cities: 3 },
  { name: "Ghana", flag: "🇬🇭", cities: 5 },
  { name: "Gabon", flag: "🇬🇦", cities: 2 },
  { name: "Congo-Brazzaville", flag: "🇨🇬", cities: 2 },
  { name: "Congo RDC", flag: "🇨🇩", cities: 4 },
  { name: "Tchad", flag: "🇹🇩", cities: 2 },
  { name: "Guinee Equatoriale", flag: "🇬🇶", cities: 1 },
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
            Couverture
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            Disponible dans <span className="text-primary">15 pays</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Notre presence s'etend sur plusieurs pays et villes d'Afrique.
            UPJUNOO vous accompagne ou que vous alliez.
          </p>
        </motion.div>

        {/* Countries Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {countries.map((country, index) => (
            <motion.div
              key={country.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="group relative bg-card rounded-2xl p-4 border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative text-center">
                <motion.span
                  className="text-4xl mb-3 block"
                  whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.3 }}
                >
                  {country.flag}
                </motion.span>
                <h3 className="font-medium text-sm mb-1 line-clamp-1">
                  {country.name}
                </h3>
                <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
                  <MapPin className="h-3 w-3" />
                  <span>{country.cities} villes</span>
                </div>
              </div>

              {/* Active indicator */}
              <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-4">
            Votre pays n'est pas encore couvert ?
          </p>
          <motion.a
            href="/franchise"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            Devenez franchisé et lancez UPJUNOO dans votre region
            <span>→</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
