"use client";

import React, { useEffect, useState } from "react";

const printerImages = [
  {
    src: "./slide-1.png",
    alt: "Printer setup",
  },
  {
    src: "./slide-2.png",
    alt: "Printer support",
  },
];

const services = [
  {
    title: (
      <>
        New Printer
        <br />
        Setup
      </>
    ),
    description: "Set up your printer quickly and start printing with confidence.",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="17" y="7" width="30" height="17" rx="4" />
        <path d="M17 24H11C8.8 24 7 25.8 7 28v17h10" />
        <path d="M47 24h6c2.2 0 4 1.8 4 4v17H47" />
        <rect x="17" y="39" width="30" height="18" rx="2" />
        <path d="M23 45h12" />
        <circle cx="45" cy="45" r="8" fill="white" />
        <path d="m41 45 3 3 6-7" />
      </svg>
    ),
  },
  {
    title: (
      <>
        Printer Showing
        <br />
        Offline
      </>
    ),
    description: "Reconnect your printer and restore communication in minutes.",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="17" y="7" width="30" height="17" rx="4" />
        <path d="M17 24H11C8.8 24 7 25.8 7 28v17h10" />
        <path d="M47 24h6c2.2 0 4 1.8 4 4v17H47" />
        <rect x="17" y="39" width="30" height="18" rx="2" />
        <path d="M24 45h9" />
        <circle cx="47" cy="45" r="9" fill="white" />
        <path d="M47 40v6" />
        <circle cx="47" cy="49" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: (
      <>
        Connect Printer
        <br />
        to WiFi
      </>
    ),
    description: "Join your printer to the right wireless network without hassle.",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 25c11-11 29-11 40 0" />
        <path d="M19 32c7-7 19-7 26 0" />
        <path d="M27 39c3-3 7-3 10 0" />
        <path d="M32 43v13" />
        <circle cx="32" cy="43" r="3" />
      </svg>
    ),
  },
  {
    title: (
      <>
        Printer Not
        <br />
        Printing
      </>
    ),
    description: "Troubleshoot print jobs, queues, and connection issues fast.",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 7h21l11 11v39H18z" />
        <path d="M39 7v12h11" />
        <circle cx="44" cy="45" r="10" fill="white" />
        <path d="m38 39 12 12" />
        <path d="m50 39-12 12" />
      </svg>
    ),
  },
  {
    title: (
      <>
        Install Printer
        <br />
        Driver
      </>
    ),
    description: "Download the correct software and keep your printer running smoothly.",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="17" y="7" width="30" height="17" rx="4" />
        <path d="M17 24H11C8.8 24 7 25.8 7 28v17h10" />
        <path d="M47 24h6c2.2 0 4 1.8 4 4v17H47" />
        <rect x="17" y="39" width="30" height="18" rx="2" />
        <path d="M24 45h10" />
        <circle cx="45" cy="45" r="8" fill="white" />
        <path d="M45 40v10" />
        <path d="m41 47 4 4 4-4" />
      </svg>
    ),
  },
  {
    title: (
      <>
        Scanner Not
        <br />
        Working
      </>
    ),
    description: "Fix scan errors and get your scanner back online quickly.",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 7h21l11 11v39H18z" />
        <path d="M39 7v12h11" />
        <path d="M18 22H7v35h11" strokeDasharray="4 3" />
        <circle cx="44" cy="45" r="10" fill="white" />
        <path d="m38 39 12 12" />
        <path d="m50 39-12 12" />
      </svg>
    ),
  },
];

export default function MainHero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === printerImages.length - 1 ? 0 : prev + 1
    );
  };

  const previousSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? printerImages.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === printerImages.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-blue-50/60 via-white to-white font-sans antialiased text-slate-800">
      
      {/* Decorative background glow matching your original styling */}
      <div className="absolute top-0 right-0 -z-10 h-[500px] w-full max-w-4xl bg-gradient-to-bl from-blue-400/25 via-blue-200/10 to-transparent rounded-bl-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 md:py-16 lg:px-8">
        
        {/* ================= HERO TOP ================= */}
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">

          {/* ================= LEFT CONTENT (Preserved Exactly) ================= */}
          <div className="lg:col-span-6 flex flex-col items-start">

            {/* Badge Pill */}
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-blue-200 bg-white px-4 py-1.5 shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
              <span className="text-xs font-bold tracking-wide text-blue-700">
                Smart Printer Setup Support
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl leading-[1.08]">
              Simple printer setup,
              <span className="block text-blue-600 mt-1">
                fast fixes, and expert help.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 text-base leading-relaxed text-slate-600 max-w-xl">
              Get clear guidance for printer installation, Wi‑Fi setup, software downloads, and everyday troubleshooting. Everything is organized so you can move from setup to success without confusion.
            </p>
            
            <p className="mt-3 text-sm leading-relaxed text-slate-500 max-w-xl">
              Choose the support path you need, follow the simple steps, and reach out to our team when you want extra help with your device.
            </p>

            {/* CTA Button */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="/find-model"
                className="inline-flex h-12 items-center justify-center gap-2.5 rounded-xl bg-[#0F53FF] px-8 text-sm font-bold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-700 active:scale-95"
              >
                Start Printer Setup
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </a>

              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500" />
                Setup support available
              </div>
            </div>

          </div>

          {/* ================= RIGHT CAROUSEL / VISUAL ================= */}
          <div className="lg:col-span-6 relative">
            <div className="relative overflow-hidden rounded-[2.5rem] border border-blue-100 bg-gradient-to-br from-blue-500/10 via-blue-400/5 to-blue-600/20 p-3 sm:p-4 shadow-2xl shadow-blue-600/10">
              
              <div className="relative overflow-hidden rounded-[2rem] bg-white aspect-[16/10] flex items-center justify-center shadow-inner">
                <img
                  key={currentIndex}
                  src={printerImages[currentIndex].src}
                  alt={printerImages[currentIndex].alt}
                  className="max-h-[80%] w-auto max-w-[85%] object-contain transition-all duration-700 hover:scale-105"
                />

                {/* Counter Badge */}
                <div className="absolute top-4 right-4 rounded-full border border-slate-200/80 bg-white/90 backdrop-blur-md px-3 py-1 shadow-sm">
                  <span className="text-xs font-bold text-slate-800">
                    {String(currentIndex + 1).padStart(2, "0")}
                  </span>
                  <span className="mx-1 text-slate-300">/</span>
                  <span className="text-xs text-slate-500">
                    {String(printerImages.length).padStart(2, "0")}
                  </span>
                </div>

                {/* Navigation Arrows */}
                <button
                  type="button"
                  onClick={previousSlide}
                  aria-label="Previous printer"
                  className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 backdrop-blur-md border border-slate-200 text-slate-700 shadow-md transition hover:bg-blue-600 hover:text-white hover:border-blue-600"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                </button>

                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Next printer"
                  className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 backdrop-blur-md border border-slate-200 text-slate-700 shadow-md transition hover:bg-blue-600 hover:text-white hover:border-blue-600"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </button>
              </div>

              {/* Bottom Carousel Bar inside container */}
              <div className="mt-3 flex items-center justify-between rounded-2xl bg-white/90 backdrop-blur-md border border-blue-100 px-5 py-3.5 shadow-sm">
                <div>
                  <p className="text-xs font-bold text-slate-900">
                    Elite Print Care Support
                  </p>
                  <p className="text-[11px] text-slate-500 font-medium">
                    Setup • Drivers • Wi‑Fi • Troubleshooting
                  </p>
                </div>
                <div className="flex items-center gap-1.5">
                  {printerImages.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setCurrentIndex(index)}
                      aria-label={`Go to slide ${index + 1}`}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        currentIndex === index
                          ? "w-6 bg-blue-600"
                          : "w-2 bg-slate-300"
                      }`}
                    />
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* =========================================================
            SIX SERVICE CARDS SECTION (Using your custom detailed SVG icons & layout)
        ========================================================= */}
        <div className="mt-20">
          
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {services.map((service, index) => (
              <a
                key={index}
                href="/find-model"
                className="group flex flex-col items-center justify-between rounded-2xl border border-slate-200/80 bg-white p-6 text-center shadow-lg shadow-slate-200/40 transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-600 hover:shadow-xl hover:shadow-blue-600/10"
              >
                <div>
                  {/* Icon Container */}
                  <div className="mb-5 flex h-14 w-14 mx-auto items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white shadow-xs">
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xs font-bold leading-snug text-slate-900 group-hover:text-blue-600 transition">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="mt-4 text-[11px] leading-relaxed text-slate-500 font-medium border-t border-slate-100 pt-3 w-full">
                  {service.description}
                </p>
              </a>
            ))}
          </div>

          {/* =======================================================
              HELP MESSAGE BANNER
          ======================================================== */}
          <div className="mt-12 rounded-2xl border border-red-100 bg-red-50/50 p-6 text-center shadow-xs">
            <p className="text-xs sm:text-sm font-semibold leading-relaxed text-red-600 max-w-4xl mx-auto">
              <span className="font-bold underline mr-1">Need help?</span> Talk to our support team for printer setup, Wi‑Fi issues, offline problems, print failures, and other common device concerns.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}