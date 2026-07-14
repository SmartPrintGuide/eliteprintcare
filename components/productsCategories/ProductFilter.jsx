import React, { useState } from "react";

const TECHNOLOGY_OPTIONS = ["Inkjet", "Laser", "Laser (B/W)"];
const USAGE_CATEGORY_OPTIONS = ["Home", "Office", "Mobile", "Photo"];
const ALL_IN_ONE_OPTIONS = ["Multifunction", "Single Function"];
const WIRELESS_OPTIONS = ["Yes", "No"];
const MAIN_FUNCTION_OPTIONS = ["Print", "Scan", "Copy", "Fax", "Print Only"];


import { useEffect } from "react";

export default function ProductFilter({ filters, onChange }) {
  const defaultFilters = {
    technology: [],
    usageCategory: [],
    allInOneType: [],
    wireless: "",
    mainFunction: [],
    brand: "",
    sort: ""
  };
  const safeFilters = { ...defaultFilters, ...(filters || {}) };
  const [localFilters, setLocalFilters] = useState(safeFilters);

  // Always sync localFilters with parent filters
  useEffect(() => {
    setLocalFilters({ ...defaultFilters, ...(filters || {}) });
  }, [filters]);

  const handleCheckbox = (field, value) => {
    setLocalFilters((prev) => {
      const arr = prev[field] || [];
      const newArr = arr.includes(value)
        ? arr.filter((v) => v !== value)
        : [...arr, value];
      const updated = { ...prev, [field]: newArr };
      return updated;
    });

    const current = localFilters;
    const arr = current[field] || [];
    const newArr = arr.includes(value)
      ? arr.filter((v) => v !== value)
      : [...arr, value];
    const updated = { ...current, [field]: newArr };
    onChange && onChange(updated);
  };

  const handleSelect = (field, value) => {
    const updated = { ...localFilters, [field]: value };
    setLocalFilters(updated);
    onChange && onChange(updated);
  };

  return (
    <div className="bg-gray-50 rounded-xl p-6 mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 border border-gray-200">
          <div className="bg-white rounded-xl p-5 flex flex-col items-start border border-gray-200">
            <label htmlFor="filter-brand" className="block text-sm font-semibold text-gray-700 mb-2">Brand</label>
            <select
              id="filter-brand"
              className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-[#2564E5] focus:border-[#2564E5] outline-none"
              value={localFilters.brand}
              onChange={e => handleSelect("brand", e.target.value)}
            >
              <option value="">Select</option>
              <option value="HP">HP</option>
              <option value="Canon">Canon</option>
              <option value="Epson">Epson</option>
              <option value="Brother">Brother</option>
            </select>
          </div>
          <div className="bg-white rounded-xl p-5 flex flex-col items-start border border-gray-200">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Technology</label>
            <div className="flex flex-wrap gap-3">
              {TECHNOLOGY_OPTIONS.map(opt => (
                <label key={opt} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="accent-[#2564E5]"
                    checked={localFilters.technology.includes(opt)}
                    onChange={() => handleCheckbox("technology", opt)}
                  />
                  <span className="text-sm text-gray-700">{opt}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-xl p-5 flex flex-col items-start border border-gray-200">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Usage Category</label>
            <div className="flex flex-wrap gap-3">
              {USAGE_CATEGORY_OPTIONS.map(opt => (
                <label key={opt} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="accent-[#2564E5]"
                    checked={Array.isArray(localFilters.usageCategory) ? localFilters.usageCategory.includes(opt) : false}
                    onChange={() => handleCheckbox("usageCategory", opt)}
                  />
                  <span className="text-sm text-gray-700">{opt}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-xl p-5 flex flex-col items-start border border-gray-200">
            <label className="block text-sm font-semibold text-gray-700 mb-2">All-in-One Type</label>
            <div className="flex flex-wrap gap-3">
              {ALL_IN_ONE_OPTIONS.map(opt => (
                <label key={opt} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="accent-[#2564E5]"
                    checked={localFilters.allInOneType.includes(opt)}
                    onChange={() => handleCheckbox("allInOneType", opt)}
                  />
                  <span className="text-sm text-gray-700">{opt}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-xl p-5 flex flex-col items-start border border-gray-200">
            <label htmlFor="filter-wireless" className="block text-sm font-semibold text-gray-700 mb-2">Wireless</label>
            <select
              id="filter-wireless"
              className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-[#2564E5] focus:border-[#2564E5] outline-none"
              value={localFilters.wireless}
              onChange={e => handleSelect("wireless", e.target.value)}
            >
              <option value="">Select</option>
              {WIRELESS_OPTIONS.map(opt => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>
          <div className="bg-white rounded-xl p-5 flex flex-col items-start border border-gray-200">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Main Function</label>
            <div className="flex flex-wrap gap-3">
              {MAIN_FUNCTION_OPTIONS.map(opt => (
                <label key={opt} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="accent-[#2564E5]"
                    checked={localFilters.mainFunction.includes(opt)}
                    onChange={() => handleCheckbox("mainFunction", opt)}
                  />
                  <span className="text-sm text-gray-700">{opt}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-xl p-5 flex flex-col items-start border border-gray-200">
            <label htmlFor="filter-sort" className="block text-sm font-semibold text-gray-700 mb-2">Sort By Price</label>
            <select
              id="filter-sort"
              className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-[#2564E5] focus:border-[#2564E5] outline-none"
              value={localFilters.sort}
              onChange={e => handleSelect("sort", e.target.value)}
            >
              <option value="">Select</option>
              <option value="lowToHigh">Price: Low to High</option>
              <option value="highToLow">Price: High to Low</option>
            </select>
          </div>
        {/* No additional button needed; filter changes are applied immediately */}
    </div>
  );
}
