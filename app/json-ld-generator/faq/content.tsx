"use client";
import React, { useState } from "react";
import Code from "../../components/code";
import Output from "../../components/output";
import JsonLdPreview from "../../components/jsonld-preview";
import FaqFields, { type FaqItem } from "../../components/faq-fields";
import Breadcrumbs from "../../components/breadcrumbs";
import Title from "../../components/title";
import Description from "../../components/description";
import Section from "../../components/section";
import { buildFaq } from "../../lib/jsonld";
import { buildJsonLdFormats } from "../../lib/jsonld-formats";
export default function Content() {
  const [items, setItems] = useState<FaqItem[]>([
    { question: "", answer: "" },
  ]);
  const data = buildFaq(items);
  return (
    <>
      <div className="md:w-full lg:w-full xl:w-1/2 xl:border-r xl:border-solid xl:border-borderLight xl:pr-5 xl:dark:border-border">
        <Breadcrumbs
          items={[
            { name: "Home", link: "/" },
            { name: "JSON-LD", link: "/json-ld-generator" },
            { name: "FAQ", link: "/json-ld-generator/faq" },
          ]}
        />
        <Title title="FAQ Schema Generator" />
        <Description description="Generate FAQPage structured data so Google can show your questions and answers directly in search results as an expandable accordion." />
        <div className="mt-9 flex flex-col gap-y-10">
          <Section title="Questions">
            <FaqFields items={items} onChange={setItems} />
          </Section>
        </div>
      </div>
      <Output>
        <JsonLdPreview variant="faq" items={items} />
        <Code title="Code" formats={buildJsonLdFormats(data)} />
      </Output>
    </>
  );
}
