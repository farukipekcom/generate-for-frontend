import { Metadata } from "next";
import Content from "./content";
export const metadata: Metadata = {
  title: "Border Radius Generator",
  description: "Generate CSS border-radius values with per-corner control.",
  alternates: {
    canonical: "https://generateforfrontend.com/css-generator/border-radius",
  },
};
export default function Page() {
  return (
    <div className="flex flex-col md:flex-col lg:flex-col lg:pl-1 lg:pr-1 xl:flex-row xl:pl-0 xl:pr-0">
      <Content />
    </div>
  );
}
