import React from "react";
import { CheckCircle2, LaptopMinimal, Printer, Wifi } from "lucide-react";

const supportedItems = [
  "Home office and small business printers",
  "Wireless, USB, and network-connected setups",
  "Driver and firmware installation support",
  "Paper jams, offline errors, and queue issues",
  "Mobile and desktop printing troubleshooting",
  "Scanner, copier, and device setup guidance",
];

const stats = [
  { label: "Issue types covered", value: "150+" },
  { label: "Average guidance time", value: "10 min" },
  { label: "Setup paths supported", value: "24/7" },
  { label: "Device compatibility", value: "All major brands" },
];

function Test1Coverage() {
  return (
    <section className="bg-white px-6 py-16 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.08fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2564e5]">
              Coverage
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-[-0.05em] text-[#14213d] sm:text-4xl">
              Support for the devices and issues people use most.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-[#536582]">
              Whether you are setting up a new printer or fixing a connection problem, our guidance is designed
              to work across common hardware, operating systems, and everyday printing situations.
            </p>

            <div className="mt-8 space-y-4">
              {supportedItems.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#eaf3ff] text-[#2564e5]">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <p className="text-[15px] font-medium text-[#24364f]">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[24px] border border-[#e5ecf8] bg-[#f5f9ff] p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#2564e5] shadow-sm">
                <Printer className="h-5 w-5" />
              </div>
              <p className="mt-5 text-3xl font-bold tracking-[-0.06em] text-[#14213d]">5K+</p>
              <p className="mt-2 text-sm text-[#536582]">Printer setups guided last year</p>
            </div>

            <div className="rounded-[24px] border border-[#e5ecf8] bg-[#eefcf6] p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#10b981] shadow-sm">
                <Wifi className="h-5 w-5" />
              </div>
              <p className="mt-5 text-3xl font-bold tracking-[-0.06em] text-[#14213d]">96%</p>
              <p className="mt-2 text-sm text-[#536582]">Connection issues resolved on first pass</p>
            </div>

            <div className="rounded-[24px] border border-[#e5ecf8] bg-[#fffaf0] p-6 sm:col-span-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#f59e0b] shadow-sm">
                <LaptopMinimal className="h-5 w-5" />
              </div>
              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                {stats.map(({ label, value }) => (
                  <div key={label}>
                    <p className="text-xl font-bold text-[#14213d]">{value}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.12em] text-[#64748b]">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Test1Coverage;
