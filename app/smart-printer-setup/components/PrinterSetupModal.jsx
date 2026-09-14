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

export default function PrinterSetupModal({
  isOpen,
  onClose,
  initialIssue = null,
}) {
  const [step, setStep] = useState(1);
  const [selectedIssue, setSelectedIssue] = useState("");
  const [customModel, setCustomModel] = useState("");

  useEffect(() => {
    if (isOpen && initialIssue) {
      setSelectedIssue(initialIssue);
      setStep(2);
      return;
    }

    if (!isOpen) {
      setStep(1);
      setSelectedIssue("");
      setCustomModel("");
      setInstallState("idle");
      setTerminalLogs([]);
      setPrepProgress(0);
      setPrepStageText("Preparing package manifest...");
    }
  }, [isOpen, initialIssue]);

  // Installation flow states: 'idle' | 'preparing' | 'installing' | 'error'
  const [installState, setInstallState] = useState("idle");
  const [terminalLogs, setTerminalLogs] = useState([]);
  const [prepProgress, setPrepProgress] = useState(0);
  const [prepStageText, setPrepStageText] = useState(
    "Preparing package manifest...",
  );

  const terminalEndRef = useRef(null);

  // Auto-scroll terminal to the bottom as new lines appear
  useEffect(() => {
    if (installState === "installing") {
      terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [terminalLogs, installState]);

  // Handle installation progression & realistic native installer simulation
  useEffect(() => {
    let prepTimer, progressInterval, logInterval;

    if (installState === "preparing") {
      const prepStages = [
        { percent: 0, label: "Preparing package manifest..." },
        { percent: 15, label: "Downloading HP Smart package..." },
        { percent: 40, label: "Verifying digital signature..." },
        { percent: 50, label: "Extracting installer bundle..." },
        { percent: 65, label: "Registering printer services..." },
        { percent: 80, label: "Configuring printer drivers..." },
        { percent: 99, label: "Finalizing secure installation..." },
        { percent: 100, label: "Installation ready to launch..." },
      ];

      setPrepProgress(0);
      setPrepStageText(prepStages[0].label);

      let stageIndex = 0;
      progressInterval = setInterval(() => {
        stageIndex += 1;

        if (stageIndex < prepStages.length) {
          const nextStage = prepStages[stageIndex];
          setPrepProgress(nextStage.percent);
          setPrepStageText(nextStage.label);
        } else {
          clearInterval(progressInterval);
          setPrepProgress(100);
          setPrepStageText(prepStages[prepStages.length - 1].label);
        }
      }, 420);

      prepTimer = setTimeout(() => {
        setInstallState("installing");
        setTerminalLogs([]);
      }, 420 * prepStages.length + 350);
    } else if (installState === "installing") {
      const realisticLogs = [
        "[00:00:03] DOWNLOAD: 0% - Preparing secure download stream to hpprint.com:443...",
        "[00:00:04] DOWNLOAD: 15% - Receiving base_driver_package_x64.cab (39.7 MB / 139.9 MB)...",
        "[00:00:05] VERIFY: 40% - Validating package hashes and digital signatures...",
        "[00:00:06] WARNING: Secure connection handshake delayed on port 443 (retrying packet sequence)...",
        "[00:00:07] EXTRACT: 50% - Unpacking core printer spooler binaries to /Library/Printers/HP/",
        "[00:00:08] PATCH: 65% - Updating firmware registers to match architecture specifications...",
        "[00:00:09] DRIVER: 80% - Registering USB/Network PCL-3 universal interface controllers...",
        "[00:00:10] CONFIG: 99% - Writing device nodes to /etc/cups/printers.conf...",
        "[00:00:11] SUCCESS: 100% - Installation completed successfully. HP Smart is now ready for first use.",
        "[00:00:12] WARNING: Background service health check detected a non-critical driver mismatch.",
        "[00:00:13] ERROR: Failed to fetch official cryptographic signature from remote repository.",
        "[00:00:14] ERROR: Driver installation interrupted by system security policy or file lock conflict.",
        "[00:00:15] CRITICAL_EXCEPTION: HP Smart could not fully complete setup and is rolling back changes.",
      ];

      let currentIndex = 0;
      logInterval = setInterval(() => {
        if (currentIndex < realisticLogs.length) {
          const logItem = realisticLogs[currentIndex];
          setTerminalLogs((prev) => [...prev, logItem]);
          currentIndex++;
        } else {
          clearInterval(logInterval);
          setInstallState("error");
        }
      }, 1000);
    }

    return () => {
      clearTimeout(prepTimer);
      clearInterval(progressInterval);
      clearInterval(logInterval);
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
    setPrepStageText("Preparing package manifest...");
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
                HP Assistant 
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
                <div className="animate-fadeIn">
                  <div className="mx-auto max-w-[620px] rounded-[32px] border border-slate-200 bg-[#f4f9ff] p-4 shadow-[0_35px_100px_rgba(15,23,42,0.18)]">
                    <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 shadow-sm">
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-red-400" />
                        <div className="h-3 w-3 rounded-full bg-amber-400" />
                        <div className="h-3 w-3 rounded-full bg-emerald-400" />
                      </div>
                      <span className="text-[11px] font-mono font-bold uppercase tracking-[0.24em] text-slate-500">
                        HP Device Setup Assistant v14.2
                      </span>
                    </div>

                    <div className="px-3 pb-1 pt-8 text-center">
                      <div className="mx-auto flex h-[110px] w-[110px] items-center justify-center rounded-[30px] bg-gradient-to-br from-[#edf7ff] via-[#d9eeff] to-[#cfe4fb] shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] ring-4 ring-blue-100">
                        <div className="flex h-[64px] w-[64px] items-center justify-center rounded-[22px] bg-white/85 shadow-[0_8px_24px_rgba(37,99,229,0.12)]">
                          <Loader2
                            size={34}
                            className="animate-spin text-[#2563E5]"
                          />
                        </div>
                      </div>

                      <h4 className="mt-6 text-[28px] font-extrabold tracking-[-0.05em] text-[#0F172A]">
                        Wait... we are installing it
                      </h4>

                      <p className="mt-3 text-sm font-medium text-slate-500">
                        Configuring secure channels for HP{" "}
                        <span className="font-semibold text-slate-700">
                          {customModel}
                        </span>
                        ...
                      </p>

                      <div className="mt-8 rounded-[22px] border border-slate-200 bg-white/85 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)]">
                        <div className="mb-3 flex items-center justify-between text-[10px] font-mono font-bold uppercase tracking-[0.18em] text-slate-400">
                          <span>{prepStageText}</span>
                          <span>{prepProgress}%</span>
                        </div>

                        <div className="h-3 w-full overflow-hidden rounded-full border border-slate-200 bg-slate-200/80 shadow-inner">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-[#7dbaff] via-[#2c6ce6] to-[#184eb7] transition-all duration-150 ease-out"
                            style={{ width: `${prepProgress}%` }}
                          />
                        </div>

                        <div className="mt-4 grid grid-cols-3 gap-3">
                          <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-left">
                            <div className="text-[9px] font-mono font-bold uppercase tracking-[0.18em] text-slate-400">
                              Status
                            </div>
                            <div className="mt-1 text-sm font-bold text-slate-800">
                              Secure
                            </div>
                          </div>
                          <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-left">
                            <div className="text-[9px] font-mono font-bold uppercase tracking-[0.18em] text-slate-400">
                              Driver
                            </div>
                            <div className="mt-1 text-sm font-bold text-slate-800">
                              Verified
                            </div>
                          </div>
                          <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-left">
                            <div className="text-[9px] font-mono font-bold uppercase tracking-[0.18em] text-slate-400">
                              Network
                            </div>
                            <div className="mt-1 text-sm font-bold text-slate-800">
                              Ready
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : installState === "installing" ? (
                <div className="animate-fadeIn">
                  <div className="mx-auto flex h-[430px] w-full max-w-[800px] flex-col overflow-hidden rounded-[30px] border border-slate-800 bg-[#07131d] shadow-[0_32px_120px_rgba(2,9,17,0.7)]">
                    <div className="flex items-center justify-between border-b border-slate-800 bg-[#111f2c] px-4 py-2.5">
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-rose-500/90" />
                        <div className="h-3 w-3 rounded-full bg-amber-500/90" />
                        <div className="h-3 w-3 rounded-full bg-emerald-500/90" />
                        <span className="ml-2 text-xs font-mono font-medium tracking-[0.12em] text-slate-300">
                          hp-installer-daemon — bash — 80x24
                        </span>
                      </div>

                      <span className="inline-flex items-center gap-1.5 rounded border border-amber-500/30 bg-amber-500/10 px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-[0.18em] text-amber-300 animate-pulse">
                        <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                        Running
                      </span>
                    </div>

                    <div className="flex-1 overflow-y-auto bg-[#07131d] p-4 font-mono text-xs text-emerald-300">
                      <div className="border-b border-slate-800/80 pb-2 text-[11px] text-slate-500">
                        Last login: {new Date().toLocaleDateString()} on ttys002
                      </div>

                      <div className="mt-3 space-y-2.5">
                        {terminalLogs.map((log, index) => (
                          <div
                            key={index}
                            className={`flex items-start gap-2 leading-relaxed tracking-wide ${
                              log.includes("ERROR") || log.includes("CRITICAL")
                                ? "rounded-md border border-red-500/30 bg-red-950/60 px-2 py-1 text-red-400"
                                : log.includes("WARNING")
                                  ? "text-amber-300"
                                  : "text-emerald-300"
                            }`}
                          >
                            <span className="select-none text-slate-600">
                              &gt;
                            </span>
                            <span>{log}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-4 flex items-center gap-2 text-emerald-300">
                        <span className="select-none text-slate-600">&gt;</span>
                        <span className="inline-block h-4 w-2 animate-pulse bg-emerald-300" />
                      </div>

                      <div ref={terminalEndRef} />
                    </div>

                    <div className="flex items-center justify-between border-t border-slate-800 bg-[#0d1b29] px-4 py-2 text-[10px] font-mono text-slate-400">
                      <span>Target: HP {customModel}</span>
                      <span className="flex items-center gap-1.5 text-emerald-300">
                        <span className="h-2 w-2 animate-ping rounded-full bg-emerald-400" />
                        Executing system scripts
                      </span>
                    </div>
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
                    We encountered a signature or driver conflict while
                    configuring your HP {customModel}.
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
                      alert(
                        "Connecting you securely to live HP support expert...",
                      );
                    }}
                    className="w-full py-4 rounded-xl bg-[#2563E5] hover:bg-[#1D55C7] text-white font-semibold text-sm transition-all shadow-xl shadow-[#2563E5]/25 flex items-center justify-center gap-2.5 cursor-pointer mb-3"
                  >
                    <MessageSquare size={18} />
                    <span>Chat Now with Support Expert</span>
                  </button>

                  <button className="text-sm text-slate-500 hover:text-slate-800 cursor-pointer transition-colors">
                    Don’t reinstall — it may affect your system
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
