import React, { useState } from "react";
import Highlight from "react-highlight";
import Title from "./title";
import Description from "./description";
interface Props {
  data: string;
  title: string;
  description: string;
}
export default function Code(Props: Props) {
  const { data, title, description } = Props;
  const [copied, setCopied] = useState<Boolean>(false);

  const onClick = () => {
    navigator.clipboard.writeText(data);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };
  return (
    <div className="h-max xl:sticky xl:top-0 xl:mt-[28px] xl:w-1/2 xl:pl-5 xl:pr-5 xl:pt-0">
      <Title title={title} />
      <Description description={description} />
      <div
        className={`customShadow relative mt-6 w-full overflow-auto rounded-lg bg-secondary p-6 dark:bg-primary ${
          copied && "bg-zinc-900 dark:ring-1 dark:ring-green"
        }`}
      >
        <Highlight className="html ">{data}</Highlight>
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
