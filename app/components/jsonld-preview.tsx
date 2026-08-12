"use client";
import React from "react";
import Title from "./title";
import Description from "./description";
import type { BreadcrumbItem, FaqItem } from "../lib/jsonld";
type Variant =
  | "article"
  | "faq"
  | "product"
  | "organization"
  | "localBusiness"
  | "website"
  | "recipe"
  | "event"
  | "breadcrumb";
interface ArticleProps {
  variant: "article";
  headline?: string;
  description?: string;
  authorName?: string;
  datePublished?: string;
}
interface FaqProps {
  variant: "faq";
  items: FaqItem[];
}
interface ProductProps {
  variant: "product";
  name?: string;
  description?: string;
  price?: string;
  currency?: string;
  brand?: string;
}
interface OrganizationProps {
  variant: "organization";
  name?: string;
  description?: string;
  url?: string;
}
interface LocalBusinessProps {
  variant: "localBusiness";
  name?: string;
  description?: string;
  telephone?: string;
  addressLocality?: string;
}
interface WebsiteProps {
  variant: "website";
  name?: string;
  description?: string;
  url?: string;
  searchUrl?: string;
}
interface RecipeProps {
  variant: "recipe";
  name?: string;
  description?: string;
  prepTime?: string;
  cookTime?: string;
  recipeYield?: string;
}
interface EventProps {
  variant: "event";
  name?: string;
  description?: string;
  startDate?: string;
  locationName?: string;
}
interface BreadcrumbProps {
  variant: "breadcrumb";
  items: BreadcrumbItem[];
}
type Props =
  | ArticleProps
  | FaqProps
  | ProductProps
  | OrganizationProps
  | LocalBusinessProps
  | WebsiteProps
  | RecipeProps
  | EventProps
  | BreadcrumbProps;
const placeholder = (value: string | undefined, fallback: string) => ({
  text: value?.trim() || fallback,
  empty: !value?.trim(),
});
function ArticlePreview({
  headline,
  description,
  authorName,
  datePublished,
}: ArticleProps) {
  const title = placeholder(headline, "Your article headline");
  const body = placeholder(
    description,
    "Your article description will appear here.",
  );
  return (
    <div className="font-sans">
      <div
        className={`text-xl leading-7 ${
          title.empty
            ? "text-[#9AA0A6] dark:text-gray"
            : "text-[#1A0DAB] dark:text-[#8AB4F8]"
        }`}
      >
        {title.text}
      </div>
      <p
        className={`mt-1 line-clamp-2 text-sm leading-5 ${
          body.empty
            ? "text-[#9AA0A6] dark:text-gray"
            : "text-[#4D5156] dark:text-[#BDC1C6]"
        }`}
      >
        {body.text}
      </p>
      <div className="mt-2 text-xs text-[#70757A] dark:text-gray">
        {authorName?.trim() || "Author name"} ·{" "}
        {datePublished?.trim() || "Publication date"}
      </div>
    </div>
  );
}
function FaqPreview({ items }: FaqProps) {
  const filled = items.filter(
    (item) => item.question.trim() && item.answer.trim(),
  );
  if (!filled.length) {
    return (
      <p className="text-sm text-[#9AA0A6] dark:text-gray">
        Your FAQ accordion will appear here as you add questions.
      </p>
    );
  }
  return (
    <div className="flex flex-col gap-y-3">
      {filled.map((item, index) => (
        <details
          key={index}
          className="rounded-small border border-borderLight p-3 dark:border-border"
          open={index === 0}
        >
          <summary className="cursor-pointer text-sm font-semibold text-primary dark:text-white">
            {item.question}
          </summary>
          <p className="mt-2 text-sm text-grayLight dark:text-gray">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
function ProductPreview({
  name,
  description,
  price,
  currency,
  brand,
}: ProductProps) {
  const title = placeholder(name, "Product name");
  const body = placeholder(description, "Product description");
  return (
    <div className="flex gap-x-4">
      <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-small bg-[#F4F4F4] text-xs text-grayLight dark:bg-secondary">
        IMG
      </div>
      <div className="min-w-0">
        <div
          className={`text-base font-semibold ${
            title.empty ? "text-grayLight" : "text-primary dark:text-white"
          }`}
        >
          {title.text}
        </div>
        <div className="mt-1 text-sm text-grayLight">
          {brand?.trim() || "Brand"}
        </div>
        <div className="mt-2 text-sm font-semibold text-primary dark:text-white">
          {price?.trim() && currency?.trim()
            ? `${currency.trim()} ${price.trim()}`
            : "Price"}
        </div>
        <p className="mt-1 line-clamp-2 text-sm text-grayLight">{body.text}</p>
      </div>
    </div>
  );
}
function OrganizationPreview({ name, description, url }: OrganizationProps) {
  const title = placeholder(name, "Organization name");
  const body = placeholder(description, "Organization description");
  return (
    <div className="flex items-center gap-x-4">
      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#F4F4F4] text-xs text-grayLight dark:bg-secondary">
        LOGO
      </div>
      <div className="min-w-0">
        <div
          className={`text-lg font-semibold ${
            title.empty ? "text-grayLight" : "text-primary dark:text-white"
          }`}
        >
          {title.text}
        </div>
        <div className="truncate text-sm text-[#1A0DAB] dark:text-[#8AB4F8]">
          {url?.trim() || "https://example.com"}
        </div>
        <p className="mt-1 line-clamp-2 text-sm text-grayLight">{body.text}</p>
      </div>
    </div>
  );
}
function LocalBusinessPreview({
  name,
  description,
  telephone,
  addressLocality,
}: LocalBusinessProps) {
  const title = placeholder(name, "Business name");
  const body = placeholder(description, "Business description");
  return (
    <div>
      <div
        className={`text-lg font-semibold ${
          title.empty ? "text-grayLight" : "text-primary dark:text-white"
        }`}
      >
        {title.text}
      </div>
      <div className="mt-1 text-sm text-grayLight">
        {addressLocality?.trim() || "City"} · {telephone?.trim() || "Phone"}
      </div>
      <p className="mt-2 line-clamp-2 text-sm text-grayLight">{body.text}</p>
    </div>
  );
}
function WebsitePreview({ name, description, url, searchUrl }: WebsiteProps) {
  const title = placeholder(name, "Website name");
  const body = placeholder(description, "Website description");
  return (
    <div>
      <div
        className={`text-xl leading-7 ${
          title.empty
            ? "text-[#9AA0A6] dark:text-gray"
            : "text-[#1A0DAB] dark:text-[#8AB4F8]"
        }`}
      >
        {title.text}
      </div>
      <div className="mt-1 truncate text-sm text-[#006621] dark:text-[#5BB974]">
        {url?.trim() || "https://example.com"}
      </div>
      <p className="mt-1 line-clamp-2 text-sm text-[#4D5156] dark:text-[#BDC1C6]">
        {body.text}
      </p>
      {searchUrl?.trim() && (
        <div className="mt-4 flex items-center gap-x-2 rounded-small border border-borderLight px-3 py-2 dark:border-border">
          <span className="text-sm text-grayLight">Search</span>
          <span className="flex-1 text-sm text-[#9AA0A6] dark:text-gray">
            Search {title.text}
          </span>
        </div>
      )}
    </div>
  );
}
function RecipePreview({
  name,
  description,
  prepTime,
  cookTime,
  recipeYield,
}: RecipeProps) {
  const title = placeholder(name, "Recipe name");
  const body = placeholder(description, "Recipe description");
  return (
    <div>
      <div
        className={`text-lg font-semibold ${
          title.empty ? "text-grayLight" : "text-primary dark:text-white"
        }`}
      >
        {title.text}
      </div>
      <p className="mt-1 line-clamp-2 text-sm text-grayLight">{body.text}</p>
      <div className="mt-3 flex flex-wrap gap-x-4 text-xs text-grayLight">
        <span>Prep: {prepTime?.trim() || "PT15M"}</span>
        <span>Cook: {cookTime?.trim() || "PT30M"}</span>
        <span>Serves: {recipeYield?.trim() || "4"}</span>
      </div>
    </div>
  );
}
function EventPreview({
  name,
  description,
  startDate,
  locationName,
}: EventProps) {
  const title = placeholder(name, "Event name");
  const body = placeholder(description, "Event description");
  return (
    <div>
      <div
        className={`text-lg font-semibold ${
          title.empty ? "text-grayLight" : "text-primary dark:text-white"
        }`}
      >
        {title.text}
      </div>
      <div className="mt-1 text-sm text-grayLight">
        {startDate?.trim() || "Start date"} ·{" "}
        {locationName?.trim() || "Location"}
      </div>
      <p className="mt-2 line-clamp-2 text-sm text-grayLight">{body.text}</p>
    </div>
  );
}
function BreadcrumbPreview({ items }: BreadcrumbProps) {
  const filled = items.filter((item) => item.name.trim() && item.url.trim());
  if (!filled.length) {
    return (
      <p className="text-sm text-[#9AA0A6] dark:text-gray">
        Home › Section › Page
      </p>
    );
  }
  return (
    <div className="truncate text-sm text-[#70757A] dark:text-gray">
      {filled.map((item, index) => (
        <span key={index}>
          {index > 0 && " › "}
          <span
            className={
              index === filled.length - 1
                ? "text-primary dark:text-white"
                : "text-[#1A0DAB] dark:text-[#8AB4F8]"
            }
          >
            {item.name}
          </span>
        </span>
      ))}
    </div>
  );
}
export default function JsonLdPreview(Props: Props) {
  return (
    <div>
      <Title title="Preview" />
      <Description description="An approximation of how this schema may appear in search results. Actual rendering varies by platform." />
      <div className="customShadow mt-6 w-full rounded-lg border border-borderLight bg-white p-6 dark:border-border dark:bg-primary">
        {Props.variant === "article" && <ArticlePreview {...Props} />}
        {Props.variant === "faq" && <FaqPreview {...Props} />}
        {Props.variant === "product" && <ProductPreview {...Props} />}
        {Props.variant === "organization" && (
          <OrganizationPreview {...Props} />
        )}
        {Props.variant === "localBusiness" && (
          <LocalBusinessPreview {...Props} />
        )}
        {Props.variant === "website" && <WebsitePreview {...Props} />}
        {Props.variant === "recipe" && <RecipePreview {...Props} />}
        {Props.variant === "event" && <EventPreview {...Props} />}
        {Props.variant === "breadcrumb" && <BreadcrumbPreview {...Props} />}
      </div>
    </div>
  );
}
