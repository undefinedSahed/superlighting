import React from 'react'
import Image from "next/image"
import StreetLighting from "../../../public/assets/streetLighting.avif";
import GardenLighting from "../../../public/assets/gardenLighting1.avif";
import BuildingLighting from "../../../public/assets/buildingLighting.avif";
const Service2 = () => {

  const serviceTwo = [
    {
      image: StreetLighting,
      info : "Street Lighting",
    },
    {
      image: GardenLighting,
      info : "Garden & Landscape Lighting",
    },
    {
      image: BuildingLighting,
      info : "Building Facade Lighting",
    },
]


  return (
    <section className='py-10'>
      <div className="container mx-auto px-5">
        <h2 className='text-lg md:text-xl font-semibold  underline underline-offset-8 text-cen pb-10'>Outdoor Lighting Solutions</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
          { serviceTwo.map((item,index)=>(
            <div key={index} className='card '>
              <Image className='w-full h-60 mb-3 rounded-md ' src={item.image} alt='ServiceImage1'/>
              <h3>{item.info}</h3>
            </div>
          ))}
         
         
        </div>
      </div>
      
    </section>
  )
}

export default Service2

