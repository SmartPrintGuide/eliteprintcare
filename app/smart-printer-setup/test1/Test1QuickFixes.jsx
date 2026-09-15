import React from "react";
import {
  ArrowRight,
  Cable,
  Download,
  ScanLine,
  TriangleAlert,
  Wifi,
} from "lucide-react";

const fixes = [
  {
    icon: Wifi,
    title: "Wireless printer setup",
    description: "Connect your printer to Wi‑Fi, install the correct driver, and verify your print queue is active.",
    accent: "from-[#eaf3ff] to-white",
  },
  {
    icon: Download,
    title: "Driver installation",
    description: "Set up the newest software package for Windows, Mac, or mobile devices without compatibility issues.",
    accent: "from-[#eefaf5] to-white",
  },
  {
    icon: ScanLine,
    title: "Scanner & device setup",
    description: "Guide your scanner through network or USB setup so you can scan, copy, and share documents quickly.",
    accent: "from-[#fff8eb] to-white",
  },
  {
    icon: TriangleAlert,
    title: "Offline & cartridge fixes",
    description: "Resolve printer offline states, stuck jobs, and cartridge recognition errors with step-by-step checks.",
    accent: "from-[#fff1f2] to-white",
  },
];

function Test1QuickFixes() {
  return (
    <section className="bg-[#f8fafc] px-6 py-16 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2564e5]">
            Common issues
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-[-0.05em] text-[#14213d] sm:text-4xl">
            Printer support for the problems people run into most.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {fixes.map(({ icon: Icon, title, description, accent }) => (
            <div
              key={title}
              className={`rounded-[26px] border border-[#edf1f7] bg-gradient-to-br ${accent} p-6 shadow-[0_16px_34px_rgba(15,23,42,0.04)]`}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#2564e5] shadow-sm ring-1 ring-[#e5ebf8]">
                <Icon className="h-5 w-5" />
              </div>

              <h3 className="mt-5 text-xl font-bold text-[#14213d]">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#52617b]">{description}</p>

              <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#2564e5]">
                Learn more
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Test1QuickFixes;
