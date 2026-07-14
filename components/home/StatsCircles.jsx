import React from "react";

const StatsCircles = () => {
  const stats = [
    {
      number: "10K+",
      label: "Orders Successfully Delivered",
    },
    {
      number: "10K+",
      label: "Happy Customers Worldwide",
    },
    {
      number: "2K+",
      label: "Verified 5-Star Reviews",
    },
    {
      number: "100%",
      label: "Secure & Protected Payments",
    },
  ];

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2564E5]">
            Elite Print Care in Numbers
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Trusted by thousands for reliable printing solutions and seamless online shopping.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-8 text-center hover:border-[#2564E5] transition-colors duration-300"
            >
              {/* Number Circle */}
              <div className="mx-auto mb-6 w-24 h-24 rounded-full bg-[#2564E5] text-white flex items-center justify-center text-2xl font-bold">
                {stat.number}
              </div>

              {/* Label */}
              <p className="text-gray-700 font-medium text-lg">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCircles;
