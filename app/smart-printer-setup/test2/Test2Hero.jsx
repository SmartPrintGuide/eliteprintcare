"use client";

import React from "react";
import {
  ArrowUpRight,
  Download,
  Wifi,
  Wrench,
  Headphones,
  Printer,
  Zap,
  ShieldCheck,
} from "lucide-react";

function Test2Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-[#f8fafc] text-slate-900 selection:bg-blue-600 selection:text-white">
      {/* Background Ambient Glowing Orbs with gentle animation */}
      <div className="absolute -top-32 -left-32 h-[450px] w-[450px] rounded-full bg-blue-400/20 blur-[100px] pointer-events-none animate-pulse duration-1000" />
      <div className="absolute top-1/3 -right-32 h-[450px] w-[450px] rounded-full bg-indigo-400/15 blur-[120px] pointer-events-none" />

      {/* Subtle Grid Dot Pattern Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />

      <div className="relative mx-auto min-h-[92vh] max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <div className="grid min-h-[92vh] items-center gap-12 lg:grid-cols-[48%_52%] py-12">
          
          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}
          <div className="relative z-10 flex flex-col justify-center py-8 lg:py-16">
            
            {/* Small Animated Pill Label */}
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1.5 shadow-sm transition-transform hover:scale-105 duration-300">
              <Zap size={14} className="text-blue-600 animate-bounce" />
              <span className="text-[11px] font-bold uppercase tracking-[2px] text-blue-600">
                Next-Gen Printer Support
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="max-w-[650px] text-[48px] font-extrabold leading-[1.05] tracking-tight text-slate-900 sm:text-[64px] lg:text-[72px] xl:text-[80px]">
              Everything your{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent">
                printer needs.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-[500px] text-[16px] leading-[1.8] text-slate-600 sm:text-[17px]">
              Set up your printer seamlessly, install correct drivers, configure secure Wi-Fi, or resolve complex printing issues with instant, expert-led guidance.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col gap-3.5 sm:flex-row">
              <button
                type="button"
                className="group relative flex h-[54px] items-center justify-center gap-3 overflow-hidden rounded-xl bg-blue-600 px-7 text-[14px] font-semibold text-white shadow-lg shadow-blue-600/25 transition-all duration-300 hover:bg-blue-700 hover:shadow-blue-600/40 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Start Printer Setup</span>
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>

              <button
                type="button"
                className="group flex h-[54px] items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white px-7 text-[14px] font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:border-blue-300 hover:bg-slate-50 hover:text-blue-600 hover:-translate-y-0.5 active:translate-y-0"
              >
                <Wrench size={17} strokeWidth={1.8} className="text-blue-600 transition-transform group-hover:rotate-45 duration-300" />
                <span>Fix a Printer Problem</span>
              </button>
            </div>

            {/* =====================================================
                SUPPORT LINKS QUICK BAR
            ===================================================== */}
            <div className="mt-12 max-w-[600px]">
              <div className="mb-4 flex items-center justify-between border-t border-slate-200 pt-6">
                <span className="text-[11px] font-bold uppercase tracking-[1.8px] text-slate-400">
                  Quick navigation
                </span>
                <button
                  type="button"
                  className="group flex items-center gap-1.5 text-[12px] font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                >
                  <span>All support topics</span>
                  <ArrowUpRight
                    size={13}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { label: "Drivers", icon: Download },
                  { label: "Wi-Fi Setup", icon: Wifi },
                  { label: "Printing", icon: Printer },
                  { label: "Expert Help", icon: Headphones },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={index}
                      type="button"
                      className="group flex flex-col items-start gap-2.5 rounded-xl border border-slate-200/80 bg-white p-3.5 shadow-sm transition-all duration-300 hover:border-blue-400 hover:bg-blue-50/50 hover:shadow-md hover:-translate-y-1"
                    >
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110">
                        <Icon size={16} />
                      </span>
                      <span className="text-[13px] font-semibold text-slate-700 group-hover:text-blue-700">
                        {item.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* =====================================================
              RIGHT IMAGE & ANIMATED FLOATING BADGES
          ===================================================== */}
          <div className="relative h-[480px] sm:h-[560px] lg:h-[82vh] w-full flex items-center justify-center">
            
            {/* Background Accent Glow Behind Image */}
            <div className="absolute inset-10 rounded-3xl bg-gradient-to-tr from-blue-200/40 to-indigo-200/30 blur-2xl pointer-events-none" />

            {/* Main Image Wrapper Card */}
            <div className="relative h-full w-full overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-2xl shadow-slate-200/50">
              <img
                src="/setup/hero4.png"
                alt="Printer support modern dashboard"
                className="h-full w-full object-cover object-center scale-105 transition-transform duration-700 hover:scale-100"
              />

              {/* Gentle gradient overlay for lighting contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />

              {/* =================================================
                  FLOATING CARD 1: TECHNICAL HELP (Bottom Left)
              ================================================== */}
              <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 animate-fade-in">
                <button
                  type="button"
                  className="group flex items-center gap-3.5 rounded-2xl border border-white/80 bg-white/90 p-3.5 text-left backdrop-blur-xl shadow-xl shadow-slate-900/10 transition-all duration-300 hover:bg-white hover:border-blue-300 hover:scale-[1.02]"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md shadow-blue-600/30 transition-transform group-hover:rotate-6">
                    <Headphones size={20} />
                  </span>
                  <div className="flex-1 pr-2">
                    <span className="block text-[13px] font-bold text-slate-900">
                      Need technical help?
                    </span>
                    <span className="mt-0.5 block text-[11px] text-slate-500">
                      Connect with support instantly
                    </span>
                  </div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-slate-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <ArrowUpRight
                      size={16}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </div>
                </button>
              </div>

              {/* =================================================
                  FLOATING CARD 2: LIVE STATUS BADGE (Top Right)
              ================================================== */}
              <div className="absolute right-6 top-6 sm:right-8 sm:top-8">
                <div className="flex items-center gap-2.5 rounded-full border border-white/80 bg-white/90 px-4 py-2 backdrop-blur-xl shadow-lg shadow-slate-900/5">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                  <span className="text-[12px] font-bold text-slate-800">
                    Support available 24/7
                  </span>
                </div>
              </div>

              {/* =================================================
                  FLOATING CARD 3: VERIFIED BADGE (Top Left)
              ================================================== */}
              <div className="absolute left-6 top-6 sm:left-8 sm:top-8 hidden sm:flex">
                <div className="flex items-center gap-2 rounded-xl border border-white/80 bg-white/90 px-3.5 py-2 backdrop-blur-xl shadow-lg shadow-slate-900/5 text-slate-700 text-[11px] font-semibold">
                  <ShieldCheck size={14} className="text-blue-600" />
                  <span>Verified Drivers & Fixes</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Test2Hero;