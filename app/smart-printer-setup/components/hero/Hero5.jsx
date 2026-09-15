"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Download,
  Wifi,
  Printer,
  Headphones,
  Search,
} from "lucide-react";

export default function Hero5() {
  return (
    <section className="w-full overflow-hidden bg-white">
      <div className="bg-[#f5f8fc]">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-10">
          <div className="grid min-h-[650px] items-center lg:grid-cols-[47%_53%]">
            <div className="relative z-10 py-14 lg:py-20">
              {/* Small label */}
              <div className="mb-7 flex items-center gap-2.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#e2ecff]">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#20bd5a]" />
                </span>

                <span className="text-[13px] font-semibold tracking-wide text-[#2564e5]">
                  PRINTER SUPPORT & ASSISTANCE
                </span>
              </div>

              {/* Heading */}
              <h1 className="max-w-[650px] text-[48px] font-bold leading-[1.02] tracking-[-2.8px] text-[#111d38] sm:text-[60px] lg:text-[64px] xl:text-[72px]">
                Your Printer.
                <span className="block text-[#2564e5]">Working Again.</span>
              </h1>

              {/* Description */}
              <p className="mt-7 max-w-[540px] text-[16px] leading-[1.75] text-[#60708b] sm:text-[17px]">
                Get simple, reliable help for printer setup, drivers, wireless
                connections, and everyday printing problems.
              </p>

              {/* Main Actions */}
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/printer-setup"
                  className="group inline-flex h-[54px] items-center justify-center gap-3 rounded-[8px] bg-[#2564e5] px-7 text-[15px] font-semibold text-white transition-all duration-200 hover:bg-[#1957d2]"
                >
                  Start Printer Setup
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  href="/troubleshooting"
                  className="inline-flex h-[54px] items-center justify-center gap-3 rounded-[8px] border border-[#d3dce9] bg-white px-7 text-[15px] font-semibold text-[#172640] transition-all duration-200 hover:border-[#2564e5] hover:text-[#2564e5]"
                >
                  Fix a Printer Problem
                </Link>
              </div>

              <div className="mt-11 border-t border-[#dce4ee] pt-7">
                <p className="mb-5 text-[12px] font-semibold uppercase tracking-[1.5px] text-[#8793a7]">
                  Quick Help
                </p>

                <div className="grid grid-cols-2 gap-x-5 gap-y-6 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
                  {/* Driver */}
                  <Link
                    href="/drivers"
                    className="group flex items-start gap-3"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[9px] bg-white text-[#2564e5] ring-1 ring-[#e2e8f0] transition group-hover:bg-[#2564e5] group-hover:text-white">
                      <Download size={18} />
                    </div>

                    <div>
                      <p className="text-[13px] font-semibold text-[#182743]">
                        Driver Setup
                      </p>

                      <p className="mt-1 text-[11px] leading-4 text-[#8190a7]">
                        Install & update
                      </p>
                    </div>
                  </Link>

                  {/* WiFi */}
                  <Link
                    href="/wifi-setup"
                    className="group flex items-start gap-3"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[9px] bg-white text-[#2564e5] ring-1 ring-[#e2e8f0] transition group-hover:bg-[#2564e5] group-hover:text-white">
                      <Wifi size={18} />
                    </div>

                    <div>
                      <p className="text-[13px] font-semibold text-[#182743]">
                        Wi-Fi Setup
                      </p>

                      <p className="mt-1 text-[11px] leading-4 text-[#8190a7]">
                        Connect printer
                      </p>
                    </div>
                  </Link>

                  {/* Printing */}
                  <Link
                    href="/printing-issues"
                    className="group flex items-start gap-3"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[9px] bg-white text-[#2564e5] ring-1 ring-[#e2e8f0] transition group-hover:bg-[#2564e5] group-hover:text-white">
                      <Printer size={18} />
                    </div>

                    <div>
                      <p className="text-[13px] font-semibold text-[#182743]">
                        Printing Issues
                      </p>

                      <p className="mt-1 text-[11px] leading-4 text-[#8190a7]">
                        Errors & jams
                      </p>
                    </div>
                  </Link>

                  {/* Support */}
                  <Link
                    href="/support"
                    className="group flex items-start gap-3"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[9px] bg-white text-[#2564e5] ring-1 ring-[#e2e8f0] transition group-hover:bg-[#2564e5] group-hover:text-white">
                      <Headphones size={18} />
                    </div>

                    <div>
                      <p className="text-[13px] font-semibold text-[#182743]">
                        Get Support
                      </p>

                      <p className="mt-1 text-[11px] leading-4 text-[#8190a7]">
                        Talk to an expert
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative h-[430px] sm:h-[520px] lg:h-[650px]">
              {/* Image */}
              <div className="absolute inset-y-0 right-[-20px] left-0 overflow-hidden sm:right-[-35px] lg:right-[-80px]">
                <img
                  src="/setup/hero4.png"
                  alt="Modern printer on an office desk"
                  className="h-full w-full object-cover object-center"
                />
              </div>

              {/* Image bottom information */}
              <div className="absolute bottom-7 left-5 right-5 flex items-center justify-between sm:left-8 sm:right-8 lg:bottom-10 lg:left-10 lg:right-0">
                <div className="rounded-[7px] bg-white px-4 py-3 sm:px-5">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#20bd5a]" />

                    <span className="text-[12px] font-semibold text-[#172640]">
                      Support available
                    </span>
                  </div>

                  <p className="mt-1 text-[11px] text-[#78869c]">
                    Get help with your printer
                  </p>
                </div>

                <Link
                  href="/support"
                  className="hidden h-[46px] items-center gap-2 rounded-[7px] bg-[#2564e5] px-5 text-[13px] font-semibold text-white transition hover:bg-[#1957d2] sm:flex"
                >
                  Get Support
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#2564e5]">
        <div className="mx-auto flex max-w-[1500px] flex-col gap-6 px-6 py-6 sm:px-10 md:flex-row md:items-center md:justify-between">
          {/* Left */}
          <div className="flex items-center gap-5">
            <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full border border-white/40 text-white">
              <Headphones size={27} />
            </div>

            <div className="border-l border-white/30 pl-5">
              <h2 className="text-[18px] font-semibold text-white">
                Need help right now?
              </h2>

              <p className="mt-1 text-[14px] text-white/85">
                Our support team is available to guide you.
              </p>
            </div>
          </div>

          {/* CTA */}
          <Link
            href="/support"
            className="inline-flex h-[48px] items-center justify-center gap-3 rounded-full border border-white/70 px-7 text-[14px] font-semibold text-white transition hover:bg-white hover:text-[#2564e5]"
          >
            Get Support
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
