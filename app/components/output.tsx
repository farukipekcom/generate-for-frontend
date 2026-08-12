import React from "react";
interface Props {
  children: React.ReactNode;
}
export default function Output(Props: Props) {
  const { children } = Props;
  return (
    <div className="flex h-max flex-col gap-y-4 xl:sticky xl:top-0 xl:mt-[28px] xl:w-1/2 xl:pl-5 xl:pr-5 xl:pt-0">
      {children}
    </div>
  );
}
