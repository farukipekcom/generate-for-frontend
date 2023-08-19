import { Metadata } from "next";
import Content from "./content";
export const metadata: Metadata = {
  title: "App - Twitter Card Generator",
  description:
    "Create impactful App tags using our Twitter Card generator. Easily paste the generated code on your site for instant enhancement.",
};
export default function MetaTags() {
  return (
    <>
      <Content />
    </>
  );
}
