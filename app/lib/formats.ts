import { escapeAttribute as e, escapeText as t } from "./escape";
import { keep, meta, property, section } from "./tags";
import type { SeoDocument } from "./seo";
export interface CodeFormat {
  id: string;
  label: string;
  lang: string;
  code: string;
  note: string;
}
// Form fields are always strings, so "" is the normal empty state rather than
// undefined. Everything below funnels through these two so a blank field never
// reaches the output as an empty key.
const s = (value?: string) =>
  value && value.trim() !== "" ? value.trim() : undefined;
const obj = <T extends object>(value: T): T | undefined =>
  Object.values(value).some((entry) => entry !== undefined) ? value : undefined;
const num = (value?: string) => {
  const raw = s(value);
  if (raw === undefined) return undefined;
  const parsed = Number(raw);
  return Number.isFinite(parsed) ? parsed : raw;
};
const isPlainKey = (key: string) => /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(key);
function print(value: unknown, indent: string): string {
  if (typeof value === "string") return JSON.stringify(value);
  if (typeof value === "number" || typeof value === "boolean")
    return String(value);
  if (Array.isArray(value)) {
    const items = value.filter((item) => item !== undefined);
    if (!items.length) return "[]";
    const inner = items
      .map((item) => `${indent}  ${print(item, `${indent}  `)}`)
      .join(",\n");
    return `[\n${inner}\n${indent}]`;
  }
  if (value && typeof value === "object") {
    const entries = Object.entries(value).filter(
      ([, entry]) => entry !== undefined,
    );
    if (!entries.length) return "{}";
    const inner = entries
      .map(
        ([key, entry]) =>
          `${indent}  ${isPlainKey(key) ? key : JSON.stringify(key)}: ${print(
            entry,
            `${indent}  `,
          )}`,
      )
      .join(",\n");
    return `{\n${inner}\n${indent}}`;
  }
  return "undefined";
}
export function toHtml(doc: SeoDocument): string {
  const og = doc.openGraph ?? {};
  const tw = doc.twitter ?? {};
  const icons = doc.icons ?? {};
  return [
    ...keep([
      doc.charset && `<meta charset="${e(doc.charset)}">`,
      doc.viewport && meta("viewport", "width=device-width, initial-scale=1"),
      doc.title && `<title>${t(doc.title)}</title>`,
      meta("description", doc.description),
      meta("keywords", doc.keywords),
      meta("author", doc.author),
      doc.canonical && `<link rel="canonical" href="${e(doc.canonical)}">`,
      meta("referrer", doc.referrer),
      doc.formatDetection && meta("format-detection", "telephone=no"),
    ]),
    ...section("Twitter", [
      meta("twitter:card", tw.card),
      meta("twitter:title", tw.title),
      meta("twitter:site", tw.site && `@${tw.site}`),
      meta("twitter:description", tw.description),
      meta("twitter:player", tw.player),
      tw.player && meta("twitter:player:height", tw.playerHeight),
      tw.player && meta("twitter:player:width", tw.playerWidth),
      meta("twitter:image", tw.image),
      tw.image && meta("twitter:image:alt", tw.imageAlt),
      meta("twitter:app:country", tw.app?.country),
    ]),
    ...section("iPhone", [
      meta("twitter:app:name:iphone", tw.app?.name),
      meta("twitter:app:id:iphone", tw.app?.iphone),
    ]),
    ...section("iPad", [
      meta("twitter:app:name:ipad", tw.app?.name),
      meta("twitter:app:id:ipad", tw.app?.ipad),
    ]),
    ...section("Google Play", [
      meta("twitter:app:name:googleplay", tw.app?.name),
      meta("twitter:app:id:googleplay", tw.app?.googleplay),
    ]),
    ...section("Open Graph", [
      property("og:title", og.title),
      property("og:type", og.type),
      property("og:url", og.url),
      property("og:description", og.description),
      property("og:site_name", og.siteName),
      property("og:locale", og.locale),
      property("og:image", og.image),
      og.image && property("og:image:alt", og.imageAlt),
      og.image && property("og:image:width", og.imageWidth),
      og.image && property("og:image:height", og.imageHeight),
    ]),
    ...section("Search engines", [
      meta("robots", doc.robots),
      meta("googlebot", doc.googlebot),
      meta("google-site-verification", doc.googleVerification),
      meta("msvalidate.01", doc.bingVerification),
    ]),
    ...section("Icons", [
      icons.favicon32 &&
        `<link rel="icon" type="image/png" sizes="32x32" href="${e(
          icons.favicon32,
        )}">`,
      icons.favicon16 &&
        `<link rel="icon" type="image/png" sizes="16x16" href="${e(
          icons.favicon16,
        )}">`,
      icons.appleTouchIcon &&
        `<link rel="apple-touch-icon" sizes="180x180" href="${e(
          icons.appleTouchIcon,
        )}">`,
      icons.manifest && `<link rel="manifest" href="${e(icons.manifest)}">`,
    ]),
  ].join("\n");
}
export function toNextMetadata(doc: SeoDocument): string {
  const og = doc.openGraph ?? {};
  const tw = doc.twitter ?? {};
  const icons = doc.icons ?? {};
  const other: Record<string, string> = {};
  const site = s(tw.site) ? `@${s(tw.site)}` : undefined;
  const images = s(tw.image)
    ? [obj({ url: s(tw.image), alt: s(tw.imageAlt) })]
    : undefined;
  let twitter: object | undefined;
  if (s(tw.card) === "app") {
    const ids = obj({
      iphone: s(tw.app?.iphone),
      ipad: s(tw.app?.ipad),
      googleplay: s(tw.app?.googleplay),
    });
    const name = s(tw.app?.name);
    // TwitterApp requires the app descriptor, so fall back to a raw tag when
    // there is nothing to put in it.
    if (ids || name) {
      twitter = {
        card: "app",
        site,
        description: s(tw.description),
        app: { id: ids ?? {}, name },
      };
    } else {
      other["twitter:card"] = "app";
      twitter = obj({ site, description: s(tw.description) });
    }
    if (s(tw.app?.country)) other["twitter:app:country"] = s(tw.app!.country)!;
  } else if (s(tw.card) === "player") {
    // TwitterPlayer requires playerUrl, streamUrl, width and height together,
    // and these forms only collect some of them.
    other["twitter:card"] = "player";
    if (s(tw.player)) {
      other["twitter:player"] = s(tw.player)!;
      if (s(tw.playerWidth)) other["twitter:player:width"] = s(tw.playerWidth)!;
      if (s(tw.playerHeight))
        other["twitter:player:height"] = s(tw.playerHeight)!;
    }
    twitter = obj({
      title: s(tw.title),
      description: s(tw.description),
      site,
      images,
    });
  } else if (s(tw.card)) {
    twitter = {
      card: s(tw.card),
      title: s(tw.title),
      description: s(tw.description),
      site,
      images,
    };
  }
  if (s(doc.googlebot)) other["googlebot"] = s(doc.googlebot)!;
  const iconList = [
    s(icons.favicon32) &&
      { url: s(icons.favicon32), sizes: "32x32", type: "image/png" },
    s(icons.favicon16) &&
      { url: s(icons.favicon16), sizes: "16x16", type: "image/png" },
  ].filter(Boolean);
  const metadata = obj({
    title: s(doc.title),
    description: s(doc.description),
    keywords: s(doc.keywords),
    authors: s(doc.author) ? [{ name: s(doc.author) }] : undefined,
    referrer: s(doc.referrer),
    robots: s(doc.robots),
    alternates: s(doc.canonical)
      ? { canonical: s(doc.canonical) }
      : undefined,
    formatDetection: doc.formatDetection ? { telephone: false } : undefined,
    manifest: s(icons.manifest),
    icons: obj({
      icon: iconList.length ? iconList : undefined,
      apple: s(icons.appleTouchIcon)
        ? [{ url: s(icons.appleTouchIcon), sizes: "180x180" }]
        : undefined,
    }),
    verification: obj({
      google: s(doc.googleVerification),
      other: s(doc.bingVerification)
        ? { "msvalidate.01": s(doc.bingVerification) }
        : undefined,
    }),
    openGraph: obj({
      title: s(og.title),
      description: s(og.description),
      url: s(og.url),
      siteName: s(og.siteName),
      locale: s(og.locale),
      type: s(og.type),
      images: s(og.image)
        ? [
            obj({
              url: s(og.image),
              alt: s(og.imageAlt),
              width: num(og.imageWidth),
              height: num(og.imageHeight),
            }),
          ]
        : undefined,
    }),
    twitter,
    other: Object.keys(other).length ? other : undefined,
  });
  const imports = doc.viewport ? "Metadata, Viewport" : "Metadata";
  const lines = [`import type { ${imports} } from "next";`, ""];
  if (s(doc.charset)) {
    lines.push("// Next.js emits <meta charset=\"utf-8\"> for you.");
  }
  lines.push(`export const metadata: Metadata = ${print(metadata ?? {}, "")};`);
  if (doc.viewport) {
    lines.push("");
    lines.push(
      `export const viewport: Viewport = ${print(
        { width: "device-width", initialScale: 1 },
        "",
      )};`,
    );
  }
  return lines.join("\n");
}
export function toNuxt(doc: SeoDocument): string {
  const og = doc.openGraph ?? {};
  const tw = doc.twitter ?? {};
  const icons = doc.icons ?? {};
  const seoMeta = obj({
    charset: s(doc.charset),
    viewport: doc.viewport ? "width=device-width, initial-scale=1" : undefined,
    title: s(doc.title),
    description: s(doc.description),
    keywords: s(doc.keywords),
    author: s(doc.author),
    referrer: s(doc.referrer),
    formatDetection: doc.formatDetection ? "telephone=no" : undefined,
    robots: s(doc.robots),
    googlebot: s(doc.googlebot),
    googleSiteVerification: s(doc.googleVerification),
    ogTitle: s(og.title),
    ogType: s(og.type),
    ogUrl: s(og.url),
    ogDescription: s(og.description),
    ogSiteName: s(og.siteName),
    ogLocale: s(og.locale),
    ogImage: s(og.image),
    ogImageAlt: s(og.image) ? s(og.imageAlt) : undefined,
    ogImageWidth: s(og.image) ? num(og.imageWidth) : undefined,
    ogImageHeight: s(og.image) ? num(og.imageHeight) : undefined,
    twitterCard: s(tw.card),
    twitterTitle: s(tw.title),
    twitterSite: s(tw.site) ? `@${s(tw.site)}` : undefined,
    twitterDescription: s(tw.description),
    twitterImage: s(tw.image),
    twitterImageAlt: s(tw.image) ? s(tw.imageAlt) : undefined,
    twitterPlayer: s(tw.player),
    twitterPlayerWidth: s(tw.player) ? num(tw.playerWidth) : undefined,
    twitterPlayerHeight: s(tw.player) ? num(tw.playerHeight) : undefined,
    twitterAppNameIphone: s(tw.app?.name),
    twitterAppIdIphone: s(tw.app?.iphone),
    twitterAppNameIpad: s(tw.app?.name),
    twitterAppIdIpad: s(tw.app?.ipad),
    twitterAppNameGoogleplay: s(tw.app?.name),
    twitterAppIdGoogleplay: s(tw.app?.googleplay),
    twitterAppCountry: s(tw.app?.country),
  });
  const link = [
    s(doc.canonical) && { rel: "canonical", href: s(doc.canonical) },
    s(icons.favicon32) && {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: s(icons.favicon32),
    },
    s(icons.favicon16) && {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: s(icons.favicon16),
    },
    s(icons.appleTouchIcon) && {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: s(icons.appleTouchIcon),
    },
    s(icons.manifest) && { rel: "manifest", href: s(icons.manifest) },
  ].filter(Boolean);
  // useSeoMeta has no key for these, so they go through useHead instead.
  const head = obj({
    link: link.length ? link : undefined,
    meta: s(doc.bingVerification)
      ? [{ name: "msvalidate.01", content: s(doc.bingVerification) }]
      : undefined,
  });
  const blocks: string[] = [];
  if (seoMeta) blocks.push(`useSeoMeta(${print(seoMeta, "")});`);
  if (head) blocks.push(`useHead(${print(head, "")});`);
  return blocks.length ? blocks.join("\n\n") : "useSeoMeta({});";
}
export function buildFormats(doc: SeoDocument): CodeFormat[] {
  return [
    {
      id: "html",
      label: "HTML",
      lang: "html",
      code: toHtml(doc),
      note: "Insert the following code into the <b>&#60;head&#62;</b> section of your webpage.",
    },
    {
      id: "next",
      label: "Next.js",
      lang: "ts",
      code: toNextMetadata(doc),
      note: "Export this from your <b>layout.tsx</b> or <b>page.tsx</b> in the App Router.",
    },
    {
      id: "nuxt",
      label: "Nuxt",
      lang: "ts",
      code: toNuxt(doc),
      note: "Call this inside <b>&#60;script setup&#62;</b> on your page component.",
    },
  ];
}
