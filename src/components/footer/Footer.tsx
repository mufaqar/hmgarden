import React from 'react'
import { Container, MainHeading } from '../imports'
import Link from 'next/link'
import { BsEnvelope } from 'react-icons/bs'
import {  AiFillFacebook, AiFillTwitterCircle } from 'react-icons/ai'
import { BiMessageDetail } from 'react-icons/bi'



const Footer = () => {
  return (
     <footer className='my-16 mb-6'>
        <Container className="flex flex-col items-center">
          <MainHeading>Ready to book with us?</MainHeading>
          <div className="flex item-center justify-center my-8 gap-3">
           
            <Link href="/get-a-quote" className={`border p-2 px-7 rounded-[6px] border-black bg-black !text-white `}>Request a Quote</Link>
          </div>
          <div className='border border-black max-w-[450px] w-full flex item-center overflow-hidden pl-2 rounded-full'>
            <input type="text" className="outline-none w-full border-none placeholder:text-sm text-sm text-gray-500 placeholder:font-light p-2" placeholder="Submit your proposal"/>
            <button className='bg-black text-white px-8 py-2 rounded-full'>Submit</button>
          </div>
          <ul className='flex gap-3 md:gap-8 mt-20 mb-10'>
               {
                    navLinks.map(({name,link}:INavLinks,i:number)=>(
                         <li key={i}><Link href={link}>{name}</Link></li>
                    ))
               }
          </ul>
          <ul className='flex gap-3 md:gap-8 mb-12'>
               {
                    footerSocial.map(({icon,link}:IFooterSocial, i:number)=>(
                         <li key={i} className='shadow-md rounded-full text-gray-500 text-xl hover:text-black  p-3'><Link href={link} target='_blank'>{icon}</Link></li>
                    ))
               }
          </ul>
          <p className='text-center text-gray-400'>Design with love by Home & Garden Masters © 2023. All right reserved</p>
        </Container>
      </footer>
  )
}

export default Footer



interface INavLinks{
     name:string,
     link:string
}

interface IFooterSocial {
     icon: any,
     link: string
}


const navLinks = [
     {
          name: "Service",
          link: "/services"
     },
     {
          name: "Support",
          link: "/get-a-quote"
     },
     {
          name: "Company",
          link: "/about"
     },
    
     {
          name: "Contact Us",
          link: "/contact"
     },
]

const footerSocial = [
     {
          icon: <BsEnvelope/>,
          link: "mailto:homeandgardenmasters@gmail.com"
     },
     {
          icon: <BiMessageDetail/>,
          link: "/get-a-quote"
     },
    
     {
          icon: <AiFillFacebook/>,
          link: "https://www.facebook.com/profile.php?id=61551956996609"
     },
     {
          icon: <AiFillTwitterCircle/>,
          link: "https://twitter.com"
     }
]