import React, { useState } from "react";
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
  const high = () => {
    return (max !== undefined &&
      inputLength / max >= 0.45 &&
      inputLength / max < 0.75) === true
      ? "warningYellow"
      : (max !== undefined &&
          inputLength / max >= 0.75 &&
          inputLength / max <= 1) === true
      ? "warningGreen"
      : max != undefined && inputLength > max === true
      ? "warningRed"
      : "";
  };

  return (
    <div className="flex flex-col ">
      <label
        htmlFor={name}
        className="relative font-medium text-gray_dark dark:text-gray"
      >
        {title}
        {max && (
          <span
            className={`absolute right-0 border-none text-sm font-semibold ${high()} `}
          >
            {inputLength} / {max}
          </span>
        )}
      </label>
      <input
        type={type}
        name={name}
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
