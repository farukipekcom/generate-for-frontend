import React from "react";
interface Props {
  title: string;
  name: string;
}
export default function Checkbox(Props: Props) {
  const { title, name } = Props;
  return (
    <div className="mb-4 mr-4 flex items-center">
      <input
        id="checkbox"
        type="checkbox"
        name={name}
        className="h-4 w-4 rounded text-secondary  accent-secondary  dark:bg-yellow-500"
      />
      <label
        htmlFor="checkbox"
        className="ml-2 cursor-pointer text-sm font-medium text-primary dark:text-white"
      >
        {title}
      </label>
    </div>
  );
}
