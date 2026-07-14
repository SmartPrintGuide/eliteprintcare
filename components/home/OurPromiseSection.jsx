import React from "react";
import { ShieldCheck, Leaf, Users, Sparkles } from "lucide-react";

const promises = [
  {
    icon: <Sparkles size={22} />,
    title: "Honest Guidance",
    description:
      "We provide clear product insights, compatibility details, and straightforward policies — so you can shop with full confidence.",
  },
  {
    icon: <Users size={22} />,
    title: "Customer First Approach",
    description:
      "Every customer matters. We listen, respond quickly, and aim to make your experience smooth from browsing to delivery.",
  },
  {
    icon: <Leaf size={22} />,
    title: "Reliable Quality",
    description:
      "We source products from trusted suppliers to ensure consistent performance and dependable printing results.",
  },
  {
    icon: <ShieldCheck size={22} />,
    title: "Secure Experience",
    description:
      "Your personal and payment information is protected using secure, industry-standard technologies and trusted payment gateways.",
  },
];

const OurPromiseSection = () => {
  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2564E5]">
            Our Promise at Elite Print Care
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            We’re committed to delivering more than just printing supplies —
            we deliver trust, reliability, and confidence.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {promises.map((promise, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 p-6 rounded-xl hover:border-[#2564E5] transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4 text-[#2564E5]">
                <div className="bg-gray-50 p-2 rounded-lg">
                  {promise.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {promise.title}
                </h3>
              </div>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {promise.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPromiseSection;
