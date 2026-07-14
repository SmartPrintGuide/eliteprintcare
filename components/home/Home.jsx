import React from "react";
import HomeProductList from "./HomeProductList";
import HomeFilteredPrinterList from "./HomeFilteredPrinterList";

const Home = () => {
    return (
        <section className="w-full py-6 md:py-10 bg-white">
            <div className="max-w-7xl mx-auto px-0 sm:px-0">
                {/* Section Header */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#2564E5]">
                        Featured Printing Essentials
                    </h2>
                    <p className="mt-4 text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
                        Explore our most popular printers, ink cartridges, and toner
                        solutions trusted by homes and offices across the country.
                    </p>
                </div>
                <div className="bg-transparent p-0 mb-10">
                    <HomeProductList enableFlowLayout={false} />
                </div>
               
            </div>
        </section>
    );
};

export default Home;
