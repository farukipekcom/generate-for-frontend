import type { MetadataRoute } from "next";
import pages from "./json/pages.json";
import { siteUrl } from "./lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  // Evaluated at build time, so lastModified tracks the deploy instead of
  // whenever someone last remembered to edit a static file.
  const lastModified = new Date();
  const links = pages.flatMap((page) => [
    page.link,
    ...(page.pages ?? []).map((child) => child.link),
  ]);
  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 1,
    },
    ...links.map((link) => ({
      url: `${siteUrl}${link}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: link.split("/").filter(Boolean).length > 1 ? 0.64 : 0.8,
    })),
  ];
}
