import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="h-calc relative flex flex-col items-center justify-center">
      <div className="absolute  text-8xl font-bold text-primary opacity-5 dark:text-white md:text-[180px]">
        ERROR
      </div>
      <div className="text-8xl font-extrabold text-primary dark:text-white md:text-[180px]">
        404
      </div>
      <p className="mt-6 text-center text-xl font-bold text-primary dark:text-white">
        The page you were looking for doesn't exist.
      </p>
      <Link
        href="/"
        className="mt-5 rounded-small bg-primary px-5 py-3 text-base font-semibold text-white hover:bg-secondary dark:hover:bg-dark_input_bg"
      >
        Return Home
      </Link>
    </div>
  );
}
