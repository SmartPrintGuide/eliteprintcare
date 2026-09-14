"use client"

import React, { useState } from "react";
import {
  Check,
  Droplets,
  PackageCheck,
  RefreshCw,
  AlertCircle,
} from "lucide-react";
import PrinterSetupModal from "./PrinterSetupModal";

export default function InkCartridgesIssueSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section
      id="cartridges"
      className="scroll-mt-28 border-b border-slate-200 bg-white px-6 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold text-[#2563E5]">
              Ink Cartridges Issue
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Resolve cartridge issues
              <span className="block text-[#2563E5]">
                with confidence.
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-slate-600 lg:ml-auto">
            From recognition errors to replacement warnings, check the
            cartridge, refresh the printer, and restore normal printing.
          </p>
        </div>

        {/* Diagnostic Area */}
        <div className="mt-14 grid overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Visual */}
          <div className="relative flex min-h-[360px] items-center justify-center overflow-hidden border-b border-slate-200 bg-white p-8 lg:border-b-0 lg:border-r">
            <div className="absolute left-8 top-8 text-xs font-medium text-slate-400">
              CARTRIDGE STATUS
            </div>

            {/* Cartridge */}
            <div className="relative">
              <div className="flex h-52 w-36 flex-col items-center rounded-2xl border border-slate-300 bg-white px-4 pt-5 shadow-[0_12px_35px_rgba(15,23,42,0.06)]">
                <div className="h-5 w-20 rounded-md bg-slate-100" />

                <div className="mt-5 flex h-24 w-20 items-end overflow-hidden rounded-lg border border-slate-200 bg-slate-50">
                  <div className="h-[62%] w-full bg-[#2563E5]" />
                </div>

                <div className="mt-4 h-2 w-12 rounded-full bg-slate-200" />
              </div>

              {/* Status */}
              <div className="absolute -right-28 top-14 flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-700 shadow-sm">
                <AlertCircle size={14} className="text-[#2563E5]" />
                Check cartridge
              </div>

              <div className="absolute -bottom-5 -left-16 flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-600 shadow-sm">
                <Droplets size={14} className="text-[#2563E5]" />
                Ink level
              </div>
            </div>
          </div>

          {/* Diagnostic Steps */}
          <div className="bg-slate-50 p-7 sm:p-9">
            <div className="mb-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Recommended checks
              </p>

              <h3 className="mt-2 text-xl font-semibold text-slate-950">
                Check these before replacing the cartridge
              </h3>
            </div>

            <div className="space-y-6">
              {/* Check 1 */}
              <div className="flex gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white border border-slate-200 text-[#2563E5]">
                  <PackageCheck size={17} />
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-slate-950">
                    Make sure the cartridge is seated correctly
                  </h4>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Remove and reinstall the cartridge carefully until it is
                    securely detected by the printer.
                  </p>
                </div>
              </div>

              {/* Check 2 */}
              <div className="flex gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white border border-slate-200 text-[#2563E5]">
                  <RefreshCw size={17} />
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-slate-950">
                    Refresh the printer status
                  </h4>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Restart the printer to clear temporary cartridge
                    recognition or status messages.
                  </p>
                </div>
              </div>

              {/* Check 3 */}
              <div className="flex gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white border border-slate-200 text-[#2563E5]">
                  <Check size={17} />
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-slate-950">
                    Confirm cartridge compatibility
                  </h4>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Check that the installed cartridge matches your printer
                    model and is recognized correctly.
                  </p>
                </div>
              </div>
            </div>

            {/* Result */}
            <div className="mt-9 border-t border-slate-200 pt-6">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                  <Check size={15} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-950">
                    Ready to print
                  </p>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    The printer should recognize the cartridge and return to
                    normal operation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Small Footer */}
        <div className="mt-7 flex flex-col gap-3 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            Cartridge problems can often be resolved without replacing the
            printer.
          </p>

          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 font-semibold text-[#2563E5] hover:text-[#1d4ed8]"
          >
            Check your printer
            <span>→</span>
          </button>
        </div>
      </div>

      <PrinterSetupModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialIssue="drivers"
      />
    </section>
  );
}