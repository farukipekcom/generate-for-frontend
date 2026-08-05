import { Metadata } from "next";
import Content from "./content";
export const metadata: Metadata = {
  title: "App Card | Twitter Card Generator",
  description:
    "Twitter App Card Generator: Create Twitter App Cards to make your Tweets more visually appealing and informative, and drive traffic to your mobile app.",
  alternates: {
    canonical: "twitter-card-generator/app-card",
  },
};
export default function Page() {
  return (
    <div className="flex flex-col md:flex-col lg:flex-col lg:pl-1 lg:pr-1 xl:flex-row xl:pl-0 xl:pr-0">
      <Content />
    </div>
  );
}
