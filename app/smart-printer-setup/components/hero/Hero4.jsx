"use client";

import React from "react";
import Link from "next/link";
import {
  Search,
  ArrowRight,
  Download,
  Wifi,
  Printer,
  Headphones,
  Wrench,
} from "lucide-react";

export default function Hero4() {
  return (
    <section className="w-full bg-[#f7faff] text-[#10204a]">




  
      <div className="mx-auto max-w-[1500px] px-6 lg:px-10">

        <div className="grid min-h-[630px] grid-cols-1 lg:grid-cols-[0.86fr_1.14fr]">

          {/* =====================
              LEFT CONTENT
          ====================== */}
          <div className="flex flex-col justify-center py-14 pr-0 lg:py-16 lg:pr-12 xl:pr-20">

            {/* Badge */}
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full bg-[#e8f0ff] px-4 py-2 text-[13px] font-semibold text-[#2564e5]">
              <span className="h-2.5 w-2.5 rounded-full bg-[#20bf55]" />
              Printer Support & Assistance
            </div>


            {/* Heading */}
            <h1 className="max-w-[680px] text-[48px] font-bold leading-[1.04] tracking-[-2.5px] text-[#10204a] sm:text-[58px] lg:text-[62px] xl:text-[68px]">

              Get Your Printer

              <span className="block text-[#2564e5]">
                Working Again.
              </span>

            </h1>


            {/* Description */}
            <p className="mt-7 max-w-[570px] text-[16px] leading-7 text-[#536582] sm:text-[17px]">
              Get help with setup, drivers, connection, and common printing
              issues. Find the right solution and get started quickly.
            </p>


            {/* Main CTA */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              <Link
                href="/printer-setup"
                className="inline-flex h-[54px] items-center justify-center gap-3 rounded-[9px] bg-[#2564e5] px-7 text-[15px] font-semibold text-white transition duration-200 hover:bg-[#1957d2]"
              >
                Start Printer Setup
                <ArrowRight size={18} />
              </Link>


              <Link
                href="/troubleshooting"
                className="inline-flex h-[54px] items-center justify-center gap-3 rounded-[9px] border border-[#d2dce9] bg-white px-7 text-[15px] font-semibold text-[#172746] transition duration-200 hover:border-[#2564e5] hover:text-[#2564e5]"
              >
                <Wrench size={17} />
                Fix a Printer Problem
              </Link>

            </div>


            {/* =====================
                QUICK ACTIONS
            ====================== */}
            <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-7 border-t border-[#dce4ef] pt-7 sm:grid-cols-4">

              {/* Driver */}
              <Link
                href="/drivers"
                className="group"
              >
                <div className="mb-3 flex h-[44px] w-[44px] items-center justify-center rounded-[10px] bg-[#e8f0ff] text-[#2564e5] transition group-hover:bg-[#2564e5] group-hover:text-white">
                  <Download size={21} />
                </div>

                <h3 className="text-[14px] font-semibold text-[#162744]">
                  Driver Setup
                </h3>

                <p className="mt-1 text-[12px] leading-5 text-[#75839a]">
                  Install or update drivers
                </p>
              </Link>


              {/* WiFi */}
              <Link
                href="/wifi-setup"
                className="group"
              >
                <div className="mb-3 flex h-[44px] w-[44px] items-center justify-center rounded-[10px] bg-[#e8f0ff] text-[#2564e5] transition group-hover:bg-[#2564e5] group-hover:text-white">
                  <Wifi size={21} />
                </div>

                <h3 className="text-[14px] font-semibold text-[#162744]">
                  Wi-Fi Setup
                </h3>

                <p className="mt-1 text-[12px] leading-5 text-[#75839a]">
                  Connect to your network
                </p>
              </Link>


              {/* Printing */}
              <Link
                href="/printing-issues"
                className="group"
              >
                <div className="mb-3 flex h-[44px] w-[44px] items-center justify-center rounded-[10px] bg-[#e8f0ff] text-[#2564e5] transition group-hover:bg-[#2564e5] group-hover:text-white">
                  <Printer size={21} />
                </div>

                <h3 className="text-[14px] font-semibold text-[#162744]">
                  Printing Issues
                </h3>

                <p className="mt-1 text-[12px] leading-5 text-[#75839a]">
                  Fix errors & jams
                </p>
              </Link>


              {/* Support */}
              <Link
                href="/support"
                className="group"
              >
                <div className="mb-3 flex h-[44px] w-[44px] items-center justify-center rounded-[10px] bg-[#e8f0ff] text-[#2564e5] transition group-hover:bg-[#2564e5] group-hover:text-white">
                  <Headphones size={21} />
                </div>

                <h3 className="text-[14px] font-semibold text-[#162744]">
                  Get Support
                </h3>

                <p className="mt-1 text-[12px] leading-5 text-[#75839a]">
                  Talk to our experts
                </p>
              </Link>

            </div>

          </div>


          {/* =========================
              RIGHT IMAGE
          ========================== */}
          <div className="relative min-h-[430px] lg:min-h-full">

            <div className="absolute inset-0 overflow-hidden lg:left-4">

              <img
                src="/setup/hero4.png"
                alt="Printer support"
                className="h-full w-full object-cover object-center"
              />

            </div>

          </div>

        </div>
      </div>


      {/* =========================
          SUPPORT BANNER
      ========================== */}
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