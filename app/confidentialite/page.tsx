"use client";

import { motion } from "motion/react";
import {
  Shield,
  Cookie,
  Lock,
  Eye,
  Database,
  UserCheck,
  Bell,
  Trash2,
  CheckCircle,
  Mail,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { PageHero } from "@/components/sections/page-hero";
import Link from "next/link";

const dataCollected = [
  {
    category: "Données d'identification",
    items: ["Nom et prénom", "Numéro de téléphone", "Adresse email"],
  },
  {
    category: "Données de localisation",
    items: [
      "Trajets effectués",
      "Adresses de livraison",
      "Historique des déplacements",
    ],
  },
  {
    category: "Données professionnelles",
    items: [
      "Informations chauffeurs",
      "Données de flotte",
      "Informations entreprises partenaires",
    ],
  },
  {
    category: "Données de paiement",
    items: [
      "Transactions via prestataires sécurisés",
      "Historique des paiements",
    ],
  },
  {
    category: "Données techniques",
    items: [
      "Cookies et traceurs",
      "Journaux de connexion",
      "Informations sur l'appareil",
    ],
  },
];

const dataUsage = [
  "Fournir et améliorer les services de mobilité et logistique",
  "Assurer la sécurité des utilisateurs et des transactions",
  "Gérer les paiements, la facturation et le support client",
  "Produire des statistiques anonymisées pour améliorer nos services",
  "Vous informer des mises à jour et nouveautés",
];

const userRights = [
  {
    icon: Eye,
    title: "Droit d'accès",
    description: "Vous pouvez demander l'accès à vos données personnelles.",
  },
  {
    icon: UserCheck,
    title: "Droit de rectification",
    description: "Vous pouvez demander la correction de données inexactes.",
  },
  {
    icon: Trash2,
    title: "Droit à l'effacement",
    description:
      "Vous pouvez demander la suppression de vos données sous conditions.",
  },
  {
    icon: Bell,
    title: "Droit d'opposition",
    description: "Vous pouvez vous opposer au traitement de vos données.",
  },
];

export default function ConfidentialitePage() {
  return (
    <>
      <PageHero
        badge="Legal"
        title="Politique de"
        highlight="confidentialite"
        description="UPJUNOO PRO accorde une importance majeure à la protection des données personnelles de ses utilisateurs, partenaires, chauffeurs et entreprises."
      />

      {/* Introduction */}
      <section className="py-12 border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary/5 border border-primary/20 rounded-2xl p-6 lg:p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <Shield className="h-6 w-6 text-primary" />
              <h2 className="font-semibold text-lg">Notre engagement</h2>
            </div>
            <p className="text-muted-foreground">
              La protection de vos données personnelles est au cœur de nos
              préoccupations. Cette politique de confidentialité explique
              comment nous collectons, utilisons et protégeons vos informations
              lorsque vous utilisez la plateforme UPJUNOO PRO.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Data Collected */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Database className="h-6 w-6 text-primary" />
              </div>
              <h2 className="font-bold text-2xl">Données collectées</h2>
            </div>
            <p className="text-muted-foreground mb-8">
              Dans le cadre de l'utilisation de la plateforme, nous pouvons
              collecter les données suivantes :
            </p>

            <div className="space-y-6">
              {dataCollected.map((category, index) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="border-border/50">
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-3">{category.category}</h3>
                      <ul className="space-y-2">
                        {category.items.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                          >
                            <CheckCircle className="h-4 w-4 text-primary" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Data Usage */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <Card className="border-border/50">
              <CardContent className="p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Eye className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="font-bold text-xl">Utilisation des données</h2>
                </div>
                <p className="text-muted-foreground mb-4">
                  Les données sont utilisées pour :
                </p>
                <ul className="space-y-3">
                  {dataUsage.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Cookies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <Card className="border-border/50">
              <CardContent className="p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Cookie className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="font-bold text-xl">Cookies</h2>
                </div>
                <p className="text-muted-foreground mb-4">
                  Le site UPJUNOO PRO utilise des cookies pour :
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    "Améliorer l'expérience utilisateur",
                    "Mesurer l'audience et la performance",
                    "Sécuriser les sessions",
                    "Mémoriser vos préférences",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-muted-foreground bg-muted/50 p-4 rounded-lg">
                  L'utilisateur peut à tout moment configurer ou refuser les
                  cookies via les paramètres de son navigateur.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Security */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Lock className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="font-bold text-xl">Sécurité et confidentialité</h2>
                </div>
                <p className="text-muted-foreground mb-4">
                  UPJUNOO PRO applique des mesures techniques et
                  organisationnelles strictes afin de garantir la
                  confidentialité et l'intégrité des données :
                </p>
                <ul className="space-y-3">
                  {[
                    "Vérification d'identité (KYC/KYB)",
                    "Chiffrement des données sensibles",
                    "Accès contrôlés et authentification renforcée",
                    "Surveillance continue des systèmes",
                    "Sauvegarde régulière des données",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* User Rights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-bold text-2xl mb-6">Vos droits</h2>
            <p className="text-muted-foreground mb-8">
              Conformément à la réglementation en vigueur, vous disposez des
              droits suivants concernant vos données personnelles :
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {userRights.map((right, index) => (
                <motion.div
                  key={right.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full border-border/50">
                    <CardContent className="p-6">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                        <right.icon className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-semibold mb-2">{right.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {right.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
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
            <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Une question ?</h2>
            <p className="text-muted-foreground mb-6">
              Pour toute question relative à la protection de vos données ou
              pour exercer vos droits, contactez-nous.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:contact@upjunoopro.com"
                className="px-6 py-3 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                contact@upjunoopro.com
              </a>
              <Link
                href="/cgu"
                className="px-6 py-3 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
              >
                Voir les CGU
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
