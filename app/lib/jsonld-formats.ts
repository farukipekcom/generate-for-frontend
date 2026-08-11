import type { CodeFormat } from "./formats";
import { stringifyJsonLd } from "./jsonld";
export function buildJsonLdFormats(data: object | null): CodeFormat[] {
  const json = stringifyJsonLd(data);
  const escaped = json.replace(/</g, "\\u003c");
  return [
    {
      id: "html",
      label: "HTML",
      lang: "html",
      code: json
        ? `<script type="application/ld+json">\n${json}\n</script>`
        : "",
      note: "Insert the following code into the <b>&#60;head&#62;</b> section of your webpage.",
    },
    {
      id: "next",
      label: "Next.js",
      lang: "tsx",
      code: json
        ? `<script\n  type="application/ld+json"\n  dangerouslySetInnerHTML={{ __html: ${JSON.stringify(escaped)} }}\n/>`
        : "",
      note: "Add this to your <b>layout.tsx</b> or <b>page.tsx</b> component.",
    },
    {
      id: "nuxt",
      label: "Nuxt",
      lang: "ts",
      code: json
        ? `useHead({\n  script: [\n    {\n      type: "application/ld+json",\n      innerHTML: ${JSON.stringify(json)},\n    },\n  ],\n});`
        : "",
      note: "Call this inside <b>&#60;script setup&#62;</b> on your page component.",
    },
    {
      id: "json",
      label: "JSON",
      lang: "json",
      code: json,
      note: "Raw JSON-LD. Paste into any tool that accepts structured data directly.",
    },
  ];
}
