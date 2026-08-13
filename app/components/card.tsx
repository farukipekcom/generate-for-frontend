import React from "react";
import Link from "next/link";
import Lines from "./icons/lines";
import LinkArrow from "./icons/linkArrow";
interface Props {
  title: string;
  description: string;
  link: string;
  id: string;
}
export default function Card(Props: Props) {
  const { title, description, link, id } = Props;
  return (
    <Link
      href={link}
      className="w-full min-w-0 lg:w-[calc(50%-12px)] xl:w-[calc(33.333%-16px)]"
    >
      <div className="group relative overflow-hidden rounded-normal bg-[#B7DAE2] p-6">
        <span className="text-lg font-bold leading-none text-primary">
          {id}
        </span>
        <h3 className="mt-4 pr-14 text-[32px] font-bold leading-[38px] text-primary sm:min-h-12 lg:min-h-20 lg:text-[28px] xl:text-[32px]">
          {title}
        </h3>
        <p className="mt-6 flex h-12 items-end text-base font-medium text-secondary">
          {description}
        </p>
        <div className="absolute right-6 top-6 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white transition-colors duration-300 ease-in-out group-hover:bg-primary">
          <LinkArrow />
        </div>
        <Lines />
      </div>
    </Link>
  );
}
