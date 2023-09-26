import { AboutUs, Container, Header, MainHeading, OurMission } from '@/components/imports'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <>   
          <Header black/>
          <Container className="py-20 flex flex-col items-center">
               <MainHeading>Who we are?</MainHeading>
               <p className='mt-4 text-center max-w-[800px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum nibh tellus molestie nunc non blandit massa enim. </p>
               <Link href="#" className={`border p-1 mt-8 px-8 border-black bg-black !text-white `}>Find Us</Link>
               <p className='mt-3 text-center'>Fint out if our franchisees cover your area.</p>
          </Container>
          <AboutUs/>
          <OurMission/>
          <Container className="grid md:grid-cols-2 items-center ">
               <div>
                    <MainHeading className="md:!text-left mb-4 !text-3xl">Our First Brand</MainHeading>
                    <p className="text-center md:text-left">Our first brand was established in the year of 2023. Fusing modern technology with quality customer care, it is tailored to meet your home or office cleaning needs from start to finish. Find out more at the Home & Garden Masters website.</p>
               </div>
               <div className='md:p-10'>
                    <Image src="/images/3d-forest.png" alt="" width={666} height={666}/>
               </div>
          </Container>
         
    </>
  )
}

export default About