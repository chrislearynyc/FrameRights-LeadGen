import { Metadata } from "next";

interface ResourceMetadataProps {
  title: string;
  description: string;
  path: string;
}

export function generateResourceMetadata({
  title,
  description,
  path,
}: ResourceMetadataProps): Metadata {
  const url = `https://framerights.com${path}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: "FrameRights",
      locale: "en_US",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: url,
    },
  };
}

interface ArticleSchemaProps {
  headline: string;
  description: string;
  url: string;
}

export function generateArticleSchema({
  headline,
  description,
  url,
}: ArticleSchemaProps) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    author: {
      "@type": "Organization",
      name: "FrameRights",
    },
    publisher: {
      "@type": "Organization",
      name: "FrameRights",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };
}
