import React from "react";
import { FaEquals } from "react-icons/fa";
import { CgMenuGridR } from "react-icons/cg";

const CategoriesShort = () => {
  return (
    <div className="flex flex-wrap justify-between items-center gap-4 mb-5 px-4">
      {/* Left Section */}
      <div className="flex items-center gap-x-4">
        <FaEquals className="text-lg text-gray-600 cursor-pointer" />
        <CgMenuGridR className="text-2xl text-gray-600 cursor-pointer" />
        <FaEquals className="text-lg text-gray-600 cursor-pointer" />
        <p className="text-gray-700 text-sm md:text-base">
          Showing <span className="font-medium">1-12</span> of <span className="font-medium">40</span> results
        </p>
      </div>

      {/* Right Section (Sort By Dropdown) */}
      <div className="relative">
        <select
          className="p-2 text-sm md:text-base bg-white border border-gray-300 rounded-md focus:ring focus:ring-gray-300 outline-none"
        >
          <option value="">Sort By</option>
          <option value="new">New Arrivals</option>
          <option value="low">Low to High</option>
          <option value="high">High to Low</option>
        </select>
      </div>
    </div>
  );
};

export default CategoriesShort;
