import React from "react";
interface Props {
  title: string;
  children: React.ReactNode;
}
export default function Section(Props: Props) {
  const { title, children } = Props;
  return (
    <div className="flex flex-col gap-y-6">
      <h2 className="border-b border-solid border-borderLight pb-2 text-lg font-bold text-primary dark:border-border dark:text-white">
        {title}
      </h2>
      {children}
    </div>
  );
}
