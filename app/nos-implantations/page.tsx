"use client";

import { motion } from "motion/react";
import { MapPin, Globe, Users, Building2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { PageHero } from "@/components/sections/page-hero";
import Link from "next/link";
import Image from "next/image";

const regions = [
  {
    name: "Europe",
    flag: "🇪🇺",
    countries: [
      { name: "France", cities: ["Paris", "Lyon", "Marseille", "Bordeaux"] },
      { name: "Belgique", cities: ["Bruxelles", "Anvers", "Liege"] },
      { name: "Suisse", cities: ["Geneve", "Zurich", "Lausanne"] },
      { name: "Espagne", cities: ["Madrid", "Barcelone", "Valence"] },
    ],
  },
  {
    name: "Amerique du Nord",
    flag: "🌎",
    countries: [
      { name: "Canada", cities: ["Montreal", "Toronto", "Vancouver"] },
      { name: "USA", cities: ["New York", "Los Angeles", "Miami"] },
    ],
  },
  {
    name: "Afrique",
    flag: "🌍",
    countries: [
      { name: "Cote d'Ivoire", cities: ["Abidjan", "Bouake", "Yamoussoukro"] },
      { name: "Senegal", cities: ["Dakar", "Thies", "Saint-Louis"] },
      { name: "Cameroun", cities: ["Douala", "Yaounde"] },
      { name: "Ghana", cities: ["Accra", "Kumasi"] },
      { name: "Maroc", cities: ["Casablanca", "Rabat", "Marrakech"] },
    ],
  },
  {
    name: "Moyen-Orient",
    flag: "🌍",
    countries: [
      { name: "EAU", cities: ["Dubai", "Abu Dhabi"] },
      { name: "Qatar", cities: ["Doha"] },
    ],
  },
];

const stats = [
  { icon: Globe, value: "50+", label: "Pays" },
  { icon: MapPin, value: "100+", label: "Villes" },
  { icon: Users, value: "1M+", label: "Utilisateurs" },
  { icon: Building2, value: "50+", label: "Franchises" },
];

export default function ImplantationsPage() {
  return (
    <>
      <PageHero
        badge="Notre presence mondiale"
        title="UPJUNOO PRO dans"
        highlight="le monde entier"
        description="Notre reseau s'etend sur plusieurs continents, vous accompagnant ou que vous alliez."
      />

      {/* Hero Image */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative h-[250px] sm:h-[350px] rounded-3xl overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1200&q=80"
              alt="Carte du monde - Presence internationale UPJUNOO PRO"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-primary/30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <Globe className="h-16 w-16 sm:h-24 sm:w-24 mx-auto mb-4 opacity-80" />
                <h2 className="text-xl sm:text-2xl font-bold mb-2">
                  Une presence internationale
                </h2>
                <p className="text-white/80 text-sm sm:text-base">
                  UPJUNOO PRO vous accompagne partout dans le monde
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="h-8 w-8 mx-auto mb-3 opacity-80" />
                <div className="text-3xl sm:text-4xl font-bold mb-1">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Regions */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Nos regions d'implantation
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Decouvrez les villes ou UPJUNOO PRO est disponible et profitez de
              nos services ou que vous soyez.
            </p>
          </motion.div>

          <div className="space-y-12">
            {regions.map((region, regionIndex) => (
              <motion.div
                key={region.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: regionIndex * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-4xl">{region.flag}</span>
                  <h3 className="text-2xl font-bold">{region.name}</h3>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {region.countries.map((country, index) => (
                    <Card
                      key={country.name}
                      className="hover:shadow-lg transition-all border-border/50 group hover:border-primary/30"
                    >
                      <CardContent className="p-4 sm:p-6">
                        <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                          {country.name}
                          <span className="w-2 h-2 rounded-full bg-green-500 relative">
                            <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75" />
                          </span>
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {country.cities.map((city) => (
                            <span
                              key={city}
                              className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground"
                            >
                              <MapPin className="h-3 w-3" />
                              {city}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Votre region n'est pas encore couverte ?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Devenez franchise UPJUNOO PRO et lancez le service dans votre
              region. Nous vous accompagnons a chaque etape.
            </p>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/offres-partenaires/franchises"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-colors"
              >
                Devenir franchise
                <span>→</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
