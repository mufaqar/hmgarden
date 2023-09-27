import React from 'react'
import Image from 'next/image';

const boxData = [
    {
      id: 1,
      imageSrc: '/images/Rectangle 63 (11).svg',
      name: 'John Doe',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      imageSrc: '/images/Rectangle 63 (10).svg',
      name: 'Jane Smith',
      paragraph: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 3,
      imageSrc: '/images/Rectangle 63 (9).svg',
      name: 'Alice Johnson',
      paragraph: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    },
    {
        id: 4,
        imageSrc: '/images/Rectangle 63 (8).svg',
        name: 'Alice Johnson',
        paragraph: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      },
      {
        id: 5,
        imageSrc: '/images/Rectangle 63 (7).svg',
        name: 'Alice Johnson',
        paragraph: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      },
      {
        id: 6,
        imageSrc: '/images/Rectangle 63 (6).svg',
        name: 'Alice Johnson',
        paragraph: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      },
      {
        id: 7,
        imageSrc: '/images/Rectangle 63 (5).svg',
        name: 'Alice Johnson',
        paragraph: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      },
      {
        id: 8,
        imageSrc: '/images/Rectangle 63 (4).svg',
        name: 'Alice Johnson',
        paragraph: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      },
      {
        id: 9,
        imageSrc: '/images/Rectangle 63 (3).svg',
        name: 'Alice Johnson',
        paragraph: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      },
      {
        id: 10,
        imageSrc: '/images/Rectangle 63 (2).svg',
        name: 'Alice Johnson',
        paragraph: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      },
      {
        id: 11,
        imageSrc: '/images/Rectangle 63 (1).svg',
        name: 'Alice Johnson',
        paragraph: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      },
      {
        id: 12,
        imageSrc: '/images/Rectangle 63.svg',
        name: 'Alice Johnson',
        paragraph: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      },
   
  ];
function blog2() {
  return (
    <div className='container mx-auto px-4 mt-10'>
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {boxData.map((item) => (
        <div key={item.id} className='bg-white p-4 shadow-md'>
          <Image src={item.imageSrc} alt={`Image ${item.id}`} width={300} height={200} className='w-full' />
          <h4 className='text-lg font-semibold mt-2'>{item.name}</h4>
          <p className='mt-2'>{item.paragraph}</p>
        </div>
      ))}
    </div>
    </div>
  )
}

export default blog2