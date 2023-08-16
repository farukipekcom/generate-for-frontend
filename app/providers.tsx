"use client";
import { ThemeProvider } from "next-themes";
import Header from "./components/header";
import Search from "./components/search";
import Toggle from "./components/toggle";
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <Header />
      <div className="flex w-full flex-col">
        <div className="hidden h-20  w-full border-b border-solid border-borderLight dark:border-border lg:mt-0 lg:flex">
          <div className="gff border-r border-solid border-borderLight dark:border-border">
            <Search />
          </div>
          <div className="gff flex items-center justify-end">
            <Toggle />
          </div>
        </div>
        <div className="">{children}</div>
      </div>
    </ThemeProvider>
  );
}
