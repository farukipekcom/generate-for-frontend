import Link from "next/link";
import React from "react";

export default function Breadcrumbs() {
  return (
    <div className="flex gap-x-2 text-sm font-medium text-[#495466] dark:text-secondary">
      <Link href="/">Home</Link>
      <span>{">"}</span>
      <Link href="#" className="text-primary dark:text-secondary">
        Meta Tags
      </Link>
    </div>
  );
}
