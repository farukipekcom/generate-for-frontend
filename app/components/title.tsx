import React from "react";
interface Props {
  title: string;
}
export default function Title(Props: Props) {
  const { title } = Props;
  return (
    <h1 className="mt-6 text-[30px] font-bold text-primary dark:text-white">
      {title}
    </h1>
  );
}
