"use client";

import { motion } from "motion/react";
import { MapPin, Globe, Rocket, Clock } from "lucide-react";
import { regionsData, formattedKpis, deploymentStatusLabels, deploymentStatusColors, type DeploymentStatus } from "@/data/kpis";

function StatusBadge({ status }: { status: DeploymentStatus }) {
  const colors = deploymentStatusColors[status];
  const label = deploymentStatusLabels[status];

  return (
    <span className={`inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full font-medium ${colors.bg} ${colors.text}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${colors.dot}`} />
      {label}
    </span>
  );
}

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
            Deploiement progressif
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            Notre presence <span className="text-primary">internationale</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            UPJUNOO PRO se deploie progressivement a travers le monde,
            en commencant par l'Afrique avant de s'etendre vers d'autres continents.
          </p>
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-10"
        >
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-green-500" />
            <span className="text-sm text-muted-foreground">Disponible</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-amber-500" />
            <span className="text-sm text-muted-foreground">En lancement</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-blue-400" />
            <span className="text-sm text-muted-foreground">Bientot</span>
          </div>
        </motion.div>

        {/* Regions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {regionsData.map((region, index) => {
            const colors = deploymentStatusColors[region.status];
            return (
              <motion.div
                key={region.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="group relative bg-card rounded-2xl p-5 border border-border/50 hover:border-primary/30 transition-all duration-300"
              >
                {/* Status indicator */}
                <div className="absolute top-3 right-3">
                  <StatusBadge status={region.status} />
                </div>

                <div className="flex items-start gap-4">
                  <motion.span
                    className="text-4xl"
                    whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.3 }}
                  >
                    {region.flag}
                  </motion.span>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-base mb-1">
                      {region.name}
                    </h3>
                    <p className="text-xs text-muted-foreground mb-2 line-clamp-1">
                      {region.countries.join(", ")}
                    </p>
                    {region.cities > 0 && (
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        <span>{region.cities}+ villes</span>
                      </div>
                    )}
                    {region.status === "coming_soon" && (
                      <div className="flex items-center gap-1 text-xs text-blue-500">
                        <Clock className="h-3 w-3" />
                        <span>Ouverture prochaine</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Active indicator for available regions */}
                {region.status === "available" && (
                  <div className="absolute bottom-3 right-3 w-2 h-2 rounded-full bg-green-500">
                    <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75" />
                  </div>
                )}
              </motion.div>
            );
          })}
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

        {/* Progressive deployment note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="mt-10 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10">
            <Rocket className="h-4 w-4 text-primary" />
            <span className="text-sm text-muted-foreground">
              Deploiement progressif en cours - Nouvelles regions a venir
            </span>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 text-center"
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
