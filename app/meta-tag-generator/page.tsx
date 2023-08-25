import { Metadata } from "next";
import Content from "./content";
export const metadata: Metadata = {
  title: "Meta Tag Generator",
  description:
    "Create precise meta tags with our Meta Tags Generator for optimal SEO impact. Enhance meta descriptions and titles effortlessly.",
};
export default function MetaTags() {
  return (
    <>
      <Content />
    </>
  );
}
