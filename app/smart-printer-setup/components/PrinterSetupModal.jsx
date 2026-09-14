// components/PrinterSetupModal.jsx
"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  X,
  Printer,
  Download,
  ArrowRight,
  Wrench,
  RefreshCw,
  Wifi,
  CheckCircle,
  Star,
  Search,
  Terminal,
  AlertTriangle,
  MessageSquare,
  Loader2,
  ShieldCheck,
} from "lucide-react";
import { hpPrinterData } from "./printerModel";

export default function PrinterSetupModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [selectedIssue, setSelectedIssue] = useState("");
  const [customModel, setCustomModel] = useState("");
  
  // Installation flow states: 'idle' | 'preparing' | 'installing' | 'error'
  const [installState, setInstallState] = useState("idle");
  const [terminalLogs, setTerminalLogs] = useState([]);
  const [prepProgress, setPrepProgress] = useState(0);

  const terminalEndRef = useRef(null);

  // Auto-scroll terminal to the bottom as new lines appear
  useEffect(() => {
    if (installState === "installing") {
      terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [terminalLogs, installState]);

  // Handle installation progression & realistic native installer simulation
  useEffect(() => {
    let prepTimer, progressInterval, logInterval, errorTimer;

    if (installState === "preparing") {
      setPrepProgress(0);
      // Smooth progress bar simulation for the 3 seconds waiting state
      progressInterval = setInterval(() => {
        setPrepProgress((prev) => {
          if (prev >= 100) {
            clearInterval(progressInterval);
            return 100;
          }
          return prev + 4;
        });
      }, 100);

      prepTimer = setTimeout(() => {
        setInstallState("installing");
        setTerminalLogs([
          `[00:00:01] INITIALIZING: HP Universal Device Enclave v14.2.0`,
          `[00:00:02] DETECT: Target hardware signature resolved -> HP ${customModel || "DeskJet 2755e"}`,
        ]);
      }, 3000);
    } else if (installState === "installing") {
      const realisticLogs = [
        "CONNECT: Establishing secure TLS v1.3 socket tunnel to hpprint.com:443...",
        "AUTH: Handshake successful. Verifying OAuth2 driver signing token...",
        "DOWNLOAD: Fetching base_driver_package_x64.cab (139.9 MB)... [OK]",
        "EXTRACT: Unpacking core printer spooler binaries to /Library/Printers/HP/",
        "PATCH: Updating firmware registers to match architecture specifications...",
        "DRIVER: Registering USB/Network PCL-3 universal interface controllers...",
        "CONFIG: Writing device nodes to /etc/cups/printers.conf...",
        "WARNING: Secure connection handshake delayed on port 443 (retrying packet sequence).",
        "ERROR: Failed to fetch official cryptographic signature from remote repository.",
        "CRITICAL_EXCEPTION: Driver installation interrupted by system security policy or file lock conflict.",
      ];

      let currentIndex = 0;
      logInterval = setInterval(() => {
        if (currentIndex < realisticLogs.length) {
          const logItem = realisticLogs[currentIndex];
          setTerminalLogs((prev) => [...prev, logItem]);
          currentIndex++;
        }
      }, 850);

      // Trigger error view after full sequence completion
      errorTimer = setTimeout(() => {
        setInstallState("error");
      }, 10500);
    }

    return () => {
      clearTimeout(prepTimer);
      clearInterval(progressInterval);
      clearInterval(logInterval);
      clearTimeout(errorTimer);
    };
  }, [installState, customModel]);

  if (!isOpen) return null;

  const handleReset = () => {
    setStep(1);
    setSelectedIssue("");
    setCustomModel("");
    setInstallState("idle");
    setTerminalLogs([]);
    setPrepProgress(0);
  };

  const supportIssues = [
    { id: "setup", title: "Setup New Printer", icon: Printer },
    { id: "drivers", title: "Update & Fix Drivers", icon: RefreshCw },
    { id: "wifi", title: "Wi-Fi & Connectivity Issues", icon: Wifi },
    { id: "troubleshoot", title: "General Troubleshooting", icon: Wrench },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-xl bg-white rounded-2xl border border-slate-200/80 shadow-[0_24px_64px_rgba(15,23,42,0.2)] overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Modal Header (Hidden during terminal execution for real native installer feel) */}
        {installState !== "installing" && (
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/80 backdrop-blur-sm">
            <div className="flex items-center gap-2.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#2563E5] animate-pulse shadow-sm shadow-[#2563E5]/50" />
              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-slate-600">
                HP Assistant // Step {step} of 3
              </span>
            </div>
            <button
              onClick={() => {
                handleReset();
                onClose();
              }}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-all cursor-pointer"
            >
              <X size={18} />
            </button>
          </div>
        )}

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8 overflow-y-auto">
          {step === 1 ? (
            <div className="animate-fadeIn">
              <div className="mb-6">
                <h3 className="text-2xl font-extrabold text-[#0F172A] tracking-tight">
                  Select your issue
                </h3>
                <p className="text-sm text-slate-500 mt-1">
                  Choose your primary objective to proceed.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {supportIssues.map((item) => {
                  const IconComp = item.icon;
                  const isSelected = selectedIssue === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setSelectedIssue(item.id)}
                      className={`group p-5 rounded-xl border text-left transition-all relative flex items-center gap-4 cursor-pointer ${
                        isSelected
                          ? "border-[#2563E5] bg-[#EEF4FF]/70 shadow-sm ring-1 ring-[#2563E5]/30"
                          : "border-slate-200/80 bg-white hover:border-slate-300 hover:bg-slate-50/50"
                      }`}
                    >
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                          isSelected
                            ? "bg-[#2563E5] text-white shadow-sm"
                            : "bg-slate-100 text-slate-600 group-hover:bg-[#EEF4FF] group-hover:text-[#2563E5]"
                        }`}
                      >
                        <IconComp size={20} />
                      </div>
                      <span className="text-sm font-bold text-[#0F172A]">
                        {item.title}
                      </span>
                      {isSelected && (
                        <div className="absolute top-4 right-4 text-[#2563E5]">
                          <CheckCircle size={16} />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>

              <button
                disabled={!selectedIssue}
                onClick={() => setStep(2)}
                className={`w-full py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  selectedIssue
                    ? "bg-[#2563E5] hover:bg-[#1D55C7] text-white shadow-md shadow-[#2563E5]/20"
                    : "bg-slate-100 text-slate-400 cursor-not-allowed"
                }`}
              >
                <span>Continue</span>
                <ArrowRight size={16} />
              </button>
            </div>
          ) : step === 2 ? (
            <div className="animate-fadeIn">
              <div className="mb-6">
                <h3 className="text-2xl font-extrabold text-[#0F172A] tracking-tight">
                  Enter your printer model
                </h3>
              </div>

              <div className="mb-8">
                <div className="flex items-center gap-2 mb-2.5">
                  <div className="w-6 h-6 rounded-md bg-[#2563E5] text-white flex items-center justify-center shadow-xs">
                    <Search size={14} />
                  </div>
                  <label className="text-xs font-mono font-extrabold text-[#2563E5] uppercase tracking-wider">
                    Enter Model Number Below
                  </label>
                </div>

                <input
                  type="text"
                  value={customModel}
                  onChange={(e) => setCustomModel(e.target.value)}
                  placeholder="e.g. DeskJet 2755e"
                  className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#2563E5] focus:ring-2 focus:ring-[#2563E5]/10 transition-colors"
                  autoFocus
                />

                <div className="pt-2">
                  <span className="text-[11px] font-mono font-semibold text-slate-400 uppercase tracking-wider block mb-2.5">
                    Or select from popular models:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {hpPrinterData.popularModels.map((m) => (
                      <button
                        key={m}
                        onClick={() => setCustomModel(m)}
                        className={`text-xs px-3.5 py-2 rounded-lg border font-medium transition-all cursor-pointer ${
                          customModel === m
                            ? "bg-[#2563E5] text-white border-[#2563E5] shadow-xs"
                            : "bg-slate-50/80 text-slate-700 border-slate-200 hover:border-[#2563E5] hover:text-[#2563E5] hover:bg-white"
                        }`}
                      >
                        {m}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setStep(1)}
                  className="px-5 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 font-semibold text-sm transition-all cursor-pointer"
                >
                  Back
                </button>
                <button
                  disabled={!customModel}
                  onClick={() => setStep(3)}
                  className={`flex-1 py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    customModel
                      ? "bg-[#2563E5] hover:bg-[#1D55C7] text-white shadow-md shadow-[#2563E5]/20"
                      : "bg-slate-100 text-slate-400 cursor-not-allowed"
                  }`}
                >
                  <span>Continue</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ) : (
            <div className="animate-fadeIn">
              {installState === "idle" ? (
                <div className="text-center">
                  <div className="mx-auto w-32 h-32 rounded-2xl bg-[#0096D6] flex flex-col items-center justify-center text-white shadow-lg shadow-blue-500/20 mb-5 relative group">
                    <Printer size={42} className="mb-2 text-white/90" />
                    <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-white/90">
                      HP Smart
                    </span>
                  </div>

                  <h4 className="text-xl font-extrabold text-[#0F172A] tracking-tight mb-1">
                    HP Smart Installer
                  </h4>
                  <p className="text-xs text-blue-600 font-semibold mb-4">
                    HP Inc. • Target Hardware: {customModel}
                  </p>

                  <p className="text-xs font-mono text-slate-500 mb-6">
                    File Size: 139.9 MB • Signature Verified
                  </p>

                  <div className="grid grid-cols-2 divide-x divide-slate-100 border-t border-b border-slate-100 py-4 mb-6">
                    <div className="flex flex-col items-center justify-center">
                      <div className="flex items-center gap-1 text-amber-500 font-extrabold text-lg">
                        <span>4.6</span>
                        <Star size={16} fill="currentColor" />
                      </div>
                      <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mt-0.5">
                        Rating
                      </span>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <span className="text-[#0F172A] font-extrabold text-lg">
                        520
                      </span>
                      <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mt-0.5">
                        Reviews
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => setInstallState("preparing")}
                    className="w-full py-4 rounded-xl bg-[#2563E5] hover:bg-[#1D55C7] text-white font-semibold text-sm transition-all shadow-xl shadow-[#2563E5]/25 flex items-center justify-center gap-2.5 cursor-pointer mb-4"
                  >
                    <Download size={18} />
                    <span>Install HP Smart App</span>
                  </button>

                  <div className="text-center">
                    <button
                      onClick={() => setStep(2)}
                      className="text-xs text-slate-400 hover:text-slate-700 underline font-mono cursor-pointer transition-colors"
                    >
                      ← Back to model selection
                    </button>
                  </div>
                </div>
              ) : installState === "preparing" ? (
                /* Extremely realistic Native OS Setup Wizard preparation screen */
                <div className="py-6 text-center animate-fadeIn">
                  <div className="flex items-center justify-between mb-8 pb-3 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-amber-400" />
                      <div className="w-3 h-3 rounded-full bg-emerald-400" />
                    </div>
                    <span className="text-xs font-mono text-slate-400">HP Device Setup Assistant v14.2</span>
                  </div>

                  <div className="w-16 h-16 rounded-2xl bg-blue-50 text-[#2563E5] flex items-center justify-center mx-auto mb-4 shadow-inner">
                    <Loader2 size={32} className="animate-spin" />
                  </div>

                  <h4 className="text-lg font-extrabold text-[#0F172A] tracking-tight mb-1">
                    Wait... we are installing it
                  </h4>
                  <p className="text-xs text-slate-500 font-mono mb-6">
                    Configuring secure channels for HP {customModel}...
                  </p>

                  {/* Native OS Progress Bar */}
                  <div className="w-full bg-slate-100 rounded-full h-2.5 mb-3 overflow-hidden border border-slate-200">
                    <div
                      className="bg-[#2563E5] h-2.5 rounded-full transition-all duration-150 ease-out"
                      style={{ width: `${prepProgress}%` }}
                    />
                  </div>
                  <div className="flex justify-between items-center text-[10px] font-mono text-slate-400">
                    <span>Preparing package manifest...</span>
                    <span>{prepProgress}%</span>
                  </div>
                </div>
              ) : installState === "installing" ? (
                /* Native Terminal Window with bottom-up scrolling stream & red error text */
                <div className="flex flex-col h-[380px] -m-2 sm:-m-4 bg-slate-950 rounded-xl overflow-hidden shadow-2xl border border-slate-800">
                  
                  {/* Terminal Window Title Bar */}
                  <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                      <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                      <span className="text-xs font-mono font-medium text-slate-300 ml-2">
                        hp-installer-daemon — bash — 80x24
                      </span>
                    </div>
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-500/10 text-amber-400 border border-amber-500/30 animate-pulse">
                      ● RUNNING
                    </span>
                  </div>

                  {/* Terminal Scrollable Logs Body */}
                  <div className="flex-1 p-4 font-mono text-xs overflow-y-auto space-y-2.5 flex flex-col">
                    <div className="text-slate-500 pb-1 border-b border-slate-900 text-[11px]">
                      Last login: {new Date().toLocaleDateString()} on ttys002
                    </div>
                    {terminalLogs.map((log, index) => (
                      <div
                        key={index}
                        className={`leading-relaxed tracking-wide ${
                          log.includes("ERROR") || log.includes("CRITICAL")
                            ? "text-red-500 font-bold bg-red-950/60 px-2 py-1 rounded border border-red-900/50 shadow-xs"
                            : log.includes("WARNING")
                            ? "text-amber-400"
                            : "text-emerald-400"
                        }`}
                      >
                        <span className="text-slate-600 mr-2 select-none">{">"}</span>
                        {log}
                      </div>
                    ))}
                    {/* Auto-scroll anchor target */}
                    <div ref={terminalEndRef} />
                  </div>

                  {/* Terminal Footer status */}
                  <div className="px-4 py-2 bg-slate-900/80 border-t border-slate-800 flex items-center justify-between text-[10px] font-mono text-slate-400">
                    <span>Target: HP {customModel}</span>
                    <span className="flex items-center gap-1.5 text-emerald-400">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      Executing system scripts
                    </span>
                  </div>
                </div>
              ) : (
                <div className="text-center py-4 animate-fadeIn">
                  <div className="mx-auto w-16 h-16 rounded-2xl bg-red-50 text-red-500 flex items-center justify-center border border-red-100 shadow-sm mb-4">
                    <AlertTriangle size={32} />
                  </div>

                  <h4 className="text-xl font-extrabold text-[#0F172A] tracking-tight mb-1">
                    Installation Interrupted
                  </h4>
                  <p className="text-xs text-slate-500 max-w-sm mx-auto mb-4">
                    We encountered a signature or driver conflict while configuring your HP {customModel}.
                  </p>

                  <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3 max-w-xs mx-auto mb-6 text-center">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block mb-0.5">
                      Error Code Reference
                    </span>
                    <span className="text-sm font-mono font-bold text-red-600">
                      ERR_HP_DRIVER_CONFLICT_0x8004
                    </span>
                  </div>

                  <button
                    onClick={() => {
                      alert("Connecting you securely to live HP support expert...");
                    }}
                    className="w-full py-4 rounded-xl bg-[#2563E5] hover:bg-[#1D55C7] text-white font-semibold text-sm transition-all shadow-xl shadow-[#2563E5]/25 flex items-center justify-center gap-2.5 cursor-pointer mb-3"
                  >
                    <MessageSquare size={18} />
                    <span>Chat Now with Support Expert</span>
                  </button>

                  <button
                    onClick={() => setInstallState("idle")}
                    className="text-xs text-slate-400 hover:text-slate-700 underline font-mono cursor-pointer transition-colors"
                  >
                    ← Try installation again
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}