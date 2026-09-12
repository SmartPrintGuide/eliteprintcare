"use client";

import React, { useState } from "react";

export default function SupportHeader() {
  const [downloaded, setDownloaded] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleInstall = () => {
    setDownloaded(true);
  };

  return (
    <div className=" bg-[#F4F6F9] text-slate-900 font-sans antialiased selection:bg-blue-600 selection:text-white">
      

      <header className="w-full bg-white shadow-xs">
        
        {/* Top Navbar Row */}
        <div className="mx-auto flex h-[80px] max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
          
          {/* Brand Logo & Title */}
          <div className="flex items-center gap-3.5">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0F53FF] text-white shadow-md shadow-blue-600/20">
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 6 2 18 2 18 9"></polyline>
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                <rect x="6" y="14" width="12" height="8"></rect>
              </svg>
            </div>
            <div>
                <span className="text-[20px] font-black tracking-tight text-slate-900 block leading-none">
                 Printer
              </span>
              <span className="text-[14px] font-bold tracking-wide text-slate-800 block mt-0.5">
                Services
              </span>
            </div>
          </div>

          {/* Central Search Bar */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-12">
            <div className="relative w-full">
              <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-blue-600">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </span>
              <input
                type="text"
                placeholder="Type and Search..."
                className="h-12 w-full rounded-full border border-slate-200 bg-white pl-11 pr-5 text-xs font-medium text-slate-700 placeholder-slate-400 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10 shadow-2xs"
              />
            </div>
          </div>

          {/* Right Actions: Account & Sign In */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center justify-center h-10 w-10 rounded-full text-blue-600 bg-blue-50 hover:bg-blue-100 cursor-pointer transition">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>

            <button
              type="button"
              className="rounded-xl bg-[#0F53FF] px-6 py-3 text-xs font-bold text-white shadow-md shadow-blue-600/25 transition hover:bg-blue-700 active:scale-95"
            >
              Sign in
            </button>

            {/* Mobile menu toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-700 md:hidden hover:bg-slate-50"
              aria-label="Toggle menu"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {mobileMenuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </>
                ) : (
                  <>
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                  </>
                )}
              </svg>
            </button>
          </div>

        </div>

        {/* Bottom Blue Navigation Bar matching the image reference */}
        <div className="bg-[#0F53FF] text-white">
          <div className="mx-auto flex max-w-7xl items-center overflow-x-auto px-5 sm:px-6 lg:px-8 py-3.5 scrollbar-none">
            <div className="flex items-center gap-4 sm:gap-6 whitespace-nowrap text-xs font-semibold">
              <a href="#" className="flex items-center justify-center hover:opacity-80 transition">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                </svg>
              </a>
              <a href="#setup" className="hover:opacity-80 transition">Printer Setup</a>
              <a href="#offline" className="hover:opacity-80 transition">Printer Offline</a>
              <a href="#scanner" className="hover:opacity-80 transition">Scanner Setup</a>
              <a href="#support" className="hover:opacity-80 transition">Support Home</a>
              <a href="#cartridges" className="hover:opacity-80 transition">Ink Cartridges Issue</a>
              <a href="#diagnostics" className="hover:opacity-80 transition">Diagnostics</a>
              <a href="#business" className="hover:opacity-80 transition">Business Support</a>
            </div>
          </div>
        </div>

        {/* Mobile menu drop */}
        {mobileMenuOpen && (
          <div className="border-b border-slate-200 bg-white px-5 py-4 md:hidden space-y-3">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Type and Search..."
                className="h-10 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-xs text-slate-800 outline-none"
              />
            </div>
            <div className="flex flex-col space-y-2 text-xs font-semibold text-slate-700">
              <a href="#setup" className="p-2 rounded-lg hover:bg-slate-100">Printer Setup</a>
              <a href="#offline" className="p-2 rounded-lg hover:bg-slate-100">Printer Offline</a>
              <a href="#scanner" className="p-2 rounded-lg hover:bg-slate-100">Scanner Setup</a>
              <a href="#support" className="p-2 rounded-lg hover:bg-slate-100">Support Home</a>
              <a href="#cartridges" className="p-2 rounded-lg hover:bg-slate-100">Ink Cartridges Issue</a>
              <a href="#diagnostics" className="p-2 rounded-lg hover:bg-slate-100">Diagnostics</a>
              <a href="#business" className="p-2 rounded-lg hover:bg-slate-100">Business Support</a>
            </div>
          </div>
        )}
      </header>

  


    </div>
  );
}