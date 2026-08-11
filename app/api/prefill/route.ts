import { NextResponse } from "next/server";
import { parseHtmlMeta } from "../../lib/parse-html-meta";
import { fetchHtml, normalizePrefillUrl } from "../../lib/prefill-fetch";
export async function GET(request: Request) {
  const url = new URL(request.url).searchParams.get("url");
  if (!url) {
    return NextResponse.json(
      { ok: false, error: "Missing url parameter." },
      { status: 400 },
    );
  }
  try {
    const normalized = normalizePrefillUrl(url);
    const html = await fetchHtml(normalized);
    const data = parseHtmlMeta(html, normalized);
    return NextResponse.json({ ok: true, data });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Could not fetch that URL.";
    return NextResponse.json({ ok: false, error: message }, { status: 400 });
  }
}
