"use client";

import React, { useState } from "react";

const printerOptions = [
  "Product name",
  "Product number",
  "Serial number",
];

export default function Page() {
  const [searchType, setSearchType] = useState("Product name");
  const [value, setValue] = useState("");

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-900 selection:bg-blue-600 selection:text-white font-sans antialiased">

      {/* =====================================================
          INTRO HERO SECTION
      ====================================================== */}
      <section className="relative overflow-hidden pt-16 pb-10 sm:pt-20 sm:pb-12">
        {/* Subtle sophisticated radial gradient */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-[900px] h-[350px] bg-gradient-to-b from-blue-100/60 via-indigo-50/20 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="max-w-2xl">
            
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/80 text-xs font-semibold text-blue-600 mb-5 shadow-xs">
              <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
              Official Device Setup & Support
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              Find your printer
            </h1>

            <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600 font-normal">
              Enter your printer information below to instantly download the correct drivers, software, and tailored setup instructions.
            </p>

          </div>
        </div>
      </section>

      {/* =====================================================
          MAIN SETUP INTERACTIVE CARD AREA
      ====================================================== */}
      <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-8">
        <div className="grid overflow-hidden rounded-[2.5rem] border border-slate-200/90 bg-white shadow-xl shadow-slate-200/40 lg:grid-cols-[1fr_440px]">

          {/* ================= FORM PANEL ================= */}
          <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-between">
            <div>
              <div className="mb-8">
                <h2 className="text-xl font-bold tracking-tight text-slate-900">
                  Identify your device
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Select an identifier type to look up your exact model.
                </p>
              </div>

              {/* SEARCH TYPE SELECTOR BUTTONS */}
              <div className="grid gap-3 sm:grid-cols-3">
                {printerOptions.map((option) => {
                  const active = searchType === option;

                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setSearchType(option)}
                      className={`group relative flex h-14 items-center gap-3 rounded-2xl border px-4 text-left transition-all duration-200 ${
                        active
                          ? "border-blue-600 bg-blue-50/40 shadow-xs ring-2 ring-blue-600/10"
                          : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/40"
                      }`}
                    >
                      <span
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-colors ${
                          active
                            ? "border-blue-600 bg-blue-600"
                            : "border-slate-300 group-hover:border-slate-400"
                        }`}
                      >
                        {active && (
                          <span className="h-2 w-2 rounded-full bg-white" />
                        )}
                      </span>

                      <span
                        className={`text-xs font-semibold tracking-tight ${
                          active ? "text-blue-950" : "text-slate-700"
                        }`}
                      >
                        {option}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* RE-STYLED INPUT CONTAINER */}
              <div className="mt-8">
                <label
                  htmlFor="printer"
                  className="mb-2.5 block text-xs font-bold uppercase tracking-wider text-slate-600"
                >
                  {searchType}
                </label>

                <div className="flex flex-col gap-3.5 sm:flex-row">
                  <div className="relative flex-1">
                    <svg
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="11" cy="11" r="7" />
                      <path d="m20 20-4-4" />
                    </svg>

                    <input
                      id="printer"
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                      placeholder={`Enter ${searchType.toLowerCase()}`}
                      className="h-14 w-full rounded-2xl border border-slate-300 bg-slate-50/30 pl-12 pr-4 text-sm font-medium text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-600/10 shadow-2xs"
                    />
                  </div>

                 <a href="/find-model/smart-install" className="shrink-0">
                   <button
                    type="button"
                    className="h-14 shrink-0 rounded-2xl bg-blue-600 px-8 text-sm font-semibold text-white shadow-md shadow-blue-600/20 transition-all hover:bg-blue-700 hover:shadow-blue-600/30 hover:-translate-y-0.5 active:translate-y-0"
                  >
                    Search
                  </button>
                 </a>
                </div>

                <p className="mt-3 text-xs text-slate-500">
                  Example: <span className="font-medium text-slate-700">LaserJet Pro M404n</span> or model series digits.
                </p>
              </div>
            </div>

            {/* DIVIDER & HELP CARD */}
            <div className="mt-12 pt-6 border-t border-slate-100">
              <div className="flex items-start gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-slate-700 font-bold text-sm">
                  ?
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">
                    Where can I find my printer information?
                  </h4>
                  <p className="mt-1 text-xs leading-relaxed text-slate-500">
                    Product names and serial numbers are normally located on stickers found at the back, underneath, or inside ink cartridge access panels.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* ================= PRINTER VISUAL PANEL ================= */}
          <div className="relative flex flex-col justify-between bg-gradient-to-b from-slate-50 via-blue-50/30 to-indigo-50/20 p-8 lg:p-10 border-t lg:border-t-0 lg:border-l border-slate-200/80">
            
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500 bg-white border border-slate-200/80 px-3 py-1 rounded-full shadow-2xs">
                Device Preview
              </span>
              <span className="text-xs font-semibold text-slate-400">
                Step 01 of 03
              </span>
            </div>

            <div className="my-10 flex items-center justify-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-blue-400/10 rounded-full blur-3xl group-hover:bg-blue-400/20 transition-all" />
                <img
                  src="./printer-1.jpg"
                  alt="Printer Preview"
                  className="relative max-h-[200px] sm:max-h-[240px] w-auto max-w-full object-contain drop-shadow-lg transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200/80 bg-white/90 p-4 backdrop-blur-md shadow-xs">
              <p className="text-xs font-bold text-slate-900">
                Need help locating details?
              </p>
              <p className="mt-1 text-[11px] text-slate-500 leading-relaxed">
                Check your original packaging or purchase receipt if the hardware label is worn or hard to read.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          WHAT HAPPENS NEXT SECTION
      ====================================================== */}
      <section className="border-y border-slate-200/80 bg-white py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">

            <div className="max-w-sm">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-600 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                Workflow
              </span>
              <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-slate-900">
                What happens next
              </h2>
              <p className="mt-1.5 text-sm text-slate-500">
                Three structured steps to complete your configuration cleanly.
              </p>
            </div>

            <div className="grid flex-1 gap-5 sm:grid-cols-3 lg:max-w-3xl">
              <Step
                number="01"
                title="Identify model"
                text="Match your exact hardware variant."
              />
              <Step
                number="02"
                title="Get software"
                text="Secure download of verified drivers."
              />
              <Step
                number="03"
                title="Easy setup"
                text="Step-by-step connection guide."
              />
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          BOTTOM SUPPORT SECTION
      ====================================================== */}
      <section className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="flex flex-col justify-between gap-6 rounded-3xl border border-slate-200/80 bg-white p-8 sm:flex-row sm:items-center shadow-xs">
          <div>
            <h4 className="text-sm font-bold text-slate-900">
              Having trouble finding your product details?
            </h4>
            <p className="mt-1 text-xs text-slate-500">
              Our customer service team can guide you through alternative options.
            </p>
          </div>

          <button
            type="button"
            className="inline-flex items-center gap-2 self-start rounded-xl border border-slate-200 bg-slate-50 px-5 py-3 text-xs font-bold text-slate-700 transition-all hover:bg-slate-100 hover:text-slate-900 sm:self-auto shadow-2xs"
          >
            Contact support
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="m13 6 6 6-6 6" />
            </svg>
          </button>
        </div>
      </section>

    </main>
  );
}

function Step({ number, title, text }) {
  return (
    <div className="flex gap-4 rounded-2xl border border-slate-200/80 bg-[#FAFAFB] p-5 shadow-2xs transition-all hover:bg-white hover:shadow-sm">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-xs font-bold text-blue-600 border border-slate-200 shadow-2xs">
        {number}
      </span>
      <div>
        <h3 className="text-xs font-bold text-slate-900">
          {title}
        </h3>
        <p className="mt-1 text-xs leading-relaxed text-slate-500">
          {text}
        </p>
      </div>
    </div>
  );
}