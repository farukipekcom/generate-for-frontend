"use client";
import React, { useState } from "react";
import Input from "../components/input";
import Select from "../components/select";
import Textarea from "../components/textarea";
import Checkbox from "../components/checkbox";
import Code from "../components/code";
import Breadcrumbs from "../components/breadcrumbs";
import Title from "../components/title";
import Description from "../components/description";
import charset from "../json/charset.json";
import robots from "../json/robots.json";
export default function Content() {
  const jsonLd = [
    {
      "@context": "https://schema.org/",
      "@type": "Article",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://generateforfrontend.com/",
      },
      headline: "Generate for Frontend",
      description:
        "Produce the most beneficial meta tags for your webpage to enhance SEO and enrich the experience for search engine users.",
      image: "http://generateforfrontend.com/open-graph.jpg",
      author: {
        "@type": "Person",
        name: "Faruk Ipek",
        url: "https://farukipek.com/",
      },
      publisher: {
        "@type": "Organization",
        name: "",
        logo: {
          "@type": "ImageObject",
          url: "",
        },
      },
      datePublished: "2023-08-24",
    },
    {
      "@context": "https://schema.org/",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://generateforfrontend.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Meta Tag Generator",
          item: "https://generateforfrontend.com/meta-tag-generator",
        },
      ],
    },
  ];
  const [form, setForm] = useState({
    title: "",
    description: "",
    author: "",
    charset: charset[0],
    viewport: true,
    robots: robots[0],
  });
  const text = [
    `<title>${form.title}</title>\n`,
    `<meta name="description" content="${form.description}">\n`,
    `<meta name="author" content="${form.author}">\n`,
    `<meta charset="${form.charset}">\n`,
    `<meta name="robots" content="${form.robots}">\n`,
    `<meta name="viewport" content="width=device-width, initial-scale=1">\n`,
  ];
  const handleChange = (event: any) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  const handleChangeCheckbox = (event: any) => {
    setForm({ ...form, [event.target.name]: event.target.checked });
  };
  const data = `${form.title && text[0]}${form.description && text[1]}${
    form.author && text[2]
  }${form.charset && text[3]}${form.robots && text[4]}${
    form.viewport === true ? text[5] : ""
  }`;
  return (
    <>
      <div className="flex flex-col md:flex-col lg:flex-col xl:flex-row">
        <div className="pl-1 pr-1 md:w-full lg:w-full xl:w-1/2 xl:border-r xl:border-solid xl:border-borderLight xl:dark:border-border">
          <Breadcrumbs count={1} page1="Meta Tags" page2="Ikinci" />
          <Title title="Meta Tags Generator" />
          <Description description="A meta tags code generator is a tool that helps you create and manage the meta tags for your website. Meta tags are HTML tags that provide information about your website to search engines and other web browsers. </br></br>They can be used to improve the visibility of your website in search results, and to provide additional information about your website to visitors." />
          <div className="mt-9 flex flex-col gap-y-6">
            <Input
              name="title"
              title="Title"
              onChange={handleChange}
              max={60}
            />
            <Textarea
              name="description"
              title="Description"
              onChange={handleChange}
              max={160}
            />
            <Input name="author" title="Author" onChange={handleChange} />
            <Select
              name="charset"
              id="charset"
              title="Charset"
              data={charset}
              onChange={handleChange}
            />
            <Select
              name="robots"
              id="robots"
              title="Robots?"
              data={robots}
              onChange={handleChange}
            />
            <Checkbox
              name="viewport"
              title="Enable viewport"
              onChange={handleChangeCheckbox}
              checked={form.viewport}
            />
          </div>
        </div>
        <div className="lg:p-6 lg:pt-0 xl:mt-[28px] xl:w-1/2">
          <Title title="Code" />
          <Description
            description={
              "Insert the following code into the <b>&#60;head&#62;</b> section of your webpage."
            }
          />
          <Code data={data} />
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
