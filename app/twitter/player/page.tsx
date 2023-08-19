import { Metadata } from "next";
import Content from "./content";
export const metadata: Metadata = {
  title: "Player - Twitter Card Generator",
  description:
    "Create impactful Player tags using our Twitter Card generator. Easily paste the generated code on your site for instant enhancement.",
};
export default function MetaTags() {
  return (
    <>
      <Content />
    </>
  );
}
