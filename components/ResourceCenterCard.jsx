import React from "react";
import Link from "next/link";


const ResourceCenterCard = ({ title, category, duration, description, linkText, linkUrl }) => (
  <div className="bg-white rounded-xl p-7 transition-colors hover:bg-gray-50 border border-gray-200">
    <div className="flex items-center gap-2 mb-2">
      <span className="bg-gray-100 text-[#2564E5] px-2 py-0.5 rounded-full text-xs font-semibold">{category}</span>
      {duration && <span className="text-xs text-gray-500">{duration}</span>}
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-700 text-base mb-4">{description}</p>
    <Link
      href={linkUrl}
      className="inline-block bg-[#2564E5] text-white font-semibold px-5 py-2 rounded-xl hover:bg-blue-700 transition"
    >
      {linkText}
    </Link>
  </div>
);

export default ResourceCenterCard;
