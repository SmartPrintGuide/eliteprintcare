"use client"


import React, { useState } from "react";
import {
  Activity,
  CheckCircle2,
  Gauge,
  Network,
  ShieldCheck,
} from "lucide-react";
import PrinterSetupModal from "./PrinterSetupModal";

export default function DiagnosticsSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section
      id="diagnostics"
      className="scroll-mt-28 border-b border-slate-200 bg-white px-6 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-[#2563E5]">
              Diagnostics
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Find the problem.
              <span className="block text-[#2563E5]">
                Fix it with confidence.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Run a focused check across your printer, connection, drivers,
              and essential services to identify what needs attention.
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
            <Activity size={17} className="text-[#2563E5]" />
            Printer health check
          </div>
        </div>

        {/* Diagnostic Console */}
        <div className="mt-14 overflow-hidden rounded-2xl border border-slate-200 bg-white">
          {/* Console Top */}
          <div className="flex flex-col gap-5 border-b border-slate-200 bg-slate-50/60 p-6 sm:p-8 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Diagnostic report
              </p>

              <div className="mt-2 flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                  <CheckCircle2 size={17} />
                </span>

                <h3 className="text-lg font-semibold text-slate-950">
                  Printer system is responding
                </h3>
              </div>
            </div>

            <div className="text-left md:text-right">
              <p className="text-xs text-slate-400">Overall status</p>
              <p className="mt-1 text-sm font-semibold text-emerald-600">
                No critical issues
              </p>
            </div>
          </div>

          {/* Checks */}
          <div className="divide-y divide-slate-200">
            {/* Printer */}
            <div className="grid gap-4 p-6 sm:p-7 md:grid-cols-[220px_1fr_auto] md:items-center">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-[#2563E5]">
                  <Gauge size={18} />
                </div>

                <span className="text-sm font-semibold text-slate-950">
                  Printer hardware
                </span>
              </div>

              <div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full w-[96%] rounded-full bg-[#2563E5]" />
                </div>

                <p className="mt-2 text-xs text-slate-500">
                  Device detected and responding normally.
                </p>
              </div>

              <span className="text-xs font-semibold text-emerald-600">
                Healthy
              </span>
            </div>

            {/* Network */}
            <div className="grid gap-4 p-6 sm:p-7 md:grid-cols-[220px_1fr_auto] md:items-center">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-[#2563E5]">
                  <Network size={18} />
                </div>

                <span className="text-sm font-semibold text-slate-950">
                  Network connection
                </span>
              </div>

              <div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full w-[88%] rounded-full bg-[#2563E5]" />
                </div>

                <p className="mt-2 text-xs text-slate-500">
                  Connection is available and the printer is reachable.
                </p>
              </div>

              <span className="text-xs font-semibold text-emerald-600">
                Healthy
              </span>
            </div>

            {/* Drivers */}
            <div className="grid gap-4 p-6 sm:p-7 md:grid-cols-[220px_1fr_auto] md:items-center">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-[#2563E5]">
                  <ShieldCheck size={18} />
                </div>

                <span className="text-sm font-semibold text-slate-950">
                  Drivers & services
                </span>
              </div>

              <div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full w-[92%] rounded-full bg-[#2563E5]" />
                </div>

                <p className="mt-2 text-xs text-slate-500">
                  Required printer software is available and responding.
                </p>
              </div>

              <span className="text-xs font-semibold text-emerald-600">
                Healthy
              </span>
            </div>

            {/* Print Service */}
            <div className="grid gap-4 p-6 sm:p-7 md:grid-cols-[220px_1fr_auto] md:items-center">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-[#2563E5]">
                  <Activity size={18} />
                </div>

                <span className="text-sm font-semibold text-slate-950">
                  Print service
                </span>
              </div>

              <div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full w-[94%] rounded-full bg-[#2563E5]" />
                </div>

                <p className="mt-2 text-xs text-slate-500">
                  Print service is active and ready to process jobs.
                </p>
              </div>

              <span className="text-xs font-semibold text-emerald-600">
                Healthy
              </span>
            </div>
          </div>

          {/* Bottom */}
          <div className="flex flex-col gap-4 border-t border-slate-200 bg-slate-50/50 p-6 sm:p-7 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold text-slate-950">
                Diagnostic check complete
              </p>

              <p className="mt-1 text-xs text-slate-500">
                Your printer is ready for the next troubleshooting step.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center rounded-lg bg-[#2563E5] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1d4ed8]"
            >
              Run Diagnostics
            </button>
          </div>
        </div>
      </div>

      <PrinterSetupModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialIssue="troubleshoot"
      />
    </section>
  );
}