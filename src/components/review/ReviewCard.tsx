import Image from 'next/image'
import React from 'react'
import {FaStar} from 'react-icons/fa'

const ReviewCard = ({data}:any) => {
  return (
    <div className='flex flex-col items-center'>
          <figure className='relative'>
               <Image src={data.avatar} alt={data.name} width={114} height={114} className='z-10 shadow relative'/>
               <div className='w-[114px] absolute -top-5 -left-5 h-[114px] border border-white'/>
          </figure>
        
          <p className='text-center mt-4 text-gray-400 font-light min-h-[240px]'>{data.review}</p>
          <h6 className='mt-10 font-semibold'>{data.name}</h6>
          <h5 className='text-sm text-center max-w-[300px]'>{data.title}</h5>
          <div className='flex item-center text-xl mt-2 gap-2 text-[#]'>
               {
                    [1,2,3,4,5].map((_,id)=>(
                        <FaStar key={id} color="#FFC700"/> 
                    ))
               }
          </div>
    </div>
  )
}

export default ReviewCard