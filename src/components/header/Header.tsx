import Link from 'next/link'
import React, { useState } from 'react'
import { Container } from '../imports'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';


const Header = ({ white }: any) => {
     const [isMobile, setIsMobile] = useState<boolean>(false)
     return (
          <header className={`mt-6 z-50 ${white ? 'text-white' : 'text-black'}`}>
               <Container className="flex justify-between items-center">
                    {/* logo  */}
                    <div className='z-40'>
                         <Link href="#"><h5 className={` font-semibold`}>Hm Garden</h5></Link>
                    </div>

                    {/* hamburger for mobile nav  */}
                    <div className={`lg:hidden z-50 ${isMobile && 'text-white'}`} 
                         onClick={()=>setIsMobile(!isMobile)}
                    >
                         { isMobile ? <AiOutlineClose size={24}/> : <AiOutlineMenu size={24}/>}
                    </div>
                    
                    {/* nav  */}
                    <nav className={`flex flex-col lg:flex-row z-40 transition-all duration-300 ease-in-out -top-[100%] right-0 left-0 lg:items-center gap-8 absolute lg:relative 
                         ${isMobile ? 'bg-black text-white p-10 !top-0' : ''}
                    `}>
                         <Link href="/" className='hover:underline font-light'>Home</Link>
                         <Link href="/services" className='hover:underline font-light'>Services</Link>
                         <Link href="/about" className='hover:underline font-light'>About</Link>
                         <Link href="/contact" className='hover:underline font-light'>Contact</Link>
                         <Link href="/blogs" className='hover:underline font-light'>Blog</Link>
                         <Link href="/privacy" className='hover:underline font-light'>Privacy</Link>
                         <div className={`lg:hidden flex gap-3`}>
                         <Link href="#" className={`border p-2 px-5 border-white !text-white `}>Call us</Link>
                         <Link href="#" className={`border p-2 px-5 border-white bg-white text-black`}>Get in Touch</Link>
                         </div>
                    </nav>

                    {/* buttons  */}
                    <div className='font-light z-40 lg:flex gap-4 hidden'>
                         <Link href="#" className={`border p-1 px-4 ${white ? 'border-white !text-white' : 'border-black' }`}>Call us</Link>
                         <Link href="#" className={`border p-1 px-4 ${white ? 'border-white bg-white text-black' : 'border-black bg-black !text-white' }`}>Get in Touch</Link>
                    </div>
               </Container>
          </header>
     )
}

export default Header