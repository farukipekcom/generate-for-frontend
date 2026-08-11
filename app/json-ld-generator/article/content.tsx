"use client";
import React, { useState } from "react";
import Input from "../../components/input";
import Textarea from "../../components/textarea";
import Code from "../../components/code";
import Output from "../../components/output";
import JsonLdPreview from "../../components/jsonld-preview";
import Breadcrumbs from "../../components/breadcrumbs";
import Title from "../../components/title";
import Description from "../../components/description";
import Section from "../../components/section";
import PrefillUrl from "../../components/prefill-url";
import { buildArticle } from "../../lib/jsonld";
import { buildJsonLdFormats } from "../../lib/jsonld-formats";
import { mapParsedToArticleForm } from "../../lib/prefill-maps";
export default function Content() {
  const [form, setForm] = useState({
    headline: "",
    description: "",
    image: "",
    url: "",
    datePublished: "",
    dateModified: "",
    authorName: "",
    authorUrl: "",
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  const data = buildArticle(form);
  return (
    <>
      <div className="md:w-full lg:w-full xl:w-1/2 xl:border-r xl:border-solid xl:border-borderLight xl:pr-5 xl:dark:border-border">
        <Breadcrumbs
          items={[
            { name: "Home", link: "/" },
            { name: "JSON-LD", link: "/json-ld-generator" },
            { name: "Article", link: "/json-ld-generator/article" },
          ]}
        />
        <Title title="Article Schema Generator" />
        <Description description="Generate Article structured data for blog posts, news stories, and editorial content. Helps search engines show headline, author, and publication date in rich results." />
        <div className="mt-9 flex flex-col gap-y-10">
          <PrefillUrl
            onPrefill={(data) => setForm(mapParsedToArticleForm(data))}
          />
          <Section title="Article">
            <Input
              name="headline"
              title="Headline"
              value={form.headline}
              onChange={handleChange}
              max={110}
            />
            <Textarea
              name="description"
              title="Description"
              value={form.description}
              onChange={handleChange}
            />
            <Input
              name="image"
              title="Image URL"
              value={form.image}
              onChange={handleChange}
            />
            <Input
              name="url"
              title="Page URL"
              value={form.url}
              onChange={handleChange}
            />
            <Input
              name="datePublished"
              title="Date Published"
              value={form.datePublished}
              onChange={handleChange}
              info="Use ISO 8601 format, e.g. <b>2026-08-10</b> or <b>2026-08-10T12:00:00+00:00</b>."
            />
            <Input
              name="dateModified"
              title="Date Modified"
              value={form.dateModified}
              onChange={handleChange}
            />
            <Input
              name="authorName"
              title="Author Name"
              value={form.authorName}
              onChange={handleChange}
            />
            <Input
              name="authorUrl"
              title="Author URL"
              value={form.authorUrl}
              onChange={handleChange}
            />
          </Section>
        </div>
      </div>
      <Output>
        <JsonLdPreview
          variant="article"
          headline={form.headline}
          description={form.description}
          authorName={form.authorName}
          datePublished={form.datePublished}
        />
        <Code title="Code" formats={buildJsonLdFormats(data)} />
      </Output>
    </>
  );
}
