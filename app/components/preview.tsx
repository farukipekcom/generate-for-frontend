"use client";
import React, { useEffect, useState } from "react";
import Title from "./title";
import Description from "./description";
type Variant = "google" | "summary" | "summary_large_image" | "player" | "app";
interface Props {
  variant: Variant;
  title?: string;
  description?: string;
  site?: string;
  imageUrl?: string;
  imageAlt?: string;
  appName?: string;
  url?: string;
}
// Runs against half-typed URLs on every keystroke, so anything unparseable
// falls back to the placeholder domain rather than throwing.
function readUrl(value?: string) {
  const raw = value?.trim();
  if (!raw) return null;
  try {
    const parsed = new URL(raw.includes("://") ? raw : `https://${raw}`);
    if (!parsed.hostname.includes(".")) return null;
    const host = parsed.hostname.replace(/^www\./, "");
    const crumbs = parsed.pathname.split("/").filter(Boolean);
    return {
      host,
      name: host.split(".")[0],
      trail: [parsed.origin, ...crumbs].join(" › "),
    };
  } catch {
    return null;
  }
}
const placeholder = (value: string | undefined, fallback: string) => ({
  text: value?.trim() || fallback,
  empty: !value?.trim(),
});
function ImageIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <path d="m21 15-5-5L5 21" />
    </svg>
  );
}
function CardImage({
  src,
  alt,
  className,
}: {
  src?: string;
  alt?: string;
  className: string;
}) {
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    setFailed(false);
  }, [src]);
  if (!src?.trim() || failed) {
    return (
      <div
        className={`${className} flex items-center justify-center bg-[#F4F4F4] text-[#8B98A5] dark:bg-secondary`}
      >
        <ImageIcon />
      </div>
    );
  }
  return (
    // A plain img: these are arbitrary user-entered URLs, so next/image would
    // need every possible host allowlisted in remotePatterns.
    <img
      src={src}
      alt={alt || ""}
      className={`${className} object-cover`}
      onError={() => setFailed(true)}
    />
  );
}
function GooglePreview({ title, description, url }: Props) {
  const heading = placeholder(title, "Your page title will appear here");
  const snippet = placeholder(
    description,
    "Your meta description will appear here, showing roughly how the snippet looks in search results.",
  );
  const site = readUrl(url);
  return (
    <div className="font-sans">
      <div className="flex items-center gap-x-3">
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#F1F3F4] text-xs font-bold uppercase text-[#5F6368] dark:bg-secondary dark:text-gray">
          {(site?.name || "example").charAt(0)}
        </div>
        <div className="min-w-0 leading-tight">
          <div className="truncate text-sm capitalize text-[#202124] dark:text-[#DADCE0]">
            {site?.name || "Example"}
          </div>
          <div className="truncate text-xs text-[#4D5156] dark:text-[#BDC1C6]">
            {site?.trail || "https://example.com"}
          </div>
        </div>
      </div>
      <div
        className={`mt-2 line-clamp-1 text-xl leading-7 ${
          heading.empty
            ? "text-[#9AA0A6] dark:text-gray"
            : "text-[#1A0DAB] dark:text-[#8AB4F8]"
        }`}
      >
        {heading.text}
      </div>
      <p
        className={`mt-1 line-clamp-2 text-sm leading-5 ${
          snippet.empty
            ? "text-[#9AA0A6] dark:text-gray"
            : "text-[#4D5156] dark:text-[#BDC1C6]"
        }`}
      >
        {snippet.text}
      </p>
    </div>
  );
}
function TwitterFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#CFD9DE] dark:border-[#333639]">
      {children}
    </div>
  );
}
function TwitterMeta({
  title,
  description,
  site,
  stacked,
}: Props & { stacked?: boolean }) {
  const heading = placeholder(title, "Your card title");
  const body = placeholder(
    description,
    "Your card description will appear here.",
  );
  return (
    <div className={stacked ? "p-3" : "min-w-0 flex-1 p-3"}>
      <div className="text-[13px] leading-4 text-[#536471] dark:text-[#8B98A5]">
        {site?.trim() ? `@${site.trim()}` : "example.com"}
      </div>
      <div
        className={`mt-0.5 line-clamp-1 text-[15px] leading-5 ${
          heading.empty
            ? "text-[#8B98A5]"
            : "text-[#0F1419] dark:text-[#E7E9EA]"
        }`}
      >
        {heading.text}
      </div>
      <p
        className={`mt-0.5 text-[15px] leading-5 ${
          stacked ? "line-clamp-1" : "line-clamp-2"
        } ${body.empty ? "text-[#8B98A5]" : "text-[#536471] dark:text-[#8B98A5]"}`}
      >
        {body.text}
      </p>
    </div>
  );
}
function PlayButton() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-black/60">
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="white"
          aria-hidden="true"
        >
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
    </div>
  );
}
function AppPreview({ appName, description, site }: Props) {
  const name = placeholder(appName, "Your app name");
  const body = placeholder(
    description,
    "Your app description will appear here.",
  );
  return (
    <TwitterFrame>
      <div className="flex items-center gap-x-3 p-3">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#F4F4F4] text-[#8B98A5] dark:bg-secondary">
          <ImageIcon />
        </div>
        <div className="min-w-0 flex-1">
          <div className="text-[13px] leading-4 text-[#536471] dark:text-[#8B98A5]">
            {site?.trim() ? `@${site.trim()}` : "example.com"}
          </div>
          <div
            className={`mt-0.5 line-clamp-1 text-[15px] font-bold leading-5 ${
              name.empty
                ? "text-[#8B98A5]"
                : "text-[#0F1419] dark:text-[#E7E9EA]"
            }`}
          >
            {name.text}
          </div>
          <p
            className={`mt-0.5 line-clamp-2 text-[15px] leading-5 ${
              body.empty
                ? "text-[#8B98A5]"
                : "text-[#536471] dark:text-[#8B98A5]"
            }`}
          >
            {body.text}
          </p>
        </div>
      </div>
      <div className="border-t border-[#CFD9DE] px-3 py-2 text-[13px] text-[#536471] dark:border-[#333639] dark:text-[#8B98A5]">
        View on the App Store
      </div>
    </TwitterFrame>
  );
}
export default function Preview(Props: Props) {
  const { variant, imageUrl, imageAlt } = Props;
  return (
    <div>
      <Title title="Preview" />
      <Description description="An approximation of how your page will look when it is shared. Actual rendering varies by platform." />
      <div className="customShadow mt-6 w-full rounded-lg border border-borderLight bg-white p-6 dark:border-border dark:bg-primary">
        {variant === "google" && <GooglePreview {...Props} />}
        {variant === "summary" && (
          <TwitterFrame>
            <div className="flex items-stretch">
              <CardImage
                src={imageUrl}
                alt={imageAlt}
                className="h-[129px] w-[129px] shrink-0 border-r border-[#CFD9DE] dark:border-[#333639]"
              />
              <TwitterMeta {...Props} />
            </div>
          </TwitterFrame>
        )}
        {(variant === "summary_large_image" || variant === "player") && (
          <TwitterFrame>
            <div className="relative">
              <CardImage
                src={imageUrl}
                alt={imageAlt}
                className="aspect-[2/1] w-full"
              />
              {variant === "player" && <PlayButton />}
            </div>
            <div className="border-t border-[#CFD9DE] dark:border-[#333639]">
              <TwitterMeta {...Props} stacked />
            </div>
          </TwitterFrame>
        )}
        {variant === "app" && <AppPreview {...Props} />}
      </div>
    </div>
  );
}
