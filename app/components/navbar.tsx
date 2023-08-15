"use client";
import Link from "next/link";
import {usePathname} from "next/navigation";
export default function Navbar() {
  const pathname = usePathname();
  return (
    <div className="flex flex-col items-center mt-12 gap-y-2 h-full">
      <Link href="/" className={pathname === "/" ? "menu-item-active" : "menu-item"}>
        Robots.txt
      </Link>
      <Link href="/meta-tags" className={pathname === "/meta-tags" ? "menu-item-active" : "menu-item"}>
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
