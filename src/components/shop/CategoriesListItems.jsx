"use client";
import React, { useState } from "react";
const CategoryList = dynamic(() => import("@/components/shop/CategoryList"));
const FilterSidebar = dynamic(() => import("@/components/shop/FilterSidebar"));
import dynamic from "next/dynamic";

const CategoriesListItems = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex">
        <div className="md:hidden block relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 bg-gray-200 rounded-md"
        >
          Filter
        </button>
      </div>
      <div
        className={`md:sticky absolute ${isOpen ? "top-0 left-0 h-full w-64 bg-white p-4 shadow-lg overflow-scroll z-50 duration-300" : "top-0 -left-96"}`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 bg-white text-black px-3 py-1 rounded-md md:hidden block"
        >
          ✖ Close
        </button>
        <CategoryList />
        <FilterSidebar />
      </div>
    </div>
  );
};

export default CategoriesListItems;
