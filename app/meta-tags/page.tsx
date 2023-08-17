"use client";
import React, { useState } from "react";
import Input from "../components/input";
import Select from "../components/select";
import Textarea from "../components/textarea";
import Checkbox from "../components/checkbox";
import Code from "../components/code";
import Breadcrumbs from "../components/breadcrumbs";
export default function MetaTags() {
  const [form, setForm] = useState({
    title: "",
  });
  const handleChange = (event: any) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  const data = `${
    form.title.length > 0 ? `<title>${form.title}</title>` + `\n` : ``
  }`;
  console.log(form);
  return (
    <div className="flex ">
      <div className="h-[calc(100vh-80px)] w-1/2 border-r border-solid border-borderLight p-6 dark:border-border">
        <Breadcrumbs />
        <div className="mt-2 text-[28px] font-bold text-primary dark:text-white">
          Meta Tags Generator
        </div>
        <div className="mt-3 text-base font-medium text-primary dark:text-white">
          Create effective meta tags for your webpage to enhance SEO and
          optimize the search engine browsing experience.
        </div>
        <div className="mt-6 flex flex-col gap-y-3">
          <Input name="title" title="Title" onChange={handleChange} max={60} />
          {/* <Select title="Charset" data={data} /> */}
          {/* <Textarea name="description" title="Description" /> */}
          {/* <Checkbox name="name" title="Enable viewport" /> */}
        </div>
      </div>
      <div className="h-full w-1/2 p-6">
        <div className="mt-2 text-[28px] font-bold text-primary dark:text-white">
          Code
        </div>
        <div className="mt-3 text-base font-medium text-primary dark:text-white">
          Insert the following code into the {"<head>"} section of your webpage.
        </div>
        <div className="relative mt-6 rounded-lg bg-[#272731] p-6">
          <Code data={data} />
        </div>
      </div>
    </div>
  );
}
