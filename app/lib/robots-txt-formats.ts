import type { CodeFormat } from "./formats";
import { buildRobotsTxt, type RobotsForm } from "./robots-txt";
export function buildRobotsTxtFormats(form: RobotsForm): CodeFormat[] {
  const code = buildRobotsTxt(form);
  return [
    {
      id: "txt",
      label: "robots.txt",
      lang: "html",
      code,
      note: "Save this file as <b>robots.txt</b> in the root of your website.",
    },
  ];
}
