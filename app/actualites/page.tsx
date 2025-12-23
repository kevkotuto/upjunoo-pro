"use client";

import { motion } from "motion/react";
import { Calendar, ArrowRight, Clock, Mail, Newspaper } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/sections/page-hero";
import Link from "next/link";

const articles = [
  {
    id: 1,
    title: "Nouvelle franchise a Bouake",
    excerpt:
      "Une nouvelle agence vient d'ouvrir ses portes a Bouake, renforcant notre presence nationale en Cote d'Ivoire.",
    category: "Expansion",
    date: "15 Dec 2024",
    readTime: "3 min",
    image: "🏢",
    featured: true,
  },
  {
    id: 2,
    title: "Application amelioree pour les franchises",
    excerpt:
      "Decouvrez le nouveau dashboard avec suivi des performances en temps reel, concu grace aux retours de nos partenaires.",
    category: "Produit",
    date: "10 Dec 2024",
    readTime: "4 min",
    image: "📱",
    featured: true,
  },
  {
    id: 3,
    title: "UPJUNOO au Salon de l'Innovation Urbaine",
    excerpt:
      "Notre participation au Salon de l'Innovation Urbaine Africaine a Abidjan nous a permis d'echanger avec les acteurs majeurs de la smart city.",
    category: "Evenement",
    date: "5 Dec 2024",
    readTime: "5 min",
    image: "🎪",
    featured: false,
  },
  {
    id: 4,
    title: "Repenser la mobilite urbaine en Afrique",
    excerpt:
      "Les grandes villes africaines font face a une urbanisation rapide. Comment les nouvelles technologies transforment les transports.",
    category: "Analyse",
    date: "28 Nov 2024",
    readTime: "7 min",
    image: "🌍",
    featured: false,
  },
  {
    id: 5,
    title: "Partenariat avec Orange Money",
    excerpt:
      "UPJUNOO s'associe a Orange Money pour faciliter les paiements mobiles dans toute la region.",
    category: "Partenariat",
    date: "20 Nov 2024",
    readTime: "3 min",
    image: "🤝",
    featured: false,
  },
  {
    id: 6,
    title: "Lancement du service livraison express",
    excerpt:
      "Notre nouveau service de livraison express permet d'envoyer vos colis en moins d'une heure dans les grandes villes.",
    category: "Produit",
    date: "15 Nov 2024",
    readTime: "4 min",
    image: "📦",
    featured: false,
  },
];

const categories = [
  "Tous",
  "Expansion",
  "Produit",
  "Evenement",
  "Partenariat",
  "Analyse",
];

export default function ActualitesPage() {
  const featuredArticles = articles.filter((a) => a.featured);
  const otherArticles = articles.filter((a) => !a.featured);

  return (
    <>
      <PageHero
        badge="Blog"
        title="Actualites"
        highlight="UPJUNOO"
        description="Suivez notre actualite, nos nouveautes produit et notre expansion a travers l'Afrique."
      />

      {/* Featured Articles */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              A la une
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold">Articles en vedette</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredArticles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/actualites/${article.id}`} className="block group">
                  <Card className="h-full overflow-hidden hover:border-primary/30 transition-all duration-300 border-border/50">
                    <div className="h-56 bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 flex items-center justify-center relative overflow-hidden">
                      <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <span className="text-7xl">{article.image}</span>
                      </motion.div>
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-gradient-to-r from-primary to-primary/80 text-white border-0">
                          {article.category}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {article.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {article.readTime} de lecture
                        </span>
                      </div>
                      <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {article.excerpt}
                      </p>
                      <span className="text-primary text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                        Lire l'article
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold">Tous les articles</h2>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <motion.button
                  key={cat}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    cat === "Tous"
                      ? "bg-gradient-to-r from-primary to-primary/80 text-white"
                      : "bg-card hover:bg-primary/10 border border-border/50"
                  }`}
                >
                  {cat}
                </motion.button>
              ))}
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherArticles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/actualites/${article.id}`} className="block group">
                  <Card className="h-full overflow-hidden hover:border-primary/30 transition-all duration-300 border-border/50">
                    <div className="h-40 bg-gradient-to-br from-muted via-muted/50 to-muted/30 flex items-center justify-center">
                      <motion.span
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        className="text-5xl"
                      >
                        {article.image}
                      </motion.span>
                    </div>
                    <CardContent className="p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="outline" className="text-xs">
                          {article.category}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          {article.date}
                        </span>
                      </div>
                      <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-muted-foreground text-sm line-clamp-2">
                        {article.excerpt}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl bg-gradient-to-br from-primary via-primary to-[#046d7a] p-8 lg:p-16 text-center overflow-hidden"
          >
            {/* Background decorations */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                className="absolute -top-1/2 -right-1/2 w-full h-full border border-white/10 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-1/2 -left-1/2 w-full h-full border border-white/10 rounded-full"
              />
            </div>

            <div className="relative">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring" }}
                className="w-20 h-20 rounded-full bg-yellow-400 flex items-center justify-center mx-auto mb-6"
              >
                <Newspaper className="h-10 w-10 text-gray-900" />
              </motion.div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                Ne manquez aucune actualite
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
                Inscrivez-vous a notre newsletter pour recevoir les dernieres
                nouvelles directement dans votre boite mail.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="flex-1 h-14 px-5 rounded-xl border-0 bg-white/10 backdrop-blur-sm text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <Button
                  size="lg"
                  className="h-14 px-8 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  S'inscrire
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
