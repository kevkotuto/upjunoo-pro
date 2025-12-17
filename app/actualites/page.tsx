"use client";

import { motion } from "motion/react";
import { Calendar, ArrowRight, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
            <h2 className="text-2xl font-bold">A la une</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {featuredArticles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/actualites/${article.id}`} className="block group">
                  <Card className="h-full overflow-hidden hover:shadow-xl transition-all border-border/50 hover:border-primary/30">
                    <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                      <motion.span
                        whileHover={{ scale: 1.1 }}
                        className="text-6xl"
                      >
                        {article.image}
                      </motion.span>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <Badge variant="secondary">{article.category}</Badge>
                        <span className="text-sm text-muted-foreground flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {article.date}
                        </span>
                      </div>
                      <h3 className="font-semibold text-xl mb-2 group-hover:text-primary transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {article.readTime} de lecture
                        </span>
                        <span className="text-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                          Lire
                          <ArrowRight className="h-4 w-4" />
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-12"
          >
            <h2 className="text-2xl font-bold">Tous les articles</h2>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    cat === "Tous"
                      ? "bg-primary text-primary-foreground"
                      : "bg-card hover:bg-accent"
                  }`}
                >
                  {cat}
                </button>
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
                  <Card className="h-full overflow-hidden hover:shadow-lg transition-all border-border/50">
                    <div className="h-32 bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                      <span className="text-4xl">{article.image}</span>
                    </div>
                    <CardContent className="p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="text-xs">
                          {article.category}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          {article.date}
                        </span>
                      </div>
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-4">
              Ne manquez aucune actualite
            </h2>
            <p className="text-muted-foreground mb-8">
              Inscrivez-vous a notre newsletter pour recevoir les dernieres
              nouvelles directement dans votre boite mail.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 h-12 px-4 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="h-12 px-6 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">
                S'inscrire
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
