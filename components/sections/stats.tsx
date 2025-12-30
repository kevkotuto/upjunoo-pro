"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Users, Globe, MapPin, Download, TrendingUp, Star } from "lucide-react";
import { kpis, formattedKpis } from "@/data/kpis";

const stats = [
  {
    value: kpis.utilisateurs.value,
    suffix: kpis.utilisateurs.suffix,
    label: kpis.utilisateurs.label,
    icon: Users,
    color: "from-blue-400 to-blue-600",
    description: kpis.utilisateurs.description,
  },
  {
    value: kpis.pays.value,
    suffix: kpis.pays.suffix,
    label: kpis.pays.label,
    icon: Globe,
    color: "from-green-400 to-green-600",
    description: kpis.pays.description,
  },
  {
    value: kpis.villes.value,
    suffix: kpis.villes.suffix,
    label: kpis.villes.label,
    icon: MapPin,
    color: "from-purple-400 to-purple-600",
    description: kpis.villes.description,
  },
  {
    value: kpis.telechargements.value,
    suffix: kpis.telechargements.suffix,
    label: kpis.telechargements.label,
    icon: Download,
    color: "from-orange-400 to-orange-600",
    description: kpis.telechargements.description,
  },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, value]);

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M";
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(0) + "k";
    }
    return num.toString();
  };

  return (
    <span ref={ref}>
      {formatNumber(count)}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Dynamic gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-[#047885] to-[#035d68]" />

      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-1/2 -left-1/4 w-[800px] h-[800px] border border-white/10 rounded-full"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-1/2 -right-1/4 w-[600px] h-[600px] border border-white/10 rounded-full"
        />

        {/* Floating dots - using fixed positions to avoid hydration mismatch */}
        {[
          { left: 10, top: 15, duration: 3.5, delay: 0.2 },
          { left: 25, top: 80, duration: 4.2, delay: 0.8 },
          { left: 40, top: 30, duration: 3.8, delay: 1.5 },
          { left: 55, top: 65, duration: 4.5, delay: 0.5 },
          { left: 70, top: 20, duration: 3.2, delay: 1.2 },
          { left: 85, top: 75, duration: 4.0, delay: 0.3 },
          { left: 15, top: 50, duration: 3.7, delay: 1.8 },
          { left: 30, top: 90, duration: 4.3, delay: 0.7 },
          { left: 45, top: 10, duration: 3.4, delay: 1.0 },
          { left: 60, top: 45, duration: 4.1, delay: 1.6 },
          { left: 75, top: 85, duration: 3.6, delay: 0.4 },
          { left: 90, top: 35, duration: 4.4, delay: 1.3 },
          { left: 5, top: 60, duration: 3.3, delay: 0.9 },
          { left: 20, top: 25, duration: 4.6, delay: 1.7 },
          { left: 35, top: 70, duration: 3.9, delay: 0.1 },
          { left: 50, top: 5, duration: 4.2, delay: 1.4 },
          { left: 65, top: 55, duration: 3.1, delay: 0.6 },
          { left: 80, top: 40, duration: 4.7, delay: 1.1 },
          { left: 95, top: 95, duration: 3.5, delay: 1.9 },
          { left: 12, top: 78, duration: 4.0, delay: 0.0 },
        ].map((dot, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: dot.duration,
              repeat: Infinity,
              delay: dot.delay,
            }}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${dot.left}%`,
              top: `${dot.top}%`,
            }}
          />
        ))}
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-semibold mb-6 backdrop-blur-sm"
          >
            <TrendingUp className="h-4 w-4" />
            Nos Chiffres
          </motion.div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            UPJUNOO PRO en{" "}
            <span className="text-yellow-400 relative">
              chiffres
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -bottom-1 left-0 right-0 h-1 bg-yellow-400 origin-left"
              />
            </span>
          </h2>
          <p className="text-white/70 max-w-xl mx-auto text-lg">
            Une croissance continue grâce à la confiance de nos utilisateurs
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 lg:p-8 text-center border border-white/10 hover:bg-white/15 transition-all duration-300 h-full">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mx-auto mb-5 shadow-lg`}
                >
                  <stat.icon className="h-8 w-8 text-white" />
                </motion.div>

                {/* Number */}
                <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-2">
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                </div>

                {/* Label */}
                <div className="text-white font-semibold mb-1">
                  {stat.label}
                </div>

                {/* Description */}
                <div className="text-white/60 text-sm">
                  {stat.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8"
        >
          <div className="flex items-center gap-2 text-white/80">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="font-semibold">{formattedKpis.satisfaction}</span>
            <span className="text-white/60">sur les stores</span>
          </div>
          <div className="h-6 w-px bg-white/20 hidden sm:block" />
          <div className="text-white/80">
            <span className="font-semibold">{formattedKpis.chauffeurs}</span>
            <span className="text-white/60 ml-1">chauffeurs partenaires</span>
          </div>
          <div className="h-6 w-px bg-white/20 hidden sm:block" />
          <div className="text-white/80">
            <span className="font-semibold">24/7</span>
            <span className="text-white/60 ml-1">support disponible</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
