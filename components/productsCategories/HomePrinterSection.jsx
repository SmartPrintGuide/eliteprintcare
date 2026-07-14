import React from "react";
import ProductRouteHeading from "./ProductRouteHeading";
import HomePrinter from "./HomePrinter";
import FeaturesSection from "./FeaturesSection";
import Link from "next/link";

function HomePrinterSection() {
  const HOME_CATEGORIES = [
    { name: "Inkjet Printers", count: 10, slug: "inkjet-printers" },
    { name: "All In One", count: 53, slug: "all-in-one-printers" },
    { name: "Ink & Toner", count: 51, slug: "ink-toner" },
    { name: "Laser", count: 7, slug: "laser-printers" },
  ];

  return (
    <>
      <ProductRouteHeading
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Products", link: "/products" },
          { label: "Home Printers" },
        ]}
        title="Home Printers"
        description="Printers for home use."
      />
      
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#2564E5]">Home Printer Categories</h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
              Browse our collection of printers and supplies perfect for your home.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {HOME_CATEGORIES.map((item) => (
              <Link
                key={item.slug}
                href={`/product-category/${item.slug}`}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:border-[#2564E5] transition-colors duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                <div className="mt-4 inline-block px-3 py-1 text-xs font-bold bg-gray-100 text-gray-700 rounded-full">
                  {item.count} Items
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      <HomePrinter />
      <FeaturesSection />
    </>
  );
}

export default HomePrinterSection;
