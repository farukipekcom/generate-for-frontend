import React from "react";
import Label from "./label";
interface Props {
  name: string;
  title: string;
  value: string;
  onChange: any;
  max?: number;
  info?: string;
}
export default function Textarea(Props: Props) {
  const { name, title, value, onChange, max, info } = Props;
  return (
    <div className="flex flex-col">
      <Label name={name} title={title} inputLength={value.length} max={max} />
      <textarea
        name={name}
        id={name}
        className="inputTextCustom customInput h-28 w-full py-3"
        value={value}
        onChange={onChange}
      />
      {info && (
        <div className="mt-1 text-sm font-medium dark:text-[#999999]">
          {info}
        </div>
      )}
    </div>
  );
}
