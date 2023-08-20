"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";
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
        <li>
          <Link
            href="/meta-tags"
            className={
              pathname === "/meta-tags" ? "menu-item-active" : "menu-item"
            }
            onClick={onchangeActive}
          >
            Meta Tags
          </Link>
        </li>
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
            <svg
              width="12"
              height="7"
              viewBox="0 0 12 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 7C6.23051 7 6.42712 6.91052 6.60339 6.73156L11.7763 1.36283C11.9254 1.21141 12 1.02557 12 0.80531C12 0.357915 11.661 -1.48174e-08 11.2203 -3.40801e-08C11.0034 -4.35632e-08 10.8068 0.0894788 10.6508 0.240905L6 5.08653L1.34915 0.240904C1.2 0.0963614 1.00339 -4.80677e-07 0.786441 -4.9016e-07C0.338983 -5.09719e-07 3.32902e-07 0.357915 3.13346e-07 0.805309C3.03719e-07 1.02556 0.0745766 1.21141 0.223729 1.36283L5.39661 6.73156C5.57288 6.9174 5.76949 7 6 7Z"
                fill="#777777"
              />
            </svg>
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
