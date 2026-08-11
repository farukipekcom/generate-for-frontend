export interface ParsedOpenGraph {
  title?: string;
  description?: string;
  url?: string;
  type?: string;
  siteName?: string;
  locale?: string;
  image?: string;
  imageAlt?: string;
  imageWidth?: string;
  imageHeight?: string;
}
export interface ParsedTwitter {
  card?: string;
  title?: string;
  site?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
}
export interface ParsedIcons {
  favicon32?: string;
  favicon16?: string;
  appleTouchIcon?: string;
  manifest?: string;
}
export interface ParsedArticleJsonLd {
  headline?: string;
  description?: string;
  image?: string;
  url?: string;
  datePublished?: string;
  dateModified?: string;
  authorName?: string;
  authorUrl?: string;
}
export interface ParsedPageMeta {
  url: string;
  title?: string;
  description?: string;
  keywords?: string;
  author?: string;
  canonical?: string;
  referrer?: string;
  robots?: string;
  googlebot?: string;
  charset?: string;
  viewport?: boolean;
  formatDetection?: boolean;
  googleVerification?: string;
  bingVerification?: string;
  openGraph?: ParsedOpenGraph;
  twitter?: ParsedTwitter;
  icons?: ParsedIcons;
  article?: ParsedArticleJsonLd;
  robotsDirectives?: string[];
}
