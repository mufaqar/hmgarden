import { AboutUs, Container, Header, MainHeading, OurMission } from '@/components/imports'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <>   
          <Header black/>
          <Container className="py-20 flex flex-col items-center">
               <MainHeading>Why Choose Us?</MainHeading>
               <p className='mt-4 text-center max-w-[800px]'>6 Years of Proven Experience: With six years of dedicated experience, we have a proven track record of delivering high-quality results. Our extensive experience enables us to tackle a wide range of projects with confidence and expertise.</p>
             
               <p className='mt-4 text-center max-w-[800px]'>Competitive and Reliable Pricing: Home&Garden Masters offers pricing that not only fits your budget but also provides excellent value for your investment. Our transparent and competitive rates ensure that you receive the best services without breaking the bank.</p>
          
               <Link href="/get-a-qoute" className={`border p-1 mt-8 px-8 border-black bg-black !text-white `}>Contact Us</Link>
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