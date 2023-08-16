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
      <Link
        href="/"
        className={pathname === "/" ? "menu-item-active" : "menu-item"}
      >
        Robots.txt
      </Link>
      <Link
        href="/meta-tags"
        className={pathname === "/meta-tags" ? "menu-item-active" : "menu-item"}
      >
        Meta Tags
      </Link>
      <Link href="/#" className="menu-item">
        Open Graph
      </Link>
      <Link href="/#" className="menu-item">
        Twitter Card
      </Link>
      <Link href="/#" className="menu-item">
        UTM Builder
      </Link>
    </div>
  );
}
