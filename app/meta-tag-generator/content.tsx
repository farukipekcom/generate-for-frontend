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
import Jsonld from "../components/jsonld";
export default function Content() {
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
  console.log(
    Jsonld({
      title: "Faruk",
      description: "Aciklama",
      datePublished: "2023-08-24",
      dateModified: "2023-08-24",
      link: "https://generateforfrontend.com/meta-tag-generator",
      breadcrumb: [
        {
          position: 1,
          name: "Home",
          item: "https://generateforfrontend.com/",
        },
        {
          position: 2,
          name: "Meta Tag Generator",
          item: "https://generateforfrontend.com/meta-tag-generator",
        },
      ],
    }),
  );

  return (
    <>
      <div className="xl:pr- md:w-full lg:w-full xl:w-1/2 xl:border-r xl:border-solid xl:border-borderLight xl:dark:border-border">
        <Breadcrumbs count={1} page1="Meta Tags" page2="Ikinci" />
        <Title title="Meta Tags Generator" />
        <Description description="A meta tags code generator is a tool that helps you create and manage the meta tags for your website. Meta tags are HTML tags that provide information about your website to search engines and other web browsers. </br></br>They can be used to improve the visibility of your website in search results, and to provide additional information about your website to visitors." />
        <div className="mt-9 flex flex-col gap-y-6">
          <Input name="title" title="Title" onChange={handleChange} max={60} />
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
              title: "Generate for Frontend",
              description:
                "A meta tags code generator is a tool that helps you create and manage the meta tags for your website.",
              datePublished: "2023-08-24",
              dateModified: "2023-08-27",
              link: "https://generateforfrontend.com/meta-tag-generator",
              breadcrumb: [
                {
                  position: 1,
                  name: "Home",
                  item: "https://generateforfrontend.com/",
                },
                {
                  position: 2,
                  name: "Meta Tag Generator",
                  item: "https://generateforfrontend.com/meta-tag-generator",
                },
              ],
            }),
          ),
        }}
      />
    </>
  );
}
