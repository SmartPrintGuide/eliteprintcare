"use client";

import React, { useState } from "react";

const navItems = [
  { id: "printer-setup", label: "Printer Setup" },
  { id: "offline", label: "Printer Offline" },
  { id: "scanner", label: "Scanner Setup" },
  { id: "support", label: "Support Home" },
  { id: "cartridges", label: "Ink Cartridges Issue" },
  { id: "diagnostics", label: "Diagnostics" },
  { id: "business", label: "Business Support" },
];

export default function SupportHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="bg-[#F8FAFC] text-[#0F172A] font-sans antialiased selection:bg-[#2563E5] selection:text-white">

      <header className="w-full border-b border-[#E2E8F0] bg-white">

        {/* ================================
            MAIN HEADER
        ================================= */}
        <div className="mx-auto flex h-[72px] max-w-[1340px] items-center justify-between px-5 sm:px-6 lg:px-8">

          {/* Logo */}
          <button
            type="button"
            onClick={() => scrollToSection("/")}
            className="flex items-center gap-3 text-left"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-[#2563E5] text-white">
              <svg
                width="21"
                height="21"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 6 2 18 2 18 9" />
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                <rect x="6" y="14" width="12" height="8" />
              </svg>
            </div>

            <div>
              <span className="block text-[17px] font-extrabold leading-none tracking-tight text-[#0F172A]">
                Printer
              </span>

              <span className="mt-0.5 block text-[11px] font-semibold tracking-[0.08em] text-[#64748B]">
                SERVICES
              </span>
            </div>
          </button>

          {/* Search */}
          <div className="mx-10 hidden max-w-xl flex-1 md:flex">
            <div className="relative w-full">
              <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-[#2563E5]">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </span>

              <input
                type="text"
                placeholder="Search printer support..."
                className="h-10 w-full rounded-sm border border-[#E2E8F0] bg-[#F8FAFC] pl-11 pr-4 text-xs font-medium text-[#334155] placeholder:text-[#94A3B8] outline-none transition focus:border-[#2563E5] focus:bg-white focus:ring-4 focus:ring-[#2563E5]/10"
              />
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">

            {/* Account */}
            <button
              type="button"
              aria-label="Account"
              className="hidden h-9 w-9 items-center justify-center rounded-sm border border-[#E2E8F0] bg-white text-[#64748B] transition hover:border-[#CBD5E1] hover:bg-[#F8FAFC] hover:text-[#2563E5] sm:flex"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </button>

            {/* Sign In */}
            <button
              type="button"
              className="hidden rounded-sm bg-[#2563E5] px-5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-[#1D55C7] sm:block"
            >
              Sign in
            </button>

            {/* Mobile */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-sm border border-[#E2E8F0] bg-white text-[#475569] transition hover:bg-[#F8FAFC] md:hidden"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* ================================
            BLUE NAVIGATION
        ================================= */}
        <div className="border-t border-[#1D55C7] bg-[#2563E5] text-white">
          <div className="mx-auto max-w-[1340px] overflow-x-auto px-5 scrollbar-none sm:px-6 lg:px-8">
            <div className="flex h-11 items-center gap-6 whitespace-nowrap text-[11px] font-semibold">

              {/* Home */}
              <button
                type="button"
                onClick={() => scrollToSection("/")}
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-sm bg-white/10 transition hover:bg-white/20"
                aria-label="Home"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                </svg>
              </button>

              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className="relative h-full shrink-0 text-white/90 transition hover:text-white"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ================================
            MOBILE MENU
        ================================= */}
        {mobileMenuOpen && (
          <div className="border-t border-[#E2E8F0] bg-white px-5 py-5 md:hidden">

            {/* Mobile Search */}
            <div className="relative mb-5">
              <svg
                className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[#2563E5]"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>

              <input
                type="text"
                placeholder="Search printer support..."
                className="h-10 w-full rounded-sm border border-[#E2E8F0] bg-[#F8FAFC] pl-10 pr-4 text-xs text-[#334155] outline-none focus:border-[#2563E5]"
              />
            </div>

            {/* Mobile Navigation */}
            <div className="divide-y divide-[#E2E8F0] border-y border-[#E2E8F0]">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    scrollToSection(item.id);
                  }}
                  className="flex w-full items-center justify-between py-3.5 text-left text-xs font-semibold text-[#475569] transition hover:text-[#2563E5]"
                >
                  {item.label}

                  <span className="text-[#CBD5E1]">→</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </header>
    </div>
  );
}