"use client";
import React, { useState } from "react";
import Input from "../components/input";
import Select from "../components/select";
import Textarea from "../components/textarea";
import Checkbox from "../components/checkbox";
import Code from "../components/code";
import Output from "../components/output";
import Preview from "../components/preview";
import Section from "../components/section";
import Breadcrumbs from "../components/breadcrumbs";
import Title from "../components/title";
import Description from "../components/description";
import charset from "../json/charset.json";
import robots from "../json/robots.json";
import referrer from "../json/referrer.json";
import imagePreview from "../json/imagePreview.json";
import ogType from "../json/ogType.json";
import ogLocale from "../json/ogLocale.json";
import Jsonld from "../components/jsonld";
import PrefillUrl from "../components/prefill-url";
import { keep } from "../lib/tags";
import { buildFormats } from "../lib/formats";
import type { SeoDocument } from "../lib/seo";
import {
  createMetaTagFormDefaults,
  mapParsedToMetaForm,
} from "../lib/prefill-maps";
export default function Content() {
  const [form, setForm] = useState(createMetaTagFormDefaults());
  const handleChange = (event: any) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  const handleChangeCheckbox = (event: any) => {
    setForm({ ...form, [event.target.name]: event.target.checked });
  };
  // Open Graph repeats what the basic tags already say, so the shared fields
  // fall back instead of making people type everything twice.
  const ogTitle = form.og_title || form.title;
  const ogDescription = form.og_description || form.description;
  const ogUrl = form.og_url || form.canonical;
  const hasOpenGraph = Boolean(
    ogTitle || ogDescription || ogUrl || form.og_image || form.og_site_name,
  );
  const directives = keep([
    form.robots,
    form.noarchive && "noarchive",
    form.nosnippet && "nosnippet",
    form.notranslate && "notranslate",
    form.noimageindex && "noimageindex",
    form.max_image_preview !== "Not set" &&
      `max-image-preview:${form.max_image_preview}`,
    form.max_snippet && `max-snippet:${form.max_snippet}`,
  ]).join(", ");
  const doc: SeoDocument = {
    charset: form.charset,
    viewport: form.viewport,
    title: form.title,
    description: form.description,
    keywords: form.keywords,
    author: form.author,
    canonical: form.canonical,
    referrer: form.referrer !== "Not set" ? form.referrer : undefined,
    formatDetection: form.format_detection,
    robots: directives,
    googlebot: form.googlebot ? directives : undefined,
    googleVerification: form.google_verification,
    bingVerification: form.bing_verification,
    icons: {
      favicon32: form.favicon_32,
      favicon16: form.favicon_16,
      appleTouchIcon: form.apple_touch_icon,
      manifest: form.manifest,
    },
    openGraph: {
      title: ogTitle,
      type: hasOpenGraph ? form.og_type : undefined,
      url: ogUrl,
      description: ogDescription,
      siteName: form.og_site_name,
      locale:
        hasOpenGraph && form.og_locale !== "Not set"
          ? form.og_locale
          : undefined,
      image: form.og_image,
      imageAlt: form.og_image_alt,
      imageWidth: form.og_image_width,
      imageHeight: form.og_image_height,
    },
  };
  return (
    <>
      <div className="min-w-0 xl:w-1/2 xl:border-r xl:border-solid xl:border-borderLight xl:pr-5 xl:dark:border-border">
        <Breadcrumbs
          items={[
            { name: "Home", link: "/" },
            {
              name: "Meta Tags",
              link: "/meta-tag-generator",
            },
          ]}
        />
        <Title title="Meta Tags Generator" />
        <Description description="A meta tags code generator is a tool that helps you create and manage the meta tags for your website. Meta tags are HTML tags that provide information about your website to search engines and other web browsers. </br></br>They can be used to improve the visibility of your website in search results, and to provide additional information about your website to visitors." />
        <div className="mt-9 flex flex-col gap-y-10">
          <PrefillUrl onPrefill={(data) => setForm(mapParsedToMetaForm(data))} />
          <Section title="Basic">
            <Input
              name="title"
              title="Title"
              value={form.title}
              onChange={handleChange}
              max={60}
            />
            <Textarea
              name="description"
              title="Description"
              value={form.description}
              onChange={handleChange}
              max={160}
            />
            <Input
              name="keywords"
              title="Keywords"
              value={form.keywords}
              onChange={handleChange}
              info="A comma separated list of terms. Most search engines ignore this tag, but some site search tools still read it."
            />
            <Input
              name="author"
              title="Author"
              value={form.author}
              onChange={handleChange}
            />
            <Input
              name="canonical"
              title="Canonical URL"
              value={form.canonical}
              onChange={handleChange}
              info="The preferred URL for this page. Tells search engines which version to index when the same content is reachable from several addresses."
            />
          </Section>
          <Section title="Social (Open Graph)">
            <Input
              name="og_title"
              title="OG Title"
              value={form.og_title}
              onChange={handleChange}
              max={60}
              info="Shown when the page is shared on Facebook, LinkedIn, Slack, Discord, WhatsApp and iMessage. Leave empty to reuse the <b>Title</b> above."
            />
            <Textarea
              name="og_description"
              title="OG Description"
              value={form.og_description}
              onChange={handleChange}
              max={110}
              info="Leave empty to reuse the Description above. Most platforms cut this off sooner than search results do."
            />
            <Input
              name="og_url"
              title="OG URL"
              value={form.og_url}
              onChange={handleChange}
              info="The canonical address of this page as it should be shared. Leave empty to reuse the <b>Canonical URL</b> above."
            />
            <Select
              name="og_type"
              title="OG Type"
              data={ogType}
              value={form.og_type}
              onChange={handleChange}
            />
            <Input
              name="og_site_name"
              title="OG Site Name"
              value={form.og_site_name}
              onChange={handleChange}
              info="The name of the overall site, not this page. For example <b>IMDb</b>."
            />
            <Select
              name="og_locale"
              title="OG Locale"
              data={ogLocale}
              value={form.og_locale}
              onChange={handleChange}
            />
            <Input
              name="og_image"
              title="OG Image URL"
              value={form.og_image}
              onChange={handleChange}
              info="Use an absolute URL. <b>1200x630</b> is the safe size, and most platforms will not fetch images over 5MB."
            />
            <Input
              name="og_image_alt"
              title="OG Image Alt Text"
              value={form.og_image_alt}
              onChange={handleChange}
            />
            <Input
              type="number"
              name="og_image_width"
              title="OG Image Width"
              value={form.og_image_width}
              onChange={handleChange}
              info="Letting platforms know the size up front means the card renders on the first share instead of after the image is crawled."
            />
            <Input
              type="number"
              name="og_image_height"
              title="OG Image Height"
              value={form.og_image_height}
              onChange={handleChange}
            />
          </Section>
          <Section title="Document">
            <Select
              name="charset"
              title="Charset"
              data={charset}
              value={form.charset}
              onChange={handleChange}
            />
            <Select
              name="referrer"
              title="Referrer Policy"
              data={referrer}
              value={form.referrer}
              onChange={handleChange}
            />
            <div className="flex flex-col">
              <Checkbox
                name="viewport"
                title="Enable viewport"
                onChange={handleChangeCheckbox}
                checked={form.viewport}
              />
              <Checkbox
                name="format_detection"
                title="Stop iOS from turning numbers into phone links"
                onChange={handleChangeCheckbox}
                checked={form.format_detection}
              />
            </div>
          </Section>
          <Section title="Search Engines">
            <Select
              name="robots"
              title="Robots?"
              data={robots}
              value={form.robots}
              onChange={handleChange}
            />
            <Select
              name="max_image_preview"
              title="Max Image Preview"
              data={imagePreview}
              value={form.max_image_preview}
              onChange={handleChange}
            />
            <Input
              type="number"
              name="max_snippet"
              title="Max Snippet"
              value={form.max_snippet}
              onChange={handleChange}
              info="Maximum characters of this page a search engine may show as a text snippet. Use <b>-1</b> for no limit."
            />
            <div className="flex flex-col">
              <Checkbox
                name="noarchive"
                title="noarchive (do not show a cached copy)"
                onChange={handleChangeCheckbox}
                checked={form.noarchive}
              />
              <Checkbox
                name="nosnippet"
                title="nosnippet (do not show a text snippet)"
                onChange={handleChangeCheckbox}
                checked={form.nosnippet}
              />
              <Checkbox
                name="noimageindex"
                title="noimageindex (do not index images on this page)"
                onChange={handleChangeCheckbox}
                checked={form.noimageindex}
              />
              <Checkbox
                name="notranslate"
                title="notranslate (do not offer to translate this page)"
                onChange={handleChangeCheckbox}
                checked={form.notranslate}
              />
              <Checkbox
                name="googlebot"
                title="Repeat these directives in a separate googlebot tag"
                onChange={handleChangeCheckbox}
                checked={form.googlebot}
              />
            </div>
            <Input
              name="google_verification"
              title="Google Site Verification"
              value={form.google_verification}
              onChange={handleChange}
              info="The token from Google Search Console, used to prove you own the site."
            />
            <Input
              name="bing_verification"
              title="Bing Site Verification"
              value={form.bing_verification}
              onChange={handleChange}
              info="The token from Bing Webmaster Tools."
            />
          </Section>
          <Section title="Icons">
            <Input
              name="favicon_32"
              title="Favicon URL (32x32)"
              value={form.favicon_32}
              onChange={handleChange}
            />
            <Input
              name="favicon_16"
              title="Favicon URL (16x16)"
              value={form.favicon_16}
              onChange={handleChange}
            />
            <Input
              name="apple_touch_icon"
              title="Apple Touch Icon URL (180x180)"
              value={form.apple_touch_icon}
              onChange={handleChange}
              info="Used when someone adds your site to the home screen on iOS."
            />
            <Input
              name="manifest"
              title="Web App Manifest URL"
              value={form.manifest}
              onChange={handleChange}
              info="Usually <b>/site.webmanifest</b>. Describes your site when it is installed as an app."
            />
          </Section>
        </div>
      </div>
      <Output>
        <Preview
          items={[
            {
              variant: "google",
              title: form.title,
              description: form.description,
              url: form.canonical,
            },
            {
              variant: "og",
              title: ogTitle,
              description: ogDescription,
              url: ogUrl,
              imageUrl: form.og_image,
              imageAlt: form.og_image_alt,
            },
          ]}
        />
        <Code title="Code" formats={buildFormats(doc)} />
      </Output>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            Jsonld({
              title: "Generate for Frontend",
              description:
                "A meta tags code generator is a tool that helps you create and manage the meta tags for your website.",
              datePublished: "2023-08-24",
              dateModified: "2023-08-27",
              link: "https://generateforfrontend.com/meta-tag-generator",
              breadcrumb: [
                {
                  position: 1,
                  name: "Home",
                  item: "https://generateforfrontend.com/",
                },
                {
                  position: 2,
                  name: "Meta Tag Generator",
                  item: "https://generateforfrontend.com/meta-tag-generator",
                },
              ],
            }),
          ),
        }}
      />
    </>
  );
}
