"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  ScanLine,
  Settings2,
  Wifi,
} from "lucide-react";
import PrinterSetupModal from "./PrinterSetupModal";

export default function ScannerSetupSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section
      id="scanner"
      className="scroll-mt-28 border-b border-slate-200 bg-slate-50 px-6 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center">
          <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-white border border-slate-200 text-[#2563E5]">
            <ScanLine size={20} />
          </div>

          <p className="mt-5 text-sm font-semibold text-[#2563E5]">
            Scanner Setup
          </p>

          <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Scan documents with
            <span className="block text-[#2563E5]">
              confidence and clarity.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600">
            Connect your scanner, configure the required software, and make
            sure everything is ready for your next scan.
          </p>
        </div>

        {/* Workflow */}
        <div className="relative mt-16">
          {/* Connecting Line */}
          <div className="absolute left-[25px] top-8 hidden h-px w-[calc(100%-50px)] bg-slate-300 md:block" />

          <div className="relative grid gap-10 md:grid-cols-3">
            {/* Step 1 */}
            <div className="text-center">
              <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-full border-4 border-slate-50 bg-white text-[#2563E5] shadow-[0_0_0_1px_#e2e8f0]">
                <Wifi size={22} />
              </div>

              <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-slate-400">
                Step 01
              </p>

              <h3 className="mt-2 text-lg font-semibold text-slate-950">
                Connect
              </h3>

              <p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-slate-600">
                Connect the scanner to your computer or network and make sure
                the device is detected.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-full border-4 border-slate-50 bg-white text-[#2563E5] shadow-[0_0_0_1px_#e2e8f0]">
                <Settings2 size={22} />
              </div>

              <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-slate-400">
                Step 02
              </p>

              <h3 className="mt-2 text-lg font-semibold text-slate-950">
                Configure
              </h3>

              <p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-slate-600">
                Install the appropriate scan software and configure your
                preferred scanning settings.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-full border-4 border-slate-50 bg-white text-emerald-600 shadow-[0_0_0_1px_#e2e8f0]">
                <CheckCircle2 size={22} />
              </div>

              <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-slate-400">
                Step 03
              </p>

              <h3 className="mt-2 text-lg font-semibold text-slate-950">
                Start scanning
              </h3>

              <p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-slate-600">
                Run a quick test scan and confirm your documents are captured
                correctly.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Action */}
        <div className="mx-auto mt-16 flex max-w-3xl flex-col items-center justify-between gap-5 rounded-xl border border-slate-200 bg-white px-6 py-5 sm:flex-row sm:px-7">
          <div>
            <p className="text-sm font-semibold text-slate-950">
              Ready to scan?
            </p>
            <p className="mt-1 text-sm text-slate-500">
              Start the guided scanner setup.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 rounded-lg bg-[#2563E5] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1d4ed8]"
          >
            Start Scanner Setup
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      <PrinterSetupModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialIssue="setup"
      />
    </section>
  );
}