"use client";

import React from "react";
import { MonitorSmartphone, Printer, RefreshCw, Check, ArrowRight } from "lucide-react";

const supportSteps = [
  {
    number: "01",
    title: "Connect your device",
    text: "Ensure your printer is linked to the correct local network, high-speed USB port, or secure Wi-Fi setup before running any tasks.",
    icon: MonitorSmartphone,
  },
  {
    number: "02",
    title: "Install the correct driver",
    text: "Download certified setup files and latest software versions so your printer communicates flawlessly with your computer or phone.",
    icon: Printer,
  },
  {
    number: "03",
    title: "Run diagnostics",
    text: "Check print spooler status, queue configurations, and wireless links instantly to detect printer offline or paper-feed issues.",
    icon: RefreshCw,
  },
  {
    number: "04",
    title: "Complete a test print",
    text: "Verify document layout quality, alignment markers, cartridge color recognition, and scanner functions before finishing.",
    icon: Check,
  },
];

function Test2SupportSteps() {
  return (
    <section className="relative w-full bg-[#f8fafc] py-24 px-5 sm:px-8 lg:px-12 overflow-hidden border-t border-slate-100">
      
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-blue-300/15 blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-[1600px]">
        
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1.5 shadow-sm mb-4">
            <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-[2px] text-blue-600">
              Seamless Workflow
            </span>
          </div>
          <h2 className="text-[36px] font-extrabold tracking-tight text-slate-900 sm:text-[44px] leading-[1.15]">
            A simple path to a working setup.
          </h2>
          <p className="mt-4 text-[16px] leading-[1.7] text-slate-600">
            Follow our structured 4-step path designed to clear errors, update software, and get you printing in minutes.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {supportSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="group relative flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm transition-all duration-300 hover:border-blue-300 hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1.5"
              >
                <div>
                  {/* Top Row: Number & Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-[14px] font-extrabold text-blue-600 tracking-wider">
                      // {step.number}
                    </span>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 border border-blue-100 transition-transform duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
                      <Icon size={22} />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-[20px] font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-[1.7] text-slate-600">
                    {step.text}
                  </p>
                </div>

                {/* Bottom Progress Step Indicator */}
                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-[12px] font-semibold text-slate-400 group-hover:text-blue-600 transition-colors">
                  <span>Step {index + 1} of 4</span>
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Test2SupportSteps;