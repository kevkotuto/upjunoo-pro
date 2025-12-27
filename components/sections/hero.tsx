"use client";

import { motion } from "motion/react";
import { Download, ArrowRight, Play, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { formattedKpis, kpis } from "@/data/kpis";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20 bg-gradient-to-br from-primary via-primary to-[#046d7a]">
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large floating circles */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full bg-white/10"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.08, 0.12, 0.08],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-white/10"
        />

        {/* Floating geometric shapes */}
        <motion.div
          animate={{ y: [-20, 20, -20], rotate: [0, 180, 360] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-[10%] w-16 h-16 border-4 border-white/20 rounded-xl"
        />
        <motion.div
          animate={{ y: [20, -20, 20], rotate: [360, 180, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/3 right-[15%] w-20 h-20 border-4 border-white/15 rounded-full"
        />
        <motion.div
          animate={{ x: [-30, 30, -30], y: [10, -10, 10] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 right-[5%] w-8 h-8 bg-yellow-400/30 rounded-lg"
        />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/15 backdrop-blur-sm text-white text-sm font-medium mb-8 border border-white/20"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-yellow-400" />
              </span>
              <span>Disponible dans {kpis.pays.value} pays</span>
              <div className="flex -space-x-1">
                <span className="text-lg">🇨🇮</span>
                <span className="text-lg">🇸🇳</span>
                <span className="text-lg">🇨🇲</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.15] sm:leading-[1.1] mb-6 text-white"
            >
              La mobilite
              <br />
              <span className="relative inline-block pb-2 sm:pb-3">
                <span className="text-yellow-400">reinventee</span>
                <motion.svg
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="absolute bottom-0 left-0 w-full h-2 sm:h-3"
                  viewBox="0 0 200 12"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 8 Q 50 2, 100 8 T 198 6"
                    stroke="#facc15"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                  />
                </motion.svg>
              </span>
              <br />
              pour l'international
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-lg sm:text-xl text-white/80 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Taxi, livraison express, location de vehicules et fret - une seule application pour tous vos besoins de transport.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <Button
                size="lg"
                asChild
                className="gap-2 h-14 px-8 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold text-base shadow-xl hover:shadow-2xl transition-all hover:scale-105"
              >
                <Link href="#download">
                  <Download className="h-5 w-5" />
                  Telecharger gratuitement
                </Link>
              </Button>
              {/* Bouton demo - a reactiver quand la demo sera prete
              <Button
                size="lg"
                variant="outline"
                asChild
                className="gap-2 h-14 px-8 bg-transparent border-2 border-white/40 text-white hover:bg-white hover:text-primary font-semibold text-base transition-all"
              >
                <Link href="#services">
                  <Play className="h-4 w-4" />
                  Voir la demo
                </Link>
              </Button>
              */}
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-wrap items-center gap-6 justify-center lg:justify-start"
            >
              <div className="flex items-center gap-2 text-white/90">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm font-medium">{formattedKpis.satisfaction}</span>
              </div>
              <div className="h-5 w-px bg-white/30" />
              <div className="flex items-center gap-2 text-white/90">
                <Download className="h-4 w-4" />
                <span className="text-sm font-medium">{formattedKpis.telechargements} telechargements</span>
              </div>
              <div className="h-5 w-px bg-white/30 hidden sm:block" />
              <div className="flex items-center gap-2 text-white/90">
                <MapPin className="h-4 w-4" />
                <span className="text-sm font-medium">{formattedKpis.villes} villes</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Phone Mockup with vehicles */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow effects */}
              <div className="absolute -inset-8 bg-yellow-400/20 rounded-full blur-3xl opacity-60" />
              <div className="absolute -inset-16 bg-white/5 rounded-full blur-3xl" />

              {/* Main phone */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                {/* Phone frame */}
                <div className="relative w-[280px] sm:w-[300px] h-[560px] sm:h-[600px] bg-gray-900 rounded-[3rem] p-2 shadow-2xl ring-1 ring-white/20">
                  {/* Screen */}
                  <div className="w-full h-full rounded-[2.5rem] overflow-hidden relative bg-white">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-gray-900 rounded-b-2xl z-10" />

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

                  {/* Side button */}
                  <div className="absolute right-[-2px] top-28 w-1 h-16 bg-gray-700 rounded-l-sm" />
                  <div className="absolute left-[-2px] top-24 w-1 h-8 bg-gray-700 rounded-r-sm" />
                  <div className="absolute left-[-2px] top-36 w-1 h-12 bg-gray-700 rounded-r-sm" />
                </div>
              </motion.div>

              {/* Floating vehicle - Car */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  x: [0, 10, 0],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-20 lg:-left-40 top-16 z-20"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/30 rounded-full blur-2xl scale-150" />
                  <Image
                    src="/images/voiture.png"
                    alt="Voiture UPJUNOO PRO"
                    width={220}
                    height={150}
                    className="w-28 lg:w-52 h-auto drop-shadow-2xl relative"
                  />
                </div>
              </motion.div>

              {/* Floating vehicle - Tricycle */}
              <motion.div
                animate={{
                  y: [0, 15, 0],
                  x: [0, -8, 0],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -right-16 lg:-right-36 top-1/3 z-20"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-2xl scale-150" />
                  <Image
                    src="/images/tricycle.png"
                    alt="Tricycle UPJUNOO PRO Delivery"
                    width={260}
                    height={180}
                    className="w-32 lg:w-56 h-auto drop-shadow-2xl relative"
                  />
                </div>
              </motion.div>

              {/* Floating vehicle - Moto */}
              <motion.div
                animate={{
                  y: [0, -12, 0],
                  rotate: [-2, 2, -2],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -left-12 lg:-left-32 bottom-20 z-20"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl scale-150" />
                  <Image
                    src="/images/moto.png"
                    alt="Moto UPJUNOO PRO"
                    width={180}
                    height={120}
                    className="w-24 lg:w-44 h-auto drop-shadow-2xl relative"
                  />
                </div>
              </motion.div>

              {/* Floating info cards */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -right-4 lg:right-[-60px] bottom-32 z-30"
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Livraison</p>
                    <p className="text-sm font-semibold text-gray-900">En cours...</p>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -left-4 lg:left-[-50px] top-32 z-30"
              >
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Chauffeur</p>
                    <p className="text-sm font-semibold text-gray-900">A 2 min</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
