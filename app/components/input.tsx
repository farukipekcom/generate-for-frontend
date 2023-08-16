import React, { useState } from "react";
export interface Props {
  name: string;
  title: string;
  type?: string;
  max?: number;
}
export default function Inputs(Props: Props) {
  const { max, name, title, type = "text" } = Props;
  const [inputLength, setInputLength] = useState(0);
  const onChange = (e: any) => {
    setInputLength(e.target.value.length);
  };
  const high = () => {
    return (inputLength >= 25 && inputLength < 45) === true
      ? "border-2 focus:border-2 focus:border-yellow-400 border-yellow-400 text-yellow-400"
      : (inputLength >= 45 && inputLength <= 60) === true
      ? "border-2 focus:border-2 focus:border-green-400 border-green-400 text-green-400"
      : inputLength > 60 === true
      ? "border-2 focus:border-2 focus:border-red-400 border-red-400 text-red-400"
      : "";
  };

  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="relative">
        {title}
        {max && (
          <span
            className={`absolute right-0 text-sm	font-semibold ${high()} border-none`}
          >
            {inputLength} / {max}
          </span>
        )}
      </label>
      <input
        type={type}
        name={name}
        onChange={(e) => onChange(e)}
        className={`inputTextCustom mt-[6px] h-10 rounded-md border  border-solid p-3 text-base font-medium focus:border-2 focus:outline-none dark:bg-primary  ${high()}`}
      />
    </div>
  );
}
