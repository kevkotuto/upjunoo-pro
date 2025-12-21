"use client";

import { motion } from "motion/react";
import { Store, Handshake, UserCheck, ArrowRight } from "lucide-react";
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
    image: "/images/banniere/personne sourriante format -16-9.jpg",
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
    image: "/images/banniere/une main sur un volant avec logo upjunoo pro format 1-1 carre.jpg",
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
      />

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {offres.map((offre, index) => (
              <motion.div
                key={offre.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-border/50 overflow-hidden group hover:border-primary/30 transition-colors">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={offre.image}
                      alt={offre.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center">
                        <offre.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                    </div>
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
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="w-full gap-2">
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

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Vous avez des questions ?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Notre equipe est disponible pour repondre a toutes vos questions
              et vous accompagner dans votre projet.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">Nous contacter</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
