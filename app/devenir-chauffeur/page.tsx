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
  "Contactez un partenaire gestionnaire de flotte agréé UPJUNOO",
  "Préparez vos documents",
  "Passez un court entretien avec le partenaire",
  "Accédez à l'application après inscription",
  "Recevez une courte formation",
  "Commencez à effectuer vos courses selon un planning défini ou libre",
];

const testimonials = [
  {
    quote:
      "Grâce à mon partenaire UPJUNOO, j'ai repris une activité stable, je suis accompagné et mes revenus sont réguliers.",
    author: "Moussa",
    role: "Chauffeur à Yamoussoukro",
  },
  {
    quote:
      "Je n'avais pas de voiture, mais le gestionnaire m'a intégré dans sa flotte. Aujourd'hui je gagne plus de 300 000 FCFA/mois.",
    author: "Sery",
    role: "Chauffeur à Abidjan",
  },
];

export default function ChauffeurPage() {
  return (
    <>
      <PageHero
        badge="Rejoignez-nous"
        title="Devenez chauffeur partenaire"
        highlight="UPJUNOO"
        description="Roulez librement. Gagnez dignement. Intégrez un réseau structuré et sécurisé."
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

      {/* Why join UPJUNOO */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Rejoindre UPJUNOO
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-6">
              Pourquoi rejoindre UPJUNOO ?
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
                <span className="font-semibold text-primary">UPJUNOO</span> est
                une plateforme VTC panafricaine qui vous permet de devenir
                chauffeur professionnel agréé, avec l&apos;appui d&apos;un
                partenaire gestionnaire de flotte reconnu.
              </p>
              <p className="text-muted-foreground text-center mb-4">
                En tant que chauffeur UPJUNOO, vous intégrez une équipe
                sérieuse, structurée, et appuyée par une technologie moderne.
                Vous travaillez dans un cadre clair, formel et équitable, avec
                des revenus garantis et une progression possible.
              </p>
              <p className="text-center font-semibold text-primary">
                Objectif : Vous accompagner vers une activité stable, respectée
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
              Un processus structuré, un accompagnement personnalisé
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Chez UPJUNOO, vous ne travaillez pas seul. Vous êtes encadré par
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
              Vos avantages en tant que chauffeur UPJUNOO
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
              Conditions pour être validé par un partenaire
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
              UPJUNOO et ses partenaires forment chaque nouveau chauffeur sur :
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
              Comment ça fonctionne ?
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
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                    {index + 1}
                  </div>
                  {index < howItWorks.length - 1 && (
                    <div className="w-0.5 h-full bg-border mt-2" />
                  )}
                </div>
                <div className="flex-1 pb-8">
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
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Témoignages
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
              UPJUNOO en chiffres
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
                <div className="text-3xl sm:text-4xl font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/70 text-sm">
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
                Rejoignez notre équipe de chauffeurs professionnels dès
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
                📍 Ou passez directement par un partenaire agréé proche de vous
              </p>

              <div className="mt-8 pt-8 border-t border-background/20">
                <p className="text-lg font-semibold italic mb-2">
                  &ldquo;Vous êtes bien plus qu&apos;un chauffeur, vous êtes un
                  professionnel.&rdquo;
                </p>
                <p className="text-sm text-background/70">
                  Votre sérieux, notre technologie, et l&apos;appui d&apos;un
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
