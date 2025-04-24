import React from 'react'
import Image from "next/image"
import ServiceImage1 from "../../../public/assets/ServiceImage1.avif";
import ServiceImage2 from "../../../public/assets/ServiceImage2.avif";
import ServiceImage3 from "../../../public/assets/ServiceImage3.avif";
const Service1 = () => {
  const serviceOne = [
    {
      image: ServiceImage1,
      info : "Interior Lighting Solutions",
    },
    {
      image: ServiceImage2,
      info : "Interior Lighting Solutions",
    },
    {
      image: ServiceImage3,
      info : "Interior Lighting Solutions",
    },
]


  return (
    <section className='py-10'>
      <div className="container mx-auto">
        <h2 className='text-lg md:text-xl font-semibold underline underline-offset-8 text-cen pb-10'>Interior Lighting Solutions</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
          { serviceOne.map((item,index)=>(
            <div key={index} className='card'>
              <Image className='w-100 h-60 hover:scale-110 transition duration-700 mb-3 ' src={item.image} alt='ServiceImage1'/>
              <h3>{item.info}</h3>
            </div>
          ))}
         
         
        </div>
      </div>
      
    </section>
  )
}

export default Service1

