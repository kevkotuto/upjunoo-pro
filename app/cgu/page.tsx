"use client";

import { motion } from "motion/react";
import {
  FileText,
  Car,
  Package,
  Key,
  Truck,
  CreditCard,
  AlertTriangle,
  RefreshCw,
  CheckCircle,
  UserCheck,
  Scale,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { PageHero } from "@/components/sections/page-hero";
import Link from "next/link";

export default function CGUPage() {
  return (
    <>
      <PageHero
        badge="Legal"
        title="Conditions generales"
        highlight="d'utilisation"
        description="L'utilisation de la plateforme UPJUNOO PRO implique l'acceptation pleine et entiere des presentes conditions."
      />

      {/* Introduction */}
      <section className="py-12 border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-muted/50 rounded-2xl p-6 lg:p-8"
          >
            <p className="text-muted-foreground">
              Les presentes conditions generales d'utilisation (CGU) regissent
              l'acces et l'utilisation de la plateforme UPJUNOO PRO, accessible
              via l'application mobile et le site web. En utilisant nos
              services, vous acceptez ces conditions dans leur integralite.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Access to Services */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="border-border/50 mb-8">
              <CardContent className="p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="font-bold text-xl">Acces aux services</h2>
                </div>
                <p className="text-muted-foreground mb-6">
                  UPJUNOO PRO permet :
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { icon: Car, text: "La reservation de trajets VTC / Taxi" },
                    {
                      icon: Package,
                      text: "La livraison de colis et marchandises",
                    },
                    { icon: Key, text: "La location de vehicules" },
                    { icon: Truck, text: "Le fret urbain et periurbain" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-4 rounded-xl bg-muted/50"
                    >
                      <item.icon className="h-5 w-5 text-primary" />
                      <span className="text-sm">{item.text}</span>
                    </div>
                  ))}
                </div>
                <p className="text-muted-foreground mt-6 text-sm">
                  Certains services peuvent necessiter une inscription, une
                  verification d'identite ou le respect de conditions
                  specifiques selon le pays.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Responsibilities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="border-border/50 mb-8">
              <CardContent className="p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Scale className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="font-bold text-xl">Responsabilites</h2>
                </div>
                <ul className="space-y-4">
                  {[
                    "UPJUNOO PRO agit en tant que plateforme technologique d'intermediation.",
                    "Les chauffeurs, livreurs et partenaires sont responsables de l'execution des prestations.",
                    "L'utilisateur s'engage a fournir des informations exactes et a utiliser la plateforme de maniere conforme aux lois en vigueur.",
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

          {/* User Obligations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="border-border/50 mb-8">
              <CardContent className="p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <UserCheck className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="font-bold text-xl">
                    Obligations de l'utilisateur
                  </h2>
                </div>
                <ul className="space-y-4">
                  {[
                    "Fournir des informations exactes lors de l'inscription",
                    "Ne pas utiliser la plateforme a des fins illegales",
                    "Respecter les chauffeurs, livreurs et autres utilisateurs",
                    "Signaler tout comportement inapproprie ou incident",
                    "Ne pas tenter de contourner les systemes de securite",
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

          {/* Payments */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="border-border/50 mb-8">
              <CardContent className="p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <CreditCard className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="font-bold text-xl">Paiements</h2>
                </div>
                <p className="text-muted-foreground mb-4">
                  Les paiements peuvent etre effectues via :
                </p>
                <ul className="space-y-2 mb-4">
                  {[
                    "Mobile Money (Orange Money, MTN Money, Wave, etc.)",
                    "Especes (selon les regions)",
                    "Portefeuille electronique UPJUNOO",
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
                <p className="text-muted-foreground text-sm">
                  Les montants sont affiches de maniere transparente avant
                  validation de la commande.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Suspension */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="border-border/50 mb-8">
              <CardContent className="p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center">
                    <AlertTriangle className="h-6 w-6 text-orange-500" />
                  </div>
                  <h2 className="font-bold text-xl">Suspension et resiliation</h2>
                </div>
                <p className="text-muted-foreground mb-4">
                  UPJUNOO PRO se reserve le droit de suspendre ou de resilier un
                  compte en cas de :
                </p>
                <ul className="space-y-2">
                  {[
                    "Fraude ou tentative de fraude",
                    "Non-respect des presentes conditions",
                    "Usage abusif de la plateforme",
                    "Comportement inapproprie envers les partenaires ou utilisateurs",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <CheckCircle className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Evolution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="border-border/50">
              <CardContent className="p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <RefreshCw className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="font-bold text-xl">Evolution des services</h2>
                </div>
                <p className="text-muted-foreground">
                  Les services, fonctionnalites et conditions peuvent evoluer
                  afin d'ameliorer la qualite, la securite et la conformite
                  reglementaire. Les utilisateurs seront informes des
                  modifications importantes.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold mb-4">Documents associes</h2>
            <p className="text-muted-foreground mb-8">
              Consultez egalement nos autres documents legaux.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/confidentialite"
                className="px-6 py-3 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
              >
                Politique de confidentialite
              </Link>
              <Link
                href="/faq"
                className="px-6 py-3 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
              >
                FAQ
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Nous contacter
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
