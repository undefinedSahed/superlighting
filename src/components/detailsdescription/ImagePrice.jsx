"use client";
import React, { useState } from "react";
import Image from "next/image";
import light1 from "../../../public/assets/LIght 10363.png";
import light2 from "../../../public/assets/Bulb 167922501518w-LED-Bulb-B22.png";
import light3 from "../../../public/assets/bulb IMG.png";
import { FaStar } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";
import { IoIosHeartEmpty } from "react-icons/io";
import { CiShare2, CiShuffle } from "react-icons/ci";

const ImagePrice = () => {
  const [cartAdd, setcartAdd] = useState(1);
  console.log(cartAdd);

  const increment = () => {
    setcartAdd((preValue) => preValue + 1);
  };

  const Decrement = () => {
    setcartAdd((preValue) => Math.max(preValue - 1, 1));
  };

  return (
    <section className=" container mx-auto py-8">
      <div className="flex lg:flex-row flex-col  justify-between items-start">

     

          <div className="flex py-4 lg:py-0 w-[30%] ml-3 lg:ml-0 lg:w-[15%] lg:flex-col gap-2">
            {[light1, light2, light3].map((img, index) => (
              <Image
                key={index}
                src={img}
                alt={`bulb-${index}`}
                width={190}
                height={190}
                className="object-contain border w-full border-gray-300 shadow-sm"
              />
            ))}
          </div>
          <div className="flex lg:w-[38%] px-3 lg:px-0 gap-4 items-center">
            <Image
              key={light1}
              src={light1}
              alt="bulb-large"
              width={586}
              height={586}
              className="object-contain"
            />
          </div>

        <div className="h-[586px] w-[1px] bg-gray-400 hidden lg:block"></div>

        <div className=" lg:w-[38%]   w-full lg:p-0 p-4">
          <h1 className="text-[22px] lg:text-[26px] font-semibold text-gray-800">
            20w LED Bulb High Brightness
          </h1>

          <div className="flex flex-wrap mt-2 justify-between gap-4 items-center">
            <span className="flex  items-center gap-1  text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i}  />
              ))}
            </span>

            <span className="text-gray-600 ">45 Reviews</span>

            <span className="text-gray-600 ">Sold: 45</span>

            <span className="flex items-center gap-2 text-gray-600">
              <TbTruckDelivery />
              Free delivery from Tk1000
            </span>
          </div>

          <p className="flex items-center mt-2 gap-2">
            <span className="text-[22px] font-semibold text-[#2E2E2E]">
              290৳
            </span>
            <span className="text-[16px] line-through font-semibold text-[#727272]">
              350৳
            </span>
          </p>

          <p className="text-[#727272] mt-4">
            RAY 20-watt LED light has a 270-degree beam angle and a 220 to 240V
            rated voltage. This bulb has a brightness output of 1800 lumens and
            a frequency range of 50 to 60 Hz.
          </p>

          <div className="flex gap-[80px] pt-5">
            <h4 className="text-[16px] font-medium text-[#727272]">Color:</h4>
            <div className="flex gap-2">
              <div className="w-[24px] h-[24px] bg-[#C0B6A6]"></div>
              <div className="w-[24px] h-[24px] bg-[#3E1905]"></div>
            </div>
          </div>

          <div className="flex gap-6 items-center pt-5">
            <h4 className="text-[16px] font-medium text-[#727272]">
              Dimensions:
            </h4>
            <div className="flex gap-2 text-sm">
              <span className=" bg-[#f0f0f0] text-[#2E2E2E] px-1 py-2">
                W:75 х H:82 cm
              </span>
              <span className=" bg-[#f5f5f5] text-[#A1A1A1] px-1 py-2">
                W:120 х H:100 cm
              </span>
            </div>
          </div>

          <div className="flex gap-4 items-center mt-6">
            <div className="flex gap-2 ">
              {[IoIosHeartEmpty, CiShuffle, CiShare2].map((Icon, i) => (
                <button>
                  <span
                    key={i}
                    className="border-[#dbdbdb] border w-[30px] h-[30px] flex items-center justify-center text-[#2E2E2E]"
                  >
                    <Icon />
                  </span>
                </button>
              ))}
            </div>

            <span className="text-[16px] font-medium text-[#2E2E2E]">
              (There are 24 products left)
            </span>
          </div>

          <div className="flex items-center gap-6 mt-4 ">
            <div className="border-[#dbdbdb] flex items-center justify-between px-4 py-1 border w-[106px] h-[40px] ">
              <span
                className="text-[#727272] cursor-pointer"
                onClick={Decrement}
              >
                -
              </span>
              <span className="font-medium text-[20px] text-[#2E2E2E]">
                {cartAdd}
              </span>
              <span
                className="text-[#727272] cursor-pointer"
                onClick={increment}
              >
                +
              </span>
            </div>

            <button className="font-semibold text-[16px] text-[#2E2E2E] w-[150px] border border-[#2E2E2E]  h-[50px]">
              ADD TO CART
            </button>
            <button className="font-semibold text-[16px]  bg-[#171717] w-[150px] text-white  h-[50px]">
              BUY NOW
            </button>
          </div>

          <div className="flex gap-3 items-center pt-5">
            <h4 className="text-[16px] font-medium text-[#727272]">SKU:</h4>

            <span className="  text-[#2E2E2E] ">0124</span>
          </div>

          <div className="flex gap-3 items-center pt-2">
            <h4 className="text-[16px] font-medium text-[#727272]">
              Category:
            </h4>

            <span className="  text-[#2E2E2E] ">Sofa</span>
          </div>

          <div className="flex gap-3 items-center pt-2">
            <h4 className="text-[16px] font-medium text-[#727272]">Tag:</h4>

            <span className="  text-[#2E2E2E] ">Sofa</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImagePrice;
