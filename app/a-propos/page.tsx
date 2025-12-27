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
  Download,
  Target,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/sections/page-hero";
import Link from "next/link";
import { formattedKpis } from "@/data/kpis";

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
        backgroundImage="/images/banniere/personne-sourriante-16-9.jpg"
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
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Notre histoire
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Qui sommes-<span className="text-primary">nous</span> ?
            </h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground mb-6"
            >
              <span className="font-semibold text-foreground">UPJUNOO PRO</span>{" "}
              est une plateforme numerique de mobilite et de logistique
              intelligente, reunissant au sein d'une application unique les
              services de VTC / Taxi, livraison express, location de vehicules
              et fret urbain.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground mb-6"
            >
              Concue pour simplifier les deplacements et les echanges
              logistiques, UPJUNOO PRO offre une experience fluide, securisee et
              transparente pour les particuliers, les entreprises et les
              professionnels du transport.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-lg text-muted-foreground"
            >
              La plateforme favorise un modele economique inclusif, creant de la
              valeur partagee entre chauffeurs, gestionnaires de flotte,
              franchises locales et utilisateurs finaux.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Nos services
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Une application, <span className="text-primary">quatre services</span>
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
                <Card className="h-full border-border/50 hover:border-primary/30 transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center mx-auto mb-4"
                    >
                      <service.icon className="h-8 w-8 text-white" />
                    </motion.div>
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
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Fonctionnalites
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Des outils <span className="text-primary">avances</span>
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
                <Card className="h-full border-border/50 hover:border-primary/30 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-4 group-hover:from-primary group-hover:to-primary/80 transition-all">
                      <feature.icon className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
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
      <section className="py-20 lg:py-28 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Nos valeurs
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Ce qui nous <span className="text-primary">anime</span>
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
                <Card className="h-full border-border/50 hover:border-primary/30 transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center mx-auto mb-6"
                    >
                      <value.icon className="h-10 w-10 text-white" />
                    </motion.div>
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl bg-gradient-to-br from-primary via-primary to-[#046d7a] p-8 lg:p-16 overflow-hidden"
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

            <div className="relative grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="w-20 h-20 rounded-full bg-yellow-400 flex items-center justify-center mb-6"
                >
                  <Target className="h-10 w-10 text-gray-900" />
                </motion.div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                  Notre mission
                </h2>
                <p className="text-white/80 text-lg mb-8">
                  Grace a des fonctionnalites avancees telles que le suivi GPS
                  en temps reel, la preuve de service, des moyens de paiement
                  flexibles et des outils de pilotage dedies aux entreprises,{" "}
                  <span className="font-semibold text-yellow-400">
                    UPJUNOO PRO
                  </span>{" "}
                  contribue a moderniser la mobilite urbaine et a soutenir
                  l'economie locale dans plusieurs pays d'Afrique et au-dela.
                </p>
                <Button
                  size="lg"
                  asChild
                  className="gap-2 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold"
                >
                  <Link href="/#download">
                    <Download className="h-5 w-5" />
                    Telecharger l'app
                  </Link>
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: formattedKpis.pays, label: "Pays actifs" },
                  { value: formattedKpis.utilisateurs, label: "Utilisateurs" },
                  { value: formattedKpis.coursesParJour, label: "Courses/jour" },
                  { value: formattedKpis.satisfactionPourcentage, label: "Satisfaction" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center"
                  >
                    <div className="text-3xl sm:text-4xl font-bold text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-white/70 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
