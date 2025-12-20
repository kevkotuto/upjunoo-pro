"use client";

import { motion } from "motion/react";
import { Download, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/30 via-background to-background" />

      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              Solution internationale de mobilite
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-4 sm:mb-6"
            >
              Reservez un taxi{" "}
              <span className="text-primary">a petit prix</span>, ou que vous
              soyez
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Envoyez et recevez vos colis en temps record. Une seule
              application pour tous vos besoins de mobilite.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button size="lg" asChild className="gap-2 h-12 px-6">
                <Link href="#download">
                  <Download className="h-5 w-5" />
                  Telecharger l'application
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="gap-2 h-12 px-6">
                <Link href="#services">
                  Decouvrir nos services
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </motion.div>

            {/* Stats preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-12 pt-8 border-t border-border/50"
            >
              <div className="grid grid-cols-3 gap-8">
                {[
                  { value: "15", label: "Pays" },
                  { value: "50+", label: "Villes" },
                  { value: "100k+", label: "Utilisateurs" },
                ].map((stat, index) => (
                  <div key={stat.label} className="text-center lg:text-left">
                    <div className="text-2xl sm:text-3xl font-bold text-primary">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative flex justify-center"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-primary/20 rounded-[3rem] blur-3xl opacity-50" />

              {/* Phone frame */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-[280px] sm:w-[320px] h-[560px] sm:h-[640px] bg-foreground rounded-[3rem] p-3 shadow-2xl"
              >
                {/* Screen */}
                <div className="w-full h-full rounded-[2.5rem] overflow-hidden relative bg-background">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-foreground rounded-b-2xl z-10" />

                  {/* App screenshot */}
                  <Image
                    src="/images/captureHome.jpeg"
                    alt="UPJUNOO PRO App"
                    fill
                    className="object-cover"
                    style={{ objectPosition: "center -8px" }}
                    priority
                  />
                </div>
              </motion.div>

              {/* Floating vehicles - positioned around the phone on desktop */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -left-16 lg:-left-60 top-1/4"
              >
                <Image
                  src="/images/voiture.png"
                  alt="Voiture UPJUNOO"
                  width={240}
                  height={160}
                  className="w-32 lg:w-56 h-auto drop-shadow-xl"
                />
              </motion.div>

              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -right-16 lg:-right-64 top-1/3"
              >
                <Image
                  src="/images/tricycle.png"
                  alt="Tricycle UPJUNOO Delivery"
                  width={280}
                  height={200}
                  className="w-36 lg:w-64 h-auto drop-shadow-xl"
                />
              </motion.div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute -left-12 lg:-left-56 bottom-1/4"
              >
                <Image
                  src="/images/moto.png"
                  alt="Moto UPJUNOO"
                  width={200}
                  height={140}
                  className="w-28 lg:w-48 h-auto drop-shadow-xl"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
