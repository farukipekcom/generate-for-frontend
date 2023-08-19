import React from "react";
import Title from "../components/title";
import Breadcrumbs from "../components/breadcrumbs";
import Description from "../components/description";
import Link from "next/link";
export default function Content() {
  return (
    <div className="flex flex-col p-6">
      <div className="w-full">
        <Breadcrumbs count={1} page1="Twitter" />
        <Title title="Twitter Card Generator" />
        <Description
          description={`Unlock the power of Twitter Card engagement with our easy-to-use Code Generator. Elevate your tweets by adding rich media, links, and interactive content to stand out in users' feeds.`}
        />
      </div>
      <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:flex-wrap">
        <Link
          href="/twitter/app"
          className="rounded-md bg-[#272731] p-6 lg:w-[calc(50%-12px)] xl:h-52"
        >
          <div className="text-xl font-semibold">App</div>
          <hr className="my-4 h-px border-0 bg-gray-200 dark:bg-gray-700" />
          <div className="mt-3 text-gray-200">
            Create personalized Twitter App Cards using our Code Generator.
            Drive app installations and engagement by showcasing your mobile
            application with captivating visuals and a clear call to action.
          </div>
        </Link>
        <Link
          href="/twitter/player"
          className="rounded-md bg-[#272731] p-6 lg:w-[calc(50%-12px)] xl:h-52"
        >
          <div className="text-xl font-semibold">Player</div>
          <hr className="my-4 h-px border-0 bg-gray-200 dark:bg-gray-700" />
          <div className="mt-3 text-gray-200">
            Enhance your Twitter posts with multimedia using our Twitter Player
            Card Code Generator. Easily embed and share videos, audio, and media
            content to captivate your audience within the Twitter feed.
          </div>
        </Link>
        <Link
          href="/twitter/summary"
          className="rounded-md bg-[#272731] p-6 lg:w-[calc(50%-12px)] xl:h-52"
        >
          <div className="text-xl font-semibold">Summary</div>
          <hr className="my-4 h-px border-0 bg-gray-200 dark:bg-gray-700" />
          <div className="mt-3 text-gray-200">
            Craft compelling Twitter Summary Cards effortlessly with our Code
            Generator. Elevate your tweet previews by adding concise and
            engaging snippets that entice users to explore your content further.
          </div>
        </Link>
        <Link
          href="/twitter/summary-card-with-large-image"
          className="rounded-md bg-[#272731] p-6 lg:w-[calc(50%-12px)] xl:h-52"
        >
          <div className="text-xl font-semibold">
            Summary Card With Large Image
          </div>
          <hr className="my-4 h-px border-0 bg-gray-200 dark:bg-gray-700" />
          <div className="mt-3 text-gray-200">
            Effortlessly generate Twitter Summary Cards with Large Image using
            our intuitive Code Generator. Elevate your tweets with captivating
            visuals and seamlessly integrate them into your content strategy.
          </div>
        </Link>
      </div>
    </div>
  );
}
