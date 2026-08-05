import { Metadata } from "next";
import Content from "./content";
export const metadata: Metadata = {
  title: "Player Card | Twitter Card Generator",
  description:
    "Player Card Generator: Create rich media experiences for your Tweets with embedded videos, music, and podcasts.",
  alternates: {
    canonical: "twitter-card-generator/player-card",
  },
};
export default function Page() {
  return (
    <div className="flex flex-col md:flex-col lg:flex-col lg:pl-1 lg:pr-1 xl:flex-row xl:pl-0 xl:pr-0">
      <Content />
    </div>
  );
}
