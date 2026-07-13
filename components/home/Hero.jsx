"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const heroImage = "/assets/homeHero.webp";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-white">
      {/* Background Glow */}
      <div className="absolute -left-32 -top-24 h-96 w-96 rounded-full bg-blue-500/15 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-[28rem] w-[28rem] rounded-full bg-cyan-400/15 blur-3xl" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#2563eb_1px,transparent_1px),linear-gradient(to_bottom,#2563eb_1px,transparent_1px)] bg-[size:42px_42px]" />

      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl items-center px-6 py-20 lg:px-8">
        <div className="grid w-full items-center gap-16 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-5 py-2 text-sm font-semibold text-blue-700 shadow-md backdrop-blur">
              ⭐ Trusted Printing Solutions
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Premium
              <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Printers & Printing
              </span>
              Solutions
            </h1>

            {/* Description */}
            <p className="mx-auto mt-8 max-w-xl text-lg leading-8 text-slate-600 lg:mx-0">
              Discover premium printers, genuine ink cartridges, toner, and
              printing essentials backed by trusted recommendations, secure
              shopping, and dedicated customer support for home and business.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <Link href="/product-category/all-in-one-printers">
                <button className="w-full rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl sm:w-auto">
                  Shop Products →
                </button>
              </Link>

              <Link href="/about">
                <button className="w-full rounded-xl border border-slate-300 bg-white px-8 py-4 font-semibold text-slate-800 shadow-md transition duration-300 hover:-translate-y-1 hover:border-blue-600 hover:text-blue-600 sm:w-auto">
                  Learn More
                </button>
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-14 grid grid-cols-3 gap-6 text-center lg:text-left">
              <div>
                <h3 className="text-3xl font-bold text-blue-600">5000+</h3>
                <p className="mt-1 text-sm text-slate-600">
                  Happy Customers
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-blue-600">100+</h3>
                <p className="mt-1 text-sm text-slate-600">Printer Models</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-blue-600">24/7</h3>
                <p className="mt-1 text-sm text-slate-600">Expert Support</p>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative rounded-[2rem] border border-white/70 bg-white/70 p-8 shadow-[0_35px_80px_rgba(0,0,0,0.12)] backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:shadow-[0_40px_90px_rgba(37,99,235,0.18)]">
              <Image
                src={heroImage}
                alt="Elite Print Care"
                width={650}
                height={520}
                priority
                className="h-auto w-full max-w-lg object-contain"
              />

              {/* Top Badge */}
              <div className="absolute -left-8 top-10 rounded-2xl border border-slate-100 bg-white px-5 py-4 shadow-xl">
                <div className="text-2xl">🚚</div>
                <p className="mt-1 text-sm font-semibold text-slate-900">
                  Fast Delivery
                </p>
              </div>

              {/* Bottom Badge */}
              <div className="absolute -right-8 bottom-12 rounded-2xl border border-slate-100 bg-white px-5 py-4 shadow-xl">
                <div className="text-2xl">⭐</div>
                <p className="mt-1 text-sm font-semibold text-slate-900">
                  Premium Quality
                </p>
              </div>

              {/* Top Right */}
              <div className="absolute -right-5 -top-5 rounded-full bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-xl">
                #1 Print Guide
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;