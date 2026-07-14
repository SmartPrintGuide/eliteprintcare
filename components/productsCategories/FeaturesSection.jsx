import React from "react";
import {
  TruckIcon,
  ArrowPathIcon,
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/24/outline";

const FeaturesSection = () => {
  const features = [
    {
      icon: TruckIcon,
      title: "Fast & Reliable Delivery",
      description:
        "Carefully packed and shipped through trusted carriers to ensure safe arrival.",
    },
    {
      icon: ArrowPathIcon,
      title: "Simple Return Process",
      description:
        "Clear return guidelines designed to make your experience smooth and stress-free.",
    },
    {
      icon: ChatBubbleBottomCenterTextIcon,
      title: "Dedicated Support",
      description:
        "Our team is available to assist you with product and order-related questions.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2564E5]">
            Why Choose Elite Print Care?
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Experience reliability, clarity, and support designed around your printing needs.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-8 hover:border-[#2564E5] transition-colors duration-300"
            >
              {/* Icon Circle */}
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-[#2564E5] text-white flex items-center justify-center">
                  <feature.icon className="h-8 w-8" />
                </div>
              </div>

              {/* Text */}
              <h3 className="text-lg font-semibold text-gray-900 mb-3 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm text-center leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
