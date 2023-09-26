import React from 'react'
import { Container, MainHeading } from '../imports'
import Image from 'next/image'

const AboutUs = () => {
     return (
          <section className='bg-black text-white py-12 pb-16'>
               <Container>
                    <MainHeading>About us</MainHeading>
                    <p className='text-2xl text-center'>The story behind the numbers</p>
                    <div className="grid md:grid-cols-2 gap-8 mt-10">
                         <div className='text-center px-10'>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum nibh tellus molestie nunc non blandit massa enim. Arcu ac tortor dignissim convallis aenean et tortor. Ut porttitor leo a diam sollicitudin tempor id. Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis. Ut porttitor leo a diam. Magnis dis parturient montes nascetur ridiculus</p>
                              <figure className='relative mt-10'>
                                   <Image src="/images/about1.png" alt={`image`} width={590} height={664} className='z-10 shadow relative' />
                                   <div className=' absolute -top-5 -left-5 h-full w-full border border-white' />
                              </figure>
                         </div>
                         <div className='px-10'>
                         <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum nibh tellus molestie nunc non blandit massa enim. Arcu ac tortor dignissim convallis aenean et tortor. Ut porttitor leo a diam sollicitudin tempor id. Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis. Ut porttitor leo a diam. Magnis dis parturient montes nascetur ridiculus</p>
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