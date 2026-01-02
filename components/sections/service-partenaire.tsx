"use client";

import { motion } from "motion/react";
import { Users, Wallet, Clock, Headphones, TrendingUp, CheckCircle, ArrowRight, Award } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export function ServicePartenaireSection() {
  const t = useTranslations();

  const features = [
    {
      icon: Wallet,
      title: t("servicePartenaire.features.attractiveRevenue.title"),
      description: t("servicePartenaire.features.attractiveRevenue.description"),
    },
    {
      icon: Clock,
      title: t("servicePartenaire.features.flexibleHours.title"),
      description: t("servicePartenaire.features.flexibleHours.description"),
    },
    {
      icon: Headphones,
      title: t("servicePartenaire.features.support247.title"),
      description: t("servicePartenaire.features.support247.description"),
    },
    {
      icon: TrendingUp,
      title: t("servicePartenaire.features.freeTraining.title"),
      description: t("servicePartenaire.features.freeTraining.description"),
    },
  ];

  const advantages = [
    t("servicePartenaire.advantages.weeklyPayments"),
    t("servicePartenaire.advantages.intuitiveApp"),
    t("servicePartenaire.advantages.bonuses"),
    t("servicePartenaire.advantages.community"),
  ];
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-emerald-500/5 to-white" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ y: [0, -20, 0], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-32 right-[15%] w-80 h-80 bg-emerald-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 30, 0], opacity: [0.03, 0.08, 0.03] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 left-[10%] w-72 h-72 bg-emerald-600 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-500 text-sm font-semibold mb-6"
            >
              <Users className="h-4 w-4" />
              {t("servicePartenaire.badge")}
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6"
            >
              {t("servicePartenaire.title.part1")}{" "}
              <span className="text-emerald-500">{t("servicePartenaire.title.highlight")}</span><br />
              <span className="relative inline-block">
                {t("servicePartenaire.title.part2")}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="absolute -bottom-1 left-0 right-0 h-3 bg-emerald-500/20 -z-10 origin-left"
                />
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-lg mb-8 leading-relaxed"
            >
              {t("servicePartenaire.description")}
            </motion.p>

            {/* Advantages list */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
            >
              {advantages.map((advantage, index) => (
                <motion.div
                  key={advantage}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-4 w-4 text-emerald-500" />
                  </div>
                  <span className="text-sm font-medium">{advantage}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <Link href="/devenir-chauffeur">
                <Button size="lg" className="rounded-full px-8 gap-2 bg-emerald-500 hover:bg-emerald-600 shadow-lg shadow-emerald-500/25">
                  {t("servicePartenaire.cta")}
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="group"
                >
                  <div className="bg-white rounded-3xl p-6 h-full border border-border/50 hover:border-emerald-500/30 transition-all duration-300 relative overflow-hidden">
                    {/* Hover gradient overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-emerald-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                    />

                    <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-5 relative">
                      <motion.div
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <feature.icon className="h-7 w-7 text-emerald-500" />
                      </motion.div>
                    </div>
                    <h3 className="font-bold text-lg mb-2 relative">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed relative">
                      {feature.description}
                    </p>

                    {/* Decorative corner */}
                    <div className="absolute -bottom-12 -right-12 w-24 h-24 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 opacity-5 group-hover:opacity-10 transition-opacity" />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Partners badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="mt-6 flex justify-center"
            >
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full border border-border/50 shadow-sm">
                <Award className="h-5 w-5 text-emerald-500" />
                <span className="text-sm font-medium">{t("servicePartenaire.partnersBadge")}</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
