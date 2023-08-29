"use client";
import React from "react";
import Breadcrumbs from "../components/breadcrumbs";
import Title from "../components/title";
import Description from "../components/description";
import pages from "../json/pages.json";
import Card from "../components/card";
export default function Content() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", link: "/" },
          {
            name: "Twitter Card",
            link: "/twitter-card-generator",
          },
        ]}
      />
      <Title title="Twitter Card Generator" />
      <Description description="A Twitter card meta tag generator is a tool that helps you create the meta tags that are needed for Twitter cards. Twitter cards are rich media experiences that can be attached to Tweets, such as images, videos, and product information. They can help to make your Tweets more visually appealing and informative, and they can also help to drive traffic to your website.</br></br>The Twitter card meta tag generator can be a valuable tool for any website owner who wants to add Twitter cards to their Tweets. It is a quick and easy way to create the meta tags that are needed, without having to learn any HTML or CSS." />
      <div className="pages mt-12 flex w-full flex-col gap-y-6 lg:flex-row lg:flex-wrap lg:justify-between xl:flex-row xl:gap-x-6">
        {pages[1].pages?.map((item, index) => {
          return (
            <Card
              title={item.title}
              description={item.description}
              link={item.link}
              id={item.id}
              key={index}
            />
          );
        })}
      </div>
    </>
  );
}
