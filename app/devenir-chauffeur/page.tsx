"use client";

import { motion } from "motion/react";
import {
  Clock,
  Wallet,
  Smartphone,
  Shield,
  Headphones,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Download,
  Car,
  FileText,
  UserCheck,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageHero } from "@/components/sections/page-hero";
import Link from "next/link";

const benefits = [
  {
    icon: Clock,
    title: "Horaires flexibles",
    description:
      "Travaillez quand vous le souhaitez. Vous etes votre propre patron.",
  },
  {
    icon: Wallet,
    title: "Revenus attractifs",
    description:
      "Gagnez de l'argent a chaque course. Plus vous roulez, plus vous gagnez.",
  },
  {
    icon: Smartphone,
    title: "Application intuitive",
    description:
      "Une app simple pour recevoir les courses et gerer vos gains en temps reel.",
  },
  {
    icon: Shield,
    title: "Assurance incluse",
    description:
      "Beneficiez d'une couverture d'assurance pendant vos courses.",
  },
  {
    icon: Headphones,
    title: "Support 24/7",
    description:
      "Une equipe dediee pour vous accompagner a tout moment.",
  },
  {
    icon: TrendingUp,
    title: "Bonus et primes",
    description:
      "Profitez de bonus hebdomadaires et de primes de performance.",
  },
];

const steps = [
  {
    icon: FileText,
    title: "Inscription en ligne",
    description:
      "Remplissez le formulaire d'inscription avec vos informations et documents.",
  },
  {
    icon: UserCheck,
    title: "Verification",
    description:
      "Notre equipe verifie vos documents et valide votre profil sous 48h.",
  },
  {
    icon: Smartphone,
    title: "Telechargez l'app",
    description:
      "Une fois valide, telechargez l'application chauffeur UPJUNOO PRO.",
  },
  {
    icon: Car,
    title: "Commencez a rouler",
    description:
      "Activez votre disponibilite et commencez a recevoir des courses !",
  },
];

const requirements = [
  "Avoir au moins 21 ans",
  "Posseder un permis de conduire valide",
  "Avoir un vehicule en bon etat (moins de 10 ans)",
  "Casier judiciaire vierge",
  "Assurance vehicule a jour",
  "Smartphone compatible (Android/iOS)",
];

export default function ChauffeurPage() {
  return (
    <>
      <PageHero
        badge="Rejoignez-nous"
        title="Devenez chauffeur"
        highlight="UPJUNOO"
        description="Rejoignez notre equipe de chauffeurs et profitez d'une liberte totale, de revenus attractifs et d'un accompagnement de qualite."
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild className="gap-2">
            <Link href="#apply">
              <UserCheck className="h-5 w-5" />
              S'inscrire maintenant
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

      {/* Benefits */}
      <section id="benefits" className="py-20 lg:py-28">
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
              Pourquoi devenir chauffeur UPJUNOO ?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Rejoignez une communaute de chauffeurs qui ont choisi la liberte et
              les bons revenus.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow border-border/50">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                      <benefit.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to join */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Comment rejoindre
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
              4 etapes pour commencer
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-border" />
                )}
                <div className="relative text-center">
                  <div className="w-20 h-20 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 relative z-10">
                    <step.icon className="h-8 w-8" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-card border-2 border-primary text-primary font-bold text-sm flex items-center justify-center z-20 left-1/2 ml-6">
                    {index + 1}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-medium text-sm uppercase tracking-wider">
                Conditions
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-6">
                Ce qu'il vous faut pour commencer
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Quelques conditions simples pour rejoindre notre equipe de
                chauffeurs partenaires.
              </p>

              <ul className="space-y-4">
                {requirements.map((req, index) => (
                  <motion.li
                    key={req}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>{req}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square max-w-md mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary/10 rounded-3xl" />
                <div className="absolute inset-8 bg-card rounded-2xl shadow-xl flex items-center justify-center">
                  <div className="text-center p-8">
                    <motion.div
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="mb-4"
                    >
                      <Image
                        src="/images/voiture.png"
                        alt="Voiture UPJUNOO"
                        width={120}
                        height={80}
                        className="w-24 h-auto mx-auto"
                      />
                    </motion.div>
                    <h3 className="font-bold text-xl mb-2">
                      +500 chauffeurs actifs
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Rejoignez une communaute en pleine croissance
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="apply" className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl bg-gradient-to-br from-primary to-primary/90 p-8 lg:p-16 text-center overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
                  backgroundSize: "24px 24px",
                }}
              />
            </div>
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
                Pret a rejoindre l'aventure ?
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
                Inscrivez-vous aujourd'hui et commencez a gagner de l'argent des
                cette semaine.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  variant="secondary"
                  asChild
                  className="gap-2 bg-white text-primary hover:bg-white/90"
                >
                  <Link href="/#download">
                    <Download className="h-5 w-5" />
                    Telecharger l'app chauffeur
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="gap-2 border-white text-white hover:bg-white/10"
                >
                  <Link href="/contact">
                    Nous contacter
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
