import { Metadata } from "next";
import Content from "./content";
export const metadata: Metadata = {
  title: "Product Schema Generator",
  description:
    "Generate Product JSON-LD structured data with price, brand, and availability.",
  alternates: {
    canonical: "https://generateforfrontend.com/json-ld-generator/product",
  },
};
export default function Page() {
  return (
    <div className="flex flex-col md:flex-col lg:flex-col lg:pl-1 lg:pr-1 xl:flex-row xl:pl-0 xl:pr-0">
      <Content />
    </div>
  );
}
