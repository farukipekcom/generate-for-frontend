import { Metadata } from "next";
import Content from "./content";
export const metadata: Metadata = {
  title: "Cubic Bezier Generator",
  description:
    "Generate CSS cubic-bezier easing curves with an interactive preview.",
  alternates: {
    canonical: "https://generateforfrontend.com/css-generator/cubic-bezier",
  },
};
export default function Page() {
  return (
    <div className="flex flex-col md:flex-col lg:flex-col lg:pl-1 lg:pr-1 xl:flex-row xl:pl-0 xl:pr-0">
      <Content />
    </div>
  );
}
