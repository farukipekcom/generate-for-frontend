import React from "react";
import Label from "./label";
export interface Props {
  name: string;
  title: string;
  type?: string;
  max?: number | undefined;
  value: string;
  onChange: any;
  info?: string;
}
export default function Inputs(Props: Props) {
  const { max, name, title, type = "text", value, onChange, info } = Props;
  return (
    <div className="flex flex-col">
      <Label name={name} title={title} inputLength={value.length} max={max} />
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        className="customInput"
      />
      {info && (
        <div
          className="mt-1 text-sm font-normal text-secondary dark:text-[#999999]"
          dangerouslySetInnerHTML={{ __html: info }}
        />
      )}
    </div>
  );
}
