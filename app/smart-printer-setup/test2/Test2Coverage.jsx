"use client";

import React from "react";
import { CheckCircle2, LaptopMinimal, Printer, Wifi, ShieldCheck, Zap } from "lucide-react";

const coverageHighlights = [
  {
    title: "Home Office & Business Printers",
    description: "Complete setup coverage for inkjet, laser, and all-in-one commercial machinery.",
    icon: Printer,
  },
  {
    title: "Wireless, USB & Network Links",
    description: "Fix dual-band Wi-Fi connection loops, router drops, and direct cable pairing issues.",
    icon: Wifi,
  },
  {
    title: "Drivers & Firmware Suites",
    description: "Certified clean software updates for Windows 11/10, macOS, and ChromeOS devices.",
    icon: LaptopMinimal,
  },
];

const metrics = [
  { value: "5K+", label: "Setups Guided Last Year" },
  { value: "96%", label: "First-Pass Fix Success" },
  { value: "150+", label: "Printer Models Covered" },
  { value: "24/7", label: "Active Technical Hub" },
];

function Test2Coverage() {
  return (
    <section className="relative w-full bg-white py-24 px-5 sm:px-8 lg:px-12 overflow-hidden border-t border-slate-100">
      
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-0 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-blue-300/10 blur-[130px] pointer-events-none" />

      <div className="mx-auto max-w-[1600px]">
        
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
          
          {/* =====================================================
              LEFT COLUMN: METRICS & PERFORMANCE STATS
          ===================================================== */}
          <div className="grid sm:grid-cols-2 gap-5">
            {metrics.map((stat, idx) => (
              <div
                key={idx}
                className="group relative rounded-3xl border border-slate-200/80 bg-slate-50/60 p-8 shadow-sm transition-all duration-300 hover:border-blue-300 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 border border-blue-100 mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
                  <Zap size={22} />
                </div>
                <p className="text-[36px] sm:text-[42px] font-extrabold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                  {stat.value}
                </p>
                <p className="mt-2 text-[14px] font-semibold text-slate-600">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* =====================================================
              RIGHT COLUMN: COVERAGE DETAILS & CAPABILITIES
          ===================================================== */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1.5 shadow-sm mb-4">
              <ShieldCheck size={14} className="text-blue-600" />
              <span className="text-[11px] font-bold uppercase tracking-[2px] text-blue-600">
                Comprehensive Coverage
              </span>
            </div>

            <h2 className="text-[36px] font-extrabold tracking-tight text-slate-900 sm:text-[44px] leading-[1.15]">
              Support for the devices and issues people use most.
            </h2>

            <p className="mt-4 text-[16px] leading-[1.7] text-slate-600">
              Whether you are unboxing a brand-new machine or troubleshooting stubborn queue errors, our dynamic guides work seamlessly across major hardware manufacturers and modern operating systems.
            </p>

            <div className="mt-8 space-y-4">
              {coverageHighlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-5 rounded-2xl border border-slate-200/80 bg-slate-50/50 transition-all duration-300 hover:border-blue-300 hover:bg-white hover:shadow-md"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm mt-0.5">
                      <Icon size={18} />
                    </div>
                    <div>
                      <h3 className="text-[16px] font-bold text-slate-900">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-[14px] text-slate-600 leading-[1.5]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Test2Coverage;