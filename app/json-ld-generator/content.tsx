"use client";
import React from "react";
import Breadcrumbs from "../components/breadcrumbs";
import Title from "../components/title";
import Description from "../components/description";
import Card from "../components/card";
import pages from "../json/pages.json";
const category = pages.find((page) => page.link === "/json-ld-generator");
export default function Content() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", link: "/" },
          { name: "JSON-LD", link: "/json-ld-generator" },
        ]}
      />
      <Title title="JSON-LD Generator" />
      <Description description="A JSON-LD generator helps you create structured data markup that search engines use for rich results. Add schema for articles, FAQs, products, organizations, local businesses, websites, recipes, events, and breadcrumb trails without writing JSON by hand." />
      <div className="pages mt-12 flex w-full flex-col gap-y-6 lg:flex-row lg:flex-wrap lg:justify-between xl:flex-row xl:gap-x-6">
        {category?.pages?.map((item) => (
          <Card
            key={item.link}
            title={item.title}
            description={item.description}
            link={item.link}
            id={item.id}
          />
        ))}
      </div>
    </>
  );
}
