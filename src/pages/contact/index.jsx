import {  CategoriesList, Container, Header, MainHeading } from '@/components/imports'
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

          <CategoriesList/>
         
    </>
  )
}

export default About