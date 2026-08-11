import React from "react";
interface Props {
  children: React.ReactNode;
}
export default function Output(Props: Props) {
  const { children } = Props;
  return (
    <div className="flex h-max min-w-0 flex-col gap-y-4 xl:sticky xl:top-0 xl:mt-[28px] xl:max-h-[calc(100dvh-2.5rem)] xl:w-1/2 xl:self-start xl:overflow-y-auto xl:overscroll-y-contain xl:pl-5 xl:pr-5 xl:pt-0">
      {children}
    </div>
  );
}
