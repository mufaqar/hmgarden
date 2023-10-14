import Link from 'next/link'
import React, { useState } from 'react'
import { Container } from '../imports'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Image from 'next/image';
import Head from 'next/head';


const Header = ({ white }: any) => {
     const [isMobile, setIsMobile] = useState<boolean>(false)
     return (

          <>
               

               <header className={`mt-6 z-50 ${white ? 'text-white' : 'text-black'}`}>
                    <Container className="flex justify-between items-center">
                         {/* logo  */}
                         <div className='z-40 '>
                              <Link href="/"><Image src="/images/logo.png" className='absolute lg:left-2 xl:left-auto top-2 bg-white p-3 rounded-2xl' alt="Logo" width={128} height={114} /></Link>
                         </div>

                         {/* hamburger for mobile nav  */}
                         <div className={`lg:hidden z-50 ${isMobile && 'text-white'}`}
                              onClick={() => setIsMobile(!isMobile)}
                         >
                              {isMobile ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
                         </div>

                         {/* nav  */}
                         <nav className={`flex flex-col lg:flex-row z-40 transition-all duration-300 ease-in-out -top-[100%] right-0 left-0 lg:items-center lg:gap-4 xl:gap-8 absolute lg:relative  lg:text-sm xl:text-base
                         ${isMobile ? 'bg-black text-white p-10 !top-0' : ''}
                    `}>
                              <Link href="/" className='hover:underline font-light'>Home</Link>
                              <Link href="/services" className='hover:underline font-light'>Services</Link>
                              <Link href="/about" className='hover:underline font-light'>About</Link>
                              <Link href="/contact" className='hover:underline font-light'>Contact</Link>                            
                            
                              <div className={`lg:hidden flex flex-wrap gap-3`}>
                                   <Link href="tel:07468602556" className={`border p-2 px-5 border-white  !text-white `}>Call Us 07468602556</Link>
                                   <Link href="mailto:homeandgardenmasters@gmail.com" className={`border p-1 px-2  ${white ? 'border-white !text-white' : 'border-black'}`}>homeandgardenmasters@gmail.com</Link>
                                   <Link href="/get-a-quote" className={`border p-2 px-5 border-white bg-white text-black`}>Get in Touch</Link>
                              </div>
                         </nav>

                         {/* buttons  */}
                         <div className='font-light z-40 lg:flex gap-2 hidden'>
                              <Link href="tel:07468602556" className={`lg:text-sm xl:text-base border p-1 px-2 bg-purple-900 text-white ${white ? 'border-white ' : 'border-black'}`}>Call Us 07468602556</Link>
                              <Link href="mailto:homeandgardenmasters@gmail.com" className={`lg:text-sm xl:text-base border p-1 px-2 bg-purple-900 text-white ${white ? 'border-white !text-white' : 'border-black'}`}>homeandgardenmasters@gmail.com</Link>
                              <Link href="/get-a-quote" className={`lg:text-sm xl:text-base  border p-1 px-2 ${white ? 'border-white bg-white text-black' : 'border-black bg-black !text-white'}`}>Get in Touch</Link>
                         </div>
                    </Container>
               </header>
          </>
     )
}

export default Header