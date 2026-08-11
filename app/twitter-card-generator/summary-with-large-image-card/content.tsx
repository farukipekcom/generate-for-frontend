"use client";
import React, { useState } from "react";
import Input from "../../components/input";
import Textarea from "../../components/textarea";
import Code from "../../components/code";
import Output from "../../components/output";
import Preview from "../../components/preview";
import Breadcrumbs from "../../components/breadcrumbs";
import Title from "../../components/title";
import Description from "../../components/description";
import Jsonld from "../../components/jsonld";
import PrefillUrl from "../../components/prefill-url";
import { buildFormats } from "../../lib/formats";
import type { SeoDocument } from "../../lib/seo";
import { mapParsedToTwitterForm } from "../../lib/prefill-maps";
export default function Content() {
  const [form, setForm] = useState({
    title: "",
    site: "",
    description: "",
    image_url: "",
    image_alt_text: "",
  });
  const handleChange = (event: any) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  // X reads these, but nothing else does. The Open Graph copies are what make
  // the link unfurl on Facebook, LinkedIn, Slack, Discord, WhatsApp and iMessage.
  const hasOpenGraph = Boolean(
    form.title || form.description || form.image_url,
  );
  const doc: SeoDocument = {
    twitter: {
      card: "summary_large_image",
      title: form.title,
      site: form.site,
      description: form.description,
      image: form.image_url,
      imageAlt: form.image_alt_text,
    },
    openGraph: {
      title: form.title,
      type: hasOpenGraph ? "website" : undefined,
      description: form.description,
      image: form.image_url,
      imageAlt: form.image_alt_text,
    },
  };
  return (
    <>
      <div className="md:w-full lg:w-full xl:w-1/2 xl:border-r xl:border-solid xl:border-borderLight xl:pr-5 xl:dark:border-border">
        <Breadcrumbs
          items={[
            { name: "Home", link: "/" },
            {
              name: "Twitter Card",
              link: "/twitter-card-generator",
            },
            {
              name: "Summary with Large Image Card",
              link: "/twitter-card-generator/summary-with-large-image-card",
            },
          ]}
        />
        <Title title="Summary with Large Image Card Generator" />
        <Description description="A Twitter Summary with Large Image Card Meta Tag Generator is a tool that helps you create the meta tags that are needed for Twitter Summary with Large Image Cards. Twitter Summary with Large Image Cards are a type of Twitter card that can be used to display a title, description, and large image when your content is shared on Twitter. </br></br>They can help to make your Tweets more visually appealing and informative, and they can also help to drive traffic to your website or blog." />
        <div className="mt-9 flex flex-col gap-y-6">
          <PrefillUrl
            onPrefill={(data) =>
              setForm((current) => ({
                ...current,
                ...mapParsedToTwitterForm(data),
              }))
            }
          />
          <Input
            name="title"
            title="Title"
            value={form.title}
            onChange={handleChange}
          />
          <Input
            name="site"
            title="Site"
            value={form.site}
            onChange={handleChange}
            info="The Twitter <b>@username</b> the card should be attributed to."
          />
          <Textarea
            name="description"
            title="Description"
            value={form.description}
            onChange={handleChange}
            max={200}
          />
          <Input
            name="image_url"
            title="Image URL"
            value={form.image_url}
            onChange={handleChange}
            info="Images for this Card should have an aspect ratio of 2:1 and a minimum size of 300x157 pixels or a maximum size of 4096x4096 pixels. They must also be less than 5MB in size and in the JPG, PNG, WEBP, or GIF format."
          />
          <Textarea
            name="image_alt_text"
            title="Image Alt Text"
            value={form.image_alt_text}
            onChange={handleChange}
            max={400}
          />
        </div>
      </div>
      <Output>
        <Preview
          items={[
            {
              variant: "summary_large_image",
              title: form.title,
              description: form.description,
              site: form.site,
              imageUrl: form.image_url,
              imageAlt: form.image_alt_text,
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
              title: "Twitter Summary With Large Image Card Generator",
              description:
                "Create visually appealing Twitter cards with a large image to drive traffic to your website or blog.",
              datePublished: "2023-08-28",
              dateModified: "2023-08-28",
              link: "https://generateforfrontend.com/twitter-card-generator/summary-with-large-image-card",
              breadcrumb: [
                {
                  position: 1,
                  name: "Home",
                  item: "https://generateforfrontend.com/",
                },
                {
                  position: 2,
                  name: "Twitter Card",
                  item: "https://generateforfrontend.com/twitter-card-generator",
                },
                {
                  position: 3,
                  name: "Summary With Large Image",
                  item: "https://generateforfrontend.com/twitter-card-generator/summary-with-large-image-card",
                },
              ],
            }),
          ),
        }}
      />
    </>
  );
}
