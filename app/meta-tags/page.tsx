"use client";
import React from "react";
import Input from "../components/input";
import Select from "../components/select";
import Textarea from "../components/textarea";
import Checkbox from "../components/checkbox";
export default function MetaTags() {
  return (
    <div className="flex ">
      <div className="w-1/2 border-r border-solid border-borderLight p-6 dark:border-border">
        <div className="flex gap-x-2 text-sm font-medium text-[#495466] dark:text-secondary">
          <span>Home</span>
          <span>{">"}</span>
          <span className="text-primary dark:text-secondary">Meta Tags</span>
        </div>
        <div className="mt-2 text-[28px] font-bold text-primary dark:text-white">
          Meta Tags Generator
        </div>
        <div className="mt-3 text-base font-medium text-primary dark:text-white">
          Create effective meta tags for your webpage to enhance SEO and
          optimize the search engine browsing experience.
        </div>
        <div className="mt-6 flex flex-col gap-y-3">
          <Input name="title" title="Title" max={60} />
          {/* <Select title="Charset" data={data} /> */}
          <Textarea name="description" title="Description" />
          <Checkbox name="name" title="Enable viewport" />
        </div>
      </div>
      <div className="h-full w-1/2 p-6">
        <div className="mt-2 text-[28px] font-bold text-primary dark:text-white">
          Code
        </div>
        <div className="mt-3 text-base font-medium text-primary dark:text-white">
          Insert the following code into the {"<head>"} section of your webpage.
        </div>
      </div>
    </div>
  );
}
