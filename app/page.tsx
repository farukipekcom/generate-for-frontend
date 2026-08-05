import Card from "./components/card";
import Signal from "./components/icons/signal";
import TitleArrow from "./components/icons/titleArrow";
import Underline from "./components/icons/underline";
import pages from "./json/pages.json";
export default function Home() {
  return (
    <>
      <div className="hidden gap-x-2 lg:flex lg:items-center">
        <Signal />
        <h1 className="relative text-2xl font-semibold tracking-tight text-primary dark:text-white">
          Generate for Frontend
          <TitleArrow />
        </h1>
      </div>
      <h2 className="mt-4 w-full text-center text-[30px] font-bold text-primary dark:text-white sm:text-[36px] md:text-[42px] lg:mt-20 lg:text-left lg:text-[48px] xl:w-[680px] xl:text-[56px]">
        Efficient Code Generator Tool for Developers. Boost Your{" "}
        <span className="relative inline-block">
          Productivity!
          <Underline />
        </span>
      </h2>
      <p className="mt-16 w-full text-lg font-normal text-primary dark:text-white xl:w-[750px]">
        Generate code quickly and easily with our variety of tools. Whether
        you're a beginner or an experienced developer, we have the tools you
        need to get the job done. Generate for Frontend cover a wide range of
        coding needs, including meta tags, Twitter cards, CSS, HTML, and more.
        Start generating code like a pro!
      </p>
      <div className="pages mt-12 flex w-full flex-col gap-y-6 lg:flex-row lg:flex-wrap lg:justify-between xl:flex-row xl:flex-nowrap xl:gap-x-6">
        {pages.map((item) => {
          return (
            <Card
              title={item.title}
              description={item.description}
              link={item.link}
              id={item.id}
            />
          );
        })}
      </div>
      {/* <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org/",
            "@type": "WebSite",
            url: "https://generateforfrontend.com/",
            potentialAction: {
              "@type": "SearchAction",
              target: "{search_term_string}",
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      /> */}
    </>
  );
}
