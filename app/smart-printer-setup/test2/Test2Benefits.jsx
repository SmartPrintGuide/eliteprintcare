"use client";

import React from "react";
import { Clock3, ShieldCheck, Sparkles, Star, CheckCircle2, ArrowUpRight } from "lucide-react";

function Test2Benefits() {
  return (
    <section className="relative w-full bg-slate-50 py-24 px-5 sm:px-8 lg:px-12 overflow-hidden border-t border-slate-200/60">
      
      {/* Background Glow Effect */}
      <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-blue-300/20 blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-[1600px]">
        
        <div className="grid lg:grid-cols-[40%_60%] gap-12 lg:gap-16 items-center">
          
          {/* =====================================================
              LEFT COLUMN: HIGH-IMPACT PROPOSITION CARD
          ===================================================== */}
          <div className="relative rounded-3xl bg-slate-900 p-8 sm:p-12 text-white shadow-2xl overflow-hidden flex flex-col justify-between min-h-[480px]">
            
            {/* Background Decorative Gradient inside Card */}
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-blue-600/30 blur-3xl pointer-events-none" />

            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1.5 backdrop-blur-md mb-6">
                <Sparkles size={14} className="text-blue-400" />
                <span className="text-[11px] font-bold uppercase tracking-[2px] text-blue-400">
                  The Support Advantage
                </span>
              </div>

              <h2 className="text-[32px] sm:text-[40px] font-extrabold tracking-tight leading-[1.15]">
                Why printer owners trust our center.
              </h2>

              <p className="mt-4 text-[15px] sm:text-[16px] leading-[1.7] text-slate-400">
                We eliminate confusing tech jargon, providing direct, certified guides that get your hardware online and working on the first try.
              </p>
            </div>

            {/* Bottom Stat Highlights inside Dark Card */}
            <div className="mt-10 pt-6 border-t border-slate-800 grid grid-cols-2 gap-4">
              <div>
                <p className="text-[26px] font-extrabold text-blue-400">15 Min</p>
                <p className="text-[12px] font-semibold text-slate-400 mt-0.5">Average Fix Time</p>
              </div>
              <div>
                <p className="text-[26px] font-extrabold text-emerald-400">100%</p>
                <p className="text-[12px] font-semibold text-slate-400 mt-0.5">Verified Safe Drivers</p>
              </div>
            </div>

          </div>

          {/* =====================================================
              RIGHT COLUMN: FEATURE MODULE GRID
          ===================================================== */}
          <div className="grid sm:grid-cols-2 gap-5">
            
            {/* Benefit Card 1 */}
            <div className="group rounded-3xl border border-slate-200/80 bg-white p-7 shadow-sm transition-all duration-300 hover:border-blue-300 hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 border border-blue-100 transition-transform duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
                <Clock3 size={22} />
              </div>
              <h3 className="mt-6 text-[18px] font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                Fast & Concise Steps
              </h3>
              <p className="mt-2 text-[14px] leading-[1.6] text-slate-600">
                Get straight to the solution for driver errors, Wi-Fi pairing issues, and print queue jams without waiting.
              </p>
            </div>

            {/* Benefit Card 2 */}
            <div className="group rounded-3xl border border-slate-200/80 bg-white p-7 shadow-sm transition-all duration-300 hover:border-blue-300 hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 border border-indigo-100 transition-transform duration-300 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white">
                <ShieldCheck size={22} />
              </div>
              <h3 className="mt-6 text-[18px] font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                Reliable Guidance
              </h3>
              <p className="mt-2 text-[14px] leading-[1.6] text-slate-600">
                Follow field-tested diagnostic paths that prevent repeat troubleshooting loops and failed software setups.
              </p>
            </div>

            {/* Benefit Card 3 */}
            <div className="group rounded-3xl border border-slate-200/80 bg-white p-7 shadow-sm transition-all duration-300 hover:border-blue-300 hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100 transition-transform duration-300 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white">
                <Sparkles size={22} />
              </div>
              <h3 className="mt-6 text-[18px] font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                Stress-Free Setup
              </h3>
              <p className="mt-2 text-[14px] leading-[1.6] text-slate-600">
                Designed for all technical levels—from unpacking a new printer to managing multi-device office networks.
              </p>
            </div>

            {/* Benefit Card 4 */}
            <div className="group rounded-3xl border border-slate-200/80 bg-white p-7 shadow-sm transition-all duration-300 hover:border-blue-300 hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-amber-600 border border-amber-100 transition-transform duration-300 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-white">
                <Star size={22} />
              </div>
              <h3 className="mt-6 text-[18px] font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                Optimized Results
              </h3>
              <p className="mt-2 text-[14px] leading-[1.6] text-slate-600">
                Achieve cleaner print quality, stable network connectivity, and long-term hardware reliability.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Test2Benefits;