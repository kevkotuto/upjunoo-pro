"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import {
  Menu,
  X,
  Download,
  Car,
  Package,
  CarFront,
  Users,
  Store,
  Handshake,
  UserCheck,
  Truck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { LanguageSwitcher } from "@/components/ui/language-switcher";

const serviceIcons = {
  passenger: Car,
  delivery: Package,
  freight: Truck,
  rental: CarFront,
  drivers: Users,
};

const partnerIcons = {
  franchises: Store,
  partners: Handshake,
  drivers: UserCheck,
};

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const t = useTranslations();

  const services = [
    {
      key: "passenger",
      href: "/passager",
      icon: serviceIcons.passenger,
    },
    {
      key: "delivery",
      href: "/livraison",
      icon: serviceIcons.delivery,
    },
    {
      key: "freight",
      href: "/fret-urbain",
      icon: serviceIcons.freight,
    },
    {
      key: "rental",
      href: "/location",
      icon: serviceIcons.rental,
    },
    {
      key: "drivers",
      href: "/devenir-chauffeur",
      icon: serviceIcons.drivers,
    },
  ];

  const offresPartenaires = [
    {
      key: "franchises",
      href: "/offres-partenaires/franchises",
      icon: partnerIcons.franchises,
    },
    {
      key: "partners",
      href: "/offres-partenaires/partenaires",
      icon: partnerIcons.partners,
    },
    {
      key: "drivers",
      href: "/offres-partenaires/chauffeurs",
      icon: partnerIcons.drivers,
    },
  ];

  // Vérifie si un lien est actif (page courante)
  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  // Vérifie si on est dans une section (pour les menus déroulants)
  const isInSection = (items: { href: string }[]) => {
    return items.some((item) => pathname.startsWith(item.href));
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-primary shadow-lg"
          : "bg-primary"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Image
                src="/images/logo/logo_fond_transparent.png"
                alt="UPJUNOO PRO"
                width={1000}
                height={400}
                className="h-[168px] sm:h-64 lg:h-56 w-auto brightness-0 invert drop-shadow-md"
                priority
                unoptimized
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <NavigationMenu>
              <NavigationMenuList>
                {/* Accueil */}
                <NavigationMenuItem>
                  <Link
                    href="/"
                    className={`group inline-flex h-10 w-max items-center justify-center rounded-lg px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10 ${
                      isActive("/") ? "bg-primary-foreground/10" : ""
                    }`}
                  >
                    {t("nav.home")}
                  </Link>
                </NavigationMenuItem>

                {/* Services */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={`bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground data-[state=open]:bg-primary-foreground/10 ${
                      isInSection(services) ? "bg-primary-foreground/10" : ""
                    }`}
                  >
                    {t("nav.services")}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                      {services.map((service) => (
                        <li key={service.key}>
                          <Link
                            href={service.href}
                            className="block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="flex items-center gap-2">
                              <service.icon className="h-4 w-4 text-primary" />
                              <div className="text-sm font-medium leading-none">
                                {t(`services.${service.key}.title`)}
                              </div>
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                              {t(`services.${service.key}.description`)}
                            </p>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Offres Partenaires */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={`bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground data-[state=open]:bg-primary-foreground/10 ${
                      isInSection(offresPartenaires) ? "bg-primary-foreground/10" : ""
                    }`}
                  >
                    {t("nav.partnerOffers")}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      {offresPartenaires.map((offre) => (
                        <li key={offre.key}>
                          <Link
                            href={offre.href}
                            className="block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="flex items-center gap-2">
                              <offre.icon className="h-4 w-4 text-primary" />
                              <div className="text-sm font-medium leading-none">
                                {t(`partnerOffers.${offre.key}.title`)}
                              </div>
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                              {t(`partnerOffers.${offre.key}.description`)}
                            </p>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Nos Implantations */}
                <NavigationMenuItem>
                  <Link
                    href="/nos-implantations"
                    className={`group inline-flex h-10 w-max items-center justify-center rounded-lg px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10 ${
                      isActive("/nos-implantations") ? "bg-primary-foreground/10" : ""
                    }`}
                  >
                    {t("nav.locations")}
                  </Link>
                </NavigationMenuItem>

                {/* Actualités */}
                <NavigationMenuItem>
                  <Link
                    href="/actualites"
                    className={`group inline-flex h-10 w-max items-center justify-center rounded-lg px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10 ${
                      isActive("/actualites") ? "bg-primary-foreground/10" : ""
                    }`}
                  >
                    {t("nav.news")}
                  </Link>
                </NavigationMenuItem>

                {/* Contact */}
                <NavigationMenuItem>
                  <Link
                    href="/contact"
                    className={`group inline-flex h-10 w-max items-center justify-center rounded-lg px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10 ${
                      isActive("/contact") ? "bg-primary-foreground/10" : ""
                    }`}
                  >
                    {t("nav.contact")}
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* CTA Button + Language Switcher */}
          <div className="hidden lg:flex items-center gap-3">
            <LanguageSwitcher />
            <Button asChild variant="secondary" className="bg-white text-primary hover:bg-white/90 font-semibold">
              <Link href="/#download" className="gap-2">
                <Download className="h-4 w-4" />
                {t("common.download")}
              </Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="h-10 w-10 text-primary-foreground hover:bg-primary-foreground/10">
                <Menu className="h-6 w-6" />
                <span className="sr-only">{t("common.menu")}</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full sm:w-[320px] p-0"
              hideCloseButton
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b">
                  <SheetTitle>
                    <Image
                      src="/images/logo/logo_fond_transparent.png"
                      alt="UPJUNOO PRO"
                      width={120}
                      height={45}
                      className="h-8 w-auto"
                      unoptimized
                    />
                  </SheetTitle>
                  <SheetClose asChild>
                    <Button variant="ghost" size="icon" className="h-10 w-10">
                      <X className="h-6 w-6" />
                      <span className="sr-only">{t("common.close")}</span>
                    </Button>
                  </SheetClose>
                </div>

                <nav className="flex-1 overflow-auto py-4">
                  <div className="px-4 space-y-1">
                    {/* Accueil */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0 }}
                    >
                      <SheetClose asChild>
                        <Link
                          href="/"
                          className={`flex items-center py-3 px-3 rounded-lg text-base font-medium hover:bg-accent transition-colors ${
                            isActive("/") ? "bg-accent" : ""
                          }`}
                        >
                          {t("nav.home")}
                        </Link>
                      </SheetClose>
                    </motion.div>

                    {/* Services */}
                    <div className="pt-4 pb-2">
                      <p className="px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        {t("nav.services")}
                      </p>
                    </div>

                    {services.map((service, index) => (
                      <motion.div
                        key={service.key}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: (1 + index) * 0.05 }}
                      >
                        <SheetClose asChild>
                          <Link
                            href={service.href}
                            className={`flex items-center gap-3 py-3 px-3 rounded-lg hover:bg-accent transition-colors ${
                              isActive(service.href) ? "bg-accent" : ""
                            }`}
                          >
                            <service.icon className="h-5 w-5 text-primary flex-shrink-0" />
                            <div className="min-w-0">
                              <div className="text-base font-medium">
                                {t(`services.${service.key}.title`)}
                              </div>
                              <div className="text-sm text-muted-foreground truncate">
                                {t(`services.${service.key}.description`)}
                              </div>
                            </div>
                          </Link>
                        </SheetClose>
                      </motion.div>
                    ))}

                    {/* Offres Partenaires */}
                    <div className="pt-4 pb-2">
                      <p className="px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        {t("nav.partnerOffers")}
                      </p>
                    </div>

                    {offresPartenaires.map((offre, index) => (
                      <motion.div
                        key={offre.key}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: (1 + services.length + index) * 0.05 }}
                      >
                        <SheetClose asChild>
                          <Link
                            href={offre.href}
                            className={`flex items-center gap-3 py-3 px-3 rounded-lg hover:bg-accent transition-colors ${
                              isActive(offre.href) ? "bg-accent" : ""
                            }`}
                          >
                            <offre.icon className="h-5 w-5 text-primary flex-shrink-0" />
                            <div className="min-w-0">
                              <div className="text-base font-medium">
                                {t(`partnerOffers.${offre.key}.title`)}
                              </div>
                              <div className="text-sm text-muted-foreground truncate">
                                {t(`partnerOffers.${offre.key}.description`)}
                              </div>
                            </div>
                          </Link>
                        </SheetClose>
                      </motion.div>
                    ))}

                    {/* Autres liens */}
                    <div className="pt-4 pb-2">
                      <p className="px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        {t("nav.navigation")}
                      </p>
                    </div>

                    {[
                      { key: "locations", href: "/nos-implantations" },
                      { key: "news", href: "/actualites" },
                      { key: "contact", href: "/contact" },
                    ].map((link, index) => (
                      <motion.div
                        key={link.key}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: (1 + services.length + offresPartenaires.length + index) * 0.05 }}
                      >
                        <SheetClose asChild>
                          <Link
                            href={link.href}
                            className={`flex items-center py-3 px-3 rounded-lg text-base font-medium hover:bg-accent transition-colors ${
                              isActive(link.href) ? "bg-accent" : ""
                            }`}
                          >
                            {t(`nav.${link.key}`)}
                          </Link>
                        </SheetClose>
                      </motion.div>
                    ))}

                    {/* Language Switcher Mobile */}
                    <div className="pt-4 pb-2">
                      <p className="px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        {t("languageSwitcher.label")}
                      </p>
                    </div>
                    <div className="px-3">
                      <LanguageSwitcher variant="mobile" />
                    </div>
                  </div>
                </nav>

                <div className="p-4 border-t mt-auto">
                  <SheetClose asChild>
                    <Button asChild className="w-full gap-2">
                      <Link href="/#download">
                        <Download className="h-4 w-4" />
                        {t("common.downloadApp")}
                      </Link>
                    </Button>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
