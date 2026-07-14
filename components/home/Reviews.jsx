import React from "react";
import { FaStar } from "react-icons/fa";

const Reviews = () => {
  const reviews = [
    {
      quote:
        "I have already saved a significant amount on refilling ink cartridges because the system is effective.",
      name: "Isabella Reed",
      location: "San Diego, USA",
      rating: 5,
    },
    {
      quote:
        "Surprisingly, the photo prints were bright and vibrant.",
      name: "Madison Walker",
      location: "Austin, USA",
      rating: 4,
    },
    {
      quote:
        "This is an easy-to-use printer that can handle the small office workload without becoming overwhelmed.",
      name: "Harry Walker",
      location: "Chicago, USA",
      rating: 5,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2564E5]">
            Customer Stories from Across the USA
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-base md:text-lg">
            Real experiences from customers who trust us for reliable printing solutions—straight from the United States.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-8 hover:border-[#2564E5] transition-colors duration-300"
            >
              {/* Stars */}
              <div className="flex mb-4 text-[#2564E5]">
                {Array.from({ length: 5 }, (_, i) => (
                  <FaStar
                    key={i}
                    className={`w-5 h-5 ${
                      i < review.rating ? "opacity-100" : "opacity-20"
                    }`}
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 leading-relaxed mb-6">
                {review.quote}
              </p>

              {/* Customer Info */}
              <div className="border-t border-gray-100 pt-4">
                <p className="font-semibold text-gray-800 text-lg">
                  {review.name}
                </p>
                <p className="text-gray-500 text-sm">{review.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
