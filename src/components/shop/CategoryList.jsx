"use client";
import React, { useState } from "react";

const allProducts = [
  { id: 1, name: "Modern Sideboard", category: "Sideboards",count: 12 },
  { id: 2, name: "Classic Cabinet", category: "Cabinet",count: 12 },
  { id: 3, name: "Luxury Sofa", category: "Sofa",count: 12 },
  { id: 4, name: "Minimalist Sideboard", category: "Sideboards",count: 12 },
  { id: 5, name: "Vintage Cabinet", category: "Cabinet",count: 12 },
  { id: 6, name: "Comfy Sofa", category: "Sofa",count: 12 },
];

const categories = [
  { name: "Categories", count: 48 },
];

const CategoryList = () => {
  const [selectedCategory, setSelectedCategory] = useState("Categories");
  const filteredProducts =
    selectedCategory === "Categories"
      ? allProducts
      : allProducts.filter((item) => item.category === selectedCategory);

  return (
    <div className="w-full">
      <h2 className="md:text-2xl text-xl font-semibold mb-6">Categories</h2>
      <div className="">
        {categories.map((category) => (
            <div key={category.name} className="mb-4">
          <div
            key={category.name}
            onClick={() => setSelectedCategory(category.name)}
            className={`flex justify-between items-center px-4 py-3 border rounded-md transition cursor-pointer ${
              selectedCategory === category.name
                ? "bg-gray-100 text-gray-700 border-none"
                : "border-gray-300 text-gray-700 hover:bg-gray-100"
            }`}
          >
            <h3 className="font-medium md:text-xl text-base">{category.name}</h3>
             <span className="text-gray-500 font-medium md:text-xl text-base">({category.count})</span>
          </div>
          {
            selectedCategory === category.name && (
              <div className="mt-4">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="mb-2 flex justify-between items-center px-4 ">
                    <h5 className="font-medium text-lg">{product.name}</h5>
                    <p className="text-gray-500 font-medium text-lg">{product.count}</p>
                  </div>
                ))}
              </div>
            )
          }
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
