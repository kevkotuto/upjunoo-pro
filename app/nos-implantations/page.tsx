"use client";

import { motion } from "motion/react";
import { MapPin, Globe, Users, Building2, ArrowRight, Rocket, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/sections/page-hero";
import Link from "next/link";
import Image from "next/image";
import { formattedKpis, deploymentStatusLabels, deploymentStatusColors, type DeploymentStatus } from "@/data/kpis";

type RegionData = {
  name: string;
  flag: string;
  status: DeploymentStatus;
  countries: { name: string; cities: string[] }[];
};

const regions: RegionData[] = [
  {
    name: "Afrique de l'Ouest",
    flag: "🇨🇮",
    status: "available",
    countries: [
      { name: "Burkina Faso", cities: ["Ouagadougou", "Bobo-Dioulasso"] },
      { name: "Bénin", cities: ["Cotonou", "Porto-Novo"] },
      { name: "Côte d'Ivoire", cities: ["Abidjan", "Bouaké", "Yamoussoukro", "San-Pedro"] },
      { name: "Ghana", cities: ["Accra", "Kumasi"] },
      { name: "Guinée", cities: ["Conakry", "Nzérékoré"] },
      { name: "Mali", cities: ["Bamako", "Sikasso"] },
      { name: "Niger", cities: ["Niamey", "Zinder"] },
      { name: "Sénégal", cities: ["Dakar", "Thiès", "Saint-Louis"] },
      { name: "Togo", cities: ["Lomé", "Kara"] },
    ],
  },
  {
    name: "Afrique Centrale",
    flag: "🇨🇲",
    status: "available",
    countries: [
      { name: "Cameroun", cities: ["Douala", "Yaoundé", "Bafoussam"] },
      { name: "Congo-Brazzaville", cities: ["Brazzaville", "Pointe-Noire"] },
      { name: "Congo RDC", cities: ["Kinshasa", "Lubumbashi"] },
      { name: "Gabon", cities: ["Libreville", "Port-Gentil"] },
      { name: "Guinée équatoriale", cities: ["Malabo", "Bata"] },
      { name: "Tchad", cities: ["N'Djamena", "Moundou"] },
    ],
  },
];

function StatusBadge({ status }: { status: DeploymentStatus }) {
  const colors = deploymentStatusColors[status];
  const label = deploymentStatusLabels[status];

  return (
    <span className={`inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full font-medium ${colors.bg} ${colors.text}`}>
      <span className={`w-2 h-2 rounded-full ${colors.dot}`} />
      {label}
    </span>
  );
}

const stats = [
  { icon: Globe, value: formattedKpis.pays, label: "Pays actifs" },
  { icon: MapPin, value: formattedKpis.villes, label: "Villes" },
  { icon: Users, value: formattedKpis.utilisateurs, label: "Utilisateurs" },
  { icon: Building2, value: formattedKpis.franchises, label: "Franchises" },
];

export default function ImplantationsPage() {
  return (
    <>
      <PageHero
        badge="15 pays et plus"
        title="UPJUNOO PRO à travers"
        highlight="le monde"
        description="Notre réseau couvre plus de 15 pays avec plus de 50 villes desservies à travers le monde."
        backgroundImage="/images/banniere/voiture-brander-upjunoo-16-9.png"
      />

      {/* Stats */}
      <section className="py-16 bg-gradient-to-br from-primary via-primary to-[#046d7a] text-primary-foreground">
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
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-3"
                >
                  <stat.icon className="h-7 w-7" />
                </motion.div>
                <div className="text-4xl sm:text-5xl font-bold mb-1">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Legend */}
      <section className="py-8 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-sm text-muted-foreground">Service disponible</span>
            </div>
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
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Nos régions
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Nos régions <span className="text-primary">d'implantation</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Découvrez les villes où UPJUNOO PRO est disponible et suivez notre déploiement progressif.
            </p>
          </motion.div>

          <div className="space-y-12">
            {regions.map((region, regionIndex) => {
              const statusColors = deploymentStatusColors[region.status];
              return (
                <motion.div
                  key={region.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: regionIndex * 0.1 }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <motion.span
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      className="text-5xl"
                    >
                      {region.flag}
                    </motion.span>
                    <h3 className="text-2xl font-bold">{region.name}</h3>
                    <StatusBadge status={region.status} />
                  </div>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {region.countries.map((country) => (
                      <Card
                        key={country.name}
                        className="hover:border-primary/30 transition-all duration-300 border-border/50 group"
                      >
                        <CardContent className="p-5">
                          <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                            {country.name}
                            {region.status === "available" && (
                              <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                              </span>
                            )}
                            {region.status === "launching" && (
                              <span className={`flex h-2.5 w-2.5 rounded-full ${statusColors.dot}`} />
                            )}
                            {region.status === "coming_soon" && (
                              <Clock className="h-4 w-4 text-blue-400" />
                            )}
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {country.cities.map((city) => (
                              <span
                                key={city}
                                className="inline-flex items-center gap-1 text-xs px-2.5 py-1.5 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 text-muted-foreground group-hover:from-primary/20 group-hover:to-primary/10 transition-colors"
                              >
                                <MapPin className="h-3 w-3 text-primary" />
                                {city}
                              </span>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Progressive deployment note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10">
              <Rocket className="h-4 w-4 text-primary" />
              <span className="text-sm text-muted-foreground">
                Déploiement progressif en cours - Nouvelles régions à venir
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl bg-gradient-to-br from-primary via-primary to-[#046d7a] p-8 lg:p-16 text-center overflow-hidden"
          >
            {/* Background decorations */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                className="absolute -top-1/2 -right-1/2 w-full h-full border border-white/10 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-1/2 -left-1/2 w-full h-full border border-white/10 rounded-full"
              />
            </div>

            <div className="relative">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring" }}
                className="w-20 h-20 rounded-full bg-yellow-400 flex items-center justify-center mx-auto mb-6"
              >
                <Building2 className="h-10 w-10 text-gray-900" />
              </motion.div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                Votre région n'est pas encore couverte ?
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
                Devenez franchise UPJUNOO PRO et lancez le service dans votre
                région. Nous vous accompagnons à chaque étape.
              </p>
              <Button
                size="lg"
                asChild
                className="gap-2 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold text-lg px-8 py-6"
              >
                <Link href="/offres-partenaires/franchises">
                  Devenir franchise
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
