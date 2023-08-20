import React from "react";
import Link from "next/link";
interface Props {
  title: string;
  description: string;
  link: string;
}
export default function Card(Props: Props) {
  const { title, description, link } = Props;
  return (
    <div className=" flex  flex-col gap-y-6 rounded-lg border border-solid border-[#eaecf0] bg-[#ffffff] p-6 shadow-sm group-hover:bg-[#fafafa] dark:border-border dark:bg-[#272731] dark:group-hover:bg-[#22222c]">
      <Link href={link}>
        <h2 className="text-2xl font-bold text-primary dark:text-white">
          {title}
        </h2>
      </Link>
      <p className="text-base font-medium text-primary  dark:text-white">
        {description}
      </p>
      <hr className="h-[1px]  border-solid border-[#dcdddf] dark:border-[#454545]" />
      <Link
        href={link}
        className="flex w-max cursor-pointer items-center gap-x-2 text-base  font-semibold text-primary dark:text-white"
      >
        Try Now
        <svg
          width="24"
          height="16"
          viewBox="0 0 24 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-all duration-300 ease-in-out group-hover:ml-2"
        >
          <path
            d="M16.155 0.289782C16.0791 0.20379 15.985 0.133684 15.8787 0.0839322C15.7725 0.0341807 15.6564 0.00587564 15.538 0.000821537C15.4195 -0.00423257 15.3012 0.0140752 15.1906 0.0545777C15.0801 0.0950802 14.9797 0.156889 14.8958 0.236063C14.8119 0.315237 14.7465 0.410039 14.7036 0.514426C14.6607 0.618813 14.6413 0.730494 14.6466 0.842349C14.652 0.954204 14.682 1.06378 14.7347 1.16409C14.7874 1.2644 14.8616 1.35324 14.9527 1.42495L21.0871 7.22338H0.810714C0.59183 7.23435 0.385739 7.32416 0.234908 7.47432C0.0840779 7.62448 0 7.82354 0 8.03048C0 8.23743 0.0840779 8.43649 0.234908 8.58665C0.385739 8.73681 0.59183 8.82662 0.810714 8.83759H21.0871L14.9431 14.6292C14.7884 14.7821 14.7022 14.9854 14.7022 15.1968C14.7022 15.4082 14.7884 15.6115 14.9431 15.7644C15.0219 15.8391 15.1156 15.8983 15.2188 15.9388C15.322 15.9792 15.4326 16 15.5443 16C15.6559 16 15.7665 15.9792 15.8697 15.9388C15.9729 15.8983 16.0666 15.8391 16.1454 15.7644L23.7442 8.59012C23.8251 8.51662 23.8895 8.42847 23.9334 8.33094C23.9774 8.23342 24 8.12852 24 8.02254C24 7.91655 23.9774 7.81166 23.9334 7.71413C23.8895 7.61661 23.8251 7.52845 23.7442 7.45495L16.155 0.289782Z"
            className="fill-primary dark:fill-white"
          />
        </svg>
      </Link>
    </div>
  );
}
