"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const heroImage = "/assets/homeHero.webp";

const Hero = () => {
  return (
    <section className="bg-white min-h-[80vh] flex items-center">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid w-full items-center gap-12 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700">
              ⭐ Trusted Printing Solutions
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-bold leading-tight text-[#2564E5] sm:text-5xl lg:text-6xl">
              Premium Printers & Printing Solutions
            </h1>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600 lg:mx-0">
              Discover premium printers, genuine ink cartridges, toner, and
              printing essentials backed by trusted recommendations, secure
              shopping, and dedicated customer support for home and business.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <Link href="/product-category/all-in-one-printers">
                <button className="w-full rounded-lg bg-[#2564E5] px-8 py-3 font-medium text-white hover:bg-blue-700 transition-colors sm:w-auto">
                  Shop Products →
                </button>
              </Link>

              <Link href="/about">
                <button className="w-full rounded-lg border border-[#2564E5] bg-white px-8 py-3 font-medium text-[#2564E5] hover:bg-gray-50 transition-colors sm:w-auto">
                  Learn More
                </button>
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-6 text-center lg:text-left">
              <div>
                <h3 className="text-3xl font-bold text-[#2564E5]">5000+</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Happy Customers
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-[#2564E5]">100+</h3>
                <p className="mt-1 text-sm text-gray-500">Printer Models</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-[#2564E5]">24/7</h3>
                <p className="mt-1 text-sm text-gray-500">Expert Support</p>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative rounded-xl border border-gray-200 bg-white p-6">
              <Image
                src={heroImage}
                alt="Elite Print Care"
                width={650}
                height={520}
                priority
                className="h-auto w-full max-w-lg object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;