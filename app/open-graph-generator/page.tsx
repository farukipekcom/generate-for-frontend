import { Metadata } from "next";
import Content from "./content";
export const metadata: Metadata = {
  title: "Open Graph Generator",
  description:
    "Generate Open Graph meta tags for social sharing on Facebook, LinkedIn, Slack, and more.",
  alternates: {
    canonical: "https://generateforfrontend.com/open-graph-generator",
  },
};
export default function Page() {
  return (
    <div className="flex flex-col md:flex-col lg:flex-col lg:pl-1 lg:pr-1 xl:flex-row xl:pl-0 xl:pr-0">
      <Content />
    </div>
  );
}
