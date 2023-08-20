import React from "react";
interface Props {
  description: object | string;
}
export default function Description(Props: Props) {
  const { description } = Props;
  return (
    <div
      className="mt-3 text-base text-primary dark:text-gray-100"
      dangerouslySetInnerHTML={{ __html: description }}
    ></div>
  );
}
