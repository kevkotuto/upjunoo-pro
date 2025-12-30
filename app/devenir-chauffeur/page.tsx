"use client";

import { motion } from "motion/react";
import {
  Clock,
  Smartphone,
  Shield,
  Headphones,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Car,
  UserCheck,
  Users,
  Award,
  BookOpen,
  Mail,
  Globe,
  Quote,
  CreditCard,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageHero } from "@/components/sections/page-hero";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { trackDriverApplication, trackExternalLink } from "@/lib/analytics";

const structuredProcess = [
  {
    icon: UserCheck,
    text: "Valide votre profil et vos documents",
  },
  {
    icon: Car,
    text: "Met à votre disposition un véhicule conforme",
  },
  {
    icon: Shield,
    text: "Vous inscrivez sur la plateforme via un accès sécurisé",
  },
  {
    icon: TrendingUp,
    text: "Suit votre évolution et vous aide à progresser",
  },
];

const driverAdvantages = [
  {
    icon: CreditCard,
    title: "Revenus journaliers ou hebdomadaires",
    description: "Via Mobile Money",
  },
  {
    icon: Award,
    title: "Prime de performance",
    description: "Qualité de service, ponctualité",
  },
  {
    icon: Clock,
    title: "Horaires flexibles",
    description: "Selon disponibilité de la flotte",
  },
  {
    icon: Smartphone,
    title: "Application simple et intuitive",
    description: "Avec support technique local",
  },
  {
    icon: MapPin,
    title: "Couverture territoriale",
    description: "Plus de clients, moins de temps d'attente",
  },
  {
    icon: Shield,
    title: "Protection et sécurité",
    description: "Assurance et support en cas d'incident",
  },
];

const validationConditions = [
  "Permis de conduire (cat. B ou plus) en cours de validité",
  "Pièce d'identité nationale ou CEDEAO",
  "Bonne présentation et sens du service",
  "Maîtrise de la conduite urbaine",
  "Capacité à utiliser un smartphone Android/iOS",
];

const trainingTopics = [
  {
    icon: Smartphone,
    text: "L'utilisation de l'application mobile",
  },
  {
    icon: Users,
    text: "Les bonnes pratiques de service client",
  },
  {
    icon: Shield,
    text: "Les règles de sécurité et de conduite professionnelle",
  },
  {
    icon: Headphones,
    text: "La gestion des imprévus et des conflits",
  },
];

const howItWorks = [
  "Contactez un partenaire gestionnaire de flotte agréé UPJUNOO PRO",
  "Préparez vos documents",
  "Passez un court entretien avec le partenaire",
  "Accédez à l'application après inscription",
  "Recevez une courte formation",
  "Commencez à effectuer vos courses selon un planning défini ou libre",
];

const testimonials = [
  {
    quote:
      "Grâce à mon partenaire UPJUNOO PRO, j'ai repris une activité stable, je suis accompagné et mes revenus sont réguliers.",
    author: "Moussa",
    role: "Chauffeur à Yamoussoukro",
  },
  {
    quote:
      "Je n'avais pas de voiture, mais le gestionnaire m'a intégré dans sa flotte. Aujourd'hui mes revenus sont stables et satisfaisants.",
    author: "Sery",
    role: "Chauffeur à Abidjan",
  },
];

export default function ChauffeurPage() {
  // Track page view for driver application
  useEffect(() => {
    trackDriverApplication('page_view');
  }, []);

  return (
    <>
      <PageHero
        badge="Rejoignez-nous"
        title="Devenez chauffeur"
        highlight="partenaire"
        description="Roulez librement. Gagnez dignement. Intégrez un réseau structuré et sécurisé."
        backgroundImage="/images/banniere/main-volant-upjunoo-1-1.jpg"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            asChild
            className="gap-2 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold"
            onClick={() => trackDriverApplication('cta_click')}
          >
            <Link href="#contact">
              <UserCheck className="h-5 w-5" />
              S'inscrire maintenant
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="gap-2 bg-transparent border-2 border-white/40 text-white hover:bg-white hover:text-primary font-semibold"
          >
            <Link href="#benefits">
              Voir les avantages
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </PageHero>

      {/* Why join UPJUNOO PRO */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Rejoindre UPJUNOO PRO
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Pourquoi rejoindre <span className="text-primary">UPJUNOO PRO</span> ?
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-3xl p-8 lg:p-12 border border-primary/20"
            >
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-gradient-to-br from-yellow-400 to-yellow-300 rounded-full opacity-20 blur-2xl" />
              <p className="text-lg text-center mb-6">
                <span className="font-semibold text-primary">UPJUNOO PRO</span> est
                une plateforme VTC panafricaine qui vous permet de devenir
                chauffeur professionnel agréé, avec l'appui d'un
                partenaire gestionnaire de flotte reconnu.
              </p>
              <p className="text-muted-foreground text-center mb-6">
                En tant que chauffeur UPJUNOO PRO, vous intégrez une équipe
                sérieuse, structurée, et appuyée par une technologie moderne.
                Vous travaillez dans un cadre clair, formel et équitable, avec
                des revenus garantis et une progression possible.
              </p>
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <p className="text-center font-semibold text-primary">
                  Objectif : Vous accompagner vers une activité stable, respectée
                  et rentable.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Structured Process */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Accompagnement
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Un processus <span className="text-primary">structuré</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Chez UPJUNOO PRO, vous ne travaillez pas seul. Vous êtes encadré par
              un partenaire local agréé, qui :
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-6">
            {structuredProcess.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-border/50 hover:border-primary/30 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center flex-shrink-0"
                      >
                        <item.icon className="h-7 w-7 text-white" />
                      </motion.div>
                      <p className="text-sm pt-3">{item.text}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Driver Advantages */}
      <section id="benefits" className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Vos avantages
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Pourquoi devenir chauffeur <span className="text-primary">UPJUNOO PRO</span> ?
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {driverAdvantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-border/50 hover:border-primary/30 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <advantage.icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="font-semibold text-lg mb-1">
                      {advantage.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {advantage.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Validation Conditions */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Conditions requises
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Conditions de <span className="text-primary">validation</span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
              <CardContent className="p-8 lg:p-10">
                <ul className="space-y-5">
                  {validationConditions.map((condition, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-4"
                    >
                      <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      </div>
                      <span className="text-base">{condition}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Training & Follow-up */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Formation
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Formation & <span className="text-primary">Suivi</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              UPJUNOO PRO et ses partenaires forment chaque nouveau chauffeur sur :
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-6 mb-8">
            {trainingTopics.map((topic, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-border/50 hover:border-primary/30 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center flex-shrink-0 group-hover:from-primary group-hover:to-primary/80 transition-all">
                        <topic.icon className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                      </div>
                      <p className="text-sm pt-2">{topic.text}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <Card className="border-primary/20 bg-gradient-to-r from-primary/10 to-primary/5">
              <CardContent className="p-6 text-center">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center mx-auto mb-4"
                >
                  <BookOpen className="h-8 w-8 text-white" />
                </motion.div>
                <p className="font-medium text-lg">
                  Un Partenaire ou gestionnaire de flotte assure un suivi
                  continu de vos performances.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Driver App Screenshots */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Votre outil de travail
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              L'application <span className="text-primary">chauffeur</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Une application intuitive pour gérer vos courses et maximiser vos revenus.
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
            {[
              {
                src: "/images/screenshots/chauffeur-app.jpeg",
                title: "Interface chauffeur",
                description: "Acceptez les courses en un clic",
              },
              {
                src: "/images/screenshots/chauffeur-finalisation.jpeg",
                title: "Finalisation",
                description: "Terminez vos courses facilement",
              },
            ].map((screenshot, index) => (
              <motion.div
                key={screenshot.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group max-w-xs"
              >
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 p-2 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl">
                  <div className="relative aspect-[9/19] rounded-xl overflow-hidden shadow-lg bg-gray-900">
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

      {/* How it works */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Processus
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Comment ça <span className="text-primary">fonctionne</span> ?
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {howItWorks.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="flex flex-col items-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary/80 text-primary-foreground flex items-center justify-center font-bold text-lg"
                  >
                    {index + 1}
                  </motion.div>
                  {index < howItWorks.length - 1 && (
                    <div className="w-0.5 h-full bg-gradient-to-b from-primary/50 to-primary/10 mt-2" />
                  )}
                </div>
                <div className="flex-1 pb-8 pt-3">
                  <p className="text-lg">{step}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Témoignages
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Ce que disent nos <span className="text-primary">chauffeurs</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-border/50 hover:border-primary/30 transition-all duration-300">
                  <CardContent className="p-8">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4"
                    >
                      <Quote className="h-6 w-6 text-primary" />
                    </motion.div>
                    <p className="text-muted-foreground mb-6 italic text-lg">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    <div className="border-t border-border pt-4">
                      <p className="font-semibold text-lg">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-to-br from-primary via-primary to-[#046d7a] text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold">
              UPJUNOO PRO en chiffres
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: "+1 200", label: "Chauffeurs actifs via partenaires" },
              { value: "+50 000", label: "Trajets mensuels" },
              { value: "4.7/5", label: "Note moyenne chauffeur" },
              { value: "Variable", label: "Prime mensuelle moyenne" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="text-4xl sm:text-5xl font-bold mb-2"
                >
                  {stat.value}
                </motion.div>
                <div className="text-primary-foreground/70 text-sm">
                  {stat.label}
                </div>
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

            <div className="relative text-white">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring" }}
                className="w-20 h-20 rounded-full bg-yellow-400 flex items-center justify-center mx-auto mb-6"
              >
                <Car className="h-10 w-10 text-gray-900" />
              </motion.div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Contact & Inscription
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
                Rejoignez notre équipe de chauffeurs professionnels dès
                aujourd'hui.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a
                  href="mailto:contact@upjunoopro.com"
                  onClick={() => trackExternalLink('mailto:contact@upjunoopro.com', 'email')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  contact@upjunoopro.com
                </a>
                <a
                  href="https://www.upjunoo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackExternalLink('https://www.upjunoo.com', 'website')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium transition-colors border border-white/20"
                >
                  <Globe className="h-5 w-5" />
                  www.upjunoo.com
                </a>
              </div>

              <p className="text-sm text-white/60 mb-4">
                Ou passez directement par un partenaire agréé proche de vous
              </p>

              <div className="mt-8 pt-8 border-t border-white/20">
                <p className="text-lg font-semibold italic mb-2">
                  &ldquo;Vous êtes bien plus qu'un chauffeur, vous êtes un
                  professionnel.&rdquo;
                </p>
                <p className="text-sm text-white/70">
                  Votre sérieux, notre technologie, et l'appui d'un
                  partenaire solide : voilà le trio gagnant.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
