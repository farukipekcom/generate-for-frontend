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
      console.log("copied");
      setCopied(false);
    }, 1500);
  };
  return (
    <div className="relative mt-6 rounded-lg bg-[#272731] p-6">
      <Highlight className="html">{data}</Highlight>
      <button
        className="absolute right-3 top-2  text-sm font-extrabold text-secondary"
        onClick={onClick}
      >
        {copied === true ? "Copied" : "Copy"}
      </button>
    </div>
  );
}
