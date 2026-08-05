"use client";
import React, { useEffect, useState } from "react";
import { createHighlighterCore, type HighlighterCore } from "shiki/core";
import { createJavaScriptRegexEngine } from "shiki/engine/javascript";
import Title from "./title";
import Description from "./description";
interface Props {
  data: string;
  title: string;
  description: string;
}
const theme = "material-theme-palenight";
// Shared across every Code instance so the grammar and theme are only fetched once.
let highlighterPromise: Promise<HighlighterCore> | null = null;
function loadHighlighter() {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighterCore({
      themes: [import("@shikijs/themes/material-theme-palenight")],
      langs: [import("@shikijs/langs/html")],
      engine: createJavaScriptRegexEngine(),
    });
  }
  return highlighterPromise;
}
export default function Code(Props: Props) {
  const { data, title, description } = Props;
  const [copied, setCopied] = useState<Boolean>(false);
  const [highlighter, setHighlighter] = useState<HighlighterCore | null>(null);

  useEffect(() => {
    let active = true;
    loadHighlighter().then((instance) => {
      if (active) setHighlighter(instance);
    });
    return () => {
      active = false;
    };
  }, []);

  const onClick = () => {
    navigator.clipboard.writeText(data);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };
  const highlighted = highlighter
    ? highlighter.codeToHtml(data, { lang: "html", theme })
    : null;
  return (
    <div className="h-max xl:sticky xl:top-0 xl:mt-[28px] xl:w-1/2 xl:pl-5 xl:pr-5 xl:pt-0">
      <Title title={title} />
      <Description description={description} />
      <div
        className={`customShadow relative mt-6 w-full overflow-auto rounded-lg bg-secondary p-6 dark:bg-primary ${
          copied && "bg-zinc-900 dark:ring-1 dark:ring-green"
        }`}
      >
        {highlighted ? (
          <div dangerouslySetInnerHTML={{ __html: highlighted }} />
        ) : (
          <pre className="shiki">
            <code>{data}</code>
          </pre>
        )}
        <button
          className="absolute right-3 top-2 text-sm font-extrabold text-green"
          onClick={onClick}
        >
          {copied === true ? "Copied" : "Copy"}
        </button>
      </div>
    </div>
  );
}
