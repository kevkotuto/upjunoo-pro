"use client";

import { motion } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Comment telecharger l'application UPJUNOO PRO ?",
    answer:
      "L'application UPJUNOO PRO est disponible gratuitement sur l'App Store pour iOS et sur Google Play pour Android. Recherchez 'UPJUNOO PRO' et telechargez l'application en quelques secondes.",
  },
  {
    question: "Quels sont les modes de paiement acceptes ?",
    answer:
      "Nous acceptons plusieurs modes de paiement : carte bancaire, paiement mobile, portefeuille electronique et paiement en especes selon les regions. Vous pouvez configurer votre mode de paiement prefere dans l'application.",
  },
  {
    question: "Comment devenir chauffeur partenaire ?",
    answer:
      "Pour devenir chauffeur partenaire UPJUNOO PRO, rendez-vous sur la page 'Offres Partenaires > Chauffeurs' et remplissez le formulaire d'inscription. Vous serez contacte par un gestionnaire de flotte agree qui vous accompagnera dans les demarches.",
  },
  {
    question: "UPJUNOO PRO est-il disponible dans ma ville ?",
    answer:
      "UPJUNOO PRO est present dans plus de 100 villes a travers le monde. Consultez notre page 'Nos Implantations' pour verifier la disponibilite dans votre region. Si nous ne sommes pas encore presents, vous pouvez devenir franchise !",
  },
  {
    question: "Comment fonctionne le service de livraison ?",
    answer:
      "Le service de livraison UPJUNOO PRO vous permet d'envoyer et recevoir des colis en temps reel. Indiquez simplement les adresses de collecte et de livraison, et un livreur se charge du reste. Vous pouvez suivre votre colis en direct.",
  },
  {
    question: "Comment contacter le support client ?",
    answer:
      "Notre equipe support est disponible 24/7. Vous pouvez nous contacter via l'application, par email a support@upjunoo.pro, ou via notre page Contact. Nous nous engageons a repondre dans les plus brefs delais.",
  },
  {
    question: "Comment devenir franchise UPJUNOO PRO ?",
    answer:
      "Pour devenir franchise, rendez-vous sur la page 'Offres Partenaires > Franchises'. Vous y trouverez toutes les informations sur le profil recherche, les avantages et les conditions. Contactez notre equipe pour discuter de votre projet.",
  },
  {
    question: "Les tarifs sont-ils fixes ou variables ?",
    answer:
      "Les tarifs UPJUNOO PRO sont calcules en fonction de la distance, du temps de trajet et de la demande. Vous voyez toujours le prix estime avant de confirmer votre course. Aucune surprise, tout est transparent.",
  },
];

export function FAQSection() {
  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
            <HelpCircle className="h-8 w-8 text-primary" />
          </div>
          <span className="text-primary font-medium text-sm uppercase tracking-wider block mb-2">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Questions <span className="text-primary">frequentes</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Trouvez rapidement les reponses a vos questions les plus courantes
            sur UPJUNOO PRO.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <AccordionItem
                  value={`item-${index}`}
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

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-4">
            Vous n'avez pas trouve la reponse a votre question ?
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            Contactez notre equipe support
            <span>→</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
