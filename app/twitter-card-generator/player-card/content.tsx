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
    player_url: "",
    height: "",
    width: "",
    image_url: "",
    image_alt_text: "",
  });
  const handleChange = (event: any) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  const data = `<meta name="twitter:card" content="player">\n${
    form.title && `<meta name="twitter:title" content="${form.title}">\n`
  }${form.site && `<meta name="twitter:site" content="@${form.site}">\n`}${
    form.description &&
    `<meta name="twitter:description" content="${form.description}">\n`
  }${
    form.player_url &&
    `<meta name="twitter:player" content="${form.player_url}">\n`
  }${
    form.height &&
    `<meta name="twitter:player:height" content="${form.height}">\n`
  }${
    form.width && `<meta name="twitter:player:width" content="${form.width}">\n`
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
              name: "Player Card",
              link: "/twitter-card-generator/player-card",
            },
          ]}
        />
        <Title title="Player Card Generator" />
        <Description description="A Twitter Player Card Meta Tag Generator is a tool that helps you create the meta tags that are needed for Twitter Player Cards. Twitter Player Cards are rich media experiences that can be attached to Tweets, such as videos, music, and podcasts. </br></br>They can help to make your Tweets more visually appealing and informative, and they can also help to drive traffic to your content." />
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
            max={200}
          />
          <Input
            name="player_url"
            title="Player URL"
            onChange={handleChange}
            info="HTTPS URL to iFrame player. This must be a HTTPS URL which does not generate active mixed content warnings in a web browser. The audio or video player must not require plugins such as Adobe Flash."
          />
          <Input
            type="number"
            name="height"
            title="Height"
            onChange={handleChange}
            info="Height of iFrame specified in twitter:player in pixels."
          />
          <Input
            type="number"
            name="width"
            title="Width"
            onChange={handleChange}
            info="Width of iFrame specified in twitter:player in pixels."
          />
          <Input
            name="image_url"
            title="Image URL"
            onChange={handleChange}
            info="The image to be displayed in place of the player on platforms that don't support iFrames or inline players must be the same dimensions as your player. Images with fewer than 68,600 pixels (a 262x262 square image, or a 350x196 16:9 image) will cause the player card to not render. The image must be less than 5MB in size and in the JPG, PNG, WEBP, or GIF format."
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
              title: "Twitter Player Card Generator",
              description:
                "Create rich media experiences for your Tweets with embedded videos, music, and podcasts.",
              datePublished: "2023-08-28",
              dateModified: "2023-08-28",
              link: "https://generateforfrontend.com/twitter-card-generator/player-card",
              breadcrumb: [
                {
                  position: 1,
                  name: "Home",
                  item: "https://generateforfrontend.com/",
                },
                {
                  position: 2,
                  name: "Twitter Card",
                  item: "https://generateforfrontend.com/twitter-card-generator",
                },
                {
                  position: 3,
                  name: "Player Card",
                  item: "https://generateforfrontend.com/twitter-card-generator/player-card",
                },
              ],
            }),
          ),
        }}
      />
    </>
  );
}
