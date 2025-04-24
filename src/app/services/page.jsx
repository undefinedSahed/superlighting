import Service1 from '@/components/services/Service1'
import Service2 from '@/components/services/Service2'
import ServiceHero from '@/components/services/ServiceHero'
import React from 'react'

const page = () => {
  return (
    <>
    <ServiceHero/>
     <Service1/>
     <Service2/>
    </>
  )
}

export default page