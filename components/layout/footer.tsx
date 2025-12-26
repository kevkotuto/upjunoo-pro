"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  services: [
    { title: "Passager", href: "/passager" },
    { title: "Livraison", href: "/livraison" },
    { title: "Fret Urbain", href: "/fret-urbain" },
    { title: "Location", href: "/location" },
    { title: "Chauffeurs", href: "/devenir-chauffeur" },
  ],
  company: [
    { title: "Accueil", href: "/" },
    { title: "Nos Implantations", href: "/nos-implantations" },
    { title: "Actualites", href: "/actualites" },
    { title: "Offres Partenaires", href: "/offres-partenaires" },
  ],
  legal: [
    { title: "Conditions d'utilisation", href: "/cgu" },
    { title: "Politique de confidentialite", href: "/confidentialite" },
    { title: "FAQ", href: "/faq" },
    { title: "Support", href: "/support" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export function Footer() {
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
                UPJUNOO PRO est une plateforme qui vous permet de commander des
                taxis, envoyer des colis et louer des vehicules en toute
                simplicite.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <a
                  href="mailto:contact@upjunoo.com"
                  className="flex items-center gap-3 text-sm text-background/70 hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  contact@upjunoo.com
                </a>
                {/* TODO: Decommenter quand le numero sera disponible
                <a
                  href="tel:+22500000000"
                  className="flex items-center gap-3 text-sm text-background/70 hover:text-primary transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  +225 00 00 00 00 00
                </a>
                */}
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold text-sm uppercase tracking-wider mb-4">
                Services
              </h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.href}
                      className="text-sm text-background/70 hover:text-primary transition-colors"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold text-sm uppercase tracking-wider mb-4">
                Entreprise
              </h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.href}
                      className="text-sm text-background/70 hover:text-primary transition-colors"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-semibold text-sm uppercase tracking-wider mb-4">
                Informations
              </h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.href}
                      className="text-sm text-background/70 hover:text-primary transition-colors"
                    >
                      {link.title}
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
            &copy; {new Date().getFullYear()} UPJUNOO PRO. Tous droits reserves.
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
