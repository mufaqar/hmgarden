import React from 'react'
import Link from 'next/link';
import { MainHeading } from '../imports';
function linkpage() {
  const Linkpage = [
    {
      text: 'Gardening',
      href: '/services',
      imageSrc: '/images/Vector.svg',
    },
    {
      text: 'Landscaping',
      href: '/about',
      imageSrc: '/images/Icon.svg',
    },
    {
      text: 'Fencing',
      href: '/services',
      imageSrc: '/images/Vector (1).svg',
    },
     {
      text: 'Waste Removal',
      href: '/services',
      imageSrc: '/images/s.svg',
    },
    {
      text: 'Interior/Exterior Tiling  and Painting',
      href: '/services',
      imageSrc: '/images/j.svg',
    },
    {
      text: 'Pressure Washing',
      href: '/services',
      imageSrc: '/images/j.svg',
    }

    
  ];


  return (
    <section className=' w-full'>
      <main className='container mx-auto px-4 mt-10 '>
        <div className='pt-20 flex justify-center text-center'>
          <MainHeading className="max-w-[700px] mb-6">More H&M Garden Masters Services for you:</MainHeading>
        </div>

        <nav className="lg:px-20 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-5 max-w-7xl mx-auto">
          {Linkpage.map((link, index) => (
            <div key={index} className="border p-4 flex flex-col md:flex-row items-center gap-3 bg-white rounded-md">
              <img src={link.imageSrc} alt={link.text} className="w-6 h-6" />
              <Link href={link.href} className="text-[#63788F]">
                {link.text}
              </Link>
            </div>
          ))}
        </nav>

      </main>
    </section>

  )
}

export default linkpage