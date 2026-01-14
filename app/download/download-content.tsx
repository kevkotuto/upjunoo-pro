"use client";

import { motion } from "motion/react";
import { Smartphone, Car, Apple, Play, Monitor } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { QRCodeSVG } from "qrcode.react";
import { useTranslations } from "next-intl";
import { type PlatformInfo } from "@/lib/platform-detection";
import { trackPlatformDetection, trackAppSelection, trackAutoRedirect, trackPlatformToggle } from "@/lib/analytics";
import { useToast } from "@/hooks/use-toast";

interface DownloadContentProps {
  platformInfo: PlatformInfo;
}

type AppType = "rider" | "driver";

const APP_URLS = {
  rider: {
    ios: "https://apps.apple.com/fr/app/upjunoo/id6737838257",
    android: "", // Coming Soon
  },
  driver: {
    ios: "https://apps.apple.com/fr/app/upjunoo-pro/id6737838816",
    android: "https://play.google.com/store/apps/details?id=com.upjunoo.driver",
  },
};

export function DownloadContent({ platformInfo }: DownloadContentProps) {
  const t = useTranslations();
  const [selectedPlatform, setSelectedPlatform] = useState<'ios' | 'android'>(
    platformInfo.platform === 'android' ? 'android' : 'ios'
  );
  const { toast } = useToast();

  // Track platform detection on mount
  useEffect(() => {
    trackPlatformDetection(platformInfo.platform, platformInfo.isMobile);
  }, [platformInfo]);

  const handlePlatformToggle = (newPlatform: 'ios' | 'android') => {
    trackPlatformToggle(selectedPlatform, newPlatform);
    setSelectedPlatform(newPlatform);
  };

  const handleAppDownload = (appType: AppType) => {
    trackAppSelection(appType, platformInfo.isMobile ? selectedPlatform : 'desktop');

    // For mobile: direct redirect
    if (platformInfo.isMobile) {
      const url = APP_URLS[appType][selectedPlatform];

      if (!url) {
        // Coming Soon (Rider Android)
        toast({
          title: t("download.comingSoonAndroid"),
          description: t("common.comingSoon"),
        });
        return;
      }

      trackAutoRedirect(appType, selectedPlatform);
      window.location.href = url;
    }
  };

  const apps = [
    {
      id: "rider" as AppType,
      name: t("download.riderApp"),
      subtitle: t("download.forUsers"),
      description: t("downloadApp.apps.rider.description"),
      icon: Smartphone,
      features: [
        t("downloadApp.apps.rider.features.0"),
        t("downloadApp.apps.rider.features.1"),
        t("downloadApp.apps.rider.features.2"),
      ],
      color: "from-primary to-[#046d7a]",
      iconBg: "bg-primary/10",
      iconColor: "text-primary",
    },
    {
      id: "driver" as AppType,
      name: t("download.driverApp"),
      subtitle: t("download.forDrivers"),
      description: t("downloadApp.apps.driver.description"),
      icon: Car,
      features: [
        t("downloadApp.apps.driver.features.0"),
        t("downloadApp.apps.driver.features.1"),
        t("downloadApp.apps.driver.features.2"),
      ],
      color: "from-yellow-500 to-yellow-600",
      iconBg: "bg-yellow-500/10",
      iconColor: "text-yellow-600",
    },
  ];

  // Mobile View (iOS or Android detected)
  if (platformInfo.isMobile && platformInfo.platform !== 'unknown') {
    return (
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col items-center justify-center p-4 sm:p-8">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <Image
            src="/images/logo.png"
            alt="UPJUNOO PRO"
            width={180}
            height={60}
            className="h-10 w-auto"
          />
        </motion.div>

        {/* Platform Detected Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="mb-4 px-4 py-2 bg-white rounded-full border border-gray-200 flex items-center gap-2"
        >
          {selectedPlatform === 'ios' ? (
            <Apple className="w-4 h-4" />
          ) : (
            <Play className="w-4 h-4" />
          )}
          <span className="text-sm text-gray-600">
            {t("download.platformDetected").replace('{platform}', selectedPlatform === 'ios' ? 'iOS' : 'Android')}
          </span>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-8"
        >
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            {t("download.chooseYourApp")}
          </h1>
          <p className="text-gray-600 text-sm">
            {t("download.selectApp")}
          </p>
        </motion.div>

        {/* App Cards */}
        <div className="w-full max-w-md space-y-4 mb-6">
          {apps.map((app, index) => {
            const appUrl = APP_URLS[app.id][selectedPlatform];
            const isDisabled = !appUrl;

            return (
              <motion.button
                key={app.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                onClick={() => handleAppDownload(app.id)}
                disabled={isDisabled}
                className={`w-full text-left bg-white rounded-2xl p-5 border border-gray-200 transition-all duration-300 ${
                  isDisabled ? 'opacity-60 cursor-not-allowed' : 'hover:border-primary/30 hover:shadow-lg active:scale-[0.98]'
                }`}
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl ${app.iconBg} flex items-center justify-center flex-shrink-0`}>
                    <app.icon className={`h-7 w-7 ${app.iconColor}`} />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <p className="text-xs text-gray-500 mb-0.5">{app.subtitle}</p>
                    <h2 className="text-lg font-bold text-gray-900 mb-1">{app.name}</h2>
                    <p className="text-sm text-gray-600 mb-3">{app.description}</p>

                    {/* Download Button */}
                    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r ${app.color} text-white font-semibold text-sm`}>
                      {selectedPlatform === 'ios' ? (
                        <Apple className="w-4 h-4" />
                      ) : (
                        <Play className="w-4 h-4" />
                      )}
                      {isDisabled ? t("common.comingSoon") : t("download.downloadNow")}
                    </div>
                  </div>
                </div>

                {/* Coming Soon Badge */}
                {isDisabled && (
                  <div className="mt-3 text-xs text-amber-600 bg-amber-50 rounded-lg px-3 py-2">
                    {t("download.comingSoonAndroid")}
                  </div>
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Platform Toggle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <p className="text-sm text-gray-500 mb-2">{t("download.notYourPlatform")}</p>
          <div className="inline-flex items-center gap-2 bg-white rounded-lg p-1 border border-gray-200">
            <button
              onClick={() => handlePlatformToggle('ios')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                selectedPlatform === 'ios'
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Apple className="w-4 h-4 inline mr-1" />
              iOS
            </button>
            <button
              onClick={() => handlePlatformToggle('android')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                selectedPlatform === 'android'
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Play className="w-4 h-4 inline mr-1" />
              Android
            </button>
          </div>
        </motion.div>
      </main>
    );
  }

  // Desktop View (or unknown platform)
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
          width={200}
          height={67}
          className="h-14 w-auto"
        />
      </motion.div>

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-center mb-10"
      >
        <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-white rounded-full border border-gray-200">
          <Monitor className="w-4 h-4 text-gray-600" />
          <span className="text-sm text-gray-600">{t("download.scanQRCode")}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          {t("download.downloadPageTitle")}
        </h1>
        <p className="text-gray-600 text-lg">
          {t("download.downloadPageSubtitle")}
        </p>
      </motion.div>

      {/* App Cards with QR Codes */}
      <div className="grid sm:grid-cols-2 gap-8 w-full max-w-3xl">
        {apps.map((app, index) => (
          <motion.div
            key={app.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
            className="bg-white rounded-3xl p-6 border border-gray-200 hover:border-primary/30 transition-all duration-300"
          >
            {/* Icon */}
            <div className={`w-16 h-16 rounded-2xl ${app.iconBg} flex items-center justify-center mb-4`}>
              <app.icon className={`h-8 w-8 ${app.iconColor}`} />
            </div>

            {/* Content */}
            <p className="text-sm text-gray-500 mb-1">{app.subtitle}</p>
            <h2 className="text-xl font-bold text-gray-900 mb-2">{app.name}</h2>
            <p className="text-gray-600 text-sm mb-4">{app.description}</p>

            {/* Features */}
            <ul className="space-y-2 mb-6">
              {app.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                  <div className={`w-1.5 h-1.5 rounded-full ${app.id === "rider" ? "bg-primary" : "bg-yellow-500"}`} />
                  {feature}
                </li>
              ))}
            </ul>

            {/* QR Codes */}
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                {/* iOS QR Code */}
                <div className="text-center">
                  <div className="w-full aspect-square bg-gray-50 rounded-xl p-3 mb-2 flex items-center justify-center">
                    <QRCodeSVG
                      value={APP_URLS[app.id].ios}
                      size={100}
                      level="M"
                      includeMargin={false}
                    />
                  </div>
                  <div className="flex items-center justify-center gap-1 text-xs text-gray-600">
                    <Apple className="w-3 h-3" />
                    <span>iOS</span>
                  </div>
                </div>

                {/* Android QR Code */}
                <div className="text-center relative">
                  <div className={`w-full aspect-square bg-gray-50 rounded-xl p-3 mb-2 flex items-center justify-center ${
                    !APP_URLS[app.id].android ? 'opacity-40' : ''
                  }`}>
                    {APP_URLS[app.id].android ? (
                      <QRCodeSVG
                        value={APP_URLS[app.id].android}
                        size={100}
                        level="M"
                        includeMargin={false}
                      />
                    ) : (
                      <div className="text-xs text-gray-400 text-center px-2">
                        {t("common.comingSoon")}
                      </div>
                    )}
                  </div>
                  <div className="flex items-center justify-center gap-1 text-xs text-gray-600">
                    <Play className="w-3 h-3" />
                    <span>Android</span>
                  </div>
                  {!APP_URLS[app.id].android && (
                    <div className="absolute top-0 left-0 right-0 bg-amber-100 text-amber-800 text-[10px] py-0.5 rounded-t-xl">
                      {t("common.comingSoon")}
                    </div>
                  )}
                </div>
              </div>

              {/* Direct Links */}
              <div className="pt-2 border-t border-gray-100">
                <p className="text-xs text-gray-500 mb-2">{t("download.orDownloadDirectly")}</p>
                <div className="flex gap-2">
                  <a
                    href={APP_URLS[app.id].ios}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-3 bg-black text-white text-xs font-medium rounded-lg hover:opacity-90 transition-opacity text-center"
                  >
                    <Apple className="w-3 h-3 inline mr-1" />
                    App Store
                  </a>
                  <a
                    href={APP_URLS[app.id].android || '#'}
                    target={APP_URLS[app.id].android ? "_blank" : undefined}
                    rel={APP_URLS[app.id].android ? "noopener noreferrer" : undefined}
                    className={`flex-1 py-2 px-3 bg-gradient-to-r ${app.color} text-white text-xs font-medium rounded-lg transition-opacity text-center ${
                      !APP_URLS[app.id].android ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'
                    }`}
                    onClick={(e) => {
                      if (!APP_URLS[app.id].android) {
                        e.preventDefault();
                        toast({
                          title: t("download.comingSoonAndroid"),
                          description: t("common.comingSoon"),
                        });
                      }
                    }}
                  >
                    <Play className="w-3 h-3 inline mr-1" />
                    Google Play
                  </a>
                </div>
              </div>
            </div>
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
        {t("downloadApp.footer")}
      </motion.p>
    </main>
  );
}
