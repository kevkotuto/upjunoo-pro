"use client";

import { motion } from "motion/react";
import { Car, Package, CarFront, Users, Truck, ArrowRight, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const services = [
  {
    title: "Taxi & VTC",
    description:
      "Commandez un taxi en quelques clics et deplacez-vous en toute serenite a travers la ville.",
    icon: Car,
    href: "/passager",
    color: "bg-primary",
    gradient: "from-primary to-[#046d7a]",
    iconBg: "bg-primary/10",
  },
  {
    title: "Livraisons Express",
    description:
      "Envoyez et recevez vos colis en temps record avec notre reseau de livreurs professionnels.",
    icon: Package,
    href: "/livraison",
    color: "bg-orange-500",
    gradient: "from-orange-500 to-orange-600",
    iconBg: "bg-orange-500/10",
  },
  {
    title: "Location Vehicules",
    description:
      "Louez un vehicule adapte a vos besoins, quand vous le souhaitez, en toute liberte.",
    icon: CarFront,
    href: "/location",
    color: "bg-violet-500",
    gradient: "from-violet-500 to-violet-600",
    iconBg: "bg-violet-500/10",
  },
  {
    title: "Fret Urbain",
    description:
      "Organisez vos envois volumineux avec pick-up, camionnettes ou camions legers. Planification et suivi garantis.",
    icon: Truck,
    href: "/livraison",
    color: "bg-amber-500",
    gradient: "from-amber-500 to-amber-600",
    iconBg: "bg-amber-500/10",
  },
  {
    title: "Devenir Partenaire",
    description:
      "Rejoignez notre equipe et beneficiez d'horaires flexibles et de revenus attractifs.",
    icon: Users,
    href: "/devenir-chauffeur",
    color: "bg-emerald-500",
    gradient: "from-emerald-500 to-emerald-600",
    iconBg: "bg-emerald-500/10",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-gray-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 w-80 h-80 border border-primary/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-20 -left-20 w-60 h-60 border border-primary/10 rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6"
          >
            <Sparkles className="h-4 w-4" />
            Nos Services
          </motion.div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Une solution pour{" "}
            <span className="text-primary relative">
              chaque besoin
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                <path d="M0 4 Q 50 8, 100 4 T 200 4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.3" />
              </svg>
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Decouvrez notre gamme complete de services de mobilite, concus pour
            simplifier votre quotidien en Afrique.
          </p>
        </motion.div>

        {/* Services Grid - Bento style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={index === 0 ? "md:col-span-2 lg:col-span-1" : ""}
            >
              <Link href={service.href} className="block h-full group">
                <Card className="h-full overflow-hidden border-0 bg-white hover:bg-gray-50 transition-all duration-500 group-hover:-translate-y-2">
                  <CardContent className="p-0 h-full">
                    {/* Top gradient bar */}
                    <div className={`h-1.5 w-full bg-gradient-to-r ${service.gradient}`} />

                    <div className="p-6 sm:p-8 flex flex-col h-full">
                      {/* Icon with animated background */}
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                        className={`relative w-16 h-16 rounded-2xl ${service.iconBg} flex items-center justify-center mb-6 overflow-hidden`}
                      >
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                        />
                        <service.icon className={`h-8 w-8 relative z-10 transition-colors duration-500 ${service.color.replace('bg-', 'text-')} group-hover:text-white`} />
                      </motion.div>

                      {/* Content */}
                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-6">
                        {service.description}
                      </p>

                      {/* CTA */}
                      <div className="flex items-center text-primary font-semibold text-sm">
                        <span>Decouvrir</span>
                        <motion.div
                          className="ml-2"
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        >
                          <ArrowRight className="h-4 w-4" />
                        </motion.div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <Link
            href="#download"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/25"
          >
            <span>Telecharger l'application</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
