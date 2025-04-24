import React from "react";
import Image from "next/image";
import { IoStar } from "react-icons/io5";
import { FaCartPlus } from "react-icons/fa6";
import { FaRegEye, FaRegHeart } from "react-icons/fa";

const ShopCard = ({item}) => {
  const icon =[
    {
      id: 1,
      icon: <IoStar />
    },
    {
      id: 2,
      icon: <IoStar />
    },
    {
      id: 3,
      icon: <IoStar />
    },
    {
      id: 4,
      icon: <IoStar />
    },
    {
      id: 5,
      icon: <IoStar />
    }
  ]
  const hoverIcon = [
    {
      id: 1,
      icon: <FaCartPlus />
    },
    {
      id: 2,
      icon: <FaRegHeart />
    },
    {
      id: 3,
      icon: <FaRegEye />
    }
  ]
  return (
    <div className="mt-5">
      <div className="relative group overflow-hidden">
        <Image
          src={item.image}
          alt="Solex Sofa"
          width={328}
          height={328}
          layout="responsive"
          className="rounded-lg w-full h-auto object-cover"
        />
        <div className="flex absolute bottom-4 left-1/2 -translate-x-1/2 space-x-3 opacity-0 group-hover:opacity-100 transition duration-500">
          {hoverIcon.map((item) => (
            <div
              key={item.id}
              className={`w-12 h-12 flex items-center justify-center bg-white rounded-lg shadow-lg cursor-pointer hover:bg-black hover:text-white transition`}
            >
              {item.icon}
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mt-4">
        <h3 className="md:text-xl text-[18px] font-semibold">{item.title}</h3>
        <div className="flex text-[18px] items-center justify-center space-x-1 text-yellow-500 mt-1">
          {
            icon.map((item)=>(
              <div key={item.id} className="w-5 h-5">
                {item.icon}
              </div>
            ))
          }
        <p className="text-sm text-gray-500 mt-1">({item.reviews} Reviews)</p>
        </div>
        <p className="md:text-xl text-[18px] font-semibold text-gray-900 mt-2">
          ৳{item.price} <span className="text-gray-400 line-through text-sm md:ml-1">${item.discount}</span>
        </p>
      </div>
    </div>
  );
};

export default ShopCard;
