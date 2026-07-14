import React from "react";
import { Info } from "lucide-react";

const ImportantInfoSection = () => {
  return (
    <section className="w-full py-16 md:py-20 bg-gray-50">

      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-gray-100 p-4 rounded-full">
              <Info className="text-[#2564E5]" size={28} />
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-[#2564E5]">
            Important Information
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Transparency and clarity are core values at Elite Print Care.
            Please review the following important details before placing your order.
          </p>
        </div>

        {/* Card */}
        <div className="bg-white border border-gray-200 rounded-xl p-8 md:p-10">

          <ul className="space-y-5 text-gray-700 text-base md:text-lg">

            <li className="flex gap-3">
              <span className="text-[#2564E5] font-bold">•</span>
              Product availability, pricing, and specifications may be updated
              periodically to reflect market changes and supplier updates.
            </li>

            <li className="flex gap-3">
              <span className="text-[#2564E5] font-bold">•</span>
              Shipping and delivery timelines depend on your location,
              carrier services, and current order volume.
            </li>

            <li className="flex gap-3">
              <span className="text-[#2564E5] font-bold">•</span>
              Manufacturer warranties apply where eligible and are governed
              by the respective brand’s terms and policies.
            </li>

            <li className="flex gap-3">
              <span className="text-[#2564E5] font-bold">•</span>
              Elite Print Care operates as an independent online retailer and
              is not affiliated with or endorsed by any printer manufacturer.
            </li>

            <li className="flex gap-3">
              <span className="text-[#2564E5] font-bold">•</span>
              We encourage customers to verify compatibility and product
              specifications before completing their purchase.
            </li>

          </ul>

        </div>
      </div>
    </section>
  );
};

export default ImportantInfoSection;
