import { Metadata } from "next";
import Content from "./content";
export const metadata: Metadata = {
  title: "robots.txt Generator",
  description:
    "Generate a robots.txt file with user-agent rules, allow and disallow paths, and sitemap URLs.",
  alternates: {
    canonical: "https://generateforfrontend.com/robots-txt-generator",
  },
};
export default function Page() {
  return (
    <div className="flex flex-col md:flex-col lg:flex-col lg:pl-1 lg:pr-1 xl:flex-row xl:pl-0 xl:pr-0">
      <Content />
    </div>
  );
}
