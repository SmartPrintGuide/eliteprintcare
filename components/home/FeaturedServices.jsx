import React from "react";


const FeaturedServices = () => {
  const services = [
    {
      icon: "🛡️",
      title: "Trusted Service",
      desc: "Experience our commitment to quality and customer care."
    },
    {
      icon: "🚚",
      title: "Fast Delivery",
      desc: "Lightning-fast shipping and reliable order handling."
    },
    {
      icon: "💡",
      title: "Innovative Solutions",
      desc: "Always ahead in print technology and smart recommendations."
    }
  ];

  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#2564E5] text-center mb-10">What Makes Us Different?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-200 p-8 flex flex-col items-center text-center hover:border-[#2564E5] transition-colors duration-300">
              <div className="text-5xl mb-4">{s.icon}</div>
              <h3 className="text-xl font-semibold text-[#2564E5] mb-2">{s.title}</h3>
              <p className="text-gray-600 text-base">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
