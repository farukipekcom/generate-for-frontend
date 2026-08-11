"use client";
import React from "react";
import Breadcrumbs from "../components/breadcrumbs";
import Title from "../components/title";
import Description from "../components/description";
import Card from "../components/card";
import pages from "../json/pages.json";
const category = pages.find((page) => page.link === "/css-generator");
export default function Content() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", link: "/" },
          { name: "CSS", link: "/css-generator" },
        ]}
      />
      <Title title="CSS Generator" />
      <Description description="Visual CSS generators for common properties. Tweak values with sliders, see the result instantly, and copy the CSS or Tailwind class." />
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
