"use client";

import { motion } from "motion/react";
import { Smartphone, Car, Package } from "lucide-react";
import Image from "next/image";

const apps = [
  {
    id: "rider",
    name: "Upjunoo",
    subtitle: "Application Passager",
    description: "Commandez des courses, livraisons et locations en quelques clics",
    icon: Smartphone,
    features: ["Commander un taxi/VTC", "Livraison express", "Location de véhicules"],
    url: "https://play.google.com/store/apps/details?id=com.upjunoo.rider",
    color: "from-primary to-[#046d7a]",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    id: "driver",
    name: "Upjunoo Pro",
    subtitle: "Application Chauffeur",
    description: "Devenez chauffeur partenaire et augmentez vos revenus",
    icon: Car,
    features: ["Recevoir des courses", "Gérer vos revenus", "Tableau de bord complet"],
    url: "https://play.google.com/store/apps/details?id=com.upjunoo.driver",
    color: "from-yellow-500 to-yellow-600",
    iconBg: "bg-yellow-500/10",
    iconColor: "text-yellow-600",
  },
];

export default function DownloadAppPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col items-center justify-center p-4 sm:p-8">
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <Image
          src="/images/logo.png"
          alt="UPJUNOO PRO"
          width={180}
          height={60}
          className="h-12 w-auto"
        />
      </motion.div>

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-center mb-10"
      >
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          Choisissez votre application
        </h1>
        <p className="text-gray-600">
          Sélectionnez l&apos;application qui correspond à votre besoin
        </p>
      </motion.div>

      {/* App Cards */}
      <div className="grid sm:grid-cols-2 gap-6 w-full max-w-2xl">
        {apps.map((app, index) => (
          <motion.a
            key={app.id}
            href={app.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
            whileHover={{ scale: 1.02, y: -5 }}
            whileTap={{ scale: 0.98 }}
            className="group relative bg-white rounded-3xl p-6 border border-gray-200 hover:border-primary/30 transition-all duration-300 overflow-hidden"
          >
            {/* Gradient overlay on hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${app.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

            {/* Icon */}
            <div className={`w-16 h-16 rounded-2xl ${app.iconBg} flex items-center justify-center mb-4`}>
              <app.icon className={`h-8 w-8 ${app.iconColor}`} />
            </div>

            {/* Content */}
            <div className="relative">
              <p className="text-sm text-gray-500 mb-1">{app.subtitle}</p>
              <h2 className="text-xl font-bold text-gray-900 mb-2">{app.name}</h2>
              <p className="text-gray-600 text-sm mb-4">{app.description}</p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {app.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                    <div className={`w-1.5 h-1.5 rounded-full ${app.id === "rider" ? "bg-primary" : "bg-yellow-500"}`} />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <div className={`w-full py-3 rounded-xl bg-gradient-to-r ${app.color} text-white text-center font-semibold group-hover:opacity-90 transition-opacity flex items-center justify-center gap-2`}>
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                Télécharger sur Play Store
              </div>
            </div>

            {/* Decorative corner */}
            <div className={`absolute -bottom-8 -right-8 w-24 h-24 rounded-full bg-gradient-to-br ${app.color} opacity-5 group-hover:opacity-10 transition-opacity`} />
          </motion.a>
        ))}
      </div>

      {/* Footer */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-10 text-sm text-gray-500 text-center"
      >
        Disponible sur Google Play Store
      </motion.p>
    </main>
  );
}
