import { Metadata } from "next";
import Content from "./content";
export const metadata: Metadata = {
  title: "Twitter Card Generator",
  description:
    "Twitter card generator: Create Twitter cards for your Tweets to make them more visually appealing and informative.",
  alternates: {
    canonical: "https://generateforfrontend.com/twitter-card-generator",
  },
};
export default function Page() {
  return (
    <div className="flex flex-col md:flex-col lg:flex-col lg:pl-1 lg:pr-1 xl:flex-col xl:pl-0 xl:pr-0">
      <Content />
    </div>
  );
}
