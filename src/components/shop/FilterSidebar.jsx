
import React from "react";
import thank from '../../../public/assets/thank.png';
import Image from "next/image";

const FilterSidebar = () => {
    const materials = ["Wood", "Plastique", "Wood Industry", "Wood Incense"];
    return (
        <div className="mt-8  w-full">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold mb-4">Filter by</h3>
                <button className="text-red-500 text-lg mb-4 hover:underline">
                    Clean All
                </button>
            </div>

            <div className="mb-4">
                <h4 className="text-2xl text-gray-700 font-semibold mb-2">Price:</h4>
                <input
                    type="range"
                    name="price"
                    className="w-full text-black focus:ring-0"
                />
                <div className="flex justify-between">
                    <p>$20</p>
                    <p>$100</p>
                </div>
            </div>
            <div className="mb-4">
                <h4 className="text-gray-700 font-semibold mb-2 text-2xl">Material:</h4>
                {materials.map((material, index) => (
                    <div key={index} className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="radio"
                            name="material"
                            className="text-black focus:ring-0"
                        />
                        <p className="text-gray-700 text-lg font-medium mb-2">{material}</p>
                    </div>
                ))}
            </div>
            <button
                className="w-full mt-4 bg-black text-white py-2 rounded-lg hover:bg-gray-900 transition"
            >
                Apply Filters
            </button>
            <div className="mt-8">
                <Image
                    src={thank}
                    alt="banner"
                    width={300}
                    height={200}
                    layout="responsive"
                    className="rounded-lg"
                />
            </div>
        </div>
    );
};

export default FilterSidebar;
