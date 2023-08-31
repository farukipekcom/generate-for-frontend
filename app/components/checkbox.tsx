import React from "react";
import Label from "./label";
interface Props {
  title: string;
  name: string;
  onChange: any;
  checked?: boolean;
}
export default function Checkbox(Props: Props) {
  const { title, name, onChange, checked } = Props;
  return (
    <div className="flex h-10 items-center">
      <input
        id={name}
        name={name}
        type="checkbox"
        onChange={onChange}
        className="mr-2 h-4 w-4 rounded text-secondary  accent-secondary  dark:bg-yellow-500 dark:accent-white"
        checked={checked}
      />
      <Label name={name} title={title} />
    </div>
  );
}
