import React from 'react'
import { MdDeleteOutline } from "react-icons/md";

const MyWishlist = () => {
return (
    <div>
            <h2 className="text-2xl font-semibold mb-4">My Wishlist</h2>
            <div className="flex flex-row flex-wrap gap-4">
                    {Array.from({ length: 5 }, (_, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
                                    <div className="flex flex-row items-center">
                                            <img 
                                                    src="/assets/LED1.jpg"
                                                    width={200}
                                                    height={200}
                                                    alt="Product" 
                                                    className="w-32 h-32 object-cover rounded-md mb-4"
                                            />
                                            <div className="flex flex-col items-center justify-between w-full ml-4">
                                                <div className="text-lg font-semibold">$99.99</div>
                                                <div className="text-red-500 hover:text-red-700 transition-colors cursor-pointer text-xl bg-gray-200 rounded-full p-2">
                                                        <MdDeleteOutline className='text-2xl' />
                                                </div>
                                            </div>
                                    </div>
                            </div>
                    ))}
            </div>
    </div>
)
}

export default MyWishlist
