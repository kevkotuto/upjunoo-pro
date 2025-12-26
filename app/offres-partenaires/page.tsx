"use client";

import { motion } from "motion/react";
import { Store, Handshake, UserCheck, ArrowRight, CheckCircle, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageHero } from "@/components/sections/page-hero";
import Link from "next/link";
import Image from "next/image";

const offres = [
  {
    title: "Franchises",
    description:
      "Lancez UPJUNOO PRO dans votre region et developpez votre propre reseau de mobilite.",
    icon: Store,
    href: "/offres-partenaires/franchises",
    features: [
      "Exclusivite geographique",
      "Formation complete",
      "Support operationnel 24/7",
      "Outils de gestion avances",
    ],
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80",
    color: "from-primary to-primary/80",
  },
  {
    title: "Partenaires",
    description:
      "Devenez partenaire commercial et beneficiez de notre ecosysteme en pleine croissance.",
    icon: Handshake,
    href: "/offres-partenaires/partenaires",
    features: [
      "Partenariats entreprises",
      "Solutions B2B",
      "Integrations API",
      "Programmes de fidelite",
    ],
    image: "/images/banniere/personne-sourriante-16-9.jpg",
    color: "from-[#046d7a] to-primary",
  },
  {
    title: "Chauffeurs",
    description:
      "Rejoignez notre equipe de chauffeurs et profitez d'une flexibilite totale.",
    icon: UserCheck,
    href: "/offres-partenaires/chauffeurs",
    features: [
      "Revenus attractifs",
      "Horaires flexibles",
      "Application intuitive",
      "Support continu",
    ],
    image: "/images/banniere/main-volant-upjunoo-1-1.jpg",
    color: "from-yellow-500 to-yellow-400",
  },
];

export default function OffresPartenairesPage() {
  return (
    <>
      <PageHero
        badge="Rejoignez-nous"
        title="Nos offres"
        highlight="partenaires"
        description="Decouvrez les differentes facons de collaborer avec UPJUNOO PRO et de participer a la revolution de la mobilite."
        backgroundImage="/images/banniere/personne-sourriante-16-9.jpg"
      />

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {offres.map((offre, index) => (
              <motion.div
                key={offre.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-border/50 overflow-hidden group hover:border-primary/30 transition-all duration-300">
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={offre.image}
                      alt={offre.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`absolute bottom-4 left-4 w-14 h-14 rounded-2xl bg-gradient-to-br ${offre.color} flex items-center justify-center`}
                    >
                      <offre.icon className="h-7 w-7 text-white" />
                    </motion.div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{offre.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {offre.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {offre.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-sm"
                        >
                          <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center">
                            <CheckCircle className="h-3 w-3 text-green-500" />
                          </div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button asChild className={`w-full gap-2 bg-gradient-to-r ${offre.color}`}>
                      <Link href={offre.href}>
                        En savoir plus
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
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
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "50+", label: "Franchises actives" },
              { value: "1200+", label: "Chauffeurs partenaires" },
              { value: "15", label: "Pays couverts" },
              { value: "98%", label: "Satisfaction partenaires" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="text-4xl sm:text-5xl font-bold mb-2"
                >
                  {stat.value}
                </motion.div>
                <div className="text-primary-foreground/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28">
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

            <div className="relative">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring" }}
                className="w-20 h-20 rounded-full bg-yellow-400 flex items-center justify-center mx-auto mb-6"
              >
                <MessageSquare className="h-10 w-10 text-gray-900" />
              </motion.div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                Vous avez des questions ?
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                Notre equipe est disponible pour repondre a toutes vos questions
                et vous accompagner dans votre projet.
              </p>
              <Button
                size="lg"
                asChild
                className="gap-2 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold text-lg px-8 py-6"
              >
                <Link href="/contact">
                  Nous contacter
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
