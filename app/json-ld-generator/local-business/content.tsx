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
import { buildLocalBusiness } from "../../lib/jsonld";
import { buildJsonLdFormats } from "../../lib/jsonld-formats";
export default function Content() {
  const [form, setForm] = useState({
    name: "",
    url: "",
    description: "",
    telephone: "",
    email: "",
    streetAddress: "",
    addressLocality: "",
    addressRegion: "",
    postalCode: "",
    addressCountry: "",
    openingHours: "",
    latitude: "",
    longitude: "",
    priceRange: "",
    image: "",
  });
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  const data = buildLocalBusiness(form);
  return (
    <>
      <div className="md:w-full lg:w-full xl:w-1/2 xl:border-r xl:border-solid xl:border-borderLight xl:pr-5 xl:dark:border-border">
        <Breadcrumbs
          items={[
            { name: "Home", link: "/" },
            { name: "JSON-LD", link: "/json-ld-generator" },
            {
              name: "Local Business",
              link: "/json-ld-generator/local-business",
            },
          ]}
        />
        <Title title="Local Business Schema Generator" />
        <Description description="Generate LocalBusiness structured data with address, contact details, hours, and geo coordinates. Helps search engines show your business in local results and maps." />
        <div className="mt-9 flex flex-col gap-y-10">
          <Section title="Business">
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
            <Textarea
              name="description"
              title="Description"
              value={form.description}
              onChange={handleChange}
            />
            <Input
              name="telephone"
              title="Telephone"
              value={form.telephone}
              onChange={handleChange}
            />
            <Input
              name="email"
              title="Email"
              value={form.email}
              onChange={handleChange}
            />
            <Input
              name="image"
              title="Image URL"
              value={form.image}
              onChange={handleChange}
            />
            <Input
              name="priceRange"
              title="Price Range"
              value={form.priceRange}
              onChange={handleChange}
              info="Use symbols like <b>$$</b> or <b>$$$</b> to indicate price level."
            />
            <Input
              name="openingHours"
              title="Opening Hours"
              value={form.openingHours}
              onChange={handleChange}
              info="Example: <b>Mo-Fr 09:00-17:00</b>"
            />
          </Section>
          <Section title="Address">
            <Input
              name="streetAddress"
              title="Street Address"
              value={form.streetAddress}
              onChange={handleChange}
            />
            <Input
              name="addressLocality"
              title="City"
              value={form.addressLocality}
              onChange={handleChange}
            />
            <Input
              name="addressRegion"
              title="State / Region"
              value={form.addressRegion}
              onChange={handleChange}
            />
            <Input
              name="postalCode"
              title="Postal Code"
              value={form.postalCode}
              onChange={handleChange}
            />
            <Input
              name="addressCountry"
              title="Country"
              value={form.addressCountry}
              onChange={handleChange}
            />
          </Section>
          <Section title="Geo Coordinates">
            <Input
              name="latitude"
              title="Latitude"
              value={form.latitude}
              onChange={handleChange}
            />
            <Input
              name="longitude"
              title="Longitude"
              value={form.longitude}
              onChange={handleChange}
            />
          </Section>
        </div>
      </div>
      <Output>
        <JsonLdPreview
          variant="localBusiness"
          name={form.name}
          description={form.description}
          telephone={form.telephone}
          addressLocality={form.addressLocality}
        />
        <Code title="Code" formats={buildJsonLdFormats(data)} />
      </Output>
    </>
  );
}
