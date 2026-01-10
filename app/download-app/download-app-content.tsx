"use client";

import { motion } from "motion/react";
import { Smartphone, Car } from "lucide-react";
import Image from "next/image";

type DownloadAppTranslations = {
  title: string;
  subtitle: string;
  apps: {
    rider: {
      name: string;
      subtitle: string;
      description: string;
      features: string[];
    };
    driver: {
      name: string;
      subtitle: string;
      description: string;
      features: string[];
    };
  };
  comingSoon: string;
  downloadPlayStore: string;
  downloadAppStore: string;
  footer: string;
};

export function DownloadAppContent({
  translations: t,
}: {
  translations: DownloadAppTranslations;
}) {
  const apps = [
    {
      id: "rider",
      name: t.apps.rider.name,
      subtitle: t.apps.rider.subtitle,
      description: t.apps.rider.description,
      icon: Smartphone,
      features: t.apps.rider.features,
      playStoreUrl: "",
      appStoreUrl: "https://apps.apple.com/fr/app/upjunoo/id6737838257",
      color: "from-primary to-[#046d7a]",
      iconBg: "bg-primary/10",
      iconColor: "text-primary",
      playStoreDisabled: true,
      appStoreDisabled: false,
    },
    {
      id: "driver",
      name: t.apps.driver.name,
      subtitle: t.apps.driver.subtitle,
      description: t.apps.driver.description,
      icon: Car,
      features: t.apps.driver.features,
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.upjunoo.driver",
      appStoreUrl: "https://apps.apple.com/fr/app/upjunoo-pro/id6737838816",
      color: "from-yellow-500 to-yellow-600",
      iconBg: "bg-yellow-500/10",
      iconColor: "text-yellow-600",
      playStoreDisabled: false,
      appStoreDisabled: false,
    },
  ];

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
          {t.title}
        </h1>
        <p className="text-gray-600">
          {t.subtitle}
        </p>
      </motion.div>

      {/* App Cards */}
      <div className="grid sm:grid-cols-2 gap-6 w-full max-w-2xl">
        {apps.map((app, index) => (
          <motion.div
            key={app.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
            className="group relative bg-white rounded-3xl p-6 border border-gray-200 transition-all duration-300 overflow-hidden hover:border-primary/30"
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

              {/* CTA Buttons */}
              <div className="flex flex-col gap-2">
                {/* App Store Button */}
                <a
                  href={app.appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 rounded-xl bg-black text-white text-center font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 ${app.appStoreDisabled ? "opacity-50 cursor-not-allowed pointer-events-none" : ""}`}
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
                  </svg>
                  {app.appStoreDisabled ? t.comingSoon : t.downloadAppStore}
                </a>

                {/* Play Store Button */}
                <a
                  href={app.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 rounded-xl bg-gradient-to-r ${app.color} text-white text-center font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 ${app.playStoreDisabled ? "opacity-50 cursor-not-allowed pointer-events-none" : ""}`}
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  {app.playStoreDisabled ? t.comingSoon : t.downloadPlayStore}
                </a>
              </div>
            </div>

            {/* Decorative corner */}
            <div className={`absolute -bottom-8 -right-8 w-24 h-24 rounded-full bg-gradient-to-br ${app.color} opacity-5 group-hover:opacity-10 transition-opacity`} />
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-10 text-sm text-gray-500 text-center"
      >
        {t.footer}
      </motion.p>
    </main>
  );
}
