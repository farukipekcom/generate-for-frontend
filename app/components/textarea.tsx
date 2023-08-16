import React from "react";
interface Props {
  limit?: boolean;
  name: string;
  title: string;
}
export default function Textarea(Props: Props) {
  const { limit, name, title } = Props;
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="relative">
        {title}
        {limit && (
          <span className="absolute right-0 text-sm	font-semibold">12 / 60</span>
        )}
      </label>
      <textarea
        name="title"
        className="dark:border-inputDarkBorder mt-[6px] h-28 w-full rounded-md border border-solid border-[#D1D5DC] p-3 text-base font-medium focus:border-primary focus:outline-none dark:bg-primary  dark:focus:border-secondary"
      />
    </div>
  );
}
