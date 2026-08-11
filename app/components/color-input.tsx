import React from "react";
import Label from "./label";
interface Props {
  name: string;
  title: string;
  value: string;
  onChange: (value: string) => void;
}
export default function ColorInput(Props: Props) {
  const { name, title, value, onChange } = Props;
  return (
    <div className="flex flex-col">
      <Label name={name} title={title} />
      <div className="mt-[6px] flex items-center gap-x-3">
        <input
          type="color"
          name={`${name}-picker`}
          id={`${name}-picker`}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="h-10 w-12 cursor-pointer rounded-small border border-inputBorder bg-white p-1 dark:border-inputDarkBorder dark:bg-dark_input_bg"
        />
        <input
          type="text"
          name={name}
          id={name}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="customInput flex-1"
        />
      </div>
    </div>
  );
}
