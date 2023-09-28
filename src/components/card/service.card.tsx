import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ServiceCard = ({ data }: any) => {
  return (
    <div className="relative w-full serviceCard-shadow group">
      <Image src={data.image} alt={data.title} width={344} height={187} className='w-full ' />
      <div className='absolute group-hover:h-full  bottom-0 bg-black/40  flex flex-col justify-center items-center p-3 text-white w-full transition-all duration-500 ease-in-out text-center'>  
        <Link href={data.link} className='text-xl'> {data.title}</Link>
        <p className='text-base hidden group-hover:block  '>{data.desc}</p>
      </div>

    </div>
  )
}

export default ServiceCard