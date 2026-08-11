import { escapeAttribute } from "./escape";
export type TagValue = string | false | undefined;
export const keep = (values: TagValue[]) =>
  values.filter((value): value is string => Boolean(value));
// Drops the whole block when every tag inside it is empty, so the output never
// carries a heading with nothing under it.
export const section = (comment: string, values: TagValue[]) => {
  const tags = keep(values);
  return tags.length ? [`<!-- ${comment} -->`, ...tags] : [];
};
// Returns false rather than an empty string for blank input so `keep` drops the
// tag instead of leaving a blank line behind.
export const meta = (name: string, content: TagValue): TagValue =>
  content
    ? `<meta name="${name}" content="${escapeAttribute(content)}">`
    : false;
export const property = (name: string, content: TagValue): TagValue =>
  content
    ? `<meta property="${name}" content="${escapeAttribute(content)}">`
    : false;
