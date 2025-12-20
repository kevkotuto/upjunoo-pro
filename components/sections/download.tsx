"use client";

import { motion } from "motion/react";
import { Download, Smartphone, Apple, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const handleAppStoreClick = (e: React.MouseEvent) => {
  e.preventDefault();
  toast.info("Bientôt disponible", {
    description: "L'application sera bientôt disponible sur l'App Store",
  });
};

const handlePlayStoreClick = (e: React.MouseEvent) => {
  e.preventDefault();
  toast.info("Bientôt disponible", {
    description: "L'application sera bientôt disponible sur Google Play",
  });
};

export function DownloadSection() {
  return (
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
                <div className="w-[260px] h-[520px] bg-foreground rounded-[2.5rem] p-2.5 mx-auto shadow-2xl">
                  <div className="w-full h-full bg-gradient-to-br from-primary via-primary to-primary/90 rounded-[2rem] relative overflow-hidden">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-foreground rounded-b-xl" />

                    {/* App UI mockup */}
                    <div className="absolute inset-0 p-6 pt-10 flex flex-col">
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-10 h-10 rounded-full bg-white/20" />
                        <div className="w-8 h-8 rounded-lg bg-white/20" />
                      </div>

                      <div className="space-y-3 mb-6">
                        <div className="h-3 w-3/4 bg-white/30 rounded-full" />
                        <div className="h-3 w-1/2 bg-white/20 rounded-full" />
                      </div>

                      <div className="flex-1 grid grid-cols-2 gap-3">
                        {[...Array(4)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 + i * 0.1 }}
                            className="bg-white/15 rounded-2xl backdrop-blur-sm"
                          />
                        ))}
                      </div>

                      <div className="mt-6 h-14 bg-white/20 rounded-2xl" />
                    </div>
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

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-8 flex items-center gap-6 justify-center lg:justify-start text-sm text-muted-foreground"
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
