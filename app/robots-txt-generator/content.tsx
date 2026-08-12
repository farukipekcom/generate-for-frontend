"use client";
import React, { useState } from "react";
import Input from "../components/input";
import Textarea from "../components/textarea";
import Code from "../components/code";
import Output from "../components/output";
import Breadcrumbs from "../components/breadcrumbs";
import Title from "../components/title";
import Description from "../components/description";
import Section from "../components/section";
import {
  buildRobotsTxt,
  createRobotsFormDefaults,
  type RobotsBlock,
} from "../lib/robots-txt";
import { buildRobotsTxtFormats } from "../lib/robots-txt-formats";
export default function Content() {
  const [form, setForm] = useState(createRobotsFormDefaults());
  const updateBlock = (
    index: number,
    field: keyof RobotsBlock,
    value: string,
  ) => {
    setForm({
      ...form,
      blocks: form.blocks.map((block, i) =>
        i === index ? { ...block, [field]: value } : block,
      ),
    });
  };
  const robotsTxt = buildRobotsTxt(form);
  return (
    <>
      <div className="min-w-0 xl:w-1/2 xl:border-r xl:border-solid xl:border-borderLight xl:pr-5 xl:dark:border-border">
        <Breadcrumbs
          items={[
            { name: "Home", link: "/" },
            {
              name: "robots.txt",
              link: "/robots-txt-generator",
            },
          ]}
        />
        <Title title="robots.txt Generator" />
        <Description description="Create a robots.txt file that tells search engine crawlers which pages they can and cannot request. Add user-agent rules, allow and disallow paths, and sitemap URLs." />
        <div className="mt-9 flex flex-col gap-y-10">
          {form.blocks.map((block, index) => (
            <Section
              key={index}
              title={form.blocks.length > 1 ? `Rules ${index + 1}` : "Rules"}
            >
              <Input
                name={`userAgent-${index}`}
                title="User-agent"
                value={block.userAgent}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  updateBlock(index, "userAgent", event.target.value)
                }
                info="Use <b>*</b> to match all crawlers, or a specific bot name like <b>Googlebot</b>."
              />
              <Textarea
                name={`allow-${index}`}
                title="Allow"
                value={block.allow}
                onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
                  updateBlock(index, "allow", event.target.value)
                }
                info="One path per line. Example: <b>/public/</b>"
              />
              <Textarea
                name={`disallow-${index}`}
                title="Disallow"
                value={block.disallow}
                onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
                  updateBlock(index, "disallow", event.target.value)
                }
                info="One path per line. Example: <b>/admin/</b>"
              />
              <Input
                name={`crawlDelay-${index}`}
                title="Crawl-delay"
                value={block.crawlDelay}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  updateBlock(index, "crawlDelay", event.target.value)
                }
                info="Optional seconds between requests. Not all crawlers honor this."
              />
              {form.blocks.length > 1 && (
                <button
                  type="button"
                  className="text-sm font-semibold text-grayLight hover:text-primary dark:hover:text-white"
                  onClick={() =>
                    setForm({
                      ...form,
                      blocks: form.blocks.filter((_, i) => i !== index),
                    })
                  }
                >
                  Remove block
                </button>
              )}
            </Section>
          ))}
          <button
            type="button"
            className="h-10 rounded-small bg-secondary text-sm font-semibold text-white"
            onClick={() =>
              setForm({
                ...form,
                blocks: [
                  ...form.blocks,
                  {
                    userAgent: "Googlebot",
                    allow: "",
                    disallow: "",
                    crawlDelay: "",
                  },
                ],
              })
            }
          >
            Add user-agent block
          </button>
          <Section title="Sitemaps">
            <Textarea
              name="sitemaps"
              title="Sitemap URLs"
              value={form.sitemaps}
              onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
                setForm({ ...form, sitemaps: event.target.value })
              }
              info="One absolute URL per line. Example: <b>https://example.com/sitemap.xml</b>"
            />
          </Section>
        </div>
      </div>
      <Output>
        <div>
          <Title title="Preview" />
          <Description description="Plain-text robots.txt output based on your rules." />
          <pre className="customShadow mt-6 w-full overflow-x-auto rounded-lg border border-borderLight bg-white p-6 text-sm text-primary dark:border-border dark:bg-primary dark:text-white">
            {robotsTxt || "Your robots.txt will appear here as you add rules."}
          </pre>
        </div>
        <Code title="Code" formats={buildRobotsTxtFormats(form)} />
      </Output>
    </>
  );
}
