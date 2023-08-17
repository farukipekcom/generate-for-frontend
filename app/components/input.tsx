import React, { useState } from "react";
export interface Props {
  name: string;
  title: string;
  type?: string;
  max?: number;
  onChange: any;
}
export default function Inputs(Props: Props) {
  const { max, name, title, type = "text", onChange } = Props;
  const [inputLength, setInputLength] = useState(0);
  const onInput = (e: any) => {
    setInputLength(e.target.value.length);
  };
  const high = () => {
    return (inputLength >= 25 && inputLength < 45) === true
      ? "warningYellow"
      : (inputLength >= 45 && inputLength <= 60) === true
      ? "warningGreen"
      : inputLength > 60 === true
      ? "warningRed"
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
        // onChange={(e) => onChange(e)}
        onChange={onChange}
        onInput={onInput}
        className={`inputTextCustom customInput h-10 ${high()}`}
      />
    </div>
  );
}
