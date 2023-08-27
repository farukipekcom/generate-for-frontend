import { useState } from "react";
import Navbar from "./navbar";
import Link from "next/link";
import Toggle from "./toggle";
import Search from "./search";
import Logo from "./icons/logo";
import BuyMeACoffee from "./icons/buymeacoffee";
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
          ? "fixed z-50 flex h-[calc(100%-0px)] flex-col justify-between  bg-white pb-5 pt-5 dark:bg-secondary lg:pt-0"
          : "z-50 bg-white pt-5 dark:bg-secondary lg:p-0"
      } fixed flex w-[calc(100%-40px)] flex-col lg:h-[calc(100vh-40px)] lg:w-[280px] lg:min-w-[280px]`}
    >
      <div className="flex h-[calc(100%-0px)] flex-col rounded-normal bg-primary p-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="w-max"
            onClick={() => setMobileMenuActive(false)}
          >
            <Logo />
          </Link>
          <Menu onchangeActive={onchangeActive} />
        </div>
        {mobileMenuActive && (
          <div className="mt-8 lg:hidden ">
            <Search mobile={true} />
          </div>
        )}
        <Navbar
          mobileMenuActive={mobileMenuActive}
          onchangeActive={() => setMobileMenuActive(false)}
        />
        <div className="relative flex items-center md:justify-center">
          <Link
            href="https://www.buymeacoffee.com/farukipekcom"
            target="_blank"
            className={`flex ${
              mobileMenuActive === true ? "flex " : "hidden lg:flex"
            }`}
          >
            <BuyMeACoffee />
          </Link>
          {mobileMenuActive && (
            <div className="absolute right-0 flex justify-end lg:hidden">
              <Toggle />
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
