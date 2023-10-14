import Image from 'next/image'
import React from 'react'
import mainImage from '../../../public/images/main.jpg'
import Link from 'next/link'
import { Container } from '../imports'

const Main = () => {
     return (
          <main className='relative -mt-[58px]  w-full bg-no-repeat bg-center bg-cover h-screen' style={{ backgroundImage: `url(${mainImage.src})` }}>
               {/* overlay  */}
               <div className='absolute inset-0 bg-black/50' />
               <Container className='flex flex-col justify-center text-white h-full z-10 relative items-center pt-[150px]'>
                    <h6 className='uppercase font-medium text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center'>Home & Garden Masters</h6>
                    <p className='max-w-[900px] mt-4 text-center md:text-lg font-light'>Elevating Your Living Spaces to New Heights</p>
                    <p className='max-w-[900px] mt-4 text-center md:text-lg font-light'>At Home&Garden Masters, we are committed to enhancing your property's beauty and functionality. With a wealth of experience and a passion for excellence, we invite you to embark on a journey of transformation with us.</p>
                    <Link href="/get-a-quote" className={`border bg-purple-900 p-1.5 px-8 rounded-md mt-10 font-light bg-white/20`}>Get Prices and Availibity</Link>
               </Container>
          </main>
     )
}

export default Main