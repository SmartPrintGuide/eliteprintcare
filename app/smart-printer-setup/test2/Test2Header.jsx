"use client";

import React from "react";
import {
  Search,
  Headphones,
  Menu,
} from "lucide-react";

function Test2Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-[80px] max-w-[1600px] items-center justify-between px-5 sm:px-8 lg:px-12">

        {/* =========================
            BRAND
        ========================= */}
        <div className="flex items-center gap-3.5 group cursor-pointer">
          <div className="flex h-[42px] w-[42px] items-center justify-center rounded-xl bg-blue-600 text-white shadow-md shadow-blue-600/25 transition-transform duration-300 group-hover:scale-105">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 9V3h12v6" />
              <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
              <path d="M6 14h12v7H6z" />
              <path d="M18 12h.01" />
            </svg>
          </div>

          <div className="hidden sm:block">
            <p className="text-[16px] font-extrabold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
              Printer Support
            </p>
            <p className="text-[10px] font-bold uppercase tracking-[2px] text-slate-400">
              Support Center
            </p>
          </div>
        </div>

        {/* =========================
            NAVIGATION (No Dropdown Icons)
        ========================= */}
        <nav className="hidden items-center gap-8 lg:flex">
          <button
            type="button"
            className="text-[14px] font-semibold text-blue-600 transition-colors hover:text-blue-700"
          >
            Support
          </button>

          <button
            type="button"
            className="text-[14px] font-medium text-slate-600 transition-colors hover:text-blue-600"
          >
            Setup & Drivers
          </button>

          <button
            type="button"
            className="text-[14px] font-medium text-slate-600 transition-colors hover:text-blue-600"
          >
            Troubleshooting
          </button>

          <button
            type="button"
            className="text-[14px] font-medium text-slate-600 transition-colors hover:text-blue-600"
          >
            Guides
          </button>
        </nav>

        {/* =========================
            RIGHT ACTIONS
        ========================= */}
        <div className="flex items-center gap-3">

          {/* Search Button */}
          <button
            type="button"
            aria-label="Search support"
            className="group flex h-[42px] w-[42px] items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 shadow-sm transition-all duration-300 hover:border-blue-300 hover:bg-slate-50 hover:text-blue-600"
          >
            <Search size={18} strokeWidth={1.8} />
          </button>

          {/* Contact Support Link */}
          <button
            type="button"
            className="hidden items-center gap-2 text-[13px] font-semibold text-slate-700 transition-colors hover:text-blue-600 md:flex px-2"
          >
            <Headphones size={17} strokeWidth={1.8} className="text-blue-600" />
            <span>Contact Support</span>
          </button>

          {/* Main CTA Button */}
          <button
            type="button"
            className="group flex h-[42px] items-center gap-2 rounded-xl bg-blue-600 px-5 text-[13px] font-semibold text-white shadow-md shadow-blue-600/25 transition-all duration-300 hover:bg-blue-700 hover:shadow-blue-600/40"
          >
            <span>Get Support</span>
            <span className="text-[15px] transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            aria-label="Open menu"
            className="flex h-[42px] w-[42px] items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition-colors hover:bg-slate-50 lg:hidden"
          >
            <Menu size={19} />
          </button>

        </div>

      </div>
    </header>
  );
}

export default Test2Header;