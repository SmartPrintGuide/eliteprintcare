"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2, Mail, MessageSquareText, PhoneCall } from "lucide-react";

const initialState = {
  name: "",
  email: "",
  brand: "",
  issue: "",
  message: "",
};

function Test1ContactForm() {
  const [formData, setFormData] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setFormData(initialState);
  };

  return (
    <section className="bg-[#eef4ff] px-6 py-16 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl rounded-[30px] border border-[#dfe9ff] bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.04)] md:p-10">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[26px] bg-[#0f172a] p-7 text-white md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9ec5ff]">
              Contact us
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-[-0.05em] text-white sm:text-4xl">
              Tell us what’s happening with your printer.
            </h2>
            <p className="mt-4 max-w-md text-base leading-7 text-slate-300">
              Share a few details and our support team can guide you through the right fix faster.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1d3d7a] text-[#dfeaff]">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.14em] text-slate-300">Email support</p>
                  <p className="text-sm font-semibold text-white">support@eliteprintcare.com</p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1d3d7a] text-[#dfeaff]">
                  <PhoneCall className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.14em] text-slate-300">Phone line</p>
                  <p className="text-sm font-semibold text-white">(800) 555-0142</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <form onSubmit={handleSubmit} className="w-full space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <label className="block text-sm font-medium text-[#24364f]">
                  Full name
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    className="mt-2 w-full rounded-xl border border-[#dfe7f4] bg-[#f9fbff] px-4 py-3 text-[#14213d] outline-none transition focus:border-[#2564e5] focus:ring-2 focus:ring-[#dfeaff]"
                    required
                  />
                </label>

                <label className="block text-sm font-medium text-[#24364f]">
                  Email address
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@email.com"
                    className="mt-2 w-full rounded-xl border border-[#dfe7f4] bg-[#f9fbff] px-4 py-3 text-[#14213d] outline-none transition focus:border-[#2564e5] focus:ring-2 focus:ring-[#dfeaff]"
                    required
                  />
                </label>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <label className="block text-sm font-medium text-[#24364f]">
                  Printer brand
                  <input
                    type="text"
                    name="brand"
                    value={formData.brand}
                    onChange={handleChange}
                    placeholder="HP / Canon / Brother"
                    className="mt-2 w-full rounded-xl border border-[#dfe7f4] bg-[#f9fbff] px-4 py-3 text-[#14213d] outline-none transition focus:border-[#2564e5] focus:ring-2 focus:ring-[#dfeaff]"
                    required
                  />
                </label>

                <label className="block text-sm font-medium text-[#24364f]">
                  Issue type
                  <select
                    name="issue"
                    value={formData.issue}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-xl border border-[#dfe7f4] bg-[#f9fbff] px-4 py-3 text-[#14213d] outline-none transition focus:border-[#2564e5] focus:ring-2 focus:ring-[#dfeaff]"
                    required
                  >
                    <option value="">Select an issue</option>
                    <option value="Setup">Setup</option>
                    <option value="Wireless connection">Wireless connection</option>
                    <option value="Driver installation">Driver installation</option>
                    <option value="Offline / queue issue">Offline / queue issue</option>
                    <option value="Paper jam / quality issue">Paper jam / quality issue</option>
                  </select>
                </label>
              </div>

              <label className="block text-sm font-medium text-[#24364f]">
                What can we help with?
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Describe the problem, setup steps, and any error messages you see."
                  className="mt-2 w-full rounded-xl border border-[#dfe7f4] bg-[#f9fbff] px-4 py-3 text-[#14213d] outline-none transition focus:border-[#2564e5] focus:ring-2 focus:ring-[#dfeaff]"
                  required
                />
              </label>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-xl bg-[#2564e5] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#1957d2]"
                >
                  Send request
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>

                {submitted && (
                  <div className="inline-flex items-center gap-2 text-sm font-medium text-[#0f9f6e]">
                    <CheckCircle2 className="h-4 w-4" />
                    Request sent successfully
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Test1ContactForm;
