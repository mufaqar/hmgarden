import React from 'react'
import Image from 'next/image'
const ServicesFilter = () => {
  return (
    <div className='container mx-auto px-4'>
    <div className='flex flex-col md:flex-row mt-10'>
      <div className='md:mt-10'>
        <h1 className='text-4xl md:text-5xl lg:text-[76px] font-semibold  leading-snug max-w-[976px]'>
          HOME AND GARDEN MASTERS
        </h1>
        <p className='text-base md:text-lg lg:text-xl w-full md:max-w-[740px] lg:w-[610px] mt-3'>
          Over 100 services for your home and garden! 7 days-a-week availability,
          trained specialists, instant booking, all managed online.
        </p>
      </div>
      <div className='relative md:static  mt-10 md:mt-0 '>
        <Image
          src="/images/gardensetele.png"
          alt=''
          width={600}
          height={603}
          className='w-full '
        />
      </div>
    </div>
    
  </div>
   

  )
}

export default ServicesFilter