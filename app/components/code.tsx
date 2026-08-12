"use client";
import React, { useEffect, useState } from "react";
import { createHighlighterCore, type HighlighterCore } from "shiki/core";
import { createJavaScriptRegexEngine } from "shiki/engine/javascript";
import Title from "./title";
import Description from "./description";
import type { CodeFormat } from "../lib/formats";
interface Props {
  title: string;
  formats: CodeFormat[];
}
const theme = "material-theme-palenight";
// Shared across every Code instance so the grammars and theme are only fetched once.
let highlighterPromise: Promise<HighlighterCore> | null = null;
function loadHighlighter() {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighterCore({
      themes: [import("@shikijs/themes/material-theme-palenight")],
      langs: [
        import("@shikijs/langs/html"),
        import("@shikijs/langs/typescript"),
        import("@shikijs/langs/tsx"),
        import("@shikijs/langs/json"),
        import("@shikijs/langs/css"),
      ],
      engine: createJavaScriptRegexEngine(),
    });
  }
  return highlighterPromise;
}
export default function Code(Props: Props) {
  const { title, formats } = Props;
  const [copied, setCopied] = useState(false);
  const [active, setActive] = useState(0);
  const [highlighter, setHighlighter] = useState<HighlighterCore | null>(null);

  useEffect(() => {
    let running = true;
    loadHighlighter().then((instance) => {
      if (running) setHighlighter(instance);
    });
    return () => {
      running = false;
    };
  }, []);

  const current = formats[active] ?? formats[0];
  const onClick = () => {
    navigator.clipboard.writeText(current.code);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };
  const highlighted = highlighter
    ? highlighter
        .codeToHtml(current.code, { lang: current.lang, theme })
        .replace(/\stabindex="0"/, "")
    : null;
  return (
    <div>
      <Title title={title} />
      <Description description={current.note} />
      {formats.length > 1 && (
        <div role="tablist" aria-label="Output format" className="mt-4 flex gap-x-2">
          {formats.map((format, index) => (
            <button
              key={format.id}
              type="button"
              role="tab"
              aria-selected={index === active}
              onClick={() => {
                setActive(index);
                setCopied(false);
              }}
              className={`rounded-small px-3 py-1.5 text-sm font-semibold transition-colors ${
                index === active
                  ? "bg-primary text-white dark:bg-white dark:text-primary"
                  : "bg-headerLight text-grayLight hover:bg-borderLight dark:bg-secondary dark:text-gray dark:hover:bg-border"
              }`}
            >
              {format.label}
            </button>
          ))}
        </div>
      )}
      <div
        className={`customShadow relative mt-6 w-full overflow-auto rounded-lg bg-secondary p-6 dark:bg-primary ${
          copied && "bg-zinc-900 dark:ring-1 dark:ring-green"
        }`}
      >
        {highlighted ? (
          <div dangerouslySetInnerHTML={{ __html: highlighted }} />
        ) : (
          <pre className="shiki">
            <code>{current.code}</code>
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
