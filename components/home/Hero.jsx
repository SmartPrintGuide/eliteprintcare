"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Truck, ShieldCheck, Sparkles, Clock3, CheckCircle } from "lucide-react";

const heroImage = "/heroimg.webp";

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 via-white to-white min-h-[90vh] flex items-center">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid w-full items-center gap-12 lg:grid-cols-2 py-10">
          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-700 shadow-sm">
              <Sparkles size={16} /> Fast delivery for print supplies
            </div>

            <h1 className="text-4xl font-bold leading-tight text-[#2564E5] sm:text-5xl lg:text-6xl">
              Fast Delivery on Printers, Ink & Toner
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 lg:mx-0">
              Get premium printers, genuine ink and toner, plus speedy delivery and expert support. Perfect for home offices, small businesses, and busy print shops.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <Link href="/product-category/all-in-one-printers">
                <button className="w-full rounded-2xl bg-[#2564E5] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-200/40 transition hover:bg-blue-700 sm:w-auto">
                  Browse Printers
                </button>
              </Link>

              <Link href="/customer-service">
                <button className="w-full rounded-2xl border border-[#2564E5] bg-white px-8 py-4 text-base font-semibold text-[#2564E5] transition hover:bg-blue-50 sm:w-auto">
                  Contact Support
                </button>
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 text-left">
              <div className="rounded-3xl border border-blue-100 bg-white p-5 shadow-sm">
                <div className="flex items-center gap-3 text-[#2564E5]">
                  <Truck size={20} />
                  <span className="font-semibold">Fast Shipping</span>
                </div>
                <p className="mt-3 text-sm text-gray-600">Orders ship quickly and arrive when you need them.</p>
              </div>
              <div className="rounded-3xl border border-blue-100 bg-white p-5 shadow-sm">
                <div className="flex items-center gap-3 text-[#2564E5]">
                  <Clock3 size={20} />
                  <span className="font-semibold">Quick Support</span>
                </div>
                <p className="mt-3 text-sm text-gray-600">Fast help for product, order, and compatibility questions.</p>
              </div>
              <div className="rounded-3xl border border-blue-100 bg-white p-5 shadow-sm">
                <div className="flex items-center gap-3 text-[#2564E5]">
                  <ShieldCheck size={20} />
                  <span className="font-semibold">Trusted Quality</span>
                </div>
                <p className="mt-3 text-sm text-gray-600">Reliable brands and genuine supplies for every printer.</p>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative overflow-hidden rounded-[2.5rem] border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-white p-5 shadow-[0_40px_80px_-40px_rgba(37,100,229,0.35)]">
              <div className="absolute -left-10 top-10 h-28 w-28 rounded-full bg-blue-100 opacity-80 blur-3xl" />
              <div className="absolute right-6 top-6 h-16 w-16 rounded-full bg-[#2564E5] opacity-10 blur-2xl" />
              <div className="absolute -right-12 bottom-12 h-24 w-24 rounded-full bg-blue-200 opacity-60 blur-3xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white bg-white shadow-[0_24px_60px_-20px_rgba(37,100,229,0.25)]">
                <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-r from-[#2564E5] via-blue-300 to-transparent opacity-20" />
                <Image
                  src={heroImage}
                  alt="Elite Print Care printers and supplies"
                  width={780}
                  height={620}
                  priority
                  className="h-auto w-full object-cover"
                />
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="flex items-center gap-3 rounded-3xl bg-white/90 p-4 text-sm font-medium text-gray-700 shadow-sm ring-1 ring-blue-100">
                  <CheckCircle size={20} className="text-[#2564E5]" />
                  <span>Premium brands in stock</span>
                </div>
                <div className="flex items-center gap-3 rounded-3xl bg-white/90 p-4 text-sm font-medium text-gray-700 shadow-sm ring-1 ring-blue-100">
                  <CheckCircle size={20} className="text-[#2564E5]" />
                  <span>Fast order processing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;