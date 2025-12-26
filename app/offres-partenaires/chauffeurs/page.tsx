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

const structuredProcess = [
  {
    icon: UserCheck,
    text: "Valide votre profil et vos documents",
  },
  {
    icon: Car,
    text: "Met a votre disposition un vehicule conforme",
  },
  {
    icon: Shield,
    text: "Vous inscrit sur la plateforme via un acces securise",
  },
  {
    icon: TrendingUp,
    text: "Suit votre evolution et vous aide a progresser",
  },
];

const driverAdvantages = [
  {
    icon: CreditCard,
    title: "Revenus journaliers ou hebdomadaires",
    description: "Paiements reguliers et securises",
  },
  {
    icon: Award,
    title: "Prime de performance",
    description: "Qualite de service, ponctualite",
  },
  {
    icon: Clock,
    title: "Horaires flexibles",
    description: "Selon disponibilite de la flotte",
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
];

const validationConditions = [
  "Permis de conduire (cat. B ou plus) en cours de validite",
  "Piece d'identite nationale valide",
  "Bonne presentation et sens du service",
  "Maitrise de la conduite urbaine",
  "Capacite a utiliser un smartphone Android/iOS",
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
    text: "Les regles de securite et de conduite professionnelle",
  },
  {
    icon: Headphones,
    text: "La gestion des imprevus et des conflits",
  },
];

const howItWorks = [
  "Contactez un partenaire gestionnaire de flotte agree UPJUNOO PRO",
  "Preparez vos documents",
  "Passez un court entretien avec le partenaire",
  "Accedez a l'application apres inscription",
  "Recevez une courte formation",
  "Commencez a effectuer vos courses selon un planning defini ou libre",
];

const testimonials = [
  {
    quote:
      "Grace a mon partenaire UPJUNOO PRO, j'ai repris une activite stable, je suis accompagne et mes revenus sont reguliers.",
    author: "Thomas M.",
    role: "Chauffeur depuis 2023",
  },
  {
    quote:
      "Je n'avais pas de voiture, mais le gestionnaire m'a integre dans sa flotte. Aujourd'hui j'ai des revenus stables.",
    author: "Laurent D.",
    role: "Chauffeur partenaire",
  },
];

export default function ChauffeursPartenairesPage() {
  return (
    <>
      <PageHero
        badge="Rejoignez-nous"
        title="Devenez chauffeur partenaire"
        highlight="UPJUNOO PRO"
        description="Roulez librement. Gagnez dignement. Integrez un reseau structure et securise."
        backgroundImage="/images/banniere/main-volant-upjunoo-1-1.jpg"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild className="gap-2">
            <Link href="#contact">
              <UserCheck className="h-5 w-5" />
              S&apos;inscrire maintenant
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="gap-2">
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
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Rejoindre UPJUNOO PRO
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-6">
              Pourquoi rejoindre UPJUNOO PRO ?
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-8 border border-border/50 mb-12"
            >
              <p className="text-lg text-center mb-6">
                <span className="font-semibold text-primary">UPJUNOO PRO</span>{" "}
                est une plateforme VTC internationale qui vous permet de devenir
                chauffeur professionnel agree, avec l&apos;appui d&apos;un
                partenaire gestionnaire de flotte reconnu.
              </p>
              <p className="text-muted-foreground text-center mb-4">
                En tant que chauffeur UPJUNOO PRO, vous integrez une equipe
                serieuse, structuree, et appuyee par une technologie moderne.
                Vous travaillez dans un cadre clair, formel et equitable, avec
                des revenus garantis et une progression possible.
              </p>
              <p className="text-center font-semibold text-primary">
                Objectif : Vous accompagner vers une activite stable, respectee
                et rentable.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Structured Process */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Accompagnement
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-6">
              Un processus structure, un accompagnement personnalise
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Chez UPJUNOO PRO, vous ne travaillez pas seul. Vous etes encadre
              par un partenaire local agree, qui :
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
                <Card className="h-full border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="h-6 w-6 text-primary" />
                      </div>
                      <p className="text-sm pt-2">{item.text}</p>
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
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Vos avantages
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
              Vos avantages en tant que chauffeur UPJUNOO PRO
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
                <Card className="h-full border-border/50">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                      <advantage.icon className="h-6 w-6 text-primary" />
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
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Conditions requises
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
              Conditions pour etre valide par un partenaire
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Card className="border-primary/20">
              <CardContent className="p-8">
                <ul className="space-y-4">
                  {validationConditions.map((condition, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span>{condition}</span>
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
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Formation
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-6">
              Formation & Suivi
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              UPJUNOO PRO et ses partenaires forment chaque nouveau chauffeur
              sur :
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
                <Card className="h-full border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <topic.icon className="h-5 w-5 text-primary" />
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
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-6 text-center">
                <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
                <p className="font-medium">
                  Un Partenaire ou gestionnaire de flotte assure un suivi
                  continu de vos performances.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Processus
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
              Comment ca fonctionne ?
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
                className="flex gap-4 sm:gap-6 mb-8 last:mb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-base sm:text-lg flex-shrink-0">
                    {index + 1}
                  </div>
                  {index < howItWorks.length - 1 && (
                    <div className="w-0.5 h-full bg-border mt-2" />
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <p className="text-base sm:text-lg">{step}</p>
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
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Temoignages
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
              Ce que disent nos chauffeurs
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
                <Card className="h-full border-border/50">
                  <CardContent className="p-8">
                    <Quote className="h-10 w-10 text-primary/20 mb-4" />
                    <p className="text-muted-foreground mb-6 italic">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    <div className="border-t border-border pt-4">
                      <p className="font-semibold">{testimonial.author}</p>
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
      <section className="py-20 lg:py-28 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
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
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/70 text-xs sm:text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-20 lg:py-28 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl bg-gradient-to-br from-foreground to-foreground/90 p-8 lg:p-16 text-center overflow-hidden"
          >
            <div className="relative text-background">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Contact & Inscription
              </h2>
              <p className="text-background/70 text-lg mb-8 max-w-xl mx-auto">
                Rejoignez notre equipe de chauffeurs professionnels des
                aujourd&apos;hui.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a
                  href="mailto:contact@upjunoo.com"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  contact@upjunoo.com
                </a>
                <a
                  href="https://www.upjunoo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-background/10 text-background font-medium hover:bg-background/20 transition-colors"
                >
                  <Globe className="h-5 w-5" />
                  www.upjunoo.com
                </a>
              </div>

              <p className="text-sm text-background/60 mb-4">
                Ou passez directement par un partenaire agree proche de vous
              </p>

              <div className="mt-8 pt-8 border-t border-background/20">
                <p className="text-lg font-semibold italic mb-2">
                  &ldquo;Vous etes bien plus qu&apos;un chauffeur, vous etes un
                  professionnel.&rdquo;
                </p>
                <p className="text-sm text-background/70">
                  Votre serieux, notre technologie, et l&apos;appui d&apos;un
                  partenaire solide : voila le trio gagnant.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
