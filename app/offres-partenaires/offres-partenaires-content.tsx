"use client";

import { motion } from "motion/react";
import { Store, Handshake, UserCheck, ArrowRight, CheckCircle, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageHero } from "@/components/sections/page-hero";
import Link from "next/link";
import Image from "next/image";

type IconType = "store" | "handshake" | "usercheck";

interface Offre {
  title: string;
  description: string;
  href: string;
  features: string[];
  image: string;
  color: string;
  iconType: IconType;
}

interface Stat {
  value: string;
  label: string;
}

interface Translations {
  hero: {
    badge: string;
    title: string;
    highlight: string;
    description: string;
  };
  learnMore: string;
  cta: {
    title: string;
    description: string;
    button: string;
  };
}

interface OffresPartenairesContentProps {
  offres: Offre[];
  stats: Stat[];
  translations: Translations;
}

const iconMap = {
  store: Store,
  handshake: Handshake,
  usercheck: UserCheck,
};

export function OffresPartenairesContent({
  offres,
  stats,
  translations,
}: OffresPartenairesContentProps) {
  return (
    <>
      <PageHero
        badge={translations.hero.badge}
        title={translations.hero.title}
        highlight={translations.hero.highlight}
        description={translations.hero.description}
        backgroundImage="/images/banniere/personne-sourriante-16-9.jpg"
      />

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {offres.map((offre, index) => {
              const Icon = iconMap[offre.iconType];
              return (
                <motion.div
                  key={offre.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full border-border/50 overflow-hidden group hover:border-primary/30 transition-all duration-300">
                    <div className="relative h-52 overflow-hidden">
                      <Image
                        src={offre.image}
                        alt={offre.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className={`absolute bottom-4 left-4 w-14 h-14 rounded-2xl bg-gradient-to-br ${offre.color} flex items-center justify-center`}
                      >
                        <Icon className="h-7 w-7 text-white" />
                      </motion.div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">{offre.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        {offre.description}
                      </p>
                      <ul className="space-y-2 mb-6">
                        {offre.features.map((feature, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2 text-sm"
                          >
                            <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center">
                              <CheckCircle className="h-3 w-3 text-green-500" />
                            </div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button asChild className={`w-full gap-2 bg-gradient-to-r ${offre.color}`}>
                        <Link href={offre.href}>
                          {translations.learnMore}
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-to-br from-primary via-primary to-[#046d7a] text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="text-4xl sm:text-5xl font-bold mb-2"
                >
                  {stat.value}
                </motion.div>
                <div className="text-primary-foreground/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl bg-gradient-to-br from-primary via-primary to-[#046d7a] p-8 lg:p-16 text-center overflow-hidden"
          >
            {/* Background decorations */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                className="absolute -top-1/2 -right-1/2 w-full h-full border border-white/10 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-1/2 -left-1/2 w-full h-full border border-white/10 rounded-full"
              />
            </div>

            <div className="relative">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring" }}
                className="w-20 h-20 rounded-full bg-yellow-400 flex items-center justify-center mx-auto mb-6"
              >
                <MessageSquare className="h-10 w-10 text-gray-900" />
              </motion.div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                {translations.cta.title}
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                {translations.cta.description}
              </p>
              <Button
                size="lg"
                asChild
                className="gap-2 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold text-lg px-8 py-6"
              >
                <Link href="/contact">
                  {translations.cta.button}
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
