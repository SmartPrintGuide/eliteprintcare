import React from "react";
import { ShieldCheck, Truck, Info, Users, BadgeCheck } from "lucide-react";

const WhyImage = "/assets/whychooseus.jpg"; 

const choosePoints = [
  {
    id: 1,
    icon: <Info size={22} />,
    title: "Clear & Accurate Product Information",
    description:
      "Every product page includes detailed specifications and compatibility insights to help you make confident decisions.",
  },
  {
    id: 2,
    icon: <Users size={22} />,
    title: "Customer-Focused Support",
    description:
      "Our team is ready to assist with product questions, order tracking, and general shopping guidance.",
  },
  {
    id: 3,
    icon: <ShieldCheck size={22} />,
    title: "Secure & Safe Checkout",
    description:
      "We use trusted payment systems and secure encryption to ensure a smooth and protected shopping experience.",
  },
  {
    id: 4,
    icon: <Truck size={22} />,
    title: "Reliable Shipping",
    description:
      "We work with established carriers to support safe and timely delivery based on your location.",
  },
  {
    id: 5,
    icon: <BadgeCheck size={22} />,
    title: "Independent Retailer",
    description:
      "Elite Print Care operates independently and is not affiliated with printer manufacturers. All trademarks belong to their respective owners.",
  },
];

const WhyChooseSection = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2564E5]">
            Why Choose Elite Print Care?
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            Experience a smarter way to shop for printers, ink, and toner —
            built on clarity, trust, and reliability.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Side - Points */}
          <div className="grid sm:grid-cols-2 gap-6">

            {choosePoints.map((point) => (
              <div
                key={point.id}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:border-[#2564E5] transition-colors duration-300"
              >
                <div className="flex items-center gap-3 mb-3 text-[#2564E5]">
                  <div className="bg-gray-50 p-2 rounded-lg">
                    {point.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {point.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}

          </div>

          {/* Right Side - Image */}
          <div>
            <img
              src={WhyImage}
              alt="Why Choose Elite Print Care"
              className="w-full h-full object-cover rounded-xl border border-gray-200"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
