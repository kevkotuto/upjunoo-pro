"use client";

import { motion } from "motion/react";
import {
  Building2,
  TrendingUp,
  Users,
  Headphones,
  Shield,
  Rocket,
  CheckCircle,
  ArrowRight,
  Mail,
  BarChart3,
  Target,
  Award,
  Settings,
  Globe,
  Briefcase,
  UserCheck,
  Network,
  FileCheck,
  Quote,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageHero } from "@/components/sections/page-hero";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { trackFranchiseLead, trackExternalLink } from "@/lib/analytics";

const marketPotential = [
  {
    icon: TrendingUp,
    text: "Croissance rapide du besoin en mobilite urbaine dans les grandes villes",
  },
  {
    icon: Users,
    text: "Demande croissante de services fiables et digitalises",
  },
  {
    icon: Target,
    text: "Opportunite unique de se positionner en pionnier",
  },
];

const franchiseeProfile = [
  {
    icon: Briefcase,
    text: "Un entrepreneur ou investisseur avec une capacite a mobiliser un apport personnel",
  },
  {
    icon: Building2,
    text: "Proprietaire d'une flotte de vehicule, motos ou engins logistique",
  },
  {
    icon: UserCheck,
    text: "Un bon gestionnaire, rigoureux et organise",
  },
  {
    icon: Users,
    text: "A l'aise avec la gestion d'equipes (agents terrain, commerciaux)",
  },
  {
    icon: Network,
    text: "Dote d'un bon reseau relationnel dans votre pays",
  },
  {
    icon: Award,
    text: "Sensible a la qualite de service et a la satisfaction client",
  },
];

const upjunooOffers = [
  {
    title: "Un modele cle en main",
    icon: Rocket,
    items: [
      "Application mobile complete (passager, chauffeur, partenaire et gestionnaire de flotte)",
      "Interface d'administration locale avec outils de reporting",
      "Structure tarifaire dynamique adaptee a votre marche",
    ],
  },
  {
    title: "Une marque forte et structuree",
    icon: Award,
    items: [
      "Identite visuelle professionnelle et coherente",
      "Notoriete croissante sur les reseaux sociaux et medias",
      "Reseau de partenaires techniques et institutionnels",
    ],
  },
  {
    title: "Un accompagnement operationnel continu",
    icon: Headphones,
    items: [
      "Formation initiale (outils, methodes, gestion)",
      "Coaching mensuel et revue de performance",
      "Support 24/7 (technique, communication, administratif)",
      "Acces a un reseau de franchises pour partager les bonnes pratiques",
    ],
  },
  {
    title: "Un cadre contractuel securise",
    icon: Shield,
    items: [
      "Exclusivite geographique sur votre ville ou region",
      "Contrat renouvelable avec indicateurs de performance clairs",
      "Partage de revenus motivant : commission sur toutes les courses, livraisons et locations generees",
    ],
  },
];

const responsibilities = [
  "Recruter et former les chauffeurs",
  "Assurer la conformite des vehicules (entretien, branding, assurance)",
  "Gerer les operations (activation des services, SAV, ponctualite)",
  "Deployer localement les campagnes de communication et de promotion",
  "Developper des partenariats avec les entreprises, institutions et evenements",
];

const accessConditions = [
  {
    icon: FileCheck,
    text: "Signature d'un contrat de 3 ans renouvelable",
  },
  {
    icon: Award,
    text: "Engagement de respect de la charte UPJUNOO PRO (qualite, image, gestion)",
  },
  {
    icon: Settings,
    text: "Formation obligatoire et validation du business plan local",
  },
  {
    icon: BarChart3,
    text: "Reporting regulier (revenus, incidents, performances)",
  },
];

const testimonials = [
  {
    quote:
      "Depuis que j'ai lance UPJUNOO PRO a Abidjan, nous avons cree plus de 30 emplois et offrons un service de qualite a des milliers de clients. L'accompagnement technique et commercial est remarquable.",
    author: "Kouame A.",
    role: "Franchise Abidjan, Cote d'Ivoire",
  },
  {
    quote:
      "UPJUNOO PRO m'a permis de structurer mon activite de transport et de passer a l'echelle. Les outils de gestion sont intuitifs et le support est toujours reactif.",
    author: "Amadou D.",
    role: "Franchise Dakar, Senegal",
  },
];

export default function FranchisesPage() {
  // Track page view for franchise lead
  useEffect(() => {
    trackFranchiseLead('page_view');
  }, []);

  return (
    <>
      <PageHero
        badge="Opportunite exclusive"
        title="Devenez franchise de la"
        highlight="mobilite urbaine de demain"
        description="Une opportunite exclusive d'investir dans un secteur en pleine croissance internationale."
        backgroundImage="/images/banniere/voiture-brander-upjunoo-16-9.png"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild className="gap-2" onClick={() => trackFranchiseLead('cta_click')}>
            <Link href="#contact">
              <Building2 className="h-5 w-5" />
              Devenir franchise
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="gap-2">
            <Link href="#benefits">
              En savoir plus
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </PageHero>

      {/* Why become a franchisee */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              La franchise UPJUNOO PRO
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-6">
              Pourquoi devenir franchise UPJUNOO PRO ?
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
                est une plateforme internationale de transport intelligent qui
                transforme la mobilite urbaine grace a une application mobile
                integrant les services de{" "}
                <span className="font-semibold">taxi, livraison</span>, et{" "}
                <span className="font-semibold">location de vehicules</span>.
              </p>
              <p className="text-muted-foreground text-center">
                Le modele de franchise vous permet d'exploiter la marque
                UPJUNOO PRO dans votre ville, tout en beneficiant d'un{" "}
                <span className="font-semibold">
                  soutien strategique, technique et operationnel
                </span>{" "}
                pour garantir votre succes.
              </p>
            </motion.div>

            {/* Market Potential */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <BarChart3 className="h-6 w-6 text-primary" />
                Marche a fort potentiel
              </h3>
              <div className="grid sm:grid-cols-3 gap-4">
                {marketPotential.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="h-full border-border/50">
                      <CardContent className="p-6">
                        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                          <item.icon className="h-6 w-6 text-primary" />
                        </div>
                        <p className="text-sm">{item.text}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Franchisee Profile */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Profil recherche
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
              Profil du franchise
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Nous recherchons des{" "}
              <span className="font-semibold">acteurs locaux engages</span> et
              orientes resultat.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <p className="text-center text-lg font-medium mb-8">Vous etes :</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {franchiseeProfile.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 bg-card p-4 rounded-xl border border-border/50"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-sm pt-2">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What UPJUNOO offers */}
      <section id="benefits" className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Nos engagements
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
              Ce que vous apporte UPJUNOO PRO
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-8">
            {upjunooOffers.map((offer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-border/50">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                        <offer.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-bold text-xl">{offer.title}</h3>
                    </div>
                    <ul className="space-y-3">
                      {offer.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{item}</span>
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
              Outils de gestion
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
              Votre interface <span className="text-primary">d'administration</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Pilotez votre franchise avec des outils professionnels et intuitifs.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                src: "/images/screenshots/partenaire-dashboard.jpeg",
                title: "Tableau de bord",
                description: "Supervisez l'ensemble de votre activite",
              },
              {
                src: "/images/screenshots/partenaire-gestion-vehicules.jpeg",
                title: "Gestion de flotte",
                description: "Controlez tous vos vehicules",
              },
              {
                src: "/images/screenshots/partenaire-affectation.jpeg",
                title: "Gestion des chauffeurs",
                description: "Affectez et suivez vos equipes",
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

      {/* Local Responsibilities */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Vos missions
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
              Vos responsabilites locales
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              En tant que franchise, vous etes le relais officiel UPJUNOO PRO
              dans votre territoire.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Card className="border-primary/20">
              <CardContent className="p-8">
                <p className="text-center mb-6 font-medium">
                  Vos principales missions :
                </p>
                <ul className="space-y-4">
                  {responsibilities.map((resp, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>{resp}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Investment & Profitability */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Investissement
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
              Investissement & rentabilite
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-primary/20">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left p-4 sm:p-6 font-semibold">Poste</th>
                        <th className="text-left p-4 sm:p-6 font-semibold">Detail</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border">
                        <td className="p-4 sm:p-6 font-medium">
                          Apport personnel recommande
                        </td>
                        <td className="p-4 sm:p-6">Nous consulter</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-4 sm:p-6 font-medium">
                          Frais de licence initiale
                        </td>
                        <td className="p-4 sm:p-6">
                          Variable selon la taille du territoire
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-4 sm:p-6 font-medium">Pack de demarrage</td>
                        <td className="p-4 sm:p-6">
                          Outils, formation, branding vehicule
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-4 sm:p-6 font-medium">Rentabilite moyenne</td>
                        <td className="p-4 sm:p-6 text-primary font-semibold">
                          Nous consulter
                        </td>
                      </tr>
                      <tr>
                        <td className="p-4 sm:p-6 font-medium">
                          Revenu mensuel potentiel
                        </td>
                        <td className="p-4 sm:p-6 text-primary font-semibold">
                          Variable selon le territoire
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Access Conditions */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Conditions
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
              Conditions d&apos;acces a la franchise
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-4">
            {accessConditions.map((condition, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <condition.icon className="h-5 w-5 text-primary" />
                      </div>
                      <p className="text-sm pt-2">{condition.text}</p>
                    </div>
                  </CardContent>
                </Card>
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
              Temoignages de franchises
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

      {/* Contact CTA */}
      <section id="contact" className="py-20 lg:py-28 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl bg-gradient-to-br from-primary to-primary/80 p-8 lg:p-16 text-center overflow-hidden"
          >
            <div className="relative text-primary-foreground">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Pret a franchir le cap ?
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
                Contactez notre equipe developpement franchise pour discuter de
                votre projet et obtenir toutes les informations.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a
                  href="mailto:contact@upjunoo.com"
                  onClick={() => {
                    trackFranchiseLead('email_click');
                    trackExternalLink('mailto:contact@upjunoo.com', 'email');
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-background text-foreground font-medium hover:bg-background/90 transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  contact@upjunoo.com
                </a>
                <a
                  href="https://www.upjunoo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    trackFranchiseLead('website_click');
                    trackExternalLink('https://www.upjunoo.com', 'website');
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-foreground/10 text-primary-foreground font-medium hover:bg-primary-foreground/20 transition-colors"
                >
                  <Globe className="h-5 w-5" />
                  www.upjunoo.com
                </a>
              </div>

              <p className="text-sm text-primary-foreground/60 mb-4">
                Franchise disponible dans plusieurs regions (hors zones deja
                sous contrat)
              </p>
              <p className="text-sm font-medium italic">
                &ldquo;Ensemble, construisons un reseau de mobilite
                international, fiable, rentable et durable.&rdquo;
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
