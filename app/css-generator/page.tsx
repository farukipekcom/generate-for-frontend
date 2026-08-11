import { Metadata } from "next";
import Content from "./content";
export const metadata: Metadata = {
  title: "CSS Generator",
  description:
    "Generate CSS for box shadows, gradients, border radius, and cubic-bezier easing with live previews.",
  alternates: {
    canonical: "https://generateforfrontend.com/css-generator",
  },
};
export default function Page() {
  return (
    <div className="flex flex-col md:flex-col lg:flex-col lg:pl-1 lg:pr-1 xl:flex-col xl:pl-0 xl:pr-0">
      <Content />
    </div>
  );
}
