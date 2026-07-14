import React from "react";

const WelcomeSection = () => {
  return (
    <section className="bg-gray-50 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left */}
          <div>
            <span className="inline-flex rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-semibold text-gray-700">
              About Elite Print Care
            </span>

            <h2 className="mt-6 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
              Your Trusted Partner for
              <span className="block text-[#2564E5]">
                Reliable Printing Solutions
              </span>
            </h2>

            <div className="mt-6 h-1 w-24 rounded-full bg-[#2564E5]" />

            <div className="mt-8 space-y-6 text-lg leading-8 text-gray-600">
              <p>
                Elite Print Care is committed to providing dependable printers,
                genuine ink and toner, and quality printing accessories for
                homes, businesses, and professionals.
              </p>

              <p>
                We believe choosing the right printing solution should be
                simple. That's why we focus on trusted products, clear
                information, and responsive customer support every step of the
                way.
              </p>

              <p>
                Whether you need a printer for everyday use or high-volume
                office printing, our goal is to deliver products and service
                you can rely on with complete confidence.
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="grid grid-cols-2 gap-5">
            {[
              ["Quality Products", "Premium printers and genuine supplies."],
              ["Expert Support", "Friendly assistance whenever you need it."],
              ["Fast Delivery", "Reliable shipping with secure packaging."],
              ["Customer First", "Dedicated to your satisfaction."],
            ].map(([title, desc]) => (
              <div
                key={title}
                className="rounded-xl border border-gray-200 bg-white p-6 transition duration-300 hover:border-[#2564E5]"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-50">
                  <div className="h-5 w-5 rounded-full bg-[#2564E5]" />
                </div>

                <h3 className="text-lg font-semibold text-gray-900">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;