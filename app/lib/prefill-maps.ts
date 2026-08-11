import charset from "../json/charset.json";
import robots from "../json/robots.json";
import referrer from "../json/referrer.json";
import imagePreview from "../json/imagePreview.json";
import ogType from "../json/ogType.json";
import ogLocale from "../json/ogLocale.json";
import type { ParsedPageMeta } from "./parsed-meta";
function pickOption(value: string | undefined, options: string[], fallback: string) {
  if (!value) return fallback;
  return options.includes(value) ? value : fallback;
}
function pickRobots(value: string | undefined) {
  if (!value) return robots[0];
  const normalized = value.toLowerCase();
  const exact = robots.find((option) => option.toLowerCase() === normalized);
  if (exact) return exact;
  const hasNoindex = normalized.includes("noindex");
  const hasNofollow = normalized.includes("nofollow");
  if (hasNoindex && hasNofollow) return "noindex, nofollow";
  if (hasNoindex) return "noindex, follow";
  if (hasNofollow) return "index, nofollow";
  return robots[0];
}
export function createMetaTagFormDefaults() {
  return {
    title: "",
    description: "",
    keywords: "",
    author: "",
    canonical: "",
    og_title: "",
    og_description: "",
    og_url: "",
    og_type: ogType[0],
    og_site_name: "",
    og_locale: ogLocale[0],
    og_image: "",
    og_image_alt: "",
    og_image_width: "",
    og_image_height: "",
    charset: charset[0],
    viewport: true,
    referrer: referrer[0],
    format_detection: false,
    robots: robots[0],
    max_image_preview: imagePreview[0],
    max_snippet: "",
    noarchive: false,
    nosnippet: false,
    notranslate: false,
    noimageindex: false,
    googlebot: false,
    google_verification: "",
    bing_verification: "",
    favicon_32: "",
    favicon_16: "",
    apple_touch_icon: "",
    manifest: "",
  };
}
export type MetaTagForm = ReturnType<typeof createMetaTagFormDefaults>;
export function mapParsedToMetaForm(parsed: ParsedPageMeta): MetaTagForm {
  const og = parsed.openGraph ?? {};
  const icons = parsed.icons ?? {};
  const directives = parsed.robotsDirectives ?? [];
  const ogTitle =
    og.title && og.title !== parsed.title ? og.title : "";
  const ogDescription =
    og.description && og.description !== parsed.description
      ? og.description
      : "";
  const ogUrl =
    og.url && og.url !== parsed.canonical ? og.url : "";
  return {
    ...createMetaTagFormDefaults(),
    title: parsed.title ?? "",
    description: parsed.description ?? "",
    keywords: parsed.keywords ?? "",
    author: parsed.author ?? "",
    canonical: parsed.canonical ?? parsed.url,
    og_title: ogTitle,
    og_description: ogDescription,
    og_url: ogUrl,
    og_type: pickOption(og.type, ogType, ogType[0]),
    og_site_name: og.siteName ?? "",
    og_locale: pickOption(og.locale, ogLocale, ogLocale[0]),
    og_image: og.image ?? parsed.twitter?.image ?? "",
    og_image_alt: og.imageAlt ?? parsed.twitter?.imageAlt ?? "",
    og_image_width: og.imageWidth ?? "",
    og_image_height: og.imageHeight ?? "",
    charset: pickOption(parsed.charset, charset, charset[0]),
    viewport: parsed.viewport ?? true,
    referrer: pickOption(parsed.referrer, referrer, referrer[0]),
    format_detection: parsed.formatDetection ?? false,
    robots: pickRobots(parsed.robots),
    max_image_preview: imagePreview[0],
    max_snippet: "",
    noarchive: directives.includes("noarchive"),
    nosnippet: directives.includes("nosnippet"),
    notranslate: directives.includes("notranslate"),
    noimageindex: directives.includes("noimageindex"),
    googlebot: Boolean(parsed.googlebot),
    google_verification: parsed.googleVerification ?? "",
    bing_verification: parsed.bingVerification ?? "",
    favicon_32: icons.favicon32 ?? "",
    favicon_16: icons.favicon16 ?? "",
    apple_touch_icon: icons.appleTouchIcon ?? "",
    manifest: icons.manifest ?? "",
  };
}
export function mapParsedToTwitterForm(parsed: ParsedPageMeta) {
  const twitter = parsed.twitter ?? {};
  const og = parsed.openGraph ?? {};
  return {
    title: parsed.title ?? twitter.title ?? og.title ?? "",
    site: twitter.site ?? "",
    description: parsed.description ?? twitter.description ?? og.description ?? "",
    image_url: twitter.image ?? og.image ?? "",
    image_alt_text: twitter.imageAlt ?? og.imageAlt ?? "",
  };
}
export function mapParsedToArticleForm(parsed: ParsedPageMeta) {
  const article = parsed.article ?? {};
  const og = parsed.openGraph ?? {};
  return {
    headline: article.headline ?? parsed.title ?? og.title ?? "",
    description: article.description ?? parsed.description ?? og.description ?? "",
    image: article.image ?? og.image ?? parsed.twitter?.image ?? "",
    url: article.url ?? parsed.canonical ?? parsed.url,
    datePublished: article.datePublished ?? "",
    dateModified: article.dateModified ?? "",
    authorName: article.authorName ?? parsed.author ?? "",
    authorUrl: article.authorUrl ?? "",
  };
}
