"use client";
import { ThemeProvider } from "next-themes";
import Header from "./components/header";
import Search from "./components/search";
import Toggle from "./components/toggle";
import Footer from "./components/footer";
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <Header />
      <div className="flex w-full flex-col lg:ml-[300px] lg:mt-0">
        <div className="mt-0 hidden h-20 w-full rounded-normal bg-primary lg:flex">
          <div className="flex w-1/2 items-center p-5 ">
            <Search />
          </div>
          <div className="flex  w-1/2 items-center  justify-end p-6">
            <Toggle />
          </div>
        </div>
        <div className="mt-28 lg:mb-0 lg:mt-0 lg:mt-5 lg:pl-5 lg:pr-5">
          {children}
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
