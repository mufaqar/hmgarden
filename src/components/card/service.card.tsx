import Image from 'next/image'
import React from 'react'

const ServiceCard = ({data}:any) => {
  return (
     <div className="relative w-[344px]">
          <Image src={data.image} alt={data.title} width={344} height={187} />
          <div className='absolute hover:h-full bottom-0 bg-black/40 text-xl flex flex-col justify-center items-center p-3 text-white w-full transition-all duration-500 ease-in-out text-center'>{data.title}</div>
     </div>
  )
}

export default ServiceCard