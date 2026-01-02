"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { Mail } from "lucide-react";
import { useTranslations } from "next-intl";
import { Separator } from "@/components/ui/separator";
import { socialLinks } from "@/data/social-links";

const footerLinksConfig = {
  services: [
    { key: "passenger", href: "/passager" },
    { key: "delivery", href: "/livraison" },
    { key: "freight", href: "/fret-urbain" },
    { key: "rental", href: "/location" },
    { key: "drivers", href: "/devenir-chauffeur" },
  ],
  company: [
    { key: "home", href: "/" },
    { key: "locations", href: "/nos-implantations" },
    { key: "news", href: "/actualites" },
    { key: "partnerOffers", href: "/offres-partenaires" },
  ],
  legal: [
    { key: "terms", href: "/cgu" },
    { key: "privacy", href: "/confidentialite" },
    { key: "faq", href: "/faq" },
    { key: "support", href: "/support" },
  ],
};


export function Footer() {
  const t = useTranslations();

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <Link href="/" className="inline-block mb-4">
                <Image
                  src="/images/logo/logo_fond_noir.jpg"
                  alt="UPJUNOO PRO"
                  width={150}
                  height={56}
                  className="h-12 w-auto rounded-lg"
                  unoptimized
                />
              </Link>
              <p className="text-background/70 text-sm leading-relaxed mb-6 max-w-sm">
                {t("footer.description")}
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <a
                  href="mailto:contact@upjunoopro.com"
                  className="flex items-center gap-3 text-sm text-background/70 hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  contact@upjunoopro.com
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold text-sm uppercase tracking-wider mb-4">
                {t("footer.sections.services")}
              </h3>
              <ul className="space-y-3">
                {footerLinksConfig.services.map((link) => (
                  <li key={link.key}>
                    <Link
                      href={link.href}
                      className="text-sm text-background/70 hover:text-primary transition-colors"
                    >
                      {t(`services.${link.key}.title`)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold text-sm uppercase tracking-wider mb-4">
                {t("footer.sections.company")}
              </h3>
              <ul className="space-y-3">
                {footerLinksConfig.company.map((link) => (
                  <li key={link.key}>
                    <Link
                      href={link.href}
                      className="text-sm text-background/70 hover:text-primary transition-colors"
                    >
                      {t(`footer.links.${link.key}`)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-semibold text-sm uppercase tracking-wider mb-4">
                {t("footer.sections.legal")}
              </h3>
              <ul className="space-y-3">
                {footerLinksConfig.legal.map((link) => (
                  <li key={link.key}>
                    <Link
                      href={link.href}
                      className="text-sm text-background/70 hover:text-primary transition-colors"
                    >
                      {t(`footer.links.${link.key}`)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <Separator className="bg-background/10" />

        {/* Bottom Footer */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/60">
            &copy; {new Date().getFullYear()} UPJUNOO PRO. {t("common.allRightsReserved")}
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label={social.label}
              >
                <social.icon className="h-4 w-4" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
