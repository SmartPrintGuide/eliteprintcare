"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  Wifi,
  Download,
  ShieldAlert,
  Cpu,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const supportCategories = [
  {
    id: "wifi",
    title: "Wireless & Wi-Fi Setup",
    subtitle: "Network & Connection",
    description: "Connect your printer smoothly to dual-band Wi-Fi routers, repair dropped IP connections, and securely link mobile phones or laptops.",
    badge: "Most Requested",
    icon: Wifi,
    steps: ["Select your network SSID", "Enter secure WPA2/WPA3 password", "Run automated test page print"],
  },
  {
    id: "drivers",
    title: "Driver & Software Package",
    subtitle: "System Compatibility",
    description: "Download verified, clean installation suites for Windows 11/10, macOS, and ChromeOS without compatibility conflicts or bloatware.",
    badge: "Updated for 2026",
    icon: Download,
    steps: ["Detect operating system", "Download certified driver package", "Run automated installer wizard"],
  },
  {
    id: "offline",
    title: "Offline & Error Troubleshooting",
    subtitle: "Diagnostics & Queue",
    description: "Clear stubborn print jobs, resolve 'Printer Offline' status errors, and fix cartridge recognition or paper jam alerts instantly.",
    badge: "Instant Solution",
    icon: ShieldAlert,
    steps: ["Clear stuck print spooler", "Restart spooler service", "Reset printer hardware connection"],
  },
  {
    id: "hardware",
    title: "Scanner & Multi-Function Setup",
    subtitle: "Device Calibration",
    description: "Calibrate flatbed scanners, configure network scan-to-folder destinations, and optimize multi-device home or office setups.",
    badge: "Hardware Guide",
    icon: Cpu,
    steps: ["Connect scanner via USB/Ethernet", "Install TWAIN/WIA drivers", "Test scan resolution presets"],
  },
];

function Test2QuickFixes() {
  const [activeTab, setActiveTab] = useState(supportCategories[0]);

  return (
    <section className="relative w-full bg-white py-24 px-5 sm:px-8 lg:px-12 overflow-hidden border-t border-slate-100">
      <div className="mx-auto max-w-[1600px]">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1.5 shadow-sm mb-4">
            <Sparkles size={14} className="text-blue-600" />
            <span className="text-[11px] font-bold uppercase tracking-[2px] text-blue-600">
              Interactive Support Navigator
            </span>
          </div>
          <h2 className="text-[36px] font-extrabold tracking-tight text-slate-900 sm:text-[44px] leading-[1.15]">
            Select a topic to explore instant guided resolution.
          </h2>
        </div>

        {/* Interactive Split Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Category Navigation Buttons */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {supportCategories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeTab.id === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat)}
                  type="button"
                  className={`group flex items-center justify-between p-5 rounded-2xl border text-left transition-all duration-300 ${
                    isActive
                      ? "border-blue-600 bg-blue-600 text-white shadow-lg shadow-blue-600/20 scale-[1.01]"
                      : "border-slate-200/80 bg-slate-50/50 text-slate-700 hover:border-slate-300 hover:bg-slate-100/80"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors ${
                        isActive
                          ? "bg-white/20 text-white"
                          : "bg-white text-blue-600 shadow-sm border border-slate-200/60"
                      }`}
                    >
                      <Icon size={20} />
                    </div>
                    <div>
                      <span className={`block text-[11px] font-bold uppercase tracking-wider ${isActive ? "text-blue-200" : "text-slate-400"}`}>
                        {cat.subtitle}
                      </span>
                      <span className={`block text-[16px] font-bold mt-0.5 ${isActive ? "text-white" : "text-slate-900"}`}>
                        {cat.title}
                      </span>
                    </div>
                  </div>

                  <ArrowRight
                    size={18}
                    className={`transition-transform duration-300 ${
                      isActive ? "translate-x-1 text-white" : "text-slate-400 group-hover:translate-x-1"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Dynamic Preview Display Panel */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl border border-slate-200/80 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 p-8 sm:p-10 shadow-xl shadow-slate-200/40">
              
              {/* Badge & Subtitle */}
              <div className="flex items-center justify-between mb-6">
                <span className="rounded-full bg-blue-100/80 px-3.5 py-1 text-[11px] font-bold text-blue-700 border border-blue-200">
                  {activeTab.badge}
                </span>
                <span className="text-[12px] font-bold text-slate-400 uppercase tracking-widest">
                  Step-by-Step Overview
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-[24px] sm:text-[28px] font-extrabold text-slate-900 tracking-tight">
                {activeTab.title}
              </h3>
              <p className="mt-3 text-[15px] sm:text-[16px] leading-[1.7] text-slate-600">
                {activeTab.description}
              </p>

              {/* Step checklist preview */}
              <div className="mt-8 pt-8 border-t border-slate-200/80">
                <p className="text-[12px] font-bold uppercase tracking-wider text-slate-500 mb-4">
                  Guided Resolution Sequence:
                </p>
                <div className="grid gap-3">
                  {activeTab.steps.map((step, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-sm">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600 font-bold text-[11px]">
                        {idx + 1}
                      </div>
                      <span className="text-[14px] font-semibold text-slate-800">
                        {step}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 flex items-center justify-end">
                <button
                  type="button"
                  className="group flex h-[48px] items-center gap-2.5 rounded-xl bg-blue-600 px-7 text-[14px] font-semibold text-white shadow-md shadow-blue-600/25 transition-all duration-300 hover:bg-blue-700 hover:shadow-blue-600/40"
                >
                  <span>Launch Interactive Guide</span>
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Test2QuickFixes;