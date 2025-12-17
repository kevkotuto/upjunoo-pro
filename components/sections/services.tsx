"use client";

import { motion } from "motion/react";
import { Car, Package, CarFront, Users, Truck, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const services = [
  {
    title: "Taxi",
    description:
      "Commandez un taxi en quelques clics et deplacez-vous en toute serenite a travers la ville.",
    icon: Car,
    href: "/passager",
    color: "from-primary/10 to-primary/5",
  },
  {
    title: "Livraisons",
    description:
      "Envoyez et recevez vos colis en temps record avec notre reseau de livreurs professionnels.",
    icon: Package,
    href: "/livraison",
    color: "from-orange-500/10 to-orange-500/5",
  },
  {
    title: "Locations",
    description:
      "Louez un vehicule adapte a vos besoins, quand vous le souhaitez, en toute liberte.",
    icon: CarFront,
    href: "/location",
    color: "from-violet-500/10 to-violet-500/5",
  },
  {
    title: "Fret",
    description:
      "Fret urbain & peri-urbain. Organisez vos envois volumineux avec pick-up, camionnettes ou camions legers. Planification, suivi et SLA garantis.",
    icon: Truck,
    href: "/livraison",
    color: "from-amber-500/10 to-amber-500/5",
  },
  {
    title: "Chauffeurs & Livreurs",
    description:
      "Rejoignez notre equipe et beneficiez d'horaires flexibles et de revenus attractifs.",
    icon: Users,
    href: "/devenir-chauffeur",
    color: "from-emerald-500/10 to-emerald-500/5",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Nos Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            Une solution pour chaque besoin
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Decouvrez notre gamme complete de services de mobilite, concus pour
            simplifier votre quotidien.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={service.href} className="block h-full">
                <Card className="h-full group hover:shadow-lg transition-all duration-300 border-border/50 overflow-hidden">
                  <CardContent className="p-4 sm:p-5 flex flex-col h-full">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className={`w-11 h-11 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-3`}
                    >
                      <service.icon className="h-5 w-5 text-primary" />
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-base font-semibold mb-1.5 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-xs leading-relaxed flex-1">
                      {service.description}
                    </p>

                    {/* CTA */}
                    <div className="mt-3 flex items-center text-primary font-medium text-xs">
                      <span>Explorer</span>
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
