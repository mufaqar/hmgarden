import React from 'react'
import { Container, MainHeading } from '../imports'
import Image from 'next/image'

const ServiceArea = ({ black }: any) => {
     return (
          <section className={`py-20 md:mb-8 px-5 ${black ? 'bg-black text-white' : 'bg-white text-black'} `}>
               <Container>
                    <MainHeading>Always at your service, right where you are</MainHeading>
                    <p className='mt-4 text-center font-light md:text-lg'>We won’t let your cleaning and maintenance problems get to you. Besides providing quality home services in London, the skilled H&M Garden Masters can also tidy up your garden or clean your home or office anywhere in South East and North West England. Here are some of the main locations we serve:</p>
                    <div className='flex flex-col md:flex-row justify-between md:mt-28 md:items-center lg:items-start'>
                         <ul className='flex w-1/2 md:w-1/6 flex-col gap-5 list-disc pt-16 '>
                              {
                                   list1.map((item:string,i:number)=>(
                                        <li className='whitespace-nowrap' key={i}>{item}</li>
                                   ))
                              }
                         </ul>
                         <figure className='flex-1'><img src={black ? "/images/layermapWhite.png" : "/images/layermap.png" } alt="" className='w-full mt-10 md:mt-0'/></figure>
                         <div className='w-1/2 md:w-1/6 flex md:justify-end'>
                         <ul className='flex flex-col gap-5 list-disc pt-16'>
                              {
                                   list2.map((item:string,i:number)=>(
                                        <li key={i} className='whitespace-nowrap'>{item}</li>
                                   ))
                              }
                         </ul>
                         </div>
                    </div>
               </Container>
          </section>
     )
}

export default ServiceArea


const list1 = [
     "Grays",
     "Tilbury",
     "Basildon",
     "Stanford-le-Hope",
     "Chadwell St Mary",
     "South Ockendon",
     "Rainham"
]

const list2 = [
     "Dagenham",
     "Hornchurch",
     "Romford",
     "Upminster",
     "Brentwood",
     "East London",
     "Dartford",
     "Harlow" 
]
