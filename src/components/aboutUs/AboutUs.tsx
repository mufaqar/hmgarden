import React from 'react'
import { Container, MainHeading } from '../imports'
import Image from 'next/image'

const AboutUs = () => {
     return (
          <section className='bg-black text-white py-12 pb-16'>
               <Container>
                    <MainHeading>About us</MainHeading>
                    <p className='text-2xl text-center py-5'> Home&Garden Masters: Transforming properties with 6 Years of Expertise</p>
                    <p className='text-xl leading-8 text-center py-5'>Home&Garden Masters, situated in the charming town of Grays Essex, brings six years of dedicated experience to the forefront of the home and garden improvement industry. We are your go-to specialists in landscaping, gardening, fencing, waste removal, tiling, painting, and pressure washing services.</p>
                             
                    <div className="grid md:grid-cols-2 gap-8 mt-10">
                         <div className='text-center px-10'>
                              <figure className='relative mt-10'>
                                   <Image src="/images/about1.png" alt={`image`} width={590} height={664} className='z-10 shadow relative' />
                                   <div className=' absolute -top-5 -left-5 h-full w-full border border-white' />
                              </figure>
                         </div>
                         <div className='px-10'>
                              <figure className='relative mt-10'>
                                   <Image src="/images/about2.png" alt={`image`} width={590} height={664} className='z-10 shadow relative' />
                                   <div className='w-full absolute -top-5 -left-5 h-full border border-white' />
                              </figure>
                         </div>
                    </div>
               </Container>
          </section>
     )
}

export default AboutUs