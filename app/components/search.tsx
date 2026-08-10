"use client";
import React, { useEffect, useId, useMemo, useRef, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import pages from "../json/pages.json";
import SearchIcon from "./icons/search";
interface Props {
  mobile?: boolean;
}
type Page = {
  id: string;
  title: string;
  description: string;
  link: string;
  color: string;
  colorDark: string;
};
const allPages: Page[] = (pages as (Page & { pages?: Page[] })[]).flatMap(
  ({ pages: children, ...page }) => [page, ...(children ?? [])],
);
export default function Search(Props: Props) {
  const { mobile } = Props;
  const router = useRouter();
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);
  const fieldId = useId();
  const listboxId = `${fieldId}-listbox`;
  const optionId = (index: number) => `${fieldId}-option-${index}`;

  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const results = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (needle === "") return [];
    return allPages.filter((page) => page.title.toLowerCase().includes(needle));
  }, [query]);

  const isOpen = open && query.trim() !== "";
  // Results shrink as the query narrows, so the stored index can outlive its option.
  const currentIndex = activeIndex < results.length ? activeIndex : 0;

  useEffect(() => {
    setQuery("");
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) return;
    const onPointerDown = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, [isOpen]);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    setOpen(event.target.value.trim() !== "");
    setActiveIndex(0);
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Escape") {
      setOpen(false);
      return;
    }
    if (!isOpen || results.length === 0) return;
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((index) => (index + 1) % results.length);
    }
    if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((index) => (index - 1 + results.length) % results.length);
    }
  };

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const target = results[currentIndex];
    if (!target) return;
    setQuery("");
    setOpen(false);
    router.push(target.link);
  };

  return (
    <div className="relative w-full" ref={containerRef}>
      <form
        autoComplete="off"
        onSubmit={onSubmit}
        className={`relative flex h-10 items-center ${
          mobile === true ? "w-full" : "w-[420px]"
        }`}
      >
        <input
          type="text"
          id={fieldId}
          className={`z-20 h-10 rounded-small bg-secondary pl-3 pr-10 text-sm font-semibold text-white outline-none placeholder:text-gray ${
            mobile === true ? "w-full" : "w-[420px]"
          }`}
          placeholder="Search"
          onChange={onChange}
          onKeyDown={onKeyDown}
          onFocus={() => query.trim() !== "" && setOpen(true)}
          value={query}
          aria-label="Search pages"
          role="combobox"
          aria-autocomplete="list"
          aria-expanded={isOpen}
          aria-controls={isOpen && results.length > 0 ? listboxId : undefined}
          aria-activedescendant={
            isOpen && results.length > 0 ? optionId(currentIndex) : undefined
          }
        />
        <button
          type="submit"
          className="absolute right-0 top-0 z-20 flex h-10 w-10 items-center justify-center text-sm font-medium focus:outline-none lg:h-full"
          aria-label="Search"
        >
          <SearchIcon />
        </button>
      </form>
      {isOpen && (
        <div className="customShadow absolute top-10 z-20 mt-2 flex w-full flex-col gap-y-2 rounded-small border border-solid border-[#E7E7E7] bg-white p-4 px-2 py-2 dark:bg-primary lg:w-[420px]">
          {results.length > 0 ? (
            <ul
              id={listboxId}
              role="listbox"
              aria-label="Search results"
              className="flex flex-col gap-y-2"
            >
              {results.map((item, index) => (
                <li
                  key={item.link}
                  id={optionId(index)}
                  role="option"
                  aria-selected={index === currentIndex}
                  onMouseEnter={() => setActiveIndex(index)}
                  className={`flex h-10 items-center rounded-small ${
                    index === currentIndex
                      ? "bg-[#F4F4F4] dark:bg-secondary"
                      : ""
                  }`}
                >
                  <Link
                    href={item.link}
                    className="flex w-full cursor-pointer items-center gap-x-2 rounded-md"
                    onClick={() => {
                      setQuery("");
                      setOpen(false);
                    }}
                  >
                    <div
                      style={
                        {
                          "--badge": item.color,
                          "--badge-dark": item.colorDark,
                        } as React.CSSProperties
                      }
                      className="ml-2 flex h-7 w-7 items-center justify-center rounded-full bg-[var(--badge)] text-sm font-bold text-primary dark:bg-[var(--badge-dark)]"
                    >
                      {item.title.charAt(0)}
                    </div>
                    <div className="text-base font-medium text-primary dark:text-white">
                      {item.title}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <div
              role="status"
              className="flex h-10 items-center gap-x-2 rounded-small text-base font-semibold text-primary dark:text-white"
            >
              Not Found!
            </div>
          )}
        </div>
      )}
    </div>
  );
}
