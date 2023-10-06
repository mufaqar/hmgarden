import Image from 'next/image'
import React from 'react'
import mainImage from '../../../public/images/main.png'
import Link from 'next/link'
import { Container } from '../imports'
import { FiSearch } from 'react-icons/fi'


const BlogMain = ({data}:any) => {
     return (
          <main className='relative -mt-[58px] w-full bg-no-repeat bg-center bg-cover md:h-screen' style={{ backgroundImage: `url(${data.bg})` }}>
               {/* overlay  */}
               <div className='absolute inset-0 bg-black/50' />
               <Container className='grid md:grid-cols-2 gap-7 py-20 pt-28 md:py-0 md:pt-0 md:gap-20 text-white h-full z-10 relative items-center'>
                    <div>
                         <h2 className='text-[36px] font-semibold'>{data.title}</h2>
                         <p className='text-lg font-normal'>{data.content}</p>
                         <div className='max-w-[633px] w-full items-center bg-white px-4 mt-5 flex'>
                              <input type="text" placeholder='Get Advice' className='w-full p-4 text-gray-700 outline-none border-none'/>
                              <FiSearch className="text-gray-600 text-xl cursor-pointer hover:text-black"/>
                         </div>    
                    </div>
                    <div className='flex justify-center md:justify-end'>
                         <figure className='border border-white inline-block p-5'><Image src={data.image} alt="image" width={400} height={510} className=''/></figure>
                    </div>
               </Container>
          </main>
     )
}

export default BlogMain