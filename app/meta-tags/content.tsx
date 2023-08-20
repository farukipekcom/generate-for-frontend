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
    <div className="flex">
      <div className="h-[calc(100vh-80px)] w-1/2 border-r border-solid border-borderLight p-6 dark:border-border">
        <Breadcrumbs count={1} page1="Meta Tags" page2="Ikinci" />
        <Title title="Meta Tags Generator" />
        <Description description="The Meta Tags Generator is a powerful tool designed for developers seeking to enhance their website's online presence. By effortlessly creating custom meta tags, including meta descriptions and meta titles, this generator empowers you to optimize your web pages for better search engine visibility. Elevate your SEO strategy with accurate and tailored meta tags, provided by our user-friendly Meta Tags Generator. Boost your website's performance and capture your audience's attention effectively." />
        <div className="mt-6 flex flex-col gap-y-3">
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
      <div className="h-full w-1/2 p-6">
        <Title title="Code" />
        <Description
          description={
            "Insert the following code into the <b>&#60;head&#62;</b> section of your webpage."
          }
        />
        <Code data={data} />
      </div>
    </div>
  );
}
