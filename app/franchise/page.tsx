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
  Phone,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageHero } from "@/components/sections/page-hero";
import Link from "next/link";

const benefits = [
  {
    icon: Building2,
    title: "Marque etablie",
    description:
      "Beneficiez de la notoriete d'une marque reconnue dans 15 pays africains.",
  },
  {
    icon: Rocket,
    title: "Technologie cle en main",
    description:
      "Acces a notre plateforme technologique complete : applications, back-office, outils de gestion.",
  },
  {
    icon: Users,
    title: "Formation complete",
    description:
      "Formation initiale et continue pour vous et vos equipes sur tous les aspects du business.",
  },
  {
    icon: Headphones,
    title: "Support permanent",
    description:
      "Une equipe dediee pour vous accompagner au quotidien dans le developpement de votre activite.",
  },
  {
    icon: TrendingUp,
    title: "Modele rentable",
    description:
      "Un business model eprouve avec des marges attractives et un ROI rapide.",
  },
  {
    icon: Shield,
    title: "Exclusivite territoriale",
    description:
      "Beneficiez d'une zone d'exclusivite pour developper votre activite sereinement.",
  },
];

const steps = [
  {
    number: "01",
    title: "Candidature",
    description: "Remplissez le formulaire de candidature en ligne.",
  },
  {
    number: "02",
    title: "Entretien",
    description: "Echange avec notre equipe pour evaluer votre projet.",
  },
  {
    number: "03",
    title: "Validation",
    description: "Signature du contrat de franchise et des accords.",
  },
  {
    number: "04",
    title: "Formation",
    description: "Formation intensive de 2 semaines au siege.",
  },
  {
    number: "05",
    title: "Lancement",
    description: "Demarrage de votre activite avec notre accompagnement.",
  },
];

const requirements = [
  "Capacite d'investissement initial",
  "Experience en gestion d'entreprise",
  "Connaissance du marche local",
  "Esprit entrepreneurial",
  "Engagement sur le long terme",
  "Local commercial (optionnel)",
];

export default function FranchisePage() {
  return (
    <>
      <PageHero
        badge="Opportunite"
        title="Devenez franchisé"
        highlight="UPJUNOO"
        description="Lancez votre propre activite de transport et livraison avec une marque leader en Afrique. Nous vous fournissons tout ce dont vous avez besoin pour reussir."
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild className="gap-2">
            <Link href="#contact">
              <Building2 className="h-5 w-5" />
              Devenir franchisé
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

      {/* Stats */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: "15", label: "Pays" },
              { value: "20+", label: "Franchises actives" },
              { value: "95%", label: "Taux de satisfaction" },
              { value: "18 mois", label: "ROI moyen" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-3xl sm:text-4xl font-bold mb-1">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
              Pourquoi choisir la franchise UPJUNOO ?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Rejoignez un reseau solide et beneficiez d'un accompagnement complet
              pour lancer et developper votre activite.
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

      {/* Process */}
      <section className="py-20 lg:py-28 bg-muted/30">
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
              Comment devenir franchisé ?
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    {step.number}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-0.5 h-full bg-border mt-2" />
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="font-semibold text-lg mb-1">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
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
                Profil recherche
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-6">
                Etes-vous le bon candidat ?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Nous recherchons des entrepreneurs motives, prets a s'investir
                dans le developpement d'une activite prometteuse.
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
            >
              <Card className="border-primary/20">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Building2 className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-bold text-xl">Pack Franchise</h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      Investissement initial
                    </p>
                  </div>

                  <div className="text-center mb-6">
                    <span className="text-4xl font-bold">Sur devis</span>
                    <p className="text-sm text-muted-foreground mt-1">
                      Selon la zone et le package choisi
                    </p>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {[
                      "Droit d'entree a la marque",
                      "Formation initiale (2 semaines)",
                      "Applications et back-office",
                      "Support marketing au lancement",
                      "Accompagnement pendant 12 mois",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <Button asChild className="w-full">
                    <Link href="#contact">Demander un devis</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
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
                Interesse par la franchise ?
              </h2>
              <p className="text-background/70 text-lg mb-8 max-w-xl mx-auto">
                Contactez notre equipe developpement franchise pour discuter de
                votre projet et obtenir toutes les informations.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a
                  href="mailto:franchise@upjunoo.pro"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  franchise@upjunoo.pro
                </a>
                <a
                  href="tel:+22500000000"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-background/10 text-background font-medium hover:bg-background/20 transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  +225 00 00 00 00 00
                </a>
              </div>

              <p className="text-sm text-background/50">
                Reponse sous 48h ouvrées
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
