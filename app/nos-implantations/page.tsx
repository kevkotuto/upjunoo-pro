"use client";

import { motion } from "motion/react";
import { MapPin, Globe, Users, Building2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { PageHero } from "@/components/sections/page-hero";
import Link from "next/link";

const countries = [
  { name: "Cote d'Ivoire", flag: "🇨🇮", cities: ["Abidjan", "Bouake", "Yamoussoukro", "San Pedro"], active: true },
  { name: "Senegal", flag: "🇸🇳", cities: ["Dakar", "Thies", "Saint-Louis", "Rufisque"], active: true },
  { name: "Cameroun", flag: "🇨🇲", cities: ["Douala", "Yaounde", "Garoua", "Bamenda"], active: true },
  { name: "Burkina Faso", flag: "🇧🇫", cities: ["Ouagadougou", "Bobo-Dioulasso"], active: true },
  { name: "Mali", flag: "🇲🇱", cities: ["Bamako", "Sikasso", "Mopti"], active: true },
  { name: "Benin", flag: "🇧🇯", cities: ["Cotonou", "Porto-Novo", "Parakou"], active: true },
  { name: "Togo", flag: "🇹🇬", cities: ["Lome", "Sokode", "Kara"], active: true },
  { name: "Niger", flag: "🇳🇪", cities: ["Niamey", "Zinder"], active: true },
  { name: "Guinee", flag: "🇬🇳", cities: ["Conakry", "Nzerekore", "Kankan"], active: true },
  { name: "Ghana", flag: "🇬🇭", cities: ["Accra", "Kumasi", "Tamale", "Takoradi"], active: true },
  { name: "Gabon", flag: "🇬🇦", cities: ["Libreville", "Port-Gentil"], active: true },
  { name: "Congo-Brazzaville", flag: "🇨🇬", cities: ["Brazzaville", "Pointe-Noire"], active: true },
  { name: "Congo RDC", flag: "🇨🇩", cities: ["Kinshasa", "Lubumbashi", "Mbuji-Mayi"], active: true },
  { name: "Tchad", flag: "🇹🇩", cities: ["N'Djamena", "Moundou"], active: true },
  { name: "Guinee Equatoriale", flag: "🇬🇶", cities: ["Malabo"], active: true },
];

const stats = [
  { icon: Globe, value: "15", label: "Pays" },
  { icon: MapPin, value: "50+", label: "Villes" },
  { icon: Users, value: "100k+", label: "Utilisateurs" },
  { icon: Building2, value: "20+", label: "Franchises" },
];

export default function ImplantationsPage() {
  return (
    <>
      <PageHero
        badge="Notre presence"
        title="UPJUNOO dans"
        highlight="15 pays africains"
        description="Notre reseau s'etend sur l'ensemble de l'Afrique de l'Ouest et centrale, vous accompagnant ou que vous alliez."
      />

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

      {/* Countries Grid */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Nos pays d'implantation
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Decouvrez les villes ou UPJUNOO est disponible et profitez de nos
              services ou que vous soyez.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {countries.map((country, index) => (
              <motion.div
                key={country.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="h-full hover:shadow-lg transition-all border-border/50 group hover:border-primary/30">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <motion.span
                        whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                        className="text-5xl"
                      >
                        {country.flag}
                      </motion.span>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-semibold text-lg">
                            {country.name}
                          </h3>
                          {country.active && (
                            <span className="w-2 h-2 rounded-full bg-green-500">
                              <span className="absolute w-2 h-2 rounded-full bg-green-500 animate-ping" />
                            </span>
                          )}
                        </div>
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
                      </div>
                    </div>
                  </CardContent>
                </Card>
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
              Votre pays n'est pas encore couvert ?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Devenez franchisé UPJUNOO et lancez le service dans votre region.
              Nous vous accompagnons a chaque etape.
            </p>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/franchise"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-colors"
              >
                Devenir franchisé
                <span>→</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
