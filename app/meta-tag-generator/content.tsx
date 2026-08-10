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
import Jsonld from "../components/jsonld";
import { escapeAttribute as e, escapeText as t } from "../lib/escape";
const keep = (values: (string | false | undefined)[]) =>
  values.filter((value): value is string => Boolean(value));
const section = (comment: string, values: (string | false | undefined)[]) => {
  const tags = keep(values);
  return tags.length ? [`<!-- ${comment} -->`, ...tags] : [];
};
export default function Content() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    keywords: "",
    author: "",
    canonical: "",
    charset: charset[0],
    viewport: true,
    referrer: referrer[0],
    format_detection: false,
    robots: robots[0],
    max_image_preview: imagePreview[0],
    max_snippet: "",
    noarchive: false,
    nosnippet: false,
    notranslate: false,
    noimageindex: false,
    googlebot: false,
    google_verification: "",
    bing_verification: "",
    favicon_32: "",
    favicon_16: "",
    apple_touch_icon: "",
    manifest: "",
  });
  const handleChange = (event: any) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  const handleChangeCheckbox = (event: any) => {
    setForm({ ...form, [event.target.name]: event.target.checked });
  };
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
  const data = [
    ...keep([
      form.charset && `<meta charset="${e(form.charset)}">`,
      form.viewport &&
        `<meta name="viewport" content="width=device-width, initial-scale=1">`,
      form.title && `<title>${t(form.title)}</title>`,
      form.description &&
        `<meta name="description" content="${e(form.description)}">`,
      form.keywords && `<meta name="keywords" content="${e(form.keywords)}">`,
      form.author && `<meta name="author" content="${e(form.author)}">`,
      form.canonical && `<link rel="canonical" href="${e(form.canonical)}">`,
      form.referrer !== "Not set" &&
        `<meta name="referrer" content="${e(form.referrer)}">`,
      form.format_detection &&
        `<meta name="format-detection" content="telephone=no">`,
    ]),
    ...section("Search engines", [
      directives && `<meta name="robots" content="${e(directives)}">`,
      form.googlebot &&
        directives &&
        `<meta name="googlebot" content="${e(directives)}">`,
      form.google_verification &&
        `<meta name="google-site-verification" content="${e(
          form.google_verification,
        )}">`,
      form.bing_verification &&
        `<meta name="msvalidate.01" content="${e(form.bing_verification)}">`,
    ]),
    ...section("Icons", [
      form.favicon_32 &&
        `<link rel="icon" type="image/png" sizes="32x32" href="${e(
          form.favicon_32,
        )}">`,
      form.favicon_16 &&
        `<link rel="icon" type="image/png" sizes="16x16" href="${e(
          form.favicon_16,
        )}">`,
      form.apple_touch_icon &&
        `<link rel="apple-touch-icon" sizes="180x180" href="${e(
          form.apple_touch_icon,
        )}">`,
      form.manifest && `<link rel="manifest" href="${e(form.manifest)}">`,
    ]),
  ].join("\n");
  return (
    <>
      <div className="xl: md:w-full lg:w-full xl:w-1/2 xl:border-r xl:border-solid xl:border-borderLight xl:pr-5 xl:dark:border-border">
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
          variant="google"
          title={form.title}
          description={form.description}
          url={form.canonical}
        />
        <Code
          data={data}
          title="Code"
          description={
            "Insert the following code into the <b>&#60;head&#62;</b> section of your webpage."
          }
        />
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
