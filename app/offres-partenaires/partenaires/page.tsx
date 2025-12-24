"use client";

import { motion } from "motion/react";
import {
  Handshake,
  Building2,
  Briefcase,
  Users,
  CheckCircle,
  ArrowRight,
  Mail,
  TrendingUp,
  Shield,
  Zap,
  Globe,
  HeartHandshake,
  Target,
  BarChart3,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageHero } from "@/components/sections/page-hero";
import Link from "next/link";
import Image from "next/image";

const partnerTypes = [
  {
    title: "Entreprises",
    description:
      "Solutions de mobilite et logistique pour vos collaborateurs et operations.",
    icon: Building2,
    benefits: [
      "Tarifs negocies",
      "Facturation centralisee",
      "Reporting detaille",
      "Compte gestionnaire",
    ],
  },
  {
    title: "Commerces & Restaurants",
    description:
      "Integrez notre service de livraison a votre activite.",
    icon: Briefcase,
    benefits: [
      "Integration facile",
      "Livraison a la demande",
      "Suivi en temps reel",
      "Commission competitive",
    ],
  },
  {
    title: "Hotels & Tourisme",
    description:
      "Offrez a vos clients un service de transport premium.",
    icon: Globe,
    benefits: [
      "Service VIP",
      "Reservation anticipee",
      "Chauffeurs professionnels",
      "Multi-langues",
    ],
  },
  {
    title: "Evenementiel",
    description:
      "Gerez la mobilite de vos evenements en toute simplicite.",
    icon: Users,
    benefits: [
      "Gestion de flotte",
      "Coordination centralisee",
      "Tarifs groupe",
      "Support dedie",
    ],
  },
];

const advantages = [
  {
    icon: TrendingUp,
    title: "Croissance mutuelle",
    description:
      "Developpez votre activite grace a notre ecosysteme en pleine expansion.",
  },
  {
    icon: Shield,
    title: "Fiabilite garantie",
    description:
      "Des chauffeurs verifies et des vehicules controles pour un service de qualite.",
  },
  {
    icon: Zap,
    title: "Integration simple",
    description:
      "API et outils d'integration pour une mise en place rapide et efficace.",
  },
  {
    icon: HeartHandshake,
    title: "Support dedie",
    description:
      "Un account manager dedie pour vous accompagner au quotidien.",
  },
];

const steps = [
  {
    number: "01",
    title: "Prise de contact",
    description:
      "Discutez de vos besoins avec notre equipe commerciale.",
  },
  {
    number: "02",
    title: "Etude personnalisee",
    description:
      "Nous analysons vos besoins et proposons une solution sur mesure.",
  },
  {
    number: "03",
    title: "Mise en place",
    description:
      "Integration technique et formation de vos equipes.",
  },
  {
    number: "04",
    title: "Lancement",
    description:
      "Activation du partenariat et accompagnement continu.",
  },
];

export default function PartenairesPage() {
  return (
    <>
      <PageHero
        badge="Partenariat B2B"
        title="Devenez partenaire"
        highlight="UPJUNOO PRO"
        description="Integrez nos solutions de mobilite et logistique a votre activite et offrez plus de valeur a vos clients."
        backgroundImage="/images/banniere/personne sourriante format -16-9.jpg"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild className="gap-2">
            <Link href="#contact">
              <Handshake className="h-5 w-5" />
              Devenir partenaire
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="gap-2">
            <Link href="#types">
              Voir les offres
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </PageHero>

      {/* Partner Types */}
      <section id="types" className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Types de partenariat
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
              Des solutions adaptees a chaque secteur
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Quel que soit votre domaine d'activite, nous avons une offre qui
              correspond a vos besoins.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-border/50 hover:border-primary/30 transition-colors">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                      <type.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{type.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {type.description}
                    </p>
                    <ul className="space-y-2">
                      {type.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Screenshots */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Interface de gestion
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
              Votre <span className="text-primary">tableau de bord</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Gerez votre flotte, vos chauffeurs et vos performances depuis une interface intuitive.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                src: "/images/screenshots/partenaire-dashboard.jpeg",
                title: "Tableau de bord",
                description: "Vue d'ensemble de votre activite",
              },
              {
                src: "/images/screenshots/partenaire-gestion-vehicules.jpeg",
                title: "Gestion des vehicules",
                description: "Gerez votre flotte en temps reel",
              },
              {
                src: "/images/screenshots/partenaire-affectation.jpeg",
                title: "Affectation chauffeurs",
                description: "Assignez les vehicules facilement",
              },
            ].map((screenshot, index) => (
              <motion.div
                key={screenshot.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 p-2 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl">
                  <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-lg bg-gray-900">
                    <Image
                      src={screenshot.src}
                      alt={screenshot.title}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="mt-4 text-center pb-2">
                    <h3 className="font-semibold text-base text-white">{screenshot.title}</h3>
                    <p className="text-sm text-gray-400 mt-1">
                      {screenshot.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Avantages
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
              Pourquoi devenir partenaire ?
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <advantage.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">{advantage.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {advantage.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Processus
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
              Comment devenir partenaire ?
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="text-5xl font-bold text-primary/10 mb-2">
                    {step.number}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 right-0 w-full h-0.5 bg-gradient-to-r from-primary/20 to-transparent transform translate-x-1/2" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { value: "500+", label: "Partenaires actifs" },
              { value: "98%", label: "Satisfaction client" },
              { value: "24/7", label: "Support disponible" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl bg-gradient-to-br from-primary to-primary/80 p-8 lg:p-16 text-center overflow-hidden"
          >
            <div className="relative text-primary-foreground">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Pret a collaborer ?
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
                Contactez notre equipe commerciale pour discuter de votre projet
                et decouvrir comment nous pouvons travailler ensemble.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:contact@upjunoo.com"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-background text-foreground font-medium hover:bg-background/90 transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  contact@upjunoo.com
                </a>
                <Button
                  variant="secondary"
                  size="lg"
                  asChild
                  className="bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20"
                >
                  <Link href="/contact">Formulaire de contact</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
