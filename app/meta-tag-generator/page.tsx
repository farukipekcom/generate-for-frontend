import { Metadata } from "next";
import Content from "./content";
export const metadata: Metadata = {
  title: "Meta Tag Generator",
  description:
    "Create precise meta tags with our Meta Tags Generator for optimal SEO impact. Enhance meta descriptions and titles effortlessly.",
  alternates: {
    canonical: "https://generateforfrontend.com/meta-tag-generator",
  },
};
export default function MetaTags() {
  return (
    <div className="flex flex-col md:flex-col lg:flex-col lg:pl-1 lg:pr-1 xl:flex-row xl:pl-0 xl:pr-0">
      <Content />
    </div>
  );
}
