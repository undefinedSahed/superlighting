"use client";
import React, { useState } from "react";
const FilterSidebar = dynamic(() => import("@/components/shop/FilterSidebar"));
import dynamic from "next/dynamic";
import CategoryList from "./CategoryList";

const ListItems = ({ onSortChange, onPriceChange, maxProductPrice }) => {
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
        <FilterSidebar
          onSortChange={onSortChange}
          onPriceChange={onPriceChange}
          maxProductPrice={maxProductPrice} 
        />
      </div>
    </div>
  );
};

export default ListItems;
