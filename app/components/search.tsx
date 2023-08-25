import React, { useEffect, useRef, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import pages from "../json/pages.json";
import SearchIcon from "./icons/search";
interface Props {
  mobile?: boolean;
}
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
export default function Search(Props: Props) {
  const { mobile } = Props;
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
  const filteredData = pages.filter((page) =>
    page.title.toLowerCase().includes(query.toLocaleLowerCase()),
  );

  return (
    <div className="relative w-full">
      <form
        autoComplete="off"
        className={`relative flex h-10 items-center ${
          mobile === true ? "w-full" : "w-[420px]"
        }`}
      >
        <input
          type="text"
          id="search"
          className={`z-20  h-10 rounded-small bg-secondary pl-3 pr-10 text-sm  font-semibold text-white outline-none placeholder:text-white ${
            mobile === true ? "w-full" : "w-[420px]"
          }`}
          placeholder="Search"
          onChange={onChange}
          value={query}
          required
        />
        <button
          type="submit"
          className="absolute right-0 top-0 z-20 flex h-10 w-10 items-center justify-center  text-sm font-medium focus:outline-none lg:h-full "
        >
          <SearchIcon />
        </button>
      </form>
      {active && filteredData.length !== 0 && (
        <div
          className="customShadow absolute top-10 z-20 mt-2 flex w-full flex-col gap-y-2 rounded-small border border-solid border-[#E7E7E7] bg-white p-4 px-2 py-2 dark:bg-primary lg:w-[420px]"
          ref={innerBorderRef}
        >
          {filteredData.map((item) => {
            return (
              <div
                className="flex h-10 items-center gap-x-2 rounded-small hover:bg-[#F4F4F4] dark:hover:bg-secondary"
                key={item.id}
              >
                {item.title && (
                  <Link
                    href={item.link}
                    className="flex w-full cursor-pointer items-center gap-x-2 rounded-md"
                    onClick={() => {
                      setQuery("");
                      setActive(false);
                    }}
                    key={item.title}
                  >
                    <div className="ml-2 flex h-7 w-7 items-center justify-center rounded-full bg-[#E5D0CF] text-sm font-bold text-primary">
                      {item.title.charAt(0)}
                    </div>
                    <div className="text-base font-medium text-primary dark:text-white">
                      {item.title}
                    </div>
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      )}

      {filteredData.length === 0 && (
        <div
          className="customShadow absolute top-10 z-20 mt-2 flex w-full flex-col gap-y-2 rounded-small border border-solid border-[#E7E7E7] bg-white p-4 px-2 py-2 dark:bg-primary lg:w-[420px]"
          ref={innerBorderRef}
        >
          <div className="flex h-10 items-center gap-x-2 rounded-small text-base font-semibold">
            Not Found!
          </div>
        </div>
      )}
    </div>
  );
}
