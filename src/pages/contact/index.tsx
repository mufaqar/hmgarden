import { Container, Header } from '@/components/imports'
import Link from 'next/link'
import React from 'react'
import mainImage from '../../../public/images/contact.png'
import {IoIosArrowDown} from 'react-icons/io'

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
                         <div className="grid md:grid-cols-2 w-full lg:px-20 mt-20 gap-3 md:gap-12">
                              <div>
                                   <div className='flex flex-col'>
                                        <label className='capitalize text-sm'>Name</label>
                                        <input type="text" className='p-2 mt-1 rounded-sm px-4 placeholder:font-light text-gray-600 outline-none' placeholder='Enter your name' />
                                   </div>
                                   <div className='flex flex-col mt-3'>
                                        <label className='capitalize text-sm'>What kind of property is it?</label>
                                        <div className='grid grid-cols-3 gap-3'>
                                             <input type="text" className='p-2 mt-1 rounded-sm px-4 placeholder:font-light text-gray-600 outline-none' placeholder='Residential ' />
                                             <input type="text" className='p-2 mt-1 rounded-sm px-4 placeholder:font-light text-gray-600 outline-none' placeholder='Public' />
                                             <input type="text" className='p-2 mt-1 flex-1 rounded-sm px-4 placeholder:font-light text-gray-600 outline-none' placeholder='Office or Commercial' />
                                        </div>
                                   </div>
                                   <div className='flex flex-col mt-3'>
                                        <label className='capitalize text-sm'>How is the access to the Garden/Property? </label>
                                        <div className='grid grid-cols-3 gap-3'>
                                             <input type="text" className='p-2 mt-1 rounded-sm px-4 placeholder:font-light text-gray-600 outline-none' placeholder='External Access' />
                                             <input type="text" className='p-2 mt-1 rounded-sm px-4 placeholder:font-light text-gray-600 outline-none' placeholder='Through House' />
                                             <input type="text" className='p-2 mt-1 flex-1 rounded-sm px-4 placeholder:font-light text-gray-600 outline-none' placeholder='Through Garage' />
                                        </div>
                                   </div>


                                   <div className='grid grid-cols-2 gap-3 mt-3'>
                                        <div>
                                             <label className='capitalize text-sm'>work to begin? </label>
                                             <div className="relative">
                                                  <select className='p-2 mt-1 appearance-none rounded-sm px-4 _select w-full font-light text-gray-400 outline-none'>
                                                       <option value="">ASAP</option>
                                                       <option value="">ASAP</option>
                                                       <option value="">ASAP</option>
                                                  </select>
                                                  <IoIosArrowDown className="text-2xl absolute right-3 top-[13px] text-black"/>
                                             </div>
                                        </div>
                                        <div>
                                             <label className='capitalize text-sm'>pictures to give us a better idea  </label>
                                             <input type="text" className='p-2 mt-1 rounded-sm px-4 w-full placeholder:font-light text-gray-600 outline-none' placeholder='Upload Picture' />
                                             <p className='text-end text-xs mt-1 font-light w-full'>Optional</p>
                                        </div>
                                   </div>

                                   <label className='capitalize text-sm'>How is the access to the Garden/Property? </label>
                                   <textarea className='p-2 mt-1 rounded-sm px-4 w-full placeholder:font-light text-gray-600 outline-none' rows={6}></textarea>

                              </div>
                              <div className='flex flex-col justify-between items-end'>
                                   <div className='w-full '>
                                        <div className='flex flex-col'>
                                             <label className='capitalize text-sm'>E-mail</label>
                                             <input type="text" className='p-2 mt-1 rounded-sm px-4 placeholder:font-light text-gray-600 outline-none' placeholder='Enter your E-mail' />
                                        </div>
                                        <div className='flex flex-col mt-3'>
                                             <label className='capitalize text-sm'>What Kind of services do you need?</label>
                                             <div className="relative">
                                             <select className='p-2 mt-1 appearance-none rounded-sm px-4 _select w-full font-light text-gray-400 outline-none'>
                                                  <option value="">OUR SERVICES</option>
                                                  <option value="">ASAP</option>
                                                  <option value="">ASAP</option>
                                             </select>
                                             <IoIosArrowDown className="text-2xl absolute right-3 top-[13px] text-black"/>
                                             </div>
                                        </div>
                                        <div className='flex flex-col mt-3'>
                                             <label className='capitalize text-sm'>Add your payment range</label>
                                             <input type="text" className='p-2 mt-1 rounded-sm px-4 placeholder:font-light text-gray-600 outline-none' placeholder='$343 - $425' />
                                        </div>
                                        <div className='grid grid-cols-2 gap-3 mt-3'>
                                             <div>
                                                  <label className='capitalize text-sm'>Nr, Street </label>
                                                  <input type="text" className='p-2 mt-1 rounded-sm px-4 w-full placeholder:font-light text-gray-600 outline-none' placeholder='Enter Nr, Street' />

                                             </div>
                                             <div>
                                                  <label className='capitalize text-sm'> Post Code </label>
                                                  <input type="text" className='p-2 mt-1 rounded-sm px-4 w-full placeholder:font-light text-gray-600 outline-none' placeholder='Enter Post Code' />
                                             </div>
                                        </div>
                                   </div>
                                   <button className={`border hover:bg-black mt-10 md:mt-0 cursor-pointer hover:text-white p-1.5 px-8 border-white bg-white text-black `}>Submit</button>
                              </div>
                         </div>
                    </Container>
               </main>
          </>
     )
}

export default ContactUs