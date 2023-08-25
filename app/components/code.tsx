import React, { useState } from "react";

import Highlight from "react-highlight";
interface Props {
  data: string;
}
export default function Code(Props: Props) {
  const { data } = Props;
  const [copied, setCopied] = useState<Boolean>(false);

  const onClick = () => {
    navigator.clipboard.writeText(data);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };
  return (
    <div
      className={`customShadow relative mt-6 overflow-auto rounded-lg bg-secondary p-6 dark:bg-primary ${
        copied && "bg-zinc-900 dark:ring-1 dark:ring-green"
      }`}
    >
      <Highlight className="html">{data}</Highlight>
      <button
        className="absolute right-3 top-2 text-sm font-extrabold text-green"
        onClick={onClick}
      >
        {copied === true ? "Copied" : "Copy"}
      </button>
    </div>
  );
}
