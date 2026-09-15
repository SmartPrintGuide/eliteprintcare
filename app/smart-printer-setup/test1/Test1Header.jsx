import React from "react";
import Link from "next/link";
import { Search } from "lucide-react";

function Test1Header() {
  return (
    <header className="w-full border-b border-[#e5eaf1] bg-white">
      <div className="mx-auto flex h-[76px] max-w-[1500px] items-center justify-between px-6 lg:px-10">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#2564e5]">
            <span className="text-lg font-bold text-white">P</span>
          </div>

          <span className="text-[18px] font-bold tracking-[-0.4px] text-[#14213d]">
            Printer Support
          </span>
        </Link>


        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">

          <Link
            href="/"
            className="relative py-7 text-[14px] font-semibold text-[#2564e5]"
          >
            Home

            <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#2564e5]" />
          </Link>

          <Link
            href="/support"
            className="py-7 text-[14px] font-medium text-[#394867] transition hover:text-[#2564e5]"
          >
            Support
          </Link>

          <Link
            href="/drivers"
            className="py-7 text-[14px] font-medium text-[#394867] transition hover:text-[#2564e5]"
          >
            Drivers
          </Link>

          <Link
            href="/guides"
            className="py-7 text-[14px] font-medium text-[#394867] transition hover:text-[#2564e5]"
          >
            Guides
          </Link>

          <Link
            href="/contact"
            className="py-7 text-[14px] font-medium text-[#394867] transition hover:text-[#2564e5]"
          >
            Contact
          </Link>

        </nav>


        {/* Right Side */}
        <div className="flex items-center gap-3">

          {/* Search */}
          <button
            className="hidden h-10 items-center gap-2 rounded-full border border-[#dce3ed] px-4 text-[#65738a] transition hover:border-[#2564e5] hover:text-[#2564e5] sm:flex"
          >
            <Search size={17} />

            <span className="text-[13px]">
              Search support
            </span>
          </button>


          {/* Support CTA */}
          <Link
            href="/support"
            className="inline-flex h-10 items-center justify-center rounded-lg bg-[#2564e5] px-5 text-[13px] font-semibold text-white transition hover:bg-[#1957d2]"
          >
            Get Support
          </Link>

        </div>

      </div>
    </header>
  );
}

export default Test1Header;