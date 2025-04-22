import React from 'react'
import Image from "next/image"
import ServiceHeroImg from "../../../public/assets/ServiceImage4.avif";

const ServiceHero = () => {
  return (
    <section className="py-10">
    <div className="container mx-auto px-5">
      <div className="flex flex-col-reverse sm:flex-row gap-10 justify-between items-center">
        {/* left-side */}
        <div className="lg:w-[50%] w-full mt-3 sm:mt-0 ">
          <h2 className='text-2xl lg:text-3xl font-bold underline underline-offset-8'>Our Services</h2>
          <p className="text-sm font-normal lg:text-base my-5 text-justify">
          We provide high-quality interior and outdoor lighting solutions for homes, offices, showrooms, and restaurants. Our services include custom lighting designs, LED installations, smart lighting systems, and energy-efficient solutions. We also offer landscape, street, and building facade lighting. Our team ensures professional installation, maintenance, and repair services to keep your lighting system efficient and long-lasting. Free consultations and tailored lighting solutions are available to meet your unique needs.          </p>
          <div>
          <button className='bg-[#2BA14D] text-white px-8 py-2 text-sm hover:text-[#2BA14D] hover:border-1 hover:border-[#2BA14D] hover:bg-white transition-all duration-700 ease-in-out'>Explore </button>
        </div>
        </div>
        {/* right-side */}
        <div className='lg:w-[60%] w-full h-auto'>
        <Image className="max-w-full rounded-md" src={ServiceHeroImg} alt="ServiceHero"  />

        </div>
      </div>
    </div>
  </section>
  )
}

export default ServiceHero

