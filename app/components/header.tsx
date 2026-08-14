import { useState } from "react";
import Navbar from "./navbar";
import Link from "next/link";
import Toggle from "./toggle";
import Search from "./search";
import Logo from "./icons/logo";
import Menu from "./icons/menu";
export default function Header() {
  const [mobileMenuActive, setMobileMenuActive] = useState(false);
  const onchangeActive = () => {
    setMobileMenuActive((prevmobileMenuActive) => !prevmobileMenuActive);
  };

  return (
    <header
      className={`${
        mobileMenuActive === true
          ? "fixed z-50 flex h-[calc(100%-0px)] flex-col justify-between bg-white pb-5 pt-5 dark:bg-secondary lg:pt-0"
          : "z-50 bg-white pt-5 dark:bg-secondary lg:p-0"
      } fixed flex w-[calc(100%-40px)] flex-col overflow-hidden rounded-normal lg:h-[calc(100vh-40px)] lg:w-[280px] lg:min-w-[280px]`}
    >
      <div className="flex h-full min-h-0 flex-col rounded-normal bg-primary p-4 dark:bg-darkSurface">
        <div className="flex shrink-0 items-center justify-between">
          <Link
            href="/"
            className="w-max"
            onClick={() => setMobileMenuActive(false)}
            aria-label="Generate for Frontend Logo"
          >
            <Logo />
          </Link>
          <Menu onchangeActive={onchangeActive} />
        </div>
        {mobileMenuActive && (
          <div className="mt-8 shrink-0 lg:hidden">
            <Search mobile={true} />
          </div>
        )}
        <div className="no-scrollbar mt-8 min-h-0 flex-1 overflow-y-auto overscroll-y-contain lg:mt-12">
          <Navbar
            mobileMenuActive={mobileMenuActive}
            onchangeActive={() => setMobileMenuActive(false)}
          />
        </div>
        {mobileMenuActive && (
          <div className="flex shrink-0 justify-end lg:hidden">
            <Toggle />
          </div>
        )}
      </div>
    </header>
  );
}
