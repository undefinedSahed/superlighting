import React from "react";
import { FaEquals } from "react-icons/fa";
import { CgMenuGridR } from "react-icons/cg";

const Short = ({ sortCriteria, onSortChange, startIndex, endIndex, totalItems, viewMode, onViewChange }) => {
  return (
    <div className="flex flex-wrap justify-between items-center gap-4 mb-5 px-4">
      <div className="flex items-center gap-x-4">
        <FaEquals
          className={`text-lg cursor-pointer ${viewMode === 'list' ? 'text-blue-500' : 'text-gray-600 hover:text-blue-500'}`}
          onClick={() => onViewChange('list')}
          title="List View" 
        />
        <CgMenuGridR
          className={`text-2xl cursor-pointer ${viewMode === 'grid' ? 'text-blue-500' : 'text-gray-600 hover:text-blue-500'}`}
          onClick={() => onViewChange('grid')}
          title="Grid View" 
        />
        <p className="text-gray-700 text-sm md:text-base">
          Showing <span className="font-medium">{startIndex + 1}-{endIndex}</span> of <span className="font-medium">{totalItems}</span> results
        </p>
      </div>

      <div className="relative">
        <select
          className="p-2 text-sm md:text-base bg-white border border-gray-300 rounded-md focus:ring focus:ring-gray-300 outline-none"
          value={sortCriteria} 
          onChange={(e) => onSortChange(e.target.value)} 
        >
          <option value="default">Default Sorting</option> 
          <option value="new">New Arrivals</option>
          <option value="low">Price: Low to High</option> 
          <option value="high">Price: High to Low</option> 
        </select>
      </div>
    </div>
  );
};

export default Short;
