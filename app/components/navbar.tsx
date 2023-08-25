"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";
import DownArrow from "./icons/downArrow";
import pages from "../json/pages.json";
export default function Navbar({ mobileMenuActive, onchangeActive }: any) {
  const pathname = usePathname();
  const router = useRouter();
  const [active, setActive] = useState(false);
  const [selected, setSelected] = useState("");
  return (
    <div
      className={`${
        mobileMenuActive === true ? "flex" : "hidden"
      } mt-8 h-full flex-col items-center gap-y-2 lg:mt-12 lg:flex`}
    >
      <ul className="flex w-full flex-col gap-y-2">
        {pages.map((item) => {
          return (
            <li key={item.id}>
              <Link
                href="/meta-tag-generator"
                className={
                  pathname === "/meta-tag-generator"
                    ? "menu-item-active"
                    : "menu-item"
                }
                onClick={onchangeActive}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
        {/* <li className="relative ">
          <Link
            href="/twitter"
            className={
              pathname === "/twitter" ? "menu-item-active" : "menu-item"
            }
            onClick={onchangeActive}
          >
            Twitter Card
          </Link>
          <div
            className="absolute right-2 top-2 z-0 flex h-6 w-6 cursor-pointer items-center justify-center"
            onClick={() => {
              setActive(!active);
              setSelected("twitter");
            }}
          >
            <DownArrow />
          </div>
          {active && selected === "twitter" && (
            <ul className="ml-4 mt-2 flex flex-col gap-y-2">
              <li>
                <Link
                  href="/twitter/app"
                  className={
                    pathname === "/twitter/app"
                      ? "menu-item-active text-sm"
                      : "menu-item text-sm"
                  }
                  onClick={onchangeActive}
                >
                  App
                </Link>
              </li>
              <li>
                <Link
                  href="/twitter/player"
                  className={
                    pathname === "/twitter/player"
                      ? "menu-item-active text-sm"
                      : "menu-item text-sm"
                  }
                  onClick={onchangeActive}
                >
                  Player
                </Link>
              </li>
              <li>
                <Link
                  href="/twitter/summary"
                  className={
                    pathname === "/twitter/summary"
                      ? "menu-item-active text-sm"
                      : "menu-item text-sm"
                  }
                  onClick={onchangeActive}
                >
                  Summary
                </Link>
              </li>
              <li>
                <Link
                  href="/twitter/summary-card-with-large-image"
                  className={
                    pathname === "/twitter/summary-card-with-large-image"
                      ? "menu-item-active text-sm"
                      : "menu-item text-sm"
                  }
                  onClick={onchangeActive}
                >
                  Summary Card With Large Image
                </Link>
              </li>
            </ul>
          )}
        </li> */}
      </ul>
    </div>
  );
}
