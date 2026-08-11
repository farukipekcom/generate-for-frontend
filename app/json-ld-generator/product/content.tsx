"use client";
import React, { useState } from "react";
import Input from "../../components/input";
import Textarea from "../../components/textarea";
import Select from "../../components/select";
import Code from "../../components/code";
import Output from "../../components/output";
import JsonLdPreview from "../../components/jsonld-preview";
import Breadcrumbs from "../../components/breadcrumbs";
import Title from "../../components/title";
import Description from "../../components/description";
import Section from "../../components/section";
import productAvailability from "../../json/productAvailability.json";
import { buildProduct } from "../../lib/jsonld";
import { buildJsonLdFormats } from "../../lib/jsonld-formats";
export default function Content() {
  const [form, setForm] = useState({
    name: "",
    description: "",
    image: "",
    sku: "",
    brand: "",
    price: "",
    currency: "USD",
    availability: productAvailability[0],
  });
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  const data = buildProduct(form);
  return (
    <>
      <div className="md:w-full lg:w-full xl:w-1/2 xl:border-r xl:border-solid xl:border-borderLight xl:pr-5 xl:dark:border-border">
        <Breadcrumbs
          items={[
            { name: "Home", link: "/" },
            { name: "JSON-LD", link: "/json-ld-generator" },
            { name: "Product", link: "/json-ld-generator/product" },
          ]}
        />
        <Title title="Product Schema Generator" />
        <Description description="Generate Product structured data with name, brand, price, and availability. Helps search engines show product rich results with pricing information." />
        <div className="mt-9 flex flex-col gap-y-10">
          <Section title="Product">
            <Input
              name="name"
              title="Name"
              value={form.name}
              onChange={handleChange}
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
              name="sku"
              title="SKU"
              value={form.sku}
              onChange={handleChange}
            />
            <Input
              name="brand"
              title="Brand"
              value={form.brand}
              onChange={handleChange}
            />
            <Input
              name="price"
              title="Price"
              type="number"
              value={form.price}
              onChange={handleChange}
            />
            <Input
              name="currency"
              title="Currency"
              value={form.currency}
              onChange={handleChange}
              info="Three-letter ISO 4217 code, e.g. <b>USD</b> or <b>EUR</b>."
            />
            <Select
              name="availability"
              title="Availability"
              data={productAvailability}
              value={form.availability}
              onChange={handleChange}
            />
          </Section>
        </div>
      </div>
      <Output>
        <JsonLdPreview
          variant="product"
          name={form.name}
          description={form.description}
          price={form.price}
          currency={form.currency}
          brand={form.brand}
        />
        <Code title="Code" formats={buildJsonLdFormats(data)} />
      </Output>
    </>
  );
}
