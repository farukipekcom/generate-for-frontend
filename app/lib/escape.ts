// The generators interpolate raw form input into markup, so anything the user
// types has to be escaped or a single quote breaks the tag it sits in.
export function escapeText(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
export function escapeAttribute(value: string) {
  return escapeText(value).replace(/"/g, "&quot;");
}
