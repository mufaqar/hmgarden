import React from 'react'
import { TbGardenCart } from 'react-icons/tb'
import Link from 'next/link';
function linkpage() {
  const Linkpage = [
    {
      text: 'Gardening',
      href: '/',
      imageSrc: '/images/Vector.svg', 
    },
    {
      text: 'Trades and odd jobs',
      href: '/about',
      imageSrc: '/images/Icon.svg', 
    },
    {
      text: 'Removals & Storage',
      href: '/contact',
      imageSrc: '/images/Vector (1).svg', 
    },
    {
      text: 'Pest Control',
      href: '/contact',
      imageSrc: '/images/Icon (1).svg', 
    },
    {
      text: 'Waste Removal',
      href: '/contact',
      imageSrc: '/images/s.svg', 
    },
    {
      text: 'Appliance Rapair',
      href: '/contact',
      imageSrc: '/images/j.svg', 
    },
    {
      text: 'Builders',
      href: '/contact',
      imageSrc: '/images/Vector (2).svg', 
    },
  ];
  
  
  return (
    <main className='container mx-auto px-4'>
      <div className='mx-auto items-center justify-center text-center lg:w-[700px] w-full'>
             <h2 className='text-[48px] font-[600] '>More H&M   Garden Masters Services for you:</h2>
       </div>

       <nav className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 items-center justify-center gap-4 mt-5  lg:w-[1200px] w-full">
  {Linkpage.map((link, index) => (
    <div key={index} className="border lg:w-[280px] w-full p-4 flex items-center gap-3">
      <img src={link.imageSrc} alt={link.text} className="w-6 h-6" />
      <Link href={link.href} className="text-[#63788F]">
        {link.text}
      </Link>
    </div>
  ))}
</nav>
 

    </main>
  )
}

export default linkpage