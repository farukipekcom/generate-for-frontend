import { Metadata } from "next";
import Content from "./content";
export const metadata: Metadata = {
  title: "Box Shadow Generator",
  description: "Generate CSS box-shadow values with a live visual preview.",
  alternates: {
    canonical: "https://generateforfrontend.com/css-generator/box-shadow",
  },
};
export default function Page() {
  return (
    <div className="flex flex-col md:flex-col lg:flex-col lg:pl-1 lg:pr-1 xl:flex-row xl:pl-0 xl:pr-0">
      <Content />
    </div>
  );
}
