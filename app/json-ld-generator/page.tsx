import { Metadata } from "next";
import Content from "./content";
export const metadata: Metadata = {
  title: "JSON-LD Generator",
  description:
    "Generate structured data markup for Article, FAQ, Product, Organization, Recipe, Event, and Breadcrumb schemas.",
  alternates: {
    canonical: "https://generateforfrontend.com/json-ld-generator",
  },
};
export default function Page() {
  return (
    <div className="flex flex-col md:flex-col lg:flex-col lg:pl-1 lg:pr-1 xl:flex-col xl:pl-0 xl:pr-0">
      <Content />
    </div>
  );
}
