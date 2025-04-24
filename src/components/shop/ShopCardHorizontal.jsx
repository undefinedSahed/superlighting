import React from 'react';
import Image from 'next/image';
import { FaStar, FaRegHeart, FaShoppingCart } from 'react-icons/fa'; 

const ShopCardHorizontal = ({ item }) => {
  const renderStars = (count) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <FaStar key={i} className={i < count ? 'text-yellow-400' : 'text-gray-300'} />
      );
    }
    return stars;
  };

  return (
    <div className="flex md:items-center border border-gray-200 rounded-md p-4 mb-4 gap-4 w-full hover:shadow-md transition-shadow duration-200">
      <div className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 relative mb-4 md:mb-0">
        <Image
          src={item.image}
          alt={item.title}
          layout="fill"
          objectFit="contain" 
          className="rounded-md"
        />
      </div>

     <div className="md:flex">
     <div className="flex-grow md:text-left">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{item.title}</h3>
        <div className="flex items-center justify-center md:justify-start mb-2">
          {renderStars(item.stars)}
          <span className="text-sm text-gray-500 ml-2">({item.reviews} reviews)</span>
        </div>
        <p className="text-gray-600 mb-3 text-sm">
          A brief description of the product would go here. High-quality and durable.
        </p>
        <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
          <span className="text-xl font-bold text-blue-600">${item.price.toFixed(2)}</span>
          {item.discount && (
            <span className="text-sm text-gray-500 line-through">${item.discount.toFixed(2)}</span>
          )}
        </div>
      </div>

       <div className="flex flex-col items-center md:items-end gap-2 flex-shrink-0">
         <button className="w-full md:w-auto px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-200 flex items-center justify-center gap-2">
           <FaShoppingCart /> Add to Cart
         </button>
         <button className="w-full md:w-auto px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors duration-200 flex items-center justify-center gap-2">
           <FaRegHeart /> Wishlist
         </button>
       </div>
     </div>
    </div>
  );
};

export default ShopCardHorizontal;