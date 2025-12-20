"use client";

import { motion } from "motion/react";
import {
  Smartphone,
  MapPin,
  Clock,
  Shield,
  CreditCard,
  Star,
  CheckCircle,
  ArrowRight,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageHero } from "@/components/sections/page-hero";
import Link from "next/link";
import Image from "next/image";

const features = [
  {
    icon: Smartphone,
    title: "Reservation en quelques clics",
    description:
      "Commandez votre taxi directement depuis l'application en moins de 30 secondes.",
  },
  {
    icon: MapPin,
    title: "Suivi GPS en temps reel",
    description:
      "Suivez l'arrivee de votre chauffeur et votre trajet en direct sur la carte.",
  },
  {
    icon: Clock,
    title: "Estimation du temps",
    description:
      "Connaissez a l'avance le temps d'arrivee et la duree estimee de votre trajet.",
  },
  {
    icon: Shield,
    title: "Chauffeurs verifies",
    description:
      "Tous nos chauffeurs sont rigoureusement selectionnes et verifies.",
  },
  {
    icon: CreditCard,
    title: "Paiement flexible",
    description:
      "Payez en especes, par mobile money ou carte bancaire selon vos preferences.",
  },
  {
    icon: Star,
    title: "Systeme de notation",
    description:
      "Evaluez votre course et aidez-nous a maintenir un service de qualite.",
  },
];

const steps = [
  {
    number: "01",
    title: "Telechargez l'application",
    description: "Disponible sur App Store, Google Play et en APK direct.",
  },
  {
    number: "02",
    title: "Entrez votre destination",
    description: "Indiquez ou vous souhaitez aller et obtenez une estimation.",
  },
  {
    number: "03",
    title: "Confirmez votre course",
    description: "Un chauffeur proche de vous accepte votre demande.",
  },
  {
    number: "04",
    title: "Profitez du trajet",
    description: "Voyagez en toute serenite et payez a l'arrivee.",
  },
];

export default function PassagerPage() {
  return (
    <>
      <PageHero
        badge="Service Passager"
        title="Commandez un taxi"
        highlight="en toute simplicite"
        description="Reservez votre course en quelques clics et deplacez-vous sereinement a travers la ville avec nos chauffeurs professionnels."
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild className="gap-2">
            <Link href="#download">
              <Download className="h-5 w-5" />
              Telecharger l'app
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="gap-2">
            <Link href="#how-it-works">
              Comment ca marche
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </PageHero>

      {/* Hero Image */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative h-[300px] sm:h-[400px] rounded-3xl overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1200&q=80"
              alt="Service passager UPJUNOO PRO - Taxi moderne en ville"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-primary/30" />
            <div className="absolute inset-0 flex items-center p-8 sm:p-12">
              <div className="text-white max-w-lg">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                  Voyagez en toute serenite
                </h2>
                <p className="text-white/80">
                  Nos chauffeurs professionnels vous conduisent en toute securite vers votre destination.
                </p>
              </div>
            </div>
          </motion.div>
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Pourquoi choisir UPJUNOO PRO ?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Une experience de transport pensee pour votre confort et votre securite.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow border-border/50">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
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

      {/* How it works */}
      <section id="how-it-works" className="py-20 lg:py-28 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Comment ca marche
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
              Reservez en 4 etapes simples
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-border" />
                )}
                <div className="relative bg-card rounded-2xl p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.number}
                  </div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl bg-primary p-8 lg:p-16 text-center overflow-hidden"
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
                Pret a voyager ?
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
                Telechargez l'application UPJUNOO PRO et commencez a vous deplacer
                en toute serenite des maintenant.
              </p>
              <Button
                size="lg"
                variant="secondary"
                asChild
                className="gap-2 bg-white text-primary hover:bg-white/90"
              >
                <Link href="/#download">
                  <Download className="h-5 w-5" />
                  Telecharger maintenant
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
