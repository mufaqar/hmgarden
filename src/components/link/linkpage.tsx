import React from 'react'
import Link from 'next/link';
import { MainHeading } from '../imports';
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