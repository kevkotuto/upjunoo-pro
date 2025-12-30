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
import { useEffect } from "react";
import { trackFranchiseLead, trackExternalLink } from "@/lib/analytics";

const marketPotential = [
  {
    icon: TrendingUp,
    text: "Croissance rapide du besoin en mobilité urbaine dans les grandes villes",
  },
  {
    icon: Users,
    text: "Demande croissante de services fiables et digitalisés",
  },
  {
    icon: Target,
    text: "Opportunité unique de se positionner en pionnier",
  },
];

const franchiseeProfile = [
  {
    icon: Briefcase,
    text: "Un entrepreneur ou investisseur avec une capacité à mobiliser un apport personnel",
  },
  {
    icon: Building2,
    text: "Propriétaire d'une flotte de véhicule, motos ou engins logistique",
  },
  {
    icon: UserCheck,
    text: "Un bon gestionnaire, rigoureux et organisé",
  },
  {
    icon: Users,
    text: "À l'aise avec la gestion d'équipes (agents terrain, commerciaux)",
  },
  {
    icon: Network,
    text: "Doté d'un bon réseau relationnel dans votre pays",
  },
  {
    icon: Award,
    text: "Sensible à la qualité de service et à la satisfaction client",
  },
];

const upjunooOffers = [
  {
    title: "Un modèle clé en main",
    icon: Rocket,
    items: [
      "Application mobile complète (passager, chauffeur, partenaire et gestionnaire de flotte)",
      "Interface d'administration locale avec outils de reporting",
      "Structure tarifaire dynamique adaptée à votre marché",
    ],
  },
  {
    title: "Une marque forte et structurée",
    icon: Award,
    items: [
      "Identité visuelle professionnelle et cohérente",
      "Notoriété croissante sur les réseaux sociaux et médias",
      "Réseau de partenaires techniques et institutionnels",
    ],
  },
  {
    title: "Un accompagnement opérationnel continu",
    icon: Headphones,
    items: [
      "Formation initiale (outils, méthodes, gestion)",
      "Coaching mensuel et revue de performance",
      "Support 24/7 (technique, communication, administratif)",
      "Accès à un réseau de franchises pour partager les bonnes pratiques",
    ],
  },
  {
    title: "Un cadre contractuel sécurisé",
    icon: Shield,
    items: [
      "Exclusivité géographique sur votre ville ou région",
      "Contrat renouvelable avec indicateurs de performance clairs",
      "Partage de revenus motivant : commission sur toutes les courses, livraisons et locations générées",
    ],
  },
];

const responsibilities = [
  "Recruter et former les chauffeurs",
  "Assurer la conformité des véhicules (entretien, branding, assurance)",
  "Gérer les opérations (activation des services, SAV, ponctualité)",
  "Déployer localement les campagnes de communication et de promotion",
  "Développer des partenariats avec les entreprises, institutions et événements",
];

const accessConditions = [
  {
    icon: FileCheck,
    text: "Signature d'un contrat de 3 ans renouvelable",
  },
  {
    icon: Award,
    text: "Engagement de respect de la charte UPJUNOO PRO (qualité, image, gestion)",
  },
  {
    icon: Settings,
    text: "Formation obligatoire et validation du business plan local",
  },
  {
    icon: BarChart3,
    text: "Reporting régulier (revenus, incidents, performances)",
  },
];

const testimonials = [
  {
    quote:
      "Depuis que j'ai lancé UPJUNOO PRO à Abidjan, nous avons créé plus de 30 emplois et offrons un service de qualité à des milliers de clients. L'accompagnement technique et commercial est remarquable.",
    author: "Kouame A.",
    role: "Franchise Abidjan, Côte d'Ivoire",
  },
  {
    quote:
      "UPJUNOO PRO m'a permis de structurer mon activité de transport et de passer à l'échelle. Les outils de gestion sont intuitifs et le support est toujours réactif.",
    author: "Amadou D.",
    role: "Franchise Dakar, Sénégal",
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
        badge="Opportunité exclusive"
        title="Devenez franchisé de la"
        highlight="mobilité urbaine de demain"
        description="Une opportunité exclusive d'investir dans un secteur en pleine croissance internationale."
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
              Pourquoi devenir franchisé UPJUNOO PRO ?
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
                transforme la mobilité urbaine grâce à une application mobile
                intégrant les services de{" "}
                <span className="font-semibold">taxi, livraison</span>, et{" "}
                <span className="font-semibold">location de véhicules</span>.
              </p>
              <p className="text-muted-foreground text-center">
                Le modèle de franchise vous permet d'exploiter la marque
                UPJUNOO PRO dans votre ville, tout en bénéficiant d'un{" "}
                <span className="font-semibold">
                  soutien stratégique, technique et opérationnel
                </span>{" "}
                pour garantir votre succès.
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
                Marché à fort potentiel
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
              Profil recherché
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
              Profil du franchisé
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Nous recherchons des{" "}
              <span className="font-semibold">acteurs locaux engagés</span> et
              orientés résultat.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <p className="text-center text-lg font-medium mb-8">Vous êtes :</p>
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
              Vos responsabilités locales
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              En tant que franchisé, vous êtes le relais officiel UPJUNOO PRO
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
              Investissement & rentabilité
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
                        <th className="text-left p-4 sm:p-6 font-semibold">Détail</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border">
                        <td className="p-4 sm:p-6 font-medium">
                          Apport personnel recommandé
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
                        <td className="p-4 sm:p-6 font-medium">Pack de démarrage</td>
                        <td className="p-4 sm:p-6">
                          Outils, formation, branding véhicule
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-4 sm:p-6 font-medium">Rentabilité moyenne</td>
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
              Conditions d&apos;accès à la franchise
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
              Témoignages
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
              Témoignages de franchises
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
                Prêt à franchir le cap ?
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
                Contactez notre équipe développement franchise pour discuter de
                votre projet et obtenir toutes les informations.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a
                  href="mailto:contact@upjunoopro.com"
                  onClick={() => {
                    trackFranchiseLead('email_click');
                    trackExternalLink('mailto:contact@upjunoopro.com', 'email');
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-background text-foreground font-medium hover:bg-background/90 transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  contact@upjunoopro.com
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
                Franchise disponible dans plusieurs régions (hors zones déjà
                sous contrat)
              </p>
              <p className="text-sm font-medium italic">
                &ldquo;Ensemble, construisons un réseau de mobilité
                international, fiable, rentable et durable.&rdquo;
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
