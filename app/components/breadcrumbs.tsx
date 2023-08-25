"use client";
import Link from "next/link";
import React from "react";

import { usePathname } from "next/navigation";
interface Props {
  count: number;
  page1: string;
  page2?: string;
}

export default function Breadcrumbs(Props: Props) {
  const { count, page1 = "", page2 = "" } = Props;
  const pathname = usePathname();
  const pathList = pathname.split("/");
  return (
    <div className="flex items-center gap-x-2 text-sm font-medium text-secondary dark:text-white">
      <Link href="/">Home</Link>
      {page1.length > 0 && count === 1 ? (
        <>
          <span className="text-gray dark:text-gray">{">"}</span>
          <Link
            href={pathList[1]}
            className="rounded-small bg-green_light px-2 py-1 text-primary dark:text-secondary"
          >
            {page1}
          </Link>
        </>
      ) : (
        ""
      )}
      {page2.length > 0 && count === 2 ? (
        <>
          <span>{">"}</span>
          <Link
            href={`../` + pathList[1]}
            className="text-primary dark:text-secondary"
          >
            {page1}
          </Link>
          <span>{">"}</span>
          <Link
            href={`../` + pathList[1] + "/" + pathList[2]}
            className="text-primary dark:text-secondary"
          >
            {page2}
          </Link>
        </>
      ) : (
        ""
      )}
    </div>
  );
}
