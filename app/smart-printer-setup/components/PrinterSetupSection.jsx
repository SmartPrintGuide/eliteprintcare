"use client"

import React, { useState } from "react";
import {
  ArrowRight,
  Check,
  Download,
  Printer,
  Wifi,
} from "lucide-react";
import PrinterSetupModal from "./PrinterSetupModal";

export default function PrinterSetupSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const steps = [
    {
      number: "01",
      icon: Wifi,
      title: "Connect",
      description:
        "Connect your printer to your computer or wireless network.",
    },
    {
      number: "02",
      icon: Download,
      title: "Install",
      description:
        "Install the required software or driver for your printer model.",
    },
    {
      number: "03",
      icon: Printer,
      title: "Test",
      description:
        "Send a test print to confirm your printer is ready.",
    },
  ];

  return (
    <section
      id="printer-setup"
      className="scroll-mt-28 border-b border-slate-200 bg-white px-6 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="grid gap-6 lg:grid-cols-[1fr_420px] lg:items-end">
          <div>
            <p className="text-sm font-semibold text-[#2563E5]">
              Printer Setup
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Get your printer
              <span className="block text-[#2563E5]">
                ready to print.
              </span>
            </h2>
          </div>

          <p className="text-sm leading-6 text-slate-500 lg:pb-1">
            Follow the essential setup steps to connect your printer,
            install the required software, and verify the connection.
          </p>
        </div>

        {/* Setup Flow */}
        <div className="mt-14 border-y border-slate-200">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className={`group grid gap-6 px-2 py-8 sm:px-4 sm:py-9 lg:grid-cols-[80px_180px_1fr_auto] lg:items-center ${
                  index !== steps.length - 1
                    ? "border-b border-slate-200"
                    : ""
                }`}
              >
                {/* Number */}
                <div className="text-sm font-semibold text-slate-300">
                  {step.number}
                </div>

                {/* Title */}
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#EEF4FF] text-[#2563E5]">
                    <Icon size={17} strokeWidth={1.8} />
                  </div>

                  <h3 className="text-base font-semibold text-slate-950">
                    {step.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="max-w-xl text-sm leading-6 text-slate-500 lg:ml-4">
                  {step.description}
                </p>

                {/* Status */}
                <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
                  <Check size={15} className="text-emerald-500" />
                  Required
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Action */}
        <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-slate-950">
              Ready to begin?
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Start with your printer model and follow the guided setup.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="inline-flex w-fit items-center gap-2 rounded-lg bg-[#2563E5] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1d4ed8]"
          >
            Start Printer Setup
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