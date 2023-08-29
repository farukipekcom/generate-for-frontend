import { Metadata } from "next";
import Content from "./content";
export const metadata: Metadata = {
  title: "Summary With Large Image Card | Twitter Card Generator",
  description:
    "Twitter Summary with Large Image Card Generator: Create visually appealing Twitter cards with a large image to drive traffic to your website or blog.",
  alternates: {
    canonical: "twitter-card-generator/summary-with-large-image-card",
  },
};
export default function Page() {
  return (
    <div className="flex flex-col md:flex-col lg:flex-col lg:pl-1 lg:pr-1 xl:flex-row xl:pl-0 xl:pr-0">
      <Content />
    </div>
  );
}
