"use client";
import React, { useState } from "react";
import Code from "../../components/code";
import Output from "../../components/output";
import JsonLdPreview from "../../components/jsonld-preview";
import BreadcrumbFields, {
  type BreadcrumbItem,
} from "../../components/breadcrumb-fields";
import Breadcrumbs from "../../components/breadcrumbs";
import Title from "../../components/title";
import Description from "../../components/description";
import Section from "../../components/section";
import { buildBreadcrumb } from "../../lib/jsonld";
import { buildJsonLdFormats } from "../../lib/jsonld-formats";
export default function Content() {
  const [items, setItems] = useState<BreadcrumbItem[]>([
    { name: "Home", url: "https://example.com" },
    { name: "", url: "" },
  ]);
  const data = buildBreadcrumb(items);
  return (
    <>
      <div className="md:w-full lg:w-full xl:w-1/2 xl:border-r xl:border-solid xl:border-borderLight xl:pr-5 xl:dark:border-border">
        <Breadcrumbs
          items={[
            { name: "Home", link: "/" },
            { name: "JSON-LD", link: "/json-ld-generator" },
            { name: "Breadcrumb", link: "/json-ld-generator/breadcrumb" },
          ]}
        />
        <Title title="Breadcrumb Schema Generator" />
        <Description description="Generate BreadcrumbList structured data to show the page hierarchy in search results. Each item needs a name and absolute URL." />
        <div className="mt-9 flex flex-col gap-y-10">
          <Section title="Trail">
            <BreadcrumbFields items={items} onChange={setItems} />
          </Section>
        </div>
      </div>
      <Output>
        <JsonLdPreview variant="breadcrumb" items={items} />
        <Code title="Code" formats={buildJsonLdFormats(data)} />
      </Output>
    </>
  );
}
