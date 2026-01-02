"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Calendar, ArrowRight, Clock, Mail, Newspaper, Loader2, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/sections/page-hero";
import Link from "next/link";
import { articles, categories } from "@/data/articles";

type ActualitesTranslations = {
  hero: {
    badge: string;
    title: string;
    highlight: string;
    description: string;
  };
  featured: {
    badge: string;
    title: string;
    readTime: string;
    readArticle: string;
  };
  all: {
    title: string;
    categoryAll: string;
  };
  newsletter: {
    title: string;
    description: string;
    placeholder: string;
    subscribe: string;
    success: string;
  };
};

export function ActualitesContent({
  translations: t,
}: {
  translations: ActualitesTranslations;
}) {
  const [selectedCategory, setSelectedCategory] = useState(t.all.categoryAll);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const featuredArticles = articles.filter((a) => a.featured);
  const otherArticles = articles.filter((a) => !a.featured);

  const filteredArticles = selectedCategory === t.all.categoryAll
    ? otherArticles
    : otherArticles.filter((a) => a.category === selectedCategory);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;

    setNewsletterStatus("loading");
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "newsletter", email: newsletterEmail }),
      });

      if (!response.ok) throw new Error("Erreur");
      setNewsletterStatus("success");
      setNewsletterEmail("");
      setTimeout(() => setNewsletterStatus("idle"), 3000);
    } catch {
      setNewsletterStatus("error");
      setTimeout(() => setNewsletterStatus("idle"), 3000);
    }
  };

  // Build categories list with translated "All" option
  const translatedCategories = [t.all.categoryAll, ...categories.filter(c => c !== "Tous")];

  return (
    <>
      <PageHero
        badge={t.hero.badge}
        title={t.hero.title}
        highlight={t.hero.highlight}
        description={t.hero.description}
        backgroundImage="/images/banniere/voiture-brander-upjunoo-16-9.png"
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
              {t.featured.badge}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold">{t.featured.title}</h2>
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
                <Link href={`/actualites/${article.slug}`} className="block group">
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
                          {article.readTime} {t.featured.readTime}
                        </span>
                      </div>
                      <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {article.excerpt}
                      </p>
                      <span className="text-primary text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                        {t.featured.readArticle}
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
            <h2 className="text-2xl sm:text-3xl font-bold">{t.all.title}</h2>
            <div className="flex flex-wrap gap-2">
              {translatedCategories.map((cat) => (
                <motion.button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    cat === selectedCategory
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
            {filteredArticles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/actualites/${article.slug}`} className="block group">
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
                {t.newsletter.title}
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
                {t.newsletter.description}
              </p>
              {newsletterStatus === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center justify-center gap-3 text-white"
                >
                  <CheckCircle className="h-6 w-6 text-yellow-400" />
                  <span className="font-medium">{t.newsletter.success}</span>
                </motion.div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder={t.newsletter.placeholder}
                    required
                    disabled={newsletterStatus === "loading"}
                    className="flex-1 h-14 px-5 rounded-xl border-0 bg-white/10 backdrop-blur-sm text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-400 disabled:opacity-50"
                  />
                  <Button
                    type="submit"
                    size="lg"
                    disabled={newsletterStatus === "loading"}
                    className="h-14 px-8 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold disabled:opacity-50"
                  >
                    {newsletterStatus === "loading" ? (
                      <Loader2 className="h-5 w-5 animate-spin" />
                    ) : (
                      <>
                        <Mail className="h-5 w-5 mr-2" />
                        {t.newsletter.subscribe}
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
