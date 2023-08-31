import React, { useState } from "react";
import Label from "./label";
export interface Props {
  name: string;
  title: string;
  type?: string;
  max?: number | undefined;
  onChange: any;
  info?: string;
}
export default function Inputs(Props: Props) {
  const { max, name, title, type = "text", onChange, info } = Props;
  const [inputLength, setInputLength] = useState(0);
  const onInput = (e: any) => {
    setInputLength(e.target.value.length);
  };
  return (
    <div className="flex flex-col ">
      <Label name={name} title={title} inputLength={inputLength} max={max} />
      <input
        type={type}
        name={name}
        id={name}
        onChange={onChange}
        onInput={onInput}
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
