"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Navbar({ mobileMenuActive }: any) {
  const pathname = usePathname();
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
          >
            Meta Tags
          </Link>
        </li>
        <li>
          <Link href="/twitter" className="menu-item">
            Twitter Card
          </Link>
          <ul className="ml-4 flex flex-col gap-y-2">
            <li>
              <Link
                href="/twitter/app"
                className={
                  pathname === "/twitter/app"
                    ? "menu-item-active text-sm"
                    : "menu-item text-sm"
                }
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
              >
                Summary Card With Large Image
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
