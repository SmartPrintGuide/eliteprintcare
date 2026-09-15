
import React from "react";

function page() {
  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-[#f3f8ff]">

        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-8">

          <div className="grid min-h-[680px] items-center lg:grid-cols-2">

            {/* LEFT CONTENT */}
            <div className="relative z-20 py-16 lg:py-20">

              {/* Eyebrow */}
              <div className="mb-6 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-green-500" />

                <span className="text-sm font-semibold text-[#2564e5]">
                  Printer Support & Assistance
                </span>
              </div>

              {/* Heading */}
              <h1 className="max-w-2xl text-5xl font-bold leading-[1.05] tracking-tight text-slate-900 sm:text-6xl lg:text-[64px]">
                Get Back to
                <span className="block text-[#2564e5]">
                  Printing.
                </span>
                We're Here to Help.
              </h1>

              {/* Description */}
              <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
                Need help setting up your printer or fixing a problem?
                Start with the support option that matches what you need.
              </p>

              {/* Primary CTA */}
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">

                <button className="inline-flex items-center justify-center gap-3 rounded-md bg-[#2564e5] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#1d55c7]">
                  Start Printer Setup

                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 12h14m-6-6l6 6-6 6"
                    />
                  </svg>
                </button>

                <button className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-300 bg-white px-7 py-4 text-sm font-bold text-slate-700 transition hover:border-[#2564e5] hover:text-[#2564e5]">
                  Fix Offline Printer
                </button>

              </div>

              {/* Quick Support Links */}
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">

                <span className="text-sm font-medium text-slate-400">
                  Popular help:
                </span>

                <button className="text-sm font-semibold text-slate-600 hover:text-[#2564e5]">
                  Driver Installation
                </button>

                <button className="text-sm font-semibold text-slate-600 hover:text-[#2564e5]">
                  Wi-Fi Setup
                </button>

                <button className="text-sm font-semibold text-slate-600 hover:text-[#2564e5]">
                  Printing Issues
                </button>

              </div>

            </div>

            {/* RIGHT IMAGE */}
            <div className="relative flex h-full min-h-[520px] items-center lg:min-h-[680px]">

              {/* Blue Decorative Shape */}
              <div className="absolute right-[-180px] top-1/2 h-[620px] w-[620px] -translate-y-1/2 rounded-full bg-[#dceaff]" />

              {/* Image */}
              <div className="relative z-10 ml-auto w-full max-w-[620px] overflow-hidden lg:-mr-16">

                <img
                  src="https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=1400&q=85"
                  alt="Modern printer in an office"
                  className="h-[500px] w-full object-cover sm:h-[560px] lg:h-[610px]"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                {/* Image Text */}
                <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-9">

                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-200">
                    Printer Support
                  </p>

                  <h2 className="mt-2 max-w-sm text-2xl font-bold leading-tight text-white sm:text-3xl">
                    Setup, connect, troubleshoot and print with confidence.
                  </h2>

                </div>

              </div>

              {/* Floating Support Banner */}
              <div className="absolute bottom-8 left-0 z-20 hidden w-[310px] rounded-xl border border-slate-200 bg-white p-5 lg:block">

                <div className="flex items-start gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-[#2564e5]">

                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.8"
                        d="M8 10h8M8 14h5m7-2a8 8 0 01-8 8H7l-4 2 1.5-4A8 8 0 1120 12z"
                      />
                    </svg>

                  </div>

                  <div className="flex-1">
                    <p className="text-sm font-bold text-slate-900">
                      Need help with your printer?
                    </p>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Find the right solution and get started.
                    </p>

                    <button className="mt-3 text-xs font-bold text-[#2564e5]">
                      Get Technical Support →
                    </button>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom CTA Banner */}
        <div className="border-t border-blue-100 bg-white">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-5 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-8">

            <div>
              <p className="text-sm font-bold text-slate-900">
                Can't find what you're looking for?
              </p>

              <p className="mt-1 text-xs text-slate-500">
                Explore all printer setup and troubleshooting options.
              </p>
            </div>

            <button className="inline-flex items-center justify-center gap-2 rounded-md bg-[#2564e5] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#1d55c7]">
              Explore All Support
              <span>→</span>
            </button>

          </div>
        </div>

      </section>
    </main>
  );
}

export default page;

