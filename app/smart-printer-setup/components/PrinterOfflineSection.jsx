"use client"

import React, { useState } from "react";
import { AlertCircle, Plug, RefreshCw, Wifi } from "lucide-react";
import PrinterSetupModal from "./PrinterSetupModal";

export default function PrinterOfflineSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section
      id="offline"
      className="scroll-mt-28 border-b border-slate-200 bg-white px-6 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold text-[#2563E5]">
            Printer Offline
          </p>

          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Get your printer
            <span className="block text-[#2563E5]">
              back online.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Check the connection, refresh your printer services, and follow
            simple steps to restore your printer to a ready state.
          </p>
        </div>

        {/* Main Status */}
        <div className="mt-14 overflow-hidden rounded-2xl border border-slate-200 bg-white">
          {/* Status Header */}
          <div className="flex flex-col gap-5 border-b border-slate-200 bg-slate-50/70 p-7 sm:p-9 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EEF4FF] text-[#2563E5]">
                <AlertCircle size={22} />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Current status
                </p>

                <h3 className="mt-1 text-lg font-semibold text-slate-950">
                  Printer appears to be offline
                </h3>
              </div>
            </div>

            <span className="inline-flex w-fit items-center rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600">
              Connection required
            </span>
          </div>

          {/* Steps */}
          <div className="divide-y divide-slate-200">
            {/* Step 1 */}
            <div className="flex gap-5 p-7 sm:p-9">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#EEF4FF] text-sm font-semibold text-[#2563E5]">
                01
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <Wifi size={17} className="text-[#2563E5]" />

                  <h3 className="text-base font-semibold text-slate-950">
                    Check the network
                  </h3>
                </div>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                  Make sure your printer is connected to the same Wi-Fi
                  network as your computer or mobile device.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-5 p-7 sm:p-9">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-sm font-semibold text-slate-700">
                02
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <RefreshCw size={17} className="text-slate-500" />

                  <h3 className="text-base font-semibold text-slate-950">
                    Refresh the connection
                  </h3>
                </div>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                  Restart the printer and refresh the connection to clear
                  temporary communication issues.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-5 p-7 sm:p-9">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-sm font-semibold text-slate-700">
                03
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <Plug size={17} className="text-slate-500" />

                  <h3 className="text-base font-semibold text-slate-950">
                    Reconnect and test
                  </h3>
                </div>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                  Reconnect the printer and send a test print to confirm that
                  it is online and ready.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Result */}
        <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div>
            <p className="text-sm font-semibold text-slate-950">
              Printer still showing offline?
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Start the guided troubleshooting process for your printer.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="inline-flex shrink-0 items-center justify-center rounded-lg bg-[#2563E5] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1d4ed8]"
          >
            Fix Printer Offline
            <span className="ml-2">→</span>
          </button>
        </div>
      </div>

      <PrinterSetupModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialIssue="wifi"
      />
    </section>
  );
}