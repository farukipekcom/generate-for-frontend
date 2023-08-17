import React from "react";
interface Props {
  title: string;
}
export default function Title(Props: Props) {
  const { title } = Props;
  return (
    <div className="mt-2 text-[28px] font-bold text-primary dark:text-white">
      {title}
    </div>
  );
}
