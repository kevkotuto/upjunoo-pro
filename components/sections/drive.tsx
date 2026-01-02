"use client";

import { motion } from "motion/react";
import { Clock, Wallet, Shield, MapPin, ArrowRight, CheckCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import motoAnimation from "@/public/annimation/Navy blue delivery motorbike.json";

export function DriveSection() {
  const t = useTranslations();

  const benefits = [
    {
      icon: Clock,
      title: t("drive.benefits.flexible.title"),
      description: t("drive.benefits.flexible.description"),
      color: "from-blue-500 to-blue-600",
      iconColor: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: Wallet,
      title: t("drive.benefits.revenue.title"),
      description: t("drive.benefits.revenue.description"),
      color: "from-green-500 to-green-600",
      iconColor: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      icon: Shield,
      title: t("drive.benefits.insurance.title"),
      description: t("drive.benefits.insurance.description"),
      color: "from-purple-500 to-purple-600",
      iconColor: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
    {
      icon: MapPin,
      title: t("drive.benefits.zone.title"),
      description: t("drive.benefits.zone.description"),
      color: "from-orange-500 to-orange-600",
      iconColor: "text-orange-500",
      bgColor: "bg-orange-500/10",
    },
  ];
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden relative">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] border border-primary/5 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] border border-primary/5 rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center order-first lg:order-last"
          >
            <div className="relative w-full max-w-md lg:max-w-lg">
              {/* Background glow */}
              <motion.div
                animate={{ scale: [1, 1.05, 1], opacity: [0.2, 0.3, 0.2] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-br from-primary/20 to-yellow-400/20 rounded-full blur-3xl"
              />

              {/* Map circles */}
              <div className="absolute inset-0 flex items-center justify-center">
                {[1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
                    transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
                    className="absolute rounded-full border border-dashed border-primary/20"
                    style={{ width: `${50 + i * 25}%`, height: `${50 + i * 25}%` }}
                  />
                ))}
              </div>

              {/* Location dots */}
              {[
                { top: "20%", left: "25%", delay: 0 },
                { top: "35%", right: "20%", delay: 0.5 },
                { bottom: "25%", left: "30%", delay: 1 },
                { bottom: "40%", right: "25%", delay: 1.5 },
              ].map((pos, i) => (
                <motion.div
                  key={i}
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, delay: pos.delay }}
                  className="absolute w-3 h-3 bg-primary rounded-full"
                  style={pos}
                />
              ))}

              {/* Lottie Animation */}
              <div className="relative z-10">
                <Lottie
                  animationData={motoAnimation}
                  loop={true}
                  autoplay={true}
                  className="w-full h-auto"
                />
              </div>

              {/* Floating stats cards */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -left-4 lg:-left-8 top-1/4 z-20"
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="bg-white rounded-2xl shadow-xl p-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center">
                      <Wallet className="w-5 h-5 text-green-500" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">{t("drive.stats.revenue.label")}</p>
                      <p className="text-sm font-bold">{t("drive.stats.revenue.value")}</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="absolute -right-4 lg:-right-8 bottom-1/3 z-20"
              >
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="bg-white rounded-2xl shadow-xl p-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">{t("drive.stats.flexibility.label")}</p>
                      <p className="text-sm font-bold">{t("drive.stats.flexibility.value")}</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6"
            >
              <Sparkles className="h-4 w-4" />
              {t("drive.badge")}
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6"
            >
              {t("drive.title.part1")}{" "}
              <span className="text-primary relative">
                {t("drive.title.highlight1")}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="absolute -bottom-1 left-0 right-0 h-3 bg-yellow-400/30 -z-10 origin-left"
                />
              </span>
              {t("drive.title.part2")}{" "}
              <span className="text-primary">{t("drive.title.highlight2")}</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto lg:mx-0"
            >
              {t("drive.description")}
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="group"
                >
                  <div className="flex items-start gap-4 text-left">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-12 h-12 rounded-2xl ${benefit.bgColor} flex items-center justify-center flex-shrink-0`}
                    >
                      <benefit.icon className={`h-6 w-6 ${benefit.iconColor}`} />
                    </motion.div>
                    <div className="min-w-0">
                      <h3 className="font-bold text-base mb-1 group-hover:text-primary transition-colors">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <Button
                asChild
                size="lg"
                className="gap-2 h-14 px-8 bg-primary hover:bg-primary/90 text-white font-semibold shadow-lg shadow-primary/25 hover:scale-105 transition-all"
              >
                <Link href="/devenir-chauffeur">
                  {t("drive.button")}
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
