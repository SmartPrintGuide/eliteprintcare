import React from "react";

const WelcomeSection = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-sky-50" />

      <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left */}
          <div>
            <span className="inline-flex rounded-full border border-blue-200 bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              About Elite Print Care
            </span>

            <h2 className="mt-6 text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl">
              Your Trusted Partner for
              <span className="block text-blue-600">
                Reliable Printing Solutions
              </span>
            </h2>

            <div className="mt-6 h-1 w-24 rounded-full bg-blue-600" />

            <div className="mt-8 space-y-6 text-lg leading-8 text-slate-600">
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
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
                  <div className="h-5 w-5 rounded-full bg-blue-600" />
                </div>

                <h3 className="text-lg font-bold text-slate-900">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
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