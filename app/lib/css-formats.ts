import type { CodeFormat } from "./formats";
export function buildCssFormats(
  property: string,
  value: string,
  tailwind?: string,
): CodeFormat[] {
  const css = value ? `${property}: ${value};` : "";
  const formats: CodeFormat[] = [
    {
      id: "css",
      label: "CSS",
      lang: "css",
      code: css,
      note: "Copy the declaration into your stylesheet or inline <b>style</b> attribute.",
    },
  ];
  if (tailwind) {
    formats.push({
      id: "tailwind",
      label: "Tailwind",
      lang: "css",
      code: tailwind,
      note: "Use as a Tailwind utility class on your element.",
    });
  }
  return formats;
}
export function hexToRgba(hex: string, alpha: number) {
  const clean = hex.replace("#", "");
  if (clean.length !== 6) return `rgba(0, 0, 0, ${alpha})`;
  const r = Number.parseInt(clean.slice(0, 2), 16);
  const g = Number.parseInt(clean.slice(2, 4), 16);
  const b = Number.parseInt(clean.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
export function tailwindArbitrary(value: string) {
  return value.replace(/\s+/g, "_").replace(/,/g, ",");
}
