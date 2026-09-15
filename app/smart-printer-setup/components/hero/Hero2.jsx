
import React from "react";

function page() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-[#f5f9ff]">
        <div className="mx-auto max-w-7xl px-6 py-14 sm:px-10 lg:px-8 lg:py-20">
          
          {/* Hero Header */}
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-medium text-[#2564e5]">
              <span className="h-2 w-2 rounded-full bg-green-500"></span>
              Printer Support Center
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              How Can We Help With
              <span className="block text-[#2564e5]">
                Your Printer?
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Choose what you need help with and get started with our
              step-by-step printer support.
            </p>
          </div>

          {/* Main Action Area */}
          <div className="mt-12 grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
            
            {/* Support Actions */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
              <div className="mb-6">
                <h2 className="text-xl font-bold text-slate-900">
                  What do you need help with?
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Select an option to get started
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                
                {/* Setup */}
                <button className="group flex items-center gap-4 rounded-xl border border-blue-200 bg-[#f5f9ff] p-5 text-left transition hover:border-[#2564e5] hover:bg-blue-50">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#2564e5] text-white">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </div>

                  <div className="flex-1">
                    <p className="font-bold text-slate-900">
                      Start Printer Setup
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      Set up your printer step by step
                    </p>
                  </div>

                  <span className="text-[#2564e5] transition group-hover:translate-x-1">
                    →
                  </span>
                </button>

                {/* Offline */}
                <button className="group flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5 text-left transition hover:border-[#2564e5] hover:bg-blue-50">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-[#2564e5]">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M18 8a6 6 0 00-12 0v4a6 6 0 0012 0V8z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 12H4a2 2 0 000 4h2m12-4h2a2 2 0 010 4h-2"
                      />
                    </svg>
                  </div>

                  <div className="flex-1">
                    <p className="font-bold text-slate-900">
                      Fix Offline Printer
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      Get your printer back online
                    </p>
                  </div>

                  <span className="text-[#2564e5] transition group-hover:translate-x-1">
                    →
                  </span>
                </button>

                {/* Driver */}
                <button className="group flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5 text-left transition hover:border-[#2564e5] hover:bg-blue-50">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-[#2564e5]">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 3v12m0 0l4-4m-4 4l-4-4M5 21h14"
                      />
                    </svg>
                  </div>

                  <div className="flex-1">
                    <p className="font-bold text-slate-900">
                      Install / Update Driver
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      Find and install printer drivers
                    </p>
                  </div>

                  <span className="text-[#2564e5] transition group-hover:translate-x-1">
                    →
                  </span>
                </button>

                {/* Printing */}
                <button className="group flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5 text-left transition hover:border-[#2564e5] hover:bg-blue-50">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-[#2564e5]">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 9V3h12v6M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2M6 14h12v7H6z"
                      />
                    </svg>
                  </div>

                  <div className="flex-1">
                    <p className="font-bold text-slate-900">
                      Fix Printing Problems
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      Troubleshoot common print issues
                    </p>
                  </div>

                  <span className="text-[#2564e5] transition group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </div>

              {/* More Actions */}
              <div className="mt-5 flex flex-wrap gap-3 border-t border-slate-100 pt-5">
                <button className="rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-600 transition hover:border-[#2564e5] hover:text-[#2564e5]">
                  Connect Printer to Wi-Fi
                </button>

                <button className="rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-600 transition hover:border-[#2564e5] hover:text-[#2564e5]">
                  Get Technical Support
                </button>
              </div>
            </div>

            {/* Support Banner */}
            <div className="relative overflow-hidden rounded-2xl bg-[#2564e5] p-7 text-white sm:p-8">
              
              {/* Decorative circles */}
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full border-[28px] border-white/10"></div>
              <div className="absolute -bottom-20 -left-16 h-48 w-48 rounded-full border-[28px] border-white/10"></div>

              <div className="relative flex h-full flex-col">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/15">
                  <svg
                    className="h-7 w-7"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.8"
                      d="M18 10c0 3.866-3.582 7-8 7a9.86 9.86 0 01-3.58-.65L3 18l1.75-3.5A6.72 6.72 0 012 10c0-3.866 3.582-7 8-7s8 3.134 8 7z"
                    />
                  </svg>
                </div>

                <h2 className="mt-7 text-2xl font-bold leading-tight">
                  Not sure what
                  <span className="block">the problem is?</span>
                </h2>

                <p className="mt-4 text-sm leading-6 text-blue-50">
                  Tell us what is happening with your printer and we'll guide
                  you toward the right solution.
                </p>

                <button className="mt-auto flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3.5 text-sm font-bold text-[#2564e5] transition hover:bg-slate-50">
                  Find My Printer Solution
                  <span>→</span>
                </button>

                <div className="mt-5 flex items-center gap-2 text-xs text-blue-100">
                  <span className="h-2 w-2 rounded-full bg-green-300"></span>
                  Support assistance available
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Quick Links */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-slate-500">
            <span>Popular Help:</span>

            <button className="font-medium text-[#2564e5] hover:underline">
              Printer Setup
            </button>

            <button className="font-medium text-[#2564e5] hover:underline">
              Driver Installation
            </button>

            <button className="font-medium text-[#2564e5] hover:underline">
              Wi-Fi Connection
            </button>

            <button className="font-medium text-[#2564e5] hover:underline">
              Offline Printer
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default page;

