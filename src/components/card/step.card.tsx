import Image from 'next/image'
import React from 'react'

const StepCard = ({ data, id }: any) => {
     return (
          <div className='flex items-center flex-col'>
               {data?.icon && <figure className=' h-[80px]'><Image src={data.icon} alt={data.title} width={80} height={80} /></figure>}
               <div className='flex gap-2 mt-12'>
                    <h3 className='text-gray-400 text-6xl font-semibold'>0{id + 1} </h3>
                    <div>
                    <h4 className='text-white text-4xl pt-8 min-h-[115px] drop-shadow-lg'>{data.title}</h4>
                    <p className='text-white text-lg mt-7'>{data.content}</p>
                    </div>
               </div>
          </div>
     )
}

export default StepCard