"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
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

const services = [
  {
    title: "Passager",
    href: "/passager",
    description: "Commandez un taxi en quelques clics",
    icon: Car,
  },
  {
    title: "Livraison",
    href: "/livraison",
    description: "Envoyez et recevez vos colis",
    icon: Package,
  },
  {
    title: "Location",
    href: "/location",
    description: "Louez un vehicule en toute liberte",
    icon: CarFront,
  },
  {
    title: "Chauffeurs",
    href: "/devenir-chauffeur",
    description: "Rejoignez notre equipe",
    icon: Users,
  },
];

const offresPartenaires = [
  {
    title: "Franchises",
    href: "/offres-partenaires/franchises",
    description: "Lancez UPJUNOO PRO dans votre region",
    icon: Store,
  },
  {
    title: "Partenaires",
    href: "/offres-partenaires/partenaires",
    description: "Devenez partenaire commercial",
    icon: Handshake,
  },
  {
    title: "Chauffeurs",
    href: "/offres-partenaires/chauffeurs",
    description: "Rejoignez notre equipe de chauffeurs",
    icon: UserCheck,
  },
];

const navLinks = [
  { title: "Accueil", href: "/" },
  { title: "Nos Implantations", href: "/nos-implantations" },
  { title: "Actualites", href: "/actualites" },
  { title: "Contact", href: "/contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-b border-border/50"
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
                width={400}
                height={150}
                className="h-14 sm:h-20 lg:h-24 w-auto"
                priority
                unoptimized
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link
                    href="/"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    Accueil
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent">
                    Nos Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                      {services.map((service) => (
                        <li key={service.title}>
                          <Link
                            href={service.href}
                            className="block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="flex items-center gap-2">
                              <service.icon className="h-4 w-4 text-primary" />
                              <div className="text-sm font-medium leading-none">
                                {service.title}
                              </div>
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                              {service.description}
                            </p>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {navLinks.slice(1).map((link) => (
                  <NavigationMenuItem key={link.title}>
                    <Link
                      href={link.href}
                      className="group inline-flex h-10 w-max items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      {link.title}
                    </Link>
                  </NavigationMenuItem>
                ))}

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent">
                    Offres Partenaires
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      {offresPartenaires.map((offre) => (
                        <li key={offre.title}>
                          <Link
                            href={offre.href}
                            className="block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="flex items-center gap-2">
                              <offre.icon className="h-4 w-4 text-primary" />
                              <div className="text-sm font-medium leading-none">
                                {offre.title}
                              </div>
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                              {offre.description}
                            </p>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Button asChild>
              <Link href="/#download" className="gap-2">
                <Download className="h-4 w-4" />
                Telecharger
              </Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="h-10 w-10">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Menu</span>
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
                      <span className="sr-only">Fermer</span>
                    </Button>
                  </SheetClose>
                </div>

                <nav className="flex-1 overflow-auto py-4">
                  <div className="px-4 space-y-1">
                    {navLinks.map((link, index) => (
                      <motion.div
                        key={link.title}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <SheetClose asChild>
                          <Link
                            href={link.href}
                            className="flex items-center py-3 px-3 rounded-lg text-base font-medium hover:bg-accent transition-colors"
                          >
                            {link.title}
                          </Link>
                        </SheetClose>
                      </motion.div>
                    ))}

                    <div className="pt-4 pb-2">
                      <p className="px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        Services
                      </p>
                    </div>

                    {services.map((service, index) => (
                      <motion.div
                        key={service.title}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: (navLinks.length + index) * 0.05 }}
                      >
                        <SheetClose asChild>
                          <Link
                            href={service.href}
                            className="flex items-center gap-3 py-3 px-3 rounded-lg hover:bg-accent transition-colors"
                          >
                            <service.icon className="h-5 w-5 text-primary flex-shrink-0" />
                            <div className="min-w-0">
                              <div className="text-base font-medium">
                                {service.title}
                              </div>
                              <div className="text-sm text-muted-foreground truncate">
                                {service.description}
                              </div>
                            </div>
                          </Link>
                        </SheetClose>
                      </motion.div>
                    ))}

                    <div className="pt-4 pb-2">
                      <p className="px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        Offres Partenaires
                      </p>
                    </div>

                    {offresPartenaires.map((offre, index) => (
                      <motion.div
                        key={offre.title}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: (navLinks.length + services.length + index) * 0.05 }}
                      >
                        <SheetClose asChild>
                          <Link
                            href={offre.href}
                            className="flex items-center gap-3 py-3 px-3 rounded-lg hover:bg-accent transition-colors"
                          >
                            <offre.icon className="h-5 w-5 text-primary flex-shrink-0" />
                            <div className="min-w-0">
                              <div className="text-base font-medium">
                                {offre.title}
                              </div>
                              <div className="text-sm text-muted-foreground truncate">
                                {offre.description}
                              </div>
                            </div>
                          </Link>
                        </SheetClose>
                      </motion.div>
                    ))}
                  </div>
                </nav>

                <div className="p-4 border-t mt-auto">
                  <SheetClose asChild>
                    <Button asChild className="w-full gap-2">
                      <Link href="/#download">
                        <Download className="h-4 w-4" />
                        Telecharger l'application
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
