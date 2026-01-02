"use client";

import { motion } from "motion/react";
import { Calendar, Clock, ArrowLeft, Share2, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PageHero } from "@/components/sections/page-hero";
import Link from "next/link";
import { articles, type Article } from "@/data/articles";

type ArticleTranslations = {
  backToNews: string;
  readTime: string;
  sharePrompt: string;
  shareButton: string;
  linkCopied: string;
  relatedBadge: string;
  relatedTitle: string;
  cta: {
    title: string;
    description: string;
    button: string;
  };
};

// Simple markdown to HTML converter
function formatMarkdown(markdown: string): string {
  const lines = markdown.trim().split('\n');
  let html = '';
  let inList = false;
  let inParagraph = false;

  for (const line of lines) {
    const trimmedLine = line.trim();

    if (!trimmedLine) {
      if (inParagraph) {
        html += '</p>';
        inParagraph = false;
      }
      if (inList) {
        html += '</ul>';
        inList = false;
      }
      continue;
    }

    // Headers
    if (trimmedLine.startsWith('### ')) {
      if (inParagraph) { html += '</p>'; inParagraph = false; }
      if (inList) { html += '</ul>'; inList = false; }
      html += `<h3>${trimmedLine.slice(4)}</h3>`;
      continue;
    }
    if (trimmedLine.startsWith('## ')) {
      if (inParagraph) { html += '</p>'; inParagraph = false; }
      if (inList) { html += '</ul>'; inList = false; }
      html += `<h2>${trimmedLine.slice(3)}</h2>`;
      continue;
    }

    // List items
    if (trimmedLine.startsWith('- ')) {
      if (inParagraph) { html += '</p>'; inParagraph = false; }
      if (!inList) {
        html += '<ul>';
        inList = true;
      }
      const itemContent = trimmedLine.slice(2)
        .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
        .replace(/\*([^*]+)\*/g, '<em>$1</em>');
      html += `<li>${itemContent}</li>`;
      continue;
    }

    // Regular paragraph
    if (inList) { html += '</ul>'; inList = false; }
    const processedLine = trimmedLine
      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
      .replace(/\*([^*]+)\*/g, '<em>$1</em>');

    if (!inParagraph) {
      html += '<p>';
      inParagraph = true;
    } else {
      html += ' ';
    }
    html += processedLine;
  }

  if (inParagraph) html += '</p>';
  if (inList) html += '</ul>';

  return html;
}

export function ArticleContent({
  article,
  translations: t,
}: {
  article: Article;
  translations: ArticleTranslations;
}) {
  // Get related articles (same category, excluding current)
  const relatedArticles = articles
    .filter((a) => a.category === article.category && a.id !== article.id)
    .slice(0, 3);

  return (
    <>
      <PageHero
        badge={article.category}
        title={article.title}
        highlight=""
        description={article.excerpt}
        backgroundImage="/images/banniere/voiture-brander-upjunoo-16-9.png"
      />

      <article className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link href="/actualites">
              <Button variant="ghost" className="gap-2 pl-0 hover:pl-2 transition-all">
                <ArrowLeft className="h-4 w-4" />
                {t.backToNews}
              </Button>
            </Link>
          </motion.div>

          {/* Article header */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-12"
          >
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <Badge className="bg-gradient-to-r from-primary to-primary/80 text-white border-0">
                {article.category}
              </Badge>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {article.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {article.readTime} {t.readTime}
                </span>
              </div>
            </div>

            {/* Featured image/emoji */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="w-full h-64 sm:h-80 rounded-3xl bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 flex items-center justify-center mb-8"
            >
              <span className="text-9xl">{article.image}</span>
            </motion.div>
          </motion.header>

          {/* Article content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-foreground prose-p:text-muted-foreground prose-p:leading-relaxed prose-li:text-muted-foreground prose-strong:text-foreground prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: formatMarkdown(article.content) }}
          />

          {/* Share section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-12 pt-8 border-t"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <p className="text-muted-foreground">
                {t.sharePrompt}
              </p>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2"
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: article.title,
                        text: article.excerpt,
                        url: window.location.href,
                      });
                    } else {
                      navigator.clipboard.writeText(window.location.href);
                      alert(t.linkCopied);
                    }
                  }}
                >
                  <Share2 className="h-4 w-4" />
                  {t.shareButton}
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </article>

      {/* Related articles */}
      {relatedArticles.length > 0 && (
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="h-5 w-5 text-primary" />
                <span className="text-primary font-semibold">{t.relatedBadge}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold">
                {t.relatedTitle}
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedArticles.map((relatedArticle, index) => (
                <motion.article
                  key={relatedArticle.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={`/actualites/${relatedArticle.slug}`}
                    className="block group"
                  >
                    <div className="bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-300 h-full">
                      <div className="h-40 bg-gradient-to-br from-muted via-muted/50 to-muted/30 flex items-center justify-center">
                        <motion.span
                          whileHover={{ scale: 1.2, rotate: 10 }}
                          className="text-5xl"
                        >
                          {relatedArticle.image}
                        </motion.span>
                      </div>
                      <div className="p-5">
                        <div className="flex items-center gap-2 mb-3">
                          <Badge variant="outline" className="text-xs">
                            {relatedArticle.category}
                          </Badge>
                          <span className="text-xs text-muted-foreground">
                            {relatedArticle.date}
                          </span>
                        </div>
                        <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                          {relatedArticle.title}
                        </h3>
                        <p className="text-muted-foreground text-sm line-clamp-2">
                          {relatedArticle.excerpt}
                        </p>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              {t.cta.title}
            </h2>
            <p className="text-muted-foreground mb-8">
              {t.cta.description}
            </p>
            <Link href="/actualites">
              <Button size="lg" className="gap-2">
                {t.cta.button}
                <ArrowLeft className="h-4 w-4 rotate-180" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
