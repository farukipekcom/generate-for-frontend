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
      <div className="flex w-full flex-col lg:ml-[280px]">
        <div className="hidden h-20  w-full border-b border-solid border-borderLight dark:border-border lg:mt-0 lg:flex">
          <div className="gff border-r border-solid border-borderLight dark:border-border">
            <Search />
          </div>
          <div className="gff flex items-center justify-end">
            <Toggle />
          </div>
        </div>
        <div className="">{children}</div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
