import React from "react";
import { Check, MonitorSmartphone, Printer, RefreshCw } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Connect your device",
    text: "Ensure your printer is connected to the right network, USB port, or Wi‑Fi setup before testing any print job.",
    icon: MonitorSmartphone,
  },
  {
    number: "02",
    title: "Install the correct driver",
    text: "Use the right setup file and latest software version so your printer can communicate properly with your computer.",
    icon: Printer,
  },
  {
    number: "03",
    title: "Run diagnostics",
    text: "Check spooler status, queue settings, and connectivity to detect printer offline or paper-feed issues quickly.",
    icon: RefreshCw,
  },
  {
    number: "04",
    title: "Complete a test print",
    text: "Verify document quality, paper alignment, cartridge recognition, and scanner functions before closing the issue.",
    icon: Check,
  },
];

function Test1SupportSteps() {
  return (
    <section className="bg-white px-6 py-16 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2564e5]">
            Our process
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-[-0.05em] text-[#14213d] sm:text-4xl">
            A simple path to a working setup.
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-4">
          {steps.map(({ number, title, text, icon: Icon }) => (
            <div key={number} className="relative rounded-[26px] border border-[#edf1f7] bg-[#f9fbff] p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-[#9aa8ba]">{number}</span>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#edf4ff] text-[#2564e5]">
                  <Icon className="h-4 w-4" />
                </div>
              </div>

              <h3 className="mt-6 text-xl font-bold text-[#14213d]">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#52617b]">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Test1SupportSteps;
