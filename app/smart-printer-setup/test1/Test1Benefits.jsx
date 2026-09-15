import React from "react";
import { Clock3, ShieldCheck, Sparkles, Star } from "lucide-react";

const benefits = [
  {
    icon: Clock3,
    title: "Fast help",
    text: "Get concise steps for setup, driver issues, wireless printing, and queue errors without waiting around.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable guidance",
    text: "Follow proven support paths that reduce failed installs and prevent repeat troubleshooting loops.",
  },
  {
    icon: Sparkles,
    title: "Easy setup",
    text: "From first-time installation to paper-feed tests, each step is designed to feel clear and manageable.",
  },
  {
    icon: Star,
    title: "Better results",
    text: "Achieve cleaner print jobs, stronger device connections, and a smoother user experience every time.",
  },
];

function Test1Benefits() {
  return (
    <section className="bg-[#f4f8ff] px-6 py-16 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2564e5]">
            Why choose us
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-[-0.05em] text-[#14213d] sm:text-4xl">
            Support that gets your printer back to work quickly.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {benefits.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-[24px] border border-[#e5ecf8] bg-white p-6 shadow-[0_14px_28px_rgba(37,100,229,0.04)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#edf4ff] text-[#2564e5]">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-[#14213d]">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#52617b]">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Test1Benefits;
