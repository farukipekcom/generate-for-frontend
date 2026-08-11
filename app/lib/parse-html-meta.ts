import type {
  ParsedArticleJsonLd,
  ParsedIcons,
  ParsedOpenGraph,
  ParsedPageMeta,
  ParsedTwitter,
} from "./parsed-meta";
const ENTITY_MAP: Record<string, string> = {
  amp: "&",
  lt: "<",
  gt: ">",
  quot: '"',
  apos: "'",
  "#39": "'",
};
function decodeEntities(value: string) {
  return value
    .replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (match, entity: string) => {
      if (entity.startsWith("#x")) {
        return String.fromCodePoint(Number.parseInt(entity.slice(2), 16));
      }
      if (entity.startsWith("#")) {
        return String.fromCodePoint(Number.parseInt(entity.slice(1), 10));
      }
      return ENTITY_MAP[entity.toLowerCase()] ?? match;
    })
    .trim();
}
function readAttr(tag: string, name: string) {
  const match = tag.match(
    new RegExp(`\\b${name}\\s*=\\s*(?:"([^"]*)"|'([^']*)')`, "i"),
  );
  return match?.[1] ?? match?.[2];
}
function parseMetaTags(html: string) {
  const byName = new Map<string, string>();
  const byProperty = new Map<string, string>();
  for (const tag of html.match(/<meta\b[^>]*>/gi) ?? []) {
    const charset = readAttr(tag, "charset");
    if (charset) byName.set("charset", charset);
    const name = readAttr(tag, "name");
    const property = readAttr(tag, "property");
    const content = readAttr(tag, "content");
    if (name && content !== undefined) byName.set(name.toLowerCase(), content);
    if (property && content !== undefined) {
      byProperty.set(property.toLowerCase(), content);
    }
  }
  return { byName, byProperty };
}
function parseLinks(html: string) {
  const links: { rel: string; href?: string; sizes?: string; type?: string }[] =
    [];
  for (const tag of html.match(/<link\b[^>]*>/gi) ?? []) {
    links.push({
      rel: (readAttr(tag, "rel") ?? "").toLowerCase(),
      href: readAttr(tag, "href"),
      sizes: readAttr(tag, "sizes"),
      type: readAttr(tag, "type"),
    });
  }
  return links;
}
function parseJsonLd(html: string) {
  const blocks: unknown[] = [];
  const pattern =
    /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  for (const match of html.matchAll(pattern)) {
    const raw = match[1]?.trim();
    if (!raw) continue;
    try {
      blocks.push(JSON.parse(raw));
    } catch {
      // Ignore invalid JSON-LD blocks.
    }
  }
  return blocks;
}
function flattenJsonLd(value: unknown): Record<string, unknown>[] {
  if (!value) return [];
  if (Array.isArray(value)) return value.flatMap(flattenJsonLd);
  if (typeof value === "object") {
    const record = value as Record<string, unknown>;
    if (Array.isArray(record["@graph"])) {
      return record["@graph"].flatMap(flattenJsonLd);
    }
    return [record];
  }
  return [];
}
function asString(value: unknown) {
  return typeof value === "string" ? value : undefined;
}
function pickImage(value: unknown) {
  if (typeof value === "string") return value;
  if (Array.isArray(value)) {
    const first = value[0];
    if (typeof first === "string") return first;
    if (first && typeof first === "object") {
      return asString((first as Record<string, unknown>).url);
    }
  }
  if (value && typeof value === "object") {
    return asString((value as Record<string, unknown>).url);
  }
  return undefined;
}
function parseArticleJsonLd(blocks: Record<string, unknown>[]) {
  const article = blocks.find((block) => {
    const type = block["@type"];
    if (typeof type === "string") return type === "Article";
    if (Array.isArray(type)) return type.includes("Article");
    return false;
  });
  if (!article) return undefined;
  const author = article.author;
  let authorName: string | undefined;
  let authorUrl: string | undefined;
  if (author && typeof author === "object" && !Array.isArray(author)) {
    authorName = asString((author as Record<string, unknown>).name);
    authorUrl = asString((author as Record<string, unknown>).url);
  }
  const page = article.mainEntityOfPage;
  let url: string | undefined;
  if (page && typeof page === "object") {
    url = asString((page as Record<string, unknown>)["@id"]);
  }
  const mapped: ParsedArticleJsonLd = {
    headline: asString(article.headline),
    description: asString(article.description),
    image: pickImage(article.image),
    url,
    datePublished: asString(article.datePublished),
    dateModified: asString(article.dateModified),
    authorName,
    authorUrl,
  };
  return Object.values(mapped).some(Boolean) ? mapped : undefined;
}
function parseIcons(links: ReturnType<typeof parseLinks>): ParsedIcons {
  const icons: ParsedIcons = {};
  for (const link of links) {
    if (link.rel === "canonical" || !link.href) continue;
    if (link.rel === "manifest") icons.manifest = link.href;
    if (link.rel === "apple-touch-icon") icons.appleTouchIcon = link.href;
    if (link.rel === "icon") {
      if (link.sizes === "32x32") icons.favicon32 = link.href;
      if (link.sizes === "16x16") icons.favicon16 = link.href;
      if (!icons.favicon32 && !link.sizes) icons.favicon32 = link.href;
    }
  }
  return icons;
}
function parseTwitter(byName: Map<string, string>, byProperty: Map<string, string>) {
  const twitter: ParsedTwitter = {
    card: byName.get("twitter:card"),
    title: byName.get("twitter:title"),
    site: byName.get("twitter:site")?.replace(/^@/, ""),
    description: byName.get("twitter:description"),
    image: byName.get("twitter:image"),
    imageAlt: byName.get("twitter:image:alt"),
  };
  return Object.values(twitter).some(Boolean) ? twitter : undefined;
}
function parseOpenGraph(byProperty: Map<string, string>) {
  const openGraph: ParsedOpenGraph = {
    title: byProperty.get("og:title"),
    description: byProperty.get("og:description"),
    url: byProperty.get("og:url"),
    type: byProperty.get("og:type"),
    siteName: byProperty.get("og:site_name"),
    locale: byProperty.get("og:locale"),
    image: byProperty.get("og:image"),
    imageAlt: byProperty.get("og:image:alt"),
    imageWidth: byProperty.get("og:image:width"),
    imageHeight: byProperty.get("og:image:height"),
  };
  return Object.values(openGraph).some(Boolean) ? openGraph : undefined;
}
export function parseHtmlMeta(html: string, url: string): ParsedPageMeta {
  const { byName, byProperty } = parseMetaTags(html);
  const links = parseLinks(html);
  const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  const canonical = links.find((link) => link.rel === "canonical")?.href;
  const jsonLdBlocks = parseJsonLd(html).flatMap(flattenJsonLd);
  const openGraph = parseOpenGraph(byProperty);
  const twitter = parseTwitter(byName, byProperty);
  const robotsRaw = byName.get("robots");
  const robotsDirectives = robotsRaw
    ?.split(",")
    .map((part) => part.trim().toLowerCase())
    .filter(Boolean);
  const title =
    (titleMatch ? decodeEntities(titleMatch[1]) : undefined) ??
    openGraph?.title ??
    twitter?.title;
  const description =
    byName.get("description") ?? openGraph?.description ?? twitter?.description;
  const icons = parseIcons(links);
  const article = parseArticleJsonLd(jsonLdBlocks);
  return {
    url,
    title,
    description,
    keywords: byName.get("keywords"),
    author: byName.get("author"),
    canonical: canonical ?? openGraph?.url,
    referrer: byName.get("referrer"),
    robots: robotsRaw,
    googlebot: byName.get("googlebot"),
    charset: byName.get("charset")?.toUpperCase(),
    viewport: byName.has("viewport"),
    formatDetection: byName.get("format-detection")?.includes("telephone=no"),
    googleVerification: byName.get("google-site-verification"),
    bingVerification: byName.get("msvalidate.01"),
    openGraph,
    twitter,
    icons: Object.values(icons).some(Boolean) ? icons : undefined,
    article,
    robotsDirectives,
  };
}
