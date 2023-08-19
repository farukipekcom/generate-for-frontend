"use client";
import React, { useState } from "react";
import Input from "../../components/input";
import Textarea from "../../components/textarea";
import Code from "../../components/code";
import Breadcrumbs from "../../components/breadcrumbs";
import Title from "../../components/title";
import Description from "../../components/description";
import Checkbox from "@/app/components/checkbox";
export default function Content() {
  const [form, setForm] = useState({
    site: "",
    description: "",
    app_name_iphone: "",
    app_url_iphone: "",
    app_id_iphone: "",
    app_name_android: "",
    app_url_android: "",
    app_id_android: "",
    app_name_ipad: "",
    app_url_ipad: "",
    app_id_ipad: "",
  });
  const [status, setStatus] = useState({
    android: "",
    iphone: "",
    ipad: "",
  });
  const handleChange = (event: any) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  const handleChangeCheckbox = (event: any) => {
    setStatus({ ...status, [event.target.name]: event.target.checked });
  };
  const data = `<meta name="twitter:card" content="app">\n${
    form.site && `<meta name="twitter:site" content="@${form.site}">\n`
  }${
    form.description &&
    `<meta name="twitter:description" content="${form.description}">\n`
  }${
    form.app_name_iphone &&
    `<meta name="twitter:app:name:iphone" content="${form.app_name_iphone}">\n`
  }${
    form.app_url_iphone &&
    `<meta name="twitter:app:url:iphone" content="${form.app_url_iphone}">\n`
  }${
    form.app_id_iphone &&
    `<meta name="twitter:app:id:iphone" content="${form.app_id_iphone}">\n`
  }${
    form.app_name_android &&
    `<meta name="twitter:app:name:googleplay" content="${form.app_name_android}">\n`
  }${
    form.app_url_android &&
    `<meta name="twitter:app:url:googleplay" content="${form.app_url_android}">\n`
  }${
    form.app_id_android &&
    `<meta name="twitter:app:id:googleplay" content="${form.app_id_android}">\n`
  }${
    form.app_name_ipad &&
    `<meta name="twitter:app:name:ipad" content="${form.app_name_ipad}">\n`
  }${
    form.app_url_ipad &&
    `<meta name="twitter:app:url:ipad" content="${form.app_url_ipad}">\n`
  }${
    form.app_id_ipad &&
    `<meta name="twitter:app:id:ipad" content="${form.app_id_ipad}">\n`
  }
`;
  return (
    <div className="flex">
      <div className="h-[calc(100vh-80px)] w-1/2 border-r border-solid border-borderLight p-6 dark:border-border">
        <Breadcrumbs count={2} page1="Twitter" page2="App" />
        <Title title="App" />
        <Description
          description={`Create personalized Twitter App Cards using our Code Generator. Drive app installations and engagement by showcasing your mobile application with captivating visuals and a clear call to action.`}
        />
        <div className="mt-6 flex flex-col gap-y-3">
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
          <div className="flex">
            <Checkbox
              name="iphone"
              title="Enable Iphone"
              onChange={handleChangeCheckbox}
            />
            <Checkbox
              name="android"
              title="Enable Android"
              onChange={handleChangeCheckbox}
            />
            <Checkbox
              name="ipad"
              title="Enable Ipad"
              onChange={handleChangeCheckbox}
            />
          </div>
          {status.iphone && (
            <div className="mt-4 flex flex-col gap-3 rounded-md bg-[#272731] p-6">
              <Input
                name="app_name_iphone"
                title="Name"
                onChange={handleChange}
              />
              <Input
                name="app_url_iphone"
                title="Url"
                onChange={handleChange}
                info="Your app’s custom URL scheme (you must include “://” after your scheme name)."
              />
              <Input
                name="app_id_iphone"
                title="ID"
                onChange={handleChange}
                info="Should be the numeric representation of your app ID in the App Store (.i.e. “307234931”)"
              />
            </div>
          )}
          {status.android && (
            <div className="mt-4 flex flex-col gap-3 rounded-md bg-[#272731] p-6">
              <Input
                name="app_name_android"
                title="Name"
                onChange={handleChange}
              />
              <Input
                name="app_url_android"
                title="Url"
                onChange={handleChange}
                info="Your app’s custom URL scheme (you must include “://” after your scheme name)."
              />
              <Input
                name="app_id_android"
                title="ID"
                onChange={handleChange}
                info="Should be the numeric representation of your app ID in Google Play (.i.e. “com.android.app”)"
              />
            </div>
          )}
          {status.ipad && (
            <div className="mt-4 flex flex-col gap-3 rounded-md bg-[#272731] p-6">
              <Input
                name="app_name_ipad"
                title="Name"
                onChange={handleChange}
              />
              <Input
                name="app_url_ipad"
                title="Url"
                onChange={handleChange}
                info="Your app’s custom URL scheme (you must include “://” after your scheme name)."
              />
              <Input
                name="app_id_ipad"
                title="ID"
                onChange={handleChange}
                info="Should be the numeric representation of your app ID in the App Store (.i.e. “307234931”)"
              />
            </div>
          )}
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
