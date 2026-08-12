const s = (value?: string) =>
  value && value.trim() !== "" ? value.trim() : undefined;
const lines = (value?: string) =>
  value
    ?.split("\n")
    .map((line) => line.trim())
    .filter(Boolean) ?? [];
export interface RobotsBlock {
  userAgent: string;
  allow: string;
  disallow: string;
  crawlDelay: string;
}
export interface RobotsForm {
  blocks: RobotsBlock[];
  sitemaps: string;
}
export function createRobotsFormDefaults(): RobotsForm {
  return {
    blocks: [
      {
        userAgent: "*",
        allow: "",
        disallow: "",
        crawlDelay: "",
      },
    ],
    sitemaps: "",
  };
}
export function buildRobotsTxt(form: RobotsForm) {
  const sections = form.blocks
    .map((block) => {
      const userAgent = s(block.userAgent);
      if (!userAgent) return "";
      const allow = lines(block.allow);
      const disallow = lines(block.disallow);
      const crawlDelay = s(block.crawlDelay);
      const hasRules = allow.length || disallow.length || crawlDelay;
      if (!hasRules) return "";
      return [
        `User-agent: ${userAgent}`,
        ...allow.map((path) => `Allow: ${path}`),
        ...disallow.map((path) => `Disallow: ${path}`),
        crawlDelay && `Crawl-delay: ${crawlDelay}`,
      ]
        .filter(Boolean)
        .join("\n");
    })
    .filter(Boolean);
  const sitemaps = lines(form.sitemaps).map((url) => `Sitemap: ${url}`);
  const output = [...sections, ...sitemaps].filter(Boolean).join("\n\n");
  return output.trim();
}
