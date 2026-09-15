import React from "react";
import Link from "next/link";
import { ArrowRight, Headphones, MessageSquareText } from "lucide-react";

function Test1CTA() {
  return (
    <section className="bg-[#0f172a] px-6 py-16 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl rounded-[30px] border border-[#1e2b45] bg-gradient-to-r from-[#0f172a] via-[#122448] to-[#132a52] p-8 md:p-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9ec5ff]">
              Need help right now?
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-[-0.05em] text-white sm:text-4xl">
              Let’s get your printer working without the stress.
            </h2>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-[#14213d] transition hover:bg-[#ebf2ff]"
            >
              <MessageSquareText className="mr-2 h-4 w-4" />
              Contact support
            </Link>

            <Link
              href="/support"
              className="inline-flex items-center justify-center rounded-xl border border-[#3e4f77] bg-transparent px-6 py-3.5 text-sm font-semibold text-white transition hover:border-[#6fa3ff] hover:text-[#b8d5ff]"
            >
              <Headphones className="mr-2 h-4 w-4" />
              Talk to an expert
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Test1CTA;
