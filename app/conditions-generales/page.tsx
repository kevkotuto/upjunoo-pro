"use client";

import { motion } from "motion/react";
import {
  FileText,
  Shield,
  Cookie,
  Lock,
  Car,
  Package,
  Key,
  Truck,
  CreditCard,
  AlertTriangle,
  RefreshCw,
  CheckCircle,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { PageHero } from "@/components/sections/page-hero";

const sections = [
  {
    id: "confidentialite",
    icon: Shield,
    title: "Politique de confidentialité",
    content: (
      <>
        <p className="text-muted-foreground mb-4">
          UPJUNOO PRO accorde une importance majeure à la protection des données
          personnelles de ses utilisateurs, partenaires, chauffeurs et
          entreprises.
        </p>

        <h4 className="font-semibold text-lg mt-6 mb-3">Données collectées</h4>
        <p className="text-muted-foreground mb-3">
          Dans le cadre de l'utilisation de la plateforme, nous pouvons
          collecter :
        </p>
        <ul className="space-y-2 mb-6">
          {[
            "Données d'identification (nom, téléphone, email)",
            "Données de localisation (trajets, livraisons)",
            "Données professionnelles (chauffeurs, flottes, entreprises)",
            "Données de paiement (via prestataires sécurisés)",
            "Données techniques (cookies, journaux de connexion)",
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-2 text-muted-foreground">
              <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>

        <h4 className="font-semibold text-lg mt-6 mb-3">
          Utilisation des données
        </h4>
        <p className="text-muted-foreground mb-3">
          Les données sont utilisées pour :
        </p>
        <ul className="space-y-2">
          {[
            "Fournir et améliorer les services de mobilité et logistique",
            "Assurer la sécurité des utilisateurs et des transactions",
            "Gérer les paiements, la facturation et le support client",
            "Produire des statistiques anonymisées",
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-2 text-muted-foreground">
              <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    id: "cookies",
    icon: Cookie,
    title: "Cookies",
    content: (
      <>
        <p className="text-muted-foreground mb-4">
          Le site UPJUNOO PRO utilise des cookies pour :
        </p>
        <ul className="space-y-2 mb-6">
          {[
            "Améliorer l'expérience utilisateur",
            "Mesurer l'audience et la performance",
            "Sécuriser les sessions",
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-2 text-muted-foreground">
              <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>
        <p className="text-muted-foreground">
          L'utilisateur peut à tout moment configurer ou refuser les cookies via
          son navigateur.
        </p>
      </>
    ),
  },
  {
    id: "securite",
    icon: Lock,
    title: "Sécurité et confidentialité",
    content: (
      <p className="text-muted-foreground">
        UPJUNOO PRO applique des mesures techniques et organisationnelles
        strictes (KYC/KYB, chiffrement, accès contrôlés) afin de garantir la
        confidentialité et l'intégrité des données.
      </p>
    ),
  },
  {
    id: "conditions",
    icon: FileText,
    title: "Conditions d'utilisation",
    content: (
      <>
        <p className="text-muted-foreground mb-6">
          L'utilisation de la plateforme UPJUNOO PRO implique l'acceptation
          pleine et entière des présentes conditions.
        </p>

        <h4 className="font-semibold text-lg mb-3">Accès aux services</h4>
        <p className="text-muted-foreground mb-3">UPJUNOO PRO permet :</p>
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          {[
            { icon: Car, text: "La réservation de trajets VTC / Taxi" },
            { icon: Package, text: "La livraison de colis et marchandises" },
            { icon: Key, text: "La location de véhicules" },
            { icon: Truck, text: "Le fret urbain et périurbain" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-3 rounded-lg bg-muted/50"
            >
              <item.icon className="h-5 w-5 text-primary" />
              <span className="text-sm">{item.text}</span>
            </div>
          ))}
        </div>
        <p className="text-muted-foreground">
          Certains services peuvent nécessiter une inscription, une vérification
          d'identité ou le respect de conditions spécifiques selon le pays.
        </p>
      </>
    ),
  },
  {
    id: "responsabilites",
    icon: AlertTriangle,
    title: "Responsabilités",
    content: (
      <ul className="space-y-3">
        {[
          "UPJUNOO PRO agit en tant que plateforme technologique d'intermédiation.",
          "Les chauffeurs, livreurs et partenaires sont responsables de l'exécution des prestations.",
          "L'utilisateur s'engage à fournir des informations exactes et à utiliser la plateforme de manière conforme aux lois en vigueur.",
        ].map((item, index) => (
          <li key={index} className="flex items-start gap-2 text-muted-foreground">
            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            {item}
          </li>
        ))}
      </ul>
    ),
  },
  {
    id: "paiements",
    icon: CreditCard,
    title: "Paiements",
    content: (
      <p className="text-muted-foreground">
        Les paiements peuvent être effectués via Mobile Money, espèces ou
        portefeuille électronique UPJUNOO PRO. Les montants sont affichés de manière
        transparente avant validation.
      </p>
    ),
  },
  {
    id: "suspension",
    icon: AlertTriangle,
    title: "Suspension et résiliation",
    content: (
      <p className="text-muted-foreground">
        UPJUNOO PRO se réserve le droit de suspendre ou de résilier un compte en
        cas de fraude, non-respect des règles ou usage abusif de la plateforme.
      </p>
    ),
  },
  {
    id: "evolution",
    icon: RefreshCw,
    title: "Evolution des services",
    content: (
      <p className="text-muted-foreground">
        Les services, fonctionnalités et conditions peuvent évoluer afin
        d'améliorer la qualité, la sécurité et la conformité réglementaire.
      </p>
    ),
  },
];

export default function ConditionsPage() {
  return (
    <>
      <PageHero
        badge="Legal"
        title="Conditions générales"
        highlight="et confidentialité"
        description="Consultez nos conditions d'utilisation, politique de confidentialité et informations sur les cookies."
      />

      {/* Table of Contents */}
      <section className="py-12 border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-semibold text-lg mb-4">Sommaire</h2>
            <div className="grid sm:grid-cols-2 gap-2">
              {sections.map((section, index) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="flex items-center gap-2 p-2 rounded-lg hover:bg-muted transition-colors text-sm"
                >
                  <span className="text-primary font-medium">{index + 1}.</span>
                  {section.title}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="border-border/50">
                  <CardContent className="p-6 lg:p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <section.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-bold text-xl">{section.title}</h3>
                    </div>
                    {section.content}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold mb-4">Une question ?</h2>
            <p className="text-muted-foreground mb-6">
              Pour toute question relative à nos conditions ou à la protection
              de vos données, contactez-nous.
            </p>
            <a
              href="mailto:contact@upjunoopro.com"
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
            >
              contact@upjunoopro.com
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
