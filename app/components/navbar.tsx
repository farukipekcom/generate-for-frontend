"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import DownArrow from "./icons/downArrow";
import pages from "../json/pages.json";
interface Props {
  mobileMenuActive: boolean;
  onchangeActive: () => void;
}
const submenuId = (link: string) => `submenu-${link.replace(/\//g, "-")}`;
const groupFor = (pathname: string) => {
  const current = pages.find(
    (page) =>
      page.pages &&
      (pathname === page.link || pathname.startsWith(`${page.link}/`)),
  );
  return current ? current.link : null;
};
export default function Navbar(Props: Props) {
  const { mobileMenuActive, onchangeActive } = Props;
  const pathname = usePathname();
  // Only one group is open at a time, tracked by link so every group gets its
  // own state instead of sharing one flag. Seeded during render so the open
  // group is server-rendered rather than appearing after hydration.
  const [openGroup, setOpenGroup] = useState<string | null>(() =>
    groupFor(pathname),
  );

  useEffect(() => {
    setOpenGroup(groupFor(pathname));
  }, [pathname]);

  return (
    <div
      className={`${
        mobileMenuActive === true ? "flex" : "hidden"
      } mt-8 h-full flex-col items-center gap-y-2 lg:mt-12 lg:flex`}
    >
      <ul className="flex w-full flex-col gap-y-2">
        {pages.map((item) => {
          const children = item.pages ?? [];
          const isOpen = openGroup === item.link;
          return (
            <li key={item.link} className="relative">
              <Link
                href={item.link}
                className={
                  pathname === item.link ? "menu-item-active" : "menu-item"
                }
                onClick={onchangeActive}
              >
                {item.title}
              </Link>
              {children.length > 0 && (
                <button
                  type="button"
                  className="absolute right-1 top-2 z-10 flex h-6 w-6 cursor-pointer items-center justify-center"
                  onClick={() => setOpenGroup(isOpen ? null : item.link)}
                  aria-expanded={isOpen}
                  aria-controls={isOpen ? submenuId(item.link) : undefined}
                  aria-label={`${isOpen ? "Collapse" : "Expand"} ${
                    item.title
                  } pages`}
                >
                  <span
                    className={`flex transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <DownArrow />
                  </span>
                </button>
              )}
              {children.length > 0 && isOpen && (
                <ul
                  id={submenuId(item.link)}
                  className="ml-4 mt-3 flex w-[calc(100%-28px)] flex-col gap-y-2 border-l border-solid border-dark_input_border"
                >
                  {children.map((page) => (
                    <li key={page.link}>
                      <Link
                        href={page.link}
                        className={
                          pathname === page.link
                            ? "dropdown-menu-item-active"
                            : "dropdown-menu-item"
                        }
                        onClick={onchangeActive}
                      >
                        {page.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
