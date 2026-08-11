import React from "react";
import Title from "./title";
import Description from "./description";
interface Props {
  children: React.ReactNode;
  className?: string;
}
export default function CssPreview(Props: Props) {
  const { children, className = "" } = Props;
  return (
    <div>
      <Title title="Preview" />
      <Description description="Live preview of the CSS you are building. Adjust the controls to see changes instantly." />
      <div
        className={`customShadow mt-6 flex min-h-[220px] items-center justify-center rounded-lg border border-borderLight bg-[#F9FAFB] p-8 dark:border-border dark:bg-primary ${className}`}
      >
        {children}
      </div>
    </div>
  );
}
