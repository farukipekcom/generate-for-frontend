import { Metadata } from "next";
import Content from "./content";
export const metadata: Metadata = {
  title: "Gradient Generator",
  description: "Generate CSS linear and radial gradient backgrounds with live preview.",
  alternates: {
    canonical: "https://generateforfrontend.com/css-generator/gradient",
  },
};
export default function Page() {
  return (
    <div className="flex flex-col md:flex-col lg:flex-col lg:pl-1 lg:pr-1 xl:flex-row xl:pl-0 xl:pr-0">
      <Content />
    </div>
  );
}
