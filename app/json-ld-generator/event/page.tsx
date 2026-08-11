import { Metadata } from "next";
import Content from "./content";
export const metadata: Metadata = {
  title: "Event Schema Generator",
  description:
    "Generate Event JSON-LD structured data with dates, location, and status.",
  alternates: {
    canonical: "https://generateforfrontend.com/json-ld-generator/event",
  },
};
export default function Page() {
  return (
    <div className="flex flex-col md:flex-col lg:flex-col lg:pl-1 lg:pr-1 xl:flex-row xl:pl-0 xl:pr-0">
      <Content />
    </div>
  );
}
