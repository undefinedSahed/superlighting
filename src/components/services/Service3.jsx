import React from 'react'
import Image from "next/image"
import LightSolution from "../../../public/assets/lightSolution.avif";
import LightSolution2 from "../../../public/assets/lightSolution2.avif";
import Repair from "../../../public/assets/repair.avif";
const Service3 = () => {

  const serviceThree = [
    {
      image: LightSolution,
      info : "Smart Lighting Solutions",
    },
    {
      image: LightSolution2,
      info : "LED Light Installation",
    },
    {
      image: Repair,
      info : "Repair & Maintenance",
    },
]


  return (
    <section className='py-10'>
      <div className="container mx-auto px-5">
        <h2 className='text-lg md:text-xl font-semibold  underline underline-offset-8 text-cen pb-10'>Custom Lighting & Maintenance</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
          { serviceThree.map((item,index)=>(
            <div key={index} className='card '>
              <Image className='w-full h-60 mb-3 rounded-md' src={item.image} alt='ServiceImage1'/>
              <h3>{item.info}</h3>
            </div>
          ))}
         
         
        </div>
      </div>
      
    </section>
  )
}

export default Service3

