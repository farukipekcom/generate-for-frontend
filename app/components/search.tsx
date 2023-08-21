import React, { useEffect, useRef, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import data from "../json/search.json";
export const useOnOutsideClick = (handleOutsideClick: any) => {
  const innerBorderRef = useRef<HTMLInputElement>(null);
  const onClick = (event: any) => {
    if (
      innerBorderRef.current &&
      !innerBorderRef.current.contains(event.target)
    ) {
      handleOutsideClick();
    }
  };
  useMountEffect(() => {
    document.addEventListener("click", onClick, true);
    return () => {
      document.removeEventListener("click", onClick, true);
    };
  });
  return { innerBorderRef };
};
const useMountEffect = (fun: any) => useEffect(fun, []);
export default function Search({ currentMode, changeContactAppMode }: any) {
  const { innerBorderRef } = useOnOutsideClick(() => setActive(false));
  const [active, setActive] = useState(false);
  const pathname = usePathname();
  const [query, setQuery] = useState("");
  const onChange = (e: any) => {
    setQuery(e.target.value);
    setActive(true);
    e.target.value === "" && setActive(false);
  };
  useEffect(() => {
    setQuery("");
    setActive(false);
  }, [pathname]);
  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(query.toLocaleLowerCase()),
  );
  return (
    <div className=" relative w-full">
      <form className="relative flex h-10 w-full items-center ">
        <input
          type="text"
          id="search"
          className="z-20 block h-10 w-[calc(100%-40px)] rounded-md border border-solid border-[#D0D5DD] bg-transparent px-3 py-2 text-sm font-semibold outline-none placeholder:text-grayLight  focus:text-primary focus:placeholder:text-primary dark:border-border dark:text-white dark:focus:placeholder:text-white lg:w-full lg:rounded-none lg:border-none"
          placeholder="Search"
          onChange={onChange}
          required
        />
        <button
          type="submit"
          className="absolute right-0 top-0 flex h-10 w-10 items-center justify-center bg-headerLight text-sm font-medium text-white focus:outline-none dark:bg-primary lg:h-full lg:bg-white "
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.8102 16.8988L13.0544 12.1495C14.2801 10.6906 14.8952 8.81479 14.7715 6.91336C14.6477 5.01194 13.7947 3.23171 12.3902 1.94398C10.9858 0.65625 9.13838 -0.0395392 7.23338 0.00173681C5.32838 0.0430128 3.51287 0.818167 2.16552 2.16552C0.818167 3.51287 0.0430128 5.32838 0.00173681 7.23338C-0.0395392 9.13838 0.65625 10.9858 1.94398 12.3902C3.23171 13.7947 5.01194 14.6477 6.91336 14.7715C8.81479 14.8952 10.6906 14.2801 12.1495 13.0544L16.8988 17.8102C16.9585 17.8703 17.0294 17.9181 17.1077 17.9506C17.1859 17.9832 17.2698 18 17.3545 18C17.4392 18 17.5231 17.9832 17.6013 17.9506C17.6795 17.9181 17.7505 17.8703 17.8102 17.8102C17.8703 17.7505 17.9181 17.6795 17.9506 17.6013C17.9832 17.5231 18 17.4392 18 17.3545C18 17.2698 17.9832 17.1859 17.9506 17.1077C17.9181 17.0294 17.8703 16.9585 17.8102 16.8988ZM1.30947 7.40657C1.30947 6.20068 1.66706 5.02187 2.33702 4.0192C3.00698 3.01654 3.95921 2.23506 5.07331 1.77358C6.18741 1.31211 7.41334 1.19137 8.59606 1.42662C9.77878 1.66188 10.8652 2.24258 11.7179 3.09527C12.5706 3.94797 13.1513 5.03437 13.3865 6.21709C13.6218 7.39981 13.501 8.62573 13.0396 9.73983C12.5781 10.8539 11.7966 11.8062 10.7939 12.4761C9.79128 13.1461 8.61247 13.5037 7.40657 13.5037C5.79004 13.502 4.24021 12.8591 3.09715 11.716C1.95409 10.5729 1.31117 9.0231 1.30947 7.40657Z"
              className="fill-primary dark:fill-grayLight"
            />
          </svg>
        </button>
      </form>
      {active && filteredData.length !== 0 && (
        <div
          className="absolute left-[-24px] top-[60px] flex w-[calc(100%+48px)] flex-col gap-y-3 bg-[#f1f1f1] p-3 dark:bg-[#444454]"
          ref={innerBorderRef}
        >
          {filteredData.map((item) => {
            return (
              <>
                {item.title && (
                  <Link
                    href={item.link}
                    className="cursor-pointer rounded-md  bg-[#fff] p-2 dark:bg-primary"
                    onClick={() => {
                      setQuery("");
                      setActive(false);
                    }}
                    key={item.title}
                  >
                    <div className="text-sm font-medium">{item.title}</div>
                    <p className="mt-2 text-xs font-medium text-gray-800 dark:text-gray-300">
                      {item.description}
                    </p>
                  </Link>
                )}
              </>
            );
          })}
        </div>
      )}
      {filteredData.length === 0 && (
        <div
          className="dark: absolute left-[-24px] top-[60px] flex w-[calc(100%+48px)] flex-col gap-y-3 bg-[#f1f1f1] p-3 dark:bg-[#444454]"
          ref={innerBorderRef}
        >
          <div className="text-base font-semibold">Not Found!</div>
        </div>
      )}
    </div>
  );
}
