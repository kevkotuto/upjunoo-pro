"use client";

import { motion } from "motion/react";
import {
  Headphones,
  Mail,
  MessageSquare,
  Clock,
  CheckCircle,
  HelpCircle,
  FileText,
  AlertTriangle,
  CreditCard,
  Car,
  Package,
  Key,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/sections/page-hero";
import Link from "next/link";

const supportChannels = [
  {
    icon: Mail,
    title: "Email",
    description: "Envoyez-nous un email, nous repondons sous 24h.",
    action: "contact@upjunoo.com",
    href: "mailto:contact@upjunoo.com",
  },
  {
    icon: MessageSquare,
    title: "Chat in-app",
    description: "Discutez avec notre equipe directement dans l'application.",
    action: "Ouvrir l'application",
    href: "#",
  },
  {
    icon: HelpCircle,
    title: "FAQ",
    description: "Consultez notre FAQ pour des reponses rapides.",
    action: "Voir la FAQ",
    href: "/faq",
  },
];

const commonIssues = [
  {
    icon: Car,
    title: "Probleme avec une course",
    description:
      "Chauffeur en retard, itineraire incorrect, comportement inapproprie...",
    href: "/contact?motif=course",
  },
  {
    icon: CreditCard,
    title: "Probleme de paiement",
    description: "Paiement refuse, double facturation, remboursement...",
    href: "/contact?motif=paiement",
  },
  {
    icon: Package,
    title: "Probleme de livraison",
    description: "Colis non livre, colis endommage, retard de livraison...",
    href: "/contact?motif=livraison",
  },
  {
    icon: Key,
    title: "Probleme de location",
    description: "Reservation, vehicule, documents...",
    href: "/contact?motif=location",
  },
  {
    icon: AlertTriangle,
    title: "Signaler un incident",
    description: "Securite, accident, perte d'objet...",
    href: "/contact?motif=incident",
  },
  {
    icon: FileText,
    title: "Demande de facture",
    description: "Facture, recu, justificatif de paiement...",
    href: "/contact?motif=facture",
  },
];

const supportFeatures = [
  {
    icon: Clock,
    title: "Disponible 24/7",
    description: "Notre equipe est la pour vous aider a tout moment.",
  },
  {
    icon: CheckCircle,
    title: "Reponse rapide",
    description: "Nous nous engageons a repondre sous 24 heures maximum.",
  },
  {
    icon: Headphones,
    title: "Support multilingue",
    description: "Assistance disponible en francais et en anglais.",
  },
];

export default function SupportPage() {
  return (
    <>
      <PageHero
        badge="Aide"
        title="Centre de"
        highlight="support"
        description="Notre equipe est disponible 24/7 pour vous aider. Choisissez le canal qui vous convient le mieux."
        backgroundImage="/images/banniere/personne sourriante format -16-9.jpg"
      />

      {/* Support Features */}
      <section className="py-12 border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="grid sm:grid-cols-3 gap-6">
              {supportFeatures.map((feature, index) => (
                <div
                  key={feature.title}
                  className="flex items-center gap-4 p-4 rounded-xl bg-muted/50"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Comment nous contacter</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choisissez le canal de communication qui vous convient le mieux.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {supportChannels.map((channel, index) => (
              <motion.div
                key={channel.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-border/50 hover:border-primary/30 transition-colors">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <channel.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">
                      {channel.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {channel.description}
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link href={channel.href}>{channel.action}</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Issues */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Problemes courants</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Selectionnez le type de probleme que vous rencontrez pour obtenir
              une aide adaptee.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {commonIssues.map((issue, index) => (
              <motion.div
                key={issue.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Link href={issue.href}>
                  <Card className="h-full border-border/50 hover:border-primary/30 hover:bg-card transition-all cursor-pointer group">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          <issue.icon className="h-5 w-5 text-primary group-hover:text-primary-foreground" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold mb-1">{issue.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            {issue.description}
                          </p>
                        </div>
                        <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form CTA */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl bg-gradient-to-br from-primary to-primary/80 p-8 lg:p-12 text-center overflow-hidden"
          >
            <div className="relative text-primary-foreground">
              <Headphones className="h-16 w-16 mx-auto mb-6 opacity-90" />
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Besoin d'une aide personnalisee ?
              </h2>
              <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
                Notre equipe est prete a vous aider. Envoyez-nous un message et
                nous vous repondrons dans les plus brefs delais.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-background text-foreground hover:bg-background/90"
                >
                  <Link href="/contact">Nous contacter</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                >
                  <a href="mailto:contact@upjunoo.com">Envoyer un email</a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
