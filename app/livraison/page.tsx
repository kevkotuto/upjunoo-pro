"use client";

import { motion } from "motion/react";
import {
  Package,
  Zap,
  MapPin,
  Shield,
  Clock,
  Headphones,
  Truck,
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
    icon: Zap,
    title: "Livraison express",
    description:
      "Vos colis livres en un temps record grace a notre reseau de livreurs reactifs.",
  },
  {
    icon: MapPin,
    title: "Suivi en temps reel",
    description:
      "Suivez votre colis a chaque etape de la livraison directement sur l'app.",
  },
  {
    icon: Shield,
    title: "Colis securises",
    description:
      "Vos envois sont proteges et manipules avec soin par nos livreurs professionnels.",
  },
  {
    icon: Clock,
    title: "Disponible 24/7",
    description:
      "Envoyez vos colis a tout moment, notre service est disponible jour et nuit.",
  },
  {
    icon: Headphones,
    title: "Support dedie",
    description:
      "Une equipe a votre ecoute pour repondre a toutes vos questions.",
  },
  {
    icon: Truck,
    title: "Tous types de colis",
    description:
      "Documents, paquets, courses... Nous livrons tout ce dont vous avez besoin.",
  },
];

const deliveryTypes = [
  {
    title: "Express",
    time: "30 min - 1h",
    description: "Pour vos livraisons urgentes en ville",
    icon: Zap,
    popular: true,
  },
  {
    title: "Standard",
    time: "2h - 4h",
    description: "Le meilleur rapport qualite-prix",
    icon: Package,
    popular: false,
  },
  {
    title: "Programmee",
    time: "A votre convenance",
    description: "Planifiez votre livraison a l'avance",
    icon: Clock,
    popular: false,
  },
];

export default function LivraisonPage() {
  return (
    <>
      <PageHero
        badge="Service Livraison"
        title="Envoyez vos colis"
        highlight="en temps record"
        description="Un service de livraison rapide, fiable et securise pour tous vos envois, des documents aux colis volumineux."
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild className="gap-2">
            <Link href="/#download">
              <Download className="h-5 w-5" />
              Envoyer un colis
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="gap-2">
            <Link href="#types">
              Voir les options
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
              src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=1200&q=80"
              alt="Service livraison UPJUNOO PRO - Livreur professionnel"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-primary/30" />
            <div className="absolute inset-0 flex items-center p-8 sm:p-12">
              <div className="text-white max-w-lg">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                  Livraison rapide et securisee
                </h2>
                <p className="text-white/80">
                  Vos colis livres en temps record par nos livreurs professionnels.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Delivery Types */}
      <section id="types" className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Options de livraison
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
              Choisissez votre mode de livraison
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {deliveryTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  className={`h-full relative overflow-hidden ${
                    type.popular ? "border-primary shadow-lg" : "border-border/50"
                  }`}
                >
                  {type.popular && (
                    <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-bl-lg">
                      Populaire
                    </div>
                  )}
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 ${
                        type.popular ? "bg-primary text-primary-foreground" : "bg-primary/10"
                      }`}
                    >
                      <type.icon
                        className={`h-7 w-7 ${type.popular ? "" : "text-primary"}`}
                      />
                    </div>
                    <h3 className="font-semibold text-xl mb-1">{type.title}</h3>
                    <p className="text-primary font-medium mb-3">{type.time}</p>
                    <p className="text-muted-foreground text-sm">
                      {type.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Un service de livraison complet
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Tout ce dont vous avez besoin pour envoyer et recevoir vos colis en
              toute confiance.
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
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-medium text-sm uppercase tracking-wider">
                Simple et rapide
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-6">
                Comment envoyer un colis ?
              </h2>

              <div className="space-y-6">
                {[
                  {
                    step: "1",
                    title: "Decrivez votre colis",
                    desc: "Indiquez le type, la taille et le poids de votre envoi.",
                  },
                  {
                    step: "2",
                    title: "Definissez les adresses",
                    desc: "Entrez les adresses d'enlevement et de livraison.",
                  },
                  {
                    step: "3",
                    title: "Choisissez le mode",
                    desc: "Selectionnez entre express, standard ou programme.",
                  },
                  {
                    step: "4",
                    title: "Suivez votre colis",
                    desc: "Recevez des notifications a chaque etape de la livraison.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square max-w-md mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl" />
                <div className="absolute inset-8 bg-card rounded-2xl shadow-xl flex items-center justify-center">
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Package className="h-24 w-24 text-primary" />
                  </motion.div>
                </div>

                {/* Floating elements */}
                <motion.div
                  animate={{ y: [0, -15, 0], rotate: [-5, 5, -5] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-4 right-4 w-16 h-16 bg-card rounded-2xl shadow-lg flex items-center justify-center"
                >
                  <Zap className="h-8 w-8 text-yellow-500" />
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0], rotate: [5, -5, 5] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-4 left-4 w-16 h-16 bg-card rounded-2xl shadow-lg flex items-center justify-center"
                >
                  <CheckCircle className="h-8 w-8 text-green-500" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Pret a envoyer votre premier colis ?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Telechargez l'application et beneficiez d'une premiere livraison a
              tarif reduit.
            </p>
            <Button size="lg" asChild className="gap-2">
              <Link href="/#download">
                <Download className="h-5 w-5" />
                Commencer maintenant
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
