import { Metadata } from "next";
import Content from "./content";
export const metadata: Metadata = {
  title: "Recipe Schema Generator",
  description:
    "Generate Recipe JSON-LD structured data with ingredients and instructions.",
  alternates: {
    canonical: "https://generateforfrontend.com/json-ld-generator/recipe",
  },
};
export default function Page() {
  return (
    <div className="flex flex-col md:flex-col lg:flex-col lg:pl-1 lg:pr-1 xl:flex-row xl:pl-0 xl:pr-0">
      <Content />
    </div>
  );
}
