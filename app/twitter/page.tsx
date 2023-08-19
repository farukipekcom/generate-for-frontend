import { Metadata } from "next";
import Content from "./content";
export const metadata: Metadata = {
  title: "Twitter Card Generator",
  description:
    "Effortlessly create captivating Twitter Cards with our user-friendly Code Generator. Enhance your tweets with rich media and interactivity.",
};
export default function MetaTags() {
  return (
    <>
      <Content />
    </>
  );
}
