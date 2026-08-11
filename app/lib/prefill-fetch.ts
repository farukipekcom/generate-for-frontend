const BLOCKED_HOSTS = new Set(["localhost", "127.0.0.1", "0.0.0.0", "::1"]);
function isPrivateIpv4(host: string) {
  const parts = host.split(".").map(Number);
  if (parts.length !== 4 || parts.some((part) => Number.isNaN(part))) return false;
  if (parts[0] === 10) return true;
  if (parts[0] === 127) return true;
  if (parts[0] === 169 && parts[1] === 254) return true;
  if (parts[0] === 192 && parts[1] === 168) return true;
  if (parts[0] === 172 && parts[1] >= 16 && parts[1] <= 31) return true;
  return false;
}
export function normalizePrefillUrl(raw: string) {
  const trimmed = raw.trim();
  if (trimmed === "") throw new Error("Enter a URL to fetch.");
  const candidate = trimmed.includes("://") ? trimmed : `https://${trimmed}`;
  let parsed: URL;
  try {
    parsed = new URL(candidate);
  } catch {
    throw new Error("That URL does not look valid.");
  }
  if (parsed.protocol !== "http:" && parsed.protocol !== "https:") {
    throw new Error("Only http and https URLs are supported.");
  }
  const host = parsed.hostname.toLowerCase();
  if (
    BLOCKED_HOSTS.has(host) ||
    host.endsWith(".local") ||
    host.endsWith(".internal") ||
    isPrivateIpv4(host)
  ) {
    throw new Error("That URL cannot be fetched from this tool.");
  }
  parsed.hash = "";
  return parsed.toString();
}
export async function fetchHtml(url: string, maxBytes = 512_000) {
  const response = await fetch(url, {
    redirect: "follow",
    headers: {
      "User-Agent":
        "GenerateForFrontendBot/1.0 (+https://generateforfrontend.com)",
      Accept: "text/html,application/xhtml+xml",
    },
    signal: AbortSignal.timeout(10_000),
  });
  if (!response.ok) {
    throw new Error(`The server responded with ${response.status}.`);
  }
  const type = response.headers.get("content-type") ?? "";
  if (!type.includes("text/html") && !type.includes("application/xhtml")) {
    throw new Error("That URL did not return an HTML page.");
  }
  const reader = response.body?.getReader();
  if (!reader) {
    return (await response.text()).slice(0, maxBytes);
  }
  const chunks: Uint8Array[] = [];
  let size = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done || !value) break;
    chunks.push(value);
    size += value.length;
    if (size >= maxBytes) break;
  }
  const html = new TextDecoder().decode(
    chunks.length === 1 ? chunks[0]! : concatChunks(chunks, size),
  );
  return html.slice(0, maxBytes);
}
function concatChunks(chunks: Uint8Array[], size: number) {
  const merged = new Uint8Array(size);
  let offset = 0;
  for (const chunk of chunks) {
    merged.set(chunk, offset);
    offset += chunk.length;
  }
  return merged;
}
