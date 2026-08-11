import { Metadata } from "next";
import Content from "./content";
export const metadata: Metadata = {
  title: "Article Schema Generator",
  description:
    "Generate Article JSON-LD structured data for blog posts and news content.",
  alternates: {
    canonical: "https://generateforfrontend.com/json-ld-generator/article",
  },
};
export default function Page() {
  return (
    <div className="flex flex-col md:flex-col lg:flex-col lg:pl-1 lg:pr-1 xl:flex-row xl:pl-0 xl:pr-0">
      <Content />
    </div>
  );
}
