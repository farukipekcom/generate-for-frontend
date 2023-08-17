import React from "react";
interface Props {
  description: string;
}
export default function Description(Props: Props) {
  const { description } = Props;
  return (
    <div className="mt-3 text-base font-medium text-primary dark:text-white">
      {description}
    </div>
  );
}
