import React from "react";
interface Props {
  name: string;
  title: string;
  max?: number | undefined;
  inputLength?: number | undefined;
}

export default function Label(Props: Props) {
  const { name, title, max, inputLength } = Props;
  const high = () => {
    return (max !== undefined &&
      inputLength !== undefined &&
      inputLength / max >= 0.45 &&
      inputLength / max < 0.75) === true
      ? "warningYellow"
      : (max !== undefined &&
          inputLength !== undefined &&
          inputLength / max >= 0.75 &&
          inputLength / max <= 1) === true
      ? "warningGreen"
      : max != undefined &&
        inputLength !== undefined &&
        inputLength > max === true
      ? "warningRed"
      : "";
  };
  return (
    <label
      htmlFor={name}
      className="relative text-base font-medium text-gray_dark dark:text-white"
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
  );
}
