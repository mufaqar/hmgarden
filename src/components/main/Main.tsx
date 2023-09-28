import Image from 'next/image'
import React from 'react'
import mainImage from '../../../public/images/main.png'
import Link from 'next/link'
import { Container } from '../imports'

const Main = () => {
     return (
          <main className='relative -mt-[58px] w-full bg-no-repeat bg-center bg-cover h-screen' style={{ backgroundImage: `url(${mainImage.src})` }}>
               {/* overlay  */}
               <div className='absolute inset-0 bg-black/50' />
               <Container className='flex flex-col justify-center text-white h-full z-10 relative items-center'>
                    <h6 className='uppercase font-medium text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center'>Home & Garden Masters</h6>
                    <p className='max-w-[900px] mt-4 text-center md:text-lg font-light'>Elevating Your Living Spaces to New Heights</p>
                    <Link href="/get-a-quote" className={`border p-1.5 px-8 rounded-md mt-10 font-light bg-white/20`}>Get a Free Qoute </Link>
               </Container>
          </main>
     )
}

export default Main