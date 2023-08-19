"use client";
import React, { useState } from "react";
import Input from "../../components/input";
import Textarea from "../../components/textarea";
import Code from "../../components/code";
import Breadcrumbs from "../../components/breadcrumbs";
import Title from "../../components/title";
import Description from "../../components/description";
export default function Content() {
  const [form, setForm] = useState({
    title: "",
    site: "",
    description: "",
    player_url: "",
    width: "",
    height: "",
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
    form.width && `<meta name="twitter:player:width" content="${form.width}">\n`
  }${
    form.height &&
    `<meta name="twitter:player:height" content="${form.height}">\n`
  }${
    form.image_url &&
    `<meta name="twitter:image" content="${form.image_url}">\n`
  }${
    form.image_alt_text &&
    `<meta name="twitter:image:alt" content="${form.image_alt_text}">\n`
  }
`;

  return (
    <div className="flex">
      <div className="h-[calc(100vh-80px)] w-1/2 border-r border-solid border-borderLight p-6 dark:border-border">
        <Breadcrumbs count={2} page1="Twitter" page2="Player" />
        <Title title="Player" />
        <Description
          description={`Enhance your Twitter posts with multimedia using our Twitter Player Card Code Generator. Easily embed and share videos, audio, and media content to captivate your audience within the Twitter feed.`}
        />
        <div className="mt-6 flex flex-col gap-y-3">
          <Input name="title" title="Title" onChange={handleChange} />
          <Input
            name="site"
            title="Site"
            onChange={handleChange}
            info="The Twitter @username the card should be attributed to."
          />
          <Textarea
            name="description"
            title="Description"
            onChange={handleChange}
            max={200}
          />

          <Input name="player_url" title="Player URL" onChange={handleChange} />
          <Input
            name="width"
            title="Width (px)"
            onChange={handleChange}
            type="number"
          />
          <Input
            name="height"
            title="Height (px)"
            onChange={handleChange}
            type="number"
          />
          <Input
            name="image_url"
            title="Image URL"
            onChange={handleChange}
            info="Include a distinct URL for an image that captures your page's essence. Avoid generic visuals like logos. Optimal image ratio is 2:1, sized 300x157 up to 4096x4096 pixels."
          />
          <Textarea
            name="image_alt_text"
            title="Image Alt Text"
            onChange={handleChange}
            info="Maximum 420 characters."
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
