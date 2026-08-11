// The structured form every generator produces. Serializers in ./formats turn
// this into HTML, a Next.js metadata object, or Nuxt composable calls, so the
// generators never build framework-specific strings themselves.
export interface SeoIcons {
  favicon32?: string;
  favicon16?: string;
  appleTouchIcon?: string;
  manifest?: string;
}
export interface SeoOpenGraph {
  title?: string;
  type?: string;
  url?: string;
  description?: string;
  siteName?: string;
  locale?: string;
  image?: string;
  imageAlt?: string;
  imageWidth?: string;
  imageHeight?: string;
}
export interface SeoTwitterApp {
  name?: string;
  iphone?: string;
  ipad?: string;
  googleplay?: string;
  country?: string;
}
export interface SeoTwitter {
  card?: string;
  title?: string;
  site?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  player?: string;
  playerWidth?: string;
  playerHeight?: string;
  app?: SeoTwitterApp;
}
export interface SeoDocument {
  charset?: string;
  viewport?: boolean;
  title?: string;
  description?: string;
  keywords?: string;
  author?: string;
  canonical?: string;
  referrer?: string;
  formatDetection?: boolean;
  robots?: string;
  googlebot?: string;
  googleVerification?: string;
  bingVerification?: string;
  icons?: SeoIcons;
  openGraph?: SeoOpenGraph;
  twitter?: SeoTwitter;
}
