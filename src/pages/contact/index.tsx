import { Container, Header } from '@/components/imports'
import Link from 'next/link'
import React from 'react'
import mainImage from '../../../public/images/contact.png'

const ContactUs = () => {
  return (
    <>
       <Header white />
       <main className='relative -mt-[58px] w-full bg-no-repeat bg-center bg-cover py-28' style={{ backgroundImage: `url(${mainImage.src})` }}>
               {/* overlay  */}
               <div className='absolute inset-0 bg-black/50' />
               <Container className='flex flex-col justify-center text-white h-full z-10 relative items-center'>
                    <h6 className='uppercase font-medium text-2xl max-w-[600px] md:text-4xl text-center'>book a service for your home, office or garden.</h6>
                    <p className='max-w-[900px] mt-4 text-center md:text-lg font-light'>in less then 30 mints</p>
                    <div className="grid md:grid-cols-2 w-full lg:px-20 mt-20">
                         <div>
                              <div className='flex flex-col'>
                                   <label className='capitalize'>Name</label>
                                   <input type="text" className='p-2 mt-1 rounded-md px-4 placeholder:font-light text-gray-600 outline-none' placeholder='Enter your name'/>
                              </div>
                              <div className='flex flex-col mt-3'>
                                   <label className='capitalize'>What kind of property is it?</label>
                                   <div className='grid grid-cols-3 gap-3'>
                                        <input type="text" className='p-2 mt-1 rounded-md px-4 placeholder:font-light text-gray-600 outline-none' placeholder='Residential '/>
                                        <input type="text" className='p-2 mt-1 rounded-md px-4 placeholder:font-light text-gray-600 outline-none' placeholder='Public'/>
                                        <input type="text" className='p-2 mt-1 flex-1 rounded-md px-4 placeholder:font-light text-gray-600 outline-none' placeholder='Office or Commercial'/>
                                   </div>
                              </div>
                              <div className='flex flex-col mt-3'>
                                   <label className='capitalize'>How is the access to the Garden/Property? </label>
                                   <div className='grid grid-cols-3 gap-3'>
                                        <input type="text" className='p-2 mt-1 rounded-md px-4 placeholder:font-light text-gray-600 outline-none' placeholder='External Access'/>
                                        <input type="text" className='p-2 mt-1 rounded-md px-4 placeholder:font-light text-gray-600 outline-none' placeholder='Through House'/>
                                        <input type="text" className='p-2 mt-1 flex-1 rounded-md px-4 placeholder:font-light text-gray-600 outline-none' placeholder='Through Garage'/>
                                   </div>
                              </div>
                              
                                   
                              <div className='grid grid-cols-2 gap-3 mt-3'>
                                   <div>
                                   <label className='capitalize'>work to begin? </label>
                                   <select className='p-2 mt-1 rounded-md px-4 w-full font-light text-gray-400 outline-none'>
                                        <option value="">ASAP</option>
                                   </select>
                                   </div>
                                   <div>
                                   <label className='capitalize'>work to begin? </label>
                                   <input type="text" className='p-2 mt-1 rounded-md px-4 w-full placeholder:font-light text-gray-600 outline-none' placeholder='External Access'/>
                                   </div>
                              </div>
                              
                         </div>
                         <div></div>
                    </div>
               </Container>
          </main>
    </>
  )
}

export default ContactUs