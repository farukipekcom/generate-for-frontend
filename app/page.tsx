import Card from "./components/card";
export default function Home() {
  return (
    <main className="pl-5 pr-5">
      <h1 className="mb-3 text-[30px] font-bold">Generate for Frontend</h1>
      <h2 className="mb-2 text-xl font-semibold">
        Efficient Code Generator Tool for Developers: Boost Your Productivity!
      </h2>
      <p className="mb-6 text-base font-normal">
        Generate for Frontend Tool is here to rescue you from the mundane. By
        automating the generation of code segments, templates, and patterns, we
        free you to focus on what truly matters – transforming your innovative
        ideas into reality.
      </p>
      <div className=" flex flex-wrap gap-6">
        <div className="group w-[calc(50%-12px)]">
          <Card
            title="Meta Tag Generator"
            description="Produce the most beneficial meta tags for your webpage to enhance SEO and enrich the experience for search engine users."
            link="/meta-tags"
          />
        </div>
      </div>
    </main>
  );
}
