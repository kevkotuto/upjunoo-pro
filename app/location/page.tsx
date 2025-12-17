"use client";

import { motion } from "motion/react";
import {
  CarFront,
  Calendar,
  Shield,
  CreditCard,
  Clock,
  MapPin,
  CheckCircle,
  ArrowRight,
  Download,
  Key,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PageHero } from "@/components/sections/page-hero";
import Link from "next/link";

const features = [
  {
    icon: CarFront,
    title: "Large gamme de vehicules",
    description:
      "Berlines, SUV, utilitaires... Trouvez le vehicule adapte a vos besoins.",
  },
  {
    icon: Calendar,
    title: "Reservation flexible",
    description:
      "Louez a l'heure, a la journee ou a la semaine selon vos besoins.",
  },
  {
    icon: Shield,
    title: "Vehicules assures",
    description:
      "Tous nos vehicules sont assures et entretenus regulierement.",
  },
  {
    icon: CreditCard,
    title: "Tarifs transparents",
    description:
      "Pas de frais caches, vous savez exactement ce que vous payez.",
  },
  {
    icon: Clock,
    title: "Disponibilite 24/7",
    description:
      "Reservez et recuperez votre vehicule a toute heure du jour et de la nuit.",
  },
  {
    icon: MapPin,
    title: "Points de retrait multiples",
    description:
      "Recuperez votre vehicule dans l'un de nos nombreux points de retrait.",
  },
];

const vehicleCategories = [
  {
    name: "Economique",
    description: "Parfait pour les trajets urbains",
    price: "A partir de 15 000 FCFA/jour",
    features: ["Climatisation", "5 places", "Faible consommation"],
  },
  {
    name: "Confort",
    description: "Pour vos deplacements professionnels",
    price: "A partir de 35 000 FCFA/jour",
    features: ["Climatisation", "5 places", "GPS integre", "Bluetooth"],
  },
  {
    name: "SUV / 4x4",
    description: "Ideal pour les longues distances",
    price: "A partir de 55 000 FCFA/jour",
    features: ["Climatisation", "7 places", "4x4", "Grand coffre"],
  },
];

const faqs = [
  {
    question: "Quels documents sont necessaires pour louer un vehicule ?",
    answer:
      "Pour louer un vehicule chez UPJUNOO, vous devez presenter une piece d'identite valide (CNI ou passeport) et un permis de conduire en cours de validite. Une caution peut etre demandee selon le type de vehicule.",
  },
  {
    question: "Comment fonctionne le processus de reservation ?",
    answer:
      "Telechargez l'application UPJUNOO PRO, selectionnez 'Location', choisissez votre vehicule, vos dates et votre point de retrait. Confirmez votre reservation et payez en ligne. C'est aussi simple que ca !",
  },
  {
    question: "Puis-je modifier ou annuler ma reservation ?",
    answer:
      "Oui, vous pouvez modifier ou annuler votre reservation jusqu'a 24 heures avant la date de retrait sans frais. Au-dela, des frais d'annulation peuvent s'appliquer.",
  },
  {
    question: "Le carburant est-il inclus dans la location ?",
    answer:
      "Le vehicule vous est remis avec un niveau de carburant defini. Vous devez le rendre avec le meme niveau. Le carburant n'est pas inclus dans le prix de la location.",
  },
];

export default function LocationPage() {
  return (
    <>
      <PageHero
        badge="Service Location"
        title="Louez en toute confiance,"
        highlight="partez l'esprit leger"
        description="Une large gamme de vehicules disponibles pour tous vos besoins. Reservation simple, rapide et securisee."
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild className="gap-2">
            <Link href="/#download">
              <Key className="h-5 w-5" />
              Reserver maintenant
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="gap-2">
            <Link href="#vehicles">
              Voir les vehicules
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </PageHero>

      {/* Vehicle Categories */}
      <section id="vehicles" className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Notre flotte
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
              Choisissez votre vehicule
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Des vehicules entretenus et adaptes a tous les budgets.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {vehicleCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow border-border/50 overflow-hidden group">
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <CarFront className="h-20 w-20 text-primary" />
                    </motion.div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-xl mb-1">{category.name}</h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      {category.description}
                    </p>
                    <p className="text-primary font-semibold mb-4">
                      {category.price}
                    </p>
                    <ul className="space-y-2">
                      {category.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          {feature}
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
              Pourquoi louer avec UPJUNOO ?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Un service de location pense pour votre confort et votre tranquillite.
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

      {/* FAQ */}
      <section className="py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
              Questions frequentes
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
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
              Pret a prendre la route ?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Telechargez l'application et reservez votre vehicule en quelques
              minutes.
            </p>
            <Button size="lg" asChild className="gap-2">
              <Link href="/#download">
                <Download className="h-5 w-5" />
                Telecharger l'application
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
