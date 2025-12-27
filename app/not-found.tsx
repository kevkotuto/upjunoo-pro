"use client";

import { motion } from "motion/react";
import { Home, ArrowLeft, Search, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="max-w-xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-8xl sm:text-9xl font-bold text-primary/20"
            >
              404
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                <MapPin className="h-10 w-10 text-primary" />
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-2xl sm:text-3xl font-bold mb-4">
            Page introuvable
          </h1>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Cette page n'existe pas ou a ete deplacee.
            Pas de panique, UPJUNOO PRO vous ramene a bon port !
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="gap-2">
              <Link href="/">
                <Home className="h-5 w-5" />
                Retour a l'accueil
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2">
              <Link href="/contact">
                <Search className="h-5 w-5" />
                Nous contacter
              </Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12"
        >
          <p className="text-sm text-muted-foreground mb-4">
            Pages populaires :
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { label: "Passager", href: "/passager" },
              { label: "Livraison", href: "/livraison" },
              { label: "Devenir chauffeur", href: "/devenir-chauffeur" },
              { label: "Franchises", href: "/offres-partenaires/franchises" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-sm rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
