import React, { useState } from "react";
import Label from "./label";
interface Props {
  name: string;
  title: string;
  onChange: any;
  max?: number;
  info?: string;
}
export default function Textarea(Props: Props) {
  const { name, title, onChange, max, info } = Props;
  const [inputLength, setInputLength] = useState(0);
  const onInput = (e: any) => {
    setInputLength(e.target.value.length);
  };
  return (
    <div className="flex flex-col">
      <Label name={name} title={title} inputLength={inputLength} max={max} />
      <textarea
        name={name}
        id={name}
        className="inputTextCustom customInput h-28 w-full py-3"
        onChange={onChange}
        onInput={onInput}
      />
      {info && (
        <div className="mt-1 text-sm font-medium dark:text-[#999999]">
          {info}
        </div>
      )}
    </div>
  );
}
