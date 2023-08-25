import React from "react";
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
        className="h-4 w-4 rounded text-secondary  accent-secondary  dark:bg-yellow-500 dark:accent-white"
        checked={checked}
      />
      <label
        htmlFor={name}
        className="ml-2 cursor-pointer text-sm font-medium text-primary dark:text-white"
      >
        {title}
      </label>
    </div>
  );
}
