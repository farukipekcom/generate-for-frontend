import React, { useState } from "react";
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
    <div className="flex flex-col">
      <label htmlFor={name} className="relative text-gray_dark dark:text-gray">
        {title}
        {max && (
          <span
            className={`absolute right-0 text-sm font-semibold ${high()} border-none`}
          >
            {inputLength} / {max}
          </span>
        )}
      </label>
      <textarea
        name={name}
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
