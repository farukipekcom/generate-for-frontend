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
    site: "",
    description: "",
    app_name: "",
    iphone_app_id: "",
    ipad_app_id: "",
    google_play_app_id: "",
    country: "",
  });
  const handleChange = (event: any) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  const handleChangeCheckbox = (event: any) => {
    setForm({ ...form, [event.target.name]: event.target.checked });
  };
  const data = `<meta name="twitter:card" content="app">\n${
    form.site && `<meta name="twitter:site" content="@${form.site}">\n`
  }${
    form.description &&
    `<meta name="twitter:description" content="${form.description}">\n`
  }
<!-- Iphone -->
${
  form.app_name &&
  `<meta name="twitter:app:name:iphone" content="${form.app_name}">\n`
}${
    form.iphone_app_id &&
    `<meta name="twitter:app:id:iphone" content="${form.iphone_app_id}">\n`
  }
<!-- Ipad --> 
${
  form.app_name &&
  `<meta name="twitter:app:name:ipad" content="${form.app_name}">\n`
}${
    form.ipad_app_id &&
    `<meta name="twitter:app:id:ipad" content="${form.ipad_app_id}">\n`
  }
<!-- Google Play --> 
${
  form.app_name &&
  `<meta name="twitter:app:name:googleplay" content="${form.app_name}">\n`
}${
    form.google_play_app_id &&
    `<meta name="twitter:app:id:googleplay" content="${form.google_play_app_id}">\n`
  }
${
  form.country &&
  `<meta name="twitter:app:country" content="${form.country}">\n`
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
              name: "App Card",
              link: "/twitter-card-generator/app-card",
            },
          ]}
        />
        <Title title="App Card Generator" />
        <Description description="A Twitter App Card Meta Tag Generator is a tool that helps you create the meta tags that are needed for Twitter App Cards. </br></br>Twitter App Cards are rich media experiences that can be attached to Tweets, such as images, videos, and product information. They can help to make your Tweets more visually appealing and informative, and they can also help to drive traffic to your mobile app." />
        <div className="mt-9 flex flex-col gap-y-6">
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
          <Input name="app_name" title="App Name" onChange={handleChange} />
          <Input
            name="iphone_app_id"
            title="iPhone App ID"
            onChange={handleChange}
            info="Should be the numeric representation of your app ID in the App Store (.i.e. “307234931”)"
          />
          <Input
            name="ipad_app_id"
            title="iPad App ID"
            onChange={handleChange}
            info="Should be the numeric representation of your app ID in the App Store (.i.e. “307234931”)"
          />
          <Input
            name="google_play_app_id"
            title="Google Play App ID"
            onChange={handleChange}
            info="Should be the numeric representation of your app ID in the Google Play (.i.e. “com.android.app”)"
          />
          <Input
            name="country"
            title="App Country (If Not Available in US App Store):"
            onChange={handleChange}
            info="If your application is not available in the US App Store, you must set this value to the two-letter country code for the App Store that contains your application."
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
              title: "Twitter App Card Generator",
              description:
                "Create Twitter App Cards to make your Tweets more visually appealing and informative, and drive traffic to your mobile app.",
              datePublished: "2023-08-28",
              dateModified: "2023-08-28",
              link: "https://generateforfrontend.com/twitter-card-generator/app-card",
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
                  name: "App Card",
                  item: "https://generateforfrontend.com//twitter-card-generator/app-card",
                },
              ],
            }),
          ),
        }}
      />
    </>
  );
}
