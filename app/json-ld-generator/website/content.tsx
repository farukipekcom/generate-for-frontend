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
import { buildWebSite } from "../../lib/jsonld";
import { buildJsonLdFormats } from "../../lib/jsonld-formats";
export default function Content() {
  const [form, setForm] = useState({
    name: "",
    url: "",
    description: "",
    searchUrl: "",
  });
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  const data = buildWebSite(form);
  return (
    <>
      <div className="md:w-full lg:w-full xl:w-1/2 xl:border-r xl:border-solid xl:border-borderLight xl:pr-5 xl:dark:border-border">
        <Breadcrumbs
          items={[
            { name: "Home", link: "/" },
            { name: "JSON-LD", link: "/json-ld-generator" },
            { name: "WebSite", link: "/json-ld-generator/website" },
          ]}
        />
        <Title title="WebSite Schema Generator" />
        <Description description="Generate WebSite structured data with optional sitelinks search box support. Helps search engines understand your site and show a search field in results." />
        <div className="mt-9 flex flex-col gap-y-10">
          <Section title="Website">
            <Input
              name="name"
              title="Site Name"
              value={form.name}
              onChange={handleChange}
            />
            <Input
              name="url"
              title="Website URL"
              value={form.url}
              onChange={handleChange}
            />
            <Textarea
              name="description"
              title="Description"
              value={form.description}
              onChange={handleChange}
            />
            <Input
              name="searchUrl"
              title="Search URL Template"
              value={form.searchUrl}
              onChange={handleChange}
              info="Include <b>{search_term_string}</b> as the query placeholder. Example: <b>https://example.com/search?q={search_term_string}</b>"
            />
          </Section>
        </div>
      </div>
      <Output>
        <JsonLdPreview
          variant="website"
          name={form.name}
          description={form.description}
          url={form.url}
          searchUrl={form.searchUrl}
        />
        <Code title="Code" formats={buildJsonLdFormats(data)} />
      </Output>
    </>
  );
}
