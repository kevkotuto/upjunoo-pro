import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleContent } from "./article-content";
import { getArticleBySlug, getArticleById } from "@/data/articles";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  // Try to find article by slug first, then by id (for backward compatibility)
  let article = getArticleBySlug(slug);

  // If not found by slug, try parsing as id for backward compatibility with old URLs
  if (!article) {
    const id = parseInt(slug, 10);
    if (!isNaN(id)) {
      article = getArticleById(id);
    }
  }

  if (!article) {
    return {
      title: "Article non trouve",
    };
  }

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const t = await getTranslations("article");

  // Try to find article by slug first, then by id (for backward compatibility)
  let article = getArticleBySlug(slug);

  // If not found by slug, try parsing as id for backward compatibility with old URLs
  if (!article) {
    const id = parseInt(slug, 10);
    if (!isNaN(id)) {
      article = getArticleById(id);
    }
  }

  if (!article) {
    notFound();
  }

  const translations = {
    backToNews: t("backToNews"),
    readTime: t("readTime"),
    sharePrompt: t("sharePrompt"),
    shareButton: t("shareButton"),
    linkCopied: t("linkCopied"),
    relatedBadge: t("relatedBadge"),
    relatedTitle: t("relatedTitle"),
    cta: {
      title: t("cta.title"),
      description: t("cta.description"),
      button: t("cta.button"),
    },
  };

  return <ArticleContent article={article} translations={translations} />;
}
