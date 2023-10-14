import React from 'react'
import { Container, MainHeading } from '../imports'
import Image from 'next/image'

const AboutUs = () => {
     return (
          <section className='bg-black text-white mt-2 py-20 pb-16 '>
               <Container className="max-w-[960px]">
                    <MainHeading>About us</MainHeading>
                    <p className='text-2xl text-center py-5'> Home&Garden Masters: Transforming properties with 6 Years of Expertise</p>
                    <p className='text-xl leading-8 text-center py-5'>Home&Garden Masters, situated in the charming town of Grays Essex, brings six years of dedicated experience to the forefront of the home and garden improvement industry. We are your go-to specialists in landscaping, gardening, fencing, waste removal, tiling, painting, and pressure washing services.</p>
                             
                   
               </Container>
          </section>
     )
}

export default AboutUs