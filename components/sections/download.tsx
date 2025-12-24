"use client";

import { motion, AnimatePresence } from "motion/react";
import { Download, Smartphone, Apple, Play, Users, X } from "lucide-react";
import { toast } from "sonner";
import Image from "next/image";
import { useEffect, useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface DownloadData {
  total: number;
  client: number;
  driver: number;
}

type QRCodeType = "ios" | "android" | "apk" | null;

const QR_URLS = {
  ios: "https://apps.apple.com/app/upjunoo-pro/id123456789",
  android: "https://play.google.com/store/apps/details?id=com.upjunoo.pro",
  apk: "https://upjunoo.pro/apk/app-client.apk",
};

const handleAppStoreClick = (e: React.MouseEvent) => {
  e.preventDefault();
  toast.info("Bientot disponible", {
    description: "L'application sera bientot disponible sur l'App Store",
  });
};

const handlePlayStoreClick = (e: React.MouseEvent) => {
  e.preventDefault();
  toast.info("Bientot disponible", {
    description: "L'application sera bientot disponible sur Google Play",
  });
};

export function DownloadSection() {
  const [downloadCount, setDownloadCount] = useState<DownloadData | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const [selectedQR, setSelectedQR] = useState<QRCodeType>(null);

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  useEffect(() => {
    fetch("/api/downloads")
      .then((res) => res.json())
      .then((data) => setDownloadCount(data))
      .catch(() => setDownloadCount({ total: 3000, client: 1800, driver: 1200 }));
  }, []);

  const handleApkDownload = async (type: "client" | "driver") => {
    try {
      await fetch("/api/downloads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type }),
      });
      const res = await fetch("/api/downloads");
      const data = await res.json();
      setDownloadCount(data);
    } catch {
      // Silently fail, download will still work
    }
  };

  const formatNumber = (num: number) => {
    return num.toLocaleString("fr-FR");
  };

  const qrLabels = {
    ios: { icon: Apple, label: "App Store" },
    android: { icon: Play, label: "Google Play" },
    apk: { icon: Download, label: "APK Direct" },
  };

  return (
    <>
      {/* QR Code Modal with Liquid Glass Effect */}
      <AnimatePresence>
        {selectedQR && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center"
            onClick={() => setSelectedQR(null)}
          >
            {/* Backdrop with blur */}
            <motion.div
              initial={{ backdropFilter: "blur(0px)" }}
              animate={{ backdropFilter: "blur(20px)" }}
              exit={{ backdropFilter: "blur(0px)" }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 bg-black/40"
            />

            {/* QR Code Container */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.5, opacity: 0, y: 20 }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 300,
                duration: 0.5,
              }}
              onClick={(e) => e.stopPropagation()}
              className="relative"
            >
              {/* Liquid glass container */}
              <div className="relative p-8 rounded-[2.5rem] bg-white/80 backdrop-blur-xl shadow-2xl border border-white/50">
                {/* Inner glow effect */}
                <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-white/60 via-transparent to-white/30 pointer-events-none" />

                {/* Close button */}
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedQR(null)}
                  className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </motion.button>

                {/* QR Code */}
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.1, type: "spring", damping: 20 }}
                  className="relative z-10"
                >
                  <div className="w-64 h-64 bg-white rounded-2xl p-4 shadow-inner flex items-center justify-center">
                    <QRCodeSVG
                      value={QR_URLS[selectedQR]}
                      size={224}
                      level="H"
                      includeMargin={false}
                    />
                  </div>
                </motion.div>

                {/* Label */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mt-6 text-center relative z-10"
                >
                  <div className="flex items-center justify-center gap-2 text-gray-800">
                    {(() => {
                      const Icon = qrLabels[selectedQR].icon;
                      return <Icon className="w-5 h-5" />;
                    })()}
                    <span className="font-semibold text-lg">{qrLabels[selectedQR].label}</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    Scannez avec votre telephone
                  </p>
                </motion.div>

                {/* Decorative elements */}
                <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-primary/20 rounded-full blur-xl" />
                <div className="absolute -top-2 -right-2 w-12 h-12 bg-yellow-400/30 rounded-full blur-xl" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section id="download" className="py-20 lg:py-32 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/10" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-primary/20"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative max-w-sm mx-auto">
              {/* Glow */}
              <div className="absolute -inset-8 bg-primary/20 rounded-full blur-3xl opacity-40" />

              {/* Phone */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                <div className="w-[260px] h-[520px] bg-gray-900 rounded-[2.5rem] p-2 mx-auto shadow-2xl ring-1 ring-white/10">
                  <div className="w-full h-full rounded-[2rem] relative overflow-hidden bg-white">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-gray-900 rounded-b-xl z-10" />

                    {/* App screenshot */}
                    <Image
                      src="/images/screenshots/client-app.jpeg"
                      alt="UPJUNOO PRO App"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Floating badge */}
                <motion.div
                  animate={{ y: [0, -10, 0], rotate: [-2, 2, -2] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -right-4 top-1/4 bg-card rounded-2xl p-4 shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Smartphone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">App Rating</div>
                      <div className="font-semibold flex items-center gap-1">
                        4.8 <span className="text-yellow-500">★</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2 text-center lg:text-left"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Application Mobile
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-6">
              Telechargez{" "}
              <span className="text-primary">UPJUNOO PRO</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-lg mx-auto lg:mx-0">
              Disponible sur toutes les plateformes. Telechargez maintenant et
              commencez a profiter de nos services de mobilite.
            </p>

            {/* Download buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {/* App Store Button */}
              <motion.button
                onClick={handleAppStoreClick}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0 }}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-3 px-5 py-3 bg-foreground text-background rounded-xl hover:bg-foreground/90 transition-colors"
              >
                <Apple className="h-7 w-7" />
                <div className="text-left">
                  <div className="text-xs opacity-80">Telecharger sur</div>
                  <div className="font-semibold">App Store</div>
                </div>
              </motion.button>

              {/* Google Play Button */}
              <motion.button
                onClick={handlePlayStoreClick}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-3 px-5 py-3 bg-foreground text-background rounded-xl hover:bg-foreground/90 transition-colors"
              >
                <Play className="h-7 w-7" />
                <div className="text-left">
                  <div className="text-xs opacity-80">Disponible sur</div>
                  <div className="font-semibold">Google Play</div>
                </div>
              </motion.button>

              {/* APK Direct Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-3 px-5 py-3 bg-foreground text-background rounded-xl hover:bg-foreground/90 transition-colors"
                  >
                    <Download className="h-7 w-7" />
                    <div className="text-left">
                      <div className="text-xs opacity-80">Telecharger</div>
                      <div className="font-semibold">APK Direct</div>
                    </div>
                  </motion.button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuItem asChild>
                    <a
                      href="/apk/app-client.apk"
                      download="upjunoo-pro-client.apk"
                      className="flex items-center gap-2 cursor-pointer"
                      onClick={() => handleApkDownload("client")}
                    >
                      <Smartphone className="h-4 w-4" />
                      <div>
                        <div className="font-medium">Application Passager</div>
                        <div className="text-xs text-muted-foreground">
                          Pour les utilisateurs
                        </div>
                      </div>
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a
                      href="/apk/app-driver.apk"
                      download="upjunoo-pro-driver.apk"
                      className="flex items-center gap-2 cursor-pointer"
                      onClick={() => handleApkDownload("driver")}
                    >
                      <Smartphone className="h-4 w-4" />
                      <div>
                        <div className="font-medium">Application Chauffeur</div>
                        <div className="text-xs text-muted-foreground">
                          Pour les conducteurs
                        </div>
                      </div>
                    </a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Download counter */}
            {downloadCount && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mt-4 flex items-center gap-2 justify-center lg:justify-start text-sm"
              >
                <Users className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">
                  <span className="font-semibold text-foreground">
                    {formatNumber(downloadCount.total)}
                  </span>{" "}
                  telechargements APK
                </span>
              </motion.div>
            )}

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-6 flex items-center gap-6 justify-center lg:justify-start text-sm text-muted-foreground"
            >
              <span className="flex items-center gap-2">
                <span className="text-green-500">✓</span> Gratuit
              </span>
              <span className="flex items-center gap-2">
                <span className="text-green-500">✓</span> Securise
              </span>
              <span className="flex items-center gap-2">
                <span className="text-green-500">✓</span> Sans pub
              </span>
            </motion.div>

            {/* QR Codes for Desktop */}
            {isDesktop && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="mt-10 p-6 bg-card rounded-2xl border border-border"
              >
                <h3 className="text-lg font-semibold mb-4 text-center lg:text-left">
                  Scannez pour telecharger
                </h3>
                <div className="flex gap-6 justify-center lg:justify-start flex-wrap">
                  {/* iOS QR Code */}
                  <motion.button
                    onClick={() => setSelectedQR("ios")}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex flex-col items-center gap-3 cursor-pointer"
                  >
                    <div className="w-24 h-24 bg-white rounded-xl p-2 shadow-md hover:shadow-lg transition-shadow flex items-center justify-center">
                      <QRCodeSVG value={QR_URLS.ios} size={80} level="M" includeMargin={false} />
                    </div>
                    <div className="flex items-center gap-2">
                      <Apple className="h-4 w-4" />
                      <span className="text-sm font-medium">iOS</span>
                    </div>
                  </motion.button>

                  {/* Android QR Code */}
                  <motion.button
                    onClick={() => setSelectedQR("android")}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex flex-col items-center gap-3 cursor-pointer"
                  >
                    <div className="w-24 h-24 bg-white rounded-xl p-2 shadow-md hover:shadow-lg transition-shadow flex items-center justify-center">
                      <QRCodeSVG value={QR_URLS.android} size={80} level="M" includeMargin={false} />
                    </div>
                    <div className="flex items-center gap-2">
                      <Play className="h-4 w-4" />
                      <span className="text-sm font-medium">Android</span>
                    </div>
                  </motion.button>

                  {/* APK Direct QR Code */}
                  <motion.button
                    onClick={() => setSelectedQR("apk")}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex flex-col items-center gap-3 cursor-pointer"
                  >
                    <div className="w-24 h-24 bg-white rounded-xl p-2 shadow-md hover:shadow-lg transition-shadow flex items-center justify-center">
                      <QRCodeSVG value={QR_URLS.apk} size={80} level="M" includeMargin={false} />
                    </div>
                    <div className="flex items-center gap-2">
                      <Download className="h-4 w-4" />
                      <span className="text-sm font-medium">APK Direct</span>
                    </div>
                  </motion.button>
                </div>
                <p className="text-xs text-muted-foreground mt-4 text-center lg:text-left">
                  Cliquez sur un QR code pour l&apos;agrandir
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
    </>
  );
}
