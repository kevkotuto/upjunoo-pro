"use client";

import { motion } from "motion/react";
import {
  HelpCircle,
  Download,
  CreditCard,
  Users,
  MapPin,
  Package,
  Headphones,
  Building2,
  Car,
  Key,
  Shield,
  Smartphone,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { PageHero } from "@/components/sections/page-hero";
import Link from "next/link";

const faqCategories = [
  {
    icon: Smartphone,
    title: "Application",
    faqs: [
      {
        question: "Comment télécharger l'application UPJUNOO PRO ?",
        answer:
          "L'application UPJUNOO PRO est disponible gratuitement sur l'App Store pour iOS et sur Google Play pour Android. Recherchez 'UPJUNOO PRO' et téléchargez l'application en quelques secondes.",
      },
      {
        question: "L'application est-elle gratuite ?",
        answer:
          "Oui, l'application UPJUNOO PRO est entièrement gratuite à télécharger et à utiliser. Vous ne payez que pour les services que vous utilisez (courses, livraisons, locations).",
      },
      {
        question: "Comment créer un compte ?",
        answer:
          "Téléchargez l'application, puis suivez les étapes d'inscription en renseignant votre numéro de téléphone et vos informations personnelles. Une vérification par SMS vous sera envoyée pour confirmer votre compte.",
      },
    ],
  },
  {
    icon: CreditCard,
    title: "Paiement",
    faqs: [
      {
        question: "Quels sont les modes de paiement acceptés ?",
        answer:
          "Nous acceptons plusieurs modes de paiement : Mobile Money (Orange Money, MTN Money, Wave, etc.), paiement en espèces selon les régions, et le portefeuille électronique UPJUNOO PRO. Vous pouvez configurer votre mode de paiement préféré dans l'application.",
      },
      {
        question: "Comment sont calculées les courses ?",
        answer:
          "Les courses UPJUNOO PRO sont calculées en fonction de la distance et du temps de trajet. Vous voyez toujours une estimation avant de confirmer votre course. Aucune surprise, tout est transparent.",
      },
      {
        question: "Puis-je obtenir une facture ?",
        answer:
          "Oui, un reçu est automatiquement généré après chaque course ou service. Vous pouvez le retrouver dans l'historique de vos trajets dans l'application.",
      },
    ],
  },
  {
    icon: Car,
    title: "Trajets VTC / Taxi",
    faqs: [
      {
        question: "Comment réserver une course ?",
        answer:
          "Ouvrez l'application, entrez votre destination, choisissez le type de véhicule souhaité et confirmez. Un chauffeur vous sera attribué en quelques instants et vous pourrez suivre son arrivée en temps réel.",
      },
      {
        question: "Puis-je annuler une course ?",
        answer:
          "Oui, vous pouvez annuler une course à tout moment avant l'arrivée du chauffeur. Des frais d'annulation peuvent s'appliquer si le chauffeur est déjà en route depuis un certain temps.",
      },
      {
        question: "Comment noter mon chauffeur ?",
        answer:
          "À la fin de chaque course, vous êtes invité à noter votre chauffeur de 1 à 5 étoiles et à laisser un commentaire. Cela nous aide à maintenir la qualité du service.",
      },
    ],
  },
  {
    icon: Package,
    title: "Livraison",
    faqs: [
      {
        question: "Comment fonctionne le service de livraison ?",
        answer:
          "Le service de livraison UPJUNOO PRO vous permet d'envoyer et recevoir des colis en temps réel. Indiquez simplement les adresses de collecte et de livraison, et un livreur se charge du reste. Vous pouvez suivre votre colis en direct.",
      },
      {
        question: "Quels types de colis puis-je envoyer ?",
        answer:
          "Vous pouvez envoyer des documents, des paquets de petite et moyenne taille, des courses, et bien plus. Les articles dangereux, illégaux ou périssables sont exclus du service.",
      },
      {
        question: "Comment suivre ma livraison ?",
        answer:
          "Une fois votre livraison confirmée, vous pouvez suivre en temps réel la position du livreur sur la carte dans l'application. Vous recevez également des notifications à chaque étape.",
      },
    ],
  },
  {
    icon: Key,
    title: "Location de véhicules",
    faqs: [
      {
        question: "Comment louer un véhicule ?",
        answer:
          "Téléchargez l'application UPJUNOO PRO, sélectionnez 'Location', choisissez votre véhicule, vos dates et votre point de retrait. Confirmez votre réservation et payez en ligne. C'est aussi simple que ça !",
      },
      {
        question: "Quels documents sont nécessaires pour louer ?",
        answer:
          "Pour louer un véhicule, vous devez présenter une pièce d'identité valide (CNI ou passeport) et un permis de conduire en cours de validité. Une caution peut être demandée selon le type de véhicule.",
      },
      {
        question: "Puis-je modifier ou annuler ma réservation ?",
        answer:
          "Oui, vous pouvez modifier ou annuler votre réservation jusqu'à 24 heures avant la date de retrait sans frais. Au-delà, des frais d'annulation peuvent s'appliquer.",
      },
    ],
  },
  {
    icon: MapPin,
    title: "Disponibilité",
    faqs: [
      {
        question: "UPJUNOO PRO est-il disponible dans ma ville ?",
        answer:
          "UPJUNOO PRO est présent dans plusieurs villes à travers l'Afrique et au-delà. Consultez notre page 'Nos Implantations' pour vérifier la disponibilité dans votre région.",
      },
      {
        question: "Comment savoir si le service est disponible chez moi ?",
        answer:
          "Téléchargez l'application et entrez votre adresse. Si des chauffeurs sont disponibles dans votre zone, vous pourrez commander un service immédiatement.",
      },
    ],
  },
  {
    icon: Users,
    title: "Partenaires",
    faqs: [
      {
        question: "Comment devenir chauffeur partenaire ?",
        answer:
          "Pour devenir chauffeur partenaire UPJUNOO PRO, rendez-vous sur la page 'Devenir Chauffeur' et contactez un gestionnaire de flotte agréé qui vous accompagnera dans les démarches.",
      },
      {
        question: "Comment devenir franchise UPJUNOO PRO ?",
        answer:
          "Pour devenir franchise, rendez-vous sur la page 'Offres Partenaires > Franchises'. Vous y trouverez toutes les informations sur le profil recherché, les avantages et les conditions. Contactez notre équipe pour discuter de votre projet.",
      },
    ],
  },
  {
    icon: Headphones,
    title: "Support",
    faqs: [
      {
        question: "Comment contacter le support client ?",
        answer:
          "Notre équipe support est disponible 24/7. Vous pouvez nous contacter via l'application, par email à contact@upjunoopro.com, ou via notre page Contact. Nous nous engageons à répondre dans les plus brefs délais.",
      },
      {
        question: "J'ai un problème avec une course, que faire ?",
        answer:
          "Rendez-vous dans l'historique de vos courses dans l'application, sélectionnez la course concernée et cliquez sur 'Signaler un problème'. Vous pouvez également nous contacter directement via le support.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      <PageHero
        badge="Aide"
        title="Questions"
        highlight="fréquentes"
        description="Trouvez rapidement les réponses à vos questions les plus courantes sur UPJUNOO PRO."
        backgroundImage="/images/banniere/personne-sourriante-16-9.jpg"
      />

      {/* Quick Links */}
      <section className="py-12 border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
              {faqCategories.map((category, index) => (
                <a
                  key={category.title}
                  href={`#${category.title.toLowerCase()}`}
                  className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-muted transition-colors text-center"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <category.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-xs font-medium">{category.title}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                id={category.title.toLowerCase()}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.05 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="font-bold text-xl">{category.title}</h2>
                </div>

                <Accordion type="single" collapsible className="space-y-3">
                  {category.faqs.map((faq, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <AccordionItem
                        value={`${category.title}-${index}`}
                        className="bg-card border border-border/50 rounded-xl px-6 data-[state=open]:border-primary/30"
                      >
                        <AccordionTrigger className="text-left font-medium hover:no-underline py-4 text-sm sm:text-base">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground pb-4 text-sm sm:text-base">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    </motion.div>
                  ))}
                </Accordion>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Need Help */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <HelpCircle className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">
              Vous n'avez pas trouvé votre réponse ?
            </h2>
            <p className="text-muted-foreground mb-8">
              Notre équipe support est disponible pour vous aider.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/support"
                className="px-6 py-3 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Contacter le support
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
              >
                Nous écrire
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
