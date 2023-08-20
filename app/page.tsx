import Card from "./components/card";
export default function Home() {
  return (
    <main className="p-6">
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
