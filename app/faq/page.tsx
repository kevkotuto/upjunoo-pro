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
        question: "Comment telecharger l'application UPJUNOO PRO ?",
        answer:
          "L'application UPJUNOO PRO est disponible gratuitement sur l'App Store pour iOS et sur Google Play pour Android. Recherchez 'UPJUNOO PRO' et telechargez l'application en quelques secondes.",
      },
      {
        question: "L'application est-elle gratuite ?",
        answer:
          "Oui, l'application UPJUNOO PRO est entierement gratuite a telecharger et a utiliser. Vous ne payez que pour les services que vous utilisez (courses, livraisons, locations).",
      },
      {
        question: "Comment creer un compte ?",
        answer:
          "Telechargez l'application, puis suivez les etapes d'inscription en renseignant votre numero de telephone et vos informations personnelles. Une verification par SMS vous sera envoyee pour confirmer votre compte.",
      },
    ],
  },
  {
    icon: CreditCard,
    title: "Paiement",
    faqs: [
      {
        question: "Quels sont les modes de paiement acceptes ?",
        answer:
          "Nous acceptons plusieurs modes de paiement : Mobile Money (Orange Money, MTN Money, Wave, etc.), paiement en especes selon les regions, et le portefeuille electronique UPJUNOO PRO. Vous pouvez configurer votre mode de paiement prefere dans l'application.",
      },
      {
        question: "Comment sont calculees les courses ?",
        answer:
          "Les courses UPJUNOO PRO sont calculees en fonction de la distance et du temps de trajet. Vous voyez toujours une estimation avant de confirmer votre course. Aucune surprise, tout est transparent.",
      },
      {
        question: "Puis-je obtenir une facture ?",
        answer:
          "Oui, un recu est automatiquement genere apres chaque course ou service. Vous pouvez le retrouver dans l'historique de vos trajets dans l'application.",
      },
    ],
  },
  {
    icon: Car,
    title: "Trajets VTC / Taxi",
    faqs: [
      {
        question: "Comment reserver une course ?",
        answer:
          "Ouvrez l'application, entrez votre destination, choisissez le type de vehicule souhaite et confirmez. Un chauffeur vous sera attribue en quelques instants et vous pourrez suivre son arrivee en temps reel.",
      },
      {
        question: "Puis-je annuler une course ?",
        answer:
          "Oui, vous pouvez annuler une course a tout moment avant l'arrivee du chauffeur. Des frais d'annulation peuvent s'appliquer si le chauffeur est deja en route depuis un certain temps.",
      },
      {
        question: "Comment noter mon chauffeur ?",
        answer:
          "A la fin de chaque course, vous etes invite a noter votre chauffeur de 1 a 5 etoiles et a laisser un commentaire. Cela nous aide a maintenir la qualite du service.",
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
          "Le service de livraison UPJUNOO PRO vous permet d'envoyer et recevoir des colis en temps reel. Indiquez simplement les adresses de collecte et de livraison, et un livreur se charge du reste. Vous pouvez suivre votre colis en direct.",
      },
      {
        question: "Quels types de colis puis-je envoyer ?",
        answer:
          "Vous pouvez envoyer des documents, des paquets de petite et moyenne taille, des courses, et bien plus. Les articles dangereux, illegaux ou perissables sont exclus du service.",
      },
      {
        question: "Comment suivre ma livraison ?",
        answer:
          "Une fois votre livraison confirmee, vous pouvez suivre en temps reel la position du livreur sur la carte dans l'application. Vous recevez egalement des notifications a chaque etape.",
      },
    ],
  },
  {
    icon: Key,
    title: "Location de vehicules",
    faqs: [
      {
        question: "Comment louer un vehicule ?",
        answer:
          "Telechargez l'application UPJUNOO PRO, selectionnez 'Location', choisissez votre vehicule, vos dates et votre point de retrait. Confirmez votre reservation et payez en ligne. C'est aussi simple que ca !",
      },
      {
        question: "Quels documents sont necessaires pour louer ?",
        answer:
          "Pour louer un vehicule, vous devez presenter une piece d'identite valide (CNI ou passeport) et un permis de conduire en cours de validite. Une caution peut etre demandee selon le type de vehicule.",
      },
      {
        question: "Puis-je modifier ou annuler ma reservation ?",
        answer:
          "Oui, vous pouvez modifier ou annuler votre reservation jusqu'a 24 heures avant la date de retrait sans frais. Au-dela, des frais d'annulation peuvent s'appliquer.",
      },
    ],
  },
  {
    icon: MapPin,
    title: "Disponibilite",
    faqs: [
      {
        question: "UPJUNOO PRO est-il disponible dans ma ville ?",
        answer:
          "UPJUNOO PRO est present dans plusieurs villes a travers l'Afrique et au-dela. Consultez notre page 'Nos Implantations' pour verifier la disponibilite dans votre region.",
      },
      {
        question: "Comment savoir si le service est disponible chez moi ?",
        answer:
          "Telechargez l'application et entrez votre adresse. Si des chauffeurs sont disponibles dans votre zone, vous pourrez commander un service immediatement.",
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
          "Pour devenir chauffeur partenaire UPJUNOO PRO, rendez-vous sur la page 'Devenir Chauffeur' et contactez un gestionnaire de flotte agree qui vous accompagnera dans les demarches.",
      },
      {
        question: "Comment devenir franchise UPJUNOO PRO ?",
        answer:
          "Pour devenir franchise, rendez-vous sur la page 'Offres Partenaires > Franchises'. Vous y trouverez toutes les informations sur le profil recherche, les avantages et les conditions. Contactez notre equipe pour discuter de votre projet.",
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
          "Notre equipe support est disponible 24/7. Vous pouvez nous contacter via l'application, par email a contact@upjunoo.com, ou via notre page Contact. Nous nous engageons a repondre dans les plus brefs delais.",
      },
      {
        question: "J'ai un probleme avec une course, que faire ?",
        answer:
          "Rendez-vous dans l'historique de vos courses dans l'application, selectionnez la course concernee et cliquez sur 'Signaler un probleme'. Vous pouvez egalement nous contacter directement via le support.",
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
        highlight="frequentes"
        description="Trouvez rapidement les reponses a vos questions les plus courantes sur UPJUNOO PRO."
        backgroundImage="/images/banniere/personne sourriante format -16-9.jpg"
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
              Vous n'avez pas trouve votre reponse ?
            </h2>
            <p className="text-muted-foreground mb-8">
              Notre equipe support est disponible pour vous aider.
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
                Nous ecrire
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
