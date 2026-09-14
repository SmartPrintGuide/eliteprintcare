"use client"

import React, { useState } from "react";
import {
  ArrowUpRight,
  Building2,
  Headphones,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

export default function BusinessSupportSection() {
  return (
    <section
      id="business"
      className="scroll-mt-28 border-b border-slate-200 bg-slate-50 px-6 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-[#2563E5]">
            Business Support
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Reliable printer support
            <span className="block text-[#2563E5]">
              for your business.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Keep your team's printers connected, configured, and ready to
            work with practical support for everyday business environments.
          </p>
        </div>

        {/* Business Panel */}
        <div className="mt-14 overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
            {/* Left */}
            <div className="flex flex-col justify-between border-b border-slate-200 p-8 sm:p-10 lg:border-b-0 lg:border-r">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EEF4FF] text-[#2563E5]">
                  <Building2 size={22} />
                </div>

                <h3 className="mt-7 text-2xl font-semibold tracking-tight text-slate-950">
                  Support that fits the way your business works.
                </h3>

                <p className="mt-4 text-sm leading-6 text-slate-600">
                  From a single office printer to multiple devices across
                  your workplace, get straightforward guidance when you need
                  it.
                </p>
              </div>

              <button
                type="button"
                
                className="mt-10 inline-flex w-fit items-center gap-2 rounded-lg bg-[#2563E5] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1d4ed8]"
              >
                Talk to business support
                <ArrowUpRight size={16} />
              </button>
            </div>

            {/* Right */}
            <div className="p-8 sm:p-10">
              <div className="mb-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Business capabilities
                </p>

                <p className="mt-2 text-sm text-slate-500">
                  Practical support for your everyday print environment.
                </p>
              </div>

              <div className="divide-y divide-slate-200">
                {/* Item 1 */}
                <div className="flex gap-5 py-6 first:pt-0">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-200 text-[#2563E5]">
                    <Headphones size={18} />
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-slate-950">
                      Priority assistance
                    </h4>

                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      Get focused help when printer issues are affecting
                      important business tasks.
                    </p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex gap-5 py-6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-200 text-[#2563E5]">
                    <TrendingUp size={18} />
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-slate-950">
                      Operational reliability
                    </h4>

                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      Reduce recurring connection, driver, and configuration
                      problems across your devices.
                    </p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="flex gap-5 py-6 last:pb-0">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-200 text-[#2563E5]">
                    <ShieldCheck size={18} />
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-slate-950">
                      Consistent support
                    </h4>

                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      Follow clear, repeatable setup and troubleshooting
                      guidance for your business devices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col gap-3 border-t border-slate-200 bg-slate-50 px-8 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-10">
            <p className="text-sm font-medium text-slate-700">
              Keep your print environment ready for business.
            </p>

            <span className="text-xs font-medium text-slate-400">
              Business printer support
            </span>
          </div>
        </div>
      </div>

     
    </section>
  );
}