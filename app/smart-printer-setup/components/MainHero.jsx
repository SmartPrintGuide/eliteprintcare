// components/MainHero.jsx
"use client";

import React, { useState } from "react";
import {
  ArrowUpRight,
  Check,
  Printer,
  Wifi,
  Settings,
  ShieldCheck,
  Zap,
} from "lucide-react";
import PrinterSetupModal from "./PrinterSetupModal";

export default function MainHero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDiagnosticRunning, setIsDiagnosticRunning] = useState(false);
  const [diagnosticStatus, setDiagnosticStatus] = useState("System Standby");

  const runQuickFix = () => {
    setIsDiagnosticRunning(true);
    setDiagnosticStatus("Scanning Spooler & Ports...");
    setTimeout(() => {
      setDiagnosticStatus("All Systems Fully Optimized");
      setIsDiagnosticRunning(false);
    }, 1800);
  };

  return (
    <section className="relative min-h-[calc(100vh-72px)] overflow-hidden bg-[#F8FAFC] text-[#0F172A]">

      {/* =====================================================
          SUBTLE TECHNICAL BACKGROUND
      ====================================================== */}
      <div className="pointer-events-none absolute inset-0">
        {/* Core lighting glow */}
        <div className="absolute left-1/2 top-[30%] h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2563E5]/[0.03] blur-3xl" />
        
        {/* Engineering grid lines */}
        <div className="absolute inset-0 bg-[radial-gradient(#2563E5_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.02]" />

        {/* Architectural border brackets */}
        <div className="absolute left-[8%] top-[15%] hidden h-24 w-24 border-l border-t border-[#CBD5E1]/60 lg:block" />
        <div className="absolute bottom-[12%] right-[8%] hidden h-24 w-24 border-b border-r border-[#CBD5E1]/60 lg:block" />

        {/* Precise alignment dots */}
        <div className="absolute left-[12%] top-[40%] h-1.5 w-1.5 rounded-full bg-[#2563E5]/50 animate-pulse" />
        <div className="absolute right-[13%] top-[28%] h-1.5 w-1.5 rounded-full bg-[#2563E5]/50 animate-pulse" />
      </div>

      {/* =====================================================
          HERO CONTENT CONTAINER
      ====================================================== */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-72px)] max-w-[1340px] items-center justify-center px-6 py-20 lg:py-28">

        <div className="relative w-full text-center">

          {/* =====================================================
              FLOATING CARD — LEFT TOP (Live Hardware Detection)
          ===================================================== */}
          <div className="absolute -left-4 top-[4%] hidden -rotate-2 lg:block transition-all hover:rotate-0 duration-300">
            <div className="w-[210px] border border-[#E2E8F0] bg-white/90 backdrop-blur-sm p-4 text-left shadow-[0_16px_40px_rgba(15,23,42,0.08)] rounded-sm">
              <div className="flex items-center justify-between mb-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-[#EEF4FF] text-[#2563E5]">
                  <Printer size={15} />
                </div>
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-sm bg-emerald-50 text-[10px] font-mono font-semibold text-emerald-700 border border-emerald-200/60">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
                  ONLINE
                </span>
              </div>
              <p className="text-[12px] font-bold text-[#0F172A] tracking-tight">
                CoreLink Series-8
              </p>
              <p className="mt-0.5 text-[10px] text-slate-500 font-mono">
                IP: 192.168.1.104 • Secure
              </p>
            </div>
          </div>

          {/* =====================================================
              FLOATING CARD — RIGHT TOP (Wi-Fi Protocol Status)
          ===================================================== */}
          <div className="absolute -right-4 top-[10%] hidden rotate-2 lg:block transition-all hover:rotate-0 duration-300">
            <div className="w-[200px] border border-[#E2E8F0] bg-white/90 backdrop-blur-sm p-4 text-left shadow-[0_16px_40px_rgba(15,23,42,0.08)] rounded-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm bg-[#EEF4FF] text-[#2563E5]">
                  <Wifi size={15} />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-[#0F172A]">
                    5GHz Network
                  </p>
                  <div className="mt-0.5 flex items-center gap-1.5 font-mono">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    <span className="text-[10px] text-slate-500">
                      Signal: 98% Optimal
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================
              MAIN CENTERED EDITORIAL COMPOSITION
          ===================================================== */}
          <div className="mx-auto max-w-[880px]">

            {/* Interactive Mode Filter Badge */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#DCE5F2] bg-white/80 backdrop-blur-sm px-4 py-1.5 shadow-2xs">
              <span className="h-2 w-2 rounded-full bg-[#2563E5] animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#475569]">
                PRINTER SETUP & SUPPORT PLATFORM
              </span>
            </div>

            {/* High-Impact Master Headline */}
            <h1 className="text-[clamp(3.2rem,7.5vw,6.8rem)] font-extrabold leading-[0.92] tracking-[-0.07em] text-[#0F172A]">
              Printer setup,
              <span className="block text-[#2563E5] mt-1">
                made effortless.
              </span>
            </h1>

            {/* Polished Value Proposition Subcopy */}
            <p className="mx-auto mt-7 max-w-[580px] text-[16px] leading-relaxed text-[#475569] sm:text-[18px] font-normal">
              Connect wireless hardware, install companion software, and clear spooler errors instantly with professional step-by-step guidance.
            </p>

            {/* Primary Action Button Group */}
            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="group inline-flex items-center gap-3 rounded-sm bg-[#2563E5] px-8 py-4 text-[14px] font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#1D55C7] cursor-pointer"
              >
                <span>Start Printer Setup</span>
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </button>

              <button
                onClick={runQuickFix}
                disabled={isDiagnosticRunning}
                className="inline-flex items-center gap-2 rounded-sm bg-white hover:bg-slate-50 border border-slate-200 px-7 py-4 text-[14px] font-semibold text-[#0F172A] shadow-2xs transition-all duration-200 cursor-pointer"
              >
                <Zap size={15} className="text-[#2563E5]" />
                <span>{isDiagnosticRunning ? diagnosticStatus : "Run Quick Diagnostic"}</span>
              </button>
            </div>

            {/* Live Interactive Terminal Pill Feed */}
            <div className="mt-12 mx-auto max-w-[620px] bg-slate-900 text-slate-200 p-4 rounded-sm border border-slate-800 shadow-xl font-mono text-left">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-[11px]">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-slate-400 tracking-wider uppercase">DAEMON_STATUS // SECURE_LINK</span>
                </div>
                <span className="text-emerald-400 bg-emerald-950/80 px-2 py-0.5 border border-emerald-800/40 rounded-xs">
                  {diagnosticStatus}
                </span>
              </div>
              <div className="pt-3 flex flex-col sm:flex-row sm:items-center justify-between text-[12px] gap-2">
                <span className="text-slate-300 flex items-center gap-2">
                  <ShieldCheck size={14} className="text-[#2563E5]" />
                  SSL Handshake Verified & Driver Signatures Matched
                </span>
                <span className="text-slate-400">100% Ready</span>
              </div>
            </div>

          </div>

          {/* =====================================================
              FLOATING CARD — LEFT BOTTOM (Driver Support)
          ===================================================== */}
          <div className="absolute -left-4 bottom-[6%] hidden rotate-1 lg:block transition-all hover:rotate-0 duration-300">
            <div className="flex w-[220px] items-center gap-3.5 border border-[#E2E8F0] bg-white/90 backdrop-blur-sm p-4 text-left shadow-[0_16px_40px_rgba(15,23,42,0.08)] rounded-sm">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm bg-[#EEF4FF] text-[#2563E5]">
                <Settings size={16} />
              </div>
              <div>
                <p className="text-[12px] font-bold text-[#0F172A]">
                  Driver Package v4.2
                </p>
                <p className="mt-0.5 text-[10px] text-slate-500 font-mono">
                  Universal signed installer
                </p>
              </div>
            </div>
          </div>

          {/* =====================================================
              FLOATING CARD — RIGHT BOTTOM (Ready Status)
          ===================================================== */}
          <div className="absolute -right-4 bottom-[8%] hidden -rotate-1 lg:block transition-all hover:rotate-0 duration-300">
            <div className="flex w-[210px] items-center gap-3.5 border border-[#E2E8F0] bg-white/90 backdrop-blur-sm p-4 text-left shadow-[0_16px_40px_rgba(15,23,42,0.08)] rounded-sm">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm bg-[#2563E5] text-white">
                <Check size={16} />
              </div>
              <div>
                <p className="text-[12px] font-bold text-[#0F172A]">
                  Ready to Print
                </p>
                <p className="mt-0.5 text-[10px] text-slate-500 font-mono">
                  Zero configuration errors
                </p>
              </div>
            </div>
          </div>

          {/* =====================================================
              BOTTOM SYSTEM NAVIGATION BADGES
          ===================================================== */}
          <div className="mt-20 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-[#64748B]">
            <span className="flex items-center gap-2 hover:text-[#2563E5] transition-colors cursor-pointer">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2563E5]" />
              Setup
            </span>
            <span className="hidden sm:inline h-1 w-1 rounded-full bg-[#CBD5E1]" />
            <span className="flex items-center gap-2 hover:text-[#2563E5] transition-colors cursor-pointer">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2563E5]" />
              Drivers
            </span>
            <span className="hidden sm:inline h-1 w-1 rounded-full bg-[#CBD5E1]" />
            <span className="flex items-center gap-2 hover:text-[#2563E5] transition-colors cursor-pointer">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2563E5]" />
              Connectivity
            </span>
            <span className="hidden sm:inline h-1 w-1 rounded-full bg-[#CBD5E1]" />
            <span className="flex items-center gap-2 hover:text-[#2563E5] transition-colors cursor-pointer">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2563E5]" />
              Support
            </span>
          </div>

        </div>

      </div>

      {/* Printer Setup Modal Integration */}
      <PrinterSetupModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* =====================================================
          BOTTOM BORDER ACCENT
      ====================================================== */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-[#E2E8F0]" />

    </section>
  );
}