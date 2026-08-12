"use client";
import React, { useState } from "react";
import Input from "../components/input";
import Select from "../components/select";
import Textarea from "../components/textarea";
import Code from "../components/code";
import Output from "../components/output";
import Preview from "../components/preview";
import Section from "../components/section";
import Breadcrumbs from "../components/breadcrumbs";
import Title from "../components/title";
import Description from "../components/description";
import PrefillUrl from "../components/prefill-url";
import ogType from "../json/ogType.json";
import ogLocale from "../json/ogLocale.json";
import { buildFormats } from "../lib/formats";
import type { SeoDocument } from "../lib/seo";
import {
  createOpenGraphFormDefaults,
  mapParsedToOpenGraphForm,
} from "../lib/prefill-maps";
export default function Content() {
  const [form, setForm] = useState(createOpenGraphFormDefaults());
  const handleChange = (event: any) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  const ogTitle = form.og_title || form.title;
  const ogDescription = form.og_description || form.description;
  const ogUrl = form.og_url || form.canonical;
  const hasOpenGraph = Boolean(
    ogTitle || ogDescription || ogUrl || form.og_image || form.og_site_name,
  );
  const doc: SeoDocument = {
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
              name: "Open Graph",
              link: "/open-graph-generator",
            },
          ]}
        />
        <Title title="Open Graph Generator" />
        <Description description="Create Open Graph meta tags for Facebook, LinkedIn, Slack, Discord, WhatsApp, and iMessage. Fill in the fields below and copy the generated tags into your page head." />
        <div className="mt-9 flex flex-col gap-y-10">
          <PrefillUrl
            onPrefill={(data) => setForm(mapParsedToOpenGraphForm(data))}
          />
          <Section title="Fallbacks">
            <Input
              name="title"
              title="Title"
              value={form.title}
              onChange={handleChange}
              max={60}
              info="Used as the default <b>og:title</b> when OG Title is left empty."
            />
            <Textarea
              name="description"
              title="Description"
              value={form.description}
              onChange={handleChange}
              max={160}
              info="Used as the default <b>og:description</b> when OG Description is left empty."
            />
            <Input
              name="canonical"
              title="Canonical URL"
              value={form.canonical}
              onChange={handleChange}
              info="Used as the default <b>og:url</b> when OG URL is left empty."
            />
          </Section>
          <Section title="Open Graph">
            <Input
              name="og_title"
              title="OG Title"
              value={form.og_title}
              onChange={handleChange}
              max={60}
            />
            <Textarea
              name="og_description"
              title="OG Description"
              value={form.og_description}
              onChange={handleChange}
              max={110}
            />
            <Input
              name="og_url"
              title="OG URL"
              value={form.og_url}
              onChange={handleChange}
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
              info="Use an absolute URL. <b>1200x630</b> is the safe size."
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
            />
            <Input
              type="number"
              name="og_image_height"
              title="OG Image Height"
              value={form.og_image_height}
              onChange={handleChange}
            />
          </Section>
        </div>
      </div>
      <Output>
        <Preview
          items={[
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
    </>
  );
}
