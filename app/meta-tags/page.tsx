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
import { usePathname, useRouter } from "next/navigation";

export default function MetaTags() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    charset: charset[0],
    viewport: true,
    robots: robots[0],
  });
  const text = [
    `<title>${form.title}</title>\n`,
    `<meta name="description" content="${form.description}">\n`,
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
    form.charset && text[2]
  }${form.robots && text[3]}${form.viewport === true ? text[4] : ""}`;
  return (
    <div className="flex">
      <div className="h-[calc(100vh-80px)] w-1/2 border-r border-solid border-borderLight p-6 dark:border-border">
        <Breadcrumbs count={1} page1="Meta Tags" page2="Ikinci" />
        <Title title="Meta Tags Generator" />
        <Description
          description={`Create effective meta tags for your webpage to enhance SEO and
          optimize the search engine browsing experience.`}
        />
        <div className="mt-6 flex flex-col gap-y-3">
          <Input name="title" title="Title" onChange={handleChange} max={60} />
          <Textarea
            name="description"
            title="Description"
            onChange={handleChange}
            max={160}
          />
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
          description={`Insert the following code into the {"<head>"} section of your webpage.`}
        />
        <Code data={data} />
      </div>
    </div>
  );
}
