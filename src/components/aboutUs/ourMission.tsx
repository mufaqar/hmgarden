import React from 'react'
import { Container, MainHeading } from '../imports'

const OurMission = () => {
  return (
    <Container className="flex flex-col items-center my-20">
          <MainHeading>Our mission</MainHeading>
          <p className='mt-4 text-center max-w-[900px]'>Fully Trained and Professional Teams: Our teams are comprised of highly skilled and trained professionals who are passionate about what they do. They bring expertise, creativity, and professionalism to every project, ensuring your satisfaction.</p>
          <div className='grid grid-cols-4 w-full mt-12'>
               <div className=' flex justify-center flex-col items-center'>
                    <button className='text-white p-2 rounded-full bg-[#24AA02] text-xl md:text-3xl md:w-[65px] z-[1] md:h-[65px] w-[50px] h-[50px]'>01</button>
                    <div className='pt-[1px] w-full border-b-[2px] border-[#24AA02] border-dashed -mt-[26px] md:-mt-[34px]'/>
               </div>
               <div className=' flex flex-col items-center justify-center'>
                    <button className='border border-[#24AA02] bg-white p-2 rounded-full text-[#24AA02] z-[1] text-xl md:text-3xl md:w-[65px] md:h-[65px] w-[50px] h-[50px]'>02</button>
                    <div className='pt-[1px] w-full border-b-[2px] border-[#24AA02] border-dashed -mt-[26px] md:-mt-[34px]'/>
               </div>
               <div className=' flex justify-center flex-col items-center'>
                    <button className='border border-[#24AA02] bg-white p-2 rounded-full text-[#24AA02] z-[1] text-xl md:text-3xl md:w-[65px] md:h-[65px] w-[50px] h-[50px]'>03</button>
                    <div className='pt-[1px] w-full border-b-[2px] border-[#24AA02] border-dashed -mt-[26px] md:-mt-[34px]'/>  
               </div>
               <div className=' flex justify-center flex-col items-center'>
                    <button className='border border-[#24AA02] bg-white p-2 rounded-full text-[#24AA02] z-[1] text-xl md:text-3xl md:w-[65px] md:h-[65px] w-[50px] h-[50px]'>04</button>
                    <div className='pt-[1px] w-full border-b-[2px] border-[#24AA02] border-dashed -mt-[26px] md:-mt-[34px]'/>
               </div>
          </div>
    </Container>
  )
}

export default OurMission