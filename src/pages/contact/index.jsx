import { CategoriesList, Container, Header, MainHeading } from '@/components/imports'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <>
      <Header black />
      <Container className="py-20 flex flex-col items-center">
        <MainHeading>Who we are?</MainHeading>
        <p className='mt-4 text-center max-w-[800px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum nibh tellus molestie nunc non blandit massa enim. </p>
        <Link href="#" className={`border p-1 mt-8 px-8 border-black bg-black !text-white `}>Find Us</Link>
        <p className='mt-3 text-center'>Fint out if our franchisees cover your area.</p>
      </Container>
      <section className='bg-black'>
        <div className='container mx-auto px-4 items-center justify-center py-32'>
          <div className='w-full border text-white flex flex-col md:flex-row items-center text-center justify-center mx-auto gap-10 border-none'>
            <div className='lg:w-[396px] w-full flex flex-col items-center justify-center border border-none'>
              <Image src="/images/Group.svg" alt="" width={410} height={690} className='w-[87px]  py-3' />
              <div>
                <h4 className='text-[24px] font-[400]'>Get a quote</h4>
                <p className='text-[16px] font-[400]'>You will be redirected to our Help Centre to get your quote</p>
              </div>
            </div>
            <div className='lg:w-[440px] w-full flex flex-col items-center justify-center mt-5 lg:mt-0 border border-none'>
              <Image src="/images/Group (3).svg" alt="" width={410} height={690} className='w-[87px]  py-3' />
              <div>
                <h4 className='text-[24px] font-[400]'>Your Bookings</h4>
                <p className='text-[16px] font-[400]'>You will be redirected to our Help Centre to get information on how to easily manage your bookings</p>
              </div>
            </div>
          </div>
          <div className='w-full border text-white flex flex-col md:flex-row items-center text-center justify-center mx-auto gap-10 border-none mt-14'>
            <div className='lg:w-[440px] w-full flex flex-col items-center justify-center mt-5 lg:mt-0 border border-none'>
              <Image src="/images/Group (2).svg" alt="" width={410} height={690} className='w-[87px]  py-3' />
              <div>
                <h4 className='text-[24px] font-[400]'>Business Clients</h4>
                <p className='text-[16px] font-[400]'>Request a free quote callback</p>
              </div>
            </div>
            <div className='lg:w-[440px] w-full flex flex-col items-center justify-center mt-6 lg:mt-0 border border-none'>
              <Image src="/images/Group (1).svg" alt="" width={410} height={690} className='w-[87px] py-3 mt-5' />
              <div>
                <h4 className='text-[24px] font-[400]'>Join The Team</h4>
                <p className='text-[16px] font-[400]'>Become a part of the Fantastic team</p>
              </div>
            </div>
            <div className='lg:w-[440px] w-full flex flex-col items-center justify-center mt-5 lg:mt-0 border border-none'>
              <Image src="/images/Vector (3).svg" alt="" width={410} height={690} className='w-[87px]  py-3' />
              <div>
                <h4 className='text-[24px] font-[400]'>PR & Marketing Partnerships</h4>
                <p className='text-[16px] font-[400]'>Contact us about partnership options</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CategoriesList />

    </>
  )
}

export default About