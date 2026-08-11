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
import { buildOrganization } from "../../lib/jsonld";
import { buildJsonLdFormats } from "../../lib/jsonld-formats";
export default function Content() {
  const [form, setForm] = useState({
    name: "",
    url: "",
    logo: "",
    description: "",
    email: "",
    telephone: "",
    sameAs: "",
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  const data = buildOrganization(form);
  return (
    <>
      <div className="md:w-full lg:w-full xl:w-1/2 xl:border-r xl:border-solid xl:border-borderLight xl:pr-5 xl:dark:border-border">
        <Breadcrumbs
          items={[
            { name: "Home", link: "/" },
            { name: "JSON-LD", link: "/json-ld-generator" },
            { name: "Organization", link: "/json-ld-generator/organization" },
          ]}
        />
        <Title title="Organization Schema Generator" />
        <Description description="Generate Organization structured data for companies, brands, and institutions. Include logo, contact details, and social profile links." />
        <div className="mt-9 flex flex-col gap-y-10">
          <Section title="Organization">
            <Input
              name="name"
              title="Name"
              value={form.name}
              onChange={handleChange}
            />
            <Input
              name="url"
              title="Website URL"
              value={form.url}
              onChange={handleChange}
            />
            <Input
              name="logo"
              title="Logo URL"
              value={form.logo}
              onChange={handleChange}
            />
            <Textarea
              name="description"
              title="Description"
              value={form.description}
              onChange={handleChange}
            />
            <Input
              name="email"
              title="Email"
              value={form.email}
              onChange={handleChange}
            />
            <Input
              name="telephone"
              title="Telephone"
              value={form.telephone}
              onChange={handleChange}
            />
            <Textarea
              name="sameAs"
              title="Social Profile URLs"
              value={form.sameAs}
              onChange={handleChange}
              info="One URL per line. Used for official social profiles."
            />
          </Section>
        </div>
      </div>
      <Output>
        <JsonLdPreview
          variant="organization"
          name={form.name}
          description={form.description}
          url={form.url}
        />
        <Code title="Code" formats={buildJsonLdFormats(data)} />
      </Output>
    </>
  );
}
