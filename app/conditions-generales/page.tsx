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
    title: "Politique de confidentialite",
    content: (
      <>
        <p className="text-muted-foreground mb-4">
          UPJUNOO PRO accorde une importance majeure a la protection des donnees
          personnelles de ses utilisateurs, partenaires, chauffeurs et
          entreprises.
        </p>

        <h4 className="font-semibold text-lg mt-6 mb-3">Donnees collectees</h4>
        <p className="text-muted-foreground mb-3">
          Dans le cadre de l'utilisation de la plateforme, nous pouvons
          collecter :
        </p>
        <ul className="space-y-2 mb-6">
          {[
            "Donnees d'identification (nom, telephone, email)",
            "Donnees de localisation (trajets, livraisons)",
            "Donnees professionnelles (chauffeurs, flottes, entreprises)",
            "Donnees de paiement (via prestataires securises)",
            "Donnees techniques (cookies, journaux de connexion)",
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-2 text-muted-foreground">
              <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>

        <h4 className="font-semibold text-lg mt-6 mb-3">
          Utilisation des donnees
        </h4>
        <p className="text-muted-foreground mb-3">
          Les donnees sont utilisees pour :
        </p>
        <ul className="space-y-2">
          {[
            "Fournir et ameliorer les services de mobilite et logistique",
            "Assurer la securite des utilisateurs et des transactions",
            "Gerer les paiements, la facturation et le support client",
            "Produire des statistiques anonymisees",
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
            "Ameliorer l'experience utilisateur",
            "Mesurer l'audience et la performance",
            "Securiser les sessions",
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-2 text-muted-foreground">
              <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>
        <p className="text-muted-foreground">
          L'utilisateur peut a tout moment configurer ou refuser les cookies via
          son navigateur.
        </p>
      </>
    ),
  },
  {
    id: "securite",
    icon: Lock,
    title: "Securite et confidentialite",
    content: (
      <p className="text-muted-foreground">
        UPJUNOO PRO applique des mesures techniques et organisationnelles
        strictes (KYC/KYB, chiffrement, acces controles) afin de garantir la
        confidentialite et l'integrite des donnees.
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
          pleine et entiere des presentes conditions.
        </p>

        <h4 className="font-semibold text-lg mb-3">Acces aux services</h4>
        <p className="text-muted-foreground mb-3">UPJUNOO PRO permet :</p>
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          {[
            { icon: Car, text: "La reservation de trajets VTC / Taxi" },
            { icon: Package, text: "La livraison de colis et marchandises" },
            { icon: Key, text: "La location de vehicules" },
            { icon: Truck, text: "Le fret urbain et periurbain" },
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
          Certains services peuvent necessiter une inscription, une verification
          d'identite ou le respect de conditions specifiques selon le pays.
        </p>
      </>
    ),
  },
  {
    id: "responsabilites",
    icon: AlertTriangle,
    title: "Responsabilites",
    content: (
      <ul className="space-y-3">
        {[
          "UPJUNOO PRO agit en tant que plateforme technologique d'intermediation.",
          "Les chauffeurs, livreurs et partenaires sont responsables de l'execution des prestations.",
          "L'utilisateur s'engage a fournir des informations exactes et a utiliser la plateforme de maniere conforme aux lois en vigueur.",
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
        Les paiements peuvent etre effectues via Mobile Money, especes ou
        portefeuille electronique UPJUNOO. Les montants sont affiches de maniere
        transparente avant validation.
      </p>
    ),
  },
  {
    id: "suspension",
    icon: AlertTriangle,
    title: "Suspension et resiliation",
    content: (
      <p className="text-muted-foreground">
        UPJUNOO PRO se reserve le droit de suspendre ou de resilier un compte en
        cas de fraude, non-respect des regles ou usage abusif de la plateforme.
      </p>
    ),
  },
  {
    id: "evolution",
    icon: RefreshCw,
    title: "Evolution des services",
    content: (
      <p className="text-muted-foreground">
        Les services, fonctionnalites et conditions peuvent evoluer afin
        d'ameliorer la qualite, la securite et la conformite reglementaire.
      </p>
    ),
  },
];

export default function ConditionsPage() {
  return (
    <>
      <PageHero
        badge="Legal"
        title="Conditions generales"
        highlight="et confidentialite"
        description="Consultez nos conditions d'utilisation, politique de confidentialite et informations sur les cookies."
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
              Pour toute question relative a nos conditions ou a la protection
              de vos donnees, contactez-nous.
            </p>
            <a
              href="mailto:contact@upjunoo.com"
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
            >
              contact@upjunoo.com
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
