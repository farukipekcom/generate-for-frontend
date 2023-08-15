"use client";
import {ThemeProvider} from "next-themes";
import Header from "./components/header";
export function Providers({children}: {children: React.ReactNode}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <Header />
      {children}
    </ThemeProvider>
  );
}
