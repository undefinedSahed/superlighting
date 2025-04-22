import React from 'react'
import Image from "next/image"
import MissionImg from "../../../public/assets/mission.png";
import Vision from "../../../public/assets/vision.png";
import System from "../../../public/assets/system.png";


const Mission = () => {
  const missionInfo = [
    {
      icon: MissionImg,
      title: "Our Mission",
      description: "At Super Light BD, our mission is to revolutionize the way people experience lighting. We strive to provide high-quality, energy-efficient, and aesthetically pleasing lighting solutions that enhance both residential and commercial spaces. Our focus is on innovation, sustainability, and customer satisfaction, ensuring "
    },
    {
      icon: Vision,
      title: "Our Vision",
      description: "We believe that lighting is not just a necessity but an experience that enhances the ambiance of your home and workspace. Super Light BD provides modern, artistic, and energy-efficient lighting solutions designed to make your life more beautiful and comfortable. Our goal is to combine quality, aesthetics, and sustainable "
    },
    {
      icon: System,
      title: "SYSTEM ANALYSIS & DESIGN",
      description: "At Super Light BD, our system analysis focuses on understanding customer needs and ensuring tailored lighting solutions. We design an intuitive, efficient platform that simplifies order management, inventory tracking, and customer support."
    },
  ]
  return (
    <section className='py-10'>
      <div className="container mx-auto">
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8 mb-5 px-5'>
          {missionInfo.map((item, index) => (
            <div key={index} className='card px-4 lg:px-7 py-5 rounded-sm shadow-xl hover:shadow-gray-300  hover:scale-105 transition-all duration-700 ease-in-out'>
              <Image src={item.icon} alt="image" width={50} height={50} />
              <h4 className='text-sm font-semibold my-4'>{item.title}</h4>
              <p className='text-xs md:text-sm'>{item.description}</p>
            </div>
          ))}


        </div>
      </div>
    </section>
  )
}

export default Mission
