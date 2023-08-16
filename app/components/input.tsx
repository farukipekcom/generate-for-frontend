import React from "react";
export interface Props {
  limit?: boolean;
  name: string;
  title: string;
  type?: string;
}
export default function Inputs(Props: Props) {
  const { limit = false, name, title, type = "text" } = Props;

  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="relative">
        {title}
        {limit && (
          <span className="absolute right-0 text-sm	font-semibold">12 / 60</span>
        )}
      </label>
      <input
        type={type}
        name={name}
        className="mt-[6px] h-10 rounded-md border border-solid border-[#D1D5DC] pl-3 text-base font-medium focus:border-none focus:outline-none focus:ring-2 focus:ring-gray-500"
      />
    </div>
  );
}
