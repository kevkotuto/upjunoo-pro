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
      url: "",
      color: "from-primary to-[#046d7a]",
      iconBg: "bg-primary/10",
      iconColor: "text-primary",
      disabled: true,
    },
    {
      id: "driver",
      name: t.apps.driver.name,
      subtitle: t.apps.driver.subtitle,
      description: t.apps.driver.description,
      icon: Car,
      features: t.apps.driver.features,
      url: "https://play.google.com/store/apps/details?id=com.upjunoo.driver",
      color: "from-yellow-500 to-yellow-600",
      iconBg: "bg-yellow-500/10",
      iconColor: "text-yellow-600",
      disabled: false,
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
        {apps.map((app, index) => {
          const Component = app.disabled ? motion.div : motion.a;
          const linkProps = app.disabled ? {} : { href: app.url, target: "_blank", rel: "noopener noreferrer" };

          return (
            <Component
              key={app.id}
              {...linkProps}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              whileHover={app.disabled ? {} : { scale: 1.02, y: -5 }}
              whileTap={app.disabled ? {} : { scale: 0.98 }}
              className={`group relative bg-white rounded-3xl p-6 border border-gray-200 transition-all duration-300 overflow-hidden ${app.disabled ? "opacity-50 cursor-not-allowed" : "hover:border-primary/30 cursor-pointer"}`}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${app.color} opacity-0 ${!app.disabled && "group-hover:opacity-5"} transition-opacity duration-500`} />

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
                <div className={`w-full py-3 rounded-xl ${app.disabled ? "bg-gray-400" : `bg-gradient-to-r ${app.color}`} text-white text-center font-semibold ${!app.disabled && "group-hover:opacity-90"} transition-opacity flex items-center justify-center gap-2`}>
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  {app.disabled ? t.comingSoon : t.downloadPlayStore}
                </div>
              </div>

              {/* Decorative corner */}
              <div className={`absolute -bottom-8 -right-8 w-24 h-24 rounded-full bg-gradient-to-br ${app.color} opacity-5 ${!app.disabled && "group-hover:opacity-10"} transition-opacity`} />
            </Component>
          );
        })}
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
