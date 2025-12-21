"use client";

import { motion } from "motion/react";
import {
  Car,
  Package,
  Key,
  Truck,
  Globe,
  Users,
  Shield,
  Smartphone,
  CreditCard,
  BarChart3,
  MapPin,
  CheckCircle,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { PageHero } from "@/components/sections/page-hero";

const services = [
  {
    icon: Car,
    title: "VTC / Taxi",
    description: "Reservez un chauffeur prive pour tous vos deplacements.",
  },
  {
    icon: Package,
    title: "Livraison express",
    description: "Envoyez et recevez vos colis en temps record.",
  },
  {
    icon: Key,
    title: "Location de vehicules",
    description: "Louez le vehicule adapte a vos besoins.",
  },
  {
    icon: Truck,
    title: "Fret urbain",
    description: "Solutions logistiques pour vos marchandises.",
  },
];

const features = [
  {
    icon: MapPin,
    title: "Suivi GPS en temps reel",
    description: "Suivez vos trajets et livraisons en direct.",
  },
  {
    icon: Shield,
    title: "Preuve de service",
    description: "Documentation complete de chaque prestation.",
  },
  {
    icon: CreditCard,
    title: "Paiement flexible",
    description: "Mobile Money, especes, portefeuille electronique.",
  },
  {
    icon: BarChart3,
    title: "Outils de pilotage",
    description: "Tableaux de bord dedies aux entreprises.",
  },
];

const values = [
  {
    icon: Users,
    title: "Modele inclusif",
    description:
      "Creation de valeur partagee entre chauffeurs, gestionnaires de flotte, franchises et utilisateurs.",
  },
  {
    icon: Globe,
    title: "Presence internationale",
    description:
      "Modernisation de la mobilite urbaine dans plusieurs pays d'Afrique et au-dela.",
  },
  {
    icon: Smartphone,
    title: "Experience fluide",
    description:
      "Une application unique regroupant tous les services de mobilite et logistique.",
  },
];

export default function AProposPage() {
  return (
    <>
      <PageHero
        badge="A propos"
        title="Decouvrez"
        highlight="UPJUNOO PRO"
        description="La plateforme numerique de mobilite et de logistique intelligente qui transforme vos deplacements."
      />

      {/* Introduction */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Qui sommes-nous ?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              <span className="font-semibold text-foreground">UPJUNOO PRO</span>{" "}
              est une plateforme numerique de mobilite et de logistique
              intelligente, reunissant au sein d'une application unique les
              services de VTC / Taxi, livraison express, location de vehicules
              et fret urbain.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Concue pour simplifier les deplacements et les echanges
              logistiques, UPJUNOO PRO offre une experience fluide, securisee et
              transparente pour les particuliers, les entreprises et les
              professionnels du transport.
            </p>
            <p className="text-lg text-muted-foreground">
              La plateforme favorise un modele economique inclusif, creant de la
              valeur partagee entre chauffeurs, gestionnaires de flotte,
              franchises locales et utilisateurs finaux.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Nos services
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
              Une application, quatre services
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Tous vos besoins de mobilite et logistique reunis en un seul
              endroit.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-border/50 hover:border-primary/30 transition-colors">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <service.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Fonctionnalites
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
              Des outils avances
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Des fonctionnalites pensees pour une experience optimale.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-border/50">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Nos valeurs
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
              Ce qui nous anime
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-border/50">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                      <value.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-xl mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-8 lg:p-12">
                <CheckCircle className="h-12 w-12 text-primary mx-auto mb-6" />
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                  Notre mission
                </h2>
                <p className="text-lg text-muted-foreground">
                  Grace a des fonctionnalites avancees telles que le suivi GPS
                  en temps reel, la preuve de service, des moyens de paiement
                  flexibles et des outils de pilotage dedies aux entreprises,{" "}
                  <span className="font-semibold text-foreground">
                    UPJUNOO PRO
                  </span>{" "}
                  contribue a moderniser la mobilite urbaine et a soutenir
                  l'economie locale dans plusieurs pays d'Afrique et au-dela.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </>
  );
}
