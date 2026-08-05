import React from "react";
interface Props {
  description: object | string;
}
export default function Description(Props: Props) {
  const { description } = Props;
  return (
    <div
      className="mt-4 text-base text-primary dark:text-white"
      dangerouslySetInnerHTML={{ __html: description }}
    ></div>
  );
}
