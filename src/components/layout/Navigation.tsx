import Link from "next/link";
import React from "react";

export function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#f2fbf7]/80 dark:bg-[#151d1b]/80 backdrop-blur-xl shadow-sm dark:shadow-none">
      <div className="flex justify-between items-center px-8 py-4 max-w-[1440px] mx-auto">
        <Link
          href="/"
          className="text-xl font-bold tracking-tighter text-[#26170c] dark:text-white font-headline"
        >
          The Curator
        </Link>
        <div className="hidden md:flex items-center gap-8 font-headline font-medium text-sm tracking-tight">
          <Link
            className="text-[#775843] dark:text-[#dbe4e1] hover:text-[#26170c] transition-colors duration-300"
            href="/courses"
          >
            Courses
          </Link>
          <Link
            className="text-[#3d2b1f] dark:text-white font-bold border-b-2 border-[#3d2b1f] pb-1"
            href="/pricing"
          >
            Pricing
          </Link>
          <Link
            className="text-[#775843] dark:text-[#dbe4e1] hover:text-[#26170c] transition-colors duration-300"
            href="/about"
          >
            About
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-[#775843] dark:text-[#dbe4e1] font-medium text-sm hover:text-[#26170c] transition-colors">
            Login
          </button>
          <button className="bg-primary-container text-on-primary px-6 py-2.5 rounded-xl font-headline text-sm font-bold tracking-tight hover:bg-secondary transition-all active:scale-95 duration-300">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}
