import React from "react";

function Hero1() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#f5f9ff]">
        <div className="mx-auto grid min-h-[620px] max-w-7xl items-center gap-12 px-6 py-16 sm:px-10 lg:grid-cols-2 lg:px-8 lg:py-20">
          
          {/* Left Content */}
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-medium text-[#2564e5]">
              <span className="h-2 w-2 rounded-full bg-green-500"></span>
              Printer Support & Assistance
            </div>

            <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Get Your Printer
              <span className="block text-[#2564e5]">
                Working Again
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Expert help for printer setup, driver installation, connectivity,
              printing errors, and everyday printer problems.
            </p>

            {/* CTA */}
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <button className="inline-flex items-center justify-center gap-2 rounded-md bg-[#2564e5] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#1d55c7]">
                Get Support
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              <button className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-7 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-[#2564e5] hover:text-[#2564e5]">
                Troubleshoot Now
              </button>
            </div>

            {/* Trust Points */}
            <div className="mt-10 grid max-w-lg grid-cols-3 gap-5 border-t border-slate-200 pt-7">
              <div>
                <p className="text-xl font-bold text-slate-900">24/7</p>
                <p className="mt-1 text-xs text-slate-500">
                  Support Access
                </p>
              </div>

              <div>
                <p className="text-xl font-bold text-slate-900">Fast</p>
                <p className="mt-1 text-xs text-slate-500">
                  Problem Resolution
                </p>
              </div>

              <div>
                <p className="text-xl font-bold text-slate-900">Easy</p>
                <p className="mt-1 text-xs text-slate-500">
                  Step-by-Step Help
                </p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative flex items-center justify-center lg:justify-end">
            {/* Background Shape */}
            <div className="absolute right-0 top-1/2 h-[430px] w-[430px] -translate-y-1/2 rounded-full bg-blue-100/70"></div>

            {/* Printer Illustration */}
            <div className="relative z-10 w-full max-w-[500px]">
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="rounded-xl bg-[#eef5ff] p-8 sm:p-10">
                  
                  {/* Printer */}
                  <div className="mx-auto max-w-[360px]">
                    {/* Paper */}
                    <div className="mx-auto mb-[-8px] h-24 w-48 rounded-t-md border border-slate-200 bg-white shadow-sm">
                      <div className="space-y-2 p-5">
                        <div className="h-2 w-28 rounded bg-slate-200"></div>
                        <div className="h-2 w-20 rounded bg-slate-200"></div>
                        <div className="h-2 w-24 rounded bg-slate-200"></div>
                      </div>
                    </div>

                    {/* Printer Top */}
                    <div className="relative h-20 rounded-t-2xl bg-slate-700">
                      <div className="absolute right-5 top-5 flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-green-400"></span>
                        <span className="h-2.5 w-8 rounded bg-slate-500"></span>
                      </div>
                    </div>

                    {/* Printer Body */}
                    <div className="relative h-40 rounded-b-2xl bg-slate-600">
                      <div className="absolute left-1/2 top-5 h-4 w-24 -translate-x-1/2 rounded-full bg-slate-500"></div>

                      <div className="absolute bottom-0 left-1/2 h-20 w-52 -translate-x-1/2 rounded-t-lg border border-slate-300 bg-white">
                        <div className="mx-auto mt-6 h-2 w-24 rounded bg-slate-200"></div>
                      </div>
                    </div>
                  </div>

                  {/* Status */}
                  <div className="mx-auto mt-8 flex max-w-[360px] items-center justify-between rounded-lg border border-slate-200 bg-white px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-50 text-green-600">
                        <svg
                          className="h-5 w-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-slate-800">
                          Support Ready
                        </p>
                        <p className="text-xs text-slate-500">
                          We're here to help
                        </p>
                      </div>
                    </div>

                    <span className="text-xs font-medium text-green-600">
                      Online
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Support Card */}
              <div className="absolute -bottom-5 -left-3 hidden items-center gap-3 rounded-xl border border-slate-200 bg-white px-5 py-4 sm:flex">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-[#2564e5]">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M18 10c0 3.866-3.582 7-8 7a9.86 9.86 0 01-3.58-.65L3 18l1.75-3.5A6.72 6.72 0 012 10c0-3.866 3.582-7 8-7s8 3.134 8 7z"
                    />
                  </svg>
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-800">
                    Need Help?
                  </p>
                  <p className="text-xs text-slate-500">
                    Talk to our support team
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Accent */}
        <div className="h-1 w-full bg-[#2564e5]"></div>
      </section>
    </main>
  );
}

export default Hero1;