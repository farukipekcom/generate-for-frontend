"use client";
import React, { useState } from "react";
import Input from "../../components/input";
import Textarea from "../../components/textarea";
import Code from "../../components/code";
import Breadcrumbs from "../../components/breadcrumbs";
import Title from "../../components/title";
import Description from "../../components/description";
import Jsonld from "../../components/jsonld";
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
  const data = `<meta name="twitter:card" content="summary">\n${
    form.title && `<meta name="twitter:title" content="${form.title}">\n`
  }${form.site && `<meta name="twitter:site" content="@${form.site}">\n`}${
    form.description &&
    `<meta name="twitter:description" content="${form.description}">\n`
  }${
    form.image_url &&
    `<meta name="twitter:image" content="${form.image_url}">\n`
  }${
    form.image_alt_text &&
    `<meta name="twitter:image:alt" content="${form.image_alt_text}">\n`
  }`;
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
              name: "Summary Card",
              link: "/twitter-card-generator/summary-card",
            },
          ]}
        />
        <Title title="Summary Card Generator" />
        <Description description="A Twitter Summary Card Meta Tag Generator is a tool that helps you create the meta tags that are needed for Twitter Summary Cards. Twitter Summary Cards are a type of Twitter card that can be used to display a title, description, and image when your content is shared on Twitter. </br></br>They can help to make your Tweets more visually appealing and informative, and they can also help to drive traffic to your website or blog." />
        <div className="mt-9 flex flex-col gap-y-6">
          <Input name="title" title="Title" onChange={handleChange} />
          <Input
            name="site"
            title="Site"
            onChange={handleChange}
            info="The Twitter <b>@username</b> the card should be attributed to."
          />
          <Textarea
            name="description"
            title="Description"
            onChange={handleChange}
          />
          <Input
            name="image_url"
            title="Image URL"
            onChange={handleChange}
            info="Images for this Card should have an aspect ratio of 2:1 and a minimum size of 300x157 pixels or a maximum size of 4096x4096 pixels. They must also be less than 5MB in size and in the JPG, PNG, WEBP, or GIF format."
          />
          <Textarea
            name="image_alt_text"
            title="Image Alt Text"
            onChange={handleChange}
            max={420}
          />
        </div>
      </div>
      <Code
        data={data}
        title="Code"
        description={
          "Insert the following code into the <b>&#60;head&#62;</b> section of your webpage."
        }
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            Jsonld({
              title: "Twitter Summary Card Generator",
              description:
                "Create attractive and informative Twitter cards to drive traffic to your website or blog.",
              datePublished: "2023-08-28",
              dateModified: "2023-08-28",
              link: "https://generateforfrontend.com/twitter-card-generator/summary-card",
              breadcrumb: [
                {
                  position: 1,
                  name: "Home",
                  item: "https://generateforfrontend.com/",
                },
                {
                  position: 2,
                  name: "Twitter Card",
                  item: "https://generateforfrontend.com/meta-tag-generator",
                },
                {
                  position: 3,
                  name: "Summary Card",
                  item: "https://generateforfrontend.com/twitter-card-generator/summary-card",
                },
              ],
            }),
          ),
        }}
      />
    </>
  );
}
