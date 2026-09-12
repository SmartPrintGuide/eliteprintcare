"use client";

import React, { useState } from "react";

export default function Page() {
  const [downloaded, setDownloaded] = useState(false);

  const handleInstall = () => {
    setDownloaded(true);
    // Add your install/download logic here
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-900 selection:bg-blue-600 selection:text-white font-sans antialiased">

      {/* =====================================================
          HERO SETUP SECTION
      ====================================================== */}
      <section className="relative overflow-hidden pt-12 pb-16 sm:pt-20 sm:pb-24">
        {/* Soft background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-[800px] h-[350px] bg-gradient-to-b from-blue-100/70 via-indigo-50/30 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            
            {/* Left Content: App Branding & CTA */}
            <div className="flex flex-col items-start">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/80 text-xs font-semibold text-blue-600 mb-6 shadow-2xs">
                <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
                Official Application Setup
              </div>

              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-lg shadow-blue-600/25">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 6 2 18 2 18 9"></polyline>
                    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                    <rect x="6" y="14" width="12" height="8"></rect>
                  </svg>
                </div>
                <div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                    HP Smart
                  </h1>
                  <p className="text-xs font-medium text-slate-500">
                    Software & Driver Installer
                  </p>
                </div>
              </div>

              <p className="text-base sm:text-lg leading-relaxed text-slate-600 mb-8">
                Set up your printer, print documents, scan files, and manage your device seamlessly straight from your computer or mobile device.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={handleInstall}
                  className="inline-flex items-center justify-center gap-2.5 rounded-2xl bg-blue-600 px-8 py-4 text-sm font-bold text-white shadow-xl shadow-blue-600/25 transition-all hover:bg-blue-700 hover:shadow-blue-600/40 hover:-translate-y-0.5 active:translate-y-0"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  {downloaded ? "Installer Downloading..." : "Install Now"}
                </button>
              </div>

              <div className="mt-5 flex items-center gap-2 text-xs font-medium text-slate-500">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-600">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Connects seamlessly with your printer hardware
              </div>
            </div>

            {/* Right Content: Premium Lifestyle Preview Card */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-[2.5rem] blur-2xl -z-10" />
              <div className="overflow-hidden rounded-[2.5rem] border border-slate-200/80 bg-white p-3 shadow-2xl shadow-slate-200/50">
                <div className="relative overflow-hidden rounded-[2rem] bg-slate-100">
                  <img
                    src="./printer-1.jpg"
                    alt="HP Smart App Preview on Laptop"
                    className="w-full h-[320px] sm:h-[380px] object-cover object-center transform transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURES & DETAILS SECTION
      ====================================================== */}
      <section className="border-t border-slate-200/80 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">

            {/* Left: Bullet Points & Guidelines */}
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Capabilities
              </span>
              <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                Smart printing & management made easy
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Print, scan, and share files using HP Smart with your printer. Smart makes it easy to get started and keeps you going with features like Print Anywhere or Mobile Fax.
              </p>

              {/* VPN Notice Box */}
              <div className="my-6 rounded-2xl border border-amber-200/60 bg-amber-50/50 p-4 text-xs text-amber-900">
                <span className="font-bold">Note:</span> Disconnect from a Virtual Private Network (VPN) connection before downloading and starting installation.
              </div>

              {/* Feature List */}
              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600 mt-0.5">✓</span>
                  <span><strong>Start with a hassle-free setup</strong>, then print, scan, copy, and share files directly from your computer.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600 mt-0.5">✓</span>
                  <span><strong>Manage or print</strong> to your printer using any network connection.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600 mt-0.5">✓</span>
                  <span><strong>Order supplies, get support</strong>, and manage your account straight from the app interface.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600 mt-0.5">✓</span>
                  <span><strong>Create high-quality scans</strong> and improve them by cropping, adding filters/text, or adjusting settings.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600 mt-0.5">✓</span>
                  <span><strong>Send secure faxes</strong> from the app with Mobile Fax functionality.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600 mt-0.5">✓</span>
                  <span><strong>Be more productive</strong> with customizable one-touch Shortcuts (formerly Smart Tasks).</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600 mt-0.5">✓</span>
                  <span><strong>Access printable crafts</strong>, cards, and learning activities with Printables.</span>
                </li>
              </ul>

              <p className="mt-6 text-[11px] leading-relaxed text-slate-400 italic">
                Some Smart features require a network connection and an account for full functionality. Certain features/software may be available in English only.
              </p>
            </div>

            {/* Right: Dashboard App UI Preview */}
            <div className="relative lg:mt-8">
              <div className="overflow-hidden rounded-[2.5rem] border border-slate-200/80 bg-slate-900 p-3 shadow-2xl">
                <div className="overflow-hidden rounded-[2rem] bg-slate-950">
                  <img
                    src="./printer-1.jpg"
                    alt="HP Smart Dashboard Interface"
                    className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}