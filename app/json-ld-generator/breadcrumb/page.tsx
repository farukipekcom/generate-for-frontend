import { Metadata } from "next";
import Content from "./content";
export const metadata: Metadata = {
  title: "Breadcrumb Schema Generator",
  description:
    "Generate BreadcrumbList JSON-LD structured data for search result trails.",
  alternates: {
    canonical: "https://generateforfrontend.com/json-ld-generator/breadcrumb",
  },
};
export default function Page() {
  return (
    <div className="flex flex-col md:flex-col lg:flex-col lg:pl-1 lg:pr-1 xl:flex-row xl:pl-0 xl:pr-0">
      <Content />
    </div>
  );
}
