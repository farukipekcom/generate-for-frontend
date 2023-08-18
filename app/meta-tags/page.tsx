import { Metadata } from "next";
import Content from "./content";
export const metadata: Metadata = {
  title: "Meta Tags Generator",
  description:
    "Create effective meta tags for your webpage to enhance SEO and optimize the search engine browsing experience.",
};
export default function MetaTags() {
  return (
    <>
      <Content />
    </>
  );
}
